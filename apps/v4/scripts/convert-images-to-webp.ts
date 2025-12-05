import { readdir, readFile, writeFile, unlink, stat } from "fs/promises"
import path from "path"
import sharp from "sharp"

const PUBLIC_DIR = path.join(process.cwd(), "public")
const APP_DIR = process.cwd()

// Image extensions to convert (excluding svg)
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif"]

// File extensions to search for references
const CODE_EXTENSIONS = [
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mdx",
  ".md",
  ".json",
  ".css",
]

// Directories to exclude from reference search
const EXCLUDE_DIRS = ["node_modules", ".next", ".git", "dist", ".turbo"]

interface ImageFile {
  originalPath: string
  webpPath: string
  relativePath: string
  relativeWebpPath: string
}

async function getAllFiles(
  dir: string,
  extensions: string[]
): Promise<string[]> {
  const files: string[] = []

  async function walk(currentDir: string) {
    const entries = await readdir(currentDir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name)

      if (entry.isDirectory()) {
        if (!EXCLUDE_DIRS.includes(entry.name)) {
          await walk(fullPath)
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase()
        if (extensions.includes(ext)) {
          files.push(fullPath)
        }
      }
    }
  }

  await walk(dir)
  return files
}

async function findImagesToConvert(): Promise<ImageFile[]> {
  const imageFiles = await getAllFiles(PUBLIC_DIR, IMAGE_EXTENSIONS)
  const images: ImageFile[] = []

  for (const imagePath of imageFiles) {
    const ext = path.extname(imagePath)
    const webpPath = imagePath.replace(new RegExp(`${ext}$`, "i"), ".webp")
    const relativePath = "/" + path.relative(PUBLIC_DIR, imagePath)
    const relativeWebpPath = relativePath.replace(
      new RegExp(`${ext}$`, "i"),
      ".webp"
    )

    images.push({
      originalPath: imagePath,
      webpPath,
      relativePath,
      relativeWebpPath,
    })
  }

  return images
}

async function convertImageToWebp(image: ImageFile): Promise<void> {
  const originalStats = await stat(image.originalPath)
  const originalSize = originalStats.size

  await sharp(image.originalPath).webp({ quality: 85 }).toFile(image.webpPath)

  const webpStats = await stat(image.webpPath)
  const webpSize = webpStats.size
  const savings = (((originalSize - webpSize) / originalSize) * 100).toFixed(1)

  console.log(
    `  ✓ ${path.basename(image.originalPath)} → ${path.basename(image.webpPath)} (${savings}% smaller)`
  )
}

async function updateReferences(images: ImageFile[]): Promise<number> {
  const codeFiles = await getAllFiles(APP_DIR, CODE_EXTENSIONS)
  let totalUpdates = 0

  for (const filePath of codeFiles) {
    let content = await readFile(filePath, "utf-8")
    let fileUpdated = false

    for (const image of images) {
      // Get filename without extension
      const ext = path.extname(image.relativePath)
      const baseName = path.basename(image.relativePath, ext)
      const dirName = path.dirname(image.relativePath)

      // Create regex patterns to match the image reference
      // Match patterns like: /path/to/image.jpg, /path/to/image.png, etc.
      const patterns = [
        // Full path from public root: /marketing/image.jpg
        new RegExp(
          `(["'\`])${escapeRegex(image.relativePath)}\\1`,
          "g"
        ),
        // Without leading slash: marketing/image.jpg
        new RegExp(
          `(["'\`])${escapeRegex(image.relativePath.slice(1))}\\1`,
          "g"
        ),
        // With public prefix: /public/marketing/image.jpg
        new RegExp(
          `(["'\`])/public${escapeRegex(image.relativePath)}\\1`,
          "g"
        ),
      ]

      for (const pattern of patterns) {
        if (pattern.test(content)) {
          const newPath = image.relativeWebpPath
          content = content.replace(pattern, (match, quote) => {
            if (match.includes("/public/")) {
              return `${quote}/public${newPath}${quote}`
            } else if (!match.slice(1, -1).startsWith("/")) {
              return `${quote}${newPath.slice(1)}${quote}`
            }
            return `${quote}${newPath}${quote}`
          })
          fileUpdated = true
        }
      }
    }

    if (fileUpdated) {
      await writeFile(filePath, content)
      totalUpdates++
      console.log(`  ✓ Updated references in: ${path.relative(APP_DIR, filePath)}`)
    }
  }

  return totalUpdates
}

function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

async function deleteOriginalImages(images: ImageFile[]): Promise<void> {
  for (const image of images) {
    await unlink(image.originalPath)
    console.log(`  ✗ Deleted: ${path.basename(image.originalPath)}`)
  }
}

async function main() {
  console.log("\n🖼️  Image to WebP Conversion Script\n")
  console.log("=" .repeat(50))

  // Step 1: Find images to convert
  console.log("\n📂 Finding images to convert...")
  const images = await findImagesToConvert()

  if (images.length === 0) {
    console.log("  No images found to convert.")
    return
  }

  console.log(`  Found ${images.length} images to convert\n`)

  // Step 2: Convert images to WebP
  console.log("🔄 Converting images to WebP...\n")
  for (const image of images) {
    try {
      await convertImageToWebp(image)
    } catch (error) {
      console.error(`  ✗ Failed to convert: ${image.originalPath}`, error)
    }
  }

  // Step 3: Update references in code
  console.log("\n📝 Updating image references in codebase...\n")
  const updatedFiles = await updateReferences(images)
  console.log(`\n  Updated ${updatedFiles} files\n`)

  // Step 4: Delete original images
  console.log("🗑️  Deleting original images...\n")
  await deleteOriginalImages(images)

  console.log("\n" + "=".repeat(50))
  console.log("✅ Conversion complete!")
  console.log(`   - Converted: ${images.length} images`)
  console.log(`   - Updated: ${updatedFiles} files with references`)
  console.log(`   - Deleted: ${images.length} original images\n`)
}

main().catch(console.error)
