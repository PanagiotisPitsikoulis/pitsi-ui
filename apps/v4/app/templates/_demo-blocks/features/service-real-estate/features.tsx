"use client"

import { useBlockContext } from "../../_components"

export function FeaturesServiceRealEstate() {
  const { cardBg } = useBlockContext()

  const features = [
    {
      icon: (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Exclusive Listings",
      description:
        "Access to off-market properties and pre-market opportunities before anyone else.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Expert Agents",
      description:
        "Top 1% agents with deep local knowledge and proven negotiation skills.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Seamless Process",
      description:
        "From first showing to closing, we handle every detail for a stress-free experience.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            Why Choose Us
          </p>
          <h2 className="text-foreground text-3xl font-bold md:text-5xl">
            Excellence In Real Estate
          </h2>
        </div>

        {/* 4-column compact grid (more density) */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`${cardBg} border-border group rounded-xl border p-6 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="bg-muted/50 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
