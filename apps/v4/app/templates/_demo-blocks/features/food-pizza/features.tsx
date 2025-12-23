"use client"

import { useBlockContext } from "../../_components"

export function FeaturesFoodPizza() {
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
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      title: "Wood-Fired Oven",
      description:
        "900°F oak-fired oven imported from Naples for that perfect leopard-spotted crust.",
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
      title: "Imported Ingredients",
      description:
        "San Marzano tomatoes, Fior di Latte mozzarella, and 00 flour from Italy.",
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
      title: "48-Hour Dough",
      description:
        "Slow-fermented dough for complex flavors and perfect digestibility.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 font-serif italic text-sm tracking-[0.2em]">
            La Tradizione
          </p>
          <h2 className="font-display text-foreground font-serif italic text-3xl font-bold md:text-5xl">
            Authentic Italian Craft
          </h2>
        </div>

        {/* Stacked full-width horizontal cards (no grid) */}
        <div className="space-y-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`${cardBg} border-border group flex flex-col gap-6 rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg md:flex-row md:items-center md:p-10`}
            >
              <div className="bg-muted/50 text-primary flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl md:h-20 md:w-20">
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-foreground mb-2 font-serif text-xl font-semibold md:text-2xl">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground md:text-lg">
                  {feature.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-muted/50 inline-block rounded-full px-4 py-2">
                  <span className="text-primary text-sm font-medium">
                    0{i + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
