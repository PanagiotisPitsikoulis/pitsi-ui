import { readdir, rename, stat, unlink } from "fs/promises"
import path from "path"
import sharp from "sharp"

const BLOCKS_DIR = path.join(process.cwd(), "public/placeholders/blocks")

// Image extensions to convert
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp"]

async function main() {
  console.log("\n🖼️  Block Images Conversion & Renaming Script\n")
  console.log("=".repeat(50))

  // Get all subdirectories in blocks folder
  const entries = await readdir(BLOCKS_DIR, { withFileTypes: true })
  const folders = entries.filter((e) => e.isDirectory())

  console.log(`\n📂 Found ${folders.length} block folders\n`)

  for (const folder of folders) {
    const folderPath = path.join(BLOCKS_DIR, folder.name)
    console.log(`\n📁 Processing: ${folder.name}`)

    // Get all image files in this folder
    const files = await readdir(folderPath)
    const imageFiles = files.filter((f) => {
      const ext = path.extname(f).toLowerCase()
      return IMAGE_EXTENSIONS.includes(ext) && f !== ".gitkeep"
    })

    if (imageFiles.length === 0) {
      console.log("   No images found, skipping...")
      continue
    }

    console.log(`   Found ${imageFiles.length} images`)

    // Convert and rename each image
    let counter = 1
    for (const imageFile of imageFiles) {
      const imagePath = path.join(folderPath, imageFile)
      const ext = path.extname(imageFile).toLowerCase()
      const newWebpPath = path.join(folderPath, `${counter}.webp`)

      try {
        // Skip if already a properly named webp
        if (ext === ".webp" && imageFile === `${counter}.webp`) {
          console.log(`   ✓ ${imageFile} (already correct)`)
          counter++
          continue
        }

        // Get original file size
        const originalStats = await stat(imagePath)
        const originalSize = originalStats.size

        // Convert to webp (or just copy if already webp)
        if (ext === ".webp") {
          // Already webp, just rename
          await rename(imagePath, newWebpPath)
          console.log(`   ✓ ${imageFile} → ${counter}.webp (renamed)`)
        } else {
          // Convert to webp
          await sharp(imagePath).webp({ quality: 85 }).toFile(newWebpPath)

          const webpStats = await stat(newWebpPath)
          const webpSize = webpStats.size
          const savings = (
            ((originalSize - webpSize) / originalSize) *
            100
          ).toFixed(1)

          // Delete original
          await unlink(imagePath)
          console.log(
            `   ✓ ${imageFile} → ${counter}.webp (${savings}% smaller)`
          )
        }

        counter++
      } catch (error) {
        console.error(`   ✗ Failed to process: ${imageFile}`, error)
      }
    }
  }

  console.log("\n" + "=".repeat(50))
  console.log("✅ Conversion and renaming complete!\n")
}

main().catch(console.error)
