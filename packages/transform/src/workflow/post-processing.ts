/**
 * Post-Processing Pipeline - Fix errors and download images
 *
 * This script runs only the post-processing steps:
 * 1. Fix errors (using Claude Code CLI)
 * 2. Download and fix images (localize external images)
 *
 * Usage:
 *   pnpm post-process          # Run all post-processing steps
 *   pnpm post-process --fix    # Only fix errors
 *   pnpm post-process --images # Only download images
 */

import { execSync } from "child_process"
import * as path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const TRANSFORM_ROOT = path.join(__dirname, "..", "..")
const V4_APP_DIR = path.join(__dirname, "..", "..", "..", "..", "apps", "v4")

interface StepResult {
  name: string
  success: boolean
  duration: number
  error?: string
}

/**
 * Run a command and capture result
 */
function runStep(
  name: string,
  command: string,
  cwd: string = TRANSFORM_ROOT
): StepResult {
  console.log(`\n${"=".repeat(60)}`)
  console.log(`📌 Step: ${name}`)
  console.log("=".repeat(60))

  const startTime = Date.now()

  try {
    execSync(command, {
      cwd,
      stdio: "inherit",
    })

    const duration = (Date.now() - startTime) / 1000
    console.log(`\n✓ ${name} completed in ${duration.toFixed(1)}s`)

    return { name, success: true, duration }
  } catch (error) {
    const duration = (Date.now() - startTime) / 1000
    const errorMsg = error instanceof Error ? error.message : String(error)

    console.log(`\n✗ ${name} failed after ${duration.toFixed(1)}s`)
    console.log(`  Error: ${errorMsg}`)

    return { name, success: false, duration, error: errorMsg }
  }
}

/**
 * Fix errors step
 */
function runFixErrors(): StepResult {
  const templatesPath = path.join(V4_APP_DIR, "app", "(app)", "templates")

  return runStep(
    "Fix Errors (Claude Code CLI)",
    `claude -p "Fix all TypeScript errors and type errors in this directory. Add @ts-nocheck at the top of files if needed for external template components. Fix any import errors by changing framer-motion to motion/react. Do not ask questions, just fix the errors." --allowedTools Edit,Read,Glob,Grep,Bash "${templatesPath}"`,
    V4_APP_DIR
  )
}

/**
 * Download images step
 */
function runDownloadImages(): StepResult {
  return runStep(
    "Download and Fix Images",
    "pnpm tsx src/scripts/download-template-images.ts"
  )
}

/**
 * Print usage
 */
function printUsage(): void {
  console.log(`
Usage: pnpm post-process [options]

Options:
  --fix       Only run error fixing (Claude Code CLI)
  --images    Only run image downloading
  --help      Show this help message

Examples:
  pnpm post-process          # Run all post-processing steps
  pnpm post-process --fix    # Only fix TypeScript errors
  pnpm post-process --images # Only download and localize images
`)
}

/**
 * Main function
 */
async function main(): Promise<void> {
  const args = process.argv.slice(2)

  // Check for help
  if (args.includes("--help") || args.includes("-h")) {
    printUsage()
    process.exit(0)
  }

  const runFix = args.includes("--fix") || args.length === 0
  const runImages = args.includes("--images") || args.length === 0

  console.log("\n")
  console.log("╔══════════════════════════════════════════════════════════╗")
  console.log("║           🔧 POST-PROCESSING PIPELINE 🔧                 ║")
  console.log("╚══════════════════════════════════════════════════════════╝")
  console.log("")

  if (runFix && runImages) {
    console.log("Running all post-processing steps:")
  } else if (runFix) {
    console.log("Running error fixing only:")
  } else if (runImages) {
    console.log("Running image downloading only:")
  }

  if (runFix) console.log("  • Fix errors (Claude Code CLI)")
  if (runImages) console.log("  • Download and fix images")
  console.log("")

  const startTime = Date.now()
  const results: StepResult[] = []

  try {
    // Step 1: Fix Errors (if enabled)
    if (runFix) {
      results.push(runFixErrors())

      if (!results[results.length - 1].success) {
        console.log("\n⚠️  Error fixing failed, but continuing...")
      }
    }

    // Step 2: Download Images (if enabled)
    if (runImages) {
      results.push(runDownloadImages())

      if (!results[results.length - 1].success) {
        console.log("\n⚠️  Image download failed, templates will use external URLs...")
      }
    }

    // Final Summary
    const totalDuration = (Date.now() - startTime) / 1000
    const successCount = results.filter((r) => r.success).length
    const failCount = results.filter((r) => !r.success).length

    console.log("\n")
    console.log("╔══════════════════════════════════════════════════════════╗")
    console.log("║              POST-PROCESSING COMPLETE                    ║")
    console.log("╚══════════════════════════════════════════════════════════╝")
    console.log("")
    console.log(`⏱️  Total time: ${totalDuration.toFixed(1)}s`)
    console.log(`✅ Passed: ${successCount}/${results.length} steps`)

    if (failCount > 0) {
      console.log(`❌ Failed: ${failCount} steps`)
      results
        .filter((r) => !r.success)
        .forEach((r) => {
          console.log(`   - ${r.name}: ${r.error}`)
        })
    }

    console.log("")
    console.log("📊 Step Summary:")
    results.forEach((r, i) => {
      const status = r.success ? "✓" : "✗"
      console.log(`   ${i + 1}. [${status}] ${r.name} (${r.duration.toFixed(1)}s)`)
    })

    console.log("")

    // Exit with appropriate code
    if (failCount > 0) {
      process.exit(1)
    }
  } catch (error) {
    console.error("\n❌ Post-processing failed:", error)
    process.exit(1)
  }
}

main().catch(console.error)
