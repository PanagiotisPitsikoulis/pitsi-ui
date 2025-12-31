"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import {
  DEFAULT_TINT,
  getThemeStyles,
  type ColorPalette,
  type CustomFonts,
  type CustomTheme,
  type FontPreset,
  type TintLevel,
} from "@/registry/new-york-v4/lib/block-theme"
import { cn } from "@/registry/new-york-v4/lib/utils"

// ============================================================================
// BlocksProvider - Main provider for blocks
// ============================================================================

export interface BlocksProviderProps {
  children: React.ReactNode
  /** Preset color palette (e.g., "sage", "azure", "violet") */
  palette?: ColorPalette
  /** Custom theme colors (overrides palette for specified values) */
  theme?: CustomTheme
  /** Tint intensity: base (neutral), tinted (brand colors), or deep (saturated) */
  tint?: TintLevel
  /** Font preset or custom fonts */
  fonts?: FontPreset | CustomFonts
  /** Force dark mode regardless of system preference */
  forceDark?: boolean
  /** Force light mode regardless of system preference */
  forceLight?: boolean
  /** Make background transparent (useful for overlays) */
  transparent?: boolean
  className?: string
}

/**
 * Provider component for pitsi/ui blocks with theme, context, and decoration support.
 *
 * Wraps blocks with the appropriate CSS variables for colors and fonts.
 *
 * @example
 * ```tsx
 * import { BlocksProvider } from "@/components/ui/blocks-provider"
 * import { Hero1 } from "@/components/blocks/hero-1"
 *
 * // Using a preset palette
 * export default function Page() {
 *   return (
 *     <BlocksProvider palette="sage" tint="tinted">
 *       <Hero1 />
 *     </BlocksProvider>
 *   )
 * }
 *
 * // Using custom theme colors
 * export function CustomPage() {
 *   return (
 *     <BlocksProvider theme={{ brand: "#5cb87e" }} fonts="elegant">
 *       <Hero1 />
 *     </BlocksProvider>
 *   )
 * }
 * ```
 */
export function BlocksProvider({
  children,
  palette = "azure",
  theme,
  tint = DEFAULT_TINT,
  fonts,
  forceDark = false,
  forceLight = false,
  transparent = false,
  className,
}: BlocksProviderProps) {
  const { resolvedTheme } = useTheme()

  // Determine the color mode
  const mode = forceDark
    ? "dark"
    : forceLight
      ? "light"
      : (resolvedTheme as "light" | "dark") || "light"

  // Get CSS variables for theme
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
        !transparent && "bg-background text-foreground",
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

// ============================================================================
// Re-exports for convenience
// ============================================================================

// Theme utilities
export {
  // Types
  type TintLevel,
  type ColorPalette,
  type CustomTheme,
  type FontPreset,
  type CustomFonts,
  type TemplateFonts,
  // Constants
  DEFAULT_TINT,
  fontPresets,
  // Theme API
  getThemeStyles,
  getFontStyles,
  getPaletteThemeStyles,
  getCustomThemeStyles,
  getPresetKey,
  getAllFontFamilies,
  // Components
  BlockThemeWrapper,
  type BlockThemeWrapperProps,
} from "@/registry/new-york-v4/lib/block-theme"

// Context utilities
export {
  type BlockContextValue,
  useBlockContext,
  BlockProvider,
  type BlockProviderProps,
  BlockContainer,
  type BlockContainerProps,
} from "@/registry/new-york-v4/lib/block-context"

// Decoration components
export {
  // KnockoutText
  KnockoutText,
  type KnockoutTextProps,
  // Overlay
  Overlay,
  type OverlayProps,
  type OverlayVariant,
  // ImageOverlay
  ImageOverlay,
  type ImageOverlayProps,
  // ImageOverlayGradient
  ImageOverlayGradient,
  type ImageOverlayGradientProps,
  type GradientDirection,
  // FloatingDecoration
  FloatingDecoration,
  type FloatingDecorationProps,
  type FloatingShape,
  type FloatingSize,
  type FloatingPosition,
  // PatternDecoration
  PatternDecoration,
  type PatternDecorationProps,
  type PatternType,
  type PatternSize,
  // BgDecoration
  BgDecoration,
  type BgDecorationProps,
  type BgDecorationVariant,
  // ItemDecoration
  ItemDecoration,
  type ItemDecorationProps,
  type ItemPosition,
} from "@/registry/new-york-v4/lib/block-decorations"
