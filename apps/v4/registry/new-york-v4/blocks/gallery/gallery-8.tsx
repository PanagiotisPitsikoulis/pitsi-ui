"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "motion/react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface GalleryBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    destinations?: Array<{
      src: string
      alt: string
      title: string
      location: string
      rating: number
      price: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const gallery8Defaults = {
  badge: "Featured Trips",
  title: "Trending Destinations",
  description:
    "Discover our most popular travel packages, handpicked by our expert travel advisors.",
  destinations: [
    {
      src: "/elements/landscape/sea/1.webp",
      alt: "Maldives Resort",
      title: "Maldives Paradise",
      location: "Indian Ocean",
      rating: 4.9,
      price: "$2,499",
    },
    {
      src: "/elements/landscape/plane/2.webp",
      alt: "Swiss Alps",
      title: "Alpine Adventure",
      location: "Switzerland",
      rating: 4.8,
      price: "$1,899",
    },
    {
      src: "/elements/landscape/sea/3.webp",
      alt: "Bali Temple",
      title: "Bali Retreat",
      location: "Indonesia",
      rating: 4.7,
      price: "$1,299",
    },
    {
      src: "/elements/landscape/animals/1.webp",
      alt: "Safari Adventure",
      title: "Safari Experience",
      location: "Tanzania",
      rating: 4.9,
      price: "$3,199",
    },
    {
      src: "/elements/landscape/sea/5.webp",
      alt: "Greek Islands",
      title: "Greek Island Hop",
      location: "Greece",
      rating: 4.8,
      price: "$2,099",
    },
    {
      src: "/elements/landscape/sea/6.webp",
      alt: "Japanese Garden",
      title: "Japan Discovery",
      location: "Japan",
      rating: 4.9,
      price: "$2,799",
    },
  ],
}

export function Gallery8({ content = {}, classNames = {} }: GalleryBlockProps) {
  const {
    badge = gallery8Defaults.badge,
    title = gallery8Defaults.title,
    description = gallery8Defaults.description,
    destinations = gallery8Defaults.destinations,
  } = content

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

  return (
    <section
      ref={containerRef}
      className={cn("bg-background overflow-hidden", classNames.root)}
    >
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          badgeColor="brand"
          align="left"
          spacing="compact"
          classNames={classNames.header}
        />
      </div>

      {/* Horizontal Scroll Gallery */}
      <motion.div style={{ x }} className="flex gap-6 pb-16 pl-6 md:pl-12">
        {destinations.map((destination, i) => (
          <div
            key={i}
            className="group relative min-w-[300px] flex-shrink-0 sm:min-w-[350px]"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src={destination.src}
                alt={destination.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Rating Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-sm">
                <DynamicIcon
                  name="Star"
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
                <span className="text-sm font-medium text-white">
                  {destination.rating}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-brand mb-1 flex items-center gap-1 text-sm font-medium">
                  <DynamicIcon name="MapPin" className="h-4 w-4" />
                  {destination.location}
                </p>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {destination.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-white/70">From</span>
                    <p className="text-xl font-bold text-white">
                      {destination.price}
                    </p>
                  </div>
                  <button className="bg-brand hover:bg-brand/90 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-colors">
                    View Trip
                    <DynamicIcon name="ArrowRight" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
