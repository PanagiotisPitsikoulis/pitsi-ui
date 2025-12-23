"use client"

import { useBlockContext } from "../../_components"

export function FeaturesAi() {
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
          <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4zM6 10v4a6 6 0 0 0 12 0v-4" />
          <path d="M12 18v4M8 22h8" />
        </svg>
      ),
      title: "Neural Processing",
      description:
        "Advanced neural networks that learn and adapt to your unique workflow patterns.",
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
          <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Real-Time Analysis",
      description:
        "Process millions of data points instantly with sub-millisecond response times.",
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
        </svg>
      ),
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and SOC 2 compliance for your most sensitive data.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            Capabilities
          </p>
          <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
            Intelligence Redefined
          </h2>
        </div>

        {/* Bento Grid: 1 large left + 2 stacked right + 3 smaller bottom */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-rows-2">
          {/* Large card - left side, spans 2 rows */}
          <div
            className={`${cardBg} border-border group row-span-2 flex flex-col justify-between rounded-2xl border p-10 transition-colors hover:bg-muted`}
          >
            <div>
              <div className="bg-muted/50 text-primary mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl">
                {features[0].icon}
              </div>
              <h3 className="text-foreground mb-4 text-2xl font-semibold">
                {features[0].title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {features[0].description}
              </p>
            </div>
          </div>

          {/* Top right card */}
          <div
            className={`${cardBg} border-border group flex flex-col justify-between rounded-2xl border p-8 transition-colors hover:bg-muted`}
          >
            <div>
              <div className="bg-muted/50 text-primary mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl">
                {features[1].icon}
              </div>
              <h3 className="text-foreground mb-3 text-xl font-semibold">
                {features[1].title}
              </h3>
              <p className="text-muted-foreground">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Bottom right card */}
          <div
            className={`${cardBg} border-border group flex flex-col justify-between rounded-2xl border p-8 transition-colors hover:bg-muted`}
          >
            <div>
              <div className="bg-muted/50 text-primary mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl">
                {features[2].icon}
              </div>
              <h3 className="text-foreground mb-3 text-xl font-semibold">
                {features[2].title}
              </h3>
              <p className="text-muted-foreground">
                {features[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
