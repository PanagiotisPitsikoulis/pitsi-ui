#!/usr/bin/env bun
import { existsSync, mkdirSync, statSync, unlinkSync } from "fs"
import path from "path"
import { fileURLToPath } from "url"
import puppeteer, { Browser, Page } from "puppeteer"

// Get the directory of this script file
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Paths
const REGISTRY_PATH = path.join(__dirname, "..", "public", "r")
const REGISTRY_DIR = path.join(__dirname, "..", "registry", "new-york-v4")
const STYLE_NAME = "new-york-v4"

// Concurrency settings - optimized for speed
const BROWSER_CONCURRENCY = 3
const PAGE_CONCURRENCY = 3

// Parse command-line arguments
const FORCE_OVERRIDE = process.argv.includes("--force") || process.argv.includes("-f")
const VERBOSE = process.argv.includes("--verbose") || process.argv.includes("-v")
const BLOCKS_ONLY = process.argv.includes("--blocks-only") || process.argv.includes("-b")

// Progress tracking
let capturedCount = 0
let skippedCount = 0
let totalItems = 0

interface RegistryItemInfo {
  name: string
  sourcePath: string
  type: "block" | "example" | "ui"
}

interface FailedItem {
  item: RegistryItemInfo
  error: string
  attempt: number
}

// Track failed items for retry
const failedItems: FailedItem[] = []

// ----------------------------------------------------------------------------
// Get all registry items by scanning directories
// ----------------------------------------------------------------------------
async function getAllRegistryItems(): Promise<RegistryItemInfo[]> {
  const items: RegistryItemInfo[] = []
  const { readdir } = await import("fs/promises")

  async function scanDir(dir: string, type: "block" | "example" | "ui") {
    try {
      const entries = await readdir(dir, { withFileTypes: true })
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
          await scanDir(fullPath, type)
        } else if (entry.name.endsWith(".tsx") && !entry.name.startsWith("_")) {
          const itemName = entry.name.replace(".tsx", "")
          items.push({
            name: itemName,
            sourcePath: fullPath,
            type,
          })
        }
      }
    } catch {
      // Directory doesn't exist, skip
    }
  }

  // Scan blocks
  await scanDir(path.join(REGISTRY_DIR, "blocks"), "block")

  // Scan examples (demos) - only if not blocks-only mode
  if (!BLOCKS_ONLY) {
    await scanDir(path.join(REGISTRY_DIR, "examples"), "example")
  }

  return items
}

// ----------------------------------------------------------------------------
// Check if item needs recapture based on file modification times
// ----------------------------------------------------------------------------
function needsCapture(item: RegistryItemInfo): boolean {
  if (FORCE_OVERRIDE) return true

  const lightPath = path.join(
    REGISTRY_PATH,
    `styles/${STYLE_NAME}/${item.name}-light.webp`
  )
  const darkPath = path.join(
    REGISTRY_PATH,
    `styles/${STYLE_NAME}/${item.name}-dark.webp`
  )

  // If either screenshot doesn't exist, need to capture
  if (!existsSync(lightPath) || !existsSync(darkPath)) {
    return true
  }

  try {
    const sourceMtime = statSync(item.sourcePath).mtime
    const lightMtime = statSync(lightPath).mtime
    const darkMtime = statSync(darkPath).mtime

    // If source is newer than either screenshot, recapture
    if (sourceMtime > lightMtime || sourceMtime > darkMtime) {
      return true
    }

    return false
  } catch {
    // If we can't stat files, capture to be safe
    return true
  }
}

