"use client"

import { cn } from "@/lib/utils"

export type PatternType =
  | "dots"
  | "grid"
  | "lines"
  | "diagonal"
  | "cross"
  | "noise"
export type PatternSize = "sm" | "md" | "lg"

export interface PatternDecorationProps {
  /** Pattern type */
  pattern?: PatternType
  /** Pattern size/spacing */
  size?: PatternSize
  /** Pattern color */
  color?: string
  /** Opacity (0-100) */
  opacity?: number
  /** Additional classes */
  className?: string
  /** Fade direction */
  fade?: "none" | "top" | "bottom" | "left" | "right" | "radial"
}

const sizeConfig: Record<PatternSize, { gap: number; dotSize: number }> = {
  sm: { gap: 16, dotSize: 1 },
  md: { gap: 24, dotSize: 1.5 },
  lg: { gap: 32, dotSize: 2 },
}

const fadeClasses: Record<string, string> = {
  none: "",
  top: "[mask-image:linear-gradient(to_bottom,transparent,black_20%)]",
  bottom: "[mask-image:linear-gradient(to_top,transparent,black_20%)]",
  left: "[mask-image:linear-gradient(to_right,transparent,black_20%)]",
  right: "[mask-image:linear-gradient(to_left,transparent,black_20%)]",
  radial:
    "[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]",
}

function getPatternStyle(
  pattern: PatternType,
  size: PatternSize,
  color: string
): React.CSSProperties {
  const { gap, dotSize } = sizeConfig[size]

  switch (pattern) {
    case "dots":
      return {
        backgroundImage: `radial-gradient(${color} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${gap}px ${gap}px`,
      }
    case "grid":
      return {
        backgroundImage: `
          linear-gradient(${color} 1px, transparent 1px),
          linear-gradient(90deg, ${color} 1px, transparent 1px)
        `,
        backgroundSize: `${gap}px ${gap}px`,
      }
    case "lines":
      return {
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: `100% ${gap}px`,
      }
    case "diagonal":
      return {
        backgroundImage: `repeating-linear-gradient(
          45deg,
          ${color} 0,
          ${color} 1px,
          transparent 0,
          transparent 50%
        )`,
        backgroundSize: `${gap}px ${gap}px`,
      }
    case "cross":
      return {
        backgroundImage: `
          linear-gradient(${color} 1px, transparent 1px),
          linear-gradient(90deg, ${color} 1px, transparent 1px)
        `,
        backgroundSize: `${gap}px ${gap}px`,
        backgroundPosition: `center center`,
      }
    case "noise":
      return {
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }
    default:
      return {}
  }
}

export function PatternDecoration({
  pattern = "dots",
  size = "md",
  color = "currentColor",
  opacity = 10,
  className,
  fade = "none",
}: PatternDecorationProps) {
  const patternColor =
    color.startsWith("#") || color.startsWith("rgb")
      ? color
      : `var(--${color.replace("text-", "").replace("bg-", "")}, currentColor)`

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0",
        fadeClasses[fade],
        className
      )}
      style={{
        opacity: opacity / 100,
        ...getPatternStyle(pattern, size, patternColor),
      }}
      aria-hidden="true"
    />
  )
}

export default PatternDecoration
