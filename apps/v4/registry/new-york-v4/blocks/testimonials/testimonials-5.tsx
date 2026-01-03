"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"

interface TestimonialsBlockProps {
  content?: {
    title?: string
    stats?: {
      rating: number
      totalReviews: number
      platforms: Array<{ name: string; rating: number }>
    }
    testimonials?: Array<{
      quote: string
      author: string
      avatar: string
      rating: number
      date: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string }
  }
}

const testimonials5Defaults = {
  title: "Customer Reviews",
  stats: {
    rating: 4.9,
    totalReviews: 2847,
    platforms: [
      { name: "G2", rating: 4.8 },
      { name: "Capterra", rating: 4.9 },
      { name: "Trustpilot", rating: 4.7 },
    ],
  },
  testimonials: [
    {
      quote:
        "Absolutely love this product. It has made my workflow so much more efficient. Highly recommend to anyone looking for a quality solution.",
      author: "Sarah M.",
      avatar: "/avatars/01.webp",
      rating: 5,
      date: "2 days ago",
    },
    {
      quote:
        "Great value for money. The features are exactly what I needed and the interface is intuitive.",
      author: "John D.",
      avatar: "/avatars/02.webp",
      rating: 5,
      date: "1 week ago",
    },
    {
      quote:
        "Customer support is phenomenal. They helped me set everything up and were very patient with my questions.",
      author: "Emily R.",
      avatar: "/avatars/03.webp",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      quote:
        "Been using this for 6 months now. It's become an essential part of my daily routine. Very satisfied!",
      author: "Michael T.",
      avatar: "/avatars/04.webp",
      rating: 4,
      date: "3 weeks ago",
    },
    {
      quote:
        "Simple, effective, and reliable. Everything a good product should be.",
      author: "Lisa K.",
      avatar: "/avatars/05.webp",
      rating: 5,
      date: "1 month ago",
    },
    {
      quote:
        "The best tool in its category. I've tried many alternatives but this one stands out.",
      author: "David W.",
      avatar: "/avatars/06.webp",
      rating: 5,
      date: "1 month ago",
    },
  ],
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <DynamicIcon
          key={i}
          name="Star"
          className={cn(
            "h-4 w-4",
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          )}
        />
      ))}
    </div>
  )
}

export function Testimonials5({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    title = testimonials5Defaults.title,
    stats = testimonials5Defaults.stats,
    testimonials = testimonials5Defaults.testimonials,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <h2
          className={cn(
            "text-foreground mb-12 text-center text-3xl font-bold md:text-4xl",
            classNames.header?.title
          )}
        >
          {title}
        </h2>

        {/* Aggregate Rating */}
        <div className="bg-background mx-auto mb-12 max-w-2xl rounded-xl p-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="text-foreground text-5xl font-bold">
              {stats.rating}
            </span>
            <div className="flex flex-col items-start">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <DynamicIcon
                    key={i}
                    name="Star"
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">
                {stats.totalReviews.toLocaleString()} reviews
              </span>
            </div>
          </div>

          <div className="border-border flex items-center justify-center gap-6 border-t pt-4">
            {stats.platforms.map((platform, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm font-medium">
                  {platform.name}
                </span>
                <span className="text-foreground text-sm font-semibold">
                  {platform.rating}
                </span>
                <DynamicIcon
                  name="Star"
                  className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review, i) => (
            <div key={i} className="bg-background rounded-xl p-5">
              <div className="mb-3 flex items-center justify-between">
                <StarRating rating={review.rating} />
                <span className="text-muted-foreground text-xs">
                  {review.date}
                </span>
              </div>
              <p className="text-foreground mb-4 text-sm">{review.quote}</p>
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-foreground text-sm font-medium">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
