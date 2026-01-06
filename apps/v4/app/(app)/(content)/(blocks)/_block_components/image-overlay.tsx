"use client"

import { cn } from "@/lib/utils"

export interface ImageOverlayProps {
  /** Opacity level (0-100), default 20 */
  opacity?: number
  /** Additional classes */
  className?: string
}

/**
 * Dark overlay for images using theme background color.
 * Wrap in a dark-forced theme container for dark overlays.
 */
export function ImageOverlay({ opacity = 20, className }: ImageOverlayProps) {
  return (
    <div
      className={cn("bg-background absolute inset-0 z-10", className)}
      style={{ opacity: opacity / 100 }}
      aria-hidden="true"
    />
  )
}

export default ImageOverlay
