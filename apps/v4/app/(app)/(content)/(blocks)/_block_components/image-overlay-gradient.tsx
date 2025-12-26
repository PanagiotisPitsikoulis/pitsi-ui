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
  bottom: "bg-gradient-to-t from-background/50 via-background/10 to-transparent",
  top: "bg-gradient-to-b from-background/50 via-background/10 to-transparent",
  left: "bg-gradient-to-r from-background/50 via-background/10 to-transparent",
  right: "bg-gradient-to-l from-background/50 via-background/10 to-transparent",
}

/**
 * Gradient overlay for images using theme background color.
 * Wrap in a dark-forced theme container for dark overlays.
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
