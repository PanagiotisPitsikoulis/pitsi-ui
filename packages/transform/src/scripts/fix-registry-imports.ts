#!/usr/bin/env tsx
/**
 * Fix component imports to use registry path instead of @/components/ui
 */

import * as fs from "fs"
import * as path from "path"

/**
 * Fix imports in a file to use registry paths
 */
function fixRegistryImports(code: string): string {
  let fixed = code

  // Replace @/components/ui with @/registry/new-york-v4/ui
  fixed = fixed.replace(
    /@\/components\/ui\//g,
    "@/registry/new-york-v4/ui/"
  )

  // Also handle if there are any @/components/ui imports without trailing slash
  fixed = fixed.replace(
    /from ["']@\/components\/ui\/([^"']+)["']/g,
    'from "@/registry/new-york-v4/ui/$1"'
  )

  return fixed
}

/**
 * Process a component file
 */
function fixComponentFile(filePath: string): void {
  const code = fs.readFileSync(filePath, "utf-8")
  const fixed = fixRegistryImports(code)

  if (code !== fixed) {
    fs.writeFileSync(filePath, fixed)
    console.log(`  ✓ Fixed registry imports in ${path.basename(filePath)}`)
  }
}

/**
 * Process all component files in a directory
 */
function fixComponentsInDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    console.log(`  Directory not found: ${dirPath}`)
    return
  }

  const files = fs.readdirSync(dirPath)

  for (const file of files) {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // Skip debug/temp directories
      if (file.startsWith("_")) continue
      // Recurse into subdirectories
      fixComponentsInDirectory(filePath)
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      fixComponentFile(filePath)
    }
  }
}

// If run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const targetDir = process.argv[2]

  if (!targetDir) {
    console.error("Usage: tsx fix-registry-imports.ts <directory>")
    process.exit(1)
  }

  console.log("🔧 Fixing registry imports...")
  console.log(`Directory: ${targetDir}\n`)

  fixComponentsInDirectory(targetDir)

  console.log("\n✅ Registry imports fixed!")
}

export { fixRegistryImports, fixComponentFile, fixComponentsInDirectory }
