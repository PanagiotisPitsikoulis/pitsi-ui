"use client"

import { useRef, useState } from "react"
import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface GalleryBlockProps {
  content?: {
    title?: string
    images?: Array<{ src: string; alt: string; caption?: string }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string }
  }
}

const gallery3Defaults = {
  title: "Photo Gallery",
  images: [
    {
      src: "/elements/landscape/plants/1.webp",
      alt: "Image 1",
      caption: "Beautiful landscape",
    },
    {
      src: "/elements/landscape/plants/2.webp",
      alt: "Image 2",
      caption: "Urban architecture",
    },
    {
      src: "/elements/landscape/plants/3.webp",
      alt: "Image 3",
      caption: "Nature close-up",
    },
    {
      src: "/elements/landscape/plants/4.webp",
      alt: "Image 4",
      caption: "Sunset view",
    },
    {
      src: "/elements/landscape/plants/5.webp",
      alt: "Image 5",
      caption: "Mountain range",
    },
  ],
}

export function Gallery3({ content = {}, classNames = {} }: GalleryBlockProps) {
  const { title = gallery3Defaults.title, images = gallery3Defaults.images } =
    content

  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2
            className={cn(
              "text-foreground text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="h-10 w-10 rounded-full"
            >
              <DynamicIcon name="ChevronLeft" className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="h-10 w-10 rounded-full"
            >
              <DynamicIcon name="ChevronRight" className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover transition-opacity duration-300"
          />
          {images[currentIndex].caption && (
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-lg font-medium text-white">
                {images[currentIndex].caption}
              </p>
            </div>
          )}
        </div>

        {/* Thumbnail Strip */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex gap-2 overflow-x-auto pb-2"
        >
          {images.map((image, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "relative h-20 w-32 shrink-0 overflow-hidden rounded-lg transition-all",
                currentIndex === i
                  ? "ring-primary ring-2 ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                currentIndex === i ? "bg-primary w-6" : "bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
