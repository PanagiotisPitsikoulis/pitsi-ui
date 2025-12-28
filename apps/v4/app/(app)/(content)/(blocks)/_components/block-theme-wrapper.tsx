"use client"

import React from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { themePresets } from "@/app/(app)/(tools)/tools/theme-generator/_components/theme-presets"

import { getTemplateFontStyles } from "./template-fonts"

// Tint levels
export type TintLevel = "base" | "tinted" | "deep"
export const DEFAULT_TINT: TintLevel = "tinted"

// Color palettes available
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

// Map template slugs to color palettes
export const templatePalettes: Record<string, ColorPalette> = {
  // Main landing
  "pitsi-landing": "azure",
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
  "service-travel": "azure",
  "service-boat": "azure",
  "service-hospitality": "amber",
  "service-pet-sitting": "forest",
  // Professional Services
  "service-real-estate": "indigo",
  "service-marketing": "violet",
  "service-plants": "sage",
  // Apps
  "app-guitar": "amber",
  "app-quiz": "violet",
}

// Get preset key for a palette and tint level
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
      return `${palette}-tinted`
  }
}

// Get theme style as CSS variables (colors only)
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

// Get combined theme + font styles
export function getTemplateStyles(
  slug: string,
  tint: TintLevel = DEFAULT_TINT,
  mode: "light" | "dark" = "dark"
): React.CSSProperties {
  const themeStyles = getTemplateThemeStyle(slug, tint, mode)
  const fontStyles = getTemplateFontStyles(slug)
  return { ...themeStyles, ...fontStyles }
}

interface BlockThemeWrapperProps {
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
  // Use resolved theme from next-themes, with force overrides for specific blocks
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
        // Add dark/light class for Tailwind dark mode utilities
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
