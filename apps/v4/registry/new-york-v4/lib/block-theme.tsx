"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

// ============================================================================
// Theme Types
// ============================================================================

export type TintLevel = "base" | "tinted" | "deep"
export const DEFAULT_TINT: TintLevel = "base"

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
// Font Configuration
// ============================================================================

export interface TemplateFonts {
  display: string
  body: string
  displayWeight: string
  bodyWeight: string
}

const defaultFonts: TemplateFonts = {
  display: "var(--font-display), Poppins, sans-serif",
  body: "var(--font-sans), Inter, sans-serif",
  displayWeight: "700",
  bodyWeight: "400",
}

export const templateFonts: Record<string, TemplateFonts> = {
  "service-plants": {
    display: "var(--font-fraunces), Fraunces, serif",
    body: "var(--font-dm-sans), DM Sans, sans-serif",
    displayWeight: "600",
    bodyWeight: "400",
  },
}

export function getTemplateFonts(slug: string): TemplateFonts {
  return templateFonts[slug] || defaultFonts
}

export function getTemplateFontStyles(slug: string): React.CSSProperties {
  const fonts = getTemplateFonts(slug)
  return {
    "--font-display": fonts.display,
    "--font-body": fonts.body,
    "--font-display-weight": fonts.displayWeight,
    "--font-body-weight": fonts.bodyWeight,
  } as React.CSSProperties
}

