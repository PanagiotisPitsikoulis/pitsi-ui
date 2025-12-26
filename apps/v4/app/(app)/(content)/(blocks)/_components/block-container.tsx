"use client"

import { type ReactNode } from "react"

import { cn } from "@/lib/utils"

import { BlockProvider } from "./block-context"
import type { TintLevel } from "./block-theme-wrapper"

interface BlockContainerProps {
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
