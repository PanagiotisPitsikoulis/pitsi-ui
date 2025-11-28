"use client"

import type { ReactNode } from "react"
import { createContext, memo, useContext, useMemo, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"

// Context for scroll progress
const ScrollPathContext = createContext<MotionValue<number> | null>(null)

export type ScrollPathContainerProps = {
  /** Container children */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Container height. Default: "350vh" */
  height?: string
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Container for scroll-animated path effects.
 * Provides scroll progress to child ScrollLinePath components.
 */
export const ScrollPathContainer = memo<ScrollPathContainerProps>(
  ({
    children,
    className,
    height = "350vh",
    scrollBased = true,
    noMobile = false,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { shouldUseScroll, shouldDisableAnimation } = useAnimationState(
      scrollBased,
      noMobile
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
    })

    if (shouldDisableAnimation) {
      return (
        <section
          className={cn(
            "flex flex-col items-center overflow-hidden",
            className
          )}
          style={{ height }}
        >
          {children}
        </section>
      )
    }

    return (
      <ScrollPathContext.Provider value={scrollYProgress}>
        <section
          ref={ref}
          className={cn(
            "flex flex-col items-center overflow-hidden",
            className
          )}
          style={{ height }}
        >
          {children}
        </section>
      </ScrollPathContext.Provider>
    )
  }
)

ScrollPathContainer.displayName = "ScrollPathContainer"

export type ScrollLinePathProps = {
  /** SVG path data (d attribute) */
  path: string
  /** Additional CSS classes for the SVG */
  className?: string
  /** Stroke color. Default: "#C2F84F" */
  strokeColor?: string
  /** Stroke width. Default: 20 */
  strokeWidth?: number
  /** ViewBox dimensions. Default: "0 0 1278 2319" */
  viewBox?: string
  /** Initial path progress (0-1). Default: 0.5 */
  initialProgress?: number
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * SVG path that animates its stroke based on scroll progress.
 * Use inside ScrollPathContainer.
 */
export const ScrollLinePath = memo<ScrollLinePathProps>(
  ({
    path,
    className,
    strokeColor = "#C2F84F",
    strokeWidth = 20,
    viewBox = "0 0 1278 2319",
    initialProgress = 0.5,
    scrollBased = true,
    noMobile = false,
  }) => {
    const context = useContext(ScrollPathContext)
    const { shouldDisableAnimation } = useAnimationState(scrollBased, noMobile)

    const pathLength = useTransform(
      context || new MotionValue(0),
      [0, 1],
      [initialProgress, 1]
    )

    const strokeDashoffset = useTransform(pathLength, (value) => 1 - value)

    if (shouldDisableAnimation || !context) {
      return (
        <svg
          viewBox={viewBox}
          fill="none"
          overflow="visible"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path d={path} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      )
    }

    return (
      <svg
        viewBox={viewBox}
        fill="none"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <motion.path
          d={path}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          style={{
            pathLength,
            strokeDashoffset,
          }}
        />
      </svg>
    )
  }
)

ScrollLinePath.displayName = "ScrollLinePath"

// Original curved text components
export type CurvedTextProps = {
  /** Text to display along the curve */
  text: string
  /** Additional CSS classes for container */
  className?: string
  /** Additional CSS classes for text styling */
  textClassName?: string
  /** Type of curve. Default: "arc" */
  curve?: "arc" | "wave" | "circle"
  /** Disable animation features. Default: false */
  noMobile?: boolean
}

/**
 * Text that follows predefined curved paths.
 * Choose from arc, wave, or circle curves for decorative text layouts.
 */
export const CurvedText = memo<CurvedTextProps>(
  ({ text, className, textClassName, curve = "arc", noMobile = false }) => {
    const { shouldDisableAnimation } = useAnimationState(false, noMobile)

    const paths = useMemo(
      () => ({
        arc: "M 100 400 Q 500 100 900 400",
        wave: "M 100 250 Q 250 100 400 250 T 700 250 T 900 250",
        circle: "M 500 100 A 300 300 0 1 1 500 100.001",
      }),
      []
    )

    const pathId = useMemo(
      () => `${curve}-path-${Math.random().toString(36).slice(2, 9)}`,
      [curve]
    )

    if (shouldDisableAnimation) {
      return (
        <div className={cn("text-center", className)}>
          <p className={cn("text-4xl font-bold", textClassName)}>{text}</p>
        </div>
      )
    }

    return (
      <div className={className}>
        <svg
          viewBox="0 0 1000 500"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path id={pathId} d={paths[curve]} fill="none" />
          </defs>

          <text
            className={cn("fill-current text-4xl font-bold", textClassName)}
          >
            <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    )
  }
)

CurvedText.displayName = "CurvedText"

export type CircularTextProps = {
  /** Text to display in circular arrangement */
  text: string
  /** Additional CSS classes for container */
  className?: string
  /** Additional CSS classes for text styling */
  textClassName?: string
  /** Radius of the circle in pixels. Default: 200 */
  radius?: number
  /** Enable scroll-based rotation. Default: false */
  rotate?: boolean
  /** Enable scroll-based animation. Default: true (when rotate is true) */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Text arranged in a circle with optional scroll-based rotation.
 * Perfect for logos, badges, and decorative elements.
 */
export const CircularText = memo<CircularTextProps>(
  ({
    text,
    className,
    textClassName,
    radius = 200,
    rotate = false,
    scrollBased = true,
    noMobile = false,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased && rotate,
      noMobile
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start end", "end start"],
    })

    const rotation = useTransform(scrollYProgress, [0, 1], [0, 360])

    const pathId = useMemo(
      () => `circle-path-${Math.random().toString(36).slice(2, 9)}`,
      []
    )

    const center = 250

    const circularPath = useMemo(
      () =>
        `M ${center} ${center - radius} A ${radius} ${radius} 0 1 1 ${center - 0.001} ${center - radius}`,
      [radius, center]
    )

    if (shouldDisableAnimation && rotate) {
      return (
        <div className={cn("text-center", className)}>
          <p
            className={cn(
              "text-2xl font-bold tracking-wider uppercase",
              textClassName
            )}
          >
            {text}
          </p>
        </div>
      )
    }

    return (
      <div ref={ref} className={className}>
        <svg
          viewBox="0 0 500 500"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path id={pathId} d={circularPath} fill="none" />
          </defs>

          <motion.g
            style={
              rotate && !shouldDisableAnimation
                ? ({
                    rotate: rotation,
                    originX: "250px",
                    originY: "250px",
                  } as any)
                : undefined
            }
          >
            <text
              className={cn(
                "fill-current text-2xl font-bold tracking-wider uppercase",
                textClassName
              )}
            >
              <textPath href={`#${pathId}`} startOffset="0%">
                {text}
              </textPath>
            </text>
          </motion.g>
        </svg>
      </div>
    )
  }
)

CircularText.displayName = "CircularText"

export default ScrollPathContainer
