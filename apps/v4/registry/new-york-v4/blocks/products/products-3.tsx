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
      image: string
      badge?: string
      href: string
    }
    products?: Array<{
      name: string
      price: number
      image: string
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

const products3Defaults = {
  title: "New Arrivals",
  featured: {
    name: "Giant Bird of Paradise",
    description:
      "A stunning statement plant that brings tropical elegance to any space. Perfect for bright corners and spacious rooms.",
    price: 189,
    image: "/elements/subject/plants/item-1.webp",
    badge: "New",
    href: "#",
  },
  products: [
    {
      name: "Rubber Plant",
      price: 49,
      image: "/elements/subject/plants/item-2.webp",
      badge: "Bestseller",
      href: "#",
    },
    {
      name: "Peace Lily",
      price: 35,
      image: "/elements/subject/plants/item-3.webp",
      href: "#",
    },
    {
      name: "Calathea Orbifolia",
      price: 55,
      image: "/elements/subject/plants/item-4.webp",
      href: "#",
    },
    {
      name: "ZZ Plant",
      price: 42,
      image: "/elements/subject/plants/item-1.webp",
      badge: "Low Light",
      href: "#",
    },
  ],
}

export function Products3({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  const {
    title = products3Defaults.title,
    featured = products3Defaults.featured,
    products = products3Defaults.products,
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
              View All
              <DynamicIcon
                name="ArrowRight"
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Featured Product with ZoomParallax Hero Effect */}
          <ZoomParallax
            scaleRange={[0.95, 1]}
            animateOpacity={false}
            className="lg:row-span-2"
          >
            <Link
              href={featured.href}
              className="bg-background group relative block h-full overflow-hidden rounded-2xl p-6"
            >
              {featured.badge && (
                <span className="bg-primary text-primary-foreground absolute top-6 left-6 z-10 rounded-full px-3 py-1 text-xs font-semibold">
                  {featured.badge}
                </span>
              )}
              <div className="relative mb-6 aspect-square overflow-hidden rounded-xl">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-foreground mb-2 text-2xl font-bold">
                {featured.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {featured.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-foreground text-2xl font-bold">
                  ${featured.price}
                </span>
                <Button>Shop Now</Button>
              </div>
            </Link>
          </ZoomParallax>

          {/* Product Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((product, i) => (
              <ZoomParallax
                key={i}
                scaleRange={[0.92, 1]}
                animateOpacity={false}
                offset={["start 90%", "start 40%"]}
              >
                <Link
                  href={product.href}
                  className="bg-background group block overflow-hidden rounded-xl p-4"
                >
                  {product.badge && (
                    <span className="bg-primary text-primary-foreground mb-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold">
                      {product.badge}
                    </span>
                  )}
                  <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-foreground font-medium">
                    {product.name}
                  </h4>
                  <p className="text-foreground mt-1 font-bold">
                    ${product.price}
                  </p>
                </Link>
              </ZoomParallax>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
