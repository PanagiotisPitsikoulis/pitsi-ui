"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollExpand } from "@/registry/new-york-v4/animations/scroll-expand/scroll-expand"
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
  title: "Popular Plants",
  products: [
    {
      name: "Monstera Deliciosa XL",
      description:
        "The iconic Swiss cheese plant, perfect for creating a tropical atmosphere in your living space.",
      price: 89,
      originalPrice: 119,
      image: "/elements/subject/plants/item-1.webp",
      rating: 4.9,
      inStock: true,
      href: "#",
    },
    {
      name: "Fiddle Leaf Fig Tree",
      description:
        "A stunning statement plant with large, violin-shaped leaves. Ideal for bright, indirect light.",
      price: 149,
      image: "/elements/subject/plants/item-2.webp",
      rating: 4.7,
      inStock: true,
      href: "#",
    },
    {
      name: "Snake Plant Collection",
      description:
        "Set of 3 varieties including Black Coral, Laurentii, and Moonshine. Perfect low-maintenance plants.",
      price: 65,
      originalPrice: 85,
      image: "/elements/subject/plants/item-3.webp",
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
            "text-foreground mb-12 text-center text-3xl font-bold md:text-4xl",
            classNames.header?.title
          )}
        >
          {title}
        </h2>

        {/* Product List with ScrollExpand animation */}
        <div className="space-y-6">
          {products.map((product, i) => (
            <ScrollExpand
              key={i}
              marginX="2rem"
              borderRadius="1.5rem"
              scrollBased={true}
            >
              <div className="border-border bg-muted/30 group grid gap-6 rounded-xl border p-4 md:grid-cols-[300px_1fr] md:p-6">
                {/* Image */}
                <Link
                  href={product.href}
                  className="bg-background relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-square"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.originalPrice && (
                    <span className="bg-primary text-primary-foreground absolute top-3 left-3 rounded-full px-2 py-1 text-xs font-semibold">
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
                        <DynamicIcon
                          key={j}
                          name="Star"
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
                        <DynamicIcon
                          name="ShoppingCart"
                          className="mr-2 h-4 w-4"
                        />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollExpand>
          ))}
        </div>
      </div>
    </section>
  )
}
