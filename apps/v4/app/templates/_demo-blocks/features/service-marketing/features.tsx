"use client"

import { useState } from "react"
import { useBlockContext } from "../../_components"

export function FeaturesServiceMarketing() {
  const { cardBg } = useBlockContext()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
      title: "Growth Strategy",
      description:
        "Custom marketing strategies that scale. Average 340% ROI for our clients.",
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
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      title: "Global Reach",
      description:
        "Multi-channel campaigns across 50+ platforms reaching billions of users.",
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
      title: "Real-Time Analytics",
      description:
        "Live dashboards and weekly reports so you always know what's working.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            Our Expertise
          </p>
          <h2 className="text-foreground text-3xl font-bold md:text-5xl">
            Data-Driven Results
          </h2>
        </div>

        {/* Accordion expandable list */}
        <div className="mx-auto max-w-3xl space-y-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`${cardBg} border-border overflow-hidden rounded-2xl border transition-all duration-300`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted focus:ring-1 focus:ring-ring"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-muted/50 text-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-foreground text-xl font-semibold">
                    {feature.title}
                  </h3>
                </div>
                <svg
                  className={`text-muted-foreground h-6 w-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-border border-t p-6 pt-4">
                    <p className="text-muted-foreground text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
