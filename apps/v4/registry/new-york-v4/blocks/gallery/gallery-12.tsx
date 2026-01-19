"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

interface GalleryBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    categories?: Array<{
      id: string
      label: string
      icon: string
    }>
    destinations?: Array<{
      src: string
      alt: string
      title: string
      location: string
      category: string
      rating: number
      reviews: number
      price: string
      duration: string
      featured?: boolean
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const gallery12Defaults = {
  badge: "Explore",
  title: "Find Your Perfect Escape",
  description:
    "Browse our curated collection of destinations by category. Each trip is crafted to deliver unforgettable experiences.",
  categories: [
    { id: "all", label: "All Destinations", icon: "Globe" },
    { id: "beach", label: "Beach & Islands", icon: "Waves" },
    { id: "adventure", label: "Adventure", icon: "Mountain" },
    { id: "safari", label: "Safari & Wildlife", icon: "PawPrint" },
    { id: "cultural", label: "Cultural", icon: "Landmark" },
  ],
  destinations: [
    {
      src: "/elements/landscape/sea/1.webp",
      alt: "Maldives",
      title: "Maldives Luxury Resort",
      location: "Indian Ocean",
      category: "beach",
      rating: 4.9,
      reviews: 342,
      price: "$2,499",
      duration: "7 nights",
      featured: true,
    },
    {
      src: "/elements/landscape/animals/2.webp",
      alt: "Kenya Safari",
      title: "Masai Mara Safari",
      location: "Kenya",
      category: "safari",
      rating: 4.8,
      reviews: 215,
      price: "$3,899",
      duration: "10 days",
    },
    {
      src: "/elements/landscape/plane/5.webp",
      alt: "Swiss Alps",
      title: "Alpine Hiking Expedition",
      location: "Switzerland",
      category: "adventure",
      rating: 4.9,
      reviews: 189,
      price: "$2,199",
      duration: "8 days",
    },
    {
      src: "/elements/landscape/sea/3.webp",
      alt: "Bali",
      title: "Bali Temple & Beach Tour",
      location: "Indonesia",
      category: "cultural",
      rating: 4.7,
      reviews: 428,
      price: "$1,599",
      duration: "10 days",
      featured: true,
    },
    {
      src: "/elements/landscape/sea/5.webp",
      alt: "Greek Islands",
      title: "Greek Island Hopping",
      location: "Greece",
      category: "beach",
      rating: 4.8,
      reviews: 312,
      price: "$2,899",
      duration: "12 days",
    },
    {
      src: "/elements/landscape/animals/4.webp",
      alt: "Tanzania",
      title: "Serengeti Migration",
      location: "Tanzania",
      category: "safari",
      rating: 4.9,
      reviews: 156,
      price: "$4,299",
      duration: "14 days",
    },
    {
      src: "/elements/landscape/plane/7.webp",
      alt: "Japan",
      title: "Japan Cultural Journey",
      location: "Japan",
      category: "cultural",
      rating: 4.9,
      reviews: 287,
      price: "$3,199",
      duration: "14 days",
    },
    {
      src: "/elements/landscape/sea/7.webp",
      alt: "Seychelles",
      title: "Seychelles Paradise",
      location: "Seychelles",
      category: "beach",
      rating: 4.8,
      reviews: 198,
      price: "$3,499",
      duration: "7 nights",
    },
  ],
}

export function Gallery12({
  content = {},
  classNames = {},
}: GalleryBlockProps) {
  const {
    badge = gallery12Defaults.badge,
    title = gallery12Defaults.title,
    description = gallery12Defaults.description,
    categories = gallery12Defaults.categories,
    destinations = gallery12Defaults.destinations,
  } = content

  const [activeCategory, setActiveCategory] = useState("all")

  const filteredDestinations =
    activeCategory === "all"
      ? destinations
      : destinations.filter((d) => d.category === activeCategory)

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

        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-brand text-white shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              <DynamicIcon name={category.icon} className="h-4 w-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Destination Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((destination, i) => (
              <motion.div
                key={`${destination.title}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  layout: { duration: 0.3 },
                }}
                className="group bg-card overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={destination.src}
                    alt={destination.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {destination.featured && (
                    <Badge className="bg-brand absolute top-3 left-3 text-white">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm">
                    <DynamicIcon
                      name="Star"
                      className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-foreground text-xs font-medium">
                      {destination.rating}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      ({destination.reviews})
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-brand mb-1 flex items-center gap-1 text-xs font-medium">
                    <DynamicIcon name="MapPin" className="h-3 w-3" />
                    {destination.location}
                  </p>
                  <h3 className="text-foreground mb-2 line-clamp-1 font-semibold">
                    {destination.title}
                  </h3>
                  <div className="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
                    <DynamicIcon name="Clock" className="h-4 w-4" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-muted-foreground text-xs">
                        From
                      </span>
                      <p className="text-foreground text-lg font-bold">
                        {destination.price}
                      </p>
                    </div>
                    <Button size="sm" variant="outline" className="gap-1">
                      View
                      <DynamicIcon name="ArrowRight" className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDestinations.length === 0 && (
          <div className="text-muted-foreground py-16 text-center">
            <DynamicIcon
              name="SearchX"
              className="mx-auto mb-4 h-12 w-12 opacity-50"
            />
            <p>No destinations found in this category.</p>
          </div>
        )}

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" className="gap-2">
            View All Destinations
            <DynamicIcon name="ArrowRight" className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
