import React from "react"

import { cn } from "@/lib/utils"

export interface KnockoutTextProps {
  children: React.ReactNode
  className?: string
  /** Horizontal padding for the overlay (default: 48 = -inset-x-48) */
  padX?: number
  /** Vertical padding for the overlay (default: 24 = -inset-y-24) */
  padY?: number
  /** Blur amount - sm, md, lg, xl, 2xl, 3xl (default: 3xl) */
  blur?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  /** Whether to apply mix-blend-difference to children (default: true) */
  blend?: boolean
  /** Intensity - number of stacked layers for stronger effect (default: 1) */
  intensity?: number
}

const blurClasses = {
  sm: "blur-sm",
  md: "blur-md",
  lg: "blur-lg",
  xl: "blur-xl",
  "2xl": "blur-2xl",
  "3xl": "blur-3xl",
}

/**
 * KnockoutText - Makes text always readable over any background
 *
 * Wraps text content with a blurred ellipse background overlay.
 * Children with mix-blend-difference will invert colors based on
 * what's behind them, ensuring readability.
 *
 * @example
 * ```tsx
 * <KnockoutText>
 *   <h1 className="text-white mix-blend-difference">
 *     Always Readable
 *   </h1>
 * </KnockoutText>
 * ```
 */
export function KnockoutText({
  children,
  className,
  padX = 48,
  padY = 24,
  blur = "3xl",
  blend = true,
  intensity = 1,
}: KnockoutTextProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Faded background overlay - ellipse with blur for soft edges */}
      {Array.from({ length: intensity }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "bg-background pointer-events-none absolute rounded-[100%]",
            blurClasses[blur]
          )}
          style={{
            inset: `-${padY * 4}px -${padX * 4}px`,
          }}
        />
      ))}
      {/* Content wrapper */}
      <div className={cn("relative", blend && "[&>*]:mix-blend-difference")}>
        {children}
      </div>
    </div>
  )
}
