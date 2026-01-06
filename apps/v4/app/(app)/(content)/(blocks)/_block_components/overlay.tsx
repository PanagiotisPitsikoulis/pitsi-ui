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
  /** Opacity level (0-100), default 40 */
  opacity?: number
  /** Additional classes */
  className?: string
  /** Custom color (overrides variant) */
  color?: string
}

const variantClasses: Record<OverlayVariant, string> = {
  dark: "bg-black",
  light: "bg-white",
  "gradient-bottom":
    "bg-gradient-to-t from-black/80 via-black/30 to-transparent",
  "gradient-top": "bg-gradient-to-b from-black/80 via-black/30 to-transparent",
  "gradient-radial":
    "bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)]",
  vignette: "bg-[radial-gradient(ellipse_at_center,transparent_0%,black_50%)]",
}

export function Overlay({
  variant = "dark",
  opacity = 40,
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
