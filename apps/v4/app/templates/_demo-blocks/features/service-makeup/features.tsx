"use client"

import { useBlockContext } from "../../_components"

export function FeaturesServiceMakeup() {
  const { cardBg } = useBlockContext()

  const features = [
    {
      icon: (
        <svg
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Premium Products",
      description:
        "Luxury cosmetics from Charlotte Tilbury, Pat McGrath, and exclusive formulations.",
    },
    {
      icon: (
        <svg
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Expert Artists",
      description:
        "Celebrity-trained makeup artists with expertise in bridal, editorial, and special effects.",
    },
    {
      icon: (
        <svg
          className="h-12 w-12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "Personalized Service",
      description:
        "One-on-one consultations to create your perfect look for any occasion.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-light tracking-[0.3em] uppercase">
            Our Artistry
          </p>
          <h2 className="text-foreground text-3xl font-light md:text-5xl">
            Beauty Elevated
          </h2>
        </div>

        {/* Icon-only grid that reveals text on hover */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`${cardBg} border-border group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl`}
            >
              {/* Icon view (default) */}
              <div className="flex h-64 items-center justify-center transition-opacity duration-300 group-hover:opacity-0 md:h-80">
                <div className="bg-muted/50 text-primary inline-flex h-32 w-32 items-center justify-center rounded-3xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
              </div>

              {/* Text view (on hover) */}
              <div className="absolute inset-0 flex flex-col justify-center p-8 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="bg-muted/50 text-primary mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl">
                  <div className="scale-75">{feature.icon}</div>
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
