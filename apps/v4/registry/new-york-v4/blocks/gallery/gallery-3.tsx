"use client"

import { cn } from "@/lib/utils"
import { Carousel_001 } from "@/registry/new-york-v4/animations/perspective-carousel/perspective-carousel"

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
      alt: "Monstera Deliciosa",
      caption: "Beautiful landscape",
    },
    {
      src: "/elements/landscape/plants/2.webp",
      alt: "Fiddle Leaf Fig",
      caption: "Urban architecture",
    },
    {
      src: "/elements/landscape/plants/3.webp",
      alt: "Snake Plant",
      caption: "Nature close-up",
    },
    {
      src: "/elements/landscape/plants/4.webp",
      alt: "Peace Lily",
      caption: "Sunset view",
    },
    {
      src: "/elements/landscape/plants/5.webp",
      alt: "Pothos",
      caption: "Mountain range",
    },
    {
      src: "/elements/landscape/plants/6.webp",
      alt: "Rubber Plant",
      caption: "Tropical vibes",
    },
  ],
}

export function Gallery3({ content = {}, classNames = {} }: GalleryBlockProps) {
  const { title = gallery3Defaults.title, images = gallery3Defaults.images } =
    content

  // Transform images to the format Carousel_001 expects
  const carouselImages = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }))

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <div className="mb-12 flex items-center justify-center">
          <h2
            className={cn(
              "text-foreground text-center text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
        </div>

        {/* PerspectiveCarousel */}
        <div className="relative flex w-full items-center justify-center">
          <Carousel_001
            images={carouselImages}
            showPagination
            loop
            autoplay={false}
            spaceBetween={30}
            className="w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  )
}
