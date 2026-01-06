"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

interface AnimatedIconProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  floatDelay?: number
  floatDuration?: number
  floatDistance?: number
  moveStrength?: number
}

export function AnimatedIcon({
  children,
  className,
  style,
  floatDelay = 0,
  floatDuration = 4,
  floatDistance = 8,
  moveStrength = 0.15,
}: AnimatedIconProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  // Mouse position for cursor tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animation for cursor tracking
  const springConfig = { damping: 20, stiffness: 100 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Transform mouse position to rotation
  const rotateX = useTransform(springY, [-100, 100], [8, -8])
  const rotateY = useTransform(springX, [-100, 100], [-8, 8])

  // Transform mouse position to translation (icons move towards cursor)
  const translateX = useTransform(
    springX,
    [-100, 100],
    [-20 * moveStrength, 20 * moveStrength]
  )
  const translateY = useTransform(
    springY,
    [-100, 100],
    [-20 * moveStrength, 20 * moveStrength]
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      // Calculate distance from center, clamped to reasonable range
      const distX = Math.max(-100, Math.min(100, (e.clientX - centerX) / 2))
      const distY = Math.max(-100, Math.min(100, (e.clientY - centerY) / 2))
      mouseX.set(distX)
      mouseY.set(distY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      ref={ref}
      className={cn("cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={{
        ...style,
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale: isPressed ? 0.95 : isHovered ? 1.1 : 1,
      }}
      transition={{
        scale: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      whileHover={{
        filter: "brightness(1.2)",
      }}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.1 },
      }}
    >
      <motion.div
        animate={{
          y: isPressed ? 0 : [0, -floatDistance, 0],
        }}
        transition={{
          y: {
            duration: floatDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: floatDelay,
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
