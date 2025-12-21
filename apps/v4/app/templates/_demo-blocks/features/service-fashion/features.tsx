"use client"

import { useBlockContext } from "../../_components"

export function FeaturesServiceFashion() {
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
      title: "Global Designers",
      description:
        "Exclusive pieces from emerging and established designers worldwide.",
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
      title: "Personal Styling",
      description:
        "Complimentary styling consultations with our expert fashion advisors.",
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
      title: "Sustainable Fashion",
      description:
        "Ethically sourced materials and carbon-neutral shipping on every order.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-light tracking-[0.3em] uppercase">
            Our Promise
          </p>
          <h2 className="text-foreground text-3xl font-light md:text-5xl">
            Curated For You
          </h2>
        </div>

        {/* Magazine layout - large hero feature + small 2-col grid below */}
        <div className="mx-auto max-w-5xl space-y-6">
          {/* Hero feature - large */}
          <div
            className={`${cardBg} border-border group overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl`}
          >
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex flex-1 items-center justify-center p-12 md:p-16">
                <div className="bg-muted/50 text-primary inline-flex h-32 w-32 items-center justify-center rounded-3xl transition-transform duration-300 group-hover:scale-110">
                  <div className="scale-150">{features[0].icon}</div>
                </div>
              </div>
              <div className="flex-1 p-8 md:p-12">
                <div className="bg-muted/50 mb-4 inline-block rounded-full px-4 py-1">
                  <span className="text-primary text-sm font-medium">
                    Featured
                  </span>
                </div>
                <h3 className="text-foreground mb-4 text-3xl font-medium md:text-4xl">
                  {features[0].title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {features[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* 2-column grid below */}
          <div className="grid gap-6 md:grid-cols-2">
            {features.slice(1).map((feature, i) => (
              <div
                key={i}
                className={`${cardBg} border-border group rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="bg-muted/50 text-primary mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-foreground mb-3 text-xl font-medium">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
