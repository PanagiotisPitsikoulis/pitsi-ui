"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import {
  DEFAULT_TINT,
  getTemplateStyles,
  type TintLevel,
} from "@/registry/new-york-v4/lib/block-theme"
import { cn } from "@/registry/new-york-v4/lib/utils"

// ============================================================================
// BlocksProvider - Main provider for blocks
// ============================================================================

export interface BlocksProviderProps {
  children: React.ReactNode
  /** Template slug for color palette (e.g., "service-plants", "ai", "art") */
  slug?: string
  /** Tint intensity: base (neutral), tinted (brand colors), or deep (saturated) */
  tint?: TintLevel
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
 * Wraps blocks with the appropriate CSS variables for colors and fonts based on
 * the template slug and tint level.
 *
 * @example
 * ```tsx
 * import { BlocksProvider } from "@/components/ui/blocks-provider"
 * import { Hero1 } from "@/components/blocks/hero-1"
 *
 * export default function Page() {
 *   return (
 *     <BlocksProvider slug="service-plants" tint="tinted">
 *       <Hero1 />
 *     </BlocksProvider>
 *   )
 * }
 * ```
 */
export function BlocksProvider({
  children,
  slug = "default",
  tint = DEFAULT_TINT,
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

  // Get CSS variables for the template
  const style = getTemplateStyles(slug, tint, mode)

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
  type TintLevel,
  type TemplateFonts,
  DEFAULT_TINT,
  templatePalettes,
  templateFonts,
  getTemplateFonts,
  getTemplateFontStyles,
  getPresetKey,
  getTemplateThemeStyle,
  getTemplateStyles,
  getAllFontFamilies,
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
