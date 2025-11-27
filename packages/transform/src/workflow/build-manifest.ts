#!/usr/bin/env tsx
/**
 * Build manifest.json from output directory structure
 * Scans screenshots, themes, and components to create a unified manifest
 */

import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE_OUTPUT_DIR = path.join(__dirname, "..", "..", "output")
const SCREENSHOTS_DIR = path.join(BASE_OUTPUT_DIR, "screenshots")
const THEMES_DIR = path.join(BASE_OUTPUT_DIR, "themes")
const COMPONENTS_DIR = path.join(BASE_OUTPUT_DIR, "components")
const MANIFEST_PATH = path.join(BASE_OUTPUT_DIR, "manifest.json")

interface GeneratedComponent {
  category: string
  site: string
  page: string
  filename: string
  path: string
}

interface PageMedia {
  page: string
  screenshots: string[]
}

interface WorkflowSite {
  category: string
  site: string
  pages: PageMedia[]
  theme: object | null
  components: GeneratedComponent[]
}

interface WorkflowManifest {
  sites: WorkflowSite[]
  generatedAt: string
}

/**
 * Get all subdirectories in a directory
 */
function getDirectories(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) return []

  return fs.readdirSync(dirPath).filter((file) => {
    const fullPath = path.join(dirPath, file)
    return fs.statSync(fullPath).isDirectory()
  })
}

/**
 * Get all files in a directory matching a pattern
 */
function getFiles(dirPath: string, extension: string): string[] {
  if (!fs.existsSync(dirPath)) return []

  return fs.readdirSync(dirPath).filter((file) => file.endsWith(extension))
}

/**
 * Load theme JSON if it exists
 */
function loadTheme(category: string, site: string): object | null {
  const themePath = path.join(THEMES_DIR, category, site, "theme.json")

  if (fs.existsSync(themePath)) {
    try {
      return JSON.parse(fs.readFileSync(themePath, "utf-8"))
    } catch (error) {
      console.warn(`  Warning: Failed to parse theme for ${category}/${site}`)
      return null
    }
  }

  return null
}

/**
 * Extract page name from screenshot filename
 * e.g., "home-01-hero.png" -> "home"
 * e.g., "about-us-02-team.png" -> "about-us"
 */
function extractPageFromScreenshot(filename: string): string {
  // Remove extension
  const base = filename.replace(/\.png$/, "")

  // Match pattern: pagename-##-section
  // Find last occurrence of -## pattern
  const match = base.match(/^(.+?)-\d{2}-.+$/)

  if (match) {
    return match[1]
  }

  // Fallback: just use the whole name
  return base
}

/**
 * Get all media organized by page for a site
 */
function getPageMedia(category: string, site: string): PageMedia[] {
  const screenshotDir = path.join(SCREENSHOTS_DIR, category, site)

  const screenshots = getFiles(screenshotDir, ".png")

  // Group screenshots by page
  const screenshotsByPage = new Map<string, string[]>()

  for (const screenshot of screenshots) {
    const page = extractPageFromScreenshot(screenshot)

    if (!screenshotsByPage.has(page)) {
      screenshotsByPage.set(page, [])
    }

    screenshotsByPage.get(page)!.push(screenshot)
  }

  // Convert to PageMedia array
  const pages: PageMedia[] = []

  for (const [page, pageScreenshots] of screenshotsByPage) {
    pages.push({
      page,
      screenshots: pageScreenshots,
    })
  }

  // Sort by page name (home first, then alphabetically)
  pages.sort((a, b) => {
    if (a.page === "home") return -1
    if (b.page === "home") return 1
    return a.page.localeCompare(b.page)
  })

  return pages
}

/**
 * Get all components for a site
 */
function getComponents(category: string, site: string): GeneratedComponent[] {
  const componentDir = path.join(COMPONENTS_DIR, category, site)

  if (!fs.existsSync(componentDir)) return []

  const components: GeneratedComponent[] = []
  const files = getFiles(componentDir, ".tsx")

  for (const file of files) {
    // Skip debug directory
    if (file.includes("_debug")) continue

    // Extract page name from component filename (e.g., "HomePage.tsx" -> "home")
    const pageName = file
      .replace(/Page\.tsx$/, "")
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
      .slice(1) // Remove leading dash

    components.push({
      category,
      site,
      page: pageName,
      filename: file,
      path: `${category}/${site}/${file}`,
    })
  }

  return components
}

/**
 * Build manifest from output directory structure
 */
function buildManifest(): WorkflowManifest {
  const sites: WorkflowSite[] = []

  // Scan all categories in screenshots directory (this is our primary source)
  const categories = getDirectories(SCREENSHOTS_DIR)

  for (const category of categories) {
    const categoryPath = path.join(SCREENSHOTS_DIR, category)
    const siteNames = getDirectories(categoryPath)

    for (const siteName of siteNames) {
      console.log(`  Processing ${category}/${siteName}...`)

      const pages = getPageMedia(category, siteName)
      const theme = loadTheme(category, siteName)
      const components = getComponents(category, siteName)

      const totalScreenshots = pages.reduce((sum, p) => sum + p.screenshots.length, 0)

      sites.push({
        category,
        site: siteName,
        pages,
        theme,
        components,
      })

      console.log(`    ✓ ${pages.length} pages, ${totalScreenshots} screenshots, ${components.length} components, theme: ${theme ? "yes" : "no"}`)
    }
  }

  return {
    sites,
    generatedAt: new Date().toISOString(),
  }
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log("📦 Building manifest from output directory")
  console.log("==========================================\n")

  // Check if output directory exists
  if (!fs.existsSync(BASE_OUTPUT_DIR)) {
    console.error("❌ Output directory not found!")
    console.error(`   Expected: ${BASE_OUTPUT_DIR}`)
    console.error("\nRun the workflow first:")
    console.error("  pnpm workflow")
    process.exit(1)
  }

  console.log("Scanning output directory...")
  const manifest = buildManifest()

  console.log(`\n✓ Found ${manifest.sites.length} sites`)

  // Save manifest
  console.log(`\nWriting manifest to ${MANIFEST_PATH}...`)
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2))

  console.log("✅ Manifest built successfully!")
  console.log(`\nPreview the results:`)
  console.log(`  cd packages/transform/preview`)
  console.log(`  pnpm dev`)
}

main().catch((error) => {
  console.error("Failed to build manifest:", error)
  process.exit(1)
})
