"use client"

import Image from "next/image"

import {
  testimonialsDefaults,
  type TestimonialItem,
  type TestimonialsBlockProps,
} from "@/lib/blocks/testimonials.types"
import type { TestimonialItemClassNames } from "@/lib/blocks/testimonials.types"
import { cn } from "@/lib/utils"

// Block-specific defaults that extend the shared defaults
const testimonials1Defaults = {
  badge: "Happy Plant Parents",
  title: "Loved by Thousands",
  testimonials: [
    {
      quote:
        "My monstera arrived in perfect condition. It's been thriving for 6 months now!",
      author: "Sarah Mitchell",
      role: "Plant Parent",
      avatar: { src: "/avatars/01.webp", alt: "Sarah Mitchell" },
      rating: 5,
    },
    {
      quote: "The care guide that came with my plants was incredibly helpful.",
      author: "James Liu",
      role: "Home Designer",
      avatar: { src: "/avatars/02.webp", alt: "James Liu" },
      rating: 5,
    },
    {
      quote:
        "Finally found a shop that delivers healthy plants. Already ordered three times!",
      author: "Emma Karlsson",
      role: "Plant Enthusiast",
      avatar: { src: "/avatars/03.webp", alt: "Emma Karlsson" },
      rating: 5,
    },
    {
      quote:
        "Customer service is amazing. They helped me pick the perfect plants.",
      author: "Michael Chen",
      role: "Urban Gardener",
      avatar: { src: "/avatars/04.webp", alt: "Michael Chen" },
      rating: 5,
    },
    {
      quote:
        "The packaging was so thoughtful. Not a single leaf was damaged during shipping!",
      author: "Olivia Brown",
      role: "Interior Stylist",
      avatar: { src: "/avatars/05.webp", alt: "Olivia Brown" },
      rating: 5,
    },
  ] as TestimonialItem[],
  stackedTestimonials: [
    {
      quote: "Best online plant shop I've ever used. Will order again!",
      author: "Alex Turner",
      role: "Home Owner",
      avatar: { src: "/avatars/07.webp", alt: "Alex Turner" },
      rating: 5,
    },
    {
      quote: "The plant arrived so healthy and green. Exceeded expectations!",
      author: "Nina Patel",
      role: "Garden Lover",
      avatar: { src: "/avatars/08.webp", alt: "Nina Patel" },
      rating: 5,
    },
    {
      quote: "Amazing variety and the prices are so reasonable.",
      author: "Chris Wong",
      role: "Plant Dad",
      avatar: { src: "/avatars/09.webp", alt: "Chris Wong" },
      rating: 5,
    },
  ] as TestimonialItem[],
  moreCount: "999+ more",
  overlayAvatars: ["07", "08", "09", "01", "02"],
}

function TestimonialCard({
  testimonial,
  className,
  classNames,
}: {
  testimonial: TestimonialItem
  className?: string
  classNames?: TestimonialItemClassNames
}) {
  return (
    <div className={cn("bg-card rounded-3xl p-8", className, classNames?.root)}>
      <div className={cn("mb-4 flex gap-1", classNames?.rating)}>
        {[...Array(testimonial.rating ?? 5)].map((_, j) => (
          <svg
            key={j}
            className="text-warning h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className={cn("text-card-foreground mb-6 text-lg", classNames?.quote)}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        {testimonial.avatar && (
          <div
            className={cn(
              "bg-muted relative h-12 w-12 overflow-hidden rounded-full",
              classNames?.avatar
            )}
          >
            <Image
              draggable={false}
              src={testimonial.avatar.src}
              alt={testimonial.avatar.alt}
              fill
              className="pointer-events-none object-cover select-none"
            />
          </div>
        )}
        <div>
          <p
            className={cn(
              "text-card-foreground font-semibold",
              classNames?.author
            )}
          >
            {testimonial.author}
          </p>
          {testimonial.role && (
            <p
              className={cn("text-muted-foreground text-sm", classNames?.role)}
            >
              {testimonial.role}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export function Testimonials1({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  // Merge content with defaults
  const {
    badge = testimonials1Defaults.badge,
    title = testimonials1Defaults.title,
    testimonials = testimonials1Defaults.testimonials,
  } = content

  // For this block, we use the first 5 testimonials as main and the rest as stacked
  const mainTestimonials = testimonials.slice(0, 5)
  const stackedTestimonials =
    testimonials.length > 5
      ? testimonials.slice(5, 8)
      : testimonials1Defaults.stackedTestimonials

  return (
    <section className={classNames.root}>
      <div className={cn("container px-6", classNames.container)}>
        <div className={cn("mb-20 text-center", classNames.header?.root)}>
          {badge && (
            <p
              className={cn(
                "text-brand-complementary mb-4 text-sm font-medium tracking-[0.3em] uppercase",
                classNames.header?.badge
              )}
            >
              {badge}
            </p>
          )}
          <h2
            className={cn(
              "font-display text-foreground text-3xl font-bold md:text-5xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
        </div>
        <div className={cn("grid gap-8 md:grid-cols-3", classNames.grid)}>
          {mainTestimonials.map((testimonial, i) => (
            <div key={i} className="relative">
              <TestimonialCard
                testimonial={testimonial}
                classNames={classNames.testimonial}
              />
            </div>
          ))}
          {/* Stacked cards cell */}
          <div className="relative overflow-visible pb-8">
            {/* Bottom stacked card - most tilted */}
            <div className="absolute top-6 right-0 left-0 rotate-6">
              <TestimonialCard
                testimonial={stackedTestimonials[0]}
                className="bg-muted/50"
                classNames={classNames.testimonial}
              />
            </div>
            {/* Middle stacked card */}
            <div className="absolute top-3 right-0 left-0 -rotate-4">
              <TestimonialCard
                testimonial={stackedTestimonials[1]}
                className="bg-muted/70"
                classNames={classNames.testimonial}
              />
            </div>
            {/* Top card with overlay */}
            <div className="relative z-10">
              <TestimonialCard
                testimonial={stackedTestimonials[2]}
                className="bg-muted"
                classNames={classNames.testimonial}
              />
              <div className="bg-card/80 absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-3xl backdrop-blur-[2px]">
                <div className="flex -space-x-2">
                  {testimonials1Defaults.overlayAvatars.map((n) => (
                    <div
                      key={n}
                      className="border-card bg-muted relative h-10 w-10 overflow-hidden rounded-full border-2"
                    >
                      <Image
                        draggable={false}
                        src={`/avatars/${n}.webp`}
                        alt=""
                        fill
                        className="pointer-events-none object-cover select-none"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-card-foreground text-lg font-bold">
                  {testimonials1Defaults.moreCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Testimonials1 as TestimonialsServicePlants }
