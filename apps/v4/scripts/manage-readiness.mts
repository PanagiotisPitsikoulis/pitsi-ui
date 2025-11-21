#!/usr/bin/env node
import { promises as fs } from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

type Readiness = "alpha" | "beta" | "production"

type RegistryType = "ui" | "animations" | "blocks" | "charts" | "hooks" | "lib"

interface RegistryItem {
  name: string
  type: string
  readiness?: Readiness
  description?: string
  categories?: string[]
  [key: string]: any
}

const REGISTRY_PATHS: Record<RegistryType, string> = {
  ui: "registry/new-york-v4/ui/_registry.ts",
  animations: "registry/new-york-v4/animations/_registry.ts",
  blocks: "registry/new-york-v4/blocks/_registry.ts",
  charts: "registry/new-york-v4/charts/_registry.ts",
  hooks: "registry/new-york-v4/hooks/_registry.ts",
  lib: "registry/new-york-v4/lib/_registry.ts",
}

const READINESS_EMOJI: Record<Readiness, string> = {
  alpha: "🔴",
  beta: "🟡",
  production: "🟢",
}

async function parseRegistryFile(
  filePath: string,
  type: RegistryType
): Promise<RegistryItem[] | null> {
  try {
    // Use dynamic import to load the TypeScript file
    const absolutePath = path.join(__dirname, "..", REGISTRY_PATHS[type])
    const module = await import(absolutePath)

    // Get the exported array (ui, animations, blocks, etc.)
    const exportName = type
    const items = module[exportName]

    if (!Array.isArray(items)) {
      console.error(`Expected array export in ${filePath}`)
      return null
    }

    return items as RegistryItem[]
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error)
    return null
  }
}

async function updateRegistryFile(
  filePath: string,
  items: RegistryItem[]
): Promise<boolean> {
  try {
    const content = await fs.readFile(filePath, "utf-8")

    // Split content into individual item blocks
    const lines = content.split("\n")
    const newLines: string[] = []

    let inItems = false
    let currentItemIndex = -1
    let bracketDepth = 0
    let currentItemLines: string[] = []

    for (const line of lines) {
      // Track when we're inside the items array
      if (line.includes("Registry[\"items\"]")) {
        inItems = true
        newLines.push(line)
        continue
      }

      if (!inItems) {
        newLines.push(line)
        continue
      }

      // Track bracket depth
      const openBrackets = (line.match(/{/g) || []).length
      const closeBrackets = (line.match(/}/g) || []).length

      if (openBrackets > 0 && bracketDepth === 0 && line.trim().startsWith("{")) {
        // Start of a new item
        currentItemIndex++
        currentItemLines = [line]
        bracketDepth += openBrackets - closeBrackets

        if (bracketDepth === 0) {
          // Single line item (shouldn't happen but handle it)
          processItem(currentItemLines, items[currentItemIndex], newLines)
          currentItemLines = []
        }
      } else if (bracketDepth > 0) {
        // We're inside an item
        currentItemLines.push(line)
        bracketDepth += openBrackets - closeBrackets

        if (bracketDepth === 0) {
          // End of current item
          processItem(currentItemLines, items[currentItemIndex], newLines)
          currentItemLines = []
        }
      } else {
        // Outside any item (closing bracket of array, etc)
        newLines.push(line)
        if (line.includes("]")) {
          inItems = false
        }
      }
    }

    await fs.writeFile(filePath, newLines.join("\n"), "utf-8")
    return true
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error)
    return false
  }
}

function processItem(
  itemLines: string[],
  item: RegistryItem,
  output: string[]
): void {
  // Find where to insert readiness field (after description or type)
  let insertIndex = -1
  let hasReadiness = false

  for (let i = 0; i < itemLines.length; i++) {
    const line = itemLines[i]

    if (line.includes('readiness:')) {
      hasReadiness = true
      insertIndex = i
      break
    }

    if (line.includes('description:')) {
      insertIndex = i + 1
    } else if (insertIndex === -1 && line.includes('type:')) {
      insertIndex = i + 1
    }
  }

  // Determine indentation from the first property line
  let indent = "    "
  for (const line of itemLines) {
    if (line.includes("name:") || line.includes("type:")) {
      const match = line.match(/^(\s+)/)
      if (match) {
        indent = match[1]
      }
      break
    }
  }

  const readiness = item.readiness || "alpha"

  if (hasReadiness) {
    // Update existing readiness
    for (let i = 0; i < itemLines.length; i++) {
      if (itemLines[i].includes('readiness:')) {
        if (readiness === "alpha") {
          // Remove the readiness line if it's alpha (default)
          continue
        } else {
          output.push(`${indent}readiness: "${readiness}",`)
        }
      } else {
        output.push(itemLines[i])
      }
    }
  } else {
    // Add new readiness field
    if (readiness !== "alpha") {
      for (let i = 0; i < itemLines.length; i++) {
        output.push(itemLines[i])
        if (i === insertIndex - 1) {
          output.push(`${indent}readiness: "${readiness}",`)
        }
      }
    } else {
      // No readiness field needed (alpha is default)
      output.push(...itemLines)
    }
  }
}

