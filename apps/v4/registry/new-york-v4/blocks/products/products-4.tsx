"use client"

import { useEffect, useRef, useState } from "react"
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
  categories: ["All", "Indoor", "Outdoor", "Succulents", "Tropical"],
  products: [
    {
      name: "Monstera Deliciosa",
      price: 45,
      image: "/elements/subject/plants/item-1.webp",
      category: "Indoor",
      href: "#",
    },
    {
      name: "Fiddle Leaf Fig",
      price: 65,
      image: "/elements/subject/plants/item-2.webp",
      category: "Indoor",
      href: "#",
    },
    {
      name: "Snake Plant",
      price: 35,
      image: "/elements/subject/plants/item-3.webp",
      category: "Succulents",
      href: "#",
    },
    {
      name: "Pothos Golden",
      price: 25,
      image: "/elements/subject/plants/item-4.webp",
      category: "Tropical",
      href: "#",
    },
    {
      name: "Bird of Paradise",
      price: 89,
      image: "/elements/subject/plants/item-1.webp",
      category: "Tropical",
      href: "#",
    },
    {
      name: "Aloe Vera",
      price: 22,
      image: "/elements/subject/plants/item-2.webp",
      category: "Succulents",
      href: "#",
    },
    {
      name: "Palm Tree",
      price: 120,
      image: "/elements/subject/plants/item-3.webp",
      category: "Outdoor",
      href: "#",
    },
    {
      name: "Lavender",
      price: 18,
      image: "/elements/subject/plants/item-4.webp",
      category: "Outdoor",
      href: "#",
    },
  ],
}

// CardSwipeCarousel Component - Swiper cards effect inline
function CardSwipeCarousel({
  images,
  className,
}: {
  images: {
    src: string
    alt: string
    name: string
    price: number
    href: string
  }[]
  className?: string
}) {
  const [SwiperComponents, setSwiperComponents] = useState<{
    Swiper: any
    SwiperSlide: any
    modules: any[]
  } | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    Promise.all([
      import("swiper/react"),
      import("swiper/modules"),
      import("swiper/css"),
      import("swiper/css/effect-cards"),
      import("swiper/css/navigation"),
      import("swiper/css/pagination"),
    ]).then(([swiperReact, swiperModules]) => {
      setSwiperComponents({
        Swiper: swiperReact.Swiper,
        SwiperSlide: swiperReact.SwiperSlide,
        modules: [
          swiperModules.EffectCards,
          swiperModules.Autoplay,
          swiperModules.Pagination,
          swiperModules.Navigation,
        ],
      })
    })
  }, [mounted])

  if (!mounted || !SwiperComponents || !images) {
    return (
      <div className={cn("relative w-full max-w-3xl", className)}>
        <div className="bg-muted mx-auto flex h-[400px] w-[280px] animate-pulse rounded-3xl" />
      </div>
    )
  }

  const { Swiper, SwiperSlide, modules } = SwiperComponents

  return (
    <div className={cn("relative mx-auto w-full max-w-sm", className)}>
      <Swiper
        effect="cards"
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="h-[400px] w-[280px]"
        modules={modules}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="rounded-3xl">
            <Link
              href={item.href}
              className="bg-background border-border relative block h-full w-full overflow-hidden rounded-3xl border"
            >
              <div className="relative h-[75%] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="absolute right-0 bottom-0 left-0 p-4">
                <h3 className="text-foreground font-semibold">{item.name}</h3>
                <p className="text-primary font-bold">${item.price}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export function Products4({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  const {
    title = products4Defaults.title,
    products = products4Defaults.products,
    categories = products4Defaults.categories,
  } = content

  const [activeCategory, setActiveCategory] = useState("All")
  const scrollRef = useRef<HTMLDivElement>(null)

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory)

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
        <div className="mb-8 flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <h2
            className={cn(
              "text-foreground text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* CardSwipeCarousel */}
        <div className="mb-12 flex items-center justify-center py-8">
          <CardSwipeCarousel
            images={filteredProducts.map((p) => ({
              src: p.image,
              alt: p.name,
              name: p.name,
              price: p.price,
              href: p.href,
            }))}
          />
        </div>

        {/* Horizontal Scroll Products below */}
        <div className="relative">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-foreground text-lg font-semibold">
              More Products
            </h3>
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

          <div
            ref={scrollRef}
            className="scrollbar-hide -mx-6 flex gap-4 overflow-x-auto px-6 pb-4"
          >
            {filteredProducts.map((product, i) => (
              <div
                key={i}
                className="border-border group w-48 shrink-0 overflow-hidden rounded-xl border"
              >
                <Link
                  href={product.href}
                  className="relative block aspect-square"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="p-3">
                  <span className="text-muted-foreground text-xs uppercase">
                    {product.category}
                  </span>
                  <Link href={product.href}>
                    <h3 className="text-foreground mt-1 text-sm font-medium hover:underline">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-primary mt-1 font-bold">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
