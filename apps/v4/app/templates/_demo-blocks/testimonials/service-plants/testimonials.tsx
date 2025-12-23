"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"

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
      quote:
        "The care guide that came with my plants was incredibly helpful. Best plant shop ever.",
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
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-brand-complementary">
            Happy Plant Parents
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Loved by Thousands
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={cn(
                "rounded-3xl bg-card p-8 shadow-sm"
              )}
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="h-5 w-5 text-warning"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-lg text-card-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
