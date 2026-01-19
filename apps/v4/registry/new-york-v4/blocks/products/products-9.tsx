"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import {
  CardsParallaxContainer,
  ParallaxCard,
} from "@/registry/new-york-v4/animations/cards-parallax/cards-parallax"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ProductsBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    deals?: Array<{
      name: string
      description: string
      price: number
      originalPrice: number
      image: string
      location: string
      duration: string
      deadline: string
      highlights: string[]
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
  }
}

const products9Defaults = {
  badge: "Limited Time",
  title: "Flash Deals",
  description:
    "Exclusive travel offers ending soon - grab them before they expire!",
  deals: [
    {
      name: "Caribbean Paradise",
      description:
        "All-inclusive beach resort with crystal clear waters and white sandy beaches. Perfect for a romantic getaway or family vacation.",
      price: 899,
      originalPrice: 1499,
      image: "/elements/landscape/sea/7.webp",
      location: "Dominican Republic",
      duration: "7 Nights",
      deadline: "Ends in 2 days",
      highlights: [
        "Beachfront villa",
        "All meals included",
        "Water sports",
        "Spa access",
      ],
      href: "#",
    },
    {
      name: "European Adventure",
      description:
        "Multi-city tour covering the best of Europe. Visit iconic landmarks, experience rich culture, and savor authentic cuisine.",
      price: 1599,
      originalPrice: 2299,
      image: "/elements/landscape/plane/5.webp",
      location: "France, Italy, Spain",
      duration: "12 Days",
      deadline: "Ends in 5 days",
      highlights: [
        "4-star hotels",
        "Expert guides",
        "Skip-the-line access",
        "Daily breakfast",
      ],
      href: "#",
    },
    {
      name: "Tropical Escape",
      description:
        "Discover the exotic beauty of Southeast Asia with this incredible package featuring pristine beaches and ancient temples.",
      price: 1199,
      originalPrice: 1899,
      image: "/elements/landscape/sea/8.webp",
      location: "Thailand & Vietnam",
      duration: "10 Days",
      deadline: "Ends in 3 days",
      highlights: [
        "Luxury resorts",
        "Cultural tours",
        "Cooking classes",
        "Boat excursions",
      ],
      href: "#",
    },
  ],
}

const cardColors = [
  "hsl(var(--primary))",
  "hsl(var(--primary) / 0.9)",
  "hsl(var(--primary) / 0.8)",
]

export function Products9({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  const {
    badge = products9Defaults.badge,
    title = products9Defaults.title,
    description = products9Defaults.description,
    deals = products9Defaults.deals,
  } = content

  return (
    <CardsParallaxContainer
      cardCount={deals.length}
      className={cn("h-[300vh]", classNames.root)}
    >
      {/* Header - Fixed at top */}
      <div className="bg-background/80 sticky top-0 z-50 py-8 backdrop-blur-sm">
        <div className={cn("container px-6 text-center", classNames.container)}>
          {badge && (
            <span className="text-primary mb-2 inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase">
              <DynamicIcon name="Zap" className="h-4 w-4" />
              {badge}
            </span>
          )}
          <h2 className="text-foreground mb-2 text-3xl font-bold md:text-4xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            {description}
          </p>
        </div>
      </div>

      {/* Deal Cards */}
      {deals.map((deal, i) => (
        <ParallaxCard
          key={i}
          index={i}
          backgroundColor={cardColors[i % cardColors.length]}
          className="text-primary-foreground"
        >
          <div className="flex h-full flex-col md:flex-row md:gap-8">
            {/* Image */}
            <div className="relative h-48 shrink-0 overflow-hidden rounded-2xl md:h-full md:w-2/5">
              <Image
                src={deal.image}
                alt={deal.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Discount Badge */}
              <div className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-sm font-bold text-black">
                {Math.round(
                  ((deal.originalPrice - deal.price) / deal.originalPrice) * 100
                )}
                % OFF
              </div>

              {/* Deadline Badge */}
              <div className="absolute right-4 bottom-4 flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-sm font-medium text-white">
                <DynamicIcon name="Clock" className="h-3 w-3" />
                {deal.deadline}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center pt-6 md:pt-0">
              <div className="mb-2 flex items-center gap-4 text-sm opacity-90">
                <span className="flex items-center gap-1">
                  <DynamicIcon name="MapPin" className="h-4 w-4" />
                  {deal.location}
                </span>
                <span className="flex items-center gap-1">
                  <DynamicIcon name="Calendar" className="h-4 w-4" />
                  {deal.duration}
                </span>
              </div>

              <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                {deal.name}
              </h3>
              <p className="mb-4 line-clamp-2 opacity-90">{deal.description}</p>

              {/* Highlights */}
              <div className="mb-6 grid grid-cols-2 gap-2">
                {deal.highlights.map((highlight, j) => (
                  <span key={j} className="flex items-center gap-2 text-sm">
                    <DynamicIcon name="Check" className="h-4 w-4" />
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <span className="text-sm opacity-80">Starting from</span>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold">
                      ${deal.price.toLocaleString()}
                    </span>
                    <span className="text-lg line-through opacity-60">
                      ${deal.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="ml-auto"
                  asChild
                >
                  <Link href={deal.href}>
                    Grab This Deal
                    <DynamicIcon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ParallaxCard>
      ))}
    </CardsParallaxContainer>
  )
}
