"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ProductsBlockProps {
  content?: {
    title?: string
    categories?: string[]
    products?: Array<{
      name: string
      price: number
      image: string
      category: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string }
  }
}

const products4Defaults = {
  title: "Shop by Category",
  categories: ["All", "Electronics", "Clothing", "Accessories", "Home"],
  products: [
    {
      name: "Wireless Mouse",
      price: 49,
      image: "/elements/landscape/plants/1.webp",
      category: "Electronics",
      href: "#",
    },
    {
      name: "Cotton T-Shirt",
      price: 29,
      image: "/elements/landscape/plants/2.webp",
      category: "Clothing",
      href: "#",
    },
    {
      name: "Leather Wallet",
      price: 79,
      image: "/elements/landscape/plants/3.webp",
      category: "Accessories",
      href: "#",
    },
    {
      name: "Desk Lamp",
      price: 59,
      image: "/elements/landscape/plants/4.webp",
      category: "Home",
      href: "#",
    },
    {
      name: "Bluetooth Speaker",
      price: 99,
      image: "/elements/landscape/plants/5.webp",
      category: "Electronics",
      href: "#",
    },
    {
      name: "Denim Jacket",
      price: 149,
      image: "/elements/landscape/plants/1.webp",
      category: "Clothing",
      href: "#",
    },
    {
      name: "Sunglasses",
      price: 89,
      image: "/elements/landscape/plants/2.webp",
      category: "Accessories",
      href: "#",
    },
    {
      name: "Plant Pot",
      price: 35,
      image: "/elements/landscape/plants/3.webp",
      category: "Home",
      href: "#",
    },
  ],
}

export function Products4({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  const {
    title = products4Defaults.title,
    products = products4Defaults.products,
  } = content

  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const scrollAmount = 300
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2
            className={cn(
              "text-foreground text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="h-10 w-10 rounded-full"
            >
              <DynamicIcon name="ChevronLeft" className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full"
            >
              <DynamicIcon name="ChevronRight" className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scrollable Products */}
        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-6 flex gap-4 overflow-x-auto px-6 pb-4"
        >
          {products.map((product, i) => (
            <div
              key={i}
              className="border-border group w-64 shrink-0 overflow-hidden rounded-xl border"
            >
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
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                  <Button size="icon" variant="secondary" className="h-12 w-12">
                    <DynamicIcon name="Plus" className="h-5 w-5" />
                  </Button>
                </div>
              </Link>
              <div className="p-4">
                <span className="text-muted-foreground text-xs uppercase">
                  {product.category}
                </span>
                <Link href={product.href}>
                  <h3 className="text-foreground mt-1 font-medium hover:underline">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-foreground mt-2 font-bold">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
