"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function PricingServicePlants() {
  const { cardBg } = useBlockContext()
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for new plant parents",
      features: [
        "1 medium plant",
        "Care guide included",
        "Standard pot",
        "Email support",
      ],
    },
    {
      name: "Grower",
      price: "$59",
      description: "For the growing collection",
      features: [
        "2 medium plants",
        "Care guides included",
        "Premium ceramic pots",
        "Priority support",
        "Free repotting guide",
      ],
      popular: true,
    },
    {
      name: "Jungle",
      price: "$99",
      description: "Transform your space",
      features: [
        "4 plants (mixed sizes)",
        "Care guides included",
        "Designer pot collection",
        "24/7 plant hotline",
        "Monthly care tips",
        "Free replacements",
      ],
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Monthly Boxes
          </p>
          <h2 className="font-display mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Subscribe & Save
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Fresh plants delivered to your door every month.
          </p>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0">
          {plans.map((plan, i) => {
            const isLeft = i === 0
            const isRight = i === 2
            const isMiddle = plan.popular

            return (
              <div
                key={i}
                className={cn(
                  "relative w-full max-w-sm rounded-3xl p-10 transition-all duration-300",
                  // Rotation and positioning for desktop
                  isLeft &&
                    "lg:z-0 lg:-mr-6 lg:origin-right lg:-rotate-3 lg:hover:z-20 lg:hover:rotate-0 lg:hover:scale-105",
                  isRight &&
                    "lg:z-0 lg:-ml-6 lg:origin-left lg:rotate-3 lg:hover:z-20 lg:hover:rotate-0 lg:hover:scale-105",
                  isMiddle &&
                    "lg:z-10 lg:scale-105 lg:hover:scale-110",
                  // Styling
                  plan.popular
                    ? "border-2 border-primary bg-primary text-primary-foreground shadow-xl"
                    : cn(cardBg, "border border-border shadow-md")
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-medium text-accent-foreground">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3
                    className={cn(
                      "mb-2 text-xl font-semibold",
                      !plan.popular && "text-foreground"
                    )}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span
                      className={cn(
                        "text-5xl font-bold",
                        !plan.popular && "text-foreground"
                      )}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={cn(
                        plan.popular
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      )}
                    >
                      /month
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-2 text-sm",
                      plan.popular
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    )}
                  >
                    {plan.description}
                  </p>
                </div>
                <ul className="mb-8 mt-8 space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <svg
                        className={cn(
                          "h-5 w-5 flex-shrink-0",
                          plan.popular ? "text-primary-foreground" : "text-primary"
                        )}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className={cn(!plan.popular && "text-foreground")}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn(
                    "w-full rounded-full",
                    plan.popular && "bg-background text-foreground hover:bg-background/90"
                  )}
                  variant={plan.popular ? "secondary" : "default"}
                >
                  Get Started
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
