"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type TestimonialsBlockProps } from "@/lib/blocks/testimonials.types"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
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
  tripImage?: string
  duration?: string
  verified?: boolean
}

const testimonials11Defaults = {
  badge: "Verified Reviews",
  title: "Memories That Last Forever",
  description:
    "Browse authentic reviews and photos from travelers who explored the world with us.",
  testimonials: [
    {
      quote:
        "The attention to detail was incredible. Every hotel, every experience was perfectly curated for our honeymoon.",
      author: "Sophie & Mark",
      role: "Honeymooners",
      avatar: { src: "/avatars/01.webp", alt: "Sophie" },
      rating: 5,
      destination: "Amalfi Coast, Italy",
      tripImage: "/placeholders/blocks/hero/travel-1.webp",
      duration: "10 days",
      verified: true,
    },
    {
      quote:
        "Best solo trip of my life! Felt safe, met amazing people, and discovered hidden gems I never would have found alone.",
      author: "Maya Johnson",
      role: "Solo Traveler",
      avatar: { src: "/avatars/02.webp", alt: "Maya Johnson" },
      rating: 5,
      destination: "Vietnam",
      tripImage: "/placeholders/blocks/hero/travel-2.webp",
      duration: "2 weeks",
      verified: true,
    },
    {
      quote:
        "Our group of 8 had the time of our lives. The private tours and local experiences were absolutely worth it.",
      author: "Robert Garcia",
      role: "Group Organizer",
      avatar: { src: "/avatars/03.webp", alt: "Robert Garcia" },
      rating: 5,
      destination: "Barcelona, Spain",
      tripImage: "/placeholders/blocks/hero/travel-3.webp",
      duration: "1 week",
      verified: true,
    },
    {
      quote:
        "The kids still talk about the wildlife! Seeing gorillas in their natural habitat changed our entire family.",
      author: "The Patel Family",
      role: "Family Travelers",
      avatar: { src: "/avatars/04.webp", alt: "Patel Family" },
      rating: 5,
      destination: "Rwanda",
      tripImage: "/placeholders/blocks/hero/travel-4.webp",
      duration: "8 days",
      verified: true,
    },
    {
      quote:
        "From the street food tours to the cooking classes, Thailand was a culinary paradise.",
      author: "David Lee",
      role: "Food Enthusiast",
      avatar: { src: "/avatars/05.webp", alt: "David Lee" },
      rating: 5,
      destination: "Bangkok, Thailand",
      duration: "12 days",
      verified: true,
    },
    {
      quote:
        "Peru was on my bucket list for years. Machu Picchu at sunrise was everything I dreamed of and more.",
      author: "Elena Rossi",
      role: "Adventure Seeker",
      avatar: { src: "/avatars/07.webp", alt: "Elena Rossi" },
      rating: 5,
      destination: "Cusco, Peru",
      duration: "9 days",
      verified: true,
    },
  ] as TravelTestimonialItem[],
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <DynamicIcon
          key={i}
          name="Star"
          className={cn(
            "h-3.5 w-3.5",
            i < rating ? "fill-amber-400 text-amber-400" : "text-muted"
          )}
        />
      ))}
    </div>
  )
}

function TestimonialCard({
  testimonial,
  index,
  featured = false,
  className,
}: {
  testimonial: TravelTestimonialItem
  index: number
  featured?: boolean
  className?: string
}) {
  const hasImage = !!testimonial.tripImage

  return (
    <SlideUp delay={index * 0.1}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-sky-100 bg-white transition-all duration-300 hover:border-sky-200 hover:shadow-lg dark:border-sky-900/30 dark:bg-slate-900 dark:hover:border-sky-800/50",
          featured && "md:row-span-2",
          className
        )}
      >
        {/* Trip image */}
        {hasImage && (
          <div
            className={cn(
              "relative overflow-hidden",
              featured ? "h-64" : "h-40"
            )}
          >
            <Image
              src={testimonial.tripImage!}
              alt={testimonial.destination || "Trip photo"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Destination overlay */}
            <div className="absolute right-4 bottom-4 left-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                  <DynamicIcon name="MapPin" className="h-3.5 w-3.5" />
                  {testimonial.destination}
                </span>
                {testimonial.duration && (
                  <span className="text-xs text-white/80">
                    {testimonial.duration}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className={cn("p-6", featured && "md:p-8")}>
          {/* Header with rating and verified badge */}
          <div className="mb-4 flex items-center justify-between">
            {testimonial.rating && <StarRating rating={testimonial.rating} />}
            {testimonial.verified && (
              <span className="inline-flex items-center gap-1 text-xs text-sky-600 dark:text-sky-400">
                <DynamicIcon name="BadgeCheck" className="h-4 w-4" />
                Verified
              </span>
            )}
          </div>

          {/* Destination tag for cards without images */}
          {!hasImage && testimonial.destination && (
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-900/50 dark:text-sky-300">
                <DynamicIcon name="MapPin" className="h-3 w-3" />
                {testimonial.destination}
                {testimonial.duration && ` - ${testimonial.duration}`}
              </span>
            </div>
          )}

          {/* Quote */}
          <blockquote
            className={cn(
              "text-foreground mb-6 leading-relaxed",
              featured ? "text-lg" : "text-sm"
            )}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              {testimonial.avatar && (
                <AvatarImage
                  src={testimonial.avatar.src}
                  alt={testimonial.avatar.alt || testimonial.author}
                />
              )}
              <AvatarFallback className="bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300">
                {testimonial.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-foreground font-semibold">
                {testimonial.author}
              </p>
              {testimonial.role && (
                <p className="text-muted-foreground text-sm">
                  {testimonial.role}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </SlideUp>
  )
}

export function Testimonials11({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    badge = testimonials11Defaults.badge,
    title = testimonials11Defaults.title,
    description = testimonials11Defaults.description,
  } = content

  const testimonials =
    (content.testimonials as TravelTestimonialItem[] | undefined) ??
    testimonials11Defaults.testimonials

  // First testimonial is featured (larger)
  const featuredTestimonial = testimonials[0]
  const otherTestimonials = testimonials.slice(1)

  return (
    <section
      className={cn(
        "bg-gradient-to-b from-white to-sky-50/50 py-24 dark:from-slate-900 dark:to-slate-950",
        classNames.root
      )}
    >
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          badgeColor="brand"
          classNames={classNames.header}
        />

        {/* Masonry-style grid */}
        <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3")}>
          {/* Featured testimonial - spans 2 rows */}
          <TestimonialCard
            testimonial={featuredTestimonial}
            index={0}
            featured
            className={classNames.testimonial?.root}
          />

          {/* Other testimonials */}
          {otherTestimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={testimonial}
              index={idx + 1}
              className={classNames.testimonial?.root}
            />
          ))}
        </div>

        {/* CTA section */}
        <SlideUp delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Ready to create your own unforgettable memories?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 font-medium text-white transition-colors hover:bg-sky-700"
            >
              Start Planning Your Trip
              <DynamicIcon name="ArrowRight" className="h-4 w-4" />
            </a>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}
