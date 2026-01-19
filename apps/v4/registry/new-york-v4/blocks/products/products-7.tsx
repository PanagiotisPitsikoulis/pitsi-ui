"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ProductsBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    destinations?: Array<{
      name: string
      location: string
      price: number
      duration: string
      image: string
      rating: number
      featured?: boolean
      href: string
    }>
    cta?: { label: string; href: string }
  }
  classNames?: {
    root?: string
    container?: string
    header?: { badge?: string; title?: string; description?: string }
  }
}

const products7Defaults = {
  badge: "Popular Destinations",
  title: "Explore the World",
  description:
    "Discover breathtaking destinations and create unforgettable memories with our curated travel experiences",
  destinations: [
    {
      name: "Santorini Escape",
      location: "Greece",
      price: 1299,
      duration: "7 Days",
      image: "/elements/landscape/sea/1.webp",
      rating: 4.9,
      featured: true,
      href: "#",
    },
    {
      name: "Bali Paradise",
      location: "Indonesia",
      price: 1099,
      duration: "10 Days",
      image: "/elements/landscape/sea/2.webp",
      rating: 4.8,
      href: "#",
    },
    {
      name: "Maldives Luxury",
      location: "Maldives",
      price: 2499,
      duration: "5 Days",
      image: "/elements/landscape/sea/3.webp",
      rating: 5.0,
      featured: true,
      href: "#",
    },
    {
      name: "Costa Rica Adventure",
      location: "Costa Rica",
      price: 1599,
      duration: "8 Days",
      image: "/elements/landscape/sea/4.webp",
      rating: 4.7,
      href: "#",
    },
    {
      name: "Swiss Alps Retreat",
      location: "Switzerland",
      price: 1899,
      duration: "6 Days",
      image: "/elements/landscape/plane/1.webp",
      rating: 4.9,
      href: "#",
    },
    {
      name: "Tokyo Discovery",
      location: "Japan",
      price: 1799,
      duration: "9 Days",
      image: "/elements/landscape/plane/2.webp",
      rating: 4.8,
      href: "#",
    },
  ],
  cta: { label: "View All Destinations", href: "#" },
}

export function Products7({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  const {
    badge = products7Defaults.badge,
    title = products7Defaults.title,
    description = products7Defaults.description,
    destinations = products7Defaults.destinations,
    cta = products7Defaults.cta,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          spacing="compact"
          classNames={classNames.header}
        />

        {/* Destination Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, i) => (
            <ScrollFade key={i} delay={i * 0.1}>
              <Link
                href={destination.href}
                className="border-border group relative block overflow-hidden rounded-2xl border"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Featured Badge */}
                  {destination.featured && (
                    <Badge className="bg-primary text-primary-foreground absolute top-4 left-4">
                      Featured
                    </Badge>
                  )}

                  {/* Duration Badge */}
                  <Badge
                    variant="secondary"
                    className="absolute top-4 right-4 bg-white/90 text-black"
                  >
                    <DynamicIcon name="Clock" className="mr-1 h-3 w-3" />
                    {destination.duration}
                  </Badge>

                  {/* Overlay Content */}
                  <div className="absolute right-0 bottom-0 left-0 p-4 text-white">
                    <div className="mb-1 flex items-center gap-1">
                      <DynamicIcon
                        name="MapPin"
                        className="h-3 w-3 text-white/80"
                      />
                      <span className="text-sm text-white/80">
                        {destination.location}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">{destination.name}</h3>
                  </div>
                </div>

                {/* Details */}
                <div className="bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <DynamicIcon
                        name="Star"
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                      <span className="text-foreground text-sm font-medium">
                        {destination.rating}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-muted-foreground text-xs">
                        From
                      </span>
                      <p className="text-primary text-lg font-bold">
                        ${destination.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollFade>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href={cta.href}>
                {cta.label}
                <DynamicIcon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
