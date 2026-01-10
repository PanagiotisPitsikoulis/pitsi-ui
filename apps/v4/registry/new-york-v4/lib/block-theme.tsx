"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { palettes } from "@/registry/new-york-v4/lib/palettes"

// ============================================================================
// Theme Types
// ============================================================================

export type TintLevel = "base" | "tinted" | "deep"
export const DEFAULT_TINT: TintLevel = "base"

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
  | "neon"

type ThemeStyleProps = Record<string, string>

interface ThemeStyles {
  light: ThemeStyleProps
  dark: ThemeStyleProps
}

interface ThemePreset {
  label: string
  styles: ThemeStyles
}

// ============================================================================
// Custom Theme Interface
// ============================================================================

export interface CustomTheme {
  /** Primary brand color (required for custom themes) */
  brand: string
  /** Complementary color (auto-computed if not provided) */
  brandComplementary?: string
  /** Override background color */
  background?: string
  /** Override foreground color */
  foreground?: string
  /** Override card background */
  card?: string
  /** Override card foreground */
  cardForeground?: string
  /** Override muted background */
  muted?: string
  /** Override muted foreground */
  mutedForeground?: string
}

// ============================================================================
// Font Configuration
// ============================================================================

export type FontPreset =
  | "modern"
  | "elegant"
  | "classic"
  | "playful"
  | "futuristic"

export interface CustomFonts {
  display: string
  body: string
  displayWeight?: string
  bodyWeight?: string
}

// Legacy interface for backwards compatibility
export interface TemplateFonts {
  display: string
  body: string
  displayWeight: string
  bodyWeight: string
}

const defaultFonts: TemplateFonts = {
  display: "var(--font-display)",
  body: "var(--font-sans)",
  displayWeight: "700",
  bodyWeight: "400",
}

