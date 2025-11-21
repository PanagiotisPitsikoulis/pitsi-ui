"use client"

import type { ReactNode } from "react"
import { memo, useMemo, useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

export type CardsParallaxProps = {
  /** Array of card items to display */
  children: ReactNode[]
  /** Additional CSS classes */
  className?: string
  /** Scale reduction per card. Default: 0.05 */
  scaleStep?: number
  /** Opacity reduction per card. Default: 0.5 */
  minOpacity?: number
  /** Vertical offset per card in pixels. Default: 25 */
  cardOffset?: number
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Stacking cards with parallax effect that scale and translate on scroll.
 * Creates a deck of cards that stack on top of each other with smooth transitions.
 */
export const CardsParallax = memo<CardsParallaxProps>(
  ({
    children,
    className,
    scaleStep = 0.05,
    minOpacity = 0.5,
    cardOffset = 25,
    scrollBased = true,
    noMobile = false,
  }) => {
    const isMobile = useIsMobile()
    const containerRef = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const adjustedCardOffset = useMemo(
      () => (isMobile ? cardOffset * 0.6 : cardOffset),
      [isMobile, cardOffset]
    )

    const adjustedScaleStep = useMemo(
      () => (isMobile ? scaleStep * 0.6 : scaleStep),
      [isMobile, scaleStep]
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? containerRef : undefined,
      offset: ["start start", "end end"],
    })

    const childrenArray = Array.isArray(children) ? children : [children]

    if (shouldDisableAnimation) {
      return (
        <div className={cn("space-y-8", className)}>
          {childrenArray.map((child, index) => (
            <div key={index}>{child}</div>
          ))}
        </div>
      )
    }

    return (
      <div ref={containerRef} className={cn("relative", className)}>
        {childrenArray.map((child, index) => {
          const targetScale =
            1 - (childrenArray.length - index) * adjustedScaleStep
          const range = [index * 0.25, 1]

          return (
            <CardItem
              key={index}
              index={index}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
              minOpacity={minOpacity}
              cardOffset={adjustedCardOffset}
            >
              {child}
            </CardItem>
          )
        })}
      </div>
    )
  }
)

CardsParallax.displayName = "CardsParallax"

type CardItemProps = {
  children: ReactNode
  index: number
  progress: MotionValue<number>
  range: number[]
  targetScale: number
  minOpacity: number
  cardOffset: number
}

const CardItem = memo<CardItemProps>(
  ({
    children,
    index,
    progress,
    range,
    targetScale,
    minOpacity,
    cardOffset,
  }) => {
    const scale = useTransform(progress, range, [1, targetScale])
    const opacity = useTransform(progress, range, [1, minOpacity])

    return (
      <motion.div
        style={{
          scale,
          opacity,
          top: `calc(${index * cardOffset}px)`,
        }}
        className="sticky top-0 flex min-h-screen items-center justify-center px-4"
      >
        {children}
      </motion.div>
    )
  }
)

CardItem.displayName = "CardItem"

export default CardsParallax
