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