// Font presets
export const fontPresets: Record<FontPreset, TemplateFonts> = {
  modern: {
    display: "var(--font-display)",
    body: "var(--font-sans)",
    displayWeight: "700",
    bodyWeight: "400",
  },
  elegant: {
    display: "var(--font-cormorant)",
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

/** Get font styles from preset or custom fonts */
export function getFontStyles(
  fonts?: FontPreset | CustomFonts
): React.CSSProperties {
  if (!fonts) {
    return {
      "--font-display": defaultFonts.display,
      "--font-body": defaultFonts.body,
      "--font-display-weight": defaultFonts.displayWeight,
      "--font-body-weight": defaultFonts.bodyWeight,
    } as React.CSSProperties
  }

  if (typeof fonts === "string") {
    const preset = fontPresets[fonts] || defaultFonts
    return {
      "--font-display": preset.display,
      "--font-body": preset.body,
      "--font-display-weight": preset.displayWeight,
      "--font-body-weight": preset.bodyWeight,
    } as React.CSSProperties
  }

  return {
    "--font-display": fonts.display,
    "--font-body": fonts.body,
    "--font-display-weight": fonts.displayWeight || "700",
    "--font-body-weight": fonts.bodyWeight || "400",
  } as React.CSSProperties
}

export function getAllFontFamilies(): string[] {
  const families = new Set<string>()
  Object.values(fontPresets).forEach((fonts) => {
    const displayFamily = fonts.display
      .split(",")[0]
      .replace(/['"]/g, "")
      .trim()
    const bodyFamily = fonts.body.split(",")[0].replace(/['"]/g, "").trim()
    families.add(displayFamily)
    families.add(bodyFamily)
  })
  return Array.from(families).sort()
}

// ============================================================================
// Color Palettes & Theme Presets
// ============================================================================

// Brand colors for each palette
const paletteColors: Record<
  ColorPalette,
  { brand: string; complementary: string }
> = {
  slate: { brand: "#777777", complementary: "#999999" },
  azure: { brand: "#3b82f6", complementary: "#f97316" },
  violet: { brand: "#8b5cf6", complementary: "#22c55e" },
  rose: { brand: "#e11d48", complementary: "#14b8a6" },
  sage: { brand: "#84a98c", complementary: "#d4a574" },
  amber: { brand: "#d97706", complementary: "#4f46e5" },
  cyan: { brand: "#06b6d4", complementary: "#f97316" },
  indigo: { brand: "#4f46e5", complementary: "#f59e0b" },
  coral: { brand: "#f97316", complementary: "#06b6d4" },
  forest: { brand: "#166534", complementary: "#ea580c" },
  neon: { brand: "#00ff00", complementary: "#ff00ff" },
}

// Base neutral themes
const lightBase: ThemeStyleProps = {
  background: "#fefefe",
  foreground: "#1f1f1f",
  card: "#fcfcfc",
  "card-foreground": "#1f1f1f",
  popover: "#ffffff",
  "popover-foreground": "#1f1f1f",
  primary: "#2d2d2d",
  "primary-foreground": "#fbfbfb",
  secondary: "#f5f5f5",
  "secondary-foreground": "#2d2d2d",
  muted: "#f7f7f7",
  "muted-foreground": "#777777",
  accent: "#f5f5f5",
  "accent-foreground": "#2d2d2d",
  destructive: "#dc4545",
  "destructive-foreground": "#fefefe",
  border: "#f5f5f5",
  input: "#f0f0f0",
  ring: "#9a9a9a",
  radius: "0.625rem",
  sidebar: "#ffffff",
  "sidebar-foreground": "#1f1f1f",
  "sidebar-primary": "#2d2d2d",
  "sidebar-primary-foreground": "#fbfbfb",
  "sidebar-accent": "#f5f5f5",
  "sidebar-accent-foreground": "#2d2d2d",
  "sidebar-border": "#f0f0f0",
  "sidebar-ring": "#9a9a9a",
  brand: "#777777",
  "brand-complementary": "#999999",
}

const darkBase: ThemeStyleProps = {
  background: "#262626",
  foreground: "#fcfcfc",
  card: "#2d2d2d",
  "card-foreground": "#fcfcfc",
  popover: "#2d2d2d",
  "popover-foreground": "#fcfcfc",
  primary: "#ebebeb",
  "primary-foreground": "#2d2d2d",
  secondary: "#383838",
  "secondary-foreground": "#fcfcfc",
  muted: "#333333",
  "muted-foreground": "#9a9a9a",
  accent: "#383838",
  "accent-foreground": "#fcfcfc",
  destructive: "#e05555",
  "destructive-foreground": "#1f1f1f",
  border: "#333333",
  input: "#363636",
  ring: "#777777",
  radius: "0.625rem",
  sidebar: "#1f1f1f",
  "sidebar-foreground": "#f7f7f7",
  "sidebar-primary": "#ebebeb",
  "sidebar-primary-foreground": "#2d2d2d",
  "sidebar-accent": "#2d2d2d",
  "sidebar-accent-foreground": "#f7f7f7",
  "sidebar-border": "#2f2f2f",
  "sidebar-ring": "#777777",
  brand: "#9a9a9a",
  "brand-complementary": "#777777",
}

// Deep background colors for each palette
const deepBackgrounds: Record<
  ColorPalette,
  { light: Partial<ThemeStyleProps>; dark: Partial<ThemeStyleProps> }
> = {
  slate: { light: {}, dark: {} },
  azure: {
    light: { background: "#f0f7ff", muted: "#e6f0ff" },
    dark: { background: "#1a2744", muted: "#243352" },
  },
  sage: {
    light: { background: "#f5f9f6", muted: "#eaf2ec" },
    dark: { background: "#1a261c", muted: "#243328" },
  },
  rose: {
    light: { background: "#fdf2f4", muted: "#fce7eb" },
    dark: { background: "#2a1a1e", muted: "#3a242a" },
  },
  amber: {
    light: { background: "#fffbeb", muted: "#fef3c7" },
    dark: { background: "#2a2517", muted: "#3a3222" },
  },
  violet: {
    light: { background: "#f5f3ff", muted: "#ede9fe" },
    dark: { background: "#1e1a2e", muted: "#2a2540" },
  },
  indigo: {
    light: { background: "#eef2ff", muted: "#e0e7ff" },
    dark: { background: "#1a1a2e", muted: "#252540" },
  },
  coral: {
    light: { background: "#fff7ed", muted: "#ffedd5" },
    dark: { background: "#2a1f17", muted: "#3a2c22" },
  },
  cyan: {
    light: { background: "#ecfeff", muted: "#cffafe" },
    dark: { background: "#162631", muted: "#1f3540" },
  },
  forest: {
    light: { background: "#f0fdf4", muted: "#dcfce7" },
    dark: { background: "#14261a", muted: "#1f3826" },
  },
  neon: {
    light: { background: "#f0fff0", muted: "#e0ffe0" },
    dark: { background: "#0a1a0a", muted: "#0f2a0f" },
  },
}

// ============================================================================
// Theme Utilities
// ============================================================================

export function getPresetKey(palette: ColorPalette, tint: TintLevel): string {
  if (tint === "base") return "slate"
  if (palette === "slate") return "slate"
  switch (tint) {
    case "tinted":
      return `${palette}-tinted`
    case "deep":
      return `${palette}-deep`
    default:
      return `${palette}-tinted`
  }
}

/** Compute a complementary color (simple hue rotation) */
function computeComplementaryColor(hex: string): string {
  // Simple implementation - rotate hue by 180 degrees
  // For production, could use a proper color library
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  // Convert to HSL, rotate hue, convert back
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  const l = (max + min) / 2 / 255

  if (max !== min) {
    const d = max - min
    const s = l > 0.5 ? d / (2 * 255 - max - min) : d / (max + min)
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

  // Rotate hue by 180 degrees
  h = (h + 0.5) % 1

  // Convert back to RGB
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  const s = 0.5 // Keep saturation moderate
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q

  const newR = Math.round(hue2rgb(p, q, h + 1 / 3) * 255)
  const newG = Math.round(hue2rgb(p, q, h) * 255)
  const newB = Math.round(hue2rgb(p, q, h - 1 / 3) * 255)

  return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`
}

/** Get theme styles from palette */
export function getPaletteThemeStyles(
  palette: ColorPalette,
  tint: TintLevel = DEFAULT_TINT,
  mode: "light" | "dark" = "light"
): React.CSSProperties {
  // Get mode-specific colors from palettes.ts
  const paletteData = palettes[palette]
  const colors = paletteData ? paletteData[mode] : paletteColors[palette]
  const baseStyles = mode === "light" ? { ...lightBase } : { ...darkBase }

  // Apply brand colors for non-slate palettes
  if (palette !== "slate" && colors) {
    baseStyles.brand = colors.brand
    baseStyles["brand-complementary"] = colors.complementary
    // Also set primary to brand color for colored palettes
    baseStyles.primary = colors.brand
    // Neon palette uses black text in both modes due to bright green
    baseStyles["primary-foreground"] =
      palette === "neon" ? "#0a0a0a" : mode === "light" ? "#0a0a0a" : "#fafafa"
  }

  // Apply deep backgrounds
  if (tint === "deep" && palette !== "slate") {
    const deepBg = deepBackgrounds[palette]
    const modeDeep = mode === "light" ? deepBg.light : deepBg.dark
    Object.assign(baseStyles, modeDeep)
  }

  const cssVars: Record<string, string> = {}
  for (const [key, value] of Object.entries(baseStyles)) {
    cssVars[`--${key}`] = value
  }
  return cssVars as React.CSSProperties
}

/** Get theme styles from custom theme */
export function getCustomThemeStyles(
  theme: CustomTheme,
  tint: TintLevel = DEFAULT_TINT,
  mode: "light" | "dark" = "light"
): React.CSSProperties {
  const baseStyles = mode === "light" ? { ...lightBase } : { ...darkBase }

  // Apply brand color
  baseStyles.brand = theme.brand
  baseStyles["brand-complementary"] =
    theme.brandComplementary || computeComplementaryColor(theme.brand)

  // Apply optional overrides
  if (theme.background) baseStyles.background = theme.background
  if (theme.foreground) baseStyles.foreground = theme.foreground
  if (theme.card) baseStyles.card = theme.card
  if (theme.cardForeground) baseStyles["card-foreground"] = theme.cardForeground
  if (theme.muted) baseStyles.muted = theme.muted
  if (theme.mutedForeground)
    baseStyles["muted-foreground"] = theme.mutedForeground

  const cssVars: Record<string, string> = {}
  for (const [key, value] of Object.entries(baseStyles)) {
    cssVars[`--${key}`] = value
  }
  return cssVars as React.CSSProperties
}

/** Get combined theme + font styles */
export function getThemeStyles(options: {
  palette?: ColorPalette
  theme?: CustomTheme
  tint?: TintLevel
  mode?: "light" | "dark"
  fonts?: FontPreset | CustomFonts
}): React.CSSProperties {
  const {
    palette = "azure",
    theme,
    tint = DEFAULT_TINT,
    mode = "light",
    fonts,
  } = options

  // Get color styles
  const colorStyles = theme
    ? getCustomThemeStyles(theme, tint, mode)
    : getPaletteThemeStyles(palette, tint, mode)

  // Get font styles
  const fontStyles = getFontStyles(fonts)

  return { ...colorStyles, ...fontStyles }
}

// ============================================================================
// Block Theme Wrapper Component
// ============================================================================

export interface BlockThemeWrapperProps {
  children: React.ReactNode
  /** Preset color palette */
  palette?: ColorPalette
  /** Custom theme colors (overrides palette) */
  theme?: CustomTheme
  /** Tint intensity */
  tint?: TintLevel
  /** Font preset or custom fonts */
  fonts?: FontPreset | CustomFonts
  /** Force dark mode */
  forceDark?: boolean
  /** Force light mode */
  forceLight?: boolean
  /** Transparent background */
  transparent?: boolean
  className?: string
}

export function BlockThemeWrapper({
  children,
  palette = "azure",
  theme,
  tint = DEFAULT_TINT,
  fonts,
  forceDark = false,
  forceLight = false,
  transparent = false,
  className,
}: BlockThemeWrapperProps) {
  const { resolvedTheme } = useTheme()
  const mode = forceDark
    ? "dark"
    : forceLight
      ? "light"
      : (resolvedTheme as "light" | "dark") || "light"

  // Get styles
  const style = getThemeStyles({
    palette,
    theme,
    tint,
    mode,
    fonts,
  })

  return (
    <div
      className={cn(
        "font-body relative w-full",
        !transparent && "bg-background",
        forceDark && "dark",
        forceLight && "light",
        className
      )}
      style={style}
      data-palette={palette}
    >
      {children}
    </div>
  )
}
