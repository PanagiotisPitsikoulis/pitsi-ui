"use client"

import { useBlockContext } from "../../_components"

export function FeaturesArt() {
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
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      title: "Global Collection",
      description:
        "Curated works from over 50 countries, spanning centuries of artistic expression.",
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
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: "Expert Curation",
      description:
        "Each piece selected by world-renowned curators and art historians.",
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
      title: "Artist Community",
      description:
        "Connect with living artists and attend exclusive studio visits.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            Our Approach
          </p>
          <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
            Where Art Meets Experience
          </h2>
        </div>

        {/* Masonry gallery-style with overlapping cards at different heights */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* First card - tall */}
          <div
            className={`${cardBg} border-border group relative -mt-0 flex flex-col justify-end rounded-2xl border p-8 pb-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:min-h-[400px]`}
          >
            <div className="bg-muted/50 text-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl">
              {features[0].icon}
            </div>
            <h3 className="text-foreground mb-3 text-xl font-semibold">
              {features[0].title}
            </h3>
            <p className="text-muted-foreground">{features[0].description}</p>
          </div>

          {/* Second card - shorter, offset down */}
          <div
            className={`${cardBg} border-border group relative mt-8 flex flex-col justify-end rounded-2xl border p-8 pb-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:min-h-[340px]`}
          >
            <div className="bg-muted/50 text-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl">
              {features[1].icon}
            </div>
            <h3 className="text-foreground mb-3 text-xl font-semibold">
              {features[1].title}
            </h3>
            <p className="text-muted-foreground">{features[1].description}</p>
          </div>

          {/* Third card - medium height, slight offset */}
          <div
            className={`${cardBg} border-border group relative mt-4 flex flex-col justify-end rounded-2xl border p-8 pb-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:min-h-[370px]`}
          >
            <div className="bg-muted/50 text-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl">
              {features[2].icon}
            </div>
            <h3 className="text-foreground mb-3 text-xl font-semibold">
              {features[2].title}
            </h3>
            <p className="text-muted-foreground">{features[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
