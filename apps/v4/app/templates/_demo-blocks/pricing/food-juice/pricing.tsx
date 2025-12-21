"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function PricingFoodJuice() {
  const { cardBg } = useBlockContext()
  const plans = [
    {
      name: "3-Day Cleanse",
      price: "$99",
      description: "Quick reset for beginners",
      features: [
        "18 cold-pressed juices",
        "Daily nutrition guide",
        "Wellness tips",
        "Email support",
      ],
    },
    {
      name: "5-Day Cleanse",
      price: "$149",
      description: "Deep detox experience",
      features: [
        "30 cold-pressed juices",
        "Custom nutrition plan",
        "Wellness coaching",
        "Priority support",
        "Reintroduction guide",
      ],
      popular: true,
    },
    {
      name: "7-Day Cleanse",
      price: "$199",
      description: "Complete transformation",
      features: [
        "42 cold-pressed juices",
        "Personalized meal plan",
        "Daily wellness calls",
        "24/7 support",
        "Meal prep guide",
        "Follow-up consultation",
      ],
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            Pricing
          </p>
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-5xl">
            Juice Cleanse Programs
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Fresh, organic juices delivered daily. Reset and rejuvenate.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-primary text-primary-foreground border-primary border-2"
                  : `${cardBg} border-border border`
              }`}
            >
              {plan.popular && (
                <div className="bg-accent text-accent-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-medium">
                  Most Popular
                </div>
              )}
              <div className="mb-6 text-center">
                <h3
                  className={`mb-2 text-xl font-semibold ${plan.popular ? "" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className={`text-4xl font-bold ${plan.popular ? "" : "text-foreground"}`}
                  >
                    {plan.price}
                  </span>
                </div>
                <p
                  className={`mt-2 text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                >
                  {plan.description}
                </p>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <svg
                      className={`h-5 w-5 flex-shrink-0 ${plan.popular ? "text-primary-foreground" : "text-primary"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className={plan.popular ? "" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full ${
                  plan.popular
                    ? "bg-background text-foreground hover:bg-background/90"
                    : ""
                }`}
                variant={plan.popular ? "secondary" : "default"}
              >
                Start Cleanse
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
