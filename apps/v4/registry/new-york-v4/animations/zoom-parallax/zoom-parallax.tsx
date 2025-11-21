"use client"

import type { ReactNode } from "react"
import { memo, useMemo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

export type ZoomParallaxProps = {
  /** Content to apply zoom effect to */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Scale range from start to end. Default: [0.8, 1] */
  scaleRange?: [number, number]
  /** When to start/end animation relative to viewport. Default: ["start end", "end start"] */
  offset?: [string, string]
  /** Whether to animate opacity alongside scale. Default: true */
  animateOpacity?: boolean
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Element that zooms in/out as you scroll past it.
 * Creates a dynamic focal point effect with scale and optional opacity animation.
 */
export const ZoomParallax = memo<ZoomParallaxProps>(
  ({
    children,
    className,
    scaleRange = [0.8, 1],
    offset = ["start end", "end start"],
    animateOpacity = true,
    scrollBased = true,
    noMobile = false,
  }) => {
    const isMobile = useIsMobile()
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const adjustedScaleRange = useMemo(
      () =>
        isMobile
          ? [
              scaleRange[0] + (scaleRange[1] - scaleRange[0]) * 0.5,
              scaleRange[1],
            ]
          : scaleRange,
      [isMobile, scaleRange]
    ) as [number, number]

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: offset as any,
    })

    const scale = useTransform(scrollYProgress, [0, 1], adjustedScaleRange)
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5])

    const motionStyle = useMemo(
      () => ({
        scale,
        ...(animateOpacity && { opacity }),
      }),
      [scale, opacity, animateOpacity]
    )

    if (shouldDisableAnimation) {
      return <div className={className}>{children}</div>
    }

    return (
      <motion.div
        ref={ref}
        style={motionStyle}
        className={cn("will-change-transform", className)}
      >
        {children}
      </motion.div>
    )
  }
)

ZoomParallax.displayName = "ZoomParallax"

export type ZoomParallaxImageProps = {
  /** Image source URL */
  src: string
  /** Alt text for accessibility */
  alt: string
  /** Additional CSS classes */
  className?: string
  /** Scale range for the zoom effect. Default: [1, 1.2] */
  scaleRange?: [number, number]
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Image component with zoom parallax effect.
 * Optimized for image galleries and hero sections.
 */
export const ZoomParallaxImage = memo<ZoomParallaxImageProps>(
  ({ src, alt, className, scaleRange = [1, 1.2], noMobile = false }) => {
    return (
      <ZoomParallax
        scaleRange={scaleRange}
        noMobile={noMobile}
        animateOpacity={false}
      >
        <div className={cn("overflow-hidden rounded-2xl", className)}>
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </div>
      </ZoomParallax>
    )
  }
)

ZoomParallaxImage.displayName = "ZoomParallaxImage"

export default ZoomParallax
