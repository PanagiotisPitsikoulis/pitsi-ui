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
  tripType?: string
  travelDate?: string
}

const testimonials9Defaults = {
  badge: "Traveler Stories",
  title: "Adventures That Changed Lives",
  description:
    "Hear from travelers who discovered unforgettable experiences with us.",
  testimonials: [
    {
      quote:
        "The Santorini trip exceeded all expectations. The sunset views from our villa were absolutely magical, and the local food tours were incredible.",
      author: "Emma Rodriguez",
      role: "Adventure Seeker",
      avatar: { src: "/avatars/01.webp", alt: "Emma Rodriguez" },
      rating: 5,
      destination: "Santorini, Greece",
      tripType: "Romantic Getaway",
      travelDate: "September 2024",
    },
    {
      quote:
        "Our family safari in Kenya was a dream come true. The kids still talk about seeing elephants up close. Perfectly organized from start to finish.",
      author: "Michael Chen",
      role: "Family Traveler",
      avatar: { src: "/avatars/02.webp", alt: "Michael Chen" },
      rating: 5,
      destination: "Maasai Mara, Kenya",
      tripType: "Family Safari",
      travelDate: "August 2024",
    },
    {
      quote:
        "I've traveled with many agencies, but this Japan itinerary was perfectly curated. Every temple, every ryokan, every meal - absolutely perfect.",
      author: "Sarah Mitchell",
      role: "Cultural Explorer",
      avatar: { src: "/avatars/03.webp", alt: "Sarah Mitchell" },
      rating: 5,
      destination: "Kyoto, Japan",
      tripType: "Cultural Immersion",
      travelDate: "April 2024",
    },
    {
      quote:
        "The Maldives overwater bungalow was paradise. Waking up to turquoise waters every morning is something I'll never forget.",
      author: "David Park",
      role: "Luxury Traveler",
      avatar: { src: "/avatars/04.webp", alt: "David Park" },
      rating: 5,
      destination: "Maldives",
      tripType: "Luxury Retreat",
      travelDate: "December 2024",
    },
    {
      quote:
        "Hiking Patagonia was challenging but life-changing. The guides were knowledgeable and the landscapes were out of this world.",
      author: "Ana Martinez",
      role: "Adventure Enthusiast",
      avatar: { src: "/avatars/05.webp", alt: "Ana Martinez" },
      rating: 5,
      destination: "Torres del Paine, Chile",
      tripType: "Adventure Trek",
      travelDate: "February 2024",
    },
    {
      quote:
        "The Northern Lights tour in Iceland was bucket-list worthy. Our guide found the perfect spot, and we saw the most amazing display.",
      author: "James Wilson",
      role: "Nature Lover",
      avatar: { src: "/avatars/07.webp", alt: "James Wilson" },
      rating: 5,
      destination: "Reykjavik, Iceland",
      tripType: "Natural Wonders",
      travelDate: "November 2024",
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
            "h-4 w-4",
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
  className,
}: {
  testimonial: TravelTestimonialItem
  index: number
  className?: string
}) {
  return (
    <SlideUp delay={index * 0.1}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/50 p-6 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-md dark:border-sky-900/30 dark:from-slate-900 dark:to-sky-950/30 dark:hover:border-sky-800/50",
          className
        )}
      >
        {/* Destination badge */}
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-900/50 dark:text-sky-300">
            <DynamicIcon name="MapPin" className="h-3 w-3" />
            {testimonial.destination}
          </span>
          {testimonial.tripType && (
            <span className="text-muted-foreground text-xs">
              {testimonial.tripType}
            </span>
          )}
        </div>

        {/* Rating */}
        {testimonial.rating && (
          <div className="mb-3">
            <StarRating rating={testimonial.rating} />
          </div>
        )}

        {/* Quote */}
        <blockquote className="text-foreground mb-6 leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Author info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-sky-100 dark:ring-sky-900/50">
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
                  .join("")}
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
          {testimonial.travelDate && (
            <span className="text-muted-foreground text-xs">
              {testimonial.travelDate}
            </span>
          )}
        </div>

        {/* Decorative airplane icon */}
        <div className="pointer-events-none absolute -right-4 -bottom-4 opacity-5 transition-opacity group-hover:opacity-10">
          <DynamicIcon name="Plane" className="h-24 w-24 rotate-45" />
        </div>
      </div>
    </SlideUp>
  )
}

export function Testimonials9({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    badge = testimonials9Defaults.badge,
    title = testimonials9Defaults.title,
    description = testimonials9Defaults.description,
  } = content

  const testimonials =
    (content.testimonials as TravelTestimonialItem[] | undefined) ??
    testimonials9Defaults.testimonials

  return (
    <section
      className={cn(
        "bg-gradient-to-b from-sky-50/50 to-white py-24 dark:from-slate-950 dark:to-slate-900",
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

        {/* Testimonials grid */}
        <div
          className={cn(
            "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
            classNames.grid
          )}
        >
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={testimonial}
              index={idx}
              className={classNames.testimonial?.root}
            />
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-sky-100 pt-12 md:grid-cols-4 dark:border-sky-900/30">
          {[
            { value: "50K+", label: "Happy Travelers" },
            { value: "120+", label: "Destinations" },
            { value: "4.9", label: "Average Rating" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, idx) => (
            <SlideUp key={idx} delay={idx * 0.1}>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600 dark:text-sky-400">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}
