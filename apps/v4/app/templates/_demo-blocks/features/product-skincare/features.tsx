"use client"

import { useBlockContext } from "../../_components"

export function FeaturesProductSkincare() {
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
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Clean Formulas",
      description:
        "Free from parabens, sulfates, and synthetic fragrances. Only what your skin needs.",
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
      title: "Clinically Tested",
      description:
        "Every product dermatologist-tested and proven effective in clinical trials.",
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
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Sustainable Beauty",
      description:
        "Recyclable packaging and carbon-neutral shipping. Beauty without compromise.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-light tracking-[0.3em] uppercase">
            Our Philosophy
          </p>
          <h2 className="font-display text-foreground text-3xl font-light md:text-5xl">
            Science Meets Nature
          </h2>
        </div>

        {/* 2x2 grid with center overlap badge */}
        <div className="relative mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {features.slice(0, 2).map((feature, i) => (
              <div
                key={i}
                className={`${cardBg} border-border group flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="bg-muted/50 text-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl">
                  {feature.icon}
                </div>
                <h3 className="text-foreground mb-3 text-xl font-medium">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Center overlap badge */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className={`${cardBg} border-border rounded-full border-4 p-6 shadow-xl`}>
              <div className="bg-primary/10 text-primary flex h-16 w-16 items-center justify-center rounded-full">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom card - full width */}
          <div className="mt-6">
            <div
              className={`${cardBg} border-border group flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg md:flex-row md:items-center md:gap-8`}
            >
              <div className="bg-muted/50 text-primary mb-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl md:mb-0">
                {features[2].icon}
              </div>
              <div className="flex-1">
                <h3 className="text-foreground mb-3 text-xl font-medium">
                  {features[2].title}
                </h3>
                <p className="text-muted-foreground">
                  {features[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
