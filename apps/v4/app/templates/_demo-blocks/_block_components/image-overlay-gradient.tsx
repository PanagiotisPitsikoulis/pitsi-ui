"use client"

import { cn } from "@/lib/utils"

export type GradientDirection = "bottom" | "top" | "left" | "right"

export interface ImageOverlayGradientProps {
  /** Direction the gradient fades from (where it's darkest) */
  from?: GradientDirection
  /** Additional classes */
  className?: string
}

const gradientClasses: Record<GradientDirection, string> = {
  bottom: "bg-gradient-to-t from-black via-black/40 to-transparent",
  top: "bg-gradient-to-b from-black via-black/40 to-transparent",
  left: "bg-gradient-to-r from-black via-black/40 to-transparent",
  right: "bg-gradient-to-l from-black via-black/40 to-transparent",
}

/**
 * Gradient overlay for images.
 * Creates a fade from dark to transparent, perfect for text over images.
 */
export function ImageOverlayGradient({
  from = "bottom",
  className,
}: ImageOverlayGradientProps) {
  return (
    <div
      className={cn("absolute inset-0 z-10", gradientClasses[from], className)}
      aria-hidden="true"
    />
  )
}

export default ImageOverlayGradient
