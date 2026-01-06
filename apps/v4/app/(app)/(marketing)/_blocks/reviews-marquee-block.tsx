"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import { Marquee } from "@/registry/new-york-v4/ui/marquee"

export interface Review {
  name: string
  username: string
  body: string
  img: string
}

export interface ReviewsMarqueeBlockProps {
  reviews: Review[]
  duration?: string
  className?: string
}

function ReviewCard({ img, name, username, body }: Review) {
  return (
    <figure
      className={cn(
        "bg-card relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-border hover:bg-accent transition-colors"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="relative size-8 overflow-hidden rounded-full">
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover"
            sizes="32px"
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-muted-foreground text-xs">{username}</p>
        </div>
      </div>
      <blockquote className="text-muted-foreground mt-2 text-sm">
        {body}
      </blockquote>
    </figure>
  )
}

export function ReviewsMarqueeBlock({
  reviews,
  duration = "20s",
  className,
}: ReviewsMarqueeBlockProps) {
  const firstRow = reviews.slice(0, reviews.length / 2)
  const secondRow = reviews.slice(reviews.length / 2)

  return (
    <div
      className={cn(
        "bg-background relative flex w-full flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      <Marquee
        pauseOnHover
        className="[--duration:var(--marquee-duration)]"
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:var(--marquee-duration)]"
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l" />
    </div>
  )
}
