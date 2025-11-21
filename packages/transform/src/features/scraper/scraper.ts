import * as cheerio from "cheerio"
import axios from "axios"
import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"
import pLimit from "p-limit"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Concurrency limits
const SITE_CONCURRENCY = 5 // Number of sites to scrape simultaneously
const PAGE_CONCURRENCY = 10 // Number of pages per site to download simultaneously

interface SourceCategory {
  category: string
  urls: string[]
}

// Parse the markdown file to extract categories and URLs
function parseSourcesMd(filePath: string): SourceCategory[] {
  const content = fs.readFileSync(filePath, "utf-8")
  const lines = content.split("\n")
  const categories: SourceCategory[] = []
  let currentCategory: SourceCategory | null = null

  for (const line of lines) {
    const trimmed = line.trim()

    // Check if it's a category header (## Category Name)
    if (trimmed.startsWith("## ")) {
      if (currentCategory) {
        categories.push(currentCategory)
      }
      const categoryName = trimmed
        .replace("## ", "")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
      currentCategory = {
        category: categoryName,
        urls: [],
      }
    }
    // Check if it's a URL
    else if (trimmed.startsWith("http")) {
      if (currentCategory) {
        currentCategory.urls.push(trimmed)
      }
    }
  }

  // Add the last category
  if (currentCategory) {
    categories.push(currentCategory)
  }

  return categories
}

// Get the domain from a URL
function getDomain(url: string): string {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname
  } catch (error) {
    return ""
  }
}

// Normalize URL
function normalizeUrl(url: string, baseUrl: string): string {
  try {
    return new URL(url, baseUrl).href
  } catch (error) {
    return ""
  }
}

// Get slug from URL path
function getPageSlug(url: string, isHome: boolean = false): string {
  if (isHome) return "home"

  try {
    const urlObj = new URL(url)
    const pathname = urlObj.pathname
      .replace(/^\//, "")
      .replace(/\/$/, "")
      .replace(/\//g, "-")
    return pathname || "home"
  } catch (error) {
    return "page"
  }
}

// Download HTML from a URL
async function downloadHtml(url: string): Promise<string | null> {
  try {
    const response = await axios.get(url, {
      timeout: 30000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })
    return response.data
  } catch (error) {
    console.error(`  Error downloading ${url}:`, error.message)
    return null
  }
}

// Find all internal links on a page
function findInternalLinks(html: string, baseUrl: string): Set<string> {
  const $ = cheerio.load(html)
  const links = new Set<string>()
  const baseDomain = getDomain(baseUrl)

  $("a[href]").each((_, element) => {
    const href = $(element).attr("href")
    if (!href) return

    const normalizedUrl = normalizeUrl(href, baseUrl)
    if (!normalizedUrl) return

    // Only include links from the same domain
    const linkDomain = getDomain(normalizedUrl)
    if (linkDomain === baseDomain) {
      // Remove hash fragments
      const urlWithoutHash = normalizedUrl.split("#")[0]
      if (urlWithoutHash) {
        links.add(urlWithoutHash)
      }
    }
  })

  return links
}

// Scrape a single website
async function scrapeWebsite(
  url: string,
  categoryName: string,
  siteIndex: number,
  outputDir: string
): Promise<void> {
  console.log(`\n[${categoryName}-${siteIndex}] Scraping ${url}...`)

  // Create output directory for this site
  const siteName = `${categoryName}-${siteIndex}`
  const siteDir = path.join(outputDir, categoryName, siteName)
  fs.mkdirSync(siteDir, { recursive: true })

  // Download the home page
  const homeHtml = await downloadHtml(url)
  if (!homeHtml) {
    console.error(`[${siteName}] Failed to download home page`)
    return
  }

  // Find all internal links
  const links = findInternalLinks(homeHtml, url)
  console.log(`[${siteName}] Found ${links.size} internal links`)

  // Save home page
  const homeFileName = `${siteName}-home.html`
  fs.writeFileSync(path.join(siteDir, homeFileName), homeHtml, "utf-8")
  console.log(`[${siteName}] Saved: ${homeFileName}`)

  // Download all linked pages concurrently
  const pageLimit = pLimit(PAGE_CONCURRENCY)
  const linkArray = Array.from(links).filter(
    (link) => link !== url && link !== url + "/"
  )

  const downloadTasks = linkArray.map((link) =>
    pageLimit(async () => {
      const pageHtml = await downloadHtml(link)
      if (!pageHtml) return

      const pageSlug = getPageSlug(link)
      const fileName = `${siteName}-${pageSlug}.html`
      fs.writeFileSync(path.join(siteDir, fileName), pageHtml, "utf-8")
      console.log(`[${siteName}] Saved: ${fileName}`)
    })
  )

  await Promise.all(downloadTasks)
  console.log(`[${siteName}] ✓ Completed`)
}

// Main function
async function main() {
  const sourcesPath = path.join(__dirname, "sources.md")
  const outputDir = path.join(__dirname, "..", "..", "..", "scraped-html-files")

  // Create output directory
  fs.mkdirSync(outputDir, { recursive: true })

  // Parse sources
  console.log("Parsing sources.md...")
  const categories = parseSourcesMd(sourcesPath)
  console.log(`Found ${categories.length} categories`)

  const startTime = Date.now()

  // Scrape all categories with controlled concurrency
  const siteLimit = pLimit(SITE_CONCURRENCY)

  for (const { category, urls } of categories) {
    console.log(`\n=== Category: ${category} (${urls.length} sites) ===`)

    const scrapeTasks = urls.map((url, index) =>
      siteLimit(() => scrapeWebsite(url, category, index + 1, outputDir))
    )

    await Promise.all(scrapeTasks)
    console.log(`\n✓ Category "${category}" completed`)
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2)
  console.log(`\n✅ Scraping completed in ${duration}s!`)
}

main().catch(console.error)
