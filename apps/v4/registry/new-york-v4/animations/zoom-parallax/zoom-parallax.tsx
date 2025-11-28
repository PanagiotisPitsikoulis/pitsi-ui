"use client"

import type { CSSProperties, ReactNode } from "react"
import { createContext, memo, useContext, useMemo, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

// Context for gallery scroll progress
const ZoomGalleryContext = createContext<MotionValue<number> | null>(null)

export type ZoomGalleryContainerProps = {
  /** Gallery images */
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
 * Container for zoom parallax gallery effect.
 * Provides scroll progress to child ZoomGalleryImage components.
 */
export const ZoomGalleryContainer = memo<ZoomGalleryContainerProps>(
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
          <div className="sticky top-0 h-screen overflow-hidden">
            {children}
          </div>
        </div>
      )
    }

    return (
      <ZoomGalleryContext.Provider value={scrollYProgress}>
        <div ref={ref} className={cn("relative", className)} style={{ height }}>
          <div className="sticky top-0 h-screen overflow-hidden">
            {children}
          </div>
        </div>
      </ZoomGalleryContext.Provider>
    )
  }
)

ZoomGalleryContainer.displayName = "ZoomGalleryContainer"

export type ZoomGalleryImageProps = {
  /** Image source URL */
  src: string
  /** Alt text for accessibility */
  alt?: string
  /** Target scale at end of scroll. Default: 4 */
  targetScale?: number
  /** Position and size styles */
  style?: CSSProperties
  /** Additional CSS classes */
  className?: string
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Individual image in a zoom parallax gallery.
 * Use inside ZoomGalleryContainer.
 */
export const ZoomGalleryImage = memo<ZoomGalleryImageProps>(
  ({
    src,
    alt = "Gallery image",
    targetScale = 4,
    style,
    className,
    scrollBased = true,
    noMobile = false,
  }) => {
    const context = useContext(ZoomGalleryContext)
    const { shouldDisableAnimation } = useAnimationState(scrollBased, noMobile)

    const scale = useTransform(
      context || new MotionValue(0),
      [0, 1],
      [1, targetScale]
    )

    if (shouldDisableAnimation || !context) {
      return (
        <div className="absolute top-0 flex h-full w-full items-center justify-center">
          <div
            className={cn("relative", className)}
            style={style || { width: "25vw", height: "25vh" }}
          >
            <img src={src} alt={alt} className="h-full w-full object-cover" />
          </div>
        </div>
      )
    }

    return (
      <motion.div
        style={{ scale }}
        className="absolute top-0 flex h-full w-full items-center justify-center"
      >
        <div
          className={cn("relative", className)}
          style={style || { width: "25vw", height: "25vh" }}
        >
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </div>
      </motion.div>
    )
  }
)

ZoomGalleryImage.displayName = "ZoomGalleryImage"

// Original simple zoom component
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

export default ZoomGalleryContainer
