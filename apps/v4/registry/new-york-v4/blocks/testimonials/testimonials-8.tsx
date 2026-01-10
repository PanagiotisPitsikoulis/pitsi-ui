"use client"

import Image from "next/image"

import { type TestimonialsBlockProps } from "@/lib/blocks/testimonials.types"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

const testimonials8Defaults = {
  badge: "Testimonials",
  title: "Loved by developers",
  testimonials: [
    {
      quote:
        "The best component library I've used. Clean code, great documentation, and the components just work.",
      author: "Sarah Chen",
      role: "Frontend Lead",
      company: "Vercel",
      avatar: "/avatars/avatar-1.webp",
    },
    {
      quote:
        "Finally a component library that I can actually customize without fighting the framework. Highly recommended.",
      author: "Alex Rivera",
      role: "Senior Developer",
      company: "Stripe",
      avatar: "/avatars/avatar-2.webp",
    },
    {
      quote:
        "We migrated our entire design system to this library. Saved us months of development time.",
      author: "Jordan Kim",
      role: "Tech Lead",
      company: "Linear",
      avatar: "/avatars/avatar-3.webp",
    },
  ],
}

export function Testimonials8({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    badge = testimonials8Defaults.badge,
    title = testimonials8Defaults.title,
    testimonials = testimonials8Defaults.testimonials,
  } = content as typeof testimonials8Defaults

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <BlockHeader
          badge={badge}
          title={title}
          classNames={classNames.header}
        />

        {/* Testimonials grid */}
        <div className={cn("grid gap-8 md:grid-cols-3", classNames.grid)}>
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={cn(
                "bg-card border-border rounded-2xl border p-6",
                classNames.testimonial?.root
              )}
            >
              <blockquote
                className={cn(
                  "text-foreground mb-6 text-base leading-relaxed",
                  classNames.testimonial?.quote
                )}
              >
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                {testimonial.avatar && (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <div
                    className={cn(
                      "text-foreground font-medium",
                      classNames.testimonial?.author
                    )}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    className={cn(
                      "text-muted-foreground text-sm",
                      classNames.testimonial?.role
                    )}
                  >
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
