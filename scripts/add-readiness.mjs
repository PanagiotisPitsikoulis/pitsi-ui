#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs"
import { dirname, join, basename } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, "..")

// Recursively find all _registry.ts files
function findRegistryFiles(dir) {
  const files = []

  function traverse(currentDir) {
    try {
      const entries = readdirSync(currentDir)

      for (const entry of entries) {
        const fullPath = join(currentDir, entry)

        // Skip node_modules, dist, .next
        if (
          entry === "node_modules" ||
          entry === "dist" ||
          entry === ".next" ||
          entry === "__index__.tsx" ||
          entry.startsWith("__index__")
        ) {
          continue
        }

        const stat = statSync(fullPath)

        if (stat.isDirectory()) {
          traverse(fullPath)
        } else if (
          stat.isFile() &&
          (entry === "_registry.ts" || entry.endsWith("_registry.ts"))
        ) {
          files.push(fullPath)
        }
      }
    } catch (err) {
      // Skip directories we can't read
    }
  }

  traverse(dir)
  return files
}

function addReadinessToFile(filePath) {
  let content = readFileSync(filePath, "utf-8")

  // Skip if already has readiness or not a registry file
  if (
    content.includes("readiness:") ||
    !content.includes('type: "registry:')
  ) {
    return false
  }

  console.log(`Processing: ${basename(filePath)}`)
  let modified = false

  // Use a regex to find each registry object and add readiness before the closing brace
  // Pattern: match objects that have type: "registry:..." and end with }
  // We'll process line by line for better control

  const lines = content.split("\n")
  const result = []
  let inRegistryObject = false
  let braceDepth = 0
  let objectStartDepth = 0
  let hasReadiness = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // Count braces to track depth
    const openBraces = (line.match(/{/g) || []).length
    const closeBraces = (line.match(/}/g) || []).length

    // Check if we're entering a registry object
    if (
      trimmed === "{" &&
      i > 0 &&
      lines[i - 1].includes('type: "registry:')
    ) {
      inRegistryObject = true
      objectStartDepth = braceDepth
      hasReadiness = false
    }

    if (trimmed === "{" && i < lines.length - 1) {
      // Look ahead to see if next few lines contain "name:" - indicates registry object start
      let hasName = false
      for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
        if (lines[j].includes("name:")) {
          hasName = true
          break
        }
      }
      if (hasName) {
        inRegistryObject = true
        objectStartDepth = braceDepth
        hasReadiness = false
      }
    }

    // Check for readiness in current line
    if (line.includes("readiness:")) {
      hasReadiness = true
    }

    // Before adding the line, check if we're at closing brace of registry object
    if (
      inRegistryObject &&
      trimmed.startsWith("}") &&
      braceDepth === objectStartDepth
    ) {
      // Add readiness before closing brace if not present
      if (!hasReadiness) {
        const indent = line.match(/^(\s*)/)[0]
        result.push(`${indent}  readiness: "alpha",`)
        modified = true
      }
      inRegistryObject = false
    }

    result.push(line)

    // Update brace depth after processing line
    braceDepth += openBraces - closeBraces
  }

  if (modified) {
    writeFileSync(filePath, result.join("\n"), "utf-8")
    console.log(`  ✓ Added readiness properties`)
    return true
  }

  return false
}

function main() {
  console.log("🔧 Adding readiness property to registry files...\n")

  const registryDir = join(rootDir, "apps", "v4", "registry")
  const files = findRegistryFiles(registryDir)

  console.log(`Found ${files.length} _registry.ts files\n`)

  let updatedCount = 0
  for (const file of files) {
    if (addReadinessToFile(file)) {
      updatedCount++
    }
  }

  console.log(`\n✅ Completed! Updated ${updatedCount} file(s)`)
}

main()
