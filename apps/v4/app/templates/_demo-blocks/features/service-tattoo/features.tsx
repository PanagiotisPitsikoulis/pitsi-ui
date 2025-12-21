"use client"

import { useBlockContext } from "../../_components"

export function FeaturesServiceTattoo() {
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
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
        </svg>
      ),
      title: "Custom Designs",
      description:
        "Every piece is unique. Work with our artists to bring your vision to life.",
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
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Medical-Grade Safety",
      description:
        "Hospital-level sterilization. Single-use needles. Licensed and inspected.",
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
      title: "Award-Winning Artists",
      description:
        "Internationally recognized artists specializing in all styles from traditional to fine-line.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-bold tracking-[0.3em] uppercase">
            Our Craft
          </p>
          <h2 className="text-foreground text-3xl font-bold md:text-5xl">
            Art That Lasts Forever
          </h2>
        </div>

        {/* Offset/staggered asymmetric card positions */}
        <div className="relative mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* First card - top left */}
            <div
              className="md:translate-y-0"
              style={{ transform: "translateY(0)" }}
            >
              <div
                className={`${cardBg} border-border group rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="bg-muted/50 text-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                  {features[0].icon}
                </div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  {features[0].title}
                </h3>
                <p className="text-muted-foreground">
                  {features[0].description}
                </p>
              </div>
            </div>

            {/* Second card - middle, offset down */}
            <div className="md:translate-y-12">
              <div
                className={`${cardBg} border-border group rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="bg-muted/50 text-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                  {features[1].icon}
                </div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
                  {features[1].title}
                </h3>
                <p className="text-muted-foreground">
                  {features[1].description}
                </p>
              </div>
            </div>

            {/* Third card - right, offset down more */}
            <div className="md:translate-y-6">
              <div
                className={`${cardBg} border-border group rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="bg-muted/50 text-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                  {features[2].icon}
                </div>
                <h3 className="text-foreground mb-3 text-xl font-bold">
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
