/**
 * Download Images Script
 *
 * Extracts all image URLs from generated components, downloads them,
 * and saves them to the v4 app's public/block-assets folder.
 * Also updates the component files to use local image paths.
 */

import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"
import axios from "axios"
import * as crypto from "crypto"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Paths
const COMPONENTS_OUTPUT_DIR = path.join(__dirname, "..", "..", "output", "components")
const V4_APP_DIR = path.join(__dirname, "..", "..", "..", "..", "apps", "v4")
const BLOCK_ASSETS_DIR = path.join(V4_APP_DIR, "public", "block-assets")
const TEMPLATES_COMPONENTS_DIR = path.join(V4_APP_DIR, "app", "(app)", "templates", "_components")

interface ImageInfo {
  originalUrl: string
  localPath: string
  filename: string
  family: string
}

/**
 * Extract image URLs from a component file
 */
function extractImageUrls(content: string): string[] {
  const urls: string[] = []

  // Match src="https://..." patterns
  const srcRegex = /src=["'](https?:\/\/[^"']+)["']/g
  let match
  while ((match = srcRegex.exec(content)) !== null) {
    if (isImageUrl(match[1])) {
      urls.push(match[1])
    }
  }

  // Match url(https://...) patterns in styles
  const urlRegex = /url\(["']?(https?:\/\/[^"')]+)["']?\)/g
  while ((match = urlRegex.exec(content)) !== null) {
    if (isImageUrl(match[1])) {
      urls.push(match[1])
    }
  }

  // Match backgroundImage: "url(...)" patterns
  const bgRegex = /backgroundImage:\s*["']url\(([^)]+)\)["']/g
  while ((match = bgRegex.exec(content)) !== null) {
    const url = match[1].replace(/["']/g, "")
    if (url.startsWith("http") && isImageUrl(url)) {
      urls.push(url)
    }
  }

  return [...new Set(urls)] // Remove duplicates
}

/**
 * Check if URL is an image
 */
function isImageUrl(url: string): boolean {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".avif"]
  const lowerUrl = url.toLowerCase()

  // Check for image extensions
  if (imageExtensions.some(ext => lowerUrl.includes(ext))) {
    return true
  }

  // Check for common image hosting patterns
  if (lowerUrl.includes("framerusercontent.com") ||
      lowerUrl.includes("images.unsplash.com") ||
      lowerUrl.includes("cloudinary.com") ||
      lowerUrl.includes("imgix.net")) {
    return true
  }

  return false
}

/**
 * Generate a filename from URL
 */
function generateFilename(url: string, family: string): string {
  // Create a hash of the URL for uniqueness
  const hash = crypto.createHash("md5").update(url).digest("hex").slice(0, 8)

  // Try to extract original filename
  const urlPath = new URL(url).pathname
  let ext = path.extname(urlPath).toLowerCase()

  // Default to .jpg if no extension
  if (!ext || ext.length > 5) {
    ext = ".jpg"
  }

  // Create filename with family prefix
  const basename = path.basename(urlPath, ext).replace(/[^a-zA-Z0-9-_]/g, "-").slice(0, 30)
  return `${family}-${basename}-${hash}${ext}`
}

/**
 * Download an image
 */
async function downloadImage(url: string, destPath: string): Promise<boolean> {
  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      timeout: 30000,
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
      }
    })

    fs.writeFileSync(destPath, response.data)
    return true
  } catch (error) {
    console.log(`    ⚠️  Failed to download: ${url}`)
    return false
  }
}

/**
 * Process a single component file
 */
async function processComponentFile(
  filePath: string,
  family: string
): Promise<{ downloaded: number; failed: number; mappings: Map<string, string> }> {
  const content = fs.readFileSync(filePath, "utf-8")
  const urls = extractImageUrls(content)

  const mappings = new Map<string, string>()
  let downloaded = 0
  let failed = 0

  for (const url of urls) {
    const filename = generateFilename(url, family)
    const localPath = `/block-assets/${family}/${filename}`
    const destDir = path.join(BLOCK_ASSETS_DIR, family)
    const destPath = path.join(destDir, filename)

    // Create directory if needed
    fs.mkdirSync(destDir, { recursive: true })

    // Skip if already downloaded
    if (fs.existsSync(destPath)) {
      mappings.set(url, localPath)
      downloaded++
      continue
    }

    // Download the image
    const success = await downloadImage(url, destPath)
    if (success) {
      mappings.set(url, localPath)
      downloaded++
    } else {
      failed++
    }
  }

  return { downloaded, failed, mappings }
}

