#!/usr/bin/env tsx
/**
 * Priority Workflow - Run full pipeline for priority sites
 * 1. Capture screenshots & videos
 * 2. Extract themes & typography
 * 3. Generate React components with Gemini
 */

import { execSync } from "child_process"
import * as path from "path"
import { fileURLToPath } from "url"
import { getSitesToProcess, prioritySiteNames } from "../config/working-sites.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.join(__dirname, "..", "..")

interface StepResult {
  name: string
  success: boolean
  duration: number
  error?: string
}

function runStep(name: string, command: string): StepResult {
  console.log(`\n${"=".repeat(60)}`)
  console.log(`🚀 Step: ${name}`)
  console.log(`${"=".repeat(60)}\n`)

  const startTime = Date.now()

  try {
    execSync(command, {
      cwd: ROOT_DIR,
      stdio: "inherit",
      env: { ...process.env, FORCE_COLOR: "1" },
    })

    const duration = (Date.now() - startTime) / 1000
    console.log(`\n✅ ${name} completed in ${duration.toFixed(1)}s`)

    return { name, success: true, duration }
  } catch (error) {
    const duration = (Date.now() - startTime) / 1000
    const errorMessage = error instanceof Error ? error.message : String(error)

    console.error(`\n❌ ${name} failed after ${duration.toFixed(1)}s`)
    console.error(`   Error: ${errorMessage}`)

    return { name, success: false, duration, error: errorMessage }
  }
}

async function main() {
  const sites = getSitesToProcess()

  console.log(`
╔══════════════════════════════════════════════════════════════╗
║          🎯 Priority Workflow - Full Pipeline                ║
╚══════════════════════════════════════════════════════════════╝
`)

  if (prioritySiteNames.length === 0) {
    console.log("⚠️  No priority sites configured!")
    console.log("   Add sites to prioritySiteNames in src/config/working-sites.ts")
    console.log("   Or this will process ALL working sites.\n")
  }

  console.log(`Processing ${sites.length} site(s):`)
  sites.forEach((site) => console.log(`  • ${site.name}: ${site.url}`))

  const startTime = Date.now()
  const results: StepResult[] = []

  // Step 1: Capture screenshots & videos
  results.push(runStep("📸 Visual Capture (Screenshots & Videos)", "pnpm capture"))

  // Step 2: Extract themes
  results.push(runStep("🎨 Theme Extraction (Colors & Typography)", "pnpm extract:theme"))

  // Step 3: Generate components
  results.push(runStep("🤖 Component Generation (Gemini AI)", "pnpm generate"))

  // Summary
  const totalDuration = (Date.now() - startTime) / 1000 / 60
  const successful = results.filter((r) => r.success).length
  const failed = results.filter((r) => !r.success).length

  console.log(`
╔══════════════════════════════════════════════════════════════╗
║                      📊 Summary                              ║
╚══════════════════════════════════════════════════════════════╝
`)
  console.log(`Total time: ${totalDuration.toFixed(2)} minutes`)
  console.log(`Steps: ${successful} passed, ${failed} failed\n`)

  results.forEach((r) => {
    const status = r.success ? "✅" : "❌"
    console.log(`  ${status} ${r.name} (${r.duration.toFixed(1)}s)`)
    if (r.error) {
      console.log(`     └─ ${r.error.slice(0, 80)}`)
    }
  })

  console.log(`\n📁 Output: ${path.join(ROOT_DIR, "output")}`)
  console.log(`   • screenshots/  - Section screenshots`)
  console.log(`   • videos/       - Page scroll videos`)
  console.log(`   • themes/       - Extracted themes & fonts`)
  console.log(`   • components/   - Generated React components`)

  if (failed > 0) {
    process.exit(1)
  }
}

main().catch((error) => {
  console.error("Workflow failed:", error)
  process.exit(1)
})