export function getAllFontFamilies(): string[] {
  const families = new Set<string>()
  Object.values(templateFonts).forEach((fonts) => {
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

type ColorPalette =
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

export const templatePalettes: Record<string, ColorPalette> = {
  "pitsi-landing": "azure",
  ai: "azure",
  "ai-sci-fi": "indigo",
  "product-scifi": "cyan",
  art: "violet",
  "service-fashion": "rose",
  "service-tattoo": "coral",
  "food-pizza": "coral",
  "food-juice": "amber",
  "service-coffee-shop": "amber",
  "product-coffee": "amber",
  "product-plants": "sage",
  "product-skincare": "rose",
  "service-gym": "coral",
  "service-psychologist": "sage",
  "service-barber": "amber",
  "service-makeup": "rose",
  boat: "azure",
  "service-travel": "azure",
  "service-boat": "azure",
  "service-hospitality": "amber",
  "service-pet-sitting": "forest",
  "service-real-estate": "indigo",
  "service-marketing": "violet",
  "service-plants": "sage",
  "app-guitar": "amber",
  "app-quiz": "violet",
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

// Tinted theme generator
function createTintedTheme(
  baseLight: ThemeStyleProps,
  baseDark: ThemeStyleProps,
  brandColor: string,
  brandComplementary: string
): ThemeStyles {
  return {
    light: {
      ...baseLight,
      brand: brandColor,
      "brand-complementary": brandComplementary,
    },
    dark: {
      ...baseDark,
      brand: brandColor,
      "brand-complementary": brandComplementary,
    },
  }
}

// Theme presets
const themePresets: Record<string, ThemePreset> = {
  slate: {
    label: "Slate",
    styles: { light: lightBase, dark: darkBase },
  },
  "azure-tinted": {
    label: "Azure Tinted",
    styles: createTintedTheme(lightBase, darkBase, "#3b82f6", "#f97316"),
  },
  "azure-deep": {
    label: "Azure Deep",
    styles: createTintedTheme(
      { ...lightBase, background: "#f0f7ff", muted: "#e6f0ff" },
      { ...darkBase, background: "#1a2744", muted: "#243352" },
      "#3b82f6",
      "#f97316"
    ),
  },
  "sage-tinted": {
    label: "Sage Tinted",
    styles: createTintedTheme(lightBase, darkBase, "#84a98c", "#d4a574"),
  },
  "sage-deep": {
    label: "Sage Deep",
    styles: createTintedTheme(
      { ...lightBase, background: "#f5f9f6", muted: "#eaf2ec" },
      { ...darkBase, background: "#1a261c", muted: "#243328" },
      "#84a98c",
      "#d4a574"
    ),
  },
  "rose-tinted": {
    label: "Rose Tinted",
    styles: createTintedTheme(lightBase, darkBase, "#e11d48", "#14b8a6"),
  },
  "rose-deep": {
    label: "Rose Deep",
    styles: createTintedTheme(
      { ...lightBase, background: "#fdf2f4", muted: "#fce7eb" },
      { ...darkBase, background: "#2a1a1e", muted: "#3a242a" },
      "#e11d48",
      "#14b8a6"
    ),
  },
  "amber-tinted": {
    label: "Amber Tinted",
    styles: createTintedTheme(lightBase, darkBase, "#d97706", "#4f46e5"),
  },
  "amber-deep": {
    label: "Amber Deep",
    styles: createTintedTheme(
      { ...lightBase, background: "#fffbeb", muted: "#fef3c7" },
      { ...darkBase, background: "#2a2517", muted: "#3a3222" },
      "#d97706",
      "#4f46e5"
    ),
  },
  "violet-tinted": {
    label: "Violet Tinted",
    styles: createTintedTheme(lightBase, darkBase, "#8b5cf6", "#22c55e"),
  },
  "violet-deep": {
    label: "Violet Deep",
    styles: createTintedTheme(
      { ...lightBase, background: "#f5f3ff", muted: "#ede9fe" },
      { ...darkBase, background: "#1e1a2e", muted: "#2a2540" },
      "#8b5cf6",
      "#22c55e"
    ),
  },
  "indigo-tinted": {
    label: "Indigo Tinted",
    styles: createTintedTheme(lightBase, darkBase, "#4f46e5", "#f59e0b"),
  },
  "indigo-deep": {
    label: "Indigo Deep",
    styles: createTintedTheme(
      { ...lightBase, background: "#eef2ff", muted: "#e0e7ff" },
      { ...darkBase, background: "#1a1a2e", muted: "#252540" },
      "#4f46e5",
      "#f59e0b"
    ),
  },
  "coral-tinted": {
    label: "Coral Tinted",
    styles: createTintedTheme(lightBase, darkBase, "#f97316", "#06b6d4"),
  },
  "coral-deep": {
    label: "Coral Deep",
    styles: createTintedTheme(
      { ...lightBase, background: "#fff7ed", muted: "#ffedd5" },
      { ...darkBase, background: "#2a1f17", muted: "#3a2c22" },
      "#f97316",
      "#06b6d4"
    ),
  },
  "cyan-tinted": {
    label: "Cyan Tinted",
    styles: createTintedTheme(lightBase, darkBase, "#06b6d4", "#f97316"),
  },
  "cyan-deep": {
    label: "Cyan Deep",
    styles: createTintedTheme(
      { ...lightBase, background: "#ecfeff", muted: "#cffafe" },
      { ...darkBase, background: "#162631", muted: "#1f3540" },
      "#06b6d4",
      "#f97316"
    ),
  },
  "forest-tinted": {
    label: "Forest Tinted",
    styles: createTintedTheme(lightBase, darkBase, "#166534", "#ea580c"),
  },
  "forest-deep": {
    label: "Forest Deep",
    styles: createTintedTheme(
      { ...lightBase, background: "#f0fdf4", muted: "#dcfce7" },
      { ...darkBase, background: "#14261a", muted: "#1f3826" },
      "#166534",
      "#ea580c"
    ),
  },
}

// ============================================================================
// Theme Utilities
// ============================================================================

export function getPresetKey(palette: string, tint: TintLevel): string {
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

export function getTemplateThemeStyle(
  slug: string,
  tint: TintLevel = DEFAULT_TINT,
  mode: "light" | "dark" = "dark"
): React.CSSProperties {
  const palette = templatePalettes[slug] || "azure"
  const presetKey = getPresetKey(palette, tint)
  const theme =
    themePresets[presetKey]?.styles || themePresets["azure-tinted"].styles
  const styles = theme[mode]

  const cssVars: Record<string, string> = {}
  for (const [key, value] of Object.entries(styles)) {
    cssVars[`--${key}`] = value
  }
  return cssVars as React.CSSProperties
}

export function getTemplateStyles(
  slug: string,
  tint: TintLevel = DEFAULT_TINT,
  mode: "light" | "dark" = "dark"
): React.CSSProperties {
  const themeStyles = getTemplateThemeStyle(slug, tint, mode)
  const fontStyles = getTemplateFontStyles(slug)
  return { ...themeStyles, ...fontStyles }
}

// ============================================================================
// Block Theme Wrapper Component
// ============================================================================

export interface BlockThemeWrapperProps {
  slug: string
  tint?: TintLevel
  forceDark?: boolean
  forceLight?: boolean
  transparent?: boolean
  children: React.ReactNode
  className?: string
}

export function BlockThemeWrapper({
  slug,
  tint = DEFAULT_TINT,
  forceDark = false,
  forceLight = false,
  transparent = false,
  children,
  className,
}: BlockThemeWrapperProps) {
  const { resolvedTheme } = useTheme()
  const mode = forceDark
    ? "dark"
    : forceLight
      ? "light"
      : (resolvedTheme as "light" | "dark") || "light"
  const style = getTemplateStyles(slug, tint, mode)

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
    >
      {children}
    </div>
  )
}
