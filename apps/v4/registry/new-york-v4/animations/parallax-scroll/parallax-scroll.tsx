"use client"

import type { ReactNode } from "react"
import {
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

// Context for gallery scroll progress
const GalleryContext = createContext<{
  scrollYProgress: MotionValue<number>
  height: number
} | null>(null)

export type ParallaxGalleryProps = {
  /** Gallery columns */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Gallery height. Default: "175vh" */
  height?: string
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Container for multi-column parallax gallery.
 * Provides scroll progress to child ParallaxColumn components.
 */
export const ParallaxGallery = memo<ParallaxGalleryProps>(
  ({
    children,
    className,
    height = "175vh",
    scrollBased = true,
    noMobile = false,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [dimension, setDimension] = useState({ width: 0, height: 0 })
    const { shouldUseScroll } = useAnimationState(scrollBased, noMobile)

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start end", "end start"],
    })

    useEffect(() => {
      const resize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
      }
      window.addEventListener("resize", resize)
      resize()
      return () => window.removeEventListener("resize", resize)
    }, [])

    return (
      <GalleryContext.Provider
        value={{ scrollYProgress, height: dimension.height }}
      >
        <div
          ref={ref}
          className={cn(
            "relative box-border flex gap-[2vw] overflow-hidden p-[2vw]",
            className
          )}
          style={{ height }}
        >
          {children}
        </div>
      </GalleryContext.Provider>
    )
  }
)

ParallaxGallery.displayName = "ParallaxGallery"

export type ParallaxColumnProps = {
  /** Column images */
  images: string[]
  /** Speed multiplier for parallax. Default: 1 */
  speed?: number
  /** Initial top offset. Default: "-45%" */
  initialOffset?: string
  /** Additional CSS classes */
  className?: string
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * Individual column in a parallax gallery.
 * Use inside ParallaxGallery.
 */
export const ParallaxColumn = memo<ParallaxColumnProps>(
  ({
    images,
    speed = 1,
    initialOffset = "-45%",
    className,
    scrollBased = true,
    noMobile = false,
  }) => {
    const context = useContext(GalleryContext)
    const { shouldDisableAnimation } = useAnimationState(scrollBased, noMobile)

    const y = useTransform(
      context?.scrollYProgress || new MotionValue(0),
      [0, 1],
      [0, (context?.height || 0) * speed]
    )

    if (shouldDisableAnimation || !context) {
      return (
        <div
          className={cn(
            "relative flex w-1/4 min-w-[250px] flex-col gap-[2vw]",
            className
          )}
          style={{ top: initialOffset }}
        >
          {images.map((src, i) => (
            <div key={i} className="relative h-full w-full overflow-hidden">
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="pointer-events-none object-cover"
              />
            </div>
          ))}
        </div>
      )
    }

    return (
      <motion.div
        className={cn(
          "relative flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw]",
          className
        )}
        style={{ y, top: initialOffset }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative h-full w-full overflow-hidden">
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="pointer-events-none object-cover"
            />
          </div>
        ))}
      </motion.div>
    )
  }
)

ParallaxColumn.displayName = "ParallaxColumn"

export type ParallaxScrollProps = {
  /** Content to apply parallax effect to */
  children: ReactNode
  /** Additional CSS classes */
  className?: string
  /** Scroll offset. Default: ["start end", "end start"] */
  offset?: [string, string]
  /** Y movement range. Default: [0, 100] */
  yRange?: [number, number]
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
}

/**
 * General-purpose parallax scroll component.
 */
export const ParallaxScroll = memo<ParallaxScrollProps>(
  ({
    children,
    className,
    offset = ["start end", "end start"],
    yRange = [0, 100],
    scrollBased = true,
    noMobile = false,
  }) => {
    const isMobile = useIsMobile()
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const adjustedRange = useMemo(
      () => (isMobile ? [yRange[0] * 0.5, yRange[1] * 0.5] : yRange),
      [isMobile, yRange]
    ) as [number, number]

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: offset as any,
    })

    const y = useTransform(scrollYProgress, [0, 1], adjustedRange)

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

ParallaxScroll.displayName = "ParallaxScroll"

export default ParallaxGallery
