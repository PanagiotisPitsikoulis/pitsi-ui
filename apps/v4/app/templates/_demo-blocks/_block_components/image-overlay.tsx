"use client"

import { cn } from "@/lib/utils"

export interface ImageOverlayProps {
  /** Opacity level (0-100), default 70 */
  opacity?: number
  /** Additional classes */
  className?: string
}

/**
 * Simple dark overlay for images.
 * Use over images to ensure text readability.
 */
export function ImageOverlay({ opacity = 70, className }: ImageOverlayProps) {
  return (
    <div
      className={cn("absolute inset-0 z-10 bg-black", className)}
      style={{ opacity: opacity / 100 }}
      aria-hidden="true"
    />
  )
}

export default ImageOverlay
