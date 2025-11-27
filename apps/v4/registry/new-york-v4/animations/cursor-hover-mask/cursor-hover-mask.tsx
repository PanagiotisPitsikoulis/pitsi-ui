// @ts-nocheck
"use client"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null
    y: number | null
  }>({ x: null, y: null })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return mousePosition
}

export type CursorHoverMaskProps = {
  /** Content shown in the mask (revealed content) */
  maskContent: ReactNode
  /** Content shown in the background (base content) */
  children: ReactNode
  /** Size of the mask when not hovering. Default: 40 */
  size?: number
  /** Size of the mask when hovering. Default: 400 */
  hoverSize?: number
  /** Background color of the mask area. Default: "#ec4e39" */
  maskBackground?: string
  /** Additional CSS classes for the container */
  className?: string
  /** Additional CSS classes for the mask layer */
  maskClassName?: string
  /** Additional CSS classes for the body layer */
  bodyClassName?: string
}

/**
 * A text mask effect that follows the cursor and reveals alternate content.
 * The mask expands on hover to reveal hidden content underneath.
 */
export function CursorHoverMask({
  maskContent,
  children,
  size = 40,
  hoverSize = 400,
  maskBackground = "#ec4e39",
  className,
  maskClassName,
  bodyClassName,
}: CursorHoverMaskProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()
  const currentSize = isHovered ? hoverSize : size

  return (
    <div className={cn("relative h-screen", className)}>
      <motion.div
        className={cn(
          "absolute flex h-full w-full cursor-default items-center justify-center text-black",
          maskClassName
        )}
        style={{
          background: maskBackground,
          maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='black'/%3E%3C/svg%3E")`,
          maskRepeat: "no-repeat",
        }}
        animate={{
          WebkitMaskPosition: `${(x ?? 0) - currentSize / 2}px ${(y ?? 0) - currentSize / 2}px`,
          WebkitMaskSize: `${currentSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full max-w-[1000px] p-10"
        >
          {maskContent}
        </div>
      </motion.div>

      <div
        className={cn(
          "flex h-full w-full cursor-default items-center justify-center",
          bodyClassName
        )}
      >
        <div className="w-full max-w-[1000px] p-10">{children}</div>
      </div>
    </div>
  )
}

export default CursorHoverMask
