"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface PixelatedImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt?: string
  /** Pixel size in pixels, default 8 */
  pixelSize?: number
}

function PixelatedImage({
  src,
  alt,
  pixelSize = 8,
  className,
  style,
  ...props
}: PixelatedImageProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = src

    img.onload = () => {
      const updateCanvas = () => {
        const rect = container.getBoundingClientRect()
        const width = rect.width
        const height = rect.height

        // Set canvas size to match container
        canvas.width = width
        canvas.height = height

        // Calculate scaled dimensions for pixelation
        const scaledWidth = Math.ceil(width / pixelSize)
        const scaledHeight = Math.ceil(height / pixelSize)

        // Disable image smoothing for crisp pixels
        ctx.imageSmoothingEnabled = false

        // Draw image at small size first
        ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight)

        // Scale back up to create pixelated effect
        ctx.drawImage(
          canvas,
          0,
          0,
          scaledWidth,
          scaledHeight,
          0,
          0,
          width,
          height
        )
      }

      updateCanvas()

      // Update on resize
      const resizeObserver = new ResizeObserver(updateCanvas)
      resizeObserver.observe(container)

      return () => resizeObserver.disconnect()
    }
  }, [src, pixelSize])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={style}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover"
        aria-label={alt}
        role="img"
      />
    </div>
  )
}

export { PixelatedImage }
export type { PixelatedImageProps }
