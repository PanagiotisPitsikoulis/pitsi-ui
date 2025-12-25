"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"

export type Position = {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export interface ItemDecorationProps {
  /** Image source path */
  src: string
  /** Alt text for accessibility */
  alt?: string
  /** Width of the image (default: 500) */
  width?: number
  /** Height of the image (default: 500) */
  height?: number
  /** CSS position values (e.g., { bottom: "-8rem", right: "-10rem" }) */
  position?: Position
  /** Rotation in degrees (positive = clockwise) */
  rotation?: number
  /** Z-index (default: 20) */
  zIndex?: number
  /** Show on mobile (default: false - hidden on mobile, visible lg+) */
  showOnMobile?: boolean
  /** Additional className for the wrapper */
  className?: string
  /** Additional className for the image */
  imageClassName?: string
}

/**
 * ItemDecoration - Decorative image element for blocks
 *
 * Absolute positioned image that can overflow its container.
 * Hidden on mobile by default, visible on lg+ screens.
 *
 * @example
 * ```tsx
 * <ItemDecoration
 *   src="/placeholders/blocks/service-plants/assets/item-3.webp"
 *   position={{ bottom: "-8rem", right: "-10rem" }}
 *   rotation={12}
 * />
 * ```
 */
export function ItemDecoration({
  src,
  alt = "Decorative image",
  width = 500,
  height = 500,
  position = {},
  rotation = 0,
  zIndex = 20,
  showOnMobile = false,
  className,
  imageClassName,
}: ItemDecorationProps) {
  const positionStyle: React.CSSProperties = {
    ...position,
    zIndex,
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute",
        !showOnMobile && "hidden lg:block",
        className
      )}
      style={positionStyle}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "object-contain",
          rotation !== 0 && `rotate-[${rotation}deg]`,
          imageClassName
        )}
        style={rotation !== 0 ? { transform: `rotate(${rotation}deg)` } : undefined}
      />
    </div>
  )
}
