"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface GalleryBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    hashtag?: string
    photos?: Array<{
      src: string
      alt: string
      likes: number
      location: string
      username: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const gallery9Defaults = {
  badge: "Community",
  title: "Travel Moments",
  description:
    "See how our travelers capture their adventures. Share your journey with us.",
  hashtag: "#WanderWithUs",
  photos: [
    {
      src: "/elements/landscape/sea/1.webp",
      alt: "Beach sunset",
      likes: 2341,
      location: "Maldives",
      username: "@adventure_seeker",
    },
    {
      src: "/elements/landscape/animals/2.webp",
      alt: "Wildlife safari",
      likes: 1892,
      location: "Kenya",
      username: "@wild_explorer",
    },
    {
      src: "/elements/landscape/sea/3.webp",
      alt: "Tropical paradise",
      likes: 3102,
      location: "Bali",
      username: "@beach_lover",
    },
    {
      src: "/elements/landscape/plane/5.webp",
      alt: "Mountain view",
      likes: 2567,
      location: "Swiss Alps",
      username: "@mountain_soul",
    },
    {
      src: "/elements/landscape/sea/5.webp",
      alt: "Greek coastline",
      likes: 1756,
      location: "Santorini",
      username: "@island_hopper",
    },
    {
      src: "/elements/landscape/animals/3.webp",
      alt: "Desert safari",
      likes: 2089,
      location: "Dubai",
      username: "@desert_dreams",
    },
    {
      src: "/elements/landscape/sea/7.webp",
      alt: "Ocean waves",
      likes: 2934,
      location: "Hawaii",
      username: "@wave_rider",
    },
    {
      src: "/elements/landscape/plane/7.webp",
      alt: "City skyline",
      likes: 1623,
      location: "Tokyo",
      username: "@city_lights",
    },
    {
      src: "/elements/landscape/sea/9.webp",
      alt: "Tropical lagoon",
      likes: 2445,
      location: "Fiji",
      username: "@lagoon_life",
    },
  ],
}

export function Gallery9({ content = {}, classNames = {} }: GalleryBlockProps) {
  const {
    badge = gallery9Defaults.badge,
    title = gallery9Defaults.title,
    description = gallery9Defaults.description,
    hashtag = gallery9Defaults.hashtag,
    photos = gallery9Defaults.photos,
  } = content

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const goToPrevious = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev === 0 ? photos.length - 1 : prev - 1) : null
    )
  const goToNext = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev === photos.length - 1 ? 0 : prev + 1) : null
    )

  const formatLikes = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"
    }
    return num.toString()
  }

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

        {/* Hashtag */}
        <div className="mb-10 text-center">
          <span className="text-brand inline-flex items-center gap-2 text-lg font-semibold">
            <DynamicIcon name="Hash" className="h-5 w-5" />
            {hashtag.replace("#", "")}
          </span>
        </div>

        {/* Instagram-style Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3">
          {photos.map((photo, i) => (
            <ScrollFade key={i} delay={i * 0.05} scrollBased={false}>
              <button
                onClick={() => openLightbox(i)}
                className="group focus:ring-brand relative aspect-square overflow-hidden rounded-lg focus:ring-2 focus:ring-offset-2 focus:outline-none sm:rounded-xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-6 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-white">
                    <DynamicIcon
                      name="Heart"
                      className="h-6 w-6 fill-white text-white"
                    />
                    <span className="font-semibold">
                      {formatLikes(photo.likes)}
                    </span>
                  </div>
                </div>
              </button>
            </ScrollFade>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" className="gap-2">
            <DynamicIcon name="Instagram" className="h-5 w-5" />
            Follow Us on Instagram
          </Button>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            >
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

              {/* Image with info */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-h-[85vh] max-w-[85vw]"
              >
                <Image
                  src={photos[lightboxIndex].src}
                  alt={photos[lightboxIndex].alt}
                  width={1200}
                  height={800}
                  className="max-h-[70vh] w-auto rounded-lg object-contain"
                />
                {/* Photo Info */}
                <div className="mt-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                      <DynamicIcon name="User" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {photos[lightboxIndex].username}
                      </p>
                      <p className="flex items-center gap-1 text-sm text-white/70">
                        <DynamicIcon name="MapPin" className="h-3 w-3" />
                        {photos[lightboxIndex].location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DynamicIcon
                      name="Heart"
                      className="h-5 w-5 fill-red-500 text-red-500"
                    />
                    <span>
                      {formatLikes(photos[lightboxIndex].likes)} likes
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
                {lightboxIndex + 1} / {photos.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
