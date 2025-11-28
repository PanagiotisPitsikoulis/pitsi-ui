"use client"

import type { ReactNode } from "react"
import { createContext, memo, useContext, useMemo, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

// Context to share scroll progress
const ScrollProgressContext = createContext<{
  scrollYProgress: MotionValue<number>
  totalCards: number
} | null>(null)

export type CardsParallaxContainerProps = {
  /** Number of cards (used for scale calculation) */
  cardCount: number
  /** Container children */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Container for stacking parallax cards.
 * Provides scroll progress context to child ParallaxCard components.
 */
export const CardsParallaxContainer = memo<CardsParallaxContainerProps>(
  ({
    cardCount,
    children,
    className,
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
      <ScrollProgressContext.Provider
        value={{ scrollYProgress, totalCards: cardCount }}
      >
        <div ref={ref} className={cn("relative", className)}>
          {children}
        </div>
      </ScrollProgressContext.Provider>
    )
  }
)

CardsParallaxContainer.displayName = "CardsParallaxContainer"

export type ParallaxCardProps = {
  /** Card index (0-based) */
  index: number
  /** Card content */
  children: ReactNode
  /** Background color */
  backgroundColor?: string
  /** Additional CSS classes */
  className?: string
  /** Vertical offset per card in pixels. Default: 25 */
  cardOffset?: number
  /** Scale step per card. Default: 0.05 */
  scaleStep?: number
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Individual parallax card that scales and stacks on scroll.
 * Use inside CardsParallaxContainer.
 */
export const ParallaxCard = memo<ParallaxCardProps>(
  ({
    index,
    children,
    backgroundColor,
    className,
    cardOffset = 25,
    scaleStep = 0.05,
    scrollBased = true,
    noMobile = false,
  }) => {
    const context = useContext(ScrollProgressContext)
    const { shouldDisableAnimation } = useAnimationState(scrollBased, noMobile)
    const isMobile = useIsMobile()

    const adjustedOffset = isMobile ? cardOffset * 0.6 : cardOffset

    const targetScale = context
      ? 1 - (context.totalCards - index) * scaleStep
      : 1
    const range: [number, number] = [index * 0.25, 1]

    const scale = useTransform(
      context?.scrollYProgress || new MotionValue(0),
      range,
      [1, targetScale]
    )

    if (shouldDisableAnimation || !context) {
      return (
        <div
          className={cn(
            "flex h-[500px] w-[1000px] max-w-[90vw] flex-col rounded-3xl p-8 md:p-12",
            className
          )}
          style={{ backgroundColor }}
        >
          {children}
        </div>
      )
    }

    return (
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <motion.div
          style={{
            backgroundColor,
            scale,
            top: `calc(-5vh + ${index * adjustedOffset}px)`,
          }}
          className={cn(
            "relative flex h-[500px] w-[1000px] max-w-[90vw] origin-top flex-col rounded-3xl p-8 md:p-12",
            className
          )}
        >
          {children}
        </motion.div>
      </div>
    )
  }
)

ParallaxCard.displayName = "ParallaxCard"

export type ParallaxCardImageProps = {
  /** Image source */
  src: string
  /** Alt text */
  alt: string
  /** Additional CSS classes */
  className?: string
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Image with zoom-in parallax effect for use inside ParallaxCard.
 * Zooms from 2x to 1x as it scrolls into view.
 */
export const ParallaxCardImage = memo<ParallaxCardImageProps>(
  ({ src, alt, className, scrollBased = true, noMobile = false }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start end", "start start"],
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

    if (shouldDisableAnimation) {
      return (
        <div
          ref={ref}
          className={cn(
            "relative h-full w-full overflow-hidden rounded-3xl",
            className
          )}
        >
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-full w-full overflow-hidden rounded-3xl",
          className
        )}
      >
        <motion.div className="h-full w-full" style={{ scale: imageScale }}>
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </motion.div>
      </div>
    )
  }
)

ParallaxCardImage.displayName = "ParallaxCardImage"

// Legacy export
export const CardsParallax = CardsParallaxContainer

export default CardsParallaxContainer
