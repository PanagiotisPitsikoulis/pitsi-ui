"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type TestimonialsBlockProps } from "@/lib/blocks/testimonials.types"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"

// Extended testimonial item with travel-specific fields
interface TravelTestimonialItem {
  quote: string
  author: string
  role?: string
  avatar?: { src: string; alt?: string }
  rating?: number
  destination?: string
  destinationImage?: string
  tripHighlight?: string
  country?: string
}

const testimonials10Defaults = {
  badge: "Journey Reviews",
  title: "Where Will Your Story Begin?",
  description:
    "Real experiences from travelers who found their perfect adventure with us.",
  testimonials: [
    {
      quote:
        "Bali transformed my perspective on travel. The spiritual journey through Ubud's temples combined with beach relaxation was exactly what I needed.",
      author: "Jessica Taylor",
      role: "Wellness Enthusiast",
      avatar: { src: "/avatars/01.webp", alt: "Jessica Taylor" },
      rating: 5,
      destination: "Bali",
      country: "Indonesia",
      destinationImage: "/placeholders/blocks/hero/travel-1.webp",
      tripHighlight: "Temple ceremonies at sunrise",
    },
    {
      quote:
        "The Swiss Alps exceeded every expectation. From the chocolate train to hiking through wildflower meadows - pure magic.",
      author: "Thomas Weber",
      role: "Mountain Explorer",
      avatar: { src: "/avatars/02.webp", alt: "Thomas Weber" },
      rating: 5,
      destination: "Swiss Alps",
      country: "Switzerland",
      destinationImage: "/placeholders/blocks/hero/travel-2.webp",
      tripHighlight: "Glacier Express journey",
    },
    {
      quote:
        "Morocco was a feast for the senses. The riads, the souks, the desert under the stars - an unforgettable adventure.",
      author: "Amira Hassan",
      role: "Culture Seeker",
      avatar: { src: "/avatars/03.webp", alt: "Amira Hassan" },
      rating: 5,
      destination: "Marrakech",
      country: "Morocco",
      destinationImage: "/placeholders/blocks/hero/travel-3.webp",
      tripHighlight: "Sahara desert camping",
    },
    {
      quote:
        "New Zealand's South Island is nature's masterpiece. Every turn revealed another breathtaking landscape.",
      author: "Oliver Brown",
      role: "Photography Enthusiast",
      avatar: { src: "/avatars/04.webp", alt: "Oliver Brown" },
      rating: 5,
      destination: "Queenstown",
      country: "New Zealand",
      destinationImage: "/placeholders/blocks/hero/travel-4.webp",
      tripHighlight: "Milford Sound cruise",
    },
  ] as TravelTestimonialItem[],
}

function StarRating({
  rating,
  size = "sm",
}: {
  rating: number
  size?: "sm" | "lg"
}) {
  const iconSize = size === "lg" ? "h-5 w-5" : "h-4 w-4"
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <DynamicIcon
          key={i}
          name="Star"
          className={cn(
            iconSize,
            i < rating ? "fill-amber-400 text-amber-400" : "text-muted"
          )}
        />
      ))}
    </div>
  )
}

export function Testimonials10({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    badge = testimonials10Defaults.badge,
    title = testimonials10Defaults.title,
    description = testimonials10Defaults.description,
  } = content

  const testimonials =
    (content.testimonials as TravelTestimonialItem[] | undefined) ??
    testimonials10Defaults.testimonials

  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-slate-900 py-24",
        classNames.root
      )}
    >
      {/* Background destination image */}
      <div className="absolute inset-0 z-0">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              idx === activeIndex ? "opacity-30" : "opacity-0"
            )}
          >
            {t.destinationImage && (
              <Image
                src={t.destinationImage}
                alt={t.destination || "Destination"}
                fill
                className="object-cover"
              />
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60" />
      </div>

      <div className={cn("relative z-10 container px-6", classNames.container)}>
        <ScrollFade>
          <BlockHeader
            badge={badge}
            title={title}
            description={description}
            classNames={{
              root: "text-center",
              badge: "text-sky-400",
              title: "text-white",
              description: "text-slate-300",
              ...classNames.header,
            }}
          />
        </ScrollFade>

        {/* Main carousel area */}
        <div className="mx-auto max-w-5xl">
          {/* Featured testimonial card */}
          <ScrollFade>
            <div className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
              {/* Destination tag */}
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-sm font-medium text-sky-300">
                  <DynamicIcon name="MapPin" className="h-4 w-4" />
                  {activeTestimonial.destination}, {activeTestimonial.country}
                </span>
                {activeTestimonial.tripHighlight && (
                  <span className="hidden text-sm text-slate-400 md:inline">
                    Highlight: {activeTestimonial.tripHighlight}
                  </span>
                )}
              </div>

              {/* Rating */}
              {activeTestimonial.rating && (
                <div className="mb-4">
                  <StarRating rating={activeTestimonial.rating} size="lg" />
                </div>
              )}

              {/* Quote */}
              <blockquote className="mb-8 text-xl leading-relaxed text-white md:text-2xl">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 ring-2 ring-sky-500/30">
                  {activeTestimonial.avatar && (
                    <AvatarImage
                      src={activeTestimonial.avatar.src}
                      alt={
                        activeTestimonial.avatar.alt || activeTestimonial.author
                      }
                    />
                  )}
                  <AvatarFallback className="bg-sky-900 text-sky-300">
                    {activeTestimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold text-white">
                    {activeTestimonial.author}
                  </p>
                  {activeTestimonial.role && (
                    <p className="text-slate-400">{activeTestimonial.role}</p>
                  )}
                </div>
              </div>

              {/* Quote icon decoration */}
              <DynamicIcon
                name="Quote"
                className="absolute top-8 right-8 h-16 w-16 text-sky-500/10"
              />
            </div>
          </ScrollFade>

          {/* Thumbnail navigation */}
          <div className="flex justify-center gap-4">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "group relative overflow-hidden rounded-xl border-2 transition-all duration-300",
                  idx === activeIndex
                    ? "border-sky-500 ring-2 ring-sky-500/30"
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <div className="relative h-16 w-24 md:h-20 md:w-32">
                  {t.destinationImage && (
                    <Image
                      src={t.destinationImage}
                      alt={t.destination || "Destination"}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center bg-black/40 transition-colors",
                      idx === activeIndex
                        ? "bg-sky-500/20"
                        : "group-hover:bg-black/20"
                    )}
                  >
                    <span className="text-xs font-medium text-white">
                      {t.destination}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  idx === activeIndex
                    ? "w-8 bg-sky-500"
                    : "w-1.5 bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
