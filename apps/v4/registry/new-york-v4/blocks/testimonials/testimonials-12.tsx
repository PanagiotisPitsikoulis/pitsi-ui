"use client"

import Image from "next/image"
import Link from "next/link"

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

// Extended testimonial item with video-specific fields
interface VideoTestimonialItem {
  quote: string
  author: string
  role?: string
  avatar?: { src: string; alt?: string }
  rating?: number
  destination?: string
  thumbnail?: string
  videoUrl?: string
  duration?: string
  views?: string
}

const testimonials12Defaults = {
  badge: "Video Stories",
  title: "Watch Their Adventures Unfold",
  description:
    "Real travelers sharing their genuine experiences and unforgettable moments.",
  ctaLabel: "View All Stories",
  ctaHref: "#",
  testimonials: [
    {
      quote: "The local guides made all the difference...",
      author: "Sarah Chen",
      role: "Travel Vlogger",
      avatar: { src: "/avatars/01.webp", alt: "Sarah Chen" },
      rating: 5,
      destination: "Tokyo, Japan",
      thumbnail: "/placeholders/blocks/hero/travel-1.webp",
      videoUrl: "#",
      duration: "3:24",
      views: "12.5K views",
    },
    {
      quote: "This was the trip of a lifetime...",
      author: "Marcus Williams",
      role: "Photographer",
      avatar: { src: "/avatars/02.webp", alt: "Marcus Williams" },
      rating: 5,
      destination: "Patagonia, Argentina",
      thumbnail: "/placeholders/blocks/hero/travel-2.webp",
      videoUrl: "#",
      duration: "5:12",
      views: "8.3K views",
    },
    {
      quote: "Every detail was perfect...",
      author: "Emma & James",
      role: "Honeymooners",
      avatar: { src: "/avatars/03.webp", alt: "Emma" },
      rating: 5,
      destination: "Maldives",
      thumbnail: "/placeholders/blocks/hero/travel-3.webp",
      videoUrl: "#",
      duration: "4:45",
      views: "15.2K views",
    },
    {
      quote: "My kids are already asking when we can go back...",
      author: "The Martinez Family",
      role: "Family Adventure",
      avatar: { src: "/avatars/04.webp", alt: "Martinez Family" },
      rating: 5,
      destination: "Costa Rica",
      thumbnail: "/placeholders/blocks/hero/travel-4.webp",
      videoUrl: "#",
      duration: "6:08",
      views: "9.7K views",
    },
  ] as VideoTestimonialItem[],
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
            i < rating ? "fill-amber-400 text-amber-400" : "text-white/30"
          )}
        />
      ))}
    </div>
  )
}

function VideoCard({
  testimonial,
  index,
  featured = false,
}: {
  testimonial: VideoTestimonialItem
  index: number
  featured?: boolean
}) {
  return (
    <SlideUp delay={index * 0.1}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl",
          featured ? "aspect-[16/10]" : "aspect-video"
        )}
      >
        {/* Thumbnail */}
        {testimonial.thumbnail && (
          <Image
            src={testimonial.thumbnail}
            alt={testimonial.destination || "Video thumbnail"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play button */}
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white md:h-20 md:w-20">
            <DynamicIcon name="Play" className="ml-1 h-7 w-7 text-slate-900" />
          </div>
        </button>

        {/* Duration badge */}
        {testimonial.duration && (
          <span className="absolute top-4 right-4 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {testimonial.duration}
          </span>
        )}

        {/* Bottom content */}
        <div className="absolute right-0 bottom-0 left-0 p-4 md:p-6">
          {/* Destination */}
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <DynamicIcon name="MapPin" className="h-3 w-3" />
              {testimonial.destination}
            </span>
            {testimonial.rating && <StarRating rating={testimonial.rating} />}
          </div>

          {/* Author info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 ring-2 ring-white/30">
                {testimonial.avatar && (
                  <AvatarImage
                    src={testimonial.avatar.src}
                    alt={testimonial.avatar.alt || testimonial.author}
                  />
                )}
                <AvatarFallback className="bg-sky-600 text-white">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                {testimonial.role && (
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                )}
              </div>
            </div>
            {testimonial.views && (
              <span className="hidden text-xs text-white/60 md:block">
                {testimonial.views}
              </span>
            )}
          </div>
        </div>
      </div>
    </SlideUp>
  )
}

export function Testimonials12({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    badge = testimonials12Defaults.badge,
    title = testimonials12Defaults.title,
    description = testimonials12Defaults.description,
  } = content

  const ctaLabel =
    (content as typeof testimonials12Defaults).ctaLabel ??
    testimonials12Defaults.ctaLabel
  const ctaHref =
    (content as typeof testimonials12Defaults).ctaHref ??
    testimonials12Defaults.ctaHref

  const testimonials =
    (content.testimonials as VideoTestimonialItem[] | undefined) ??
    testimonials12Defaults.testimonials

  // First testimonial is featured
  const featuredVideo = testimonials[0]
  const otherVideos = testimonials.slice(1)

  return (
    <section
      className={cn(
        "bg-gradient-to-b from-slate-900 to-slate-950 py-24",
        classNames.root
      )}
    >
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          classNames={{
            root: "text-center",
            badge: "text-sky-400",
            title: "text-white",
            description: "text-slate-400",
            ...classNames.header,
          }}
        />

        {/* Video grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Featured video */}
          <div className="lg:row-span-2">
            <VideoCard testimonial={featuredVideo} index={0} featured />
          </div>

          {/* Other videos */}
          {otherVideos.map((testimonial, idx) => (
            <VideoCard key={idx} testimonial={testimonial} index={idx + 1} />
          ))}
        </div>

        {/* CTA */}
        <SlideUp delay={0.5}>
          <div className="mt-12 text-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              {ctaLabel}
              <DynamicIcon name="ArrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </SlideUp>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-12">
          {[
            { icon: "Video", label: "500+ Video Reviews" },
            { icon: "Users", label: "50K+ Happy Travelers" },
            { icon: "Globe", label: "100+ Destinations" },
            { icon: "Award", label: "4.9 Average Rating" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-400">
              <DynamicIcon name={item.icon} className="h-5 w-5 text-sky-500" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
