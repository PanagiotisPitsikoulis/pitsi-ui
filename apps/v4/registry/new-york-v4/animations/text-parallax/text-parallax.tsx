"use client"

import type { ReactNode } from "react"
import { createContext, memo, useContext, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"

// Context to share scroll progress
const ScrollProgressContext = createContext<MotionValue<number> | null>(null)

export type HorizontalScrollContainerProps = {
  /** Child slides */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Container that tracks scroll progress for horizontal slide animations.
 * Wrap HorizontalSlide components inside this container.
 */
export const HorizontalScrollContainer = memo<HorizontalScrollContainerProps>(
  ({ children, className, scrollBased = true, noMobile = false }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { shouldUseScroll } = useAnimationState(scrollBased, noMobile)

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start end", "end start"],
    })

    return (
      <ScrollProgressContext.Provider value={scrollYProgress}>
        <div ref={ref} className={className}>
          {children}
        </div>
      </ScrollProgressContext.Provider>
    )
  }
)

HorizontalScrollContainer.displayName = "HorizontalScrollContainer"

export type HorizontalSlideProps = {
  /** Content to slide */
  children: ReactNode
  /** Direction of movement. Default: "left" */
  direction?: "left" | "right"
  /** CSS left offset. Default: "0%" */
  left?: string
  /** Movement distance in pixels. Default: 150 */
  distance?: number
  /** Additional CSS classes */
  className?: string
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Content that slides horizontally based on scroll progress.
 * Use inside HorizontalScrollContainer for shared scroll tracking.
 */
export const HorizontalSlide = memo<HorizontalSlideProps>(
  ({
    children,
    direction = "left",
    left = "0%",
    distance = 150,
    className,
    scrollBased = true,
    noMobile = false,
  }) => {
    const scrollYProgress = useContext(ScrollProgressContext)
    const { shouldDisableAnimation } = useAnimationState(scrollBased, noMobile)

    const dir = direction === "left" ? -1 : 1
    const translateX = useTransform(
      scrollYProgress || new MotionValue(0),
      [0, 1],
      [distance * dir, -distance * dir]
    )

    if (shouldDisableAnimation || !scrollYProgress) {
      return (
        <div
          className={cn("relative flex whitespace-nowrap", className)}
          style={{ left }}
        >
          {children}
        </div>
      )
    }

    return (
      <motion.div
        style={{ x: translateX, left }}
        className={cn("relative flex whitespace-nowrap", className)}
      >
        {children}
      </motion.div>
    )
  }
)

HorizontalSlide.displayName = "HorizontalSlide"

// Legacy exports for backwards compatibility
export type TextParallaxProps = {
  /** Content to apply parallax effect to */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Multiplier for parallax speed. Default: 0.5 */
  speed?: number
  /** Scroll offset. Default: ["start end", "end start"] */
  offset?: [string, string]
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Text that moves vertically at a different speed than scroll.
 * @deprecated Use HorizontalSlide for horizontal movement or keep for vertical parallax.
 */
export const TextParallax = memo<TextParallaxProps>(
  ({
    children,
    className,
    speed = 0.5,
    offset = ["start end", "end start"],
    scrollBased = true,
    noMobile = false,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: offset as any,
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

    if (shouldDisableAnimation) {
      return <div className={className}>{children}</div>
    }

    return (
      <motion.div
        ref={ref}
        style={{ y }}
        className={cn("will-change-transform", className)}
      >
        {children}
      </motion.div>
    )
  }
)

TextParallax.displayName = "TextParallax"

export default HorizontalSlide
