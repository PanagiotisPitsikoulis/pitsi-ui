"use client"

import { cn } from "@/lib/utils"

export type FloatingShape = "circle" | "ring" | "blob" | "square" | "diamond"
export type FloatingSize = "sm" | "md" | "lg" | "xl"
export type FloatingPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center"

export interface FloatingDecorationProps {
  /** Shape of the decoration */
  shape?: FloatingShape
  /** Size of the decoration */
  size?: FloatingSize
  /** Position preset */
  position?: FloatingPosition
  /** Color (tailwind color or custom) */
  color?: string
  /** Blur amount */
  blur?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  /** Opacity (0-100) */
  opacity?: number
  /** Enable float animation */
  animate?: boolean
  /** Animation duration in seconds */
  duration?: number
  /** Additional classes */
  className?: string
  /** Custom position offset */
  offset?: { x?: string; y?: string }
}

const sizeClasses: Record<FloatingSize, string> = {
  sm: "w-24 h-24",
  md: "w-48 h-48",
  lg: "w-72 h-72",
  xl: "w-96 h-96",
}

const positionClasses: Record<FloatingPosition, string> = {
  "top-left": "-top-12 -left-12",
  "top-right": "-top-12 -right-12",
  "bottom-left": "-bottom-12 -left-12",
  "bottom-right": "-bottom-12 -right-12",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
}

const blurClasses: Record<string, string> = {
  none: "",
  sm: "blur-sm",
  md: "blur-md",
  lg: "blur-lg",
  xl: "blur-xl",
  "2xl": "blur-2xl",
  "3xl": "blur-3xl",
}

const shapeClasses: Record<FloatingShape, string> = {
  circle: "rounded-full",
  ring: "rounded-full border-[3px] bg-transparent",
  blob: "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
  square: "rounded-none",
  diamond: "rotate-45",
}

export function FloatingDecoration({
  shape = "circle",
  size = "md",
  position = "top-right",
  color = "bg-primary/20",
  blur = "2xl",
  opacity = 100,
  animate = true,
  duration = 6,
  className,
  offset,
}: FloatingDecorationProps) {
  const isCustomColor = color.startsWith("#") || color.startsWith("rgb")
  const style: React.CSSProperties = {
    opacity: opacity / 100,
    ...(isCustomColor && { backgroundColor: color }),
    ...(offset?.x && { marginLeft: offset.x }),
    ...(offset?.y && { marginTop: offset.y }),
    ...(animate && {
      animation: `float ${duration}s ease-in-out infinite`,
    }),
  }

  return (
    <>
      {animate && (
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) ${position === "center" ? "translate(-50%, -50%)" : ""}; }
            50% { transform: translateY(-20px) ${position === "center" ? "translate(-50%, -50%)" : ""}; }
          }
        `}</style>
      )}
      <div
        className={cn(
          "pointer-events-none absolute",
          sizeClasses[size],
          positionClasses[position],
          shapeClasses[shape],
          blurClasses[blur],
          !isCustomColor && color,
          shape === "ring" && "border-current",
          className
        )}
        style={style}
        aria-hidden="true"
      />
    </>
  )
}

export default FloatingDecoration
