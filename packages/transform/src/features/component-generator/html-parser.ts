/**
 * HTML Parser for extracting rich context from Framer-generated HTML
 */

import * as cheerio from "cheerio"

export interface ParsedSection {
  name: string
  html: string
  classes: string[]
  children: string[] // Child section names
  images: ParsedImage[]
  text: string[]
}

export interface ParsedImage {
  src: string
  srcset?: string
  alt?: string
  width?: number
  height?: number
}

export interface ParsedFont {
  family: string
  weights: number[]
  style: string
  src: string
}

export interface DesignToken {
  id: string
  value: string
  type: "color" | "spacing" | "radius" | "unknown"
}

export interface ResponsiveBreakpoint {
  name: string
  hash: string
  mediaQuery: string
  minWidth?: number
  maxWidth?: number
}

export interface ParsedPage {
  title: string
  description: string
  ogImage?: string
  sections: ParsedSection[]
  fonts: ParsedFont[]
  designTokens: DesignToken[]
  breakpoints: ResponsiveBreakpoint[]
  colors: string[]
  allImages: ParsedImage[]
}

/**
 * Parse design tokens from CSS variables
 */
function parseDesignTokens(html: string): DesignToken[] {
  const tokens: DesignToken[] = []
  const tokenRegex = /--token-([a-f0-9-]+),\s*([^)]+)\)/g

  let match
  while ((match = tokenRegex.exec(html)) !== null) {
    const [, id, value] = match
    const trimmedValue = value.trim()

    let type: DesignToken["type"] = "unknown"
    if (trimmedValue.startsWith("rgb") || trimmedValue.startsWith("#")) {
      type = "color"
    } else if (trimmedValue.endsWith("px") || trimmedValue.endsWith("rem")) {
      type = "spacing"
    }

    // Avoid duplicates
    if (!tokens.find((t) => t.id === id)) {
      tokens.push({ id, value: trimmedValue, type })
    }
  }

  return tokens
}

/**
 * Parse fonts from @font-face rules
 */
function parseFonts(html: string): ParsedFont[] {
  const fonts: Map<string, ParsedFont> = new Map()
  const fontFaceRegex = /@font-face\s*\{([^}]+)\}/g

  let match
  while ((match = fontFaceRegex.exec(html)) !== null) {
    const block = match[1]

    const familyMatch = block.match(/font-family:\s*["']?([^"';]+)["']?/)
    const weightMatch = block.match(/font-weight:\s*(\d+)/)
    const styleMatch = block.match(/font-style:\s*(\w+)/)
    const srcMatch = block.match(/src:\s*url\(["']?([^)"']+)["']?\)/)

    if (familyMatch) {
      const family = familyMatch[1].trim()
      const weight = weightMatch ? parseInt(weightMatch[1]) : 400
      const style = styleMatch ? styleMatch[1] : "normal"
      const src = srcMatch ? srcMatch[1] : ""

      const key = family
      if (fonts.has(key)) {
        const existing = fonts.get(key)!
        if (!existing.weights.includes(weight)) {
          existing.weights.push(weight)
        }
      } else {
        fonts.set(key, {
          family,
          weights: [weight],
          style,
          src,
        })
      }
    }
  }

  return Array.from(fonts.values())
}

/**
 * Parse responsive breakpoints from Framer data
 */
function parseBreakpoints(html: string): ResponsiveBreakpoint[] {
  const breakpoints: ResponsiveBreakpoint[] = []

  // Look for breakpoint definitions in data attributes
  const breakpointDataRegex = /"breakpoints":\[([^\]]+)\]/
  const match = html.match(breakpointDataRegex)

  if (match) {
    try {
      const breakpointData = JSON.parse(`[${match[1]}]`)
      breakpointData.forEach((bp: { hash: string; mediaQuery: string }) => {
        const minMatch = bp.mediaQuery.match(/min-width:\s*(\d+)px/)
        const maxMatch = bp.mediaQuery.match(/max-width:\s*(\d+(?:\.\d+)?)px/)

        let name = "unknown"
        if (minMatch && parseInt(minMatch[1]) >= 1200) {
          name = "desktop"
        } else if (minMatch && parseInt(minMatch[1]) >= 810) {
          name = "tablet"
        } else if (maxMatch) {
          name = "mobile"
        }

        breakpoints.push({
          name,
          hash: bp.hash,
          mediaQuery: bp.mediaQuery,
          minWidth: minMatch ? parseInt(minMatch[1]) : undefined,
          maxWidth: maxMatch ? parseFloat(maxMatch[1]) : undefined,
        })
      })
    } catch (e) {
      // Ignore parsing errors
    }
  }

  return breakpoints
}

/**
 * Extract all unique colors from the HTML
 */
function extractColors(html: string): string[] {
  const colors = new Set<string>()

  // RGB colors
  const rgbRegex = /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/g
  const rgbaRegex = /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)/g

  let match
  while ((match = rgbRegex.exec(html)) !== null) {
    colors.add(match[0])
  }
  while ((match = rgbaRegex.exec(html)) !== null) {
    colors.add(match[0])
  }

  return Array.from(colors)
}

/**
 * Parse images from the HTML
 */
function parseImages($: cheerio.CheerioAPI): ParsedImage[] {
  const images: ParsedImage[] = []

  $("img").each((_, el) => {
    const $el = $(el)
    images.push({
      src: $el.attr("src") || "",
      srcset: $el.attr("srcset"),
      alt: $el.attr("alt"),
      width: $el.attr("width") ? parseInt($el.attr("width")!) : undefined,
      height: $el.attr("height") ? parseInt($el.attr("height")!) : undefined,
    })
  })

  return images
}