async function listItems(
  types?: RegistryType[],
  readiness?: Readiness
): Promise<void> {
  const targetTypes = types || (Object.keys(REGISTRY_PATHS) as RegistryType[])

  const stats: Record<RegistryType, Record<Readiness, number>> = {
    ui: { alpha: 0, beta: 0, production: 0 },
    animations: { alpha: 0, beta: 0, production: 0 },
    blocks: { alpha: 0, beta: 0, production: 0 },
    charts: { alpha: 0, beta: 0, production: 0 },
    hooks: { alpha: 0, beta: 0, production: 0 },
    lib: { alpha: 0, beta: 0, production: 0 },
  }

  console.log("\n📋 Registry Readiness Status\n")

  for (const type of targetTypes) {
    const items = await parseRegistryFile(REGISTRY_PATHS[type], type)

    if (!items) continue

    console.log(`\n${type.toUpperCase()}:`)
    console.log("─".repeat(80))

    for (const item of items) {
      const itemReadiness = (item.readiness || "alpha") as Readiness
      stats[type][itemReadiness]++

      if (readiness && itemReadiness !== readiness) {
        continue
      }

      const emoji = READINESS_EMOJI[itemReadiness]
      const desc = item.description
        ? ` - ${item.description.substring(0, 50)}`
        : ""
      console.log(`${emoji} ${itemReadiness.padEnd(12)} ${item.name}${desc}`)
    }

    const total = items.length
    const alpha = stats[type].alpha
    const beta = stats[type].beta
    const prod = stats[type].production

    console.log("\n" + "─".repeat(80))
    console.log(
      `Total: ${total} | 🔴 Alpha: ${alpha} | 🟡 Beta: ${beta} | 🟢 Production: ${prod}`
    )
  }

  console.log("\n" + "=".repeat(80))
  console.log("OVERALL STATISTICS:")
  console.log("=".repeat(80))

  const totals = targetTypes.reduce(
    (acc, type) => {
      acc.alpha += stats[type].alpha
      acc.beta += stats[type].beta
      acc.production += stats[type].production
      return acc
    },
    { alpha: 0, beta: 0, production: 0 }
  )

  const grandTotal = totals.alpha + totals.beta + totals.production
  console.log(`\nTotal Items: ${grandTotal}`)
  console.log(`🔴 Alpha: ${totals.alpha} (${((totals.alpha / grandTotal) * 100).toFixed(1)}%)`)
  console.log(`🟡 Beta: ${totals.beta} (${((totals.beta / grandTotal) * 100).toFixed(1)}%)`)
  console.log(`🟢 Production: ${totals.production} (${((totals.production / grandTotal) * 100).toFixed(1)}%)\n`)
}

async function updateItemReadiness(
  type: RegistryType,
  itemName: string,
  newReadiness: Readiness
): Promise<void> {
  const registryPath = path.join(__dirname, "..", REGISTRY_PATHS[type])
  const items = await parseRegistryFile(REGISTRY_PATHS[type], type)

  if (!items) {
    console.error(`Failed to parse registry file for ${type}`)
    return
  }

  const item = items.find((i) => i.name === itemName)
  if (!item) {
    console.error(`Item "${itemName}" not found in ${type} registry`)
    return
  }

  const oldReadiness = item.readiness || "alpha"
  item.readiness = newReadiness

  const success = await updateRegistryFile(registryPath, items)

  if (success) {
    console.log(
      `✅ Updated "${itemName}" from ${READINESS_EMOJI[oldReadiness]} ${oldReadiness} to ${READINESS_EMOJI[newReadiness]} ${newReadiness}`
    )
  } else {
    console.error(`❌ Failed to update "${itemName}"`)
  }
}

