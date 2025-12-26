// Template font pairings
// Based on 2024 recommended Google Fonts pairings from design experts
// Sources: Pagecloud, Rossul, FontPair, ColorsAndFonts

export interface TemplateFonts {
  display: string // Font family for display/headings
  body: string // Font family for body text
  displayWeight: string // Weight for display font
  bodyWeight: string // Weight for body font
}

// Font definitions for each template - refined, professional pairings
// Uses CSS variables from next/font loaded in fonts.ts
export const templateFonts: Record<string, TemplateFonts> = {
  "service-plants": {
    display: "var(--font-fraunces), Fraunces, serif",
    body: "var(--font-dm-sans), DM Sans, sans-serif",
    displayWeight: "600",
    bodyWeight: "400",
  },
}

// Default fonts fallback - uses global Inter
const defaultFonts: TemplateFonts = {
  display: "var(--font-display), Poppins, sans-serif",
  body: "var(--font-sans), Inter, sans-serif",
  displayWeight: "700",
  bodyWeight: "400",
}

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
