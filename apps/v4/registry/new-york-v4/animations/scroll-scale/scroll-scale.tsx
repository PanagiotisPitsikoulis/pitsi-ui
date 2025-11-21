"use client"

import type { ReactNode } from "react"
import { memo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { useAnimationState } from "@/hooks/use-animation-state"

export type ScrollScaleProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  startScale?: number
  endScale?: number
  scrollBased?: boolean
  noMobile?: boolean
}

export const ScrollScale = memo<ScrollScaleProps>(
  ({
    children,
    className,
    delay = 0,
    duration = 0.6,
    startScale = 0.8,
    endScale = 1,
    scrollBased = true,
    noMobile = false,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const { shouldDisableAnimation, shouldUseScroll } = useAnimationState(
      scrollBased,
      noMobile
    )

    const { scrollYProgress } = useScroll({
      target: shouldUseScroll ? ref : undefined,
      offset: ["start end", "start center"],
    })

    const scale = useTransform(scrollYProgress, [0, 1], [startScale, endScale])
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    if (shouldDisableAnimation) {
      return <div className={className}>{children}</div>
    }

    if (scrollBased) {
      return (
        <motion.div ref={ref} style={{ scale, opacity }} className={className}>
          {children}
        </motion.div>
      )
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: startScale }}
        whileInView={{ opacity: 1, scale: endScale }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }
)

ScrollScale.displayName = "ScrollScale"

export default ScrollScale
