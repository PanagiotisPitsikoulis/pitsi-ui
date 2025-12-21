"use client"

import { useBlockContext } from "../../_components"

export function FeaturesProductScifi() {
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
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Biometric Security",
      description:
        "Advanced fingerprint and retinal scanning for military-grade device protection.",
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
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Quantum Charging",
      description:
        "0 to 100% in under 10 minutes with our revolutionary power transfer technology.",
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
          <circle cx="12" cy="12" r="4" />
          <line x1="21.17" y1="8" x2="12" y2="8" />
          <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
          <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
        </svg>
      ),
      title: "Neural Sync",
      description:
        "Seamlessly connect to your neural interface for thought-controlled operation.",
    },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

      <div className="container relative px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            Technology
          </p>
          <h2 className="text-foreground text-3xl font-bold md:text-5xl">
            Future-Ready Features
          </h2>
        </div>

        {/* Floating cards on gradient background with depth/shadow */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative"
              style={{
                transform: `translateY(${i % 2 === 0 ? "0" : "20px"})`,
              }}
            >
              {/* Shadow layers for depth */}
              <div className="bg-primary/5 absolute inset-0 translate-y-2 rounded-2xl blur-xl transition-all duration-300 group-hover:translate-y-4 group-hover:blur-2xl" />
              <div className="bg-primary/10 absolute inset-0 translate-y-1 rounded-2xl blur-md transition-all duration-300 group-hover:translate-y-2" />

              {/* Main card */}
              <div
                className={`${cardBg} border-border relative flex flex-col items-center rounded-2xl border p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:ring-2">
                  {feature.icon}
                </div>
                <h3 className="text-foreground mb-3 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>

                {/* Floating accent */}
                <div className="bg-primary/10 absolute right-4 top-4 h-2 w-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
