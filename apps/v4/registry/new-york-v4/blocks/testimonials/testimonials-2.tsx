"use client"

import Image from "next/image"
import { Quote, Star } from "lucide-react"

import { cn } from "@/lib/utils"

interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
  transformation?: {
    before: string
    after: string
    metric: string
  }
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Member for 2 years",
    image: "/placeholders/blocks/service-fitness/testimonials/sarah.webp",
    quote:
      "The coaches here actually care about your progress. I came in unable to do a single push-up, and now I'm hitting PRs I never thought possible.",
    transformation: {
      before: "0",
      after: "25",
      metric: "push-ups",
    },
    rating: 5,
  },
  {
    name: "David K.",
    role: "Member for 8 months",
    image: "/placeholders/blocks/service-fitness/testimonials/david.webp",
    quote:
      "The community here is unmatched. Everyone pushes each other to be better. It's not just a gym—it's a family.",
    rating: 5,
  },
  {
    name: "Emma R.",
    role: "Member for 1 year",
    image: "/placeholders/blocks/service-fitness/testimonials/emma.webp",
    quote:
      "Lost 30 pounds and gained so much confidence. The boxing classes are intense but so rewarding.",
    transformation: {
      before: "30",
      after: "0",
      metric: "lbs lost",
    },
    rating: 5,
  },
  {
    name: "Michael T.",
    role: "Member for 3 years",
    image: "/placeholders/blocks/service-fitness/testimonials/michael.webp",
    quote:
      "I've tried every gym in the city. Nothing compares to the energy and expertise here. Worth every penny.",
    rating: 5,
  },
]

export function Testimonials2() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="container px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-white/60 uppercase">
            Member Stories
          </p>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Real Results, Real People
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Don't take our word for it. Hear from the athletes who transformed
            their lives with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-white/5 p-6 transition-colors hover:bg-white/10 md:p-8",
                index === 0 && "md:row-span-2"
              )}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-white/10" />

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-white text-white" />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className={cn(
                  "mb-6 text-white/90",
                  index === 0 ? "text-lg md:text-xl" : "text-base"
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
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-neutral-800">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