// ----------------------------------------------------------------------------
// Wait for page to be fully ready (images, fonts, animations, JS)
// ----------------------------------------------------------------------------
async function waitForPageReady(page: Page): Promise<void> {
  await page.evaluate(async () => {
    // 1. Wait for fonts to load
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready
    }

    // 2. Wait for all images (including lazy-loaded Next.js images)
    const images = Array.from(document.querySelectorAll("img"))
    const imagePromises = images.map((img) => {
      return new Promise<void>((resolve) => {
        if (img.complete && img.naturalWidth > 0) {
          resolve()
          return
        }
        if (img.complete) {
          resolve()
          return
        }

        const onLoad = () => {
          img.removeEventListener("load", onLoad)
          img.removeEventListener("error", onError)
          resolve()
        }
        const onError = () => {
          img.removeEventListener("load", onLoad)
          img.removeEventListener("error", onError)
          resolve()
        }

        img.addEventListener("load", onLoad)
        img.addEventListener("error", onError)
        setTimeout(resolve, 5000)
      })
    })
    await Promise.all(imagePromises)

    // 3. Wait for background images
    const elementsWithBg = Array.from(document.querySelectorAll("*"))
    const bgImagePromises = elementsWithBg
      .filter((el) => {
        const style = window.getComputedStyle(el)
        const bgImage = style.backgroundImage
        return bgImage && bgImage !== "none" && bgImage.includes("url(")
      })
      .map((el) => {
        return new Promise<void>((resolve) => {
          const style = window.getComputedStyle(el)
          const bgImage = style.backgroundImage
          const urlMatch = bgImage.match(/url\(["']?([^"')]+)["']?\)/)

          if (!urlMatch) {
            resolve()
            return
          }

          const img = new Image()
          img.onload = () => resolve()
          img.onerror = () => resolve()
          img.src = urlMatch[1]
          setTimeout(resolve, 3000)
        })
      })
    await Promise.all(bgImagePromises)

    // 4. Wait for CSS animations to complete
    const animatedElements = document.querySelectorAll("*")
    const animationPromises = Array.from(animatedElements)
      .map((el) => {
        const animations = el.getAnimations?.() || []
        return Promise.all(
          animations.map((anim) =>
            anim.finished.catch(() => {}) // Ignore cancelled animations
          )
        )
      })
    await Promise.all(animationPromises)

    // 5. Wait for requestAnimationFrame to settle (2 frames)
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          resolve()
        })
      })
    })

    // 6. Wait for requestIdleCallback (JS idle)
    if ("requestIdleCallback" in window) {
      await new Promise<void>((resolve) => {
        ;(window as any).requestIdleCallback(
          () => resolve(),
          { timeout: 1000 }
        )
      })
    }

    // 7. Wait for any pending setTimeout/setInterval (give them time)
    await new Promise((resolve) => setTimeout(resolve, 200))

    // 8. Check for React hydration markers
    const reactRoot = document.getElementById("__next") || document.getElementById("root")
    if (reactRoot) {
      // Wait for hydration to complete by checking for hydration markers
      await new Promise<void>((resolve) => {
        const checkHydration = () => {
          // React 18+ removes the 'data-reactroot' after hydration
          // We check if the page has interactive elements
          const hasInteractive = document.querySelector("button, a, input")
          if (hasInteractive) {
            resolve()
          } else {
            setTimeout(checkHydration, 100)
          }
        }
        checkHydration()
        setTimeout(resolve, 1500) // Max wait 1.5s for hydration
      })
    }
  })

  // 9. Additional wait for any late async operations
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // 9.5 Re-check images after async wait (some may have lazy loaded)
  await page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll("img"))
    const imagePromises = images.map((img) => {
      return new Promise<void>((resolve) => {
        if (img.complete && img.naturalWidth > 0) {
          resolve()
          return
        }
        const onLoad = () => {
          img.removeEventListener("load", onLoad)
          resolve()
        }
        img.addEventListener("load", onLoad)
        setTimeout(resolve, 3000)
      })
    })
    await Promise.all(imagePromises)
  })

  // 10. Wait for network to be idle (no pending requests for 300ms)
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let lastRequestTime = Date.now()
      let checkInterval: any

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "resource") {
            lastRequestTime = Date.now()
          }
        }
      })

      try {
        observer.observe({ entryTypes: ["resource"] })
      } catch {
        // PerformanceObserver not supported
        resolve()
        return
      }

      checkInterval = setInterval(() => {
        if (Date.now() - lastRequestTime > 300) {
          clearInterval(checkInterval)
          observer.disconnect()
          resolve()
        }
      }, 50)

      // Max wait 5 seconds
      setTimeout(() => {
        clearInterval(checkInterval)
        observer.disconnect()
        resolve()
      }, 5000)
    })
  })
}