/**
 * Update component file with local image paths
 */
function updateComponentWithLocalPaths(
  filePath: string,
  mappings: Map<string, string>
): void {
  let content = fs.readFileSync(filePath, "utf-8")

  for (const [originalUrl, localPath] of mappings) {
    // Replace all occurrences of the original URL with local path
    content = content.split(originalUrl).join(localPath)
  }

  fs.writeFileSync(filePath, content)
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log("🖼️  Image Downloader")
  console.log("===================")
  console.log("")

  // Create block-assets directory
  fs.mkdirSync(BLOCK_ASSETS_DIR, { recursive: true })

  let totalDownloaded = 0
  let totalFailed = 0

  // Process output/components (newly generated)
  if (fs.existsSync(COMPONENTS_OUTPUT_DIR)) {
    console.log("📁 Processing generated components...")
    const categories = fs.readdirSync(COMPONENTS_OUTPUT_DIR).filter(f => {
      const fullPath = path.join(COMPONENTS_OUTPUT_DIR, f)
      return fs.statSync(fullPath).isDirectory() && !f.startsWith("_")
    })

    for (const category of categories) {
      const categoryPath = path.join(COMPONENTS_OUTPUT_DIR, category)
      const families = fs.readdirSync(categoryPath).filter(f => {
        const fullPath = path.join(categoryPath, f)
        return fs.statSync(fullPath).isDirectory()
      })

      for (const family of families) {
        const familyPath = path.join(categoryPath, family)
        const files = fs.readdirSync(familyPath).filter(f => f.endsWith(".tsx"))

        console.log(`\n[${family}] Processing ${files.length} components...`)

        for (const file of files) {
          const filePath = path.join(familyPath, file)
          console.log(`  ${file}`)

          const result = await processComponentFile(filePath, family)
          totalDownloaded += result.downloaded
          totalFailed += result.failed

          if (result.mappings.size > 0) {
            updateComponentWithLocalPaths(filePath, result.mappings)
            console.log(`    ✓ ${result.downloaded} images downloaded`)
          }
        }
      }
    }
  }

  // Also process existing templates in v4 app
  if (fs.existsSync(TEMPLATES_COMPONENTS_DIR)) {
    console.log("\n📁 Processing existing templates in v4 app...")
    const families = fs.readdirSync(TEMPLATES_COMPONENTS_DIR).filter(f => {
      const fullPath = path.join(TEMPLATES_COMPONENTS_DIR, f)
      return fs.statSync(fullPath).isDirectory()
    })

    for (const family of families) {
      const familyPath = path.join(TEMPLATES_COMPONENTS_DIR, family)
      const files = fs.readdirSync(familyPath).filter(f => f.endsWith(".tsx"))

      console.log(`\n[${family}] Processing ${files.length} components...`)

      for (const file of files) {
        const filePath = path.join(familyPath, file)
        console.log(`  ${file}`)

        const result = await processComponentFile(filePath, family)
        totalDownloaded += result.downloaded
        totalFailed += result.failed

        if (result.mappings.size > 0) {
          updateComponentWithLocalPaths(filePath, result.mappings)
          console.log(`    ✓ ${result.downloaded} images downloaded`)
        }
      }
    }
  }

  console.log("\n" + "=".repeat(50))
  console.log("📊 Summary")
  console.log("=".repeat(50))
  console.log(`✅ Downloaded: ${totalDownloaded} images`)
  console.log(`❌ Failed: ${totalFailed} images`)
  console.log(`📁 Saved to: ${BLOCK_ASSETS_DIR}`)
}

main().catch(console.error)
