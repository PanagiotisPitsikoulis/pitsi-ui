"use client"

import { useRef, useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  HoverExpandGallery,
  ScrollExpand,
} from "@/registry/new-york-v4/animations/scroll-expand/scroll-expand"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

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
        src: "/elements/landscape/plants/1.webp",
        alt: "Before renovation",
        label: "Before",
      },
      after: {
        src: "/elements/landscape/plants/2.webp",
        alt: "After renovation",
        label: "After",
      },
    },
    {
      before: {
        src: "/elements/landscape/plants/3.webp",
        alt: "Before editing",
        label: "Original",
      },
      after: {
        src: "/elements/landscape/plants/4.webp",
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
        <div className="bg-primary absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg">
          <svg
            className="text-primary-foreground h-5 w-5"
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

  // Transform comparisons to HoverExpandGallery format for the preview section
  const galleryImages = comparisons.flatMap((comp) => [
    { src: comp.before.src, alt: comp.before.alt, label: comp.before.label },
    { src: comp.after.src, alt: comp.after.alt, label: comp.after.label },
  ])

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <BlockHeader
          title={title}
          description={description}
          spacing="compact"
          classNames={classNames.header}
        />

        {/* Hover Expand Gallery Preview */}
        <div className="mb-12 flex w-full items-center justify-center">
          <HoverExpandGallery
            images={galleryImages}
            direction="horizontal"
            collapsedSize={4}
            expandedSize={20}
            defaultActive={0}
          />
        </div>

        {/* Comparison Sliders with ScrollExpand Animation */}
        <div className="grid gap-8 md:grid-cols-2">
          {comparisons.map((comparison, i) => (
            <ScrollExpand
              key={i}
              marginX="1.5rem"
              borderRadius="1.5rem"
              scrollBased={true}
            >
              <ComparisonSlider
                before={comparison.before}
                after={comparison.after}
              />
            </ScrollExpand>
          ))}
        </div>
      </div>
    </section>
  )
}
