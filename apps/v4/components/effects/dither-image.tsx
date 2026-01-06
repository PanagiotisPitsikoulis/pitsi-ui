"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface DitherImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt?: string
  /** Dither pattern size in pixels, default 2 */
  patternSize?: number
  /** Contrast adjustment (0-2), default 1.2 */
  contrast?: number
  /** Whether to preserve colors or convert to grayscale, default true */
  preserveColors?: boolean
}

function DitherImage({
  src,
  alt,
  patternSize = 2,
  contrast = 1.2,
  preserveColors = true,
  className,
  style,
  ...props
}: DitherImageProps) {
  const filterId = React.useId()

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={style}
      {...props}
    >
      {/* SVG Filter Definition */}
      <svg className="absolute" width="0" height="0" aria-hidden="true">
        <defs>
          <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
            {/* Increase contrast */}
            <feComponentTransfer>
              <feFuncR
                type="linear"
                slope={contrast}
                intercept={-(contrast - 1) / 2}
              />
              <feFuncG
                type="linear"
                slope={contrast}
                intercept={-(contrast - 1) / 2}
              />
              <feFuncB
                type="linear"
                slope={contrast}
                intercept={-(contrast - 1) / 2}
              />
            </feComponentTransfer>
            {/* Create halftone/dither pattern */}
            <feConvolveMatrix
              order="3"
              kernelMatrix="0 -1 0 -1 5 -1 0 -1 0"
              preserveAlpha="true"
            />
            {/* Add noise for dither effect */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency={0.5 / patternSize}
              numOctaves="1"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={patternSize}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      {/* Background image with dither filter */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${src})`,
          filter: `url(#${filterId})`,
          ...(preserveColors
            ? {}
            : { filter: `url(#${filterId}) grayscale(1)` }),
        }}
        role="img"
        aria-label={alt}
      />
      {/* Optional: Pixel grid overlay for enhanced dither look */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(to right, transparent ${patternSize - 0.5}px, rgba(0,0,0,0.1) ${patternSize}px),
            linear-gradient(to bottom, transparent ${patternSize - 0.5}px, rgba(0,0,0,0.1) ${patternSize}px)
          `,
          backgroundSize: `${patternSize}px ${patternSize}px`,
        }}
      />
    </div>
  )
}

export { DitherImage }
export type { DitherImageProps }
