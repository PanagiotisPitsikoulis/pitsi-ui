import { existsSync } from "fs"
import path from "path"
import puppeteer, { Browser } from "puppeteer"

import { getAllBlockIds } from "../lib/blocks"

const REGISTRY_PATH = path.join(process.cwd(), "public/r")
const BROWSER_CONCURRENCY = 5 // Number of concurrent Chrome instances
const PAGE_CONCURRENCY = 3 // Number of concurrent pages per browser
// Total parallelism: BROWSER_CONCURRENCY * PAGE_CONCURRENCY = 15 screenshots at once

// Parse command-line arguments
const FORCE_OVERRIDE = process.argv.includes("--force") || process.argv.includes("-f")

// Global counter for progress tracking
let capturedCount = 0
let totalBlocks = 0

// ----------------------------------------------------------------------------
// Capture screenshot for a single block
// ----------------------------------------------------------------------------
async function captureBlock(browser: Browser, block: string) {
  const pageUrl = `http://localhost:4000/view/new-york-v4/${block}`
  const page = await browser.newPage()

  try {
    await page.goto(pageUrl, {
      waitUntil: "networkidle2",
    })

    for (const theme of ["light", "dark"]) {
      const screenshotPath = path.join(
        REGISTRY_PATH,
        `styles/new-york-v4/${block}${theme === "dark" ? "-dark" : "-light"}.png`
      )

      if (!FORCE_OVERRIDE && existsSync(screenshotPath)) {
        continue
      }

      // Set theme and reload page
      await page.evaluate((currentTheme) => {
        localStorage.setItem("theme", currentTheme)
      }, theme)

      await page.reload({ waitUntil: "networkidle2" })

      // Wait for animations to complete
      if (block.startsWith("chart") || block.startsWith("dashboard")) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }

      // Hide Tailwind indicator
      await page.evaluate(() => {
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
    console.log(`  ✓ ${block} (${capturedCount}/${totalBlocks})`)
  } finally {
    await page.close()
  }
}

// ----------------------------------------------------------------------------
// Process blocks in parallel with multiple browser instances
// ----------------------------------------------------------------------------
async function processBatch(
  blocks: string[],
  batchIndex: number,
  totalBatches: number
) {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2,
    },
    protocolTimeout: 120000, // Increase timeout to 2 minutes
  })

  try {
    console.log(
      `[Browser ${batchIndex + 1}/${totalBatches}] Started with ${blocks.length} blocks`
    )

    // Process blocks in parallel within this browser
    for (let i = 0; i < blocks.length; i += PAGE_CONCURRENCY) {
      const chunk = blocks.slice(i, i + PAGE_CONCURRENCY)
      const chunkPromises = chunk.map(async (block) => {
        try {
          await captureBlock(browser, block)
        } catch (error) {
          console.error(`[Browser ${batchIndex + 1}] Error capturing ${block}:`, error.message)
          // Continue with next block instead of failing the entire batch
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
  const blockIds = await getAllBlockIds()

  const blocks = FORCE_OVERRIDE
    ? blockIds
    : blockIds.filter((block) => {
        // Check if screenshots already exist
        const lightPath = path.join(
          REGISTRY_PATH,
          `styles/new-york-v4/${block}-light.png`
        )
        const darkPath = path.join(
          REGISTRY_PATH,
          `styles/new-york-v4/${block}-dark.png`
        )
        return !existsSync(lightPath) || !existsSync(darkPath)
      })

  if (blocks.length === 0) {
    console.log("✨ All screenshots exist, nothing to capture")
    return
  }

  if (FORCE_OVERRIDE) {
    console.log(`🔄 Force mode: Overriding all existing screenshots`)
  }

  // Initialize progress tracking
  totalBlocks = blocks.length
  capturedCount = 0

  console.log(
    `📸 Capturing ${blocks.length} blocks with ${BROWSER_CONCURRENCY} browsers (${PAGE_CONCURRENCY} pages each = ${BROWSER_CONCURRENCY * PAGE_CONCURRENCY} parallel screenshots)`
  )

  const startTime = Date.now()

  // Split blocks into batches for concurrent processing
  const batchSize = Math.ceil(blocks.length / BROWSER_CONCURRENCY)
  const batches: string[][] = []

  for (let i = 0; i < blocks.length; i += batchSize) {
    batches.push(blocks.slice(i, i + batchSize))
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
  const avgTimePerBlock = ((endTime - startTime) / blocks.length / 1000).toFixed(2)

  console.log("")
  console.log(`⏱️  Completed in ${durationSeconds}s (avg ${avgTimePerBlock}s per block)`)
}

try {
  console.log("🔍 Capturing screenshots...")
  if (FORCE_OVERRIDE) {
    console.log("⚠️  Force mode enabled - will override existing screenshots")
  }
  console.log("")

  await captureScreenshots()

  console.log("")
  console.log("✅ Done!")
  console.log("")
  console.log("Usage: pnpm registry:capture [--force|-f]")
  console.log("  --force, -f: Override existing screenshots")
} catch (error) {
  console.error(error)
  process.exit(1)
}
