"use client"

import Image from "next/image"
import Link from "next/link"

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
import { Marquee } from "@/registry/new-york-v4/ui/marquee"

// Extended testimonial item with travel-specific fields
interface TravelTestimonialItem {
  quote: string
  author: string
  role?: string
  avatar?: { src: string; alt?: string }
  rating?: number
  destination?: string
  tripType?: string
  flag?: string
}

const testimonials14Defaults = {
  badge: "Global Community",
  title: "Travelers Around the World Love Us",
  description:
    "Join thousands of happy adventurers who have discovered unforgettable experiences.",
  ctaLabel: "Start Your Journey",
  ctaHref: "#",
  testimonials: [
    {
      quote:
        "The Northern Lights tour was magical! Our guide knew exactly where to go for the best views.",
      author: "Erik Lindberg",
      role: "Aurora Chaser",
      avatar: { src: "/avatars/01.webp", alt: "Erik Lindberg" },
      rating: 5,
      destination: "Iceland",
      tripType: "Nature Tour",
      flag: "IS",
    },
    {
      quote:
        "Our honeymoon in the Maldives was perfect. The overwater villa exceeded all expectations.",
      author: "Lisa & Tom",
      role: "Honeymooners",
      avatar: { src: "/avatars/02.webp", alt: "Lisa" },
      rating: 5,
      destination: "Maldives",
      tripType: "Romantic Escape",
      flag: "MV",
    },
    {
      quote:
        "The Japan cherry blossom tour was beautifully organized. Every ryokan was authentic and special.",
      author: "Yuki Tanaka",
      role: "Culture Enthusiast",
      avatar: { src: "/avatars/03.webp", alt: "Yuki Tanaka" },
      rating: 5,
      destination: "Japan",
      tripType: "Cultural Journey",
      flag: "JP",
    },
    {
      quote:
        "Safari in Tanzania was a once-in-a-lifetime experience. Saw the Big Five in just three days!",
      author: "James Okonkwo",
      role: "Wildlife Photographer",
      avatar: { src: "/avatars/04.webp", alt: "James Okonkwo" },
      rating: 5,
      destination: "Tanzania",
      tripType: "Safari Adventure",
      flag: "TZ",
    },
    {
      quote:
        "The Greek island hopping trip was flawless. Santorini sunsets are as amazing as they say.",
      author: "Maria Papadopoulos",
      role: "Island Explorer",
      avatar: { src: "/avatars/05.webp", alt: "Maria Papadopoulos" },
      rating: 5,
      destination: "Greece",
      tripType: "Island Hopping",
      flag: "GR",
    },
    {
      quote:
        "Machu Picchu at sunrise was breathtaking. The Inca Trail trek was challenging but worth it.",
      author: "Carlos Mendez",
      role: "Adventure Seeker",
      avatar: { src: "/avatars/07.webp", alt: "Carlos Mendez" },
      rating: 5,
      destination: "Peru",
      tripType: "Trekking Adventure",
      flag: "PE",
    },
    {
      quote:
        "The Australian road trip itinerary was perfect. Great Ocean Road views were spectacular!",
      author: "Sophie Williams",
      role: "Road Tripper",
      avatar: { src: "/avatars/08.webp", alt: "Sophie Williams" },
      rating: 5,
      destination: "Australia",
      tripType: "Road Trip",
      flag: "AU",
    },
    {
      quote:
        "Morocco was a feast for the senses. The desert glamping under the stars was unforgettable.",
      author: "Fatima El-Amin",
      role: "Desert Explorer",
      avatar: { src: "/avatars/09.webp", alt: "Fatima El-Amin" },
      rating: 5,
      destination: "Morocco",
      tripType: "Desert Experience",
      flag: "MA",
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
}: {
  testimonial: TravelTestimonialItem
}) {
  return (
    <div className="w-[340px] shrink-0 rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-md md:w-[380px] dark:border-sky-900/30 dark:bg-slate-900 dark:hover:border-sky-800/50">
      {/* Header with destination and trip type */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-2.5 py-1 text-xs font-medium text-sky-700 dark:bg-sky-900/50 dark:text-sky-300">
            <DynamicIcon name="MapPin" className="h-3 w-3" />
            {testimonial.destination}
          </span>
          {testimonial.tripType && (
            <span className="text-muted-foreground text-xs">
              {testimonial.tripType}
            </span>
          )}
        </div>
        {testimonial.rating && <StarRating rating={testimonial.rating} />}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground mb-4 text-sm leading-relaxed">
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
          <p className="text-foreground font-semibold">{testimonial.author}</p>
          {testimonial.role && (
            <p className="text-muted-foreground text-xs">{testimonial.role}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export function Testimonials14({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    badge = testimonials14Defaults.badge,
    title = testimonials14Defaults.title,
    description = testimonials14Defaults.description,
  } = content

  const ctaLabel =
    (content as typeof testimonials14Defaults).ctaLabel ??
    testimonials14Defaults.ctaLabel
  const ctaHref =
    (content as typeof testimonials14Defaults).ctaHref ??
    testimonials14Defaults.ctaHref

  const testimonials =
    (content.testimonials as TravelTestimonialItem[] | undefined) ??
    testimonials14Defaults.testimonials

  // Split testimonials for two rows
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2))
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2))

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-sky-50/50 to-white py-24 dark:from-slate-950 dark:to-slate-900",
        classNames.root
      )}
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/20" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-900/20" />

      <div className={cn("relative", classNames.container)}>
        <ScrollFade>
          <div className="container px-6">
            <BlockHeader
              badge={badge}
              title={title}
              description={description}
              badgeColor="brand"
              classNames={classNames.header}
            />
          </div>
        </ScrollFade>

        {/* Marquee wall */}
        <div className="relative mt-12 space-y-6">
          {/* First row */}
          <Marquee pauseOnHover className="[--duration:80s]">
            {firstRow.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </Marquee>

          {/* Second row - reversed */}
          <Marquee reverse pauseOnHover className="[--duration:80s]">
            {secondRow.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </Marquee>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-sky-50/50 to-transparent dark:from-slate-950" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-transparent to-sky-50/50 dark:to-slate-950" />
        </div>

        {/* Bottom CTA section */}
        <ScrollFade>
          <div className="container mt-16 px-6">
            <div className="rounded-2xl border border-sky-100 bg-white/80 p-8 text-center backdrop-blur-sm md:p-12 dark:border-sky-900/30 dark:bg-slate-900/80">
              <div className="mx-auto mb-6 flex justify-center -space-x-3">
                {testimonials.slice(0, 5).map((t, i) => (
                  <Avatar
                    key={i}
                    className="h-12 w-12 ring-4 ring-white dark:ring-slate-900"
                  >
                    {t.avatar && (
                      <AvatarImage src={t.avatar.src} alt={t.author} />
                    )}
                    <AvatarFallback className="bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300">
                      {t.author[0]}
                    </AvatarFallback>
                  </Avatar>
                ))}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white ring-4 ring-white dark:ring-slate-900">
                  +{testimonials.length - 5}K
                </div>
              </div>

              <h3 className="text-foreground mb-2 text-2xl font-bold">
                Join Our Travel Community
              </h3>
              <p className="text-muted-foreground mb-6">
                Over 50,000 travelers have explored the world with us
              </p>

              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-3 font-medium text-white transition-colors hover:bg-sky-700"
              >
                {ctaLabel}
                <DynamicIcon name="ArrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
