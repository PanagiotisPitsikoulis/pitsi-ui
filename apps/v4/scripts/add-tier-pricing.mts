import * as fs from "fs"
import * as path from "path"

const REGISTRY_PATHS = {
  blocks: path.join(process.cwd(), "registry/new-york-v4/blocks/_registry.ts"),
  ui: path.join(process.cwd(), "registry/new-york-v4/ui/_registry.ts"),
  animations: path.join(
    process.cwd(),
    "registry/new-york-v4/animations/_registry.ts"
  ),
}

// Extract subcategory from block's file path
// e.g., "blocks/application/dashboard/dashboard-01/page.tsx" -> "dashboard"
function getBlockSubcategory(filePath: string): string | null {
  const match = filePath.match(/blocks\/[^/]+\/([^/]+)\//)
  return match ? match[1] : null
}

// Parse the registry file to extract block definitions
function parseRegistryFile(content: string): {
  blocks: Array<{ name: string; text: string; subcategory: string | null }>
  preamble: string
  postamble: string
} {
  const blocks: Array<{
    name: string
    text: string
    subcategory: string | null
  }> = []

  // Find the export statement
  const exportMatch = content.match(
    /export const (\w+): Registry\["items"\] = \[/
  )
  if (!exportMatch) {
    throw new Error("Could not find registry export")
  }

  const preamble = content.substring(0, exportMatch.index! + exportMatch[0].length)

  // Find all block objects using a simple brace counting approach
  let depth = 0
  let currentBlock = ""
  let blockStart = -1
  let inString = false
  let stringChar = ""
  let escaped = false

  const startPos = exportMatch.index! + exportMatch[0].length

  for (let i = startPos; i < content.length; i++) {
    const char = content[i]
    const prevChar = i > 0 ? content[i - 1] : ""

    // Handle string escaping
    if (escaped) {
      escaped = false
      if (depth > 0) currentBlock += char
      continue
    }

    if (char === "\\") {
      escaped = true
      if (depth > 0) currentBlock += char
      continue
    }

    // Handle strings
    if ((char === '"' || char === "'" || char === "`") && !inString) {
      inString = true
      stringChar = char
      if (depth > 0) currentBlock += char
      continue
    }

    if (inString && char === stringChar) {
      inString = false
      if (depth > 0) currentBlock += char
      continue
    }

    if (inString) {
      if (depth > 0) currentBlock += char
      continue
    }

    // Track braces
    if (char === "{") {
      if (depth === 0) {
        blockStart = i
        currentBlock = "{"
      } else {
        currentBlock += char
      }
      depth++
    } else if (char === "}") {
      depth--
      if (depth > 0) {
        currentBlock += char
      } else if (depth === 0 && blockStart >= 0) {
        currentBlock += char

        // Extract name from the block
        const nameMatch = currentBlock.match(/name:\s*["']([^"']+)["']/)
        const name = nameMatch ? nameMatch[1] : `unknown-${blocks.length}`

        // Extract first file path to determine subcategory
        const filePathMatch = currentBlock.match(
          /path:\s*["']([^"']+)["']/
        )
        const filePath = filePathMatch ? filePathMatch[1] : null
        const subcategory = filePath ? getBlockSubcategory(filePath) : null

        blocks.push({
          name,
          text: currentBlock,
          subcategory,
        })

        currentBlock = ""
        blockStart = -1
      }
    } else if (depth > 0) {
      currentBlock += char
    }
  }

  // Find the postamble (everything after the last block)
  const lastBracket = content.lastIndexOf("]")
  const postamble = content.substring(lastBracket)

  return { blocks, preamble, postamble }
}

// Add tier to a block definition
function addTierToBlock(blockText: string, tier: "free" | "pro"): string {
  // Check if tier already exists at the top level
  if (/^\s{2,4}tier:\s*["'](free|pro)["'],?\s*$/m.test(blockText)) {
    // Replace existing tier
    return blockText.replace(
      /^(\s{2,4})tier:\s*["'](free|pro)["'],?\s*$/m,
      `$1tier: "${tier}",`
    )
  }

  // Strategy: Insert tier right before the final closing brace
  // We need to find the OUTERMOST closing brace, accounting for strings

  let depth = 0
  let lastOutermostClosingBrace = -1
  let inString = false
  let stringChar = ""
  let escaped = false

  for (let i = 0; i < blockText.length; i++) {
    const char = blockText[i]

    // Handle escaping
    if (escaped) {
      escaped = false
      continue
    }

    if (char === "\\") {
      escaped = true
      continue
    }

    // Handle strings
    if ((char === '"' || char === "'" || char === "`") && !inString) {
      inString = true
      stringChar = char
      continue
    }

    if (inString && char === stringChar) {
      inString = false
      continue
    }

    if (inString) {
      continue
    }

    // Track braces only when not in strings
    if (char === "{") {
      depth++
    } else if (char === "}") {
      depth--
      if (depth === 0) {
        lastOutermostClosingBrace = i
      }
    }
  }

  if (lastOutermostClosingBrace === -1) {
    console.warn("Could not find outermost closing brace")
    return blockText
  }

  // Insert tier before the outermost closing brace
  const before = blockText.substring(0, lastOutermostClosingBrace)
  const after = blockText.substring(lastOutermostClosingBrace)

  return `${before}    tier: "${tier}",\n${after}`
}

async function processBlocksRegistry() {
  console.log("📦 Processing blocks registry...")
  const content = fs.readFileSync(REGISTRY_PATHS.blocks, "utf-8")
  const { blocks, preamble, postamble } = parseRegistryFile(content)

  // Group blocks by subcategory
  const blocksBySubcategory = new Map<
    string,
    Array<{ name: string; text: string }>
  >()

  blocks.forEach((block) => {
    const subcategory = block.subcategory || "uncategorized"
    if (!blocksBySubcategory.has(subcategory)) {
      blocksBySubcategory.set(subcategory, [])
    }
    blocksBySubcategory.get(subcategory)!.push({
      name: block.name,
      text: block.text,
    })
  })

  // Process each subcategory with 30/70 split
  const updatedBlocks: string[] = []
  let freeCount = 0
  let proCount = 0

  blocksBySubcategory.forEach((subcategoryBlocks, subcategory) => {
    // Sort alphabetically for consistent results
    subcategoryBlocks.sort((a, b) => a.name.localeCompare(b.name))

    // Calculate 30% split
    const freeCountInCategory = Math.ceil(subcategoryBlocks.length * 0.3)

    subcategoryBlocks.forEach((block, index) => {
      const tier = index < freeCountInCategory ? "free" : "pro"
      const updatedBlock = addTierToBlock(block.text, tier)
      updatedBlocks.push(updatedBlock)

      if (tier === "free") freeCount++
      else proCount++
    })

    console.log(
      `  ${subcategory}: ${freeCountInCategory} free / ${subcategoryBlocks.length - freeCountInCategory} pro`
    )
  })

  // Reconstruct the file
  const newContent =
    preamble + "\n  " + updatedBlocks.join(",\n  ") + ",\n" + postamble

  fs.writeFileSync(REGISTRY_PATHS.blocks, newContent)
  console.log(
    `✅ Updated blocks: ${freeCount} free, ${proCount} pro (${blocks.length} total)\n`
  )
}

async function processComponentsRegistry(
  registryPath: string,
  name: string
) {
  console.log(`📦 Processing ${name} registry...`)
  const content = fs.readFileSync(registryPath, "utf-8")
  const { blocks: items, preamble, postamble } = parseRegistryFile(content)

  // All components/animations are free
  const updatedItems = items.map((item) => addTierToBlock(item.text, "free"))

  // Reconstruct the file
  const newContent =
    preamble + "\n  " + updatedItems.join(",\n  ") + ",\n" + postamble

  fs.writeFileSync(registryPath, newContent)
  console.log(`✅ Updated ${name}: ${items.length} items marked as free\n`)
}

async function main() {
  console.log("🎯 Adding tier pricing to registry items...\n")

  try {
    // Process blocks with 30/70 split per subcategory
    await processBlocksRegistry()

    // Process UI components - all free
    await processComponentsRegistry(REGISTRY_PATHS.ui, "UI components")

    // Process animations - all free
    await processComponentsRegistry(REGISTRY_PATHS.animations, "animations")

    console.log("🎉 Done! All registry items have been updated with tiers.")
  } catch (error) {
    console.error("❌ Error:", error)
    process.exit(1)
  }
}

main().catch(console.error)
