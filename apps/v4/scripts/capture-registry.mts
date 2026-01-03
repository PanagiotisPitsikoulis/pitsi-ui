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

// Parse command-line arguments
const FORCE_OVERRIDE =
  process.argv.includes("--force") || process.argv.includes("-f")
const VERBOSE =
  process.argv.includes("--verbose") || process.argv.includes("-v")
const BLOCKS_ONLY =
  process.argv.includes("--blocks-only") || process.argv.includes("-b")
const SHOW_BROWSER = process.argv.includes("--show-browser")
// Git-based detection is now the default, use --all to use file modification time instead
const USE_MTIME =
  process.argv.includes("--all") || process.argv.includes("-a")

// Parse --concurrency N flag
function parseConcurrency(): number {
  const idx = process.argv.findIndex(
    (arg) => arg === "--concurrency" || arg === "-c"
  )
  if (idx !== -1 && process.argv[idx + 1]) {
    const val = parseInt(process.argv[idx + 1], 10)
    if (!isNaN(val) && val > 0 && val <= 10) {
      return val
    }
  }
  return 2 // default
}

const BROWSER_CONCURRENCY = parseConcurrency()
const PAGE_CONCURRENCY = 2

// Viewport configurations - smaller viewport = bigger components in screenshot
const VIEWPORT_BLOCKS = { width: 1440, height: 900, deviceScaleFactor: 2 }
const VIEWPORT_COMPONENTS = { width: 900, height: 600, deviceScaleFactor: 2 }

// Progress tracking
let capturedCount = 0
let skippedCount = 0
let totalItems = 0
let captureStartTime = 0
const captureTimes: number[] = []

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

// Set of registry item names changed in the current commit
let changedItemNames: Set<string> | null = null

// ----------------------------------------------------------------------------
// Get registry items that were changed in the latest commit
// ----------------------------------------------------------------------------
async function getChangedRegistryItems(): Promise<Set<string>> {
  const { execSync } = await import("child_process")
  const changedNames = new Set<string>()

  try {
    // Get files changed in the last commit
    const gitOutput = execSync("git diff --name-only HEAD~1", {
      encoding: "utf-8",
      cwd: path.join(__dirname, ".."),
    })

    const changedFiles = gitOutput
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => line.trim())

    // Filter to registry files and extract item names
    for (const file of changedFiles) {
      // Match files in registry/new-york-v4/{blocks,examples,ui,animations,internal}/.../*.tsx
      const registryMatch = file.match(
        /registry\/new-york-v4\/(blocks|examples|ui|animations|internal)\/.*?([^/]+)\.tsx$/
      )

      if (registryMatch) {
        const itemName = registryMatch[2]
        // Skip _registry files and index files
        if (!itemName.startsWith("_") && itemName !== "index") {
          changedNames.add(itemName)
        }
      }
    }

    if (VERBOSE) {
      console.log(`📝 Found ${changedNames.size} changed registry items in last commit:`)
      for (const name of changedNames) {
        console.log(`   - ${name}`)
      }
    }
  } catch (error: any) {
    console.warn(`⚠️  Could not get git changes: ${error.message}`)
    console.warn(`   Falling back to normal detection mode`)
  }

  return changedNames
}

// ----------------------------------------------------------------------------
// Work Queue Implementation (Thread-safe with mutex)
// ----------------------------------------------------------------------------
class WorkQueue<T> {
  private items: T[] = []
  private mutex = false

  constructor(items: T[]) {
    this.items = [...items]
  }

  async take(): Promise<T | null> {
    // Simple spinlock mutex for bun
    while (this.mutex) {
      await new Promise((r) => setTimeout(r, 1))
    }
    this.mutex = true
    const item = this.items.shift() ?? null
    this.mutex = false
    return item
  }

  remaining(): number {
    return this.items.length
  }
}