// ----------------------------------------------------------------------------
// Wait for theme class to be applied
// ----------------------------------------------------------------------------
async function waitForTheme(page: Page, theme: string): Promise<void> {
  await page.evaluate(async (expectedTheme) => {
    // Wait for the theme class to be applied to <html>
    await new Promise<void>((resolve) => {
      const checkTheme = () => {
        const html = document.documentElement
        const isDark = html.classList.contains("dark")
        const colorScheme = html.style.colorScheme
        const isCorrect = expectedTheme === "dark"
          ? (isDark || colorScheme === "dark")
          : (!isDark || colorScheme === "light")

        if (isCorrect) {
          resolve()
        } else {
          setTimeout(checkTheme, 25)
        }
      }
      checkTheme()
      // Max wait 2 seconds
      setTimeout(resolve, 2000)
    })
  }, theme)

  // Additional wait for React to re-render with new theme
  await new Promise((resolve) => setTimeout(resolve, 200))
}

// ----------------------------------------------------------------------------
// Disable animations for stable screenshots
// ----------------------------------------------------------------------------
async function disableAnimations(page: Page): Promise<void> {
  await page.evaluate(() => {
    // Add style to disable all animations and transitions
    const style = document.createElement("style")
    style.id = "puppeteer-disable-animations"
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.001ms !important;
        animation-delay: 0ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
        transition-delay: 0ms !important;
      }
    `
    document.head.appendChild(style)

    // Force a reflow to apply the styles immediately
    document.body.offsetHeight
  })

  // Small wait for styles to take effect
  await new Promise((resolve) => setTimeout(resolve, 100))
}

// ----------------------------------------------------------------------------
// Capture screenshot for a single item
// ----------------------------------------------------------------------------
async function captureItem(browser: Browser, item: RegistryItemInfo) {
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(60000)
  page.setDefaultTimeout(60000)

  // Use larger viewport for better previews
  const viewport = { width: 1440, height: 900, deviceScaleFactor: 2 }

  await page.setViewport(viewport)

  try {
    for (const theme of ["light", "dark"]) {
      const pageUrl = `http://localhost:4000/view/${STYLE_NAME}/${item.name}?theme=${theme}`
      const screenshotPath = path.join(
        REGISTRY_PATH,
        `styles/${STYLE_NAME}/${item.name}${theme === "dark" ? "-dark" : "-light"}.webp`
      )

      // Also remove old PNG files if they exist
      const oldPngPath = screenshotPath.replace(".webp", ".png")
      if (existsSync(oldPngPath)) {
        unlinkSync(oldPngPath)
      }

      // Ensure directory exists
      const dir = path.dirname(screenshotPath)
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true })
      }

      // Navigate with theme parameter
      await page.goto(pageUrl, {
        waitUntil: "networkidle2", // Less strict - allows 2 pending connections
        timeout: 60000,
      })

      // Wait for page to be fully ready
      await waitForPageReady(page)

      // Wait for theme to be applied
      await waitForTheme(page, theme)

      // Disable animations for stable screenshot
      await disableAnimations(page)

      // Hide Tailwind indicator
      await page.evaluate(() => {
        const indicator = document.querySelector("[data-tailwind-indicator]")
        if (indicator) {
          indicator.remove()
        }
      })

      // Final wait after disabling animations
      await new Promise((resolve) => setTimeout(resolve, 300))

      // Take screenshot in WebP format
      await page.screenshot({
        path: screenshotPath,
        type: "webp",
        quality: 85,
      })
    }

    capturedCount++
    console.log(`  ✓ ${item.name} (${capturedCount + skippedCount}/${totalItems})`)
  } finally {
    await page.close()
  }
}

