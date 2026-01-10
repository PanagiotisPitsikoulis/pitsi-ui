"use client"

import { useState } from "react"
import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface GalleryBlockProps {
  content?: {
    title?: string
    description?: string
    images?: Array<{ src: string; alt: string }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const gallery5Defaults = {
  title: "Image Gallery",
  description: "Click any image to view it in full screen.",
  images: [
    { src: "/elements/landscape/plants/1.webp", alt: "Image 1" },
    { src: "/elements/landscape/plants/2.webp", alt: "Image 2" },
    { src: "/elements/landscape/plants/3.webp", alt: "Image 3" },
    { src: "/elements/landscape/plants/4.webp", alt: "Image 4" },
    { src: "/elements/landscape/plants/5.webp", alt: "Image 5" },
    { src: "/elements/landscape/plants/1.webp", alt: "Image 6" },
    { src: "/elements/landscape/plants/2.webp", alt: "Image 7" },
    { src: "/elements/landscape/plants/3.webp", alt: "Image 8" },
    { src: "/elements/landscape/plants/3.webp", alt: "Image 9" },
  ],
}

export function Gallery5({ content = {}, classNames = {} }: GalleryBlockProps) {
  const {
    title = gallery5Defaults.title,
    description = gallery5Defaults.description,
    images = gallery5Defaults.images,
  } = content

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const goToPrevious = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : null
    )
  const goToNext = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev === images.length - 1 ? 0 : prev + 1) : null
    )

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

        {/* Uniform Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((image, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group focus:ring-primary relative aspect-square overflow-hidden rounded-lg focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
              onClick={closeLightbox}
            >
              <DynamicIcon name="X" className="h-6 w-6" />
            </Button>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 text-white hover:bg-white/10"
              onClick={goToPrevious}
            >
              <DynamicIcon name="ChevronLeft" className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 text-white hover:bg-white/10"
              onClick={goToNext}
            >
              <DynamicIcon name="ChevronRight" className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div className="relative max-h-[85vh] max-w-[85vw]">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