// ----------------------------------------------------------------------------
// Get all registry items by scanning directories
// ----------------------------------------------------------------------------
async function getAllRegistryItems(): Promise<RegistryItemInfo[]> {
  const items: RegistryItemInfo[] = []
  const { readdir } = await import("fs/promises")

  // First, get all UI component and animation names to filter examples
  const uiComponentNames: Set<string> = new Set()

  async function scanUiComponents(dir: string) {
    try {
      const entries = await readdir(dir, { withFileTypes: true })
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
          // For animations folder structure (animations/component-name/component-name.tsx)
          // add the folder name as component name
          const subEntries = await readdir(fullPath, { withFileTypes: true }).catch(() => [])
          for (const subEntry of subEntries) {
            if (subEntry.name.endsWith(".tsx") && !subEntry.name.startsWith("_")) {
              const itemName = subEntry.name.replace(".tsx", "")
              uiComponentNames.add(itemName)
            }
          }
          await scanUiComponents(fullPath)
        } else if (entry.name.endsWith(".tsx") && !entry.name.startsWith("_")) {
          const itemName = entry.name.replace(".tsx", "")
          uiComponentNames.add(itemName)
        }
      }
    } catch {
      // Directory doesn't exist, skip
    }
  }

  // Scan UI components first to build the filter set
  await scanUiComponents(path.join(REGISTRY_DIR, "ui"))

  // Also scan animations folder for animation component names
  await scanUiComponents(path.join(REGISTRY_DIR, "animations"))

  async function scanDir(dir: string, type: "block" | "example" | "ui") {
    try {
      const entries = await readdir(dir, { withFileTypes: true })
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
          await scanDir(fullPath, type)
        } else if (entry.name.endsWith(".tsx") && !entry.name.startsWith("_")) {
          const itemName = entry.name.replace(".tsx", "")

          // For examples, only include {component}-demo patterns
          if (type === "example") {
            const isComponentDemo = itemName.endsWith("-demo") &&
              uiComponentNames.has(itemName.replace("-demo", ""))
            if (!isComponentDemo) {
              continue
            }
          }

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
  // Only captures {component}-demo examples that match UI component names
  if (!BLOCKS_ONLY) {
    await scanDir(path.join(REGISTRY_DIR, "examples"), "example")
    // Also scan internal folder for demos (like sidebar-demo)
    await scanDir(path.join(REGISTRY_DIR, "internal"), "example")
  }

  return items
}

// ----------------------------------------------------------------------------
// Check if item needs recapture based on file modification times or git changes
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
  const missingScreenshots = !existsSync(lightPath) || !existsSync(darkPath)
  if (missingScreenshots) {
    return true
  }

  // By default, use git-based detection (capture items changed in the last commit)
  // Use --all to fall back to file modification time detection
  if (!USE_MTIME && changedItemNames) {
    return changedItemNames.has(item.name)
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
// Wait for page to be fully ready (optimized - minimal waits)
// ----------------------------------------------------------------------------
async function waitForPageReady(page: Page): Promise<void> {
  await page.evaluate(async () => {
    // 1. Wait for fonts to load (usually instant if cached)
    await document.fonts?.ready

    // 2. Wait for all images - single pass with per-image timeout
    const images = Array.from(document.querySelectorAll("img"))
    await Promise.all(
      images.map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete && img.naturalWidth > 0) {
              resolve()
              return
            }
            const onDone = () => {
              img.removeEventListener("load", onDone)
              img.removeEventListener("error", onDone)
              resolve()
            }
            img.addEventListener("load", onDone)
            img.addEventListener("error", onDone)
            // Per-image timeout of 3s
            setTimeout(resolve, 3000)
          })
      )
    )

    // 3. Wait for background images (parallel, fast timeout)
    const bgPromises: Promise<void>[] = []
    document.querySelectorAll("*").forEach((el) => {
      const bgImage = getComputedStyle(el).backgroundImage
      if (bgImage && bgImage !== "none" && bgImage.includes("url(")) {
        const match = bgImage.match(/url\(["']?([^"')]+)["']?\)/)
        if (match) {
          bgPromises.push(
            new Promise<void>((resolve) => {
              const img = new Image()
              img.onload = img.onerror = () => resolve()
              setTimeout(resolve, 2000) // 2s per bg image
              img.src = match[1]
            })
          )
        }
      }
    })
    await Promise.all(bgPromises)

    // 4. Single frame for paint
    await new Promise<void>((r) => requestAnimationFrame(() => r()))
  })
}

// ----------------------------------------------------------------------------
// Wait for theme class to be applied (optimized)
// ----------------------------------------------------------------------------
async function waitForTheme(page: Page, theme: string): Promise<void> {
  await page.evaluate(async (expectedTheme) => {
    await new Promise<void>((resolve) => {
      const checkTheme = () => {
        const html = document.documentElement
        const isDark = html.classList.contains("dark")
        const colorScheme = html.style.colorScheme
        const isCorrect =
          expectedTheme === "dark"
            ? isDark || colorScheme === "dark"
            : !isDark || colorScheme === "light"

        if (isCorrect) {
          resolve()
        } else {
          setTimeout(checkTheme, 10)
        }
      }
      checkTheme()
      setTimeout(resolve, 200) // Max wait
    })
  }, theme)
}

