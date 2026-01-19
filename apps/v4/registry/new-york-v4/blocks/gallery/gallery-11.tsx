"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import {
  ZoomGalleryContainer,
  ZoomGalleryImage,
} from "@/registry/new-york-v4/animations/zoom-parallax/zoom-parallax"

interface GalleryBlockProps {
  content?: {
    badge?: string
    title?: string
    subtitle?: string
    destinations?: Array<{
      src: string
      alt: string
      name: string
      style: {
        width: string
        height: string
        top?: string
        left?: string
        right?: string
        bottom?: string
      }
      targetScale: number
    }>
  }
  classNames?: {
    root?: string
  }
}

const gallery11Defaults = {
  badge: "Discover",
  title: "Journey Beyond",
  subtitle: "Immerse yourself in the world's most breathtaking destinations",
  destinations: [
    {
      src: "/elements/landscape/sea/1.webp",
      alt: "Maldives",
      name: "Maldives",
      style: { width: "35vw", height: "35vh", top: "5%", left: "32.5%" },
      targetScale: 4,
    },
    {
      src: "/elements/landscape/sea/4.webp",
      alt: "Greece",
      name: "Santorini",
      style: { width: "15vw", height: "20vh", top: "10%", left: "5%" },
      targetScale: 5,
    },
    {
      src: "/elements/landscape/animals/1.webp",
      alt: "Safari",
      name: "Tanzania",
      style: { width: "18vw", height: "25vh", top: "5%", right: "5%" },
      targetScale: 6,
    },
    {
      src: "/elements/landscape/sea/6.webp",
      alt: "Bali",
      name: "Indonesia",
      style: { width: "20vw", height: "28vh", bottom: "15%", left: "10%" },
      targetScale: 5.5,
    },
    {
      src: "/elements/landscape/plane/5.webp",
      alt: "Swiss Alps",
      name: "Switzerland",
      style: { width: "22vw", height: "30vh", bottom: "10%", right: "8%" },
      targetScale: 4.5,
    },
    {
      src: "/elements/landscape/sea/8.webp",
      alt: "Caribbean",
      name: "Caribbean",
      style: { width: "12vw", height: "18vh", top: "40%", left: "3%" },
      targetScale: 7,
    },
    {
      src: "/elements/landscape/animals/5.webp",
      alt: "Kenya",
      name: "Kenya",
      style: { width: "14vw", height: "20vh", top: "35%", right: "3%" },
      targetScale: 6.5,
    },
  ],
}

export function Gallery11({
  content = {},
  classNames = {},
}: GalleryBlockProps) {
  const {
    badge = gallery11Defaults.badge,
    title = gallery11Defaults.title,
    subtitle = gallery11Defaults.subtitle,
    destinations = gallery11Defaults.destinations,
  } = content

  return (
    <section className={cn("bg-background relative", classNames.root)}>
      <ZoomGalleryContainer height="300vh" className="bg-muted/30">
        {/* Static Header Overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center">
          <span className="text-brand mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            {badge}
          </span>
          <h2 className="text-foreground mb-4 text-center text-4xl font-bold md:text-6xl lg:text-7xl">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-md text-center text-lg">
            {subtitle}
          </p>
        </div>

        {/* Destination Images */}
        {destinations.map((destination, i) => (
          <ZoomGalleryImage
            key={i}
            src={destination.src}
            alt={destination.alt}
            targetScale={destination.targetScale}
            style={destination.style}
            className="group cursor-pointer overflow-hidden rounded-xl shadow-2xl"
          />
        ))}
      </ZoomGalleryContainer>

      {/* Bottom Destination List */}
      <div className="bg-background border-t py-12">
        <div className="container px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {destinations.slice(0, 5).map((destination, i) => (
              <div
                key={i}
                className="group flex cursor-pointer items-center gap-3 transition-colors"
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={destination.src}
                    alt={destination.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="group-hover:text-brand text-foreground font-medium transition-colors">
                    {destination.name}
                  </p>
                  <p className="text-muted-foreground flex items-center gap-1 text-xs">
                    <DynamicIcon name="MapPin" className="h-3 w-3" />
                    Explore
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
