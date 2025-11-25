import { chromium, Browser, Page, BrowserContext } from "playwright"
import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"
import { getSitesToProcess, WorkingSite } from "../../config/working-sites.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Output directories (within packages/transform)
const BASE_OUTPUT_DIR = path.join(__dirname, "..", "..", "..", "output", "screenshots")
const VIDEO_OUTPUT_DIR = path.join(__dirname, "..", "..", "..", "output", "videos")

// Viewport settings
const VIEWPORT = { width: 1920, height: 1080 }

// Wait times
const PAGE_LOAD_WAIT = 3000
const SCROLL_WAIT = 500
const ANIMATION_RECORD_TIME = 5000 // 5 seconds per section for video

interface Section {
  element: string
  index: number
  top: number
  height: number
  tagName: string
  classes: string[]
}

/**
 * Get all major sections on a page
 */
async function getSections(page: Page): Promise<Section[]> {
  return page.evaluate(() => {
    const sectionSelectors = [
      "section",
      "main > div",
      "header",
      "footer",
      "[class*='section']",
      "[class*='hero']",
      "[class*='feature']",
      "[class*='cta']",
      "[class*='testimonial']",
      "[class*='pricing']",
      "[class*='faq']",
      "[class*='contact']",
      "[class*='about']",
      "[class*='team']",
      "[class*='blog']",
      "[class*='portfolio']",
      "[class*='gallery']",
      "[class*='services']",
    ]

    const sections: Section[] = []
    const seenElements = new Set<Element>()

    for (const selector of sectionSelectors) {
      const elements = document.querySelectorAll(selector)
      elements.forEach((el, idx) => {
        if (seenElements.has(el)) return

        const rect = el.getBoundingClientRect()
        const scrollTop = window.scrollY

        // Skip tiny elements or elements outside viewport
        if (rect.height < 100) return

        seenElements.add(el)
        sections.push({
          element: selector,
          index: idx,
          top: rect.top + scrollTop,
          height: rect.height,
          tagName: el.tagName.toLowerCase(),
          classes: Array.from(el.classList),
        })
      })
    }

    // Sort by position on page
    sections.sort((a, b) => a.top - b.top)

    // Remove duplicates based on position (within 50px)
    const uniqueSections: Section[] = []
    let lastTop = -100
    for (const section of sections) {
      if (section.top - lastTop > 50) {
        uniqueSections.push(section)
        lastTop = section.top
      }
    }

    return uniqueSections
  })
}

/**
 * Get section name from its classes and tag
 */
function getSectionName(section: Section, index: number): string {
  const relevantClass = section.classes.find(
    (c) =>
      c.includes("section") ||
      c.includes("hero") ||
      c.includes("feature") ||
      c.includes("cta") ||
      c.includes("testimonial") ||
      c.includes("pricing") ||
      c.includes("faq") ||
      c.includes("contact") ||
      c.includes("about") ||
      c.includes("team") ||
      c.includes("footer") ||
      c.includes("header")
  )

  const baseName = relevantClass || section.tagName
  return `${String(index + 1).padStart(2, "0")}-${baseName}`
}

/**
 * Take screenshots of all sections on a page
 */
async function screenshotSections(
  page: Page,
  outputDir: string,
  pageSlug: string
): Promise<void> {
  const sections = await getSections(page)
  console.log(`    Found ${sections.length} sections on ${pageSlug}`)

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i]
    const sectionName = getSectionName(section, i)
    const filename = `${pageSlug}-${sectionName}.png`
    const filepath = path.join(outputDir, filename)

    try {
      // Scroll to section
      await page.evaluate((top) => {
        window.scrollTo({ top: top - 100, behavior: "instant" })
      }, section.top)
      await page.waitForTimeout(SCROLL_WAIT)

      // Take screenshot of the viewport at this position
      await page.screenshot({
        path: filepath,
        fullPage: false,
      })
      console.log(`    ✓ ${filename}`)
    } catch (error) {
      console.error(`    ✗ Failed to screenshot ${sectionName}:`, error.message)
    }
  }
}

/**
 * Record video of scrolling through the entire page slowly
 * Creates one cinematic video per page with smooth scroll
 */
async function recordPageVideo(
  context: BrowserContext,
  url: string,
  outputDir: string,
  pageSlug: string
): Promise<void> {
  const videoPath = path.join(outputDir, `${pageSlug}.webm`)

  // Create a new page with video recording enabled
  const page = await context.newPage()

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 })
    await page.waitForTimeout(PAGE_LOAD_WAIT)

    // Pause at the top to show initial state
    await page.waitForTimeout(2000)

    // Get total page height
    const totalHeight = await page.evaluate(() => document.body.scrollHeight)
    const viewportHeight = VIEWPORT.height

    // Slow, cinematic scroll - one smooth motion from top to bottom
    // Calculate scroll duration based on page length (aim for ~10-15 seconds per viewport)
    const totalScrollTime = Math.max(15000, (totalHeight / viewportHeight) * 8000)
    const scrollSteps = Math.ceil(totalScrollTime / 100) // 100ms per step

    // Smooth scroll from top to bottom
    for (let i = 0; i <= scrollSteps; i++) {
      const progress = i / scrollSteps
      const scrollPosition = totalHeight * progress

      await page.evaluate((top) => {
        window.scrollTo({ top, behavior: "auto" }) // Use auto for precise control
      }, scrollPosition)

      await page.waitForTimeout(100) // Small step interval for smooth motion
    }

    // Pause at bottom
    await page.waitForTimeout(2000)

    console.log(`    ✓ Video recorded: ${pageSlug}.webm (${Math.round(totalScrollTime / 1000)}s)`)
  } catch (error) {
    console.error(`    ✗ Failed to record video:`, error.message)
  } finally {
    await page.close()
  }
}

