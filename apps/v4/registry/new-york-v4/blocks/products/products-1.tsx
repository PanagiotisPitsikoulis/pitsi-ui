"use client"

import Link from "next/link"

import {
  productsDefaults,
  type ProductsBlockProps,
} from "@/lib/blocks/products.types"
import { cn } from "@/lib/utils"
import { Carousel_001 } from "@/registry/new-york-v4/animations/perspective-carousel/perspective-carousel"
import { Button } from "@/registry/new-york-v4/ui/button"

// ============================================================================
// Block-specific defaults (preserves original content)
// ============================================================================

const blockDefaults = {
  ...productsDefaults,
  badge: "Our Collection",
  title: "Best Sellers",
  products: [
    {
      name: "Monstera Deliciosa",
      price: "$45",
      image: {
        src: "/elements/subject/plants/item-1.webp",
        alt: "Monstera Deliciosa",
      },
      href: "#",
    },
    {
      name: "Fiddle Leaf Fig",
      price: "$65",
      image: {
        src: "/elements/subject/plants/item-2.webp",
        alt: "Fiddle Leaf Fig",
      },
      href: "#",
    },
    {
      name: "Snake Plant",
      price: "$35",
      image: {
        src: "/elements/subject/plants/item-3.webp",
        alt: "Snake Plant",
      },
      href: "#",
    },
    {
      name: "Pothos Golden",
      price: "$25",
      image: {
        src: "/elements/subject/plants/item-4.webp",
        alt: "Pothos Golden",
      },
      href: "#",
    },
  ],
  cta: { label: "View All Plants", href: "#" },
}

export function Products1({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  // Merge content with defaults
  const {
    badge = blockDefaults.badge,
    title = blockDefaults.title,
    products = blockDefaults.products,
    cta = blockDefaults.cta,
  } = content

  return (
    <section className={classNames.root}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div
          className={cn(
            "mb-12 flex flex-col items-center text-center",
            classNames.header?.root
          )}
        >
          {badge && (
            <p
              className={cn(
                "text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase",
                classNames.header?.badge
              )}
            >
              {badge}
            </p>
          )}
          <h2
            className={cn(
              "text-foreground mb-4 text-3xl font-bold md:text-5xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          {cta && (
            <Link href={cta.href} className={cn("mt-4", classNames.cta)}>
              <Button variant="secondary" className="rounded-full">
                {cta.label}
              </Button>
            </Link>
          )}
        </div>

        {/* PerspectiveCarousel for products */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-3xl">
            <Carousel_001
              images={products.map((product) => ({
                src: product.image.src,
                alt: product.image.alt,
              }))}
              showPagination
              loop
              autoplay
              spaceBetween={30}
            />
          </div>
        </div>

        {/* Product names and prices below carousel */}
        <div
          className={cn(
            "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
            classNames.grid
          )}
        >
          {products.map((product, i) => (
            <Link
              href={product.href}
              key={i}
              className={cn("group text-center", classNames.product?.root)}
            >
              <h3
                className={cn(
                  "text-foreground group-hover:text-primary font-medium transition-colors",
                  classNames.product?.name
                )}
              >
                {product.name}
              </h3>
              <p
                className={cn(
                  "text-primary font-semibold",
                  classNames.product?.price
                )}
              >
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Products1 as ProductsServicePlants }
