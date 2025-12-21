"use client"

import { useBlockContext } from "../../_components"

export function FeaturesServicePlants() {
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
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
        </svg>
      ),
      title: "Expert Selection",
      description:
        "Each plant is hand-picked by our horticulturists for health and beauty.",
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
      title: "Safe Delivery",
      description:
        "Specially packaged to arrive healthy and ready to thrive in your home.",
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
      title: "30-Day Guarantee",
      description:
        "Not thriving? We'll replace it free within 30 days of delivery.",
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
            Plant Care Made Simple
          </h2>
        </div>

        {/* Minimal single column stacked cards */}
        <div className="mx-auto max-w-2xl space-y-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`${cardBg} border-border group rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-muted/50 text-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-foreground mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
