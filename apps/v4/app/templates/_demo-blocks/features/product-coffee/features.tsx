"use client"

import { useBlockContext } from "../../_components"

export function FeaturesProductCoffee() {
  const { cardBg } = useBlockContext()

  const features = [
    {
      icon: (
        <svg
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      title: "Single Origin",
      description:
        "Beans sourced directly from family farms in Ethiopia, Colombia, and Guatemala.",
    },
    {
      icon: (
        <svg
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      title: "Small Batch Roasted",
      description:
        "Roasted weekly in small batches to ensure peak freshness and flavor.",
    },
    {
      icon: (
        <svg
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "Ethically Traded",
      description:
        "Fair prices paid directly to farmers. Sustainable practices protected.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-light tracking-[0.4em] uppercase">
            Our Process
          </p>
          <h2 className="text-foreground text-3xl font-light tracking-wide md:text-5xl">
            From Bean to Cup
          </h2>
        </div>

        {/* Left-aligned vertical list with large icons on the left */}
        <div className="mx-auto max-w-3xl space-y-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`${cardBg} border-border group flex items-start gap-8 rounded-2xl border p-8 transition-colors hover:bg-muted`}
            >
              <div className="bg-muted/50 text-primary flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-foreground mb-3 text-2xl font-medium tracking-wide">
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
    </section>
  )
}
