"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface GalleryBlockProps {
  content?: {
    title?: string
    description?: string
    images?: Array<{ src: string; alt: string; height?: "short" | "tall" }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const gallery2Defaults = {
  title: "Our Work",
  description: "A collection of our finest projects and creative endeavors.",
  images: [
    {
      src: "/placeholders/blocks/service-plants/1.webp",
      alt: "Project 1",
      height: "tall" as const,
    },
    {
      src: "/placeholders/blocks/service-plants/2.webp",
      alt: "Project 2",
      height: "short" as const,
    },
    {
      src: "/placeholders/blocks/service-plants/3.webp",
      alt: "Project 3",
      height: "short" as const,
    },
    {
      src: "/placeholders/blocks/service-plants/4.webp",
      alt: "Project 4",
      height: "tall" as const,
    },
    {
      src: "/placeholders/blocks/service-plants/5.webp",
      alt: "Project 5",
      height: "short" as const,
    },
    {
      src: "/placeholders/blocks/service-plants/1.webp",
      alt: "Project 6",
      height: "tall" as const,
    },
    {
      src: "/placeholders/blocks/service-plants/2.webp",
      alt: "Project 7",
      height: "short" as const,
    },
    {
      src: "/placeholders/blocks/service-plants/3.webp",
      alt: "Project 8",
      height: "short" as const,
    },
  ],
}

export function Gallery2({ content = {}, classNames = {} }: GalleryBlockProps) {
  const {
    title = gallery2Defaults.title,
    description = gallery2Defaults.description,
    images = gallery2Defaults.images,
  } = content

  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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

        {/* Masonry Grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {images.map((image, i) => (
            <div
              key={i}
              className="group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(i)}
            >
              <div
                className={cn(
                  "relative w-full",
                  image.height === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto rounded-lg object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
