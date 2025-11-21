"use client"

import type { ReactNode } from "react"
import { memo, useMemo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { useAnimationState } from "@/hooks/use-animation-state"
import { useIsMobile } from "@/hooks/use-mobile"

export type ScrollExpandProps = {
  children: ReactNode
  className?: string
  marginX?: string
  borderRadius?: string
  scrollBased?: boolean
  noMobile?: boolean
}

export const ScrollExpand = memo<ScrollExpandProps>(
  ({
    children,
    className,
    marginX = "3rem",
    borderRadius = "3rem",
    scrollBased = true,
    noMobile = false,
  }) => {
    const isMobile = useIsMobile()
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const marginXAdjusted = useMemo(
      () => (isMobile ? "0.5rem" : marginX),
      [isMobile, marginX]
    )
    const borderRadiusAdjusted = useMemo(
      () => (isMobile ? "1rem" : borderRadius),
      [isMobile, borderRadius]
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start 80%", "start 30%"],
    })

    const marginLeft = useTransform(
      scrollYProgress,
      [0, 1],
      [marginXAdjusted, "0rem"]
    )
    const marginRight = useTransform(
      scrollYProgress,
      [0, 1],
      [marginXAdjusted, "0rem"]
    )
    const borderRadiusValue = useTransform(
      scrollYProgress,
      [0, 1],
      [borderRadiusAdjusted, "0rem"]
    )

    const style = useMemo(
      () => ({
        overflow: "hidden" as const,
      }),
      []
    )

    const triggerStyle = useMemo(
      () => ({
        overflow: "hidden" as const,
        borderRadius,
      }),
      [borderRadius]
    )

    if (shouldDisableAnimation) {
      return <div className={className}>{children}</div>
    }

    if (scrollBased) {
      return (
        <motion.div
          ref={ref}
          style={{
            marginLeft,
            marginRight,
            borderRadius: borderRadiusValue,
            ...style,
          }}
          className={className}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className={className}
        style={triggerStyle}
      >
        {children}
      </motion.div>
    )
  }
)

ScrollExpand.displayName = "ScrollExpand"

export default ScrollExpand
