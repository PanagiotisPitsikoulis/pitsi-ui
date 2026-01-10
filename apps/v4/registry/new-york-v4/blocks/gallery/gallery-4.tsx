"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"
import Shuffle from "@/registry/new-york-v4/animations/shuffle/shuffle"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface GalleryBlockProps {
  content?: {
    title?: string
    description?: string
    categories?: string[]
    images?: Array<{ src: string; alt: string; category: string }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const gallery4Defaults = {
  title: "Portfolio",
  description: "Browse our work by category",
  categories: ["All", "Indoor", "Outdoor", "Office", "Residential"],
  images: [
    {
      src: "/elements/landscape/plants/1.webp",
      alt: "Project 1",
      category: "Indoor",
    },
    {
      src: "/elements/landscape/plants/2.webp",
      alt: "Project 2",
      category: "Outdoor",
    },
    {
      src: "/elements/landscape/plants/3.webp",
      alt: "Project 3",
      category: "Office",
    },
    {
      src: "/elements/landscape/plants/4.webp",
      alt: "Project 4",
      category: "Residential",
    },
    {
      src: "/elements/landscape/plants/5.webp",
      alt: "Project 5",
      category: "Indoor",
    },
    {
      src: "/elements/landscape/plants/6.webp",
      alt: "Project 6",
      category: "Outdoor",
    },
    {
      src: "/elements/landscape/plants/7.webp",
      alt: "Project 7",
      category: "Office",
    },
    {
      src: "/elements/landscape/plants/8.webp",
      alt: "Project 8",
      category: "Indoor",
    },
  ],
}

export function Gallery4({ content = {}, classNames = {} }: GalleryBlockProps) {
  const {
    title = gallery4Defaults.title,
    description = gallery4Defaults.description,
    categories = gallery4Defaults.categories,
    images = gallery4Defaults.images,
  } = content

  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory)

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header with Shuffle Animation */}
        <div className="mb-8 text-center">
          <Shuffle
            text={title}
            tag="h2"
            className="text-foreground mb-4 text-3xl font-bold normal-case md:text-4xl"
            duration={0.4}
            stagger={0.02}
            triggerOnHover
            triggerOnce={false}
          />
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {description}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, i) => (
              <motion.div
                key={`${image.src}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  layout: { duration: 0.4 },
                }}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                  <span className="text-lg font-medium text-white">
                    {image.alt}
                  </span>
                  <span className="text-sm text-white/70">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-muted-foreground py-16 text-center">
            No images found in this category.
          </div>
        )}
      </div>
    </section>
  )
}
