"use client"

import Image from "next/image"
import React from "react"

import { cn } from "@/lib/utils"

export interface SolutionItem {
  type: "image" | "card"
  image?: string
  title?: string
  description?: string
}

export interface FeatureSolutionsGridBlockProps {
  tagline?: string
  headline?: string
  headlineAccent?: string
  description?: string
  items?: SolutionItem[]
  className?: string
}

const defaultTagline = "Deep Customization"
const defaultHeadline = "Every Detail"
const defaultHeadlineAccent = "Under Your Control"
const defaultDescription = "Professional tools with mathematical foundations. From industry presets to granular controls."

const defaultItems: SolutionItem[] = [
  {
    type: "image",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    type: "card",
    title: "Multi-Layer Shadows",
    description: "Up to 5 shadow layers with individual control. Blur, spread, offset, opacity — all fine-tunable.",
  },
  {
    type: "image",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
  },
  {
    type: "card",
    title: "48 Easing Presets",
    description: "From Apple's spring curves to Material Design's motion. Every preset mathematically derived.",
  },
  {
    type: "image",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
  },
  {
    type: "card",
    title: "Typography Scales",
    description: "Major Third, Perfect Fourth, Golden Ratio. Mathematical scales for perfect harmony.",
  },
  {
    type: "image",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    type: "card",
    title: "Color Intelligence",
    description: "OKLCH perceptual uniformity. 40+ semantic tokens. Automatic contrast ratios.",
  },
]

export function FeatureSolutionsGridBlock({
  tagline = defaultTagline,
  headline = defaultHeadline,
  headlineAccent = defaultHeadlineAccent,
  description = defaultDescription,
  items = defaultItems,
  className,
}: FeatureSolutionsGridBlockProps) {
  // Determine order classes for grid items
  const getOrderClass = (index: number) => {
    const orders = [
      "md:order-1 xl:order-1",
      "md:order-2 xl:order-2",
      "md:order-4 xl:order-3",
      "md:order-3 xl:order-4",
      "md:order-5 xl:order-6",
      "md:order-6 xl:order-5",
      "md:order-8",
      "md:order-7",
    ]
    return orders[index] || ""
  }

  return (
    <section className={cn(className)}>
      <div className="container px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-brand text-sm font-medium tracking-widest uppercase">
            {tagline}
          </p>
          <h2 className="display mt-6 text-4xl tracking-tight md:text-5xl lg:text-6xl">
            {headline}
            <br />
            <span className="text-foreground">{headlineAccent}</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-base md:text-lg">
            {description}
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            item.type === "image" ? (
              <div
                key={index}
                className={cn(
                  "relative aspect-square size-full rounded-3xl overflow-hidden",
                  getOrderClass(index)
                )}
              >
                <Image
                  src={item.image || ""}
                  alt="placeholder"
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                key={index}
                className={cn(
                  "bg-background flex flex-col justify-between gap-12 rounded-3xl border p-8 shadow-xs lg:p-12",
                  getOrderClass(index)
                )}
              >
                <h3 className="text-xl font-medium lg:text-2xl">{item.title}</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  {item.description}
                </p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
