"use client"

import { useBlockContext } from "../../_components"

export function FeaturesServicePsychologist() {
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
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "Safe Space",
      description:
        "A judgment-free environment where you can explore your thoughts and feelings.",
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
      title: "Evidence-Based",
      description:
        "Proven therapeutic approaches including CBT, EMDR, and mindfulness techniques.",
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
      title: "Flexible Sessions",
      description:
        "In-person or virtual appointments to fit your schedule and comfort level.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-light tracking-[0.3em] uppercase">
            Our Approach
          </p>
          <h2 className="font-display text-foreground text-3xl font-light md:text-5xl">
            Compassionate Care
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
                <h3 className="text-foreground mb-3 text-xl font-medium">
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
