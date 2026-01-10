// Typography preset definitions for block theming
// Each preset defines display and body font configurations

export interface TypographyFonts {
  display: string // CSS variable for display/heading font
  body: string // CSS variable for body text font
  displayWeight: string // Weight for display font (e.g., "700")
  bodyWeight: string // Weight for body font (e.g., "400")
}

export interface TypographyPreset {
  name: string
  slug: string
  fonts: TypographyFonts
}

export const typographyPresets: Record<string, TypographyPreset> = {
  modern: {
    name: "Modern",
    slug: "modern",
    fonts: {
      display: "var(--font-display)",
      body: "var(--font-sans)",
      displayWeight: "700",
      bodyWeight: "400",
    },
  },
  elegant: {
    name: "Elegant",
    slug: "elegant",
    fonts: {
      display: "var(--font-cormorant)",
      body: "var(--font-dm-sans)",
      displayWeight: "600",
      bodyWeight: "400",
    },
  },
  classic: {
    name: "Classic",
    slug: "classic",
    fonts: {
      display: "var(--font-playfair)",
      body: "var(--font-source-sans)",
      displayWeight: "700",
      bodyWeight: "400",
    },
  },
  playful: {
    name: "Playful",
    slug: "playful",
    fonts: {
      display: "var(--font-space-grotesk)",
      body: "var(--font-nunito)",
      displayWeight: "700",
      bodyWeight: "400",
    },
  },
  futuristic: {
    name: "Futuristic",
    slug: "futuristic",
    fonts: {
      display: "var(--font-orbitron)",
      body: "var(--font-rajdhani)",
      displayWeight: "700",
      bodyWeight: "500",
    },
  },
}

// Get typography preset by slug
export function getTypographyPreset(slug: string): TypographyPreset | null {
  return typographyPresets[slug] || null
}

// Get all typography slugs
export function getTypographySlugs(): string[] {
  return Object.keys(typographyPresets)
}

// Get font CSS variables for a typography preset
export function getTypographyStyles(slug: string): React.CSSProperties | null {
  const preset = typographyPresets[slug]
  if (!preset) return null

  return {
    "--font-display": preset.fonts.display,
    "--font-body": preset.fonts.body,
    "--font-display-weight": preset.fonts.displayWeight,
    "--font-body-weight": preset.fonts.bodyWeight,
  } as React.CSSProperties
}

// Default typography
export const DEFAULT_TYPOGRAPHY = "modern"
