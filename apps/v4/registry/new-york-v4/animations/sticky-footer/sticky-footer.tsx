"use client"

import type { ReactNode } from "react"
import { memo } from "react"

import { cn } from "@/lib/utils"

export type StickyRevealFooterProps = {
  /** Footer content */
  children: ReactNode
  /** Additional CSS classes for outer container */
  className?: string
  /** Footer height in pixels. Default: 800 */
  height?: number
}

/**
 * Footer that reveals from behind the main content on scroll.
 * Uses pure CSS clip-path and sticky positioning for smooth effect.
 *
 * Best used for promotional footers or CTA sections at the bottom of long pages.
 */
export const StickyRevealFooter = memo<StickyRevealFooterProps>(
  ({ children, className, height = 800 }) => {
    return (
      <div
        className={cn("relative", className)}
        style={{
          height: `${height}px`,
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        <div
          className="relative"
          style={{
            top: "-100vh",
            height: `calc(100vh + ${height}px)`,
          }}
        >
          <div
            className="sticky h-full"
            style={{
              top: `calc(100vh - ${height}px)`,
              height: `${height}px`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)

StickyRevealFooter.displayName = "StickyRevealFooter"

// Legacy export for backwards compatibility with old API
export type StickyFooterProps = {
  /** Footer content */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Height from bottom (in px) to trigger sticky behavior. Default: 100 */
  triggerHeight?: number
  /** Disable sticky behavior on mobile. Default: false */
  disableOnMobile?: boolean
}

/**
 * @deprecated Use StickyRevealFooter for the CSS-based reveal effect.
 * This component uses JavaScript scroll listeners.
 */
export const StickyFooter = memo<StickyFooterProps>(
  ({ children, className }) => {
    return (
      <footer className={cn("relative w-full", className)}>{children}</footer>
    )
  }
)

StickyFooter.displayName = "StickyFooter"

export default StickyRevealFooter
