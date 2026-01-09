"use client"

import { forwardRef } from "react"

import { cn } from "@/lib/utils"

import { CanvasBackground } from "./backgrounds"
import { DeviceFrame } from "./device-frames"
import type { AspectRatioKey, CanvasImage, CanvasState, LayoutMode } from "./types"
import { ASPECT_RATIOS } from "./types"

interface CanvasPreviewProps {
  state: CanvasState
  className?: string
  scale?: number
}

// Calculate dimensions to fit container while maintaining aspect ratio
function getCanvasDimensions(aspectRatio: AspectRatioKey, containerWidth: number) {
  const ratio = ASPECT_RATIOS[aspectRatio]
  const aspect = ratio.width / ratio.height

  // For preview, use container width and calculate height
  const width = containerWidth
  const height = width / aspect

  return { width, height }
}

// Get layout grid styles based on layout mode and image count
function getLayoutStyles(layoutMode: LayoutMode, imageCount: number) {
  switch (layoutMode) {
    case "single":
      return "flex items-center justify-center"
    case "two-up":
      return "grid grid-cols-2 gap-4 items-center justify-items-center"
    case "three-up":
      return "grid grid-cols-3 gap-4 items-center justify-items-center"
    case "grid":
      if (imageCount <= 2) return "grid grid-cols-2 gap-4 items-center justify-items-center"
      if (imageCount <= 4) return "grid grid-cols-2 gap-4 items-center justify-items-center"
      return "grid grid-cols-3 gap-4 items-center justify-items-center"
    default:
      return "flex items-center justify-center"
  }
}

// Get device size based on layout
function getDeviceSize(layoutMode: LayoutMode, device: string) {
  const sizeMap = {
    single: { iphone: "h-[70%]", macbook: "h-[60%]", browser: "h-[55%]", ipad: "h-[65%]", none: "h-[70%]" },
    "two-up": { iphone: "h-[60%]", macbook: "h-[50%]", browser: "h-[55%]", ipad: "h-[50%]", none: "h-[55%]" },
    "three-up": { iphone: "h-[50%]", macbook: "h-[40%]", browser: "h-[45%]", ipad: "h-[40%]", none: "h-[45%]" },
    grid: { iphone: "h-[45%]", macbook: "h-[35%]", browser: "h-[40%]", ipad: "h-[35%]", none: "h-[40%]" },
  }

  return sizeMap[layoutMode]?.[device as keyof typeof sizeMap.single] || "h-[50%]"
}

// Individual image in canvas
function CanvasImageItem({
  image,
  layoutMode,
}: {
  image: CanvasImage
  layoutMode: LayoutMode
}) {
  const sizeClass = getDeviceSize(layoutMode, image.device)

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        image.tilt === "angled" && "transform perspective-[1000px] rotate-y-[-5deg] rotate-x-[5deg]"
      )}
      style={{ transform: `scale(${image.scale / 100})` }}
    >
      <DeviceFrame
        device={image.device}
        color={image.deviceColor}
        shadowIntensity={image.shadowIntensity}
        className={sizeClass}
      >
        <img
          src={image.src}
          alt={image.name}
          className="size-full object-cover"
        />
      </DeviceFrame>
    </div>
  )
}

export const CanvasPreview = forwardRef<HTMLDivElement, CanvasPreviewProps>(
  function CanvasPreview({ state, className, scale = 1 }, ref) {
    const { aspectRatio, layoutMode, images, background } = state

    // For container aspect ratio
    const ratio = ASPECT_RATIOS[aspectRatio]
    const paddingBottom = `${(ratio.height / ratio.width) * 100}%`

    return (
      <div className={cn("relative w-full", className)}>
        {/* Aspect ratio container */}
        <div className="relative" style={{ paddingBottom }}>
          {/* Canvas content */}
          <div
            ref={ref}
            className="absolute inset-0 overflow-hidden rounded-2xl"
            style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
          >
            {/* Background */}
            <CanvasBackground
              style={background.style}
              primaryColor={background.primaryColor}
              secondaryColor={background.secondaryColor}
              blur={background.blur}
              noise={background.noise}
              patternDensity={background.patternDensity}
            />

            {/* Images */}
            {images.length > 0 && (
              <div className={cn("absolute inset-0 p-8", getLayoutStyles(layoutMode, images.length))}>
                {images.map((image) => (
                  <CanvasImageItem
                    key={image.id}
                    image={image}
                    layoutMode={layoutMode}
                  />
                ))}
              </div>
            )}

            {/* Empty state */}
            {images.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-xl bg-white/20 p-6 text-center backdrop-blur-sm">
                  <p className="text-sm font-medium text-white drop-shadow">
                    Add images to get started
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
)
