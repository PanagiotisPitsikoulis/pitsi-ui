/**
 * Block Transformer - Main entry point
 *
 * Transforms registry blocks to make all hardcoded content configurable via props
 */

import * as fs from "fs"
import * as path from "path"
import pLimit from "p-limit"

import { scanBlocks, loadBlockDefinitions, filterBlocks } from "./scanner.js"
import {
  transformBlock,
  saveTransformedBlock,
  applyTransformation,
} from "./transformer.js"
import type { TransformOptions, TransformResult, ScannedBlock } from "./types.js"

// Re-export types and utilities
export * from "./types.js"
export * from "./scanner.js"
export * from "./transformer.js"
export * from "./prompts.js"

/**
 * Default transform options
 */
const DEFAULT_OPTIONS: Partial<TransformOptions> = {
  readinessFilter: ["alpha", "beta"],
  concurrency: 1, // Sequential by default to avoid rate limits
  dryRun: false,
}

/**
 * Run the block transformation workflow
 */
export async function runBlockTransformation(
  options: Partial<TransformOptions> & { registryPath: string; outputPath: string }
): Promise<TransformResult[]> {
  const opts: TransformOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
  } as TransformOptions

  console.log("\n" + "=".repeat(60))
  console.log("🔄 Block Transformer - Extracting Hardcoded Content to Props")
  console.log("=".repeat(60))

  // Ensure output directory exists
  fs.mkdirSync(opts.outputPath, { recursive: true })

  // Scan blocks
  const blocks = await scanBlocks(opts)

  if (blocks.length === 0) {
    console.log("No blocks found matching the filter criteria.")
    return []
  }

  // Transform blocks with concurrency limit
  const limit = pLimit(opts.concurrency || 1)
  const results: TransformResult[] = []

  const transformPromises = blocks.map((block) =>
    limit(async () => {
      const result = await transformBlock(block, opts)
      results.push(result)

      if (result.success && !opts.dryRun) {
        await saveTransformedBlock(result, opts.outputPath)
      }

      return result
    })
  )

  await Promise.all(transformPromises)

  // Print summary
  printSummary(results)

  return results
}

/**
 * Transform a single block by name
 */
export async function transformSingleBlock(
  blockName: string,
  registryPath: string,
  outputPath: string,
  options: { apply?: boolean; dryRun?: boolean } = {}
): Promise<TransformResult> {
  console.log(`\n🎯 Transforming single block: ${blockName}`)

  // Load and find the block
  const allBlocks = await loadBlockDefinitions(registryPath)
  const blockDef = allBlocks.find((b) => b.name === blockName)

  if (!blockDef) {
    throw new Error(`Block not found: ${blockName}`)
  }

  // Scan the block
  const blocks = await scanBlocks({
    registryPath,
    outputPath,
    blockNames: [blockName],
  })

  if (blocks.length === 0) {
    throw new Error(`Failed to scan block: ${blockName}`)
  }

  // Transform
  const result = await transformBlock(blocks[0], {
    registryPath,
    outputPath,
    dryRun: options.dryRun || false,
  })

  // Save or apply
  if (result.success && !options.dryRun) {
    if (options.apply) {
      await applyTransformation(result, registryPath)
      console.log(`\n✅ Applied transformation to registry`)
    } else {
      await saveTransformedBlock(result, outputPath)
      console.log(`\n✅ Saved to: ${outputPath}/${blockName}`)
    }
  }

  return result
}

/**
 * List available blocks
 */
export async function listBlocks(
  registryPath: string,
  options?: Partial<TransformOptions>
): Promise<void> {
  const allBlocks = await loadBlockDefinitions(registryPath)
  const filtered = options ? filterBlocks(allBlocks, options as TransformOptions) : allBlocks

  console.log("\n📋 Available Blocks")
  console.log("=".repeat(60))

  // Group by category
  const byCategory = new Map<string, typeof filtered>()
  for (const block of filtered) {
    const cat = block.categories?.[0] || "uncategorized"
    if (!byCategory.has(cat)) byCategory.set(cat, [])
    byCategory.get(cat)!.push(block)
  }

  for (const [category, blocks] of byCategory) {
    console.log(`\n${category.toUpperCase()} (${blocks.length})`)
    for (const block of blocks) {
      const tier = block.tier === "pro" ? "💎" : "🆓"
      const readiness = block.readiness || "alpha"
      console.log(`  ${tier} ${block.name} [${readiness}]`)
      if (block.description) {
        console.log(`     ${block.description.slice(0, 60)}...`)
      }
    }
  }

  console.log(`\nTotal: ${filtered.length} blocks`)
}

/**
 * Print transformation summary
 */
function printSummary(results: TransformResult[]): void {
  console.log("\n" + "=".repeat(60))
  console.log("📊 Transformation Summary")
  console.log("=".repeat(60))

  const successful = results.filter((r) => r.success)
  const failed = results.filter((r) => !r.success)

  console.log(`\n✅ Successful: ${successful.length}`)
  for (const r of successful) {
    console.log(`   - ${r.blockName} (${r.transformedFiles.length} files)`)
  }

  if (failed.length > 0) {
    console.log(`\n❌ Failed: ${failed.length}`)
    for (const r of failed) {
      console.log(`   - ${r.blockName}: ${r.error}`)
    }
  }

  console.log("\n" + "=".repeat(60))
}

/**
 * CLI entry point
 */
async function main() {
  const args = process.argv.slice(2)
  const command = args[0]

  // Default paths
  const registryPath =
    process.env.REGISTRY_PATH ||
    path.resolve(process.cwd(), "../../apps/v4")
  const outputPath =
    process.env.OUTPUT_PATH ||
    path.resolve(process.cwd(), "output/transformed-blocks")

  switch (command) {
    case "list":
      await listBlocks(registryPath, {
        registryPath,
        outputPath,
        readinessFilter: args.includes("--all") ? undefined : ["alpha", "beta"],
      })
      break

    case "transform":
      const blockName = args[1]
      if (blockName && !blockName.startsWith("--")) {
        await transformSingleBlock(
          blockName,
          registryPath,
          outputPath,
          {
            apply: args.includes("--apply"),
            dryRun: args.includes("--dry-run"),
          }
        )
      } else {
        // Transform all matching blocks
        await runBlockTransformation({
          registryPath,
          outputPath,
          readinessFilter: ["alpha", "beta"],
          dryRun: args.includes("--dry-run"),
          concurrency: parseInt(args.find((a) => a.startsWith("--concurrency="))?.split("=")[1] || "1"),
        })
      }
      break

    case "help":
    default:
      console.log(`
Block Transformer - Extract hardcoded content to props

Usage:
  pnpm transform:blocks list [--all]          List available blocks
  pnpm transform:blocks transform [name]      Transform block(s)
  pnpm transform:blocks transform name --apply Apply to registry
  pnpm transform:blocks help                  Show this help

Options:
  --all           Include all readiness levels
  --apply         Apply changes to registry (instead of output dir)
  --dry-run       Show what would be done without making changes
  --concurrency=N Process N blocks in parallel

Environment:
  REGISTRY_PATH   Path to v4 app (default: ../../apps/v4)
  OUTPUT_PATH     Output directory (default: output/transformed-blocks)
`)
      break
  }
}

// Run if executed directly
main().catch(console.error)
