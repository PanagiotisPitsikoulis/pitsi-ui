/**
 * Fix common import errors in generated components
 */

import * as fs from "fs"
import * as path from "path"

/**
 * Icon name mappings - common incorrect names to correct ones
 */
const ICON_FIXES: Record<string, string> = {
  // Invalid icons -> Valid alternatives
  HardHat: "HardHat", // Actually exists in newer versions, keep for now
  BarChart: "BarChart3",
  Chart: "BarChart3",
  // Add more mappings as we discover them
}

/**
 * Icons that don't exist in lucide-react - remove them
 */
const INVALID_ICONS = new Set<string>([
  // "HardHat", // Actually this exists in lucide-react v0.263.0+
])

/**
 * Fix icon imports in a TypeScript file
 */
export function fixIconImports(code: string): string {
  let fixed = code

  // Find all lucide-react imports
  const lucideImportRegex = /import\s*{([^}]+)}\s*from\s*["']lucide-react["']/g
  const matches = [...code.matchAll(lucideImportRegex)]

  for (const match of matches) {
    const originalImport = match[0]
    const importedIcons = match[1]
      .split(",")
      .map((icon) => icon.trim())
      .filter(Boolean)

    // Fix or remove invalid icons
    const fixedIcons = importedIcons
      .map((icon) => {
        // Remove invalid icons
        if (INVALID_ICONS.has(icon)) {
          return null
        }
        // Replace with correct name
        if (ICON_FIXES[icon]) {
          return ICON_FIXES[icon]
        }
        return icon
      })
      .filter(Boolean)

    // Rebuild import statement
    const fixedImport = `import { ${fixedIcons.join(", ")} } from "lucide-react"`

    fixed = fixed.replace(originalImport, fixedImport)
  }

  return fixed
}

/**
 * Remove Next.js specific imports that won't work in browser preview
 */
export function removeNextJsImports(code: string): string {
  let fixed = code

  // Remove Next.js Image import
  fixed = fixed.replace(/import\s+Image\s+from\s+["']next\/image["'];?\s*\n?/g, "")

  // Remove Next.js Link import
  fixed = fixed.replace(/import\s+Link\s+from\s+["']next\/link["'];?\s*\n?/g, "")

  // Replace <Image> with <img>
  fixed = fixed.replace(/<Image\s/g, "<img ")

  // Replace <Link> with <a>
  fixed = fixed.replace(/<Link\s/g, "<a ")
  fixed = fixed.replace(/<\/Link>/g, "</a>")

  return fixed
}

/**
 * Fix imports to use registry paths instead of @/components/ui
 */
export function fixRegistryImports(code: string): string {
  let fixed = code

  // Replace @/components/ui with @/registry/new-york-v4/ui
  fixed = fixed.replace(/@\/components\/ui\//g, "@/registry/new-york-v4/ui/")

  return fixed
}

/**
 * Fix all component imports
 */
export function fixComponentImports(code: string): string {
  let fixed = code

  fixed = fixIconImports(fixed)
  fixed = removeNextJsImports(fixed)
  fixed = fixRegistryImports(fixed)

  return fixed
}

/**
 * Process a component file
 */
export function fixComponentFile(filePath: string): void {
  const code = fs.readFileSync(filePath, "utf-8")
  const fixed = fixComponentImports(code)

  if (code !== fixed) {
    fs.writeFileSync(filePath, fixed)
    console.log(`  ✓ Fixed imports in ${path.basename(filePath)}`)
  }
}

/**
 * Process all component files in a directory
 */
export function fixComponentsInDirectory(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    console.log(`  Directory not found: ${dirPath}`)
    return
  }

  const files = fs.readdirSync(dirPath)

  for (const file of files) {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // Skip debug directories
      if (file.startsWith("_")) continue
      // Recurse into subdirectories
      fixComponentsInDirectory(filePath)
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      fixComponentFile(filePath)
    }
  }
}
