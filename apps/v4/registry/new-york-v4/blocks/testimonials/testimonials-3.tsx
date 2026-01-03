"use client"

import { useState } from "react"
import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface TestimonialsBlockProps {
  content?: {
    title?: string
    testimonials?: Array<{
      quote: string
      author: string
      role: string
      company: string
      avatar: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string }
  }
}

const testimonials3Defaults = {
  title: "What Our Customers Say",
  testimonials: [
    {
      quote:
        "This product has completely transformed how we work. Our team productivity has increased by 40% since we started using it.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      avatar: "/avatars/01.webp",
    },
    {
      quote:
        "The best investment we've made this year. The ROI was visible within the first month of implementation.",
      author: "Michael Chen",
      role: "CTO",
      company: "GlobalScale",
      avatar: "/avatars/02.webp",
    },
    {
      quote:
        "Outstanding customer support and a product that actually delivers on its promises. Highly recommended!",
      author: "Emily Rodriguez",
      role: "Director of Operations",
      company: "FastGrowth Co.",
      avatar: "/avatars/03.webp",
    },
    {
      quote:
        "We evaluated dozens of solutions before choosing this one. It's been the right choice for our enterprise needs.",
      author: "David Park",
      role: "VP of Engineering",
      company: "Enterprise Solutions",
      avatar: "/avatars/04.webp",
    },
  ],
}

export function Testimonials3({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    title = testimonials3Defaults.title,
    testimonials = testimonials3Defaults.testimonials,
  } = content

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const current = testimonials[currentIndex]

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <h2
          className={cn(
            "text-foreground mb-12 text-center text-3xl font-bold md:text-4xl",
            classNames.header?.title
          )}
        >
          {title}
        </h2>

        <div className="mx-auto max-w-4xl">
          {/* Main Testimonial */}
          <div className="bg-background rounded-2xl p-8 md:p-12">
            <DynamicIcon
              name="Quote"
              className="text-primary/20 mb-6 h-12 w-12"
            />

            <blockquote className="text-foreground mb-8 text-xl leading-relaxed md:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src={current.avatar}
                    alt={current.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-foreground font-semibold">
                    {current.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {current.role}, {current.company}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={prevSlide}>
                  <DynamicIcon name="ChevronLeft" className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextSlide}>
                  <DynamicIcon name="ChevronRight" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
