import * as fs from "fs"
import * as path from "path"

const BLOCKS_REGISTRY_PATH = path.join(
  process.cwd(),
  "registry/new-york-v4/blocks/_registry.ts"
)

// Extract category from block name
// e.g., "application-forms-contact-form" -> "application"
// e.g., "marketing-hero-section-hero-1" -> "marketing"
function getCategoryFromBlockName(blockName: string): string | null {
  if (blockName.startsWith("application-")) return "application"
  if (blockName.startsWith("marketing-")) return "marketing"
  if (blockName.startsWith("e-commerce-")) return "e-commerce"
  if (blockName.startsWith("full-pages-")) return "full-pages"
  return null
}

async function main() {
  console.log("Reading blocks registry...")
  let content = fs.readFileSync(BLOCKS_REGISTRY_PATH, "utf-8")

  // Find all blocks without categories
  const blockPattern = /{\s*name:\s*"([^"]+)",\s*type:\s*"registry:block",\s*description:\s*"([^"]*)",\s*files:\s*\[[\s\S]*?\],\s*}/g

  let match
  let replacements = 0
  const tempContent = content

  while ((match = blockPattern.exec(tempContent)) !== null) {
    const fullMatch = match[0]
    const blockName = match[1]

    // Check if this block already has categories
    if (fullMatch.includes("categories:")) {
      continue
    }

    const category = getCategoryFromBlockName(blockName)
    if (!category) {
      continue
    }

    // Add categories before the closing brace
    const withCategories = fullMatch.replace(
      /(\],)\s*}/,
      `$1\n    categories: ["${category}"],\n  }`
    )

    content = content.replace(fullMatch, withCategories)
    replacements++
  }

  if (replacements > 0) {
    fs.writeFileSync(BLOCKS_REGISTRY_PATH, content)
    console.log(`✅ Added categories to ${replacements} blocks`)
  } else {
    console.log("No blocks needed category updates")
  }
}

main().catch(console.error)
