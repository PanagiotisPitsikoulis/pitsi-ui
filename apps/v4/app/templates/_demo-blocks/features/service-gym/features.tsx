"use client"

import { useBlockContext } from "../../_components"

export function FeaturesServiceGym() {
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
          <path d="M6.5 6.5h11v11h-11z" />
          <path d="M6.5 1v5.5M17.5 1v5.5M6.5 17.5V23M17.5 17.5V23M1 6.5h5.5M1 17.5h5.5M17.5 6.5H23M17.5 17.5H23" />
        </svg>
      ),
      title: "Premium Equipment",
      description:
        "Top-of-the-line machines and free weights from Rogue, Hammer Strength, and more.",
      stat: "500+",
      statLabel: "Equipment",
      progress: 95,
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Expert Trainers",
      description:
        "Certified personal trainers with specializations in strength, HIIT, and mobility.",
      stat: "25",
      statLabel: "Trainers",
      progress: 88,
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
      title: "24/7 Access",
      description:
        "Train on your schedule. Open around the clock, 365 days a year.",
      stat: "24/7",
      statLabel: "Open",
      progress: 100,
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-bold tracking-[0.3em] uppercase">
            Why Train With Us
          </p>
          <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
            Built For Results
          </h2>
        </div>

        {/* Stats-integrated cards with progress bars */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`${cardBg} border-border group rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg`}
            >
              {/* Icon and Stat */}
              <div className="mb-6 flex items-start justify-between">
                <div className="bg-muted/50 text-primary inline-flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <div className="text-right">
                  <div className="text-primary text-3xl font-bold">
                    {feature.stat}
                  </div>
                  <div className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                    {feature.statLabel}
                  </div>
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-foreground mb-3 text-xl font-bold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>

              {/* Progress bar */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-muted-foreground text-xs font-medium">
                    Capacity
                  </span>
                  <span className="text-primary text-xs font-bold">
                    {feature.progress}%
                  </span>
                </div>
                <div className="bg-muted h-2 overflow-hidden rounded-full">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-500"
                    style={{ width: `${feature.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
