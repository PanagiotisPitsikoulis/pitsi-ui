"use client"

import type { ReactNode } from "react"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

export type FloatingImageGalleryProps = {
  /** Array of image layers. Each layer moves at different speed */
  layers: Array<{
    images: Array<{
      src: string
      alt?: string
      width?: number
      style?: React.CSSProperties
    }>
    speed?: number
    brightness?: number
  }>
  /** Content to display in the center */
  children?: ReactNode
  /** Speed multiplier for mouse movement. Default: 0.01 */
  speed?: number
  /** Easing factor for animation smoothness. Default: 0.08 */
  easing?: number
  /** Additional CSS classes */
  className?: string
}

/**
 * A floating image gallery where images move at different speeds based on mouse movement.
 * Creates a parallax-like depth effect with multiple layers.
 */
export function FloatingImageGallery({
  layers,
  children,
  speed = 0.01,
  easing = 0.08,
  className,
}: FloatingImageGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const layerRefs = useRef<(HTMLDivElement | null)[]>([])
  const requestAnimationFrameId = useRef<number | null>(null)
  const xForce = useRef(0)
  const yForce = useRef(0)

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount

  const animate = useCallback(() => {
    xForce.current = lerp(xForce.current, 0, easing)
    yForce.current = lerp(yForce.current, 0, easing)

    layerRefs.current.forEach((ref, i) => {
      if (ref) {
        const layerSpeed = layers[i]?.speed ?? 1 - i * 0.25
        const x = xForce.current * layerSpeed
        const y = yForce.current * layerSpeed

        ref.style.transform = `translate(${x}px, ${y}px)`
      }
    })

    if (Math.abs(xForce.current) < 0.01) xForce.current = 0
    if (Math.abs(yForce.current) < 0.01) yForce.current = 0

    if (xForce.current !== 0 || yForce.current !== 0) {
      requestAnimationFrameId.current = requestAnimationFrame(animate)
    } else {
      if (requestAnimationFrameId.current) {
        cancelAnimationFrame(requestAnimationFrameId.current)
      }
      requestAnimationFrameId.current = null
    }
  }, [easing, layers])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const { movementX, movementY } = e
      xForce.current += movementX * speed
      yForce.current += movementY * speed

      if (requestAnimationFrameId.current === null) {
        requestAnimationFrameId.current = requestAnimationFrame(animate)
      }
    },
    [speed, animate]
  )

  useEffect(() => {
    return () => {
      if (requestAnimationFrameId.current) {
        cancelAnimationFrame(requestAnimationFrameId.current)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative h-screen w-screen overflow-hidden bg-black",
        className
      )}
    >
      {layers.map((layer, layerIndex) => (
        <div
          key={layerIndex}
          ref={(el) => {
            layerRefs.current[layerIndex] = el
          }}
          className="absolute h-full w-full"
          style={{
            filter: `brightness(${layer.brightness ?? 1 - layerIndex * 0.1})`,
          }}
        >
          {layer.images.map((image, imageIndex) => (
            <img
              key={imageIndex}
              src={image.src}
              alt={
                image.alt ?? `Layer ${layerIndex + 1} image ${imageIndex + 1}`
              }
              width={image.width ?? 300}
              className="absolute object-cover"
              style={image.style}
            />
          ))}
        </div>
      ))}

      {children && (
        <div className="absolute top-[45%] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
          {children}
        </div>
      )}
    </div>
  )
}

export default FloatingImageGallery
