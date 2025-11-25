import { execSync, spawn } from "child_process"
import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"
import { getSitesToProcess, WorkingSite } from "../../config/working-sites.js"
import { getAvailableComponents } from "./registry-components.js"
import { buildPrompt, PromptOptions } from "./prompts.js"
import { parseHtmlPage, generateContextSummary, ParsedPage } from "./html-parser.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Directories (within packages/transform)
const SCRAPED_HTML_DIR = path.join(__dirname, "..", "..", "..", "scraped-html-files")
const SCREENSHOTS_DIR = path.join(__dirname, "..", "..", "..", "output", "screenshots")
const THEMES_DIR = path.join(__dirname, "..", "..", "..", "output", "themes")
const OUTPUT_DIR = path.join(__dirname, "..", "..", "..", "output", "components")

// Gemini model to use
const GEMINI_MODEL = "gemini-2.5-pro"

interface GenerationTask {
  site: WorkingSite
  htmlFile: string
  htmlContent: string
  parsedPage: ParsedPage
  screenshotPaths: string[]
  themePath?: string
  pageName: string
}

interface GenerationResult {
  task: GenerationTask
  success: boolean
  componentCode?: string
  error?: string
}

/**
 * Check if Gemini CLI is installed
 */
function checkGeminiCli(): boolean {
  try {
    execSync("which gemini", { stdio: "ignore" })
    return true
  } catch {
    return false
  }
}

/**
 * Get all HTML files for a site
 */
function getHtmlFilesForSite(site: WorkingSite): string[] {
  const siteDir = path.join(SCRAPED_HTML_DIR, site.category, site.name)

  if (!fs.existsSync(siteDir)) {
    console.warn(`  Warning: No HTML files found for ${site.name}`)
    return []
  }

  return fs.readdirSync(siteDir)
    .filter((f) => f.endsWith(".html"))
    .map((f) => path.join(siteDir, f))
}

/**
 * Get all screenshots for a page (multiple sections)
 */
function getScreenshotsForPage(site: WorkingSite, pageName: string): string[] {
  const screenshotDir = path.join(SCREENSHOTS_DIR, site.category, site.name)

  if (!fs.existsSync(screenshotDir)) {
    return []
  }

  // Get all screenshots for this page (e.g., home-01-hero.png, home-02-features.png)
  return fs.readdirSync(screenshotDir)
    .filter((f) => f.startsWith(pageName) && f.endsWith(".png"))
    .map((f) => path.join(screenshotDir, f))
    .sort()
}

/**
 * Get theme for a site
 */
function getThemeForSite(site: WorkingSite): string | undefined {
  const themePath = path.join(THEMES_DIR, site.category, site.name, "theme.json")
  return fs.existsSync(themePath) ? themePath : undefined
}

/**
 * Extract page name from HTML filename
 */
function extractPageName(htmlFile: string): string {
  const basename = path.basename(htmlFile, ".html")
  // Remove site prefix (e.g., "agency-2-home" -> "home")
  const parts = basename.split("-")
  return parts.slice(2).join("-") || "home"
}

/**
 * Run Gemini CLI with a prompt and optional images
 */
async function runGemini(prompt: string, imagePaths: string[] = []): Promise<string> {
  return new Promise((resolve, reject) => {
    const args = ["--model", GEMINI_MODEL]

    // Note: Gemini CLI doesn't support image attachments via --file
    // Screenshots exist at: imagePaths (for reference)
    // The prompt includes information about available screenshots
    if (imagePaths.length > 0) {
      console.log(`      (${imagePaths.length} screenshots available but not sent to CLI)`)
    }

    const gemini = spawn("gemini", args, {
      stdio: ["pipe", "pipe", "pipe"],
    })

    let stdout = ""
    let stderr = ""

    gemini.stdout.on("data", (data) => {
      stdout += data.toString()
    })

    gemini.stderr.on("data", (data) => {
      stderr += data.toString()
    })

    gemini.on("close", (code) => {
      if (code === 0) {
        resolve(stdout)
      } else {
        reject(new Error(`Gemini CLI exited with code ${code}: ${stderr}`))
      }
    })

    gemini.on("error", (err) => {
      reject(err)
    })

    // Send prompt to stdin
    gemini.stdin.write(prompt)
    gemini.stdin.end()
  })
}

