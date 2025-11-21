import { existsSync, mkdirSync } from "fs"
import path from "path"
import { fileURLToPath } from "url"
import puppeteer, { Browser } from "puppeteer"

import { getAllBlockIds } from "../lib/blocks"
import { Index } from "../registry/__index__"

// Get the directory of this script file
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Always save to apps/v4/public/r regardless of where the script is run from
const REGISTRY_PATH = path.join(__dirname, "..", "public", "r")
const BROWSER_CONCURRENCY = 5 // Number of concurrent Chrome instances
const PAGE_CONCURRENCY = 3 // Number of concurrent pages per browser
// Total parallelism: BROWSER_CONCURRENCY * PAGE_CONCURRENCY = 15 screenshots at once

// Parse command-line arguments
const FORCE_OVERRIDE = !process.argv.includes("--no-force") // Force override by default
const INCLUDE_BLOCKS = process.argv.includes("--blocks") || process.argv.includes("-b")

// Global counter for progress tracking
let capturedCount = 0
let totalItems = 0

// ----------------------------------------------------------------------------
// Get all registry items that need screenshots
// ----------------------------------------------------------------------------
async function getAllRegistryItems(): Promise<string[]> {
  const items: string[] = []

  // Get examples (demos) from the registry
  const styleIndex = Index["new-york-v4"]

  if (styleIndex) {
    for (const [itemName, item] of Object.entries(styleIndex)) {
      // Include only examples that end with "-demo"
      if (item.type === "registry:example" && itemName.endsWith("-demo")) {
        items.push(itemName)
      }
    }
  }

  // Optionally include blocks
  if (INCLUDE_BLOCKS) {
    const blockIds = await getAllBlockIds()
    items.push(...blockIds)
  }

  return [...new Set(items)]
}

// ----------------------------------------------------------------------------
// Capture screenshot for a single registry item
// ----------------------------------------------------------------------------
async function captureItem(browser: Browser, item: string) {
  const page = await browser.newPage()

  // Set default navigation timeout
  page.setDefaultNavigationTimeout(120000) // 2 minutes

  try {
    for (const theme of ["light", "dark"]) {
      const pageUrl = `http://localhost:4000/view/new-york-v4/${item}?theme=${theme}`
      const screenshotPath = path.join(
        REGISTRY_PATH,
        `styles/new-york-v4/${item}${theme === "dark" ? "-dark" : "-light"}.png`
      )

      if (!FORCE_OVERRIDE && existsSync(screenshotPath)) {
        continue
      }

      // Ensure directory exists
      const dir = path.dirname(screenshotPath)
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true })
      }

      // Navigate with theme parameter
      await page.goto(pageUrl, {
        waitUntil: "networkidle0",
        timeout: 120000, // 2 minutes timeout for navigation
      })

      // Wait for animations to complete
      if (item.startsWith("chart") || item.startsWith("dashboard")) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }

      // Apply 150% page zoom and hide Tailwind indicator
      await page.evaluate(() => {
        document.body.style.zoom = "1.5"
        const indicator = document.querySelector("[data-tailwind-indicator]")
        if (indicator) {
          indicator.remove()
        }
      })

      await page.screenshot({
        path: screenshotPath,
      })
    }

    // Update progress
    capturedCount++
    console.log(`  ✓ ${item} (${capturedCount}/${totalItems})`)
  } finally {
    await page.close()
  }
}

// ----------------------------------------------------------------------------
// Process items in parallel with multiple browser instances
// ----------------------------------------------------------------------------
async function processBatch(
  items: string[],
  batchIndex: number,
  totalBatches: number
) {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 5, // Very high zoom for extremely detailed screenshots
    },
    protocolTimeout: 120000, // Increase timeout to 2 minutes
  })

  try {
    console.log(
      `[Browser ${batchIndex + 1}/${totalBatches}] Started with ${items.length} items`
    )

    // Process items in parallel within this browser
    for (let i = 0; i < items.length; i += PAGE_CONCURRENCY) {
      const chunk = items.slice(i, i + PAGE_CONCURRENCY)
      const chunkPromises = chunk.map(async (item) => {
        try {
          await captureItem(browser, item)
        } catch (error) {
          console.error(`[Browser ${batchIndex + 1}] Error capturing ${item}:`, error.message)
          // Continue with next item instead of failing the entire batch
        }
      })
      await Promise.all(chunkPromises)
    }

    console.log(`[Browser ${batchIndex + 1}/${totalBatches}] Completed`)
  } finally {
    await browser.close()
  }
}

// ----------------------------------------------------------------------------
// Capture screenshots.
// ----------------------------------------------------------------------------
async function captureScreenshots() {
  const allItems = await getAllRegistryItems()

  const items = FORCE_OVERRIDE
    ? allItems
    : allItems.filter((item) => {
        // Check if screenshots already exist
        const lightPath = path.join(
          REGISTRY_PATH,
          `styles/new-york-v4/${item}-light.png`
        )
        const darkPath = path.join(
          REGISTRY_PATH,
          `styles/new-york-v4/${item}-dark.png`
        )
        return !existsSync(lightPath) || !existsSync(darkPath)
      })

  if (items.length === 0) {
    console.log("✨ All screenshots exist, nothing to capture")
    return
  }

  if (FORCE_OVERRIDE) {
    console.log(`🔄 Force mode: Overriding all existing screenshots`)
  }

  // Initialize progress tracking
  totalItems = items.length
  capturedCount = 0

  const itemTypes = INCLUDE_BLOCKS
    ? "examples and blocks"
    : "examples only"

  console.log(
    `📸 Capturing ${items.length} items (${itemTypes}) with ${BROWSER_CONCURRENCY} browsers (${PAGE_CONCURRENCY} pages each = ${BROWSER_CONCURRENCY * PAGE_CONCURRENCY} parallel screenshots)`
  )

  const startTime = Date.now()

  // Split items into batches for concurrent processing
  const batchSize = Math.ceil(items.length / BROWSER_CONCURRENCY)
  const batches: string[][] = []

  for (let i = 0; i < items.length; i += batchSize) {
    batches.push(items.slice(i, i + batchSize))
  }

  // Process batches in parallel with staggered start
  const batchPromises = batches.map(async (batch, index) => {
    // Stagger browser launches by 500ms to avoid overwhelming the system
    await new Promise(resolve => setTimeout(resolve, index * 500))
    return processBatch(batch, index, batches.length)
  })

  await Promise.all(batchPromises)

  const endTime = Date.now()
  const durationSeconds = ((endTime - startTime) / 1000).toFixed(2)
  const avgTimePerItem = ((endTime - startTime) / items.length / 1000).toFixed(2)

  console.log("")
  console.log(`⏱️  Completed in ${durationSeconds}s (avg ${avgTimePerItem}s per item)`)
}

try {
  console.log("🔍 Capturing screenshots...")
  if (FORCE_OVERRIDE) {
    console.log("⚠️  Force mode enabled - will override existing screenshots")
  }
  if (INCLUDE_BLOCKS) {
    console.log("📦 Including blocks in capture")
  } else {
    console.log("📦 Examples only (use --blocks to include blocks)")
  }
  console.log("")

  await captureScreenshots()

  console.log("")
  console.log("✅ Done!")
  console.log("")
  console.log("Usage: pnpm registry:capture [--no-force] [--blocks|-b]")
  console.log("  --no-force: Skip existing screenshots (default: override all)")
  console.log("  --blocks, -b: Include blocks (default: examples only)")
} catch (error) {
  console.error(error)
  process.exit(1)
}
