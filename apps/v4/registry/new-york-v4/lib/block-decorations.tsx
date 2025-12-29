"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

// ============================================================================
// KnockoutText - Makes text readable over any background
// ============================================================================

export interface KnockoutTextProps {
  children: React.ReactNode
  className?: string
  /** Horizontal padding for the overlay (default: 48) */
  padX?: number
  /** Vertical padding for the overlay (default: 24) */
  padY?: number
  /** Blur amount (default: 3xl) */
  blur?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  /** Apply mix-blend-difference to children (default: true) */
  blend?: boolean
  /** Intensity - number of stacked layers (default: 1) */
  intensity?: number
}

const knockoutBlurClasses = {
  sm: "blur-sm",
  md: "blur-md",
  lg: "blur-lg",
  xl: "blur-xl",
  "2xl": "blur-2xl",
  "3xl": "blur-3xl",
}

export function KnockoutText({
  children,
  className,
  padX = 48,
  padY = 24,
  blur = "3xl",
  blend = true,
  intensity = 1,
}: KnockoutTextProps) {
  return (
    <div className={cn("relative", className)}>
      {Array.from({ length: intensity }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "bg-background pointer-events-none absolute rounded-[100%]",
            knockoutBlurClasses[blur]
          )}
          style={{
            inset: `-${padY * 4}px -${padX * 4}px`,
          }}
        />
      ))}
      <div className={cn("relative", blend && "[&>*]:mix-blend-difference")}>
        {children}
      </div>
    </div>
  )
}

// ============================================================================
// Overlay - Generic overlay component
// ============================================================================

export type OverlayVariant =
  | "dark"
  | "light"
  | "gradient-bottom"
  | "gradient-top"
  | "gradient-radial"
  | "vignette"

export interface OverlayProps {
  variant?: OverlayVariant
  /** Opacity level (0-100), default 40 */
  opacity?: number
  className?: string
  /** Custom color (overrides variant) */
  color?: string
}

const overlayVariantClasses: Record<OverlayVariant, string> = {
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
        !color && overlayVariantClasses[variant],
        className
      )}
      style={style}
    />
  )
}

// ============================================================================
// ImageOverlay - Dark overlay using theme background
// ============================================================================

export interface ImageOverlayProps {
  /** Opacity level (0-100), default 20 */
  opacity?: number
  className?: string
}

export function ImageOverlay({ opacity = 20, className }: ImageOverlayProps) {
  return (
    <div
      className={cn("bg-background absolute inset-0 z-10", className)}
      style={{ opacity: opacity / 100 }}
      aria-hidden="true"
    />
  )
}

// ============================================================================
// ImageOverlayGradient - Gradient overlay for images
// ============================================================================

export type GradientDirection = "bottom" | "top" | "left" | "right"

export interface ImageOverlayGradientProps {
  /** Direction the gradient fades from (where it's darkest) */
  from?: GradientDirection
  className?: string
}

const gradientClasses: Record<GradientDirection, string> = {
  bottom:
    "bg-gradient-to-t from-background/50 via-background/10 to-transparent",
  top: "bg-gradient-to-b from-background/50 via-background/10 to-transparent",
  left: "bg-gradient-to-r from-background/50 via-background/10 to-transparent",
  right: "bg-gradient-to-l from-background/50 via-background/10 to-transparent",
}

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

// ============================================================================
// FloatingDecoration - Animated floating shapes
// ============================================================================

export type FloatingShape = "circle" | "ring" | "blob" | "square" | "diamond"
export type FloatingSize = "sm" | "md" | "lg" | "xl"
export type FloatingPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center"

export interface FloatingDecorationProps {
  shape?: FloatingShape
  size?: FloatingSize
  position?: FloatingPosition
  /** Color (tailwind color or custom) */
  color?: string
  blur?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  /** Opacity (0-100) */
  opacity?: number
  /** Enable float animation */
  animate?: boolean
  /** Animation duration in seconds */
  duration?: number
  className?: string
  /** Custom position offset */
  offset?: { x?: string; y?: string }
}

const floatingSizeClasses: Record<FloatingSize, string> = {
  sm: "w-24 h-24",
  md: "w-48 h-48",
  lg: "w-72 h-72",
  xl: "w-96 h-96",
}

const floatingPositionClasses: Record<FloatingPosition, string> = {
  "top-left": "-top-12 -left-12",
  "top-right": "-top-12 -right-12",
  "bottom-left": "-bottom-12 -left-12",
  "bottom-right": "-bottom-12 -right-12",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
}

const floatingBlurClasses: Record<string, string> = {
  none: "",
  sm: "blur-sm",
  md: "blur-md",
  lg: "blur-lg",
  xl: "blur-xl",
  "2xl": "blur-2xl",
  "3xl": "blur-3xl",
}

const floatingShapeClasses: Record<FloatingShape, string> = {
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
          floatingSizeClasses[size],
          floatingPositionClasses[position],
          floatingShapeClasses[shape],
          floatingBlurClasses[blur],
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

// ============================================================================
// PatternDecoration - Background patterns
// ============================================================================

export type PatternType =
  | "dots"
  | "grid"
  | "lines"
  | "diagonal"
  | "cross"
  | "noise"
export type PatternSize = "sm" | "md" | "lg"

export interface PatternDecorationProps {
  pattern?: PatternType
  size?: PatternSize
  /** Pattern color */
  color?: string
  /** Opacity (0-100) */
  opacity?: number
  className?: string
  fade?: "none" | "top" | "bottom" | "left" | "right" | "radial"
}

const patternSizeConfig: Record<PatternSize, { gap: number; dotSize: number }> =
  {
    sm: { gap: 16, dotSize: 1 },
    md: { gap: 24, dotSize: 1.5 },
    lg: { gap: 32, dotSize: 2 },
  }

const patternFadeClasses: Record<string, string> = {
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
  const { gap, dotSize } = patternSizeConfig[size]

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
        patternFadeClasses[fade],
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

// ============================================================================
// BgDecoration - Background gradients
// ============================================================================

export type BgDecorationVariant =
  | "glow"
  | "gradient-mesh"
  | "aurora"
  | "spotlight"
  | "radial-gradient"
  | "linear-gradient"

export interface BgDecorationProps {
  variant?: BgDecorationVariant
  primaryColor?: string
  secondaryColor?: string
  /** Opacity (0-100) */
  opacity?: number
  position?: "top" | "bottom" | "center" | "full"
  className?: string
}

const bgPositionClasses: Record<string, string> = {
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
        bgPositionClasses[position],
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

// ============================================================================
// ItemDecoration - Decorative positioned images
// ============================================================================

export type ItemPosition = {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export interface ItemDecorationProps {
  src: string
  alt?: string
  width?: number
  height?: number
  position?: ItemPosition
  /** Rotation in degrees */
  rotation?: number
  zIndex?: number
  /** Show on mobile (default: false) */
  showOnMobile?: boolean
  className?: string
  imageClassName?: string
}

export function ItemDecoration({
  src,
  alt = "Decorative image",
  width = 500,
  height = 500,
  position = {},
  rotation = 0,
  zIndex = 20,
  showOnMobile = false,
  className,
  imageClassName,
}: ItemDecorationProps) {
  const positionStyle: React.CSSProperties = {
    ...position,
    zIndex,
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute",
        !showOnMobile && "hidden lg:block",
        className
      )}
      style={positionStyle}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "object-contain",
          rotation !== 0 && `rotate-[${rotation}deg]`,
          imageClassName
        )}
        style={
          rotation !== 0 ? { transform: `rotate(${rotation}deg)` } : undefined
        }
      />
    </div>
  )
}
