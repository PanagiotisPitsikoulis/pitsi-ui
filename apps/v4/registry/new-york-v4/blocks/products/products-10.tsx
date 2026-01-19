"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ProductsBlockProps {
  content?: {
    title?: string
    description?: string
    categories?: string[]
    packages?: Array<{
      name: string
      description: string
      price: number
      image: string
      category: string
      location: string
      duration: string
      groupSize: string
      rating: number
      reviews: number
      included: string[]
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const products10Defaults = {
  title: "Tour Packages",
  description:
    "Choose from our carefully crafted tour packages designed for every type of traveler",
  categories: ["All", "Adventure", "Cultural", "Beach", "Wildlife", "City"],
  packages: [
    {
      name: "Amazon Rainforest Expedition",
      description:
        "Explore the world's largest rainforest with expert naturalist guides",
      price: 2499,
      image: "/elements/landscape/animals/2.webp",
      category: "Adventure",
      location: "Brazil",
      duration: "8 Days",
      groupSize: "Max 12",
      rating: 4.9,
      reviews: 87,
      included: ["Flights", "Lodges", "Meals", "Guides"],
      href: "#",
    },
    {
      name: "Ancient Rome Discovery",
      description:
        "Walk through millennia of history with expert archaeological guides",
      price: 1899,
      image: "/elements/landscape/plane/6.webp",
      category: "Cultural",
      location: "Italy",
      duration: "6 Days",
      groupSize: "Max 16",
      rating: 4.8,
      reviews: 124,
      included: ["Hotels", "Tours", "Breakfast", "Transfers"],
      href: "#",
    },
    {
      name: "Phuket Beach Retreat",
      description:
        "Ultimate relaxation at Thailand's most stunning beach destination",
      price: 1299,
      image: "/elements/landscape/sea/9.webp",
      category: "Beach",
      location: "Thailand",
      duration: "7 Days",
      groupSize: "Flexible",
      rating: 4.7,
      reviews: 203,
      included: ["Resort", "Spa", "Breakfast", "Airport pickup"],
      href: "#",
    },
    {
      name: "Serengeti Safari",
      description:
        "Witness the great migration and Africa's incredible wildlife",
      price: 3899,
      image: "/elements/landscape/animals/3.webp",
      category: "Wildlife",
      location: "Tanzania",
      duration: "10 Days",
      groupSize: "Max 8",
      rating: 5.0,
      reviews: 56,
      included: ["Lodges", "Game drives", "Meals", "Park fees"],
      href: "#",
    },
    {
      name: "New York Explorer",
      description: "Experience the Big Apple like never before with VIP access",
      price: 1599,
      image: "/elements/landscape/plane/7.webp",
      category: "City",
      location: "USA",
      duration: "5 Days",
      groupSize: "Flexible",
      rating: 4.6,
      reviews: 178,
      included: ["Hotel", "Broadway show", "Tours", "Metro pass"],
      href: "#",
    },
    {
      name: "Himalayan Trek",
      description:
        "Challenge yourself with breathtaking views of the world's highest peaks",
      price: 2199,
      image: "/elements/landscape/plane/1.webp",
      category: "Adventure",
      location: "Nepal",
      duration: "14 Days",
      groupSize: "Max 10",
      rating: 4.9,
      reviews: 92,
      included: ["Teahouses", "Guides", "Permits", "Meals"],
      href: "#",
    },
  ],
}

export function Products10({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  const {
    title = products10Defaults.title,
    description = products10Defaults.description,
    categories = products10Defaults.categories,
    packages = products10Defaults.packages,
  } = content

  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPackages =
    activeCategory === "All"
      ? packages
      : packages.filter((p) => p.category === activeCategory)

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <BlockHeader
          title={title}
          description={description}
          spacing="compact"
          classNames={classNames.header}
        />

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((pkg, i) => (
            <SlideUp key={`${pkg.name}-${i}`} delay={i * 0.1}>
              <div className="border-border group flex h-full flex-col overflow-hidden rounded-2xl border">
                {/* Image */}
                <Link
                  href={pkg.href}
                  className="relative aspect-[3/2] overflow-hidden"
                >
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Category Badge */}
                  <span className="bg-primary/90 text-primary-foreground absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium">
                    {pkg.category}
                  </span>

                  {/* Rating */}
                  <div className="absolute right-4 bottom-4 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-white">
                    <DynamicIcon
                      name="Star"
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-xs font-medium">{pkg.rating}</span>
                    <span className="text-xs opacity-70">({pkg.reviews})</span>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Meta */}
                  <div className="text-muted-foreground mb-2 flex flex-wrap items-center gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <DynamicIcon name="MapPin" className="h-3 w-3" />
                      {pkg.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DynamicIcon name="Clock" className="h-3 w-3" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <DynamicIcon name="Users" className="h-3 w-3" />
                      {pkg.groupSize}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <Link href={pkg.href}>
                    <h3 className="text-foreground mb-2 text-lg font-bold hover:underline">
                      {pkg.name}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                    {pkg.description}
                  </p>

                  {/* Included */}
                  <div className="mb-4 flex flex-wrap gap-1">
                    {pkg.included.map((item, j) => (
                      <span
                        key={j}
                        className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-muted-foreground text-xs">
                        From
                      </span>
                      <p className="text-primary text-xl font-bold">
                        ${pkg.price.toLocaleString()}
                      </p>
                    </div>
                    <Button size="sm" asChild>
                      <Link href={pkg.href}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}