// ----------------------------------------------------------------------------
// Process items in parallel with multiple browser instances
// ----------------------------------------------------------------------------
async function processBatch(
  items: RegistryItemInfo[],
  batchIndex: number,
  totalBatches: number
) {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    },
    protocolTimeout: 300000, // 5 minutes for protocol timeout
  })

  try {
    if (VERBOSE) {
      console.log(
        `[Browser ${batchIndex + 1}/${totalBatches}] Started with ${items.length} items`
      )
    }

    for (let i = 0; i < items.length; i += PAGE_CONCURRENCY) {
      const chunk = items.slice(i, i + PAGE_CONCURRENCY)
      const chunkPromises = chunk.map(async (item) => {
        try {
          await captureItem(browser, item)
        } catch (error: any) {
          console.error(`  ✗ ${item.name}: ${error.message}`)
          // Track for retry
          failedItems.push({ item, error: error.message, attempt: 1 })
        }
      })
      await Promise.all(chunkPromises)
    }

    if (VERBOSE) {
      console.log(`[Browser ${batchIndex + 1}/${totalBatches}] Completed`)
    }
  } finally {
    await browser.close()
  }
}

// ----------------------------------------------------------------------------
// Retry failed items sequentially with extended timeouts
// ----------------------------------------------------------------------------
async function retryFailedItems(): Promise<void> {
  if (failedItems.length === 0) return

  console.log("")
  console.log(`🔄 Retrying ${failedItems.length} failed items sequentially...`)
  console.log("")

  // Launch fresh browser with extended timeouts
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    },
    protocolTimeout: 600000, // 10 minutes for retries
  })

  const stillFailed: FailedItem[] = []

  try {
    for (const { item, attempt } of failedItems) {
      console.log(`  Retrying ${item.name} (attempt ${attempt + 1}/3)...`)

      try {
        // Create page with extended timeout
        const page = await browser.newPage()
        page.setDefaultNavigationTimeout(180000) // 3 minutes for retry
        page.setDefaultTimeout(180000)

        const viewport = { width: 1440, height: 900, deviceScaleFactor: 2 }
        await page.setViewport(viewport)

        try {
          for (const theme of ["light", "dark"]) {
            const pageUrl = `http://localhost:4000/view/new-york-v4/${item.name}?theme=${theme}`
            const screenshotPath = `${REGISTRY_PATH}/styles/new-york-v4/${item.name}${theme === "dark" ? "-dark" : "-light"}.webp`

            // Navigate with longer timeout and less strict wait condition
            await page.goto(pageUrl, {
              waitUntil: "domcontentloaded", // Less strict than networkidle0
              timeout: 180000,
            })

            // Extra wait for content to load
            await new Promise((resolve) => setTimeout(resolve, 8000))

            // Wait for images with timeout protection
            await Promise.race([
              waitForPageReady(page),
              new Promise((resolve) => setTimeout(resolve, 30000)),
            ])

            // Disable animations
            await disableAnimations(page)

            // Hide Tailwind indicator
            await page.evaluate(() => {
              const indicator = document.querySelector("[data-tailwind-indicator]")
              if (indicator) indicator.remove()
            })

            // Final wait
            await new Promise((resolve) => setTimeout(resolve, 2000))

            // Take screenshot
            await page.screenshot({
              path: screenshotPath,
              type: "webp",
              quality: 85,
            })
          }

          capturedCount++
          console.log(`  ✓ ${item.name} succeeded on retry`)
        } finally {
          await page.close()
        }
      } catch (error: any) {
        console.error(`  ✗ ${item.name} failed again: ${error.message}`)
        if (attempt < 2) {
          // Allow up to 3 attempts
          stillFailed.push({ item, error: error.message, attempt: attempt + 1 })
        }
      }
    }
  } finally {
    await browser.close()
  }

  // Clear and repopulate failedItems for potential further retries
  failedItems.length = 0
  failedItems.push(...stillFailed)

  // Recursive retry if there are still failures
  if (stillFailed.length > 0 && stillFailed[0].attempt < 3) {
    await retryFailedItems()
  }
}

