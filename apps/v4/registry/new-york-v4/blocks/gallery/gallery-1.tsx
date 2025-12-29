"use client"

import Image from "next/image"

import {
  galleryDefaults,
  type GalleryBlockProps,
} from "@/lib/blocks/gallery.types"
import { cn } from "@/lib/utils"

// Block-specific defaults that override the generic defaults
const blockDefaults = {
  badge: "Gallery",
  title: "Green Spaces We've Created",
  description:
    "From cozy apartments to sprawling offices, see how our plants have transformed spaces into thriving green sanctuaries.",
  images: [
    { src: "/placeholders/blocks/service-plants/6.webp", alt: "Gallery 1" },
    { src: "/placeholders/blocks/service-plants/7.webp", alt: "Gallery 2" },
    { src: "/placeholders/blocks/service-plants/8.webp", alt: "Gallery 3" },
    { src: "/placeholders/blocks/service-plants/9.webp", alt: "Gallery 4" },
    { src: "/placeholders/blocks/service-plants/2.webp", alt: "Gallery 5" },
  ],
}

export function Gallery1({ content = {}, classNames = {} }: GalleryBlockProps) {
  // Merge content with block-specific defaults, falling back to generic defaults
  const {
    badge = blockDefaults.badge ?? galleryDefaults.badge,
    title = blockDefaults.title ?? galleryDefaults.title,
    description = blockDefaults.description ?? galleryDefaults.description,
    images = blockDefaults.images ?? galleryDefaults.images,
  } = content

  return (
    <section className={cn("relative overflow-x-clip", classNames.root)}>
      {/* Huge decoration - top left corner, clipping off screen */}
      <Image
        draggable={false}
        src="/placeholders/blocks/service-plants/assets/decoration-small-4.svg"
        alt=""
        width={600}
        height={600}
        className="pointer-events-none absolute -top-64 -left-64 z-20 hidden select-none md:block"
      />
      {/* Huge decoration - bottom right corner, clipping off screen */}
      <Image
        draggable={false}
        src="/placeholders/blocks/service-plants/assets/decoration-small-5.svg"
        alt=""
        width={550}
        height={550}
        className="pointer-events-none absolute -right-64 -bottom-64 z-20 hidden select-none md:block"
      />
      <div className={cn("relative z-10 container px-6", classNames.container)}>
        <div className={cn("mb-16 text-center", classNames.header?.root)}>
          {badge && (
            <p
              className={cn(
                "text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase",
                classNames.header?.badge
              )}
            >
              {badge}
            </p>
          )}
          <h2
            className={cn(
              "font-display text-foreground text-3xl font-bold md:text-5xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "text-muted-foreground mx-auto mt-4 max-w-2xl text-lg",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          )}
        </div>
        <div
          className={cn(
            "grid grid-cols-2 gap-4 md:grid-cols-4",
            classNames.grid
          )}
        >
          {images.map((image, i) => {
            // First image is featured (large, spans 2 cols and 2 rows)
            const isFeatured = i === 0
            return (
              <div
                key={i}
                className={cn(
                  "relative aspect-square overflow-clip rounded-2xl",
                  isFeatured && "col-span-2 row-span-2",
                  classNames.image?.root
                )}
              >
                <Image
                  draggable={false}
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={cn(
                    "pointer-events-none object-cover transition-transform duration-500 select-none hover:scale-105",
                    classNames.image?.img
                  )}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Gallery1 as GalleryServicePlants }
