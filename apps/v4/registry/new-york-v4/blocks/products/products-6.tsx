"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
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
  title: "Compare Products",
  description: "Find the perfect fit for your needs",
  products: [
    {
      name: "Basic Plan",
      description: "Perfect for individuals getting started",
      price: 9,
      image: "/elements/landscape/plants/1.webp",
      features: ["5 Projects", "Basic Analytics", "Email Support"],
      bestFor: "Beginners",
      href: "#",
    },
    {
      name: "Pro Plan",
      description: "For growing teams and businesses",
      price: 29,
      image: "/elements/landscape/plants/2.webp",
      features: [
        "Unlimited Projects",
        "Advanced Analytics",
        "Priority Support",
        "Custom Integrations",
        "Team Collaboration",
      ],
      bestFor: "Most Popular",
      href: "#",
    },
    {
      name: "Enterprise",
      description: "For large-scale operations",
      price: 99,
      image: "/elements/landscape/plants/3.webp",
      features: [
        "Unlimited Projects",
        "Advanced Analytics",
        "24/7 Support",
        "Custom Integrations",
        "Team Collaboration",
        "SSO & Security",
        "Dedicated Manager",
      ],
      bestFor: "Large Teams",
      href: "#",
    },
  ],
}

const allFeatures = [
  "5 Projects",
  "Unlimited Projects",
  "Basic Analytics",
  "Advanced Analytics",
  "Email Support",
  "Priority Support",
  "24/7 Support",
  "Custom Integrations",
  "Team Collaboration",
  "SSO & Security",
  "Dedicated Manager",
]

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

        {/* Comparison Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <div
              key={i}
              className={cn(
                "border-border relative overflow-hidden rounded-2xl border p-6",
                i === 1 && "ring-primary ring-2"
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
              <div className="relative mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
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
                  <span className="text-muted-foreground">/month</span>
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
    </section>
  )
}