/**
 * Select key images (first, middle, last) for context
 */
function selectKeyImages(imagePaths: string[]): string[] {
  if (imagePaths.length === 0) return []
  if (imagePaths.length <= 3) return imagePaths

  const first = imagePaths[0]
  const middle = imagePaths[Math.floor(imagePaths.length / 2)]
  const last = imagePaths[imagePaths.length - 1]

  return [first, middle, last]
}

/**
 * Generate component for a single page
 */
async function generateComponent(task: GenerationTask): Promise<GenerationResult> {
  console.log(`    Generating component for ${task.pageName}...`)

  try {
    // Get available components for the prompt
    const availableComponents = getAvailableComponents()

    // Load theme if available
    let themeData = null
    if (task.themePath && fs.existsSync(task.themePath)) {
      themeData = JSON.parse(fs.readFileSync(task.themePath, "utf-8"))
    }

    // Generate context summary from parsed HTML
    const contextSummary = generateContextSummary(task.parsedPage)

    // Build fonts info string
    const fontsInfo = task.parsedPage.fonts
      .map((f) => `${f.family} (weights: ${f.weights.join(", ")})`)
      .join(", ")

    // Build colors info string
    const colorsInfo = task.parsedPage.designTokens
      .filter((t) => t.type === "color")
      .slice(0, 8)
      .map((t) => t.value)
      .join(", ")

    // Build sections info
    const sectionsInfo = task.parsedPage.sections
      .map((s) => `${s.name}: ${s.text.slice(0, 2).join(" | ").slice(0, 100)}`)
      .join("\n")

    // Build the prompt with rich context
    const promptOptions: PromptOptions = {
      htmlContent: task.htmlContent,
      sectionName: task.pageName,
      siteName: task.site.name,
      availableComponents,
      theme: themeData,
      // Additional context from parsing
      parsedContext: {
        title: task.parsedPage.title,
        description: task.parsedPage.description,
        fonts: fontsInfo,
        colors: colorsInfo,
        sections: sectionsInfo,
        breakpoints: task.parsedPage.breakpoints
          .map((b) => `${b.name}: ${b.mediaQuery}`)
          .join(", "),
        imageCount: task.parsedPage.allImages.length,
        contextSummary,
      },
    }

    const prompt = buildPrompt(promptOptions)

    // Run Gemini with images for visual context
    const result = await runGemini(prompt, task.screenshotPaths)

    // Extract code from response
    const componentCode = extractCodeFromResponse(result)

    if (!componentCode) {
      return {
        task,
        success: false,
        error: "No code block found in response",
      }
    }

    return {
      task,
      success: true,
      componentCode,
    }
  } catch (error) {
    return {
      task,
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

/**
 * Extract code block from Gemini response
 */
function extractCodeFromResponse(response: string): string | null {
  // Look for tsx or typescript code blocks
  const codeBlockRegex = /```(?:tsx?|typescript|react)?\n([\s\S]*?)```/g
  const matches = [...response.matchAll(codeBlockRegex)]

  if (matches.length === 0) {
    return null
  }

  // Return the largest code block (likely the main component)
  return matches
    .map((m) => m[1].trim())
    .sort((a, b) => b.length - a.length)[0]
}

/**
 * Save generated component
 */
function saveComponent(
  site: WorkingSite,
  pageName: string,
  code: string
): string {
  const componentDir = path.join(OUTPUT_DIR, site.category, site.name)
  fs.mkdirSync(componentDir, { recursive: true })

  // Convert page name to PascalCase for component name
  const componentName = pageName
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("")

  const filename = `${componentName}Page.tsx`
  const filepath = path.join(componentDir, filename)

  fs.writeFileSync(filepath, code)
  return filepath
}

/**
 * Save raw data for debugging
 */
function saveDebugData(
  site: WorkingSite,
  pageName: string,
  parsedPage: ParsedPage
): void {
  const debugDir = path.join(OUTPUT_DIR, site.category, site.name, "_debug")
  fs.mkdirSync(debugDir, { recursive: true })

  fs.writeFileSync(
    path.join(debugDir, `${pageName}-parsed.json`),
    JSON.stringify(
      {
        title: parsedPage.title,
        description: parsedPage.description,
        fonts: parsedPage.fonts,
        designTokens: parsedPage.designTokens.slice(0, 20),
        breakpoints: parsedPage.breakpoints,
        sections: parsedPage.sections.map((s) => ({
          name: s.name,
          childCount: s.children.length,
          imageCount: s.images.length,
          textSamples: s.text.slice(0, 3),
        })),
      },
      null,
      2
    )
  )
}

/**
 * Process a single site
 */
async function processSite(site: WorkingSite): Promise<void> {
  console.log(`\n[${site.name}] Processing ${site.url}`)

  const htmlFiles = getHtmlFilesForSite(site)
  if (htmlFiles.length === 0) {
    console.log(`  Skipping - no HTML files found`)
    return
  }

  console.log(`  Found ${htmlFiles.length} HTML files`)

  const themePath = getThemeForSite(site)
  if (themePath) {
    console.log(`  Found theme: ${path.basename(themePath)}`)
  }

  let successCount = 0
  let failCount = 0

  for (const htmlFile of htmlFiles) {
    const pageName = extractPageName(htmlFile)
    const htmlContent = fs.readFileSync(htmlFile, "utf-8")
    const screenshotPaths = getScreenshotsForPage(site, pageName)

    console.log(`  [${pageName}] Parsing HTML...`)

    // Parse the HTML to extract rich context
    const parsedPage = parseHtmlPage(htmlContent)

    console.log(`    Found: ${parsedPage.sections.length} sections, ${parsedPage.fonts.length} fonts, ${parsedPage.designTokens.length} tokens`)

    // Save debug data
    saveDebugData(site, pageName, parsedPage)

    const task: GenerationTask = {
      site,
      htmlFile,
      htmlContent,
      parsedPage,
      screenshotPaths,
      themePath,
      pageName,
    }

    const result = await generateComponent(task)

    if (result.success && result.componentCode) {
      const savedPath = saveComponent(site, pageName, result.componentCode)
      console.log(`    ✓ Saved: ${path.basename(savedPath)}`)
      successCount++
    } else {
      console.log(`    ✗ Failed: ${result.error}`)
      failCount++
    }

    // Rate limiting - wait between requests
    await new Promise((r) => setTimeout(r, 3000))
  }

  console.log(`  [${site.name}] Complete: ${successCount} success, ${failCount} failed`)
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log("🤖 Component Generator - Gemini CLI")
  console.log("===================================")
  console.log(`Model: ${GEMINI_MODEL}`)

  // Check for Gemini CLI
  if (!checkGeminiCli()) {
    console.error("❌ Gemini CLI not found!")
    console.error("")
    console.error("Install Gemini CLI:")
    console.error("  npm install -g @anthropic-ai/gemini-cli")
    console.error("  # or")
    console.error("  brew install gemini")
    console.error("")
    console.error("Then authenticate:")
    console.error("  gemini auth login")
    console.error("")
    console.error("Visit: https://github.com/google-gemini/gemini-cli")
    process.exit(1)
  }

  console.log("✓ Gemini CLI found")
  console.log(`\nProcessing ${getSitesToProcess().length} sites:`)
  getSitesToProcess().forEach((site) => console.log(`  - ${site.name}: ${site.url}`))

  // Create output directory
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  const startTime = Date.now()

  // Process each site
  for (const site of getSitesToProcess()) {
    await processSite(site)
  }

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(2)
  console.log(`\n✅ Generation completed in ${duration} minutes!`)
  console.log(`Components saved to: ${OUTPUT_DIR}`)
}

main().catch(console.error)
