"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import DecayCard from "@/registry/new-york-v4/animations/decay-card/decay-card"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
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
  title: "Featured Plants",
  description: "Explore our curated selection of premium houseplants",
  products: [
    {
      name: "Monstera Deliciosa",
      price: 45,
      originalPrice: 59,
      image: "/elements/subject/plants/item-1.webp",
      rating: 4.8,
      reviews: 124,
      href: "#",
    },
    {
      name: "Fiddle Leaf Fig",
      price: 65,
      image: "/elements/subject/plants/item-2.webp",
      rating: 4.9,
      reviews: 89,
      href: "#",
    },
    {
      name: "Snake Plant",
      price: 35,
      originalPrice: 45,
      image: "/elements/subject/plants/item-3.webp",
      rating: 4.6,
      reviews: 256,
      href: "#",
    },
    {
      name: "Pothos Golden",
      price: 25,
      image: "/elements/subject/plants/item-4.webp",
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

  const [quickViewProduct, setQuickViewProduct] = useState<
    (typeof products)[0] | null
  >(null)

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
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
                {product.originalPrice && (
                  <span className="bg-primary text-primary-foreground absolute top-3 left-3 rounded-full px-2 py-1 text-xs font-semibold">
                    Sale
                  </span>
                )}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="icon"
                    aria-label="Quick view"
                    onClick={(e) => {
                      e.preventDefault()
                      setQuickViewProduct(product)
                    }}
                  >
                    <DynamicIcon name="Eye" className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    aria-label="Add to wishlist"
                  >
                    <DynamicIcon name="Heart" className="h-4 w-4" />
                  </Button>
                </div>
              </Link>

              {/* Details */}
              <div className="p-4">
                {/* Rating */}
                <div className="mb-2 flex items-center gap-1">
                  <DynamicIcon
                    name="Star"
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
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
                  <DynamicIcon name="ShoppingCart" className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick View Modal with DecayCard */}
        {quickViewProduct && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Quick view"
            className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setQuickViewProduct(null)}
            onKeyDown={(e) => e.key === "Escape" && setQuickViewProduct(null)}
          >
            <div
              className="bg-background border-border relative flex max-h-[90vh] w-full max-w-4xl flex-col gap-8 overflow-auto rounded-3xl border p-8 md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setQuickViewProduct(null)}
                aria-label="Close quick view"
              >
                <DynamicIcon name="X" className="h-5 w-5" />
              </Button>

              {/* DecayCard Image Effect */}
              <div className="flex flex-1 items-center justify-center">
                <DecayCard
                  width={300}
                  height={400}
                  image={quickViewProduct.image}
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-1 flex-col justify-center">
                {quickViewProduct.originalPrice && (
                  <span className="bg-primary text-primary-foreground mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold">
                    Sale
                  </span>
                )}
                <h2 className="text-foreground mb-2 text-2xl font-bold">
                  {quickViewProduct.name}
                </h2>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <DynamicIcon
                        key={j}
                        name="Star"
                        className={cn(
                          "h-4 w-4",
                          j < Math.floor(quickViewProduct.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground/30"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({quickViewProduct.reviews} reviews)
                  </span>
                </div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-foreground text-3xl font-bold">
                    ${quickViewProduct.price}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-muted-foreground text-xl line-through">
                      ${quickViewProduct.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-8">
                  A beautiful plant that brings life and elegance to any space.
                  Perfect for both beginners and experienced plant parents.
                </p>
                <div className="flex gap-3">
                  <Button className="flex-1">
                    <DynamicIcon name="ShoppingCart" className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Add to wishlist"
                  >
                    <DynamicIcon name="Heart" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