/**
 * Parse sections from Framer HTML using data-framer-name
 */
function parseSections($: cheerio.CheerioAPI): ParsedSection[] {
  const sections: ParsedSection[] = []

  // Find all elements with data-framer-name
  $("[data-framer-name]").each((_, el) => {
    const $el = $(el)
    const name = $el.attr("data-framer-name")

    if (!name) return

    // Only include top-level sections (section tags or major containers)
    const tagName = el.tagName?.toLowerCase()
    const isSection = tagName === "section"
    const isTopLevel =
      isSection ||
      name.toLowerCase().includes("hero") ||
      name.toLowerCase().includes("header") ||
      name.toLowerCase().includes("footer") ||
      name.toLowerCase().includes("nav") ||
      name.toLowerCase().includes("section") ||
      name.toLowerCase().includes("container") ||
      name.toLowerCase().includes("cta") ||
      name.toLowerCase().includes("feature") ||
      name.toLowerCase().includes("testimonial") ||
      name.toLowerCase().includes("pricing") ||
      name.toLowerCase().includes("faq") ||
      name.toLowerCase().includes("contact") ||
      name.toLowerCase().includes("about") ||
      name.toLowerCase().includes("team") ||
      name.toLowerCase().includes("blog") ||
      name.toLowerCase().includes("gallery")

    if (!isTopLevel) return

    // Get child section names
    const children: string[] = []
    $el.find("[data-framer-name]").each((_, child) => {
      const childName = $(child).attr("data-framer-name")
      if (childName && childName !== name) {
        children.push(childName)
      }
    })

    // Get images in this section
    const images: ParsedImage[] = []
    $el.find("img").each((_, img) => {
      const $img = $(img)
      images.push({
        src: $img.attr("src") || "",
        srcset: $img.attr("srcset"),
        alt: $img.attr("alt"),
        width: $img.attr("width") ? parseInt($img.attr("width")!) : undefined,
        height: $img.attr("height") ? parseInt($img.attr("height")!) : undefined,
      })
    })

    // Get text content
    const text: string[] = []
    $el.find("p, h1, h2, h3, h4, h5, h6, span").each((_, textEl) => {
      const content = $(textEl).text().trim()
      if (content && content.length > 2 && content.length < 500) {
        text.push(content)
      }
    })

    sections.push({
      name,
      html: $el.html() || "",
      classes: ($el.attr("class") || "").split(" ").filter(Boolean),
      children: [...new Set(children)],
      images,
      text: [...new Set(text)],
    })
  })

  return sections
}

/**
 * Parse a full HTML page and extract all relevant data
 */
export function parseHtmlPage(html: string): ParsedPage {
  const $ = cheerio.load(html)

  // Get page metadata
  const title = $("title").text() || ""
  const description = $('meta[name="description"]').attr("content") || ""
  const ogImage = $('meta[property="og:image"]').attr("content")

  // Parse all components
  const sections = parseSections($)
  const fonts = parseFonts(html)
  const designTokens = parseDesignTokens(html)
  const breakpoints = parseBreakpoints(html)
  const colors = extractColors(html)
  const allImages = parseImages($)

  return {
    title,
    description,
    ogImage,
    sections,
    fonts,
    designTokens,
    breakpoints,
    colors,
    allImages,
  }
}

/**
 * Generate a context summary for AI prompts
 */
export function generateContextSummary(parsed: ParsedPage): string {
  const lines: string[] = []

  lines.push("## Page Metadata")
  lines.push(`Title: ${parsed.title}`)
  lines.push(`Description: ${parsed.description}`)
  lines.push("")

  if (parsed.fonts.length > 0) {
    lines.push("## Typography")
    parsed.fonts.forEach((font) => {
      lines.push(`- ${font.family}: weights [${font.weights.sort((a, b) => a - b).join(", ")}]`)
    })
    lines.push("")
  }

  if (parsed.designTokens.length > 0) {
    lines.push("## Design Tokens (Colors)")
    const colorTokens = parsed.designTokens.filter((t) => t.type === "color")
    colorTokens.slice(0, 10).forEach((token) => {
      lines.push(`- --token-${token.id.slice(0, 8)}: ${token.value}`)
    })
    lines.push("")
  }

  if (parsed.breakpoints.length > 0) {
    lines.push("## Responsive Breakpoints")
    parsed.breakpoints.forEach((bp) => {
      lines.push(`- ${bp.name}: ${bp.mediaQuery}`)
    })
    lines.push("")
  }

  if (parsed.sections.length > 0) {
    lines.push("## Page Sections")
    parsed.sections.forEach((section) => {
      lines.push(`- ${section.name}`)
      if (section.children.length > 0) {
        lines.push(`  Children: ${section.children.slice(0, 5).join(", ")}`)
      }
      if (section.images.length > 0) {
        lines.push(`  Images: ${section.images.length}`)
      }
    })
    lines.push("")
  }

  return lines.join("\n")
}

/**
 * Extract a specific section's HTML for generation
 */
export function extractSectionHtml(
  parsed: ParsedPage,
  sectionName: string
): { html: string; context: string } | null {
  const section = parsed.sections.find(
    (s) => s.name.toLowerCase() === sectionName.toLowerCase()
  )

  if (!section) return null

  const context = [
    `Section: ${section.name}`,
    `Images: ${section.images.length}`,
    section.images.map((img) => `  - ${img.alt || "No alt"}: ${img.src.slice(0, 50)}...`).join("\n"),
    `Text content samples:`,
    section.text.slice(0, 5).map((t) => `  - "${t.slice(0, 100)}..."`).join("\n"),
  ].join("\n")

  return {
    html: section.html,
    context,
  }
}
