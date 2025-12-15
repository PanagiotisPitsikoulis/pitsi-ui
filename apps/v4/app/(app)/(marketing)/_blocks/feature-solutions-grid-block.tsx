"use client"

import React from "react"

import { cn } from "@/lib/utils"

import { Badge } from "@/registry/new-york-v4/ui/badge"

export interface SolutionItem {
  type: "image" | "card"
  image?: string
  title?: string
  description?: string
  href?: string
  backgroundColor?: string
  textColor?: string
}

export interface FeatureSolutionsGridBlockProps {
  badge?: string
  headline?: string
  description?: string
  items?: SolutionItem[]
  className?: string
}

const defaultBadge = "Solutions"
const defaultHeadline = "Transform Your Experience"
const defaultDescription = "Discover innovative solutions to elevate your journey. From basics to advanced features, experience excellence at each level."

const defaultItems: SolutionItem[] = [
  {
    type: "image",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-ee1-cRqJQtA-unsplash.jpg",
  },
  {
    type: "card",
    title: "Smart Solutions",
    description: "Experience groundbreaking capabilities that redefine possibilities and unlock through innovation.",
    href: "#",
    backgroundColor: "bg-muted/50",
  },
  {
    type: "image",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-Ych4LcKFA5E-unsplash.jpg",
  },
  {
    type: "card",
    title: "Advanced Analytics",
    description: "Take control of your journey with powerful tools and insights. Achieve goals with personalized solutions.",
    href: "#",
    backgroundColor: "bg-[#d1efef]",
    textColor: "text-white",
  },
  {
    type: "image",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-8FIN2qa2vQM-unsplash.jpg",
  },
  {
    type: "card",
    title: "Custom Integration",
    description: "Enhance your experience with advanced capabilities. Discover new possibilities for growth and success.",
    href: "#",
    backgroundColor: "bg-[#d1efef]",
  },
  {
    type: "image",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-ZXLGP2Qh3Mo-unsplash.jpg",
  },
  {
    type: "card",
    title: "Expert Support",
    description: "Access insights and recommendations tailored to your needs. Navigate your path with confidence.",
    href: "#",
    backgroundColor: "bg-muted/50",
  },
]

export function FeatureSolutionsGridBlock({
  badge = defaultBadge,
  headline = defaultHeadline,
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
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge variant="outline" className="rounded-full">
            {badge}
          </Badge>
          <h2 className="text-4xl font-medium md:text-5xl">{headline}</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">{description}</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            item.type === "image" ? (
              <img
                key={index}
                src={item.image}
                alt="placeholder"
                className={cn(
                  "aspect-square size-full rounded-2xl object-cover",
                  getOrderClass(index)
                )}
              />
            ) : (
              <div
                key={index}
                className={cn(
                  "flex flex-col justify-between gap-20 rounded-2xl p-12 md:gap-32",
                  item.backgroundColor,
                  getOrderClass(index)
                )}
              >
                <h3 className={cn("text-2xl", item.textColor)}>{item.title}</h3>
                <div>
                  <p className={cn("mb-8", item.textColor ? `${item.textColor}/80` : "text-muted-foreground")}>
                    {item.description}
                  </p>
                  <a
                    href={item.href || "#"}
                    className={cn("text-sm underline", item.textColor ? `${item.textColor}/80` : "")}
                  >
                    More Information
                  </a>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
