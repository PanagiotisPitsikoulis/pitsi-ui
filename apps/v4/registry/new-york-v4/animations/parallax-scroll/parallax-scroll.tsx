"use client"

import type { ReactNode } from "react"
import { memo, useMemo, useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

export type ParallaxConfig = {
  /** Vertical movement range. Example: ["0%", "20%"] or [0, 100] */
  y?: [string | number, string | number]
  /** Horizontal movement range. Example: ["-20%", "20%"] or [-100, 100] */
  x?: [string | number, string | number]
  /** Scale transformation range. Example: [0.8, 1.2] */
  scale?: [number, number]
  /** Opacity change range. Example: [0, 1] */
  opacity?: [number, number]
  /** Rotation range in degrees. Example: [-10, 10] */
  rotate?: [number, number]
}

export type ParallaxScrollProps = {
  /** Content to apply parallax effect to */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Scroll offset when to start/end animation. Default: ["start end", "end start"] */
  offset?: [string, string]
  /** Configuration for various transform properties */
  config?: ParallaxConfig
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * General-purpose parallax component with configurable transforms.
 * Can control position, scale, opacity, and rotation independently.
 * Perfect for creating complex scroll-based animations.
 */
export const ParallaxScroll = memo<ParallaxScrollProps>(
  ({
    children,
    className,
    offset = ["start end", "end start"],
    config = { y: ["0%", "20%"] },
    scrollBased = true,
    noMobile = false,
  }) => {
    const isMobile = useIsMobile()
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: offset as any,
    })

    const adjustedConfig = useMemo(() => {
      if (!isMobile) return config

      // Reduce movement on mobile for better performance
      return {
        ...config,
        y: config.y
          ? [
              typeof config.y[0] === "string" ? config.y[0] : config.y[0] * 0.5,
              typeof config.y[1] === "string" ? config.y[1] : config.y[1] * 0.5,
            ]
          : undefined,
        x: config.x
          ? [
              typeof config.x[0] === "string" ? config.x[0] : config.x[0] * 0.5,
              typeof config.x[1] === "string" ? config.x[1] : config.x[1] * 0.5,
            ]
          : undefined,
      } as ParallaxConfig
    }, [config, isMobile])

    // Create motion values for each transform property
    const y = adjustedConfig.y
      ? useTransform(scrollYProgress, [0, 1], adjustedConfig.y as any)
      : undefined
    const x = adjustedConfig.x
      ? useTransform(scrollYProgress, [0, 1], adjustedConfig.x as any)
      : undefined
    const scale = adjustedConfig.scale
      ? useTransform(scrollYProgress, [0, 1], adjustedConfig.scale)
      : undefined
    const opacity = adjustedConfig.opacity
      ? useTransform(scrollYProgress, [0, 1], adjustedConfig.opacity)
      : undefined
    const rotate = adjustedConfig.rotate
      ? useTransform(scrollYProgress, [0, 1], adjustedConfig.rotate)
      : undefined

    const motionValues: Record<string, MotionValue> = useMemo(() => {
      const values: Record<string, MotionValue> = {}
      if (y) values.y = y
      if (x) values.x = x
      if (scale) values.scale = scale
      if (opacity) values.opacity = opacity
      if (rotate) values.rotate = rotate
      return values
    }, [y, x, scale, opacity, rotate])

    if (shouldDisableAnimation) {
      return <div className={className}>{children}</div>
    }

    return (
      <motion.div
        ref={ref}
        style={motionValues}
        className={cn("will-change-transform", className)}
      >
        {children}
      </motion.div>
    )
  }
)

ParallaxScroll.displayName = "ParallaxScroll"

export type VerticalParallaxProps = {
  /** Content to apply vertical parallax to */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Percentage distance to move. Default: 20 */
  speed?: number
  /** Move opposite to scroll direction. Default: false */
  reverse?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Simplified vertical parallax component.
 * Elements move up or down at different speed than scroll.
 */
export const VerticalParallax = memo<VerticalParallaxProps>(
  ({ children, className, speed = 20, reverse = false, noMobile = false }) => {
    const movement = reverse ? [speed, -speed] : [-speed, speed]

    return (
      <ParallaxScroll
        config={{ y: [`${movement[0]}%`, `${movement[1]}%`] }}
        className={className}
        noMobile={noMobile}
      >
        {children}
      </ParallaxScroll>
    )
  }
)

VerticalParallax.displayName = "VerticalParallax"

export type HorizontalParallaxProps = {
  /** Content to apply horizontal parallax to */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Movement direction. Default: "left" */
  direction?: "left" | "right"
  /** Distance to move in percentage. Default: 20 */
  speed?: number
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Simplified horizontal parallax component.
 * Elements move left or right as you scroll.
 */
export const HorizontalParallax = memo<HorizontalParallaxProps>(
  ({
    children,
    className,
    direction = "left",
    speed = 20,
    noMobile = false,
  }) => {
    const movement = direction === "left" ? [-speed, speed] : [speed, -speed]

    return (
      <ParallaxScroll
        config={{ x: [`${movement[0]}%`, `${movement[1]}%`] }}
        className={className}
        noMobile={noMobile}
      >
        {children}
      </ParallaxScroll>
    )
  }
)

HorizontalParallax.displayName = "HorizontalParallax"

export default ParallaxScroll
