"use client"

import { useBlockContext } from "../../_components"

export function FeaturesServiceHospitality() {
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
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Elegant Suites",
      description:
        "Spacious accommodations with premium linens, ocean views, and private balconies.",
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
      title: "24/7 Concierge",
      description:
        "Dedicated concierge team ready to fulfill any request, any time of day.",
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
      title: "World-Class Spa",
      description:
        "Rejuvenate with our signature treatments, thermal pools, and wellness programs.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-light tracking-[0.3em] uppercase">
            The Experience
          </p>
          <h2 className="text-foreground font-serif text-3xl font-light md:text-5xl">
            Luxury Redefined
          </h2>
        </div>

        {/* Side-by-side comparison table layout */}
        <div className="mx-auto max-w-5xl">
          <div className={`${cardBg} border-border overflow-hidden rounded-2xl border`}>
            {/* Header */}
            <div className="bg-muted/30 border-border grid grid-cols-2 border-b">
              <div className="border-border border-r p-6 text-center">
                <h3 className="text-foreground text-lg font-semibold">
                  Feature
                </h3>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-foreground text-lg font-semibold">
                  Details
                </h3>
              </div>
            </div>

            {/* Rows */}
            {features.map((feature, i) => (
              <div
                key={i}
                className={`${i < features.length - 1 ? "border-border border-b" : ""} grid grid-cols-2 transition-colors hover:bg-muted/30`}
              >
                <div className="border-border flex items-center gap-4 border-r p-6">
                  <div className="bg-muted/50 text-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    {feature.icon}
                  </div>
                  <h4 className="text-foreground font-serif text-lg font-medium">
                    {feature.title}
                  </h4>
                </div>
                <div className="flex items-center p-6">
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
