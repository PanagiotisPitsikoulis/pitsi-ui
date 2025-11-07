"use client"

import type { ReactNode } from "react"
import { memo, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { useAnimationState } from "@/hooks/use-animation-state"

export type SlideUpProps = {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
  scrollBased?: boolean
  noMobile?: boolean
}

export const SlideUp = memo<SlideUpProps>(
  ({
    children,
    delay = 0.2,
    duration = 0.9,
    distance = 20,
    className,
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
      offset: ["start end", "start start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    const y = useTransform(scrollYProgress, [0, 1], [distance, 0])

    if (shouldDisableAnimation) {
      return <div className={className}>{children}</div>
    }

    if (scrollBased) {
      return (
        <motion.div ref={ref} style={{ opacity, y }} className={className}>
          {children}
        </motion.div>
      )
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: distance }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }
)

SlideUp.displayName = "SlideUp"

export default SlideUp
