"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type TestimonialsBlockProps } from "@/lib/blocks/testimonials.types"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"

// Extended testimonial with journey details
interface FeaturedTraveler {
  quote: string
  author: string
  role?: string
  avatar?: { src: string; alt?: string }
  rating?: number
  coverImage?: string
  socialHandle?: string
  tripsSince?: string
  favoriteDestination?: string
  journeyHighlights?: Array<{
    destination: string
    date: string
    image?: string
    highlight: string
  }>
}

const testimonials13Defaults = {
  badge: "Traveler Spotlight",
  title: "Meet Our Featured Explorer",
  featuredTraveler: {
    quote:
      "Travel has taught me that the world is both incredibly vast and surprisingly connected. Every journey with this agency has opened my eyes to new cultures, cuisines, and friendships that have changed my life forever.",
    author: "Alexandra Foster",
    role: "World Explorer & Travel Writer",
    avatar: { src: "/avatars/01.webp", alt: "Alexandra Foster" },
    rating: 5,
    coverImage: "/placeholders/blocks/hero/travel-1.webp",
    socialHandle: "@alexplores",
    tripsSince: "2019",
    favoriteDestination: "Cinque Terre, Italy",
    journeyHighlights: [
      {
        destination: "Kyoto, Japan",
        date: "Spring 2024",
        image: "/placeholders/blocks/hero/travel-2.webp",
        highlight: "Cherry blossom season at Arashiyama",
      },
      {
        destination: "Cappadocia, Turkey",
        date: "Fall 2023",
        image: "/placeholders/blocks/hero/travel-3.webp",
        highlight: "Hot air balloon ride at sunrise",
      },
      {
        destination: "Norwegian Fjords",
        date: "Summer 2023",
        image: "/placeholders/blocks/hero/travel-4.webp",
        highlight: "Midnight sun kayaking adventure",
      },
      {
        destination: "Machu Picchu, Peru",
        date: "Winter 2022",
        image: "/placeholders/blocks/hero/travel-1.webp",
        highlight: "Sunrise at the Sun Gate",
      },
    ],
  } as FeaturedTraveler,
  stats: [
    { value: "15+", label: "Countries Explored" },
    { value: "42", label: "Trips Completed" },
    { value: "5.0", label: "Average Rating" },
    { value: "2019", label: "Member Since" },
  ],
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <DynamicIcon
          key={i}
          name="Star"
          className={cn(
            "h-5 w-5",
            i < rating ? "fill-amber-400 text-amber-400" : "text-slate-300"
          )}
        />
      ))}
    </div>
  )
}

