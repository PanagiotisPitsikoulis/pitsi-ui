/**
 * Download Template Images
 *
 * This script:
 * 1. Scans all template components for external image URLs
 * 2. Downloads images to public/block-assets/{family}/
 * 3. Updates the component files to use local paths
 * 4. Creates a metadata file with source site information
 *
 * Usage: pnpm tsx src/scripts/download-template-images.ts
 */

import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"
import https from "https"
import http from "http"
import crypto from "crypto"
import { getWorkingSite } from "../config/working-sites.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const V4_APP_DIR = path.join(__dirname, "..", "..", "..", "..", "apps", "v4")
const TEMPLATES_DIR = path.join(V4_APP_DIR, "app", "(app)", "templates", "_components")
const PUBLIC_DIR = path.join(V4_APP_DIR, "public", "block-assets")

interface FamilyMetadata {
  family: string
  sourceUrl: string | null
  sourceName: string | null
  imagesDownloaded: number
  lastUpdated: string
  images: { originalUrl: string; localPath: string }[]
}

// Regex patterns to find image URLs
const IMAGE_URL_PATTERNS = [
  // src="https://..." or src='https://...'
  /src=["'](https?:\/\/[^"']+\.(?:jpg|jpeg|png|gif|webp|svg|avif)[^"']*)["']/gi,
  // url("https://...") or url('https://...')
  /url\(["']?(https?:\/\/[^"')]+\.(?:jpg|jpeg|png|gif|webp|svg|avif)[^"')]*)/gi,
  // backgroundImage: "url(https://...)"
  /backgroundImage:\s*["']url\((https?:\/\/[^)]+\.(?:jpg|jpeg|png|gif|webp|svg|avif)[^)]*)\)/gi,
]

interface ImageInfo {
  url: string
  localPath: string
  family: string
  filename: string
}

/**
 * Generate a unique filename from URL
 */
function generateFilename(url: string, family: string): string {
  const urlHash = crypto.createHash("md5").update(url).digest("hex").slice(0, 8)
  const urlObj = new URL(url)
  const ext = path.extname(urlObj.pathname).split("?")[0] || ".jpg"
  const baseName = path.basename(urlObj.pathname, ext).replace(/[^a-zA-Z0-9-_]/g, "-").slice(0, 30)
  return `${family}-${baseName}-${urlHash}${ext}`
}

/**
 * Download a file from URL
 */
function downloadFile(url: string, destPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http
    const file = fs.createWriteStream(destPath)

    protocol
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location
          if (redirectUrl) {
            file.close()
            fs.unlinkSync(destPath)
            downloadFile(redirectUrl, destPath).then(resolve).catch(reject)
            return
          }
        }

        if (response.statusCode !== 200) {
          file.close()
          fs.unlinkSync(destPath)
          reject(new Error(`Failed to download: ${response.statusCode}`))
          return
        }

        response.pipe(file)
        file.on("finish", () => {
          file.close()
          resolve()
        })
      })
      .on("error", (err) => {
        file.close()
        fs.unlink(destPath, () => {})
        reject(err)
      })
  })
}

/**
 * Find all image URLs in a file
 */
function findImageUrls(content: string): string[] {
  const urls = new Set<string>()

  for (const pattern of IMAGE_URL_PATTERNS) {
    let match
    const regex = new RegExp(pattern.source, pattern.flags)
    while ((match = regex.exec(content)) !== null) {
      const url = match[1]
      if (url && !url.startsWith("/") && !url.includes("localhost")) {
        urls.add(url)
      }
    }
  }

  return Array.from(urls)
}

/**
 * Process a template family directory
 */
async function processFamily(familyDir: string, familyName: string): Promise<number> {
  const assetDir = path.join(PUBLIC_DIR, familyName)

  // Get source site info
  const workingSite = getWorkingSite(familyName)
  if (workingSite) {
    console.log(`  🌐 Source: ${workingSite.url}`)
  } else {
    console.log(`  ⚠️  No source site found in working-sites config`)
  }

  // Ensure asset directory exists
  if (!fs.existsSync(assetDir)) {
    fs.mkdirSync(assetDir, { recursive: true })
  }

  const files = fs.readdirSync(familyDir).filter((f) => f.endsWith(".tsx"))
  let downloadedCount = 0
  const downloadedImages: { originalUrl: string; localPath: string }[] = []

  for (const file of files) {
    const filePath = path.join(familyDir, file)
    let content = fs.readFileSync(filePath, "utf-8")
    const urls = findImageUrls(content)

    if (urls.length === 0) continue

    console.log(`  📄 ${file}: Found ${urls.length} external images`)

    for (const url of urls) {
      try {
        const filename = generateFilename(url, familyName)
        const localPath = path.join(assetDir, filename)
        const publicPath = `/block-assets/${familyName}/${filename}`

        // Skip if already downloaded
        if (!fs.existsSync(localPath)) {
          console.log(`    ⬇️  Downloading: ${url.slice(0, 60)}...`)
          await downloadFile(url, localPath)
          downloadedCount++
        }

        // Track downloaded images
        downloadedImages.push({ originalUrl: url, localPath: publicPath })

        // Replace URL in content (handle both quote styles)
        content = content.replace(new RegExp(escapeRegex(url), "g"), publicPath)
      } catch (error) {
        console.log(`    ⚠️  Failed to download: ${url.slice(0, 60)}...`)
        console.log(`       Error: ${error instanceof Error ? error.message : error}`)
      }
    }

    // Write updated content back
    fs.writeFileSync(filePath, content, "utf-8")
  }

  // Write metadata file
  const metadata: FamilyMetadata = {
    family: familyName,
    sourceUrl: workingSite?.url || null,
    sourceName: workingSite?.name || null,
    imagesDownloaded: downloadedImages.length,
    lastUpdated: new Date().toISOString(),
    images: downloadedImages,
  }
  fs.writeFileSync(
    path.join(assetDir, "_metadata.json"),
    JSON.stringify(metadata, null, 2),
    "utf-8"
  )

  return downloadedCount
}

/**
 * Escape special regex characters
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log("\n")
  console.log("╔══════════════════════════════════════════════════════════╗")
  console.log("║           📸 DOWNLOAD TEMPLATE IMAGES 📸                 ║")
  console.log("╚══════════════════════════════════════════════════════════╝")
  console.log("")

  if (!fs.existsSync(TEMPLATES_DIR)) {
    console.log("❌ Templates directory not found:", TEMPLATES_DIR)
    process.exit(1)
  }

  const families = fs
    .readdirSync(TEMPLATES_DIR)
    .filter((f) => fs.statSync(path.join(TEMPLATES_DIR, f)).isDirectory())

  console.log(`Found ${families.length} template families: ${families.join(", ")}`)
  console.log("")

  let totalDownloaded = 0

  for (const family of families) {
    console.log(`\n🗂️  Processing: ${family}`)
    const familyDir = path.join(TEMPLATES_DIR, family)
    const downloaded = await processFamily(familyDir, family)
    totalDownloaded += downloaded
  }

  console.log("\n")
  console.log("═".repeat(60))
  console.log(`✅ Complete! Downloaded ${totalDownloaded} images`)
  console.log("═".repeat(60))
  console.log("")
}

main().catch(console.error)
