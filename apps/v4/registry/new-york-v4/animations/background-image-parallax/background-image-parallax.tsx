"use client"

import type { ReactNode } from "react"
import { memo, useMemo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

export type ParallaxImageProps = {
  /** Image source URL */
  src: string
  /** Alt text for accessibility */
  alt?: string
  /** Additional CSS classes for the container */
  className?: string
  /** Additional CSS classes for the image container */
  imageClassName?: string
  /** Parallax range [start, end] in any CSS unit. Default: ["0%", "50%"] */
  range?: [string, string]
  /** Scroll offset configuration. Default: ["start start", "end start"] */
  offset?: [string, string]
  /** Foreground content to overlay on background */
  children?: ReactNode
  /** Use clip-path for section style. Default: false */
  clipPath?: boolean
  /** Enable scroll-based animation. Default: true */
  scrollBased?: boolean
  /** Disable animation on mobile. Default: false */
  noMobile?: boolean
  /** Enable zoom effect on hover. Default: false */
  zoom?: boolean
}

/**
 * Image with parallax scrolling effect.
 * The image moves at a different speed than the scroll creating depth.
 */
export const ParallaxImage = memo<ParallaxImageProps>(
  ({
    src,
    alt = "",
    className,
    imageClassName,
    range = ["0%", "50%"],
    offset = ["start start", "end start"],
    children,
    clipPath = false,
    scrollBased = true,
    noMobile = false,
    zoom = false,
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

    const y = useTransform(scrollYProgress, [0, 1], range)

    if (shouldDisableAnimation) {
      return (
        <div
          className={cn("relative overflow-hidden", zoom && "group", className)}
          style={
            clipPath
              ? { clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }
              : undefined
          }
        >
          <div
            className={cn(
              "relative h-full w-full",
              zoom &&
                "transition-transform duration-500 ease-out group-hover:scale-110",
              imageClassName
            )}
          >
            <img src={src} alt={alt} className="h-full w-full object-cover" />
          </div>
          {children}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", zoom && "group", className)}
        style={
          clipPath
            ? { clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }
            : undefined
        }
      >
        <motion.div
          style={{ y }}
          className={cn(
            "relative h-full w-full",
            zoom &&
              "transition-transform duration-500 ease-out group-hover:scale-110",
            imageClassName
          )}
        >
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </motion.div>
        {children}
      </div>
    )
  }
)

ParallaxImage.displayName = "ParallaxImage"

// Legacy export for backwards compatibility
export const BackgroundImageParallax = ParallaxImage
export type BackgroundImageParallaxProps = ParallaxImageProps

export default ParallaxImage
