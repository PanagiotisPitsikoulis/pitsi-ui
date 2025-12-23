"use client"

import { useState } from "react"
import { useBlockContext } from "../../_components"

export function FeaturesServicePetSitting() {
  const { cardBg } = useBlockContext()
  const [activeIndex, setActiveIndex] = useState(0)

  const features = [
    {
      icon: (
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "Loving Care",
      description:
        "Professional pet sitters who treat your furry friends like family.",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Fully Insured",
      description:
        "Licensed, bonded, and insured for your complete peace of mind.",
    },
    {
      icon: (
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Daily Updates",
      description:
        "Photo and video updates throughout the day so you never miss a moment.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            Why Choose Us
          </p>
          <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
            Your Pet's Second Home
          </h2>
        </div>

        {/* Card carousel with dots navigation */}
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {features.map((feature, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div
                    className={`${cardBg} border-border rounded-2xl border p-10 text-center`}
                  >
                    <div className="bg-muted/50 text-primary mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl">
                      {feature.icon}
                    </div>
                    <h3 className="text-foreground mb-4 text-2xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots navigation */}
          <div className="mt-8 flex justify-center gap-3">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
