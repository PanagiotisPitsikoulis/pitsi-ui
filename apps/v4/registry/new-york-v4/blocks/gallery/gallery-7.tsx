"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import { ZoomParallax } from "@/registry/new-york-v4/animations/zoom-parallax/zoom-parallax"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface GalleryBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    images?: Array<{
      src: string
      alt: string
      location?: string
      country?: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const gallery7Defaults = {
  badge: "Destinations",
  title: "Explore the World",
  description:
    "From tropical paradises to ancient wonders, discover breathtaking destinations that will inspire your next adventure.",
  images: [
    {
      src: "/elements/landscape/sea/1.webp",
      alt: "Maldives Beach",
      location: "Maldives",
      country: "Indian Ocean",
    },
    {
      src: "/elements/landscape/sea/2.webp",
      alt: "Santorini Sunset",
      location: "Santorini",
      country: "Greece",
    },
    {
      src: "/elements/landscape/sea/3.webp",
      alt: "Bali Rice Terraces",
      location: "Bali",
      country: "Indonesia",
    },
    {
      src: "/elements/landscape/sea/4.webp",
      alt: "Amalfi Coast",
      location: "Amalfi",
      country: "Italy",
    },
    {
      src: "/elements/landscape/sea/5.webp",
      alt: "Phuket Beach",
      location: "Phuket",
      country: "Thailand",
    },
    {
      src: "/elements/landscape/sea/6.webp",
      alt: "Caribbean Paradise",
      location: "Caribbean",
      country: "West Indies",
    },
    {
      src: "/elements/landscape/sea/7.webp",
      alt: "Fiji Islands",
      location: "Fiji",
      country: "Pacific Ocean",
    },
    {
      src: "/elements/landscape/sea/8.webp",
      alt: "Seychelles Beach",
      location: "Seychelles",
      country: "Indian Ocean",
    },
  ],
}

export function Gallery7({ content = {}, classNames = {} }: GalleryBlockProps) {
  const {
    badge = gallery7Defaults.badge,
    title = gallery7Defaults.title,
    description = gallery7Defaults.description,
    images = gallery7Defaults.images,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          badgeColor="brand"
          spacing="compact"
          classNames={classNames.header}
        />

        {/* Masonry Grid with Zoom Parallax */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, i) => (
            <ZoomParallax
              key={i}
              scaleRange={[0.95, 1]}
              animateOpacity={false}
              className={cn(
                i === 0 || i === 5 ? "sm:col-span-2 sm:row-span-2" : ""
              )}
            >
              <div className="group relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-medium tracking-wider text-white/80 uppercase">
                    {image.country}
                  </p>
                  <h3 className="text-xl font-bold text-white">
                    {image.location}
                  </h3>
                </div>
              </div>
            </ZoomParallax>
          ))}
        </div>
      </div>
    </section>
  )
}