// ----------------------------------------------------------------------------
// Inject prefetch hint for next item
// ----------------------------------------------------------------------------
async function injectPrefetch(page: Page, nextItem?: RegistryItemInfo): Promise<void> {
  if (!nextItem) return

  await page.evaluate((itemName) => {
    const link = document.createElement("link")
    link.rel = "prefetch"
    link.href = `/view/new-york-v4/${itemName}?theme=light`
    document.head.appendChild(link)
  }, nextItem.name)
}

// ----------------------------------------------------------------------------
// Capture screenshot for a single item using existing page
// ----------------------------------------------------------------------------
async function captureItemWithPage(
  page: Page,
  item: RegistryItemInfo,
  nextItem?: RegistryItemInfo
): Promise<void> {
  // Set viewport based on item type - smaller for components = bigger appearance
  const viewport = item.type === "block" ? VIEWPORT_BLOCKS : VIEWPORT_COMPONENTS
  await page.setViewport(viewport)

  for (const theme of ["light", "dark"] as const) {
    const pageUrl = `http://localhost:4000/view/${STYLE_NAME}/${item.name}?theme=${theme}`
    const screenshotPath = path.join(
      REGISTRY_PATH,
      `styles/${STYLE_NAME}/${item.name}${theme === "dark" ? "-dark" : "-light"}.webp`
    )

    // Remove old PNG files if they exist
    const oldPngPath = screenshotPath.replace(".webp", ".png")
    if (existsSync(oldPngPath)) {
      unlinkSync(oldPngPath)
    }

    // Ensure directory exists
    const dir = path.dirname(screenshotPath)
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }

    // Navigate - use domcontentloaded, our waitForPageReady handles images
    await page.goto(pageUrl, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    })

    // Wait for images and fonts
    await waitForPageReady(page)

    // Wait for theme class
    await waitForTheme(page, theme)

    // Disable animations and hide Tailwind indicator
    await page.evaluate(() => {
      // Disable animations
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

      // Hide Tailwind indicator
      document.querySelector("[data-tailwind-indicator]")?.remove()

      // Force reflow
      document.body.offsetHeight
    })

    // Prefetch next item on first theme capture
    if (theme === "light" && nextItem) {
      await injectPrefetch(page, nextItem)
    }

    // Extra 2 second delay for safety - ensure all images and content are fully rendered
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Take screenshot
    await page.screenshot({
      path: screenshotPath,
      type: "webp",
      quality: 85,
    })
  }
}

// ----------------------------------------------------------------------------
// Browser worker - processes items from shared queue
// ----------------------------------------------------------------------------
async function browserWorker(
  workerId: number,
  queue: WorkQueue<RegistryItemInfo>,
  allItems: RegistryItemInfo[]
): Promise<void> {
  const browser = await puppeteer.launch({
    headless: SHOW_BROWSER ? false : "new",
    defaultViewport: VIEWPORT_BLOCKS,
    protocolTimeout: 300000,
    args: [
      "--disk-cache-size=104857600", // 100MB cache
      "--disable-dev-shm-usage",
    ],
  })

  if (VERBOSE) {
    console.log(`[Browser ${workerId}] Started`)
  }

  // Create page pool
  const pages: Page[] = await Promise.all(
    Array(PAGE_CONCURRENCY)
      .fill(null)
      .map(async () => {
        const page = await browser.newPage()
        page.setDefaultNavigationTimeout(60000)
        page.setDefaultTimeout(60000)
        // Initial viewport - will be set per-item in captureItemWithPage
        await page.setViewport(VIEWPORT_BLOCKS)
        return page
      })
  )

  if (VERBOSE) {
    console.log(`[Browser ${workerId}] Created ${PAGE_CONCURRENCY} pages`)
  }

  // Process items using page pool
  const activePromises: Map<number, Promise<void>> = new Map()

  async function processWithPage(pageIdx: number): Promise<void> {
    const page = pages[pageIdx]

    while (true) {
      const item = await queue.take()
      if (!item) break

      // Find next item for prefetch hint
      const currentIdx = allItems.findIndex((i) => i.name === item.name)
      const nextItem = allItems[currentIdx + 1]

      const itemStart = Date.now()
      try {
        await captureItemWithPage(page, item, nextItem)
        capturedCount++
        const itemTime = Date.now() - itemStart
        captureTimes.push(itemTime)

        // Calculate speed metrics
        const elapsed = (Date.now() - captureStartTime) / 1000
        const itemsPerSec = (capturedCount / elapsed).toFixed(2)
        const avgTime = (captureTimes.reduce((a, b) => a + b, 0) / captureTimes.length / 1000).toFixed(2)
        const remaining = totalItems - capturedCount - skippedCount
        const eta = remaining > 0 ? Math.ceil(remaining / parseFloat(itemsPerSec)) : 0

        console.log(
          `  ✓ ${item.name} [B${workerId}:P${pageIdx}] ${(itemTime / 1000).toFixed(2)}s | ${capturedCount + skippedCount}/${totalItems} | ${itemsPerSec}/s | avg ${avgTime}s | ETA ${eta}s`
        )
      } catch (error: any) {
        console.error(`  ✗ ${item.name} [B${workerId}:P${pageIdx}]: ${error.message}`)
        failedItems.push({ item, error: error.message, attempt: 1 })
      }
    }
  }

  // Start all pages processing
  for (let i = 0; i < PAGE_CONCURRENCY; i++) {
    activePromises.set(i, processWithPage(i))
  }

  // Wait for all pages to finish
  await Promise.all(activePromises.values())

  // Cleanup
  for (const page of pages) {
    await page.close()
  }
  await browser.close()

  if (VERBOSE) {
    console.log(`[Browser ${workerId}] Completed`)
  }
}

