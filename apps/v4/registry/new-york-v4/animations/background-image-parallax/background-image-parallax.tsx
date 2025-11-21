"use client"

import type { ReactNode } from "react"
import { memo, useMemo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

export type BackgroundImageParallaxProps = {
  /** Image source URL */
  src: string
  /** Alt text for accessibility */
  alt?: string
  /** Additional CSS classes */
  className?: string
  /** Multiplier for parallax speed. Default: 0.5 */
  speed?: number
  /** Foreground content to overlay on background */
  children?: ReactNode
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Background image with parallax effect - moves slower than foreground.
 * Creates depth by having the background move at a different speed than scroll.
 * Perfect for hero sections and immersive content areas.
 */
export const BackgroundImageParallax = memo<BackgroundImageParallaxProps>(
  ({
    src,
    alt = "",
    className,
    speed = 0.5,
    children,
    scrollBased = true,
    noMobile = false,
  }) => {
    const isMobile = useIsMobile()
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const adjustedSpeed = useMemo(
      () => (isMobile ? speed * 0.6 : speed),
      [isMobile, speed]
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start start", "end start"],
    })

    const y = useTransform(
      scrollYProgress,
      [0, 1],
      ["0%", `${100 * adjustedSpeed}%`]
    )

    if (shouldDisableAnimation) {
      return (
        <div className={cn("relative overflow-hidden", className)}>
          <div className="absolute inset-0 -z-10">
            <img src={src} alt={alt} className="h-full w-full object-cover" />
          </div>
          {children}
        </div>
      )
    }

    return (
      <div ref={ref} className={cn("relative overflow-hidden", className)}>
        <motion.div
          style={{ y }}
          className="absolute inset-0 -z-10 h-[120%] w-full"
        >
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </motion.div>
        {children}
      </div>
    )
  }
)

BackgroundImageParallax.displayName = "BackgroundImageParallax"

export type MultiLayerParallaxProps = {
  /** Array of background layers */
  layers: Array<{
    /** Image source URL */
    src: string
    /** Parallax speed multiplier */
    speed: number
    /** Opacity of the layer (0-1). Default: 1 */
    opacity?: number
    /** Alt text for accessibility */
    alt?: string
  }>
  /** Additional CSS classes */
  className?: string
  /** Foreground content to overlay */
  children?: ReactNode
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Multiple background layers with different parallax speeds.
 * Creates rich depth with multiple moving layers.
 * Each layer moves at its own speed for a sophisticated parallax effect.
 */
export const MultiLayerParallax = memo<MultiLayerParallaxProps>(
  ({ layers, className, children, scrollBased = true, noMobile = false }) => {
    const isMobile = useIsMobile()
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start start", "end start"],
    })

    const adjustedLayers = useMemo(
      () =>
        layers.map((layer) => ({
          ...layer,
          speed: isMobile ? layer.speed * 0.6 : layer.speed,
        })),
      [layers, isMobile]
    )

    if (shouldDisableAnimation) {
      return (
        <div className={cn("relative overflow-hidden", className)}>
          {layers.map((layer, i) => (
            <div key={i} className="absolute inset-0 -z-10">
              <img
                src={layer.src}
                alt={layer.alt || ""}
                className="h-full w-full object-cover"
                style={{ opacity: layer.opacity || 1 }}
              />
            </div>
          ))}
          {children}
        </div>
      )
    }

    return (
      <div ref={ref} className={cn("relative overflow-hidden", className)}>
        {adjustedLayers.map((layer, i) => (
          <ParallaxLayer
            key={i}
            src={layer.src}
            alt={layer.alt || ""}
            opacity={layer.opacity || 1}
            speed={layer.speed}
            scrollYProgress={scrollYProgress}
          />
        ))}
        {children}
      </div>
    )
  }
)

MultiLayerParallax.displayName = "MultiLayerParallax"

// Helper component for individual parallax layers
type ParallaxLayerProps = {
  src: string
  alt: string
  opacity: number
  speed: number
  scrollYProgress: any
}

const ParallaxLayer = memo<ParallaxLayerProps>(
  ({ src, alt, opacity, speed, scrollYProgress }) => {
    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${100 * speed}%`])

    return (
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10 h-[120%] w-full"
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          style={{ opacity }}
        />
      </motion.div>
    )
  }
)

ParallaxLayer.displayName = "ParallaxLayer"

export default BackgroundImageParallax
