/**
 * Verify Templates Script
 *
 * Tests all template routes to ensure they work correctly:
 * 1. Checks each /templates/{slug} route returns 200
 * 2. Checks each /templates/preview/{slug} route returns 200
 * 3. Reports any errors or failures
 * 4. Optionally runs TypeScript type checking
 */

import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"
import { execSync, spawn, ChildProcess } from "child_process"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Paths
const V4_APP_DIR = path.join(__dirname, "..", "..", "..", "..", "apps", "v4")
const TEMPLATES_COMPONENTS_DIR = path.join(
  V4_APP_DIR,
  "app",
  "(app)",
  "templates",
  "_components"
)

const BASE_URL = "http://localhost:4000"
const MAX_RETRIES = 3
const RETRY_DELAY = 2000

interface VerificationResult {
  slug: string
  templateRoute: boolean
  previewRoute: boolean
  errors: string[]
}

/**
 * Sleep utility
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Check if dev server is running
 */
async function isServerRunning(): Promise<boolean> {
  try {
    const response = await fetch(`${BASE_URL}/templates`, {
      method: "HEAD",
    })
    return response.status === 200
  } catch {
    return false
  }
}

/**
 * Start dev server if not running
 */
async function ensureServerRunning(): Promise<ChildProcess | null> {
  console.log("🔍 Checking if dev server is running...")

  if (await isServerRunning()) {
    console.log("  ✓ Dev server already running")
    return null
  }

  console.log("  ⚠️  Dev server not running, starting it...")

  const serverProcess = spawn("pnpm", ["dev"], {
    cwd: V4_APP_DIR,
    stdio: "pipe",
    detached: true,
  })

  // Wait for server to be ready
  let attempts = 0
  const maxAttempts = 30 // 60 seconds max

  while (attempts < maxAttempts) {
    await sleep(2000)
    if (await isServerRunning()) {
      console.log("  ✓ Dev server started successfully")
      return serverProcess
    }
    attempts++
    process.stdout.write(".")
  }

  throw new Error("Failed to start dev server")
}

/**
 * Get all template slugs from _components directory
 */
function getAllSlugs(): string[] {
  const slugs: string[] = []

  if (!fs.existsSync(TEMPLATES_COMPONENTS_DIR)) {
    return slugs
  }

  const families = fs.readdirSync(TEMPLATES_COMPONENTS_DIR).filter((f) => {
    const fullPath = path.join(TEMPLATES_COMPONENTS_DIR, f)
    return fs.statSync(fullPath).isDirectory()
  })

  for (const family of families) {
    const familyPath = path.join(TEMPLATES_COMPONENTS_DIR, family)
    const files = fs.readdirSync(familyPath).filter((f) => f.endsWith(".tsx"))

    for (const file of files) {
      const componentName = file.replace("Page.tsx", "").replace(".tsx", "")
      const readableName = componentName
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()
        .replace(/^-/, "")
      const slug = `${family}-${readableName}`
      slugs.push(slug)
    }
  }

  return slugs
}

/**
 * Test a single route with retries
 */
async function testRoute(url: string): Promise<{ ok: boolean; status: number; error?: string }> {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(url)
      return { ok: response.ok, status: response.status }
    } catch (error) {
      if (attempt === MAX_RETRIES - 1) {
        return {
          ok: false,
          status: 0,
          error: error instanceof Error ? error.message : "Unknown error",
        }
      }
      await sleep(RETRY_DELAY)
    }
  }

  return { ok: false, status: 0, error: "Max retries exceeded" }
}

/**
 * Verify a single template
 */
async function verifyTemplate(slug: string): Promise<VerificationResult> {
  const result: VerificationResult = {
    slug,
    templateRoute: false,
    previewRoute: false,
    errors: [],
  }

  // Test template detail route
  const templateUrl = `${BASE_URL}/templates/${slug}`
  const templateResult = await testRoute(templateUrl)
  result.templateRoute = templateResult.ok

  if (!templateResult.ok) {
    result.errors.push(
      `Template route failed: ${templateResult.status} ${templateResult.error || ""}`
    )
  }

  // Test preview route
  const previewUrl = `${BASE_URL}/templates/preview/${slug}`
  const previewResult = await testRoute(previewUrl)
  result.previewRoute = previewResult.ok

  if (!previewResult.ok) {
    result.errors.push(
      `Preview route failed: ${previewResult.status} ${previewResult.error || ""}`
    )
  }

  return result
}

/**
 * Run TypeScript type checking on v4 app
 */
function runTypeCheck(): { passed: boolean; errors: string[] } {
  console.log("\n🔍 Running TypeScript type check...")

  try {
    execSync("pnpm typecheck", {
      cwd: V4_APP_DIR,
      stdio: "pipe",
    })
    console.log("  ✓ Type check passed")
    return { passed: true, errors: [] }
  } catch (error: any) {
    const stderr = error.stderr?.toString() || ""
    const errors = stderr
      .split("\n")
      .filter((line: string) => line.includes("error TS"))
      .slice(0, 10) // Limit to first 10 errors

    console.log(`  ✗ Type check failed with ${errors.length}+ errors`)
    return { passed: false, errors }
  }
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log("🧪 Template Verification - Testing all template routes")
  console.log("=".repeat(60))

  let serverProcess: ChildProcess | null = null

  try {
    // Ensure server is running
    serverProcess = await ensureServerRunning()

    // Get all slugs
    const slugs = getAllSlugs()

    if (slugs.length === 0) {
      console.log("\n⚠️  No templates found. Run sync-templates first.")
      process.exit(1)
    }

    console.log(`\n📋 Found ${slugs.length} templates to verify`)

    // Verify each template
    console.log("\n🔍 Testing routes...")
    const results: VerificationResult[] = []

    for (const slug of slugs) {
      const result = await verifyTemplate(slug)
      results.push(result)

      const status =
        result.templateRoute && result.previewRoute ? "✓" : "✗"
      console.log(`  ${status} ${slug}`)

      if (result.errors.length > 0) {
        result.errors.forEach((e) => console.log(`      ${e}`))
      }
    }

    // Run type check
    const typeCheck = runTypeCheck()

    // Summary
    console.log("\n" + "=".repeat(60))
    console.log("📊 Verification Summary")
    console.log("=".repeat(60))

    const passed = results.filter((r) => r.templateRoute && r.previewRoute)
    const failed = results.filter((r) => !r.templateRoute || !r.previewRoute)

    console.log(`\n✅ Passed: ${passed.length}/${results.length} templates`)

    if (failed.length > 0) {
      console.log(`\n❌ Failed: ${failed.length} templates`)
      failed.forEach((r) => {
        console.log(`   - ${r.slug}`)
        r.errors.forEach((e) => console.log(`     ${e}`))
      })
    }

    console.log(`\n📝 Type Check: ${typeCheck.passed ? "✓ Passed" : "✗ Failed"}`)

    if (!typeCheck.passed && typeCheck.errors.length > 0) {
      console.log("   Errors:")
      typeCheck.errors.forEach((e) => console.log(`     ${e}`))
    }

    // Exit with appropriate code
    if (failed.length > 0 || !typeCheck.passed) {
      console.log(
        "\n⚠️  Some verifications failed. Check errors above."
      )
      process.exit(1)
    }

    console.log("\n🎉 All verifications passed!")
  } finally {
    // Clean up server process if we started it
    if (serverProcess) {
      console.log("\n🛑 Stopping dev server...")
      serverProcess.kill()
    }
  }
}

main().catch((error) => {
  console.error("\n❌ Verification failed:", error.message)
  process.exit(1)
})
