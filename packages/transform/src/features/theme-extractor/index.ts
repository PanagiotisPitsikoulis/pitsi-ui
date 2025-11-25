import { chromium, Browser, Page } from "playwright"
import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"
import { getSitesToProcess, WorkingSite } from "../../config/working-sites.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Output directory (within packages/transform)
const OUTPUT_DIR = path.join(__dirname, "..", "..", "..", "output", "themes")

interface ExtractedColor {
  name: string
  value: string
  hsl?: string
  rgb?: string
  hex?: string
}

interface ExtractedFont {
  family: string
  weights: number[]
  styles: string[]
  source: "google" | "system" | "custom" | "unknown"
  url?: string
}

interface TypographyTheme {
  display: ExtractedFont | null
  heading: ExtractedFont | null
  body: ExtractedFont | null
  mono: ExtractedFont | null
}

interface ShadcnTheme {
  name: string
  colors: {
    light: Record<string, string>
    dark: Record<string, string>
  }
}

interface ExtractedTheme {
  site: string
  url: string
  colors: ExtractedColor[]
  fonts: ExtractedFont[]
  typography: TypographyTheme
  shadcnTheme: ShadcnTheme
  cssVariables: Record<string, string>
}

/**
 * Convert any color format to HSL
 */
function colorToHsl(color: string): string | null {
  // Already HSL
  if (color.startsWith("hsl")) {
    return color
  }

  // This is a simplified converter - in production you'd want a proper color library
  // For now, we'll just return the original color
  return color
}

/**
 * Parse RGB string to values
 */
function parseRgb(rgb: string): { r: number; g: number; b: number } | null {
  const match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
    }
  }
  return null
}

/**
 * Convert RGB to HSL
 */
function rgbToHsl(r: number, g: number, b: number): string {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
}

/**
 * Extract CSS variables from page
 */
async function extractCssVariables(page: Page): Promise<Record<string, string>> {
  return page.evaluate(() => {
    const variables: Record<string, string> = {}
    const root = document.documentElement
    const computedStyle = getComputedStyle(root)

    // Get all CSS custom properties
    const styleSheets = Array.from(document.styleSheets)
    for (const sheet of styleSheets) {
      try {
        const rules = Array.from(sheet.cssRules || [])
        for (const rule of rules) {
          if (rule instanceof CSSStyleRule && rule.selectorText === ":root") {
            const style = rule.style
            for (let i = 0; i < style.length; i++) {
              const prop = style[i]
              if (prop.startsWith("--")) {
                variables[prop] = style.getPropertyValue(prop).trim()
              }
            }
          }
        }
      } catch (e) {
        // Cross-origin stylesheets will throw
      }
    }

    // Also get computed values for common color variables
    const commonVars = [
      "--background",
      "--foreground",
      "--card",
      "--card-foreground",
      "--popover",
      "--popover-foreground",
      "--primary",
      "--primary-foreground",
      "--secondary",
      "--secondary-foreground",
      "--muted",
      "--muted-foreground",
      "--accent",
      "--accent-foreground",
      "--destructive",
      "--destructive-foreground",
      "--border",
      "--input",
      "--ring",
      "--radius",
    ]

    for (const varName of commonVars) {
      const value = computedStyle.getPropertyValue(varName).trim()
      if (value) {
        variables[varName] = value
      }
    }

    return variables
  })
}

/**
 * Extract colors used on the page
 */
async function extractColors(page: Page): Promise<ExtractedColor[]> {
  const colors = await page.evaluate(() => {
    const colorSet = new Set<string>()
    const elements = document.querySelectorAll("*")

    elements.forEach((el) => {
      const style = getComputedStyle(el)
      const props = [
        "color",
        "backgroundColor",
        "borderColor",
        "borderTopColor",
        "borderRightColor",
        "borderBottomColor",
        "borderLeftColor",
      ]

      props.forEach((prop) => {
        const value = style.getPropertyValue(prop.replace(/([A-Z])/g, "-$1").toLowerCase())
        if (value && value !== "rgba(0, 0, 0, 0)" && value !== "transparent") {
          colorSet.add(value)
        }
      })
    })

    return Array.from(colorSet)
  })

  return colors.map((color, index) => {
    const rgb = parseRgb(color)
    const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null

    return {
      name: `color-${index + 1}`,
      value: color,
      hsl: hsl || undefined,
      rgb: color.startsWith("rgb") ? color : undefined,
    }
  })
}

