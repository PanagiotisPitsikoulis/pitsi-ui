"use client"

import { useBlockContext } from "../../_components"

export function FeaturesServiceBarber() {
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
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Master Barbers",
      description:
        "Over 70 years of combined experience. Trained in both classic and modern techniques.",
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
          <path d="M12 2v20M2 12h20" />
        </svg>
      ),
      title: "Premium Products",
      description:
        "Exclusive grooming products from the world's finest barbershops and apothecaries.",
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
      title: "Hot Towel Service",
      description:
        "Complimentary hot towel treatments with every cut and shave for the ultimate experience.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            Our Craft
          </p>
          <h2 className="text-foreground text-3xl font-bold md:text-5xl">
            Traditional Excellence
          </h2>
        </div>

        {/* Timeline numbered vertical list with connecting line */}
        <div className="relative mx-auto max-w-3xl">
          {/* Connecting vertical line */}
          <div className="bg-border absolute left-8 top-12 h-[calc(100%-6rem)] w-0.5 md:left-12" />

          <div className="space-y-12">
            {features.map((feature, i) => (
              <div key={i} className="relative flex items-start gap-6">
                {/* Number badge */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`${cardBg} border-border flex h-16 w-16 items-center justify-center rounded-full border-4 shadow-sm md:h-20 md:w-20`}>
                    <span className="text-primary text-2xl font-bold md:text-3xl">
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 pt-2">
                  <div
                    className={`${cardBg} border-border group rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg md:p-8`}
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div className="bg-muted/50 text-primary inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                        {feature.icon}
                      </div>
                      <h3 className="text-foreground text-xl font-semibold md:text-2xl">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground md:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
