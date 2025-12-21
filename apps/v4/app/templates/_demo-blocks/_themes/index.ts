// Theme system using theme-generator presets
// Tint levels: base (neutral), tinted (subtle color, DEFAULT), deep (bold surfaces)

import type { ThemeStyleProps, ThemeStyles } from "@/app/(app)/(tools)/tools/theme-generator/_components/theme-types"
import { themePresets } from "@/app/(app)/(tools)/tools/theme-generator/_components/theme-presets"

export type { ThemeStyleProps, ThemeStyles }

// Tint levels
export type TintLevel = "base" | "tinted" | "deep"

// Default tint level
export const DEFAULT_TINT: TintLevel = "tinted"

// Color palettes available
export type ColorPalette =
  | "slate"
  | "azure"
  | "violet"
  | "rose"
  | "sage"
  | "amber"
  | "cyan"
  | "indigo"
  | "coral"
  | "forest"

// Map template slugs to color palettes
export const templatePalettes: Record<string, ColorPalette> = {
  // AI & Technology
  ai: "azure",
  "ai-sci-fi": "indigo",
  "product-scifi": "cyan",
  // Creative & Art
  art: "violet",
  "service-fashion": "rose",
  "service-tattoo": "coral",
  // Food & Beverage
  "food-pizza": "coral",
  "food-juice": "amber",
  "service-coffee-shop": "amber",
  // Products & E-commerce
  "product-coffee": "amber",
  "product-plants": "sage",
  "product-skincare": "rose",
  // Health & Wellness
  "service-gym": "coral",
  "service-psychologist": "sage",
  // Beauty & Personal Care
  "service-barber": "amber",
  "service-makeup": "rose",
  // Lifestyle & Leisure
  boat: "azure",
  "service-hospitality": "amber",
  "service-pet-sitting": "forest",
  // Professional Services
  "service-real-estate": "indigo",
  "service-marketing": "violet",
  "service-plants": "sage",
}

// Get preset key for a palette and tint level
function getPresetKey(palette: ColorPalette, tint: TintLevel): string {
  if (palette === "slate") {
    return "slate" // Slate only has one variant
  }

  switch (tint) {
    case "base":
      return palette
    case "tinted":
      return `${palette}-tinted`
    case "deep":
      return `${palette}-deep`
    default:
      return `${palette}-tinted`
  }
}

// Get theme for a template slug and tint level
export function getTheme(slug: string, tint: TintLevel = DEFAULT_TINT): ThemeStyles {
  const palette = templatePalettes[slug] || "azure"
  const presetKey = getPresetKey(palette, tint)
  return themePresets[presetKey]?.styles || themePresets["azure-tinted"].styles
}

// Get theme as CSS properties for a given mode
export function getThemeStyle(
  theme: ThemeStyles,
  mode: "light" | "dark" = "dark"
): React.CSSProperties {
  const styles = theme[mode]
  const cssVars: Record<string, string> = {}

  for (const [key, value] of Object.entries(styles)) {
    cssVars[`--${key}`] = value
  }

  return cssVars as React.CSSProperties
}

// Get theme style directly from slug and tint
export function getTemplateThemeStyle(
  slug: string,
  tint: TintLevel = DEFAULT_TINT,
  mode: "light" | "dark" = "dark"
): React.CSSProperties {
  const theme = getTheme(slug, tint)
  return getThemeStyle(theme, mode)
}

// Re-export presets for direct access if needed
export { themePresets }
