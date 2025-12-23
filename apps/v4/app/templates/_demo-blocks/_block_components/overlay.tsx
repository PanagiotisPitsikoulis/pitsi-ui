"use client"

import { cn } from "@/lib/utils"

export type OverlayVariant =
  | "dark"
  | "light"
  | "gradient-bottom"
  | "gradient-top"
  | "gradient-radial"
  | "vignette"

export interface OverlayProps {
  /** Overlay style variant */
  variant?: OverlayVariant
  /** Opacity level (0-100) */
  opacity?: number
  /** Additional classes */
  className?: string
  /** Custom color (overrides variant) */
  color?: string
}

const variantClasses: Record<OverlayVariant, string> = {
  dark: "bg-black",
  light: "bg-white",
  "gradient-bottom": "bg-gradient-to-t from-black via-black/50 to-transparent",
  "gradient-top": "bg-gradient-to-b from-black via-black/50 to-transparent",
  "gradient-radial": "bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]",
  vignette: "bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)]",
}

export function Overlay({
  variant = "dark",
  opacity = 70,
  className,
  color,
}: OverlayProps) {
  const style = color
    ? { backgroundColor: color, opacity: opacity / 100 }
    : { opacity: opacity / 100 }

  return (
    <div
      className={cn(
        "absolute inset-0 z-10",
        !color && variantClasses[variant],
        className
      )}
      style={style}
    />
  )
}

export default Overlay