// ----------------------------------------------------------------------------
// Retry failed items sequentially with extended timeouts
// ----------------------------------------------------------------------------
async function retryFailedItems(): Promise<void> {
  if (failedItems.length === 0) return

  console.log("")
  console.log(`🔄 Retrying ${failedItems.length} failed items...`)
  console.log("")

  const browser = await puppeteer.launch({
    headless: SHOW_BROWSER ? false : "new",
    defaultViewport: VIEWPORT_BLOCKS,
    protocolTimeout: 600000,
  })

  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(120000)
  page.setDefaultTimeout(120000)

  const stillFailed: FailedItem[] = []

  for (const { item, attempt } of failedItems) {
    if (attempt >= 3) {
      stillFailed.push({ item, error: "Max retries exceeded", attempt })
      continue
    }

    console.log(`  Retrying ${item.name} (attempt ${attempt + 1}/3)...`)

    // Set viewport based on item type
    const viewport = item.type === "block" ? VIEWPORT_BLOCKS : VIEWPORT_COMPONENTS
    await page.setViewport(viewport)

    try {
      for (const theme of ["light", "dark"] as const) {
        const pageUrl = `http://localhost:4000/view/${STYLE_NAME}/${item.name}?theme=${theme}`
        const screenshotPath = path.join(
          REGISTRY_PATH,
          `styles/${STYLE_NAME}/${item.name}${theme === "dark" ? "-dark" : "-light"}.webp`
        )

        await page.goto(pageUrl, {
          waitUntil: "domcontentloaded",
          timeout: 120000,
        })

        // Extended wait for retry
        await new Promise((resolve) => setTimeout(resolve, 2000))
        await waitForPageReady(page)
        await waitForTheme(page, theme)

        // Disable animations and hide indicator
        await page.evaluate(() => {
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
          document.querySelector("[data-tailwind-indicator]")?.remove()
          document.body.offsetHeight
        })

        await page.screenshot({
          path: screenshotPath,
          type: "webp",
          quality: 85,
        })
      }

      capturedCount++
      console.log(`  ✓ ${item.name} succeeded on retry`)
    } catch (error: any) {
      console.error(`  ✗ ${item.name} failed again: ${error.message}`)
      stillFailed.push({ item, error: error.message, attempt: attempt + 1 })
    }
  }

  await page.close()
  await browser.close()

  // Update failed items
  failedItems.length = 0
  failedItems.push(...stillFailed.filter((f) => f.attempt < 3))

  // Recursive retry if needed
  if (failedItems.length > 0) {
    await retryFailedItems()
  }
}

