// Template font pairings
// Based on 2024 recommended Google Fonts pairings from design experts
// Sources: Pagecloud, Rossul, FontPair, ColorsAndFonts

export interface TemplateFonts {
  display: string // Font family for display/headings
  body: string // Font family for body text
  displayWeight: string // Weight for display font
  bodyWeight: string // Weight for body font
}

// ============================================================================
// Font Presets
// ============================================================================

export type FontPreset = "modern" | "elegant" | "classic" | "playful" | "futuristic"

export const fontPresets: Record<FontPreset, TemplateFonts> = {
  modern: {
    display: "var(--font-display)",
    body: "var(--font-sans)",
    displayWeight: "700",
    bodyWeight: "400",
  },
  elegant: {
    display: "var(--font-fraunces)",
    body: "var(--font-dm-sans)",
    displayWeight: "600",
    bodyWeight: "400",
  },
  classic: {
    display: "var(--font-playfair)",
    body: "var(--font-source-sans)",
    displayWeight: "700",
    bodyWeight: "400",
  },
  playful: {
    display: "var(--font-space-grotesk)",
    body: "var(--font-nunito)",
    displayWeight: "700",
    bodyWeight: "400",
  },
  futuristic: {
    display: "var(--font-orbitron)",
    body: "var(--font-rajdhani)",
    displayWeight: "700",
    bodyWeight: "500",
  },
}

// ============================================================================
// Legacy Template Fonts
// ============================================================================

// Font definitions for each template - refined, professional pairings
// Uses CSS variables from next/font loaded in fonts.ts
export const templateFonts: Record<string, TemplateFonts> = {
  // Service templates
  "service-plants": fontPresets.elegant,
  "service-travel": fontPresets.modern,
  "service-boat": fontPresets.classic,
  "service-fitness": fontPresets.futuristic,

  // Application templates
  "app-gym-tracker": fontPresets.modern,
  "app-quiz": fontPresets.playful,
}

// Default fonts fallback - uses global Inter
const defaultFonts: TemplateFonts = fontPresets.modern

// Get fonts for a template
export function getTemplateFonts(slug: string): TemplateFonts {
  return templateFonts[slug] || defaultFonts
}

// Get font CSS variables for a template
export function getTemplateFontStyles(slug: string): React.CSSProperties {
  const fonts = getTemplateFonts(slug)
  return {
    "--font-display": fonts.display,
    "--font-body": fonts.body,
    "--font-display-weight": fonts.displayWeight,
    "--font-body-weight": fonts.bodyWeight,
  } as React.CSSProperties
}

// Get all unique font families for preloading
export function getAllFontFamilies(): string[] {
  const families = new Set<string>()

  Object.values(templateFonts).forEach((fonts) => {
    // Extract font family name from the full string
    const displayFamily = fonts.display.split(",")[0].replace(/['"]/g, "").trim()
    const bodyFamily = fonts.body.split(",")[0].replace(/['"]/g, "").trim()
    families.add(displayFamily)
    families.add(bodyFamily)
  })

  return Array.from(families).sort()
}
