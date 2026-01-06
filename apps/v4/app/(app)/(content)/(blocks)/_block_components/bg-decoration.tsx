"use client"

import { cn } from "@/lib/utils"

export type BgDecorationVariant =
  | "glow"
  | "gradient-mesh"
  | "aurora"
  | "spotlight"
  | "radial-gradient"
  | "linear-gradient"

export interface BgDecorationProps {
  /** Decoration variant */
  variant?: BgDecorationVariant
  /** Primary color */
  primaryColor?: string
  /** Secondary color */
  secondaryColor?: string
  /** Opacity (0-100) */
  opacity?: number
  /** Position */
  position?: "top" | "bottom" | "center" | "full"
  /** Additional classes */
  className?: string
}

const positionClasses: Record<string, string> = {
  top: "top-0 h-1/2",
  bottom: "bottom-0 h-1/2",
  center: "top-1/2 -translate-y-1/2 h-1/2",
  full: "inset-0",
}

export function BgDecoration({
  variant = "glow",
  primaryColor = "var(--primary)",
  secondaryColor = "var(--brand-complementary, var(--secondary))",
  opacity = 30,
  position = "full",
  className,
}: BgDecorationProps) {
  const getVariantStyle = (): React.CSSProperties => {
    switch (variant) {
      case "glow":
        return {
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${primaryColor}, transparent 70%)`,
        }
      case "gradient-mesh":
        return {
          background: `
            radial-gradient(at 40% 20%, ${primaryColor} 0px, transparent 50%),
            radial-gradient(at 80% 0%, ${secondaryColor} 0px, transparent 50%),
            radial-gradient(at 0% 50%, ${primaryColor} 0px, transparent 50%),
            radial-gradient(at 80% 50%, ${secondaryColor} 0px, transparent 50%),
            radial-gradient(at 0% 100%, ${primaryColor} 0px, transparent 50%),
            radial-gradient(at 80% 100%, ${secondaryColor} 0px, transparent 50%)
          `,
        }
      case "aurora":
        return {
          background: `
            linear-gradient(135deg, ${primaryColor} 0%, transparent 50%),
            linear-gradient(225deg, ${secondaryColor} 0%, transparent 50%),
            linear-gradient(315deg, ${primaryColor} 0%, transparent 50%),
            linear-gradient(45deg, ${secondaryColor} 0%, transparent 50%)
          `,
          filter: "blur(60px)",
        }
      case "spotlight":
        return {
          background: `radial-gradient(circle at 50% 0%, ${primaryColor} 0%, transparent 50%)`,
        }
      case "radial-gradient":
        return {
          background: `radial-gradient(circle at center, ${primaryColor} 0%, ${secondaryColor} 50%, transparent 70%)`,
        }
      case "linear-gradient":
        return {
          background: `linear-gradient(180deg, ${primaryColor} 0%, ${secondaryColor} 50%, transparent 100%)`,
        }
      default:
        return {}
    }
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute right-0 left-0",
        positionClasses[position],
        className
      )}
      style={{
        opacity: opacity / 100,
        ...getVariantStyle(),
      }}
      aria-hidden="true"
    />
  )
}

export default BgDecoration