/**
 * Extract fonts from the page
 */
async function extractFonts(page: Page): Promise<ExtractedFont[]> {
  const fontData = await page.evaluate(() => {
    const fonts: Map<
      string,
      { weights: Set<number>; styles: Set<string>; source: string; url?: string }
    > = new Map()

    // Get fonts from computed styles
    const elements = document.querySelectorAll("*")
    elements.forEach((el) => {
      const style = getComputedStyle(el)
      const fontFamily = style.fontFamily
      const fontWeight = parseInt(style.fontWeight) || 400
      const fontStyle = style.fontStyle

      if (fontFamily) {
        // Parse font family (remove quotes and get first font)
        const families = fontFamily.split(",").map((f) => f.trim().replace(/["']/g, ""))
        for (const family of families) {
          if (!fonts.has(family)) {
            fonts.set(family, {
              weights: new Set(),
              styles: new Set(),
              source: "unknown",
            })
          }
          const data = fonts.get(family)!
          data.weights.add(fontWeight)
          data.styles.add(fontStyle)
        }
      }
    })

    // Check for Google Fonts links
    const googleFontsLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]')
    googleFontsLinks.forEach((link) => {
      const href = link.getAttribute("href")
      if (href) {
        // Parse Google Fonts URL to extract font families
        const familyMatch = href.match(/family=([^&]+)/)
        if (familyMatch) {
          const families = familyMatch[1].split("|")
          families.forEach((f) => {
            const [name] = f.split(":")
            const cleanName = name.replace(/\+/g, " ")
            if (fonts.has(cleanName)) {
              fonts.get(cleanName)!.source = "google"
              fonts.get(cleanName)!.url = href
            }
          })
        }
      }
    })

    // Check for @font-face rules
    const styleSheets = Array.from(document.styleSheets)
    for (const sheet of styleSheets) {
      try {
        const rules = Array.from(sheet.cssRules || [])
        for (const rule of rules) {
          if (rule instanceof CSSFontFaceRule) {
            const family = rule.style.getPropertyValue("font-family").replace(/["']/g, "")
            const src = rule.style.getPropertyValue("src")
            if (fonts.has(family)) {
              if (src.includes("fonts.gstatic.com")) {
                fonts.get(family)!.source = "google"
              } else {
                fonts.get(family)!.source = "custom"
              }
            }
          }
        }
      } catch (e) {
        // Cross-origin stylesheets will throw
      }
    }

    // Detect system fonts
    const systemFonts = [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "serif",
      "monospace",
    ]
    fonts.forEach((data, family) => {
      if (systemFonts.includes(family)) {
        data.source = "system"
      }
    })

    return Array.from(fonts.entries()).map(([family, data]) => ({
      family,
      weights: Array.from(data.weights).sort((a, b) => a - b),
      styles: Array.from(data.styles),
      source: data.source,
      url: data.url,
    }))
  })

  return fontData as ExtractedFont[]
}

/**
 * Analyze fonts and create typography theme
 */
function analyzeTypography(fonts: ExtractedFont[]): TypographyTheme {
  // Filter out system fonts for primary selection
  const customFonts = fonts.filter(
    (f) => f.source === "google" || f.source === "custom"
  )

  // Heuristics for categorizing fonts
  const displayKeywords = ["display", "title", "headline", "poster"]
  const headingKeywords = ["heading", "header", "bold", "black", "heavy"]
  const monoKeywords = ["mono", "code", "console", "courier", "menlo", "fira"]
  const bodyKeywords = ["text", "body", "regular", "book", "light"]

  let display: ExtractedFont | null = null
  let heading: ExtractedFont | null = null
  let body: ExtractedFont | null = null
  let mono: ExtractedFont | null = null

  // Find mono font first (easiest to identify)
  mono = fonts.find((f) =>
    monoKeywords.some((k) => f.family.toLowerCase().includes(k))
  ) || null

  // For other categories, use weight distribution as a heuristic
  for (const font of customFonts) {
    const lowerFamily = font.family.toLowerCase()
    const hasHeavyWeights = font.weights.some((w) => w >= 700)
    const hasLightWeights = font.weights.some((w) => w <= 400)

    // Display fonts often have limited weights and specific keywords
    if (
      !display &&
      displayKeywords.some((k) => lowerFamily.includes(k))
    ) {
      display = font
      continue
    }

    // Heading fonts usually have bold weights
    if (!heading && hasHeavyWeights) {
      heading = font
      continue
    }

    // Body fonts have regular weights
    if (!body && hasLightWeights) {
      body = font
    }
  }

  // If we couldn't categorize, use the first custom fonts
  if (!display && !heading && customFonts.length > 0) {
    heading = customFonts[0]
  }
  if (!body && customFonts.length > 1) {
    body = customFonts[1]
  } else if (!body && customFonts.length === 1) {
    body = customFonts[0]
  }

  // Use heading as display if no display found
  if (!display && heading) {
    display = heading
  }

  return { display, heading, body, mono }
}

/**
 * Generate shadcn-compatible theme from extracted data
 */
function generateShadcnTheme(
  siteName: string,
  cssVariables: Record<string, string>,
  colors: ExtractedColor[]
): ShadcnTheme {
  // Map common CSS variables to shadcn format
  const lightColors: Record<string, string> = {}
  const darkColors: Record<string, string> = {}

  // Shadcn color names
  const shadcnColors = [
    "background",
    "foreground",
    "card",
    "card-foreground",
    "popover",
    "popover-foreground",
    "primary",
    "primary-foreground",
    "secondary",
    "secondary-foreground",
    "muted",
    "muted-foreground",
    "accent",
    "accent-foreground",
    "destructive",
    "destructive-foreground",
    "border",
    "input",
    "ring",
  ]

  for (const colorName of shadcnColors) {
    const varName = `--${colorName}`
    if (cssVariables[varName]) {
      lightColors[colorName] = cssVariables[varName]
    }
  }

  // Add radius if available
  if (cssVariables["--radius"]) {
    lightColors["radius"] = cssVariables["--radius"]
  }

  // For dark mode, we'll use the same values for now
  // In a more sophisticated implementation, we'd detect dark mode variables
  Object.assign(darkColors, lightColors)

  return {
    name: siteName,
    colors: {
      light: lightColors,
      dark: darkColors,
    },
  }
}

/**
 * Extract theme from a single site
 */
async function extractSiteTheme(
  browser: Browser,
  site: WorkingSite
): Promise<ExtractedTheme> {
  console.log(`\n[${site.name}] Extracting theme from ${site.url}`)

  const page = await browser.newPage()

  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 60000 })
    await page.waitForTimeout(2000)

    console.log(`  [${site.name}] Extracting CSS variables...`)
    const cssVariables = await extractCssVariables(page)
    console.log(`    Found ${Object.keys(cssVariables).length} CSS variables`)

    console.log(`  [${site.name}] Extracting colors...`)
    const colors = await extractColors(page)
    console.log(`    Found ${colors.length} unique colors`)

    console.log(`  [${site.name}] Extracting fonts...`)
    const fonts = await extractFonts(page)
    console.log(`    Found ${fonts.length} fonts`)

    console.log(`  [${site.name}] Analyzing typography...`)
    const typography = analyzeTypography(fonts)
    console.log(`    Display: ${typography.display?.family || "none"}`)
    console.log(`    Heading: ${typography.heading?.family || "none"}`)
    console.log(`    Body: ${typography.body?.family || "none"}`)
    console.log(`    Mono: ${typography.mono?.family || "none"}`)

    console.log(`  [${site.name}] Generating shadcn theme...`)
    const shadcnTheme = generateShadcnTheme(site.name, cssVariables, colors)

    console.log(`  [${site.name}] ✓ Complete`)

    return {
      site: site.name,
      url: site.url,
      colors,
      fonts,
      typography,
      shadcnTheme,
      cssVariables,
    }
  } finally {
    await page.close()
  }
}

/**
 * Generate CSS file for the theme
 */
function generateThemeCss(theme: ExtractedTheme): string {
  const lines: string[] = []

  lines.push(`/* Theme extracted from ${theme.url} */`)
  lines.push(`/* Site: ${theme.site} */`)
  lines.push("")

  // Typography imports
  const googleFonts = theme.fonts.filter((f) => f.source === "google")
  if (googleFonts.length > 0) {
    const fontParams = googleFonts
      .map((f) => `family=${f.family.replace(/ /g, "+")}:wght@${f.weights.join(";")}`)
      .join("&")
    lines.push(`@import url('https://fonts.googleapis.com/css2?${fontParams}&display=swap');`)
    lines.push("")
  }

  // CSS Variables
  lines.push(":root {")

  // Colors from shadcn theme
  for (const [name, value] of Object.entries(theme.shadcnTheme.colors.light)) {
    lines.push(`  --${name}: ${value};`)
  }

  // Typography variables
  if (theme.typography.display) {
    lines.push(`  --font-display: "${theme.typography.display.family}", sans-serif;`)
  }
  if (theme.typography.heading) {
    lines.push(`  --font-heading: "${theme.typography.heading.family}", sans-serif;`)
  }
  if (theme.typography.body) {
    lines.push(`  --font-body: "${theme.typography.body.family}", sans-serif;`)
  }
  if (theme.typography.mono) {
    lines.push(`  --font-mono: "${theme.typography.mono.family}", monospace;`)
  }

  lines.push("}")
  lines.push("")

  // Dark mode (placeholder)
  lines.push(".dark {")
  for (const [name, value] of Object.entries(theme.shadcnTheme.colors.dark)) {
    lines.push(`  --${name}: ${value};`)
  }
  lines.push("}")

  return lines.join("\n")
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log("🎨 Theme Extractor - shadcn & Typography")
  console.log("========================================")
  console.log(`Extracting from ${getSitesToProcess().length} sites:`)
  getSitesToProcess().forEach((site) => console.log(`  - ${site.name}: ${site.url}`))
  console.log("")

  // Create output directory
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  // Launch browser
  console.log("Launching browser...")
  const browser = await chromium.launch({ headless: true })

  const startTime = Date.now()
  const themes: ExtractedTheme[] = []

  try {
    for (const site of getSitesToProcess()) {
      const theme = await extractSiteTheme(browser, site)
      themes.push(theme)

      // Save individual theme files
      const siteDir = path.join(OUTPUT_DIR, site.category, site.name)
      fs.mkdirSync(siteDir, { recursive: true })

      // Save full theme JSON
      fs.writeFileSync(
        path.join(siteDir, "theme.json"),
        JSON.stringify(theme, null, 2)
      )

      // Save shadcn theme
      fs.writeFileSync(
        path.join(siteDir, "shadcn-theme.json"),
        JSON.stringify(theme.shadcnTheme, null, 2)
      )

      // Save typography
      fs.writeFileSync(
        path.join(siteDir, "typography.json"),
        JSON.stringify(theme.typography, null, 2)
      )

      // Save fonts list
      fs.writeFileSync(
        path.join(siteDir, "fonts.json"),
        JSON.stringify(theme.fonts, null, 2)
      )

      // Save CSS variables
      fs.writeFileSync(
        path.join(siteDir, "css-variables.json"),
        JSON.stringify(theme.cssVariables, null, 2)
      )

      // Generate and save CSS file
      const themeCss = generateThemeCss(theme)
      fs.writeFileSync(path.join(siteDir, "theme.css"), themeCss)

      console.log(`  Saved theme files to ${siteDir}`)
    }

    // Save summary
    const summary = themes.map((t) => ({
      site: t.site,
      url: t.url,
      colorsCount: t.colors.length,
      fontsCount: t.fonts.length,
      typography: {
        display: t.typography.display?.family || null,
        heading: t.typography.heading?.family || null,
        body: t.typography.body?.family || null,
        mono: t.typography.mono?.family || null,
      },
    }))

    fs.writeFileSync(
      path.join(OUTPUT_DIR, "summary.json"),
      JSON.stringify(summary, null, 2)
    )
  } finally {
    await browser.close()
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(2)
  console.log(`\n✅ Theme extraction completed in ${duration}s!`)
  console.log(`Themes saved to: ${OUTPUT_DIR}`)
}

main().catch(console.error)
