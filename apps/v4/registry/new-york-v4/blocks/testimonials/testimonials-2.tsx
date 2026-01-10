"use client"

import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import {
  testimonialsDefaults,
  type TestimonialsBlockProps,
} from "@/lib/blocks/testimonials.types"
import { cn } from "@/lib/utils"
import FlyingPosters from "@/registry/new-york-v4/animations/flying-posters/flying-posters"
import LetterGlitch from "@/registry/new-york-v4/animations/letter-glitch/letter-glitch"

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
  // Neon fitness colors for glitch effect
  glitchColors: ["#00ff88", "#ff00ff", "#00ffff"],
  // Fitness-themed poster images
  posterImages: [
    "/placeholders/blocks/service-fitness/testimonials/sarah.webp",
    "/placeholders/blocks/service-fitness/testimonials/david.webp",
    "/placeholders/blocks/service-fitness/testimonials/emma.webp",
    "/placeholders/blocks/service-fitness/testimonials/michael.webp",
  ],
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

  // Neon fitness colors and poster images
  const glitchColors =
    (content as typeof testimonials2Defaults).glitchColors ??
    testimonials2Defaults.glitchColors
  const posterImages =
    (content as typeof testimonials2Defaults).posterImages ??
    testimonials2Defaults.posterImages

  // Use block-specific testimonials with extended fields
  const testimonials =
    (content.testimonials as Testimonials2Item[] | undefined) ??
    testimonials2Defaults.testimonials

  return (
    <section className={cn("relative bg-black py-24 lg:py-32", classNames.root)}>
      {/* Flying Posters Background - Creates dynamic gym atmosphere */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <FlyingPosters
          items={posterImages}
          planeWidth={200}
          planeHeight={200}
          distortion={5}
          scrollEase={0.02}
        />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/60" />

      <div className={cn("container relative z-10 px-6", classNames.container)}>
        {/* Animated Header with LetterGlitch */}
        <div className="mb-12 text-center lg:mb-16">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="text-sm font-medium text-[#00ff88]">{badge}</span>
          </div>

          {/* Title with LetterGlitch background */}
          <div className="relative mx-auto mb-6 h-20 max-w-2xl overflow-hidden rounded-xl md:h-24">
            {/* LetterGlitch layer */}
            <div className="absolute inset-0 opacity-30">
              <LetterGlitch
                glitchColors={glitchColors}
                glitchSpeed={80}
                centerVignette={false}
                outerVignette={true}
                smooth={true}
                characters="STRENGTH POWER RESULTS TRANSFORM GYM FIT"
              />
            </div>
            {/* Title overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                {title}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            {description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={cn("grid gap-6 md:grid-cols-2", classNames.grid)}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#00ff88]/30 hover:bg-white/10 md:p-8",
                index === 0 && "md:row-span-2",
                classNames.testimonial?.root
              )}
            >
              {/* Neon glow effect on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 via-transparent to-[#ff00ff]/5" />
              </div>

              {/* Quote icon with neon color */}
              <DynamicIcon
                name="Quote"
                className="absolute top-6 right-6 h-8 w-8 text-[#00ff88]/20"
              />

              {/* Rating */}
              {testimonial.rating && (
                <div
                  className={cn(
                    "relative z-10 mb-4 flex gap-1",
                    classNames.testimonial?.rating
                  )}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <DynamicIcon
                      key={i}
                      name="Star"
                      className="h-4 w-4 fill-[#00ff88] text-[#00ff88]"
                    />
                  ))}
                </div>
              )}

              {/* Quote */}
              <blockquote
                className={cn(
                  "relative z-10 mb-6 text-white/90",
                  index === 0 ? "text-lg md:text-xl" : "text-base",
                  classNames.testimonial?.quote
                )}
              >
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Transformation stats with neon accent */}
              {testimonial.transformation && (
                <div className="relative z-10 mb-6 inline-flex items-center gap-4 rounded-xl border border-[#00ff88]/20 bg-[#00ff88]/5 px-4 py-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">
                      {testimonial.transformation.before}
                    </p>
                    <p className="text-xs text-white/60">Before</p>
                  </div>
                  <div className="h-8 w-px bg-[#00ff88]/30" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#00ff88]">
                      {testimonial.transformation.after}
                    </p>
                    <p className="text-xs text-white/60">After</p>
                  </div>
                  <span className="text-sm font-medium text-[#00ff88]/80">
                    {testimonial.transformation.metric}
                  </span>
                </div>
              )}

              {/* Author */}
              <div
                className={cn(
                  "relative z-10 flex items-center gap-4",
                  classNames.testimonial?.author
                )}
              >
                {testimonial.avatar && (
                  <div
                    className={cn(
                      "relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-[#00ff88]/30",
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

// Backward compatibility export
export { Testimonials2 as TestimonialsServiceFitness }
