import { readFileSync, writeFileSync, readdirSync, statSync } from "fs"
import { resolve, join } from "path"

// Recursively find all page.tsx files
function findFiles(dir: string, pattern: string): string[] {
  const results: string[] = []
  const files = readdirSync(dir)

  for (const file of files) {
    const filePath = join(dir, file)
    const stat = statSync(filePath)

    if (stat.isDirectory()) {
      results.push(...findFiles(filePath, pattern))
    } else if (file === pattern) {
      results.push(filePath)
    }
  }

  return results
}

// Read the registry file
const registryPath = resolve("registry/new-york-v4/blocks/_registry.ts")
let registryContent = readFileSync(registryPath, "utf-8")

// Find all actual block page.tsx files to understand the structure
const blockFiles = findFiles("registry/new-york-v4/blocks", "page.tsx")

// Create a mapping from block name to actual path
const blockPathMap: Record<string, string> = {}

for (const blockFile of blockFiles) {
  // Extract the block name (last directory before page.tsx)
  const parts = blockFile.split("/")
  const blockName = parts[parts.length - 2] // e.g., "dashboard-01", "sidebar-01", etc.

  // Store the path prefix (everything before the block name)
  const pathPrefix = parts.slice(0, -2).join("/") // e.g., "registry/new-york-v4/blocks/application/dashboard"
  const relativePrefix = pathPrefix.replace("registry/new-york-v4/", "") // e.g., "blocks/application/dashboard"

  blockPathMap[blockName] = relativePrefix
}

console.log("Found block paths:")
console.log(blockPathMap)

// Update paths in the registry
let updatedCount = 0

// Pattern to match: path: "blocks/category/block-name/...
const pathRegex = /path: "blocks\/([^\/]+)\/([^\/]+)(\/[^"]+)"/g

registryContent = registryContent.replace(pathRegex, (match, category, blockName, rest) => {
  const oldPath = `blocks/${category}/${blockName}${rest}`

  // Check if we have a mapping for this block name
  if (blockPathMap[blockName]) {
    const newPrefix = blockPathMap[blockName]
    const newPath = `${newPrefix}/${blockName}${rest}`

    if (oldPath !== newPath) {
      console.log(`Updating: ${oldPath} → ${newPath}`)
      updatedCount++
      return `path: "${newPath}"`
    }
  }

  return match
})

// Write the updated registry
writeFileSync(registryPath, registryContent, "utf-8")

console.log(`\nUpdated ${updatedCount} paths in the registry.`)
