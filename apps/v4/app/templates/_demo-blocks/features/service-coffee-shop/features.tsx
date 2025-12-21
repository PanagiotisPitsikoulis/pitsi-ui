"use client"

import { useState } from "react"
import { useBlockContext } from "../../_components"

export function FeaturesServiceCoffeeShop() {
  const { cardBg } = useBlockContext()
  const [activeTab, setActiveTab] = useState(0)

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
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <path d="M6 1v3M10 1v3M14 1v3" />
        </svg>
      ),
      title: "Specialty Brews",
      description:
        "Hand-poured pour-overs, expertly crafted espresso, and seasonal specialties.",
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
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "Fresh Pastries",
      description:
        "Baked in-house every morning. Croissants, muffins, and seasonal treats.",
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
      title: "Cozy Atmosphere",
      description:
        "Free WiFi, comfortable seating, and the perfect ambiance for work or relaxation.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            The Experience
          </p>
          <h2 className="text-foreground text-3xl font-bold md:text-5xl">
            More Than Just Coffee
          </h2>
        </div>

        {/* Tab-based interface with icon pills */}
        <div className="mx-auto max-w-4xl">
          {/* Tab pills */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {features.map((feature, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`${
                  activeTab === i
                    ? "bg-primary text-primary-foreground"
                    : `${cardBg} border-border text-foreground hover:bg-muted`
                } flex items-center gap-2 rounded-full border px-6 py-3 transition-all duration-300 focus:ring-1 focus:ring-ring`}
              >
                <div
                  className={`${
                    activeTab === i ? "text-primary-foreground" : "text-primary"
                  } transition-colors`}
                >
                  {feature.icon}
                </div>
                <span className="font-medium">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className={`${cardBg} border-border rounded-2xl border p-8 md:p-12`}>
            {features.map((feature, i) => (
              <div
                key={i}
                className={`${
                  activeTab === i ? "block" : "hidden"
                } transition-opacity duration-300`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-muted/50 text-primary mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl">
                    <div className="scale-150">{feature.icon}</div>
                  </div>
                  <h3 className="text-foreground mb-4 text-2xl font-semibold md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
