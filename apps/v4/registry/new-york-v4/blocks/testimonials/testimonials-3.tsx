"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"

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

// Testimonial Card for the Swiper carousel
function TestimonialSwipeCard({
  testimonial,
}: {
  testimonial: (typeof testimonials3Defaults.testimonials)[0]
}) {
  return (
    <div className="bg-card flex h-full w-full flex-col rounded-3xl p-6 shadow-lg">
      <DynamicIcon name="Quote" className="text-primary/30 mb-4 h-8 w-8" />
      <p className="text-card-foreground mb-6 flex-1 text-sm leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-card-foreground font-semibold">
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

export function Testimonials3({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    title = testimonials3Defaults.title,
    testimonials = testimonials3Defaults.testimonials,
  } = content

  const [SwiperComponents, setSwiperComponents] = useState<{
    Swiper: any
    SwiperSlide: any
    modules: any[]
  } | null>(null)

  useEffect(() => {
    // Dynamic import of Swiper to avoid SSR issues
    Promise.all([
      import("swiper/react"),
      import("swiper/modules"),
      import("swiper/css"),
      import("swiper/css/effect-cards"),
    ]).then(([swiperReact, swiperModules]) => {
      setSwiperComponents({
        Swiper: swiperReact.Swiper,
        SwiperSlide: swiperReact.SwiperSlide,
        modules: [swiperModules.EffectCards, swiperModules.Autoplay],
      })
    })
  }, [])

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
          {/* Card Swipe Carousel */}
          <div className="flex items-center justify-center">
            {!SwiperComponents ? (
              <div className="bg-card h-[380px] w-[280px] animate-pulse rounded-3xl" />
            ) : (
              <SwiperComponents.Swiper
                spaceBetween={40}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                effect="cards"
                grabCursor={true}
                loop={true}
                className="h-[380px] w-[280px]"
                modules={SwiperComponents.modules}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperComponents.SwiperSlide
                    key={index}
                    className="rounded-3xl"
                  >
                    <TestimonialSwipeCard testimonial={testimonial} />
                  </SwiperComponents.SwiperSlide>
                ))}
              </SwiperComponents.Swiper>
            )}
          </div>

          {/* Info text */}
          <p className="text-muted-foreground mt-8 text-center text-sm">
            Swipe or drag to see more testimonials
          </p>
        </div>
      </div>
    </section>
  )
}