export function Testimonials13({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    badge = testimonials13Defaults.badge,
    title = testimonials13Defaults.title,
  } = content

  const featuredTraveler =
    (content as typeof testimonials13Defaults).featuredTraveler ??
    testimonials13Defaults.featuredTraveler

  const stats =
    (content as typeof testimonials13Defaults).stats ??
    testimonials13Defaults.stats

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-white py-24 dark:bg-slate-900",
        classNames.root
      )}
    >
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_currentColor_1px,_transparent_0)] [background-size:40px_40px]" />
      </div>

      <div className={cn("relative container px-6", classNames.container)}>
        {/* Header */}
        <ScrollFade>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-medium tracking-[0.3em] text-sky-600 uppercase dark:text-sky-400">
              {badge}
            </span>
            <h2 className="text-foreground text-3xl font-bold md:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
        </ScrollFade>

        {/* Main content grid */}
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Left: Featured traveler card */}
          <SlideUp>
            <div className="relative">
              {/* Cover image */}
              {featuredTraveler.coverImage && (
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={featuredTraveler.coverImage}
                    alt="Featured traveler cover"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Social handle badge */}
                  {featuredTraveler.socialHandle && (
                    <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-900 backdrop-blur-sm">
                      {featuredTraveler.socialHandle}
                    </div>
                  )}

                  {/* Avatar overlay */}
                  <div className="absolute -bottom-8 left-6">
                    <Avatar className="h-20 w-20 ring-4 ring-white dark:ring-slate-900">
                      {featuredTraveler.avatar && (
                        <AvatarImage
                          src={featuredTraveler.avatar.src}
                          alt={
                            featuredTraveler.avatar.alt ||
                            featuredTraveler.author
                          }
                        />
                      )}
                      <AvatarFallback className="bg-sky-600 text-lg text-white">
                        {featuredTraveler.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              )}

              {/* Traveler info */}
              <div className="pt-6 pl-6">
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="text-foreground text-2xl font-bold">
                    {featuredTraveler.author}
                  </h3>
                  <DynamicIcon
                    name="BadgeCheck"
                    className="h-6 w-6 text-sky-500"
                  />
                </div>
                {featuredTraveler.role && (
                  <p className="text-muted-foreground mb-4">
                    {featuredTraveler.role}
                  </p>
                )}

                {/* Rating */}
                {featuredTraveler.rating && (
                  <div className="mb-6">
                    <StarRating rating={featuredTraveler.rating} />
                  </div>
                )}

                {/* Quote */}
                <blockquote className="text-foreground relative mb-6 text-lg leading-relaxed">
                  <DynamicIcon
                    name="Quote"
                    className="absolute -top-2 -left-4 h-8 w-8 text-sky-200 dark:text-sky-800"
                  />
                  <span className="relative">
                    &ldquo;{featuredTraveler.quote}&rdquo;
                  </span>
                </blockquote>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-sky-50 p-3 dark:bg-sky-950/50">
                    <p className="text-muted-foreground text-xs">
                      Member Since
                    </p>
                    <p className="text-foreground font-semibold">
                      {featuredTraveler.tripsSince}
                    </p>
                  </div>
                  <div className="rounded-lg bg-sky-50 p-3 dark:bg-sky-950/50">
                    <p className="text-muted-foreground text-xs">
                      Favorite Destination
                    </p>
                    <p className="text-foreground font-semibold">
                      {featuredTraveler.favoriteDestination}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Right: Journey timeline */}
          <div className="lg:pt-8">
            <SlideUp delay={0.2}>
              <h3 className="text-foreground mb-8 flex items-center gap-2 text-lg font-semibold">
                <DynamicIcon name="Map" className="h-5 w-5 text-sky-600" />
                Journey Highlights
              </h3>
            </SlideUp>

            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 left-4 w-px bg-sky-200 dark:bg-sky-800" />

              {featuredTraveler.journeyHighlights?.map((journey, idx) => (
                <SlideUp key={idx} delay={0.3 + idx * 0.1}>
                  <div className="group relative flex gap-4 pl-10">
                    {/* Timeline dot */}
                    <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 ring-4 ring-white transition-colors group-hover:bg-sky-200 dark:bg-sky-900 dark:ring-slate-900 dark:group-hover:bg-sky-800">
                      <DynamicIcon
                        name="MapPin"
                        className="h-4 w-4 text-sky-600 dark:text-sky-400"
                      />
                    </div>

                    {/* Journey card */}
                    <div className="flex-1 overflow-hidden rounded-xl border border-sky-100 bg-white transition-shadow hover:shadow-md dark:border-sky-900/50 dark:bg-slate-800">
                      <div className="flex">
                        {journey.image && (
                          <div className="relative hidden w-32 shrink-0 sm:block">
                            <Image
                              src={journey.image}
                              alt={journey.destination}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 p-4">
                          <div className="mb-1 flex items-center justify-between">
                            <h4 className="text-foreground font-semibold">
                              {journey.destination}
                            </h4>
                            <span className="text-muted-foreground text-xs">
                              {journey.date}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {journey.highlight}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <SlideUp delay={0.6}>
          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-sky-100 pt-12 md:grid-cols-4 dark:border-sky-900/50">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-sky-600 dark:text-sky-400">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </SlideUp>
      </div>
    </section>
  )
}
