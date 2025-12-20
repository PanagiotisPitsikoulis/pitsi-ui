"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface GrainImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt?: string
  /** Grain intensity (0-1), default 0.15 */
  intensity?: number
  /** Whether to animate the grain */
  animated?: boolean
}

function GrainImage({
  src,
  alt,
  intensity = 0.15,
  animated = false,
  className,
  style,
  ...props
}: GrainImageProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={style}
      {...props}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label={alt}
      />
      {/* Grain overlay */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none",
          animated && "animate-grain"
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: intensity,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  )
}

export { GrainImage }
export type { GrainImageProps }
