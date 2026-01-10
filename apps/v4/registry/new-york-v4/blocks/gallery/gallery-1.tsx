"use client"

import Image from "next/image"

import {
  galleryDefaults,
  type GalleryBlockProps,
} from "@/lib/blocks/gallery.types"
import { cn } from "@/lib/utils"
import CircularGallery from "@/registry/new-york-v4/animations/circular-gallery/circular-gallery"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

// Block-specific defaults that override the generic defaults
const blockDefaults = {
  badge: "Gallery",
  title: "Green Spaces We've Created",
  description:
    "From cozy apartments to sprawling offices, see how our plants have transformed spaces into thriving green sanctuaries.",
  images: [
    { src: "/elements/landscape/plants/6.webp", alt: "Monstera Deliciosa" },
    { src: "/elements/landscape/plants/7.webp", alt: "Fiddle Leaf Fig" },
    { src: "/elements/landscape/plants/8.webp", alt: "Snake Plant" },
    { src: "/elements/landscape/plants/9.webp", alt: "Peace Lily" },
    { src: "/elements/landscape/plants/2.webp", alt: "Pothos" },
    { src: "/elements/landscape/plants/1.webp", alt: "Rubber Plant" },
    { src: "/elements/landscape/plants/3.webp", alt: "ZZ Plant" },
    { src: "/elements/landscape/plants/4.webp", alt: "Bird of Paradise" },
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

  // Transform images to the format CircularGallery expects
  const galleryItems = images.map((img) => ({
    image: img.src,
    text: img.alt,
  }))

  return (
    <section className={cn("relative overflow-x-clip", classNames.root)}>
      {/* Huge decoration - top left corner, clipping off screen */}
      <Image
        draggable={false}
        src="/elements/decoration-small/plants/4.svg"
        alt=""
        width={600}
        height={600}
        className="pointer-events-none absolute -top-64 -left-64 z-20 hidden select-none md:block"
      />
      {/* Huge decoration - bottom right corner, clipping off screen */}
      <Image
        draggable={false}
        src="/elements/decoration-small/plants/5.svg"
        alt=""
        width={550}
        height={550}
        className="pointer-events-none absolute -right-64 -bottom-64 z-20 hidden select-none md:block"
      />
      <div className={cn("relative z-10 container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          badgeColor="primary"
          className="mb-8"
          classNames={classNames.header}
        />
        <div
          className={cn(
            "relative h-[500px] w-full md:h-[600px]",
            classNames.grid
          )}
        >
          <CircularGallery
            items={galleryItems}
            bend={2}
            textColor="hsl(var(--foreground))"
            borderRadius={0.05}
            font="bold 24px sans-serif"
          />
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Gallery1 as GalleryServicePlants }