// ----------------------------------------------------------------------------
// Main capture function
// ----------------------------------------------------------------------------
async function captureScreenshots() {
  const allItems = await getAllRegistryItems()

  // Filter to only items that need capture
  const itemsToCapture = allItems.filter((item) => {
    const needs = needsCapture(item)
    if (!needs) {
      skippedCount++
      if (VERBOSE) {
        console.log(`  ⏭ ${item.name} (unchanged)`)
      }
    }
    return needs
  })

  if (itemsToCapture.length === 0) {
    console.log(`✨ All ${allItems.length} screenshots are up to date`)
    return
  }

  totalItems = itemsToCapture.length + skippedCount

  if (FORCE_OVERRIDE) {
    console.log(`🔄 Force mode: Overriding all existing screenshots`)
  }

  const blockCount = itemsToCapture.filter((i) => i.type === "block").length
  const exampleCount = itemsToCapture.filter((i) => i.type === "example").length

  console.log(
    `📸 Capturing ${itemsToCapture.length} items (${blockCount} blocks, ${exampleCount} examples)`
  )
  console.log(`   ${skippedCount} items skipped as unchanged`)
  console.log(
    `   Using ${BROWSER_CONCURRENCY} browsers × ${PAGE_CONCURRENCY} pages = ${BROWSER_CONCURRENCY * PAGE_CONCURRENCY} parallel screenshots`
  )
  console.log(`   Format: WebP @ 85% quality, Viewport: 1440x900 @ 2x`)
  console.log("")

  const startTime = Date.now()

  // Split items into batches for concurrent processing
  const batchSize = Math.ceil(itemsToCapture.length / BROWSER_CONCURRENCY)
  const batches: RegistryItemInfo[][] = []

  for (let i = 0; i < itemsToCapture.length; i += batchSize) {
    batches.push(itemsToCapture.slice(i, i + batchSize))
  }

  // Process batches in parallel with staggered start (1s between browsers)
  const batchPromises = batches.map(async (batch, index) => {
    await new Promise((resolve) => setTimeout(resolve, index * 1000))
    return processBatch(batch, index, batches.length)
  })

  await Promise.all(batchPromises)

  // Retry failed items sequentially
  if (failedItems.length > 0) {
    await retryFailedItems()
  }

  const endTime = Date.now()
  const durationSeconds = ((endTime - startTime) / 1000).toFixed(2)

  console.log("")
  console.log(`⏱️  Completed in ${durationSeconds}s`)
  console.log(`   Captured: ${capturedCount}, Skipped: ${skippedCount}`)

  if (failedItems.length > 0) {
    console.log(`   ❌ Failed (after retries): ${failedItems.length}`)
    for (const { item, error } of failedItems) {
      console.log(`      - ${item.name}: ${error}`)
    }
  }
}

// ----------------------------------------------------------------------------
// Entry point
// ----------------------------------------------------------------------------
try {
  console.log("📸 Registry Screenshot Capture (WebP)")
  console.log("======================================")
  console.log("")

  if (FORCE_OVERRIDE) {
    console.log("⚠️  Force mode: Will recapture all items")
  } else {
    console.log("📊 Smart mode: Only capturing changed items")
  }

  if (BLOCKS_ONLY) {
    console.log("📦 Blocks only mode")
  } else {
    console.log("📦 Capturing blocks and examples")
  }
  console.log("")

  await captureScreenshots()

  console.log("")
  console.log("✅ Done!")
  console.log("")
  console.log("Usage: bun scripts/capture-blocks.mts [options]")
  console.log("  --force, -f:       Recapture all items regardless of changes")
  console.log("  --blocks-only, -b: Only capture blocks (skip examples)")
  console.log("  --verbose, -v:     Show detailed progress")
} catch (error) {
  console.error(error)
  process.exit(1)
}
