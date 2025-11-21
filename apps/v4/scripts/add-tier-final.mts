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
function getBlockSubcategory(item: string): string | null {
  const pathMatch = item.match(/path:\s*["']blocks\/[^/]+\/([^/]+)\//)
  return pathMatch ? pathMatch[1] : null
}

// Extract name from registry item
function getItemName(item: string): string | null {
  const nameMatch = item.match(/name:\s*["']([^"']+)["']/)
  return nameMatch ? nameMatch[1] : null
}

// Add tier to item
function addTierToItem(item: string, tier: "free" | "pro"): string {
  // Check if tier already exists
  if (item.match(/^\s*tier:/m)) {
    return item.replace(/^\s*tier:\s*["'](free|pro)["'],?\s*$/m, `    tier: "${tier}",`)
  }

  // Add tier as the last property before closing brace
  // Find the last line before the closing brace (which is just "  }," or "  }")
  const lines = item.split('\n')
  const closingIndex = lines.findIndex((line, idx) =>
    idx > 0 && line.trim() === '},' || line.trim() === '}'
  )

  if (closingIndex > 0) {
    lines.splice(closingIndex, 0, `    tier: "${tier}",`)
  }

  return lines.join('\n')
}

// Process a registry file
function processRegistry(filePath: string, getTier: (item: string, index: number, items: string[]) => "free" | "pro") {
  console.log(`\nProcessing ${path.basename(filePath)}...`)

  const content = fs.readFileSync(filePath, "utf-8")

  // Split by registry items (each item starts with "  {" and ends with "  }," or "  }")
  // We need to be careful to match the correct braces
  const itemsMatch = content.match(/export const \w+: Registry\["items"\] = \[([\s\S]*)\]/)
  if (!itemsMatch) {
    console.error("Could not find registry items")
    return
  }

  const itemsSection = itemsMatch[1]
  const preamble = content.substring(0, itemsMatch.index! + itemsMatch[0].indexOf('[') + 1)
  const postamble = ']'

  // Split items by looking for pattern "\n  },\n  {" or "\n  }\n]"
  // This is the boundary between items
  const items: string[] = []
  let currentItem = ""
  let depth = 0
  let inString = false
  let stringChar = ""

  for (let i = 0; i < itemsSection.length; i++) {
    const char = itemsSection[i]
    const prevChar = i > 0 ? itemsSection[i - 1] : ''

    // Handle strings
    if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
      if (!inString) {
        inString = true
        stringChar = char
      } else if (char === stringChar) {
        inString = false
      }
    }

    if (!inString) {
      if (char === '{') depth++
      if (char === '}') depth--

      // When depth returns to 0, we've completed an item
      if (depth === 0 && char === '}' && currentItem.trim()) {
        currentItem += char
        // Check if next char is comma
        if (itemsSection[i + 1] === ',') {
          currentItem += ','
          i++
        }
        items.push(currentItem.trim())
        currentItem = ""
        continue
      }
    }

    if (depth > 0 || char === '{') {
      currentItem += char
    }
  }

  console.log(`Found ${items.length} items`)

  // Apply tier to each item
  const updatedItems = items.map((item, index) => {
    const tier = getTier(item, index, items)
    return addTierToItem(item, tier)
  })

  // Reconstruct file
  const newContent = preamble + '\n  ' + updatedItems.join(',\n  ') + ',\n' + postamble

  fs.writeFileSync(filePath, newContent)

  // Count tiers
  const freeCount = updatedItems.filter(i => i.includes('tier: "free"')).length
  const proCount = updatedItems.filter(i => i.includes('tier: "pro"')).length
  console.log(`✅ Added tiers: ${freeCount} free, ${proCount} pro`)
}

async function main() {
  console.log("🎯 Adding tier pricing to registry items...")

  // Process UI components - all free
  processRegistry(REGISTRY_PATHS.ui, () => "free")

  // Process animations - all free
  processRegistry(REGISTRY_PATHS.animations, () => "free")

  // Process blocks - 30/70 split per subcategory
  processRegistry(REGISTRY_PATHS.blocks, (item, index, items) => {
    // Group items by subcategory
    const itemsWithSubcategory = items.map(i => ({
      item: i,
      name: getItemName(i) || '',
      subcategory: getBlockSubcategory(i) || 'uncategorized'
    }))

    const currentItem = itemsWithSubcategory[index]
    const subcategory = currentItem.subcategory

    // Get all items in this subcategory
    const subcategoryItems = itemsWithSubcategory
      .filter(i => i.subcategory === subcategory)
      .sort((a, b) => a.name.localeCompare(b.name))

    // Find index in sorted subcategory
    const sortedIndex = subcategoryItems.findIndex(i => i.name === currentItem.name)

    // Calculate 30% split
    const freeCount = Math.ceil(subcategoryItems.length * 0.3)

    return sortedIndex < freeCount ? "free" : "pro"
  })

  console.log("\n🎉 Done! All registry items have been updated with tiers.")
}

main().catch(console.error)
