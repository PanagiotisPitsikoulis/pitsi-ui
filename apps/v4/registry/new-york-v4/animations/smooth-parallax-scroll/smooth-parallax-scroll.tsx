"use client"

import type { ReactNode } from "react"
import { createContext, memo, useContext, useMemo, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"

// Context for scroll progress
const ScrollProgressContext = createContext<MotionValue<number> | null>(null)

export type SmoothParallaxContainerProps = {
  /** Parallax layers */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Container height. Default: "300vh" */
  height?: string
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Container for smooth parallax scroll effect.
 * Provides scroll progress to child SmoothParallaxLayer components.
 */
export const SmoothParallaxContainer = memo<SmoothParallaxContainerProps>(
  ({
    children,
    className,
    height = "300vh",
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
      offset: ["start start", "end end"],
    })

    if (shouldDisableAnimation) {
      return (
        <div className={cn("relative", className)} style={{ height }}>
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            {children}
          </div>
        </div>
      )
    }

    return (
      <ScrollProgressContext.Provider value={scrollYProgress}>
        <div ref={ref} className={cn("relative", className)} style={{ height }}>
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            {children}
          </div>
        </div>
      </ScrollProgressContext.Provider>
    )
  }
)

SmoothParallaxContainer.displayName = "SmoothParallaxContainer"

export type SmoothParallaxLayerProps = {
  /** Layer content */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Y movement range in pixels. Default: [-200, 0] means moves up 200px */
  yRange?: [number, number]
  /** Scale range. Default: [1, 1] (no scale) */
  scaleRange?: [number, number]
  /** Opacity range. Default: [1, 1] (no opacity change) */
  opacityRange?: number[]
  /** Opacity input range. Default: [0, 1] */
  opacityInputRange?: number[]
  /** Z-index for layering. Default: 0 */
  zIndex?: number
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Individual parallax layer with customizable movement.
 * Use inside SmoothParallaxContainer.
 */
export const SmoothParallaxLayer = memo<SmoothParallaxLayerProps>(
  ({
    children,
    className,
    yRange = [-200, 0],
    scaleRange = [1, 1],
    opacityRange = [1, 1],
    opacityInputRange = [0, 1],
    zIndex = 0,
    scrollBased = true,
    noMobile = false,
  }) => {
    const context = useContext(ScrollProgressContext)
    const { shouldDisableAnimation } = useAnimationState(scrollBased, noMobile)

    const y = useTransform(
      context || new MotionValue(0),
      [0, 1],
      [0, yRange[0]]
    )

    const scale = useTransform(
      context || new MotionValue(0),
      [0, 0.5, 1],
      [scaleRange[0], scaleRange[1], scaleRange[0]]
    )

    const opacity = useTransform(
      context || new MotionValue(0),
      opacityInputRange,
      opacityRange
    )

    const hasScale = scaleRange[0] !== scaleRange[1]
    const hasOpacity = opacityRange.some(
      (v, i) => i > 0 && v !== opacityRange[0]
    )

    if (shouldDisableAnimation || !context) {
      return (
        <div className={className} style={{ zIndex }}>
          {children}
        </div>
      )
    }

    return (
      <motion.div
        style={{
          y,
          ...(hasScale && { scale }),
          ...(hasOpacity && { opacity }),
          zIndex,
        }}
        className={cn("will-change-transform", className)}
      >
        {children}
      </motion.div>
    )
  }
)

SmoothParallaxLayer.displayName = "SmoothParallaxLayer"

// Legacy exports for backwards compatibility
export type SmoothParallaxScrollProps = {
  children: ReactNode
  className?: string
  speed?: number
  disableOnMobile?: boolean
}

/**
 * @deprecated Use SmoothParallaxContainer and SmoothParallaxLayer instead.
 */
export const SmoothParallaxScroll = memo<SmoothParallaxScrollProps>(
  ({ children, className }) => {
    return (
      <SmoothParallaxContainer className={className} height="100%">
        {children}
      </SmoothParallaxContainer>
    )
  }
)

SmoothParallaxScroll.displayName = "SmoothParallaxScroll"

export type ParallaxElementProps = {
  children: ReactNode
  className?: string
  speed?: number
  startPosition?: number
}

/**
 * @deprecated Use SmoothParallaxLayer instead.
 */
export const ParallaxElement = memo<ParallaxElementProps>(
  ({ children, className, speed = 0.5 }) => {
    return (
      <SmoothParallaxLayer yRange={[speed * -400, 0]} className={className}>
        {children}
      </SmoothParallaxLayer>
    )
  }
)

ParallaxElement.displayName = "ParallaxElement"

export default SmoothParallaxContainer
