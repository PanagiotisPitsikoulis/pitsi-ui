"use client"

import { useBlockContext } from "../../_components"

export function FeaturesBoat() {
  const { cardBg } = useBlockContext()

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
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <path d="M6 1v3M10 1v3M14 1v3" />
        </svg>
      ),
      title: "Premium Fleet",
      description:
        "Meticulously maintained vessels from 20ft day sailors to 80ft luxury yachts.",
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
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Flexible Charters",
      description:
        "Half-day, full-day, or week-long adventures tailored to your schedule.",
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
      title: "Safety First",
      description:
        "Coast Guard certified crews and state-of-the-art safety equipment on every vessel.",
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
            Sail With Confidence
          </h2>
        </div>

        {/* Horizontal scroll cards with smooth behavior */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`${cardBg} border-border group min-w-[320px] flex-shrink-0 rounded-2xl border p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl md:min-w-[380px]`}
              >
                <div className="bg-muted/50 text-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl">
                  {feature.icon}
                </div>
                <h3 className="text-foreground mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-4 flex justify-center gap-2">
            {features.map((_, i) => (
              <div
                key={i}
                className="bg-muted h-1.5 w-8 rounded-full transition-colors hover:bg-primary"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
