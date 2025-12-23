"use client"

import { useBlockContext } from "../../_components"

export function FeaturesFoodJuice() {
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
      title: "100% Organic",
      description:
        "Every ingredient certified organic, sourced from local sustainable farms.",
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
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Cold-Pressed Daily",
      description:
        "Made fresh every morning to preserve maximum nutrients and enzymes.",
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
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "No Added Sugar",
      description:
        "Pure fruit and vegetable goodness. No preservatives, no additives, no compromise.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            Our Promise
          </p>
          <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
            Pure. Fresh. Natural.
          </h2>
        </div>

        {/* Circular icon wheel arrangement with center description */}
        <div className="relative mx-auto max-w-4xl">
          {/* Center description */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className={`${cardBg} border-border rounded-full border p-8 text-center shadow-lg`}>
              <div className="bg-primary/10 text-primary mx-auto mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <p className="text-foreground text-sm font-semibold">Premium</p>
              <p className="text-muted-foreground text-xs">Quality</p>
            </div>
          </div>

          {/* Circular arrangement of features */}
          <div className="relative h-[500px] md:h-[600px]">
            {features.map((feature, i) => {
              const angle = (i * 120 - 90) * (Math.PI / 180) // 120 degrees apart, starting from top
              const radius = 200 // Distance from center
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div
                    className={`${cardBg} border-border group w-56 rounded-2xl border p-6 text-center transition-all duration-300 hover:scale-110 hover:shadow-xl`}
                  >
                    <div className="bg-muted/50 text-primary mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full">
                      {feature.icon}
                    </div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
