"use client"

import { useRef, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface GalleryBlockProps {
  content?: {
    title?: string
    description?: string
    comparisons?: Array<{
      before: { src: string; alt: string; label?: string }
      after: { src: string; alt: string; label?: string }
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const gallery6Defaults = {
  title: "Before & After",
  description: "Drag the slider to see the transformation.",
  comparisons: [
    {
      before: {
        src: "/placeholders/blocks/service-plants/1.webp",
        alt: "Before renovation",
        label: "Before",
      },
      after: {
        src: "/placeholders/blocks/service-plants/2.webp",
        alt: "After renovation",
        label: "After",
      },
    },
    {
      before: {
        src: "/placeholders/blocks/service-plants/3.webp",
        alt: "Before editing",
        label: "Original",
      },
      after: {
        src: "/placeholders/blocks/service-plants/4.webp",
        alt: "After editing",
        label: "Edited",
      },
    },
  ],
}

function ComparisonSlider({
  before,
  after,
}: {
  before: { src: string; alt: string; label?: string }
  after: { src: string; alt: string; label?: string }
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[4/3] cursor-ew-resize overflow-hidden rounded-xl select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After image (background) */}
      <Image
        src={after.src}
        alt={after.alt}
        fill
        className="object-cover"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
          <svg
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      {before.label && (
        <div className="absolute top-4 left-4 rounded-full bg-black/50 px-3 py-1 text-sm font-medium text-white">
          {before.label}
        </div>
      )}
      {after.label && (
        <div className="absolute top-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm font-medium text-white">
          {after.label}
        </div>
      )}
    </div>
  )
}

export function Gallery6({ content = {}, classNames = {} }: GalleryBlockProps) {
  const {
    title = gallery6Defaults.title,
    description = gallery6Defaults.description,
    comparisons = gallery6Defaults.comparisons,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            className={cn(
              "text-foreground mb-4 text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-muted-foreground mx-auto max-w-2xl",
              classNames.header?.description
            )}
          >
            {description}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {comparisons.map((comparison, i) => (
            <ComparisonSlider
              key={i}
              before={comparison.before}
              after={comparison.after}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
