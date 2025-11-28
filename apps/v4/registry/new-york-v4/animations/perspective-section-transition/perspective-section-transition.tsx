"use client"

import type { ReactNode } from "react"
import { createContext, memo, useContext, useMemo, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"

// Context to share scroll progress between container and sections
const ScrollProgressContext = createContext<MotionValue<number> | null>(null)

export type PerspectiveContainerProps = {
  /** Child sections */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Height of the scroll container. Default: "200vh" */
  height?: string
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Container for perspective section transitions.
 * Provides scroll progress to child PerspectiveSection components.
 */
export const PerspectiveContainer = memo<PerspectiveContainerProps>(
  ({
    children,
    className,
    height = "200vh",
    scrollBased = true,
    noMobile = false,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { shouldUseScroll } = useAnimationState(scrollBased, noMobile)

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start start", "end end"],
    })

    return (
      <ScrollProgressContext.Provider value={scrollYProgress}>
        <main
          ref={ref}
          className={cn("relative", className)}
          style={{ height }}
        >
          {children}
        </main>
      </ScrollProgressContext.Provider>
    )
  }
)

PerspectiveContainer.displayName = "PerspectiveContainer"

export type PerspectiveSectionProps = {
  /** Section content */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Scale range [start, end]. Default: [1, 0.8] */
  scaleRange?: [number, number]
  /** Rotate range in degrees [start, end]. Default: [0, -5] */
  rotateRange?: [number, number]
  /** Whether section is sticky. Default: false */
  sticky?: boolean
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Section that transforms (scale/rotate) based on scroll progress.
 * Use inside PerspectiveContainer for shared scroll tracking.
 */
export const PerspectiveSection = memo<PerspectiveSectionProps>(
  ({
    children,
    className,
    scaleRange = [1, 0.8],
    rotateRange = [0, -5],
    sticky = false,
    scrollBased = true,
    noMobile = false,
  }) => {
    const scrollYProgress = useContext(ScrollProgressContext)
    const { shouldDisableAnimation } = useAnimationState(scrollBased, noMobile)

    const scale = useTransform(
      scrollYProgress || new MotionValue(0),
      [0, 1],
      scaleRange
    )
    const rotate = useTransform(
      scrollYProgress || new MotionValue(0),
      [0, 1],
      rotateRange
    )

    if (shouldDisableAnimation || !scrollYProgress) {
      return (
        <div
          className={cn(
            "flex h-screen flex-col items-center justify-center",
            sticky && "sticky top-0",
            className
          )}
        >
          {children}
        </div>
      )
    }

    return (
      <motion.div
        style={{ scale, rotate }}
        className={cn(
          "flex h-screen flex-col items-center justify-center",
          sticky && "sticky top-0",
          className
        )}
      >
        {children}
      </motion.div>
    )
  }
)

PerspectiveSection.displayName = "PerspectiveSection"

// Legacy exports for backwards compatibility
export { PerspectiveContainer as RotatingCardSection }

export default PerspectiveSection
