// Font preset configuration for blocks
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
// Font Preset Utilities
// ============================================================================

// Get font preset by typography name (e.g., "futuristic", "elegant")
export function getFontsByTypography(typography: string | undefined): FontPreset {
  if (!typography) return "modern"
  // If it's a valid preset name, return it
  if (typography in fontPresets) {
    return typography as FontPreset
  }
  return "modern"
}
