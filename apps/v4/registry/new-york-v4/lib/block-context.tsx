"use client"

import { createContext, useContext, type ReactNode } from "react"

import { cn } from "@/lib/utils"

import type { TintLevel } from "./block-theme"

// ============================================================================
// Block Context Types
// ============================================================================

type ContainerBg = "page" | "muted"

export interface BlockContextValue {
  index: number
  isEven: boolean
  containerBg: ContainerBg
  /** CSS class for cards */
  cardBg: string
  /** CSS class for surfaces/sections within the block */
  surfaceBg: string
}

// ============================================================================
// Block Context
// ============================================================================

const BlockContext = createContext<BlockContextValue | null>(null)

/**
 * Hook to access block context values.
 * Returns defaults if used outside a BlockProvider (standalone block usage).
 */
export function useBlockContext(): BlockContextValue {
  const context = useContext(BlockContext)
  if (!context) {
    // Return defaults if used outside provider (standalone block)
    return {
      index: 0,
      isEven: true,
      containerBg: "page" as ContainerBg,
      cardBg: "bg-card shadow-sm",
      surfaceBg: "bg-muted",
    }
  }
  return context
}

// ============================================================================
// Block Provider
// ============================================================================

export interface BlockProviderProps {
  /** Block index (0-based) for alternating styles */
  index: number
  children: ReactNode
}

/**
 * Provides block context for alternating backgrounds and derived styling.
 * Even blocks = page background, Odd blocks = muted background.
 */
export function BlockProvider({ index, children }: BlockProviderProps) {
  const isEven = index % 2 === 0
  const containerBg: ContainerBg = isEven ? "page" : "muted"

  // When container is page (light), cards should be muted/card
  // When container is muted (darker), cards should be background/card
  const cardBg =
    containerBg === "page" ? "bg-card shadow-sm" : "bg-background shadow-sm"
  const surfaceBg = containerBg === "page" ? "bg-muted" : "bg-background"

  const value: BlockContextValue = {
    index,
    isEven,
    containerBg,
    cardBg,
    surfaceBg,
  }

  return <BlockContext.Provider value={value}>{children}</BlockContext.Provider>
}

// ============================================================================
// Block Container
// ============================================================================

export interface BlockContainerProps {
  /** Block index for alternating backgrounds */
  index: number
  children: ReactNode
  className?: string
  /** Override the automatic alternating background */
  forceBg?: "page" | "muted" | "none"
  /** Tint level - deep tinted blocks skip alternating bg */
  tint?: TintLevel
  /** Skip container padding (for heroes, headers) */
  noPadding?: boolean
}

/**
 * Container wrapper for blocks with alternating backgrounds and proper spacing.
 * Wraps content with BlockProvider for context.
 */
export function BlockContainer({
  index,
  children,
  className,
  forceBg,
  tint,
  noPadding = false,
}: BlockContainerProps) {
  const isEven = index % 2 === 0
  // Deep tinted blocks have their own strong bg, skip alternating
  const isDeepTinted = tint === "deep"

  // Determine background class
  let bgClass = ""
  if (forceBg === "none" || isDeepTinted) {
    bgClass = ""
  } else if (forceBg) {
    bgClass = forceBg === "page" ? "bg-background" : "bg-muted"
  } else {
    // Automatic alternating: even = background, odd = muted
    bgClass = isEven ? "bg-background" : "bg-muted"
  }

  return (
    <BlockProvider index={index}>
      <div className={cn(bgClass, !noPadding && "py-24 md:py-32", className)}>
        {children}
      </div>
    </BlockProvider>
  )
}
