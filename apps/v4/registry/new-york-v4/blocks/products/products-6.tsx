"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import {
  PerspectiveContainer,
  PerspectiveSection,
} from "@/registry/new-york-v4/animations/perspective-section-transition/perspective-section-transition"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ProductsBlockProps {
  content?: {
    title?: string
    description?: string
    products?: Array<{
      name: string
      description: string
      price: number
      image: string
      features: string[]
      bestFor?: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const products6Defaults = {
  title: "Plant Care Bundles",
  description: "Find the perfect bundle for your plant parenting journey",
  products: [
    {
      name: "Starter Bundle",
      description: "Perfect for first-time plant parents",
      price: 49,
      image: "/elements/subject/plants/item-1.webp",
      features: ["1 Easy-Care Plant", "Ceramic Pot", "Care Guide"],
      bestFor: "Beginners",
      href: "#",
    },
    {
      name: "Enthusiast Bundle",
      description: "For growing your indoor jungle",
      price: 129,
      image: "/elements/subject/plants/item-2.webp",
      features: [
        "3 Curated Plants",
        "Premium Pots",
        "Soil Mix",
        "Plant Food",
        "Expert Support",
      ],
      bestFor: "Most Popular",
      href: "#",
    },
    {
      name: "Collector Bundle",
      description: "Rare and exotic plants for connoisseurs",
      price: 299,
      image: "/elements/subject/plants/item-3.webp",
      features: [
        "5 Rare Plants",
        "Designer Pots",
        "Premium Soil",
        "Plant Food",
        "Monthly Consultation",
        "Priority Support",
        "Replacement Guarantee",
      ],
      bestFor: "Plant Lovers",
      href: "#",
    },
  ],
}

export function Products6({
  content = {},
  classNames = {},
}: ProductsBlockProps) {
  const {
    title = products6Defaults.title,
    description = products6Defaults.description,
    products = products6Defaults.products,
  } = content

  return (
    <PerspectiveContainer height="400vh" className={classNames.root}>
      {/* Sticky header section */}
      <PerspectiveSection
        sticky
        scaleRange={[1, 0.9]}
        rotateRange={[0, -3]}
        className="bg-background"
      >
        <div className={cn("container px-6", classNames.container)}>
          {/* Header */}
          <BlockHeader
            title={title}
            description={description}
            spacing="compact"
            align="center"
            classNames={classNames.header}
          />

          {/* Comparison Cards with perspective effect */}
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product, i) => (
              <div
                key={i}
                className={cn(
                  "border-border relative overflow-hidden rounded-2xl border p-6 transition-all duration-300",
                  i === 1 && "ring-primary shadow-lg ring-2"
                )}
              >
                {product.bestFor && (
                  <span
                    className={cn(
                      "absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold",
                      i === 1
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {product.bestFor}
                  </span>
                )}

                {/* Image */}
                <div className="bg-muted relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Name & Price */}
                <div className="mb-6 text-center">
                  <h3 className="text-foreground text-xl font-bold">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {product.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-foreground text-4xl font-bold">
                      ${product.price}
                    </span>
                    <span className="text-muted-foreground">/bundle</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-6 space-y-3">
                  {product.features.map((feature, j) => (
                    <li
                      key={j}
                      className="text-foreground flex items-center gap-2 text-sm"
                    >
                      <DynamicIcon
                        name="Check"
                        className="h-4 w-4 text-green-500"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className="w-full"
                  variant={i === 1 ? "default" : "outline"}
                  asChild
                >
                  <Link href={product.href}>Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </PerspectiveSection>
    </PerspectiveContainer>
  )
}
