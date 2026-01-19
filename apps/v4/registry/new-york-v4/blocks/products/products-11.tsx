"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollScale } from "@/registry/new-york-v4/animations/scroll-scale/scroll-scale"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ProductsBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    bundles?: Array<{
      name: string
      tagline: string
      price: number
      priceNote?: string
      image: string
      tier?: "basic" | "popular" | "premium"
      features: string[]
      destinations: string[]
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { badge?: string; title?: string; description?: string }
  }
}

const products11Defaults = {
  badge: "Travel Packages",
  title: "Choose Your Adventure",
  description:
    "Select the perfect travel bundle tailored to your dream vacation style",
  bundles: [
    {
      name: "Explorer",
      tagline: "Perfect for first-time travelers",
      price: 1499,
      priceNote: "per person",
      image: "/elements/landscape/sea/10.webp",
      tier: "basic" as const,
      features: [
        "3-star accommodations",
        "Guided city tours",
        "Airport transfers",
        "Daily breakfast",
        "Travel insurance",
      ],
      destinations: ["Paris", "Rome", "Barcelona"],
      href: "#",
    },
    {
      name: "Adventurer",
      tagline: "Our most popular choice",
      price: 2499,
      priceNote: "per person",
      image: "/elements/landscape/animals/4.webp",
      tier: "popular" as const,
      features: [
        "4-star boutique hotels",
        "Private guided tours",
        "VIP airport lounge access",
        "All meals included",
        "Premium travel insurance",
        "Local experiences",
        "24/7 concierge support",
      ],
      destinations: ["Bali", "Tokyo", "Sydney", "Auckland"],
      href: "#",
    },
    {
      name: "Luxurist",
      tagline: "Ultimate luxury experience",
      price: 4999,
      priceNote: "per person",
      image: "/elements/landscape/sea/1.webp",
      tier: "premium" as const,
      features: [
        "5-star luxury resorts",
        "Private butler service",
        "First-class flights",
        "Michelin-star dining",
        "Comprehensive insurance",
        "Exclusive experiences",
        "Personal photographer",
        "Helicopter transfers",
        "Unlimited spa access",
      ],
      destinations: ["Maldives", "Dubai", "Monaco", "Santorini", "Seychelles"],
      href: "#",
    },
  ],
}

export function Products11({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  const {
    badge = products11Defaults.badge,
    title = products11Defaults.title,
    description = products11Defaults.description,
    bundles = products11Defaults.bundles,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
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

        {/* Bundle Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {bundles.map((bundle, i) => (
            <ScrollScale key={i} startScale={0.9} endScale={1} delay={i * 0.1}>
              <div
                className={cn(
                  "bg-background relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300",
                  bundle.tier === "popular" &&
                    "ring-primary shadow-xl ring-2 lg:-my-4 lg:py-4"
                )}
              >
                {/* Popular Badge */}
                {bundle.tier === "popular" && (
                  <div className="bg-primary text-primary-foreground absolute top-0 right-0 left-0 py-2 text-center text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                {/* Image */}
                <div
                  className={cn(
                    "relative h-48 overflow-hidden",
                    bundle.tier === "popular" && "mt-8"
                  )}
                >
                  <Image
                    src={bundle.image}
                    alt={bundle.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Destinations */}
                  <div className="absolute right-0 bottom-0 left-0 p-4">
                    <div className="flex flex-wrap gap-1">
                      {bundle.destinations.slice(0, 3).map((dest, j) => (
                        <span
                          key={j}
                          className="rounded-full bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur-sm"
                        >
                          {dest}
                        </span>
                      ))}
                      {bundle.destinations.length > 3 && (
                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
                          +{bundle.destinations.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Name & Tagline */}
                  <div className="mb-4 text-center">
                    <h3 className="text-foreground text-2xl font-bold">
                      {bundle.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {bundle.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 text-center">
                    <span className="text-primary text-4xl font-bold">
                      ${bundle.price.toLocaleString()}
                    </span>
                    {bundle.priceNote && (
                      <span className="text-muted-foreground ml-1 text-sm">
                        /{bundle.priceNote}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="mb-6 flex-1 space-y-3">
                    {bundle.features.map((feature, j) => (
                      <li
                        key={j}
                        className="text-foreground flex items-center gap-2 text-sm"
                      >
                        <DynamicIcon
                          name="Check"
                          className={cn(
                            "h-4 w-4 shrink-0",
                            bundle.tier === "premium"
                              ? "text-yellow-500"
                              : "text-green-500"
                          )}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className="w-full"
                    variant={bundle.tier === "popular" ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href={bundle.href}>
                      {bundle.tier === "premium"
                        ? "Contact Us"
                        : "Book This Package"}
                      <DynamicIcon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollScale>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <DynamicIcon name="Shield" className="text-primary h-5 w-5" />
            <span className="text-muted-foreground text-sm">
              Secure Booking
            </span>
          </div>
          <div className="flex items-center gap-2">
            <DynamicIcon name="RefreshCw" className="text-primary h-5 w-5" />
            <span className="text-muted-foreground text-sm">
              Free Cancellation
            </span>
          </div>
          <div className="flex items-center gap-2">
            <DynamicIcon name="Headphones" className="text-primary h-5 w-5" />
            <span className="text-muted-foreground text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <DynamicIcon name="Award" className="text-primary h-5 w-5" />
            <span className="text-muted-foreground text-sm">Best Price</span>
          </div>
        </div>
      </div>
    </section>
  )
}
