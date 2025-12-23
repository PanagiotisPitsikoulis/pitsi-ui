"use client"

import { useBlockContext } from "../../_components"

export function FeaturesProductPlants() {
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
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Rare Varieties",
      description:
        "Hard-to-find cultivars and rare specimens sourced from specialty growers worldwide.",
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
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Premium Packaging",
      description:
        "Custom biodegradable packaging designed to protect plants during transit.",
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
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Plant Guarantee",
      description:
        "Every plant backed by our 60-day health guarantee or full replacement.",
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
            Grow With Confidence
          </h2>
        </div>

        {/* Alternating left/right sections with image+text */}
        <div className="space-y-16">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1

            return (
              <div
                key={i}
                className={`flex flex-col gap-8 md:flex-row md:items-center ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon/Visual side */}
                <div className="flex-1">
                  <div
                    className={`${cardBg} border-border group flex h-64 items-center justify-center rounded-2xl border transition-all duration-300 hover:shadow-xl`}
                  >
                    <div className="bg-muted/50 text-primary inline-flex h-24 w-24 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="flex-1">
                  <div className={`${isReversed ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="bg-muted/50 mb-4 inline-block rounded-full px-4 py-1">
                      <span className="text-primary text-sm font-medium">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-foreground mb-4 text-3xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
