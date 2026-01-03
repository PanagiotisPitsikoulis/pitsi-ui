"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import {
  testimonialsDefaults,
  type TestimonialsBlockProps,
} from "@/lib/blocks/testimonials.types"
import { cn } from "@/lib/utils"

// Extended testimonial item with transformation stats (fitness-specific)
interface Testimonials2Item {
  author: string
  role?: string
  avatar?: { src: string; alt?: string }
  quote: string
  transformation?: {
    before: string
    after: string
    metric: string
  }
  rating?: number
}

// Block-specific defaults (fitness theme)
const testimonials2Defaults = {
  ...testimonialsDefaults,
  badge: "Member Stories",
  title: "Real Results, Real People",
  description:
    "Don't take our word for it. Hear from the athletes who transformed their lives with us.",
  testimonials: [
    {
      author: "Sarah M.",
      role: "Member for 2 years",
      avatar: {
        src: "/placeholders/blocks/service-fitness/testimonials/sarah.webp",
      },
      quote:
        "The coaches here actually care about your progress. I came in unable to do a single push-up, and now I'm hitting PRs I never thought possible.",
      transformation: { before: "0", after: "25", metric: "push-ups" },
      rating: 5,
    },
    {
      author: "David K.",
      role: "Member for 8 months",
      avatar: {
        src: "/placeholders/blocks/service-fitness/testimonials/david.webp",
      },
      quote:
        "The community here is unmatched. Everyone pushes each other to be better. It's not just a gym—it's a family.",
      rating: 5,
    },
    {
      author: "Emma R.",
      role: "Member for 1 year",
      avatar: {
        src: "/placeholders/blocks/service-fitness/testimonials/emma.webp",
      },
      quote:
        "Lost 30 pounds and gained so much confidence. The boxing classes are intense but so rewarding.",
      transformation: { before: "30", after: "0", metric: "lbs lost" },
      rating: 5,
    },
    {
      author: "Michael T.",
      role: "Member for 3 years",
      avatar: {
        src: "/placeholders/blocks/service-fitness/testimonials/michael.webp",
      },
      quote:
        "I've tried every gym in the city. Nothing compares to the energy and expertise here. Worth every penny.",
      rating: 5,
    },
  ] as Testimonials2Item[],
}

export function Testimonials2({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    badge = testimonials2Defaults.badge,
    title = testimonials2Defaults.title,
    description = testimonials2Defaults.description,
  } = content

  // Use block-specific testimonials with extended fields
  const testimonials =
    (content.testimonials as Testimonials2Item[] | undefined) ??
    testimonials2Defaults.testimonials
  return (
    <section className={cn("bg-black py-24 lg:py-32", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <div className={cn("mb-16 text-center", classNames.header?.root)}>
          {badge && (
            <p
              className={cn(
                "mb-4 text-sm font-medium tracking-[0.3em] text-white/60 uppercase",
                classNames.header?.badge
              )}
            >
              {badge}
            </p>
          )}
          <h2
            className={cn(
              "font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-lg text-white/60",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          )}
        </div>

        {/* Testimonials Grid */}
        <div className={cn("grid gap-6 md:grid-cols-2", classNames.grid)}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-white/5 p-6 transition-colors hover:bg-white/10 md:p-8",
                index === 0 && "md:row-span-2",
                classNames.testimonial?.root
              )}
            >
              {/* Quote icon */}
              <DynamicIcon
                name="Quote"
                className="absolute top-6 right-6 h-8 w-8 text-white/10"
              />

              {/* Rating */}
              {testimonial.rating && (
                <div
                  className={cn(
                    "mb-4 flex gap-1",
                    classNames.testimonial?.rating
                  )}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <DynamicIcon
                      key={i}
                      name="Star"
                      className="h-4 w-4 fill-white text-white"
                    />
                  ))}
                </div>
              )}

              {/* Quote */}
              <blockquote
                className={cn(
                  "mb-6 text-white/90",
                  index === 0 ? "text-lg md:text-xl" : "text-base",
                  classNames.testimonial?.quote
                )}
              >
                "{testimonial.quote}"
              </blockquote>

              {/* Transformation stats */}
              {testimonial.transformation && (
                <div className="mb-6 inline-flex items-center gap-4 rounded-xl bg-white/10 px-4 py-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">
                      {testimonial.transformation.before}
                    </p>
                    <p className="text-xs text-white/60">Before</p>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">
                      {testimonial.transformation.after}
                    </p>
                    <p className="text-xs text-white/60">After</p>
                  </div>
                  <span className="text-sm font-medium text-white/60">
                    {testimonial.transformation.metric}
                  </span>
                </div>
              )}

              {/* Author */}
              <div
                className={cn(
                  "flex items-center gap-4",
                  classNames.testimonial?.author
                )}
              >
                {testimonial.avatar && (
                  <div
                    className={cn(
                      "relative h-12 w-12 overflow-hidden rounded-full bg-neutral-800",
                      classNames.testimonial?.avatar
                    )}
                  >
                    <Image
                      src={testimonial.avatar.src}
                      alt={testimonial.avatar.alt || testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  {testimonial.role && (
                    <p
                      className={cn(
                        "text-sm text-white/60",
                        classNames.testimonial?.role
                      )}
                    >
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