async function bulkUpdate(
  type: RegistryType,
  items: string[],
  newReadiness: Readiness
): Promise<void> {
  const registryPath = path.join(__dirname, "..", REGISTRY_PATHS[type])
  const registryItems = await parseRegistryFile(REGISTRY_PATHS[type], type)

  if (!registryItems) {
    console.error(`Failed to parse registry file for ${type}`)
    return
  }

  let updatedCount = 0
  for (const itemName of items) {
    const item = registryItems.find((i) => i.name === itemName)
    if (!item) {
      console.warn(`⚠️  Item "${itemName}" not found in ${type} registry`)
      continue
    }

    const oldReadiness = item.readiness || "alpha"
    item.readiness = newReadiness
    console.log(
      `  ${itemName}: ${READINESS_EMOJI[oldReadiness]} ${oldReadiness} → ${READINESS_EMOJI[newReadiness]} ${newReadiness}`
    )
    updatedCount++
  }

  if (updatedCount > 0) {
    const success = await updateRegistryFile(registryPath, registryItems)
    if (success) {
      console.log(`\n✅ Updated ${updatedCount} items to ${newReadiness}`)
    } else {
      console.error(`❌ Failed to save changes`)
    }
  } else {
    console.log("No items were updated")
  }
}

async function main() {
  const args = process.argv.slice(2)
  const command = args[0]

  switch (command) {
    case "list":
    case "ls": {
      const types = args
        .find((arg) => arg.startsWith("--type="))
        ?.split("=")[1]
        ?.split(",") as RegistryType[] | undefined

      const readiness = args
        .find((arg) => arg.startsWith("--readiness="))
        ?.split("=")[1] as Readiness | undefined

      await listItems(types, readiness)
      break
    }

    case "update": {
      if (args.length < 4) {
        console.error(
          "Usage: pnpm readiness:update <type> <item-name> <readiness>"
        )
        console.error(
          "Example: pnpm readiness:update animations card-swipe-carousel beta"
        )
        process.exit(1)
      }

      const type = args[1] as RegistryType
      const itemName = args[2]
      const readiness = args[3] as Readiness

      if (!Object.keys(REGISTRY_PATHS).includes(type)) {
        console.error(`Invalid type: ${type}`)
        console.error(
          `Valid types: ${Object.keys(REGISTRY_PATHS).join(", ")}`
        )
        process.exit(1)
      }

      if (!["alpha", "beta", "production"].includes(readiness)) {
        console.error(`Invalid readiness: ${readiness}`)
        console.error("Valid values: alpha, beta, production")
        process.exit(1)
      }

      await updateItemReadiness(type, itemName, readiness)
      break
    }

    case "bulk-update": {
      if (args.length < 4) {
        console.error(
          "Usage: pnpm readiness:bulk <type> <readiness> <item1,item2,...>"
        )
        console.error(
          "Example: pnpm readiness:bulk animations beta 'card-swipe-carousel,parallax-scroll'"
        )
        process.exit(1)
      }

      const type = args[1] as RegistryType
      const readiness = args[2] as Readiness
      const items = args[3].split(",").map((s) => s.trim())

      if (!Object.keys(REGISTRY_PATHS).includes(type)) {
        console.error(`Invalid type: ${type}`)
        console.error(
          `Valid types: ${Object.keys(REGISTRY_PATHS).join(", ")}`
        )
        process.exit(1)
      }

      if (!["alpha", "beta", "production"].includes(readiness)) {
        console.error(`Invalid readiness: ${readiness}`)
        console.error("Valid values: alpha, beta, production")
        process.exit(1)
      }

      await bulkUpdate(type, items, readiness)
      break
    }

    case "help":
    case "--help":
    case "-h":
    default: {
      console.log(`
📦 Registry Readiness Management

USAGE:
  pnpm readiness <command> [options]

COMMANDS:
  list, ls              List all items with their readiness status
    --type=<types>      Filter by type (comma-separated): ui,animations,blocks,charts,hooks,lib
    --readiness=<level> Filter by readiness: alpha, beta, production

  update <type> <item> <readiness>
                        Update a single item's readiness
    Example: pnpm readiness:update animations card-swipe-carousel beta

  bulk-update <type> <readiness> <items>
                        Update multiple items at once
    Example: pnpm readiness:bulk animations beta 'card-swipe-carousel,parallax-scroll'

  help                  Show this help message

READINESS LEVELS:
  🔴 alpha      - Early development, may have bugs or incomplete features (default)
  🟡 beta       - Feature complete, undergoing testing
  🟢 production - Stable and ready for production use

EXAMPLES:
  pnpm readiness list
  pnpm readiness list --type=animations,blocks
  pnpm readiness list --readiness=beta
  pnpm readiness update animations card-swipe-carousel production
  pnpm readiness bulk animations beta 'card-swipe-carousel,parallax-scroll'
`)
      break
    }
  }
}

main().catch((error) => {
  console.error("Error:", error)
  process.exit(1)
})
