"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ProductsBlockProps {
  content?: {
    title?: string
    products?: Array<{
      name: string
      description: string
      price: number
      originalPrice?: number
      image: string
      rating: number
      inStock: boolean
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string }
  }
}

const products5Defaults = {
  title: "Popular Products",
  products: [
    {
      name: "Premium Noise-Canceling Headphones",
      description:
        "Experience immersive sound with industry-leading noise cancellation technology.",
      price: 349,
      originalPrice: 449,
      image: "/placeholders/blocks/service-plants/1.webp",
      rating: 4.9,
      inStock: true,
      href: "#",
    },
    {
      name: "Ergonomic Office Chair",
      description:
        "Designed for all-day comfort with adjustable lumbar support and breathable mesh.",
      price: 599,
      image: "/placeholders/blocks/service-plants/2.webp",
      rating: 4.7,
      inStock: true,
      href: "#",
    },
    {
      name: "4K Ultra HD Monitor",
      description:
        "Crystal-clear display with HDR support, perfect for creative professionals.",
      price: 799,
      originalPrice: 899,
      image: "/placeholders/blocks/service-plants/3.webp",
      rating: 4.8,
      inStock: false,
      href: "#",
    },
  ],
}

export function Products5({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  const {
    title = products5Defaults.title,
    products = products5Defaults.products,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <h2
          className={cn(
            "text-foreground mb-12 text-3xl font-bold md:text-4xl",
            classNames.header?.title
          )}
        >
          {title}
        </h2>

        {/* Product List */}
        <div className="space-y-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="border-border group grid gap-6 rounded-xl border p-4 md:grid-cols-[300px_1fr] md:p-6"
            >
              {/* Image */}
              <Link
                href={product.href}
                className="relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-square"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.originalPrice && (
                  <span className="absolute top-3 left-3 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % OFF
                  </span>
                )}
              </Link>

              {/* Details */}
              <div className="flex flex-col justify-between">
                <div>
                  {/* Rating */}
                  <div className="mb-2 flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={cn(
                          "h-4 w-4",
                          j < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground/30"
                        )}
                      />
                    ))}
                    <span className="text-muted-foreground ml-2 text-sm">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Name & Description */}
                  <Link href={product.href}>
                    <h3 className="text-foreground text-xl font-bold hover:underline">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mt-2">
                    {product.description}
                  </p>
                </div>

                {/* Price & Actions */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-foreground text-2xl font-bold">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground text-lg line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "text-sm font-medium",
                        product.inStock ? "text-green-600" : "text-red-500"
                      )}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                    <Button disabled={!product.inStock}>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
