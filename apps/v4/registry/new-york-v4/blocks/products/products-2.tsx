"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ProductsBlockProps {
  content?: {
    title?: string
    description?: string
    products?: Array<{
      name: string
      price: number
      originalPrice?: number
      image: string
      rating: number
      reviews: number
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const products2Defaults = {
  title: "Featured Products",
  description: "Shop our most popular items",
  products: [
    {
      name: "Wireless Headphones",
      price: 199,
      originalPrice: 249,
      image: "/placeholders/blocks/service-plants/1.webp",
      rating: 4.8,
      reviews: 124,
      href: "#",
    },
    {
      name: "Smart Watch Pro",
      price: 349,
      image: "/placeholders/blocks/service-plants/2.webp",
      rating: 4.9,
      reviews: 89,
      href: "#",
    },
    {
      name: "Portable Speaker",
      price: 79,
      originalPrice: 99,
      image: "/placeholders/blocks/service-plants/3.webp",
      rating: 4.6,
      reviews: 256,
      href: "#",
    },
    {
      name: "Laptop Stand",
      price: 59,
      image: "/placeholders/blocks/service-plants/4.webp",
      rating: 4.7,
      reviews: 178,
      href: "#",
    },
  ],
}

export function Products2({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  const {
    title = products2Defaults.title,
    description = products2Defaults.description,
    products = products2Defaults.products,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <div className="mb-12 text-center">
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

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <div
              key={i}
              className="border-border group relative overflow-hidden rounded-xl border"
            >
              {/* Image */}
              <Link
                href={product.href}
                className="relative block aspect-square"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.originalPrice && (
                  <span className="absolute top-3 left-3 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                    Sale
                  </span>
                )}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-3 right-3 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </Link>

              {/* Details */}
              <div className="p-4">
                {/* Rating */}
                <div className="mb-2 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-foreground text-sm font-medium">
                    {product.rating}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    ({product.reviews})
                  </span>
                </div>

                {/* Name */}
                <Link href={product.href}>
                  <h3 className="text-foreground font-medium hover:underline">
                    {product.name}
                  </h3>
                </Link>

                {/* Price */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-foreground text-lg font-bold">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground text-sm line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart */}
                <Button className="mt-4 w-full" size="sm">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
