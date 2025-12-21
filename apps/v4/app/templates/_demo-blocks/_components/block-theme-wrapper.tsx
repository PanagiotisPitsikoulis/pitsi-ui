"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { themePresets } from "@/app/(app)/(tools)/tools/theme-generator/_components/theme-presets"

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
const templatePalettes: Record<string, ColorPalette> = {
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
  if (palette === "slate") return "slate"
  switch (tint) {
    case "base": return palette
    case "tinted": return `${palette}-tinted`
    case "deep": return `${palette}-deep`
    default: return `${palette}-tinted`
  }
}

// Get theme style as CSS variables
export function getTemplateThemeStyle(
  slug: string,
  tint: TintLevel = DEFAULT_TINT,
  mode: "light" | "dark" = "dark"
): React.CSSProperties {
  const palette = templatePalettes[slug] || "azure"
  const presetKey = getPresetKey(palette, tint)
  const theme = themePresets[presetKey]?.styles || themePresets["azure-tinted"].styles
  const styles = theme[mode]

  const cssVars: Record<string, string> = {}
  for (const [key, value] of Object.entries(styles)) {
    cssVars[`--${key}`] = value
  }
  return cssVars as React.CSSProperties
}

interface BlockThemeWrapperProps {
  slug: string
  tint?: TintLevel
  mode?: "light" | "dark"
  children: React.ReactNode
  className?: string
}

export function BlockThemeWrapper({
  slug,
  tint = DEFAULT_TINT,
  mode = "dark",
  children,
  className,
}: BlockThemeWrapperProps) {
  const style = getTemplateThemeStyle(slug, tint, mode)

  return (
    <div
      className={cn("relative w-full overflow-hidden bg-background", className)}
      style={style}
    >
      {children}
    </div>
  )
}
