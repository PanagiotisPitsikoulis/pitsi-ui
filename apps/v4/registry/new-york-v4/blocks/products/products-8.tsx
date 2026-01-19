"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ZoomParallax } from "@/registry/new-york-v4/animations/zoom-parallax/zoom-parallax"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ProductsBlockProps {
  content?: {
    title?: string
    featured?: {
      name: string
      description: string
      price: number
      originalPrice?: number
      image: string
      location: string
      duration: string
      highlights: string[]
      href: string
    }
    tours?: Array<{
      name: string
      price: number
      image: string
      location: string
      duration: string
      badge?: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string }
  }
}

const products8Defaults = {
  title: "Featured Tours",
  featured: {
    name: "Mediterranean Cruise Adventure",
    description:
      "Experience the best of the Mediterranean with our all-inclusive cruise package. Visit stunning coastal cities, enjoy world-class dining, and create memories that last a lifetime.",
    price: 3499,
    originalPrice: 4299,
    image: "/elements/landscape/sea/5.webp",
    location: "Mediterranean Sea",
    duration: "14 Days",
    highlights: [
      "All-inclusive meals & drinks",
      "5-star luxury cabin",
      "Guided shore excursions",
      "Entertainment & spa access",
    ],
    href: "#",
  },
  tours: [
    {
      name: "Greek Islands Hopping",
      price: 1899,
      image: "/elements/landscape/sea/6.webp",
      location: "Greece",
      duration: "10 Days",
      badge: "Bestseller",
      href: "#",
    },
    {
      name: "Northern Lights Chase",
      price: 2299,
      image: "/elements/landscape/plane/3.webp",
      location: "Iceland",
      duration: "7 Days",
      badge: "Limited",
      href: "#",
    },
    {
      name: "Safari Experience",
      price: 3199,
      image: "/elements/landscape/animals/1.webp",
      location: "Tanzania",
      duration: "8 Days",
      href: "#",
    },
    {
      name: "Ancient Wonders",
      price: 1699,
      image: "/elements/landscape/plane/4.webp",
      location: "Egypt",
      duration: "6 Days",
      href: "#",
    },
  ],
}

export function Products8({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  const {
    title = products8Defaults.title,
    featured = products8Defaults.featured,
    tours = products8Defaults.tours,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2
            className={cn(
              "text-foreground text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <Button variant="ghost" className="group" asChild>
            <Link href="#">
              Browse All
              <DynamicIcon
                name="ArrowRight"
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Featured Tour with ZoomParallax */}
          <ZoomParallax
            scaleRange={[0.95, 1]}
            animateOpacity={false}
            className="lg:row-span-2"
          >
            <Link
              href={featured.href}
              className="bg-background group relative block h-full overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-[300px]">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Sale Badge */}
                {featured.originalPrice && (
                  <span className="bg-primary text-primary-foreground absolute top-4 left-4 rounded-full px-3 py-1 text-sm font-semibold">
                    Save ${featured.originalPrice - featured.price}
                  </span>
                )}

                {/* Location & Duration */}
                <div className="absolute right-0 bottom-0 left-0 flex items-center gap-4 p-4 text-white">
                  <span className="flex items-center gap-1 text-sm">
                    <DynamicIcon name="MapPin" className="h-4 w-4" />
                    {featured.location}
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <DynamicIcon name="Clock" className="h-4 w-4" />
                    {featured.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-foreground mb-2 text-2xl font-bold">
                  {featured.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {featured.description}
                </p>

                {/* Highlights */}
                <ul className="mb-6 grid grid-cols-2 gap-2">
                  {featured.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-foreground flex items-center gap-2 text-sm"
                    >
                      <DynamicIcon
                        name="Check"
                        className="h-4 w-4 text-green-500"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-muted-foreground text-sm">From</span>
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-3xl font-bold">
                        ${featured.price.toLocaleString()}
                      </span>
                      {featured.originalPrice && (
                        <span className="text-muted-foreground text-lg line-through">
                          ${featured.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button>
                    Book Now
                    <DynamicIcon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </ZoomParallax>

          {/* Tour Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {tours.map((tour, i) => (
              <ZoomParallax
                key={i}
                scaleRange={[0.92, 1]}
                animateOpacity={false}
                offset={["start 90%", "start 40%"]}
              >
                <Link
                  href={tour.href}
                  className="bg-background group block overflow-hidden rounded-xl"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {tour.badge && (
                      <span className="bg-primary text-primary-foreground absolute top-3 left-3 rounded-full px-2 py-0.5 text-xs font-semibold">
                        {tour.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="text-muted-foreground mb-1 flex items-center gap-2 text-xs">
                      <span className="flex items-center gap-1">
                        <DynamicIcon name="MapPin" className="h-3 w-3" />
                        {tour.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DynamicIcon name="Clock" className="h-3 w-3" />
                        {tour.duration}
                      </span>
                    </div>
                    <h4 className="text-foreground font-semibold">
                      {tour.name}
                    </h4>
                    <p className="text-primary mt-1 font-bold">
                      ${tour.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              </ZoomParallax>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
