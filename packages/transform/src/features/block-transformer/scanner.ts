/**
 * Block Scanner - Finds and loads blocks from the registry
 */

import * as fs from "fs"
import * as path from "path"

import type {
  BlockDefinition,
  ScannedBlock,
  ScannedBlockFile,
  TransformOptions,
} from "./types.js"

const REGISTRY_BASE = "registry/new-york-v4"

/**
 * Load block definitions from _registry.ts using dynamic import
 */
export async function loadBlockDefinitions(
  registryPath: string
): Promise<BlockDefinition[]> {
  const registryFile = path.join(
    registryPath,
    REGISTRY_BASE,
    "blocks/_registry.ts"
  )

  if (!fs.existsSync(registryFile)) {
    throw new Error(`Registry file not found: ${registryFile}`)
  }

  try {
    // Use dynamic import to load the TypeScript file
    // tsx handles the TypeScript compilation
    const fileUrl = `file://${registryFile}`
    const module = await import(fileUrl)

    if (!module.blocks || !Array.isArray(module.blocks)) {
      throw new Error("Registry file does not export a 'blocks' array")
    }

    return module.blocks as BlockDefinition[]
  } catch (error) {
    // Fallback: parse the JSON blocks file if it exists
    const jsonFile = path.join(registryPath, "registry/__blocks__.json")

    if (fs.existsSync(jsonFile)) {
      console.log("Using cached __blocks__.json...")
      const content = fs.readFileSync(jsonFile, "utf-8")
      const data = JSON.parse(content)
      return data as BlockDefinition[]
    }

    throw new Error(`Failed to load blocks: ${error}`)
  }
}

/**
 * Filter blocks based on options
 */
export function filterBlocks(
  blocks: BlockDefinition[],
  options: TransformOptions
): BlockDefinition[] {
  return blocks.filter((block) => {
    // Filter by readiness
    if (options.readinessFilter && options.readinessFilter.length > 0) {
      const readiness = block.readiness || "alpha"
      if (!options.readinessFilter.includes(readiness as any)) {
        return false
      }
    }

    // Filter by tier
    if (options.tierFilter && options.tierFilter.length > 0) {
      const tier = block.tier || "free"
      if (!options.tierFilter.includes(tier)) {
        return false
      }
    }

    // Filter by category
    if (options.categoryFilter && options.categoryFilter.length > 0) {
      const categories = block.categories || []
      if (!categories.some((c) => options.categoryFilter!.includes(c))) {
        return false
      }
    }

    // Filter by specific block names
    if (options.blockNames && options.blockNames.length > 0) {
      if (!options.blockNames.includes(block.name)) {
        return false
      }
    }

    return true
  })
}

/**
 * Scan a block and load all its file contents
 */
export async function scanBlock(
  block: BlockDefinition,
  registryPath: string
): Promise<ScannedBlock> {
  const basePath = path.join(registryPath, REGISTRY_BASE)
  const files: ScannedBlockFile[] = []

  for (const file of block.files) {
    const absolutePath = path.join(basePath, file.path)

    if (!fs.existsSync(absolutePath)) {
      console.warn(`File not found: ${absolutePath}`)
      continue
    }

    const content = fs.readFileSync(absolutePath, "utf-8")

    files.push({
      path: file.path,
      absolutePath,
      content,
      type: file.type,
    })
  }

  return {
    definition: block,
    files,
    basePath,
  }
}

/**
 * Scan all blocks matching the filter options
 */
export async function scanBlocks(
  options: TransformOptions
): Promise<ScannedBlock[]> {
  console.log(`\n📂 Scanning blocks from: ${options.registryPath}`)

  // Load all block definitions
  const allBlocks = await loadBlockDefinitions(options.registryPath)
  console.log(`   Found ${allBlocks.length} total block definitions`)

  // Filter blocks
  const filteredBlocks = filterBlocks(allBlocks, options)
  console.log(`   ${filteredBlocks.length} blocks match filter criteria`)

  if (options.readinessFilter) {
    console.log(`   Readiness filter: ${options.readinessFilter.join(", ")}`)
  }
  if (options.tierFilter) {
    console.log(`   Tier filter: ${options.tierFilter.join(", ")}`)
  }
  if (options.categoryFilter) {
    console.log(`   Category filter: ${options.categoryFilter.join(", ")}`)
  }

  // Scan each block
  const scannedBlocks: ScannedBlock[] = []

  for (const block of filteredBlocks) {
    try {
      const scanned = await scanBlock(block, options.registryPath)
      scannedBlocks.push(scanned)
    } catch (error) {
      console.error(`   Error scanning block ${block.name}:`, error)
    }
  }

  console.log(`   Successfully scanned ${scannedBlocks.length} blocks\n`)

  return scannedBlocks
}

/**
 * Get block categories from registry
 */
export function getBlockCategories(blocks: BlockDefinition[]): string[] {
  const categories = new Set<string>()

  for (const block of blocks) {
    if (block.categories) {
      block.categories.forEach((c) => categories.add(c))
    }
  }

  return Array.from(categories).sort()
}

/**
 * Group blocks by category
 */
export function groupBlocksByCategory(
  blocks: BlockDefinition[]
): Map<string, BlockDefinition[]> {
  const grouped = new Map<string, BlockDefinition[]>()

  for (const block of blocks) {
    const category = block.categories?.[0] || "uncategorized"

    if (!grouped.has(category)) {
      grouped.set(category, [])
    }

    grouped.get(category)!.push(block)
  }

  return grouped
}
