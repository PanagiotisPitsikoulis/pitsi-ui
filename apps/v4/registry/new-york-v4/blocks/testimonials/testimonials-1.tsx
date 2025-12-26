"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"

function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: { quote: string; author: string; role: string; avatar: string }
  className?: string
}) {
  return (
    <div className={cn("bg-card rounded-3xl p-8", className)}>
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, j) => (
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
      <p className="text-card-foreground mb-6 text-lg">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="bg-muted relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            draggable={false}
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            className="pointer-events-none object-cover select-none"
          />
        </div>
        <div>
          <p className="text-card-foreground font-semibold">
            {testimonial.author}
          </p>
          <p className="text-muted-foreground text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsServicePlants() {
  const testimonials = [
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
    {
      quote:
        "The packaging was so thoughtful. Not a single leaf was damaged during shipping!",
      author: "Olivia Brown",
      role: "Interior Stylist",
      avatar: "/avatars/05.webp",
    },
  ]

  // Extra testimonials for the stacked cards
  const stackedTestimonials = [
    {
      quote: "Best online plant shop I've ever used. Will order again!",
      author: "Alex Turner",
      role: "Home Owner",
      avatar: "/avatars/07.webp",
    },
    {
      quote: "The plant arrived so healthy and green. Exceeded expectations!",
      author: "Nina Patel",
      role: "Garden Lover",
      avatar: "/avatars/08.webp",
    },
    {
      quote: "Amazing variety and the prices are so reasonable.",
      author: "Chris Wong",
      role: "Plant Dad",
      avatar: "/avatars/09.webp",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-20 text-center">
          <p className="text-brand-complementary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            Happy Plant Parents
          </p>
          <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
            Loved by Thousands
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="relative">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
          {/* Stacked cards cell */}
          <div className="relative overflow-visible pb-8">
            {/* Bottom stacked card - most tilted */}
            <div className="absolute top-6 right-0 left-0 rotate-6">
              <TestimonialCard
                testimonial={stackedTestimonials[0]}
                className="bg-muted/50"
              />
            </div>
            {/* Middle stacked card */}
            <div className="absolute top-3 right-0 left-0 -rotate-4">
              <TestimonialCard
                testimonial={stackedTestimonials[1]}
                className="bg-muted/70"
              />
            </div>
            {/* Top card with overlay */}
            <div className="relative z-10">
              <TestimonialCard
                testimonial={stackedTestimonials[2]}
                className="bg-muted"
              />
              <div className="bg-card/80 absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-3xl backdrop-blur-[2px]">
                <div className="flex -space-x-2">
                  {["07", "08", "09", "01", "02"].map((n) => (
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
                  999+ more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
