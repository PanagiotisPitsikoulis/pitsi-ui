"use client"

import { memo, useMemo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"

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

export default CurvedText