/**
 * Get all internal links on a page
 */
async function getInternalLinks(page: Page, baseUrl: string): Promise<string[]> {
  const baseDomain = new URL(baseUrl).hostname

  return page.evaluate((domain) => {
    const links: string[] = []
    const seenUrls = new Set<string>()

    document.querySelectorAll("a[href]").forEach((el) => {
      const href = el.getAttribute("href")
      if (!href) return

      try {
        const url = new URL(href, window.location.href)
        if (url.hostname === domain && !seenUrls.has(url.pathname)) {
          seenUrls.add(url.pathname)
          links.push(url.href.split("#")[0])
        }
      } catch {}
    })

    return [...new Set(links)]
  }, baseDomain)
}

/**
 * Scrape a single site
 */
async function scrapeSite(
  browser: Browser,
  site: WorkingSite
): Promise<void> {
  console.log(`\n[${site.name}] Starting scrape of ${site.url}`)

  // Create output directories
  const screenshotDir = path.join(BASE_OUTPUT_DIR, site.category, site.name)
  const videoDir = path.join(VIDEO_OUTPUT_DIR, site.category, site.name)
  fs.mkdirSync(screenshotDir, { recursive: true })
  fs.mkdirSync(videoDir, { recursive: true })

  // Create context with video recording
  const context = await browser.newContext({
    viewport: VIEWPORT,
    recordVideo: {
      dir: videoDir,
      size: VIEWPORT,
    },
  })

  const page = await context.newPage()

  try {
    // Navigate to home page
    console.log(`  [${site.name}] Loading home page...`)
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 60000 })
    await page.waitForTimeout(PAGE_LOAD_WAIT)

    // Get all internal links
    const links = await getInternalLinks(page, site.url)
    console.log(`  [${site.name}] Found ${links.length} internal pages`)

    // Screenshot home page sections
    console.log(`  [${site.name}] Capturing home page sections...`)
    await screenshotSections(page, screenshotDir, "home")

    // Close the page to save the video
    await page.close()

    // Record video of home page
    console.log(`  [${site.name}] Recording home page video...`)
    await recordPageVideo(context, site.url, videoDir, "home")

    // Process other pages
    for (const link of links) {
      if (link === site.url || link === site.url + "/") continue

      const urlObj = new URL(link)
      const pageSlug = urlObj.pathname
        .replace(/^\//, "")
        .replace(/\/$/, "")
        .replace(/\//g, "-") || "page"

      console.log(`  [${site.name}] Processing /${pageSlug}...`)

      // Screenshot sections
      const screenshotPage = await context.newPage()
      try {
        await screenshotPage.goto(link, { waitUntil: "networkidle", timeout: 60000 })
        await screenshotPage.waitForTimeout(PAGE_LOAD_WAIT)
        await screenshotSections(screenshotPage, screenshotDir, pageSlug)
      } catch (error) {
        console.error(`    ✗ Failed to load ${pageSlug}:`, error.message)
      } finally {
        await screenshotPage.close()
      }

      // Record video
      await recordPageVideo(context, link, videoDir, pageSlug)
    }

    console.log(`  [${site.name}] ✓ Completed`)
  } catch (error) {
    console.error(`  [${site.name}] ✗ Error:`, error.message)
  } finally {
    await context.close()
  }
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log("🚀 Visual Scraper - Screenshots & Videos")
  console.log("========================================")
  console.log(`Working on ${getSitesToProcess().length} sites:`)
  getSitesToProcess().forEach((site) => console.log(`  - ${site.name}: ${site.url}`))
  console.log("")

  // Create output directories
  fs.mkdirSync(BASE_OUTPUT_DIR, { recursive: true })
  fs.mkdirSync(VIDEO_OUTPUT_DIR, { recursive: true })

  // Launch browser
  console.log("Launching browser...")
  const browser = await chromium.launch({
    headless: true,
  })

  const startTime = Date.now()

  try {
    // Process each site sequentially to avoid resource issues
    for (const site of getSitesToProcess()) {
      await scrapeSite(browser, site)
    }
  } finally {
    await browser.close()
  }

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(2)
  console.log(`\n✅ Scraping completed in ${duration} minutes!`)
  console.log(`Screenshots saved to: ${BASE_OUTPUT_DIR}`)
  console.log(`Videos saved to: ${VIDEO_OUTPUT_DIR}`)
}

main().catch(console.error)
