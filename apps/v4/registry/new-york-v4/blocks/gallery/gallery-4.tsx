"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

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
  categories: ["All", "Branding", "Web Design", "Photography", "Illustration"],
  images: [
    {
      src: "/placeholders/blocks/service-plants/1.webp",
      alt: "Project 1",
      category: "Branding",
    },
    {
      src: "/placeholders/blocks/service-plants/2.webp",
      alt: "Project 2",
      category: "Web Design",
    },
    {
      src: "/placeholders/blocks/service-plants/3.webp",
      alt: "Project 3",
      category: "Photography",
    },
    {
      src: "/placeholders/blocks/service-plants/4.webp",
      alt: "Project 4",
      category: "Illustration",
    },
    {
      src: "/placeholders/blocks/service-plants/5.webp",
      alt: "Project 5",
      category: "Branding",
    },
    {
      src: "/placeholders/blocks/service-plants/1.webp",
      alt: "Project 6",
      category: "Web Design",
    },
    {
      src: "/placeholders/blocks/service-plants/2.webp",
      alt: "Project 7",
      category: "Photography",
    },
    {
      src: "/placeholders/blocks/service-plants/3.webp",
      alt: "Project 8",
      category: "Branding",
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
        {/* Header */}
        <div className="mb-8 text-center">
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

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((image, i) => (
            <div
              key={`${image.category}-${i}`}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/50 group-hover:opacity-100">
                <span className="text-lg font-medium text-white">
                  {image.alt}
                </span>
                <span className="text-sm text-white/70">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-muted-foreground py-16 text-center">
            No images found in this category.
          </div>
        )}
      </div>
    </section>
  )
}
