/**
 * Full Pipeline - End-to-end template generation workflow
 *
 * Complete workflow:
 * 1. Capture (scrape HTML, screenshots)
 * 2. Extract theme
 * 3. Generate pixel-perfect static components with Gemini
 * 4. Sync to v4 app (auto-organize families)
 * 5. Fix errors (using Claude Code CLI)
 * 6. Download and fix images (localize external images)
 * 7. Verify all routes work
 * 8. Report success/failures
 *
 * Usage: pnpm workflow:full
 */

import { execSync, spawn, ChildProcess } from "child_process"
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
 * Sleep utility
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
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
 * Check if dev server is running
 */
async function isServerRunning(url: string): Promise<boolean> {
  try {
    const response = await fetch(url)
    return response.ok
  } catch {
    return false
  }
}

/**
 * Start dev server and wait for it to be ready
 */
async function startDevServer(): Promise<ChildProcess | null> {
  console.log("\n🚀 Starting v4 dev server...")

  if (await isServerRunning("http://localhost:4000/templates")) {
    console.log("  ✓ Dev server already running")
    return null
  }

  const serverProcess = spawn("pnpm", ["dev"], {
    cwd: V4_APP_DIR,
    stdio: "pipe",
    detached: false,
  })

  // Capture output for debugging
  serverProcess.stdout?.on("data", (data) => {
    const output = data.toString()
    if (output.includes("Ready") || output.includes("ready")) {
      console.log("  ✓ Dev server ready")
    }
  })

  // Wait for server to be ready
  let attempts = 0
  const maxAttempts = 60 // 120 seconds max

  while (attempts < maxAttempts) {
    await sleep(2000)
    if (await isServerRunning("http://localhost:4000")) {
      console.log("  ✓ Dev server started successfully")
      await sleep(3000) // Extra wait for full initialization
      return serverProcess
    }
    attempts++
  }

  throw new Error("Failed to start dev server within 2 minutes")
}

/**
 * Main pipeline
 */
async function main(): Promise<void> {
  console.log("\n")
  console.log("╔══════════════════════════════════════════════════════════╗")
  console.log("║       🚀 FULL TEMPLATE GENERATION PIPELINE 🚀            ║")
  console.log("╚══════════════════════════════════════════════════════════╝")
  console.log("")
  console.log("This will run the complete end-to-end workflow:")
  console.log("  1. Capture (HTML, screenshots)")
  console.log("  2. Extract theme")
  console.log("  3. Generate pixel-perfect static components with Gemini AI")
  console.log("  4. Sync to v4 app")
  console.log("  5. Fix errors (Claude Code CLI)")
  console.log("  6. Download and fix images")
  console.log("  7. Verify all routes")
  console.log("")

  const startTime = Date.now()
  const results: StepResult[] = []
  let serverProcess: ChildProcess | null = null

  try {
    // Step 1: Capture
    results.push(
      runStep(
        "Visual Capture (Screenshots)",
        "pnpm tsx src/features/visual-capture/visual-scraper.ts"
      )
    )

    if (!results[results.length - 1].success) {
      console.log("\n⚠️  Capture failed, but continuing with existing data...")
    }

    // Step 2: Theme Extraction
    results.push(
      runStep(
        "Theme Extraction",
        "pnpm tsx src/features/theme-extractor/index.ts"
      )
    )

    if (!results[results.length - 1].success) {
      console.log("\n⚠️  Theme extraction failed, using defaults...")
    }

    // Step 3: Generate Components
    results.push(
      runStep(
        "Pixel-Perfect Component Generation (Gemini AI)",
        "pnpm tsx src/features/component-generator/index.ts"
      )
    )

    if (!results[results.length - 1].success) {
      throw new Error("Component generation failed - cannot continue")
    }

    // Step 4: Sync to v4
    results.push(
      runStep("Sync to v4 App", "pnpm tsx src/scripts/sync-templates.ts")
    )

    if (!results[results.length - 1].success) {
      throw new Error("Sync failed - cannot continue")
    }

    // Step 5: Fix Errors (using Claude Code CLI)
    results.push(
      runStep(
        "Fix Errors (Claude Code CLI)",
        `claude -p "Fix all TypeScript errors and type errors in this directory. Add @ts-nocheck if needed for external template components. Fix any import errors by changing framer-motion to motion/react." --allowedTools Edit,Read,Glob,Grep,Bash ${V4_APP_DIR}/app/\\(app\\)/templates`,
        V4_APP_DIR
      )
    )

    if (!results[results.length - 1].success) {
      console.log("\n⚠️  Error fixing failed, but continuing...")
    }

    // Step 6: Download and Fix Images
    results.push(
      runStep(
        "Download and Fix Images",
        "pnpm tsx src/scripts/download-template-images.ts"
      )
    )

    if (!results[results.length - 1].success) {
      console.log("\n⚠️  Image download failed, templates will use external URLs...")
    }

    // Step 7: Start dev server for verification
    serverProcess = await startDevServer()

    // Give the server a moment to fully compile
    console.log("\n⏳ Waiting for server to compile templates...")
    await sleep(10000)

    // Step 8: Verify Routes
    results.push(
      runStep("Route Verification", "pnpm tsx src/scripts/verify-templates.ts")
    )

    // Final Summary
    const totalDuration = (Date.now() - startTime) / 1000 / 60 // in minutes
    const successCount = results.filter((r) => r.success).length
    const failCount = results.filter((r) => !r.success).length

    console.log("\n")
    console.log("╔══════════════════════════════════════════════════════════╗")
    console.log("║                    PIPELINE COMPLETE                     ║")
    console.log("╚══════════════════════════════════════════════════════════╝")
    console.log("")
    console.log(`⏱️  Total time: ${totalDuration.toFixed(1)} minutes`)
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
    console.log("🔗 View templates at: http://localhost:4000/templates")
    console.log("")

    // Exit with appropriate code
    if (failCount > 0) {
      process.exit(1)
    }
  } catch (error) {
    console.error("\n❌ Pipeline failed:", error)
    process.exit(1)
  } finally {
    // Clean up
    if (serverProcess) {
      console.log("\n🛑 Stopping dev server...")
      serverProcess.kill("SIGTERM")
    }
  }
}

main().catch(console.error)
