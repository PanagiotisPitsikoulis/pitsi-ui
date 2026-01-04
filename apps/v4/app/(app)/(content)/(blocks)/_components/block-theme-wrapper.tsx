"use client"

import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { themePresets } from "@/app/(app)/(tools)/tools/theme-generator/_components/theme-presets"
import { type ColorPalette } from "@/registry/new-york-v4/lib/block-theme"

import { fontPresets, type FontPreset } from "./template-fonts"

// ============================================================================
// Theme Types
// ============================================================================

export type TintLevel = "base" | "tinted" | "deep"
export const DEFAULT_TINT: TintLevel = "base"

// Re-export ColorPalette for convenience
export type { ColorPalette }

// Custom theme interface
export interface CustomTheme {
  /** Primary brand color (required for custom themes) */
  brand: string
  /** Complementary color (auto-computed if not provided) */
  brandComplementary?: string
  /** Override background color */
  background?: string
  /** Override foreground color */
  foreground?: string
}

// Custom fonts interface
export interface CustomFonts {
  display: string
  body: string
  displayWeight?: string
  bodyWeight?: string
}

// ============================================================================
// Theme Utilities
// ============================================================================

export function getPresetKey(palette: string, tint: TintLevel): string {
  if (palette === "slate") return "slate"
  switch (tint) {
    case "base":
      return palette
    case "tinted":
      return `${palette}-tinted`
    case "deep":
      return `${palette}-deep`
    default:
      return palette
  }
}

/** Get theme styles from palette */
export function getPaletteThemeStyles(
  palette: ColorPalette,
  tint: TintLevel = DEFAULT_TINT,
  mode: "light" | "dark" = "dark"
): React.CSSProperties {
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

/** Get font styles from preset or custom fonts */
export function getFontStyles(
  fonts?: FontPreset | CustomFonts
): React.CSSProperties {
  if (!fonts) {
    return {}
  }

  if (typeof fonts === "string") {
    const preset = fontPresets[fonts]
    if (!preset) return {}
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

/** Get combined theme + font styles */
export function getThemeStyles(options: {
  palette?: ColorPalette
  tint?: TintLevel
  mode?: "light" | "dark"
  fonts?: FontPreset | CustomFonts
}): React.CSSProperties {
  const { palette = "azure", tint = DEFAULT_TINT, mode = "light", fonts } = options
  const colorStyles = getPaletteThemeStyles(palette, tint, mode)
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
  tint = DEFAULT_TINT,
  fonts,
  forceDark = false,
  forceLight = false,
  transparent = false,
  className,
}: BlockThemeWrapperProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Use resolved theme from next-themes, with force overrides
  const mode = forceDark
    ? "dark"
    : forceLight
      ? "light"
      : mounted
        ? (resolvedTheme as "light" | "dark") || "light"
        : "light"

  // Get styles
  const style = getThemeStyles({
    palette,
    tint,
    mode,
    fonts,
  })

  return (
    <div
      className={cn(
        "font-body relative w-full transition-colors duration-150",
        !transparent && "bg-background",
        forceDark && "dark",
        forceLight && "light",
        className
      )}
      style={style}
      suppressHydrationWarning
    >
      {children}
    </div>
  )
}
