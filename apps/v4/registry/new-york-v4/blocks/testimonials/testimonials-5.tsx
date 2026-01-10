"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import TextPressure from "@/registry/new-york-v4/animations/text-pressure/text-pressure"

interface TestimonialsBlockProps {
  content?: {
    title?: string
    description?: string
    ctaLabel?: string
    ctaHref?: string
    rating?: string
    testimonials?: Array<{
      quote: string
      author: string
      role: string
      avatar: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const testimonials5Defaults = {
  title: "Over 1000+ people trust us",
  description:
    "Card gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.",
  ctaLabel: "See all reviews by our customers",
  ctaHref: "#",
  rating: "5.0",
  testimonials: [
    {
      quote:
        "My monstera arrived in perfect condition. It's been thriving for 6 months now!",
      author: "Sarah Mitchell",
      role: "Plant Parent",
      avatar: "/avatars/01.webp",
    },
    {
      quote: "The care guide that came with my plants was incredibly helpful.",
      author: "James Liu",
      role: "Home Designer",
      avatar: "/avatars/02.webp",
    },
    {
      quote:
        "Finally found a shop that delivers healthy plants. Already ordered three times!",
      author: "Emma Karlsson",
      role: "Plant Enthusiast",
      avatar: "/avatars/03.webp",
    },
    {
      quote:
        "Customer service is amazing. They helped me pick the perfect plants.",
      author: "Michael Chen",
      role: "Urban Gardener",
      avatar: "/avatars/04.webp",
    },
  ],
}

export function Testimonials5({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    title = testimonials5Defaults.title,
    description = testimonials5Defaults.description,
    ctaLabel = testimonials5Defaults.ctaLabel,
    ctaHref = testimonials5Defaults.ctaHref,
    rating = testimonials5Defaults.rating,
    testimonials = testimonials5Defaults.testimonials,
  } = content

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-sage-100 via-sage-50 to-amber-50 dark:from-sage-950 dark:via-sage-900/50 dark:to-amber-950/30",
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

        {/* Interactive Rating with TextPressure */}
        <div className="mx-auto mb-16 max-w-3xl">
          <div className="bg-card rounded-3xl p-8 shadow-lg md:p-12">
            {/* TextPressure Rating Display */}
            <div className="mb-8 flex flex-col items-center gap-6">
              <div className="h-24 w-full md:h-32">
                <TextPressure
                  text={rating}
                  fontFamily="system-ui"
                  width={true}
                  weight={true}
                  italic={false}
                  alpha={false}
                  flex={true}
                  stroke={false}
                  scale={false}
                  textColor="hsl(var(--primary))"
                  minFontSize={48}
                />
              </div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="text-warning h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                Move your mouse to interact with the rating
              </p>
            </div>

            {/* Featured Testimonial */}
            <div className="border-border/50 border-t pt-8">
              <blockquote className="text-card-foreground mb-6 text-center text-lg italic md:text-xl">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonials[0].avatar}
                    alt={testimonials[0].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-card-foreground font-semibold">
                    {testimonials[0].author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[0].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mx-auto mb-12 grid max-w-4xl gap-6 md:grid-cols-3">
          {testimonials.slice(1).map((testimonial, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="text-warning h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-card-foreground mb-4 text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-card-foreground text-sm font-medium">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
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
