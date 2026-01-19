"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Marquee } from "@/registry/new-york-v4/ui/marquee"

interface TestimonialsBlockProps {
  content?: {
    title?: string
    description?: string
    ctaLabel?: string
    ctaHref?: string
    testimonials?: Array<{
      quote: string
      author: string
      role: string
      company: string
      avatar: string
      rating: number
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const testimonials7Defaults = {
  title: "Trusted by Thousands",
  description:
    "Join the growing community of satisfied customers who have transformed their businesses with our platform.",
  ctaLabel: "See all reviews",
  ctaHref: "#",
  testimonials: [
    {
      quote:
        "This product has completely transformed how we work. Our team productivity has increased by 40%.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      avatar: "/avatars/01.webp",
      rating: 5,
    },
    {
      quote:
        "The best investment we've made this year. The ROI was visible within the first month.",
      author: "Michael Chen",
      role: "CTO",
      company: "GlobalScale",
      avatar: "/avatars/02.webp",
      rating: 5,
    },
    {
      quote:
        "Outstanding customer support and a product that actually delivers on its promises.",
      author: "Emily Rodriguez",
      role: "Director of Operations",
      company: "FastGrowth Co.",
      avatar: "/avatars/03.webp",
      rating: 5,
    },
    {
      quote:
        "We evaluated dozens of solutions before choosing this one. It's been the right choice.",
      author: "David Park",
      role: "VP of Engineering",
      company: "Enterprise Solutions",
      avatar: "/avatars/04.webp",
      rating: 5,
    },
    {
      quote:
        "The integration was seamless and the results exceeded our expectations significantly.",
      author: "Anna Schmidt",
      role: "Product Manager",
      company: "InnovateTech",
      avatar: "/avatars/05.webp",
      rating: 5,
    },
    {
      quote:
        "Finally a tool that understands what modern teams need. Highly recommended!",
      author: "James Wilson",
      role: "Engineering Lead",
      company: "DevFlow",
      avatar: "/avatars/07.webp",
      rating: 5,
    },
    {
      quote:
        "Our workflow has improved dramatically since we started using this platform.",
      author: "Lisa Thompson",
      role: "Operations Director",
      company: "ScaleOps",
      avatar: "/avatars/08.webp",
      rating: 5,
    },
    {
      quote:
        "The customer success team is amazing. They helped us every step of the way.",
      author: "Robert Kim",
      role: "Founder",
      company: "StartupLabs",
      avatar: "/avatars/09.webp",
      rating: 5,
    },
  ],
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials7Defaults.testimonials)[0]
}) {
  return (
    <div className="bg-card w-[320px] shrink-0 rounded-2xl p-6 shadow-md transition-shadow hover:shadow-lg md:w-[380px]">
      <div className="mb-3 flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="text-warning h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-card-foreground mb-4 text-sm leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-card-foreground text-sm font-semibold">
            {testimonial.author}
          </p>
          <p className="text-muted-foreground text-xs">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials7({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    title = testimonials7Defaults.title,
    description = testimonials7Defaults.description,
    ctaLabel = testimonials7Defaults.ctaLabel,
    ctaHref = testimonials7Defaults.ctaHref,
    testimonials = testimonials7Defaults.testimonials,
  } = content

  // Split testimonials into two rows for the marquee wall effect
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2))
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2))

  return (
    <section
      className={cn(
        "from-sage-100 via-sage-50 dark:from-sage-950 dark:via-sage-900/50 relative overflow-hidden bg-gradient-to-b to-amber-50 dark:to-amber-950/30",
        classNames.root
      )}
    >
      <div
        className={cn(
          "relative container px-6 py-16 md:py-24",
          classNames.container
        )}
      >
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2
            className={cn(
              "text-foreground mb-4 text-3xl font-bold md:text-4xl lg:text-5xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-muted-foreground mx-auto max-w-2xl text-sm md:text-base",
              classNames.header?.description
            )}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Marquee Wall - Full Width */}
      <div className="relative mb-12 space-y-6">
        {/* First Row - scrolls left */}
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </Marquee>

        {/* Second Row - scrolls right (reversed) */}
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </Marquee>

        {/* Gradient overlays for fade effect */}
        <div className="from-sage-100 dark:from-sage-950 pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent" />
        <div className="to-sage-100 dark:to-sage-950 pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-transparent" />
      </div>

      {/* CTA Section */}
      <div
        className={cn("container px-6 pb-16 md:pb-24", classNames.container)}
      >
        <div className="text-center">
          <Link
            href={ctaHref}
            className="border-foreground/20 text-foreground hover:bg-foreground/5 inline-flex items-center gap-2 rounded-full border bg-white/50 px-6 py-3 text-sm font-medium transition-colors dark:bg-white/10"
          >
            {ctaLabel}
            <DynamicIcon name="ArrowUpRight" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
