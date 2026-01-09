"use client"

import { cn } from "@/lib/utils"

import type { BackgroundStyle } from "./types"

// Common props for all background components
interface BackgroundProps {
  className?: string
  primaryColor: string
  secondaryColor: string
  blur?: number
  noise?: number
  patternDensity?: number
}

// Gradient Blur Background - Apple-style soft colorful blur orbs
function GradientBlurBackground({
  className,
  primaryColor,
  secondaryColor,
  blur = 80,
}: BackgroundProps) {
  // Create a third color by mixing primary and secondary
  const tertiaryColor = primaryColor

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Base background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}20, ${secondaryColor}20)`,
        }}
      />

      {/* Blur orb 1 - Top left */}
      <div
        className="absolute rounded-full"
        style={{
          width: "60%",
          height: "60%",
          top: "-10%",
          left: "-10%",
          background: `radial-gradient(circle, ${primaryColor}80 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
        }}
      />

      {/* Blur orb 2 - Bottom right */}
      <div
        className="absolute rounded-full"
        style={{
          width: "50%",
          height: "50%",
          bottom: "-5%",
          right: "-5%",
          background: `radial-gradient(circle, ${secondaryColor}80 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
        }}
      />

      {/* Blur orb 3 - Center */}
      <div
        className="absolute rounded-full"
        style={{
          width: "40%",
          height: "40%",
          top: "30%",
          left: "30%",
          background: `radial-gradient(circle, ${tertiaryColor}60 0%, transparent 70%)`,
          filter: `blur(${blur * 1.2}px)`,
        }}
      />
    </div>
  )
}

// Mesh Background - Multi-point radial gradients blended together
function MeshBackground({
  className,
  primaryColor,
  secondaryColor,
}: BackgroundProps) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at 0% 0%, ${primaryColor}60 0%, transparent 50%),
            radial-gradient(at 100% 0%, ${secondaryColor}60 0%, transparent 50%),
            radial-gradient(at 100% 100%, ${primaryColor}40 0%, transparent 50%),
            radial-gradient(at 0% 100%, ${secondaryColor}40 0%, transparent 50%),
            radial-gradient(at 50% 50%, ${primaryColor}30 0%, transparent 50%),
            linear-gradient(135deg, ${primaryColor}20, ${secondaryColor}20)
          `,
        }}
      />
    </div>
  )
}

// Dots Background - Repeating dot grid pattern
function DotsBackground({
  className,
  primaryColor,
  secondaryColor,
  patternDensity = 20,
}: BackgroundProps) {
  const spacing = Math.max(8, 40 - patternDensity)
  const dotSize = Math.max(1, patternDensity / 20)

  return (
    <div className={cn("absolute inset-0", className)}>
      {/* Base solid color */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: secondaryColor }}
      />
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${primaryColor} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${spacing}px ${spacing}px`,
          backgroundPosition: `${spacing / 2}px ${spacing / 2}px`,
        }}
      />
    </div>
  )
}

// Lines Background - Grid lines pattern
function LinesBackground({
  className,
  primaryColor,
  secondaryColor,
  patternDensity = 20,
}: BackgroundProps) {
  const spacing = Math.max(10, 60 - patternDensity * 2)
  const lineWidth = 1

  return (
    <div className={cn("absolute inset-0", className)}>
      {/* Base solid color */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: secondaryColor }}
      />
      {/* Grid lines overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${primaryColor}30 ${lineWidth}px, transparent ${lineWidth}px),
            linear-gradient(to bottom, ${primaryColor}30 ${lineWidth}px, transparent ${lineWidth}px)
          `,
          backgroundSize: `${spacing}px ${spacing}px`,
        }}
      />
    </div>
  )
}

// Solid Noise Background - Solid color with optional film grain/noise texture
function SolidNoiseBackground({
  className,
  primaryColor,
  noise = 0,
}: BackgroundProps) {
  return (
    <div className={cn("absolute inset-0", className)}>
      {/* Solid base color */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: primaryColor }}
      />
      {/* Noise overlay */}
      {noise > 0 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            opacity: noise / 100,
            mixBlendMode: "overlay",
          }}
        />
      )}
    </div>
  )
}

// Transparent Background - Checkerboard pattern to indicate transparency
function TransparentBackground({ className }: BackgroundProps) {
  const checkSize = 16

  return (
    <div className={cn("absolute inset-0", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
            linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
            linear-gradient(-45deg, transparent 75%, #e0e0e0 75%)
          `,
          backgroundSize: `${checkSize}px ${checkSize}px`,
          backgroundPosition: `0 0, 0 ${checkSize / 2}px, ${checkSize / 2}px -${checkSize / 2}px, -${checkSize / 2}px 0px`,
          backgroundColor: "#ffffff",
        }}
      />
    </div>
  )
}

// Canvas Background wrapper component
interface CanvasBackgroundProps extends BackgroundProps {
  style: BackgroundStyle
}

export function CanvasBackground({
  style,
  className,
  primaryColor,
  secondaryColor,
  blur,
  noise,
  patternDensity,
}: CanvasBackgroundProps) {
  const props = {
    className,
    primaryColor,
    secondaryColor,
    blur,
    noise,
    patternDensity,
  }

  switch (style) {
    case "gradient-blur":
      return <GradientBlurBackground {...props} />
    case "mesh":
      return <MeshBackground {...props} />
    case "dots":
      return <DotsBackground {...props} />
    case "lines":
      return <LinesBackground {...props} />
    case "solid":
      return <SolidNoiseBackground {...props} />
    case "transparent":
      return <TransparentBackground {...props} />
    default:
      return <GradientBlurBackground {...props} />
  }
}

// Export individual components for direct use if needed
export {
  GradientBlurBackground,
  MeshBackground,
  DotsBackground,
  LinesBackground,
  SolidNoiseBackground,
  TransparentBackground,
}