// ----------------------------------------------------------------------------
// Main capture function
// ----------------------------------------------------------------------------
async function captureScreenshots(): Promise<void> {
  // By default, use git-based detection (unless --all is specified)
  if (!USE_MTIME && !FORCE_OVERRIDE) {
    changedItemNames = await getChangedRegistryItems()
  }

  const allItems = await getAllRegistryItems()

  // Filter to only items that need capture
  const itemsToCapture = allItems.filter((item) => {
    const lightPath = path.join(
      REGISTRY_PATH,
      `styles/${STYLE_NAME}/${item.name}-light.webp`
    )
    const darkPath = path.join(
      REGISTRY_PATH,
      `styles/${STYLE_NAME}/${item.name}-dark.webp`
    )
    const missingScreenshots = !existsSync(lightPath) || !existsSync(darkPath)
    const changedInGit = !USE_MTIME && changedItemNames?.has(item.name)

    const needs = needsCapture(item)
    if (!needs) {
      skippedCount++
      if (VERBOSE) {
        console.log(`  ⏭ ${item.name} (unchanged)`)
      }
    } else if (VERBOSE && !USE_MTIME) {
      if (missingScreenshots) {
        console.log(`  📷 ${item.name} (missing screenshots)`)
      } else if (changedInGit) {
        console.log(`  📝 ${item.name} (changed in git)`)
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
    `   Using ${BROWSER_CONCURRENCY} browsers × ${PAGE_CONCURRENCY} pages = ${BROWSER_CONCURRENCY * PAGE_CONCURRENCY} parallel captures`
  )
  console.log(`   Format: WebP @ 85% quality, Viewport: 1440x900 @ 2x`)
  if (SHOW_BROWSER) {
    console.log(`   🖥️  Browser windows visible (debug mode)`)
  }
  console.log("")

  const startTime = Date.now()
  captureStartTime = startTime

  // Create shared work queue
  const queue = new WorkQueue(itemsToCapture)

  // Launch browser workers in parallel
  const workerPromises: Promise<void>[] = []
  for (let i = 0; i < BROWSER_CONCURRENCY; i++) {
    workerPromises.push(browserWorker(i + 1, queue, itemsToCapture))
  }

  await Promise.all(workerPromises)

  // Retry failed items
  if (failedItems.length > 0) {
    await retryFailedItems()
  }

  const endTime = Date.now()
  const durationMs = endTime - startTime
  const durationSeconds = (durationMs / 1000).toFixed(2)

  // Calculate final stats
  const avgTimeMs = captureTimes.length > 0
    ? captureTimes.reduce((a, b) => a + b, 0) / captureTimes.length
    : 0
  const minTimeMs = captureTimes.length > 0 ? Math.min(...captureTimes) : 0
  const maxTimeMs = captureTimes.length > 0 ? Math.max(...captureTimes) : 0
  const itemsPerSec = capturedCount > 0 ? (capturedCount / (durationMs / 1000)).toFixed(2) : "0"

  console.log("")
  console.log(`⏱️  Completed in ${durationSeconds}s`)
  console.log(`   📊 Speed: ${itemsPerSec} items/sec`)
  console.log(`   ⏱️  Per item: avg ${(avgTimeMs / 1000).toFixed(2)}s | min ${(minTimeMs / 1000).toFixed(2)}s | max ${(maxTimeMs / 1000).toFixed(2)}s`)
  console.log(`   ✅ Captured: ${capturedCount} | ⏭️  Skipped: ${skippedCount}`)

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
  console.log("📸 Registry Screenshot Capture (Optimized)")
  console.log("==========================================")
  console.log("")

  if (FORCE_OVERRIDE) {
    console.log("⚠️  Force mode: Will recapture all items")
  } else if (USE_MTIME) {
    console.log("📊 File mode: Using file modification times to detect changes")
  } else {
    console.log("📝 Git mode: Items changed in last commit + missing screenshots")
  }

  if (BLOCKS_ONLY) {
    console.log("📦 Blocks only mode")
  } else {
    console.log("📦 Capturing blocks and examples")
  }

  if (SHOW_BROWSER) {
    console.log("🖥️  Debug mode: Browsers will be visible")
  }
  console.log("")

  await captureScreenshots()

  console.log("")
  console.log("✅ Done!")
  console.log("")
  console.log("Usage: bun --bun scripts/capture-registry.mts [options]")
  console.log("  --force, -f        Recapture all items regardless of changes")
  console.log("  --all, -a          Use file modification times instead of git (old behavior)")
  console.log("  --blocks-only, -b  Only capture blocks (skip examples)")
  console.log("  --verbose, -v      Show detailed progress")
  console.log("  --show-browser     Show browser windows for debugging")
  console.log("  --concurrency N    Number of browser instances (default: 2, max: 10)")
} catch (error) {
  console.error(error)
  process.exit(1)
}
