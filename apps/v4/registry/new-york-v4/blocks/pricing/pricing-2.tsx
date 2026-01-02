"use client"

import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface PricingTier {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  cta: string
  popular?: boolean
}

const tiers: PricingTier[] = [
  {
    name: "Drop-In",
    description: "Perfect for trying us out",
    price: "$35",
    period: "per class",
    features: [
      "Access to any single class",
      "Towel service included",
      "Locker room access",
      "Post-workout shake",
    ],
    cta: "Buy Class",
  },
  {
    name: "Unlimited",
    description: "For the committed athlete",
    price: "$199",
    period: "per month",
    features: [
      "Unlimited classes",
      "Priority booking",
      "Free guest passes (2/month)",
      "Recovery room access",
      "Nutrition consultation",
      "Exclusive member events",
    ],
    cta: "Start Membership",
    popular: true,
  },
  {
    name: "8-Pack",
    description: "Flexibility meets value",
    price: "$220",
    period: "8 classes",
    features: [
      "8 classes to use anytime",
      "Valid for 60 days",
      "Towel service included",
      "Locker room access",
      "Rollover unused classes",
    ],
    cta: "Buy Pack",
  },
]

export function Pricing2() {
  return (
    <section className="bg-neutral-950 py-24 lg:py-32">
      <div className="container px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-white/60 uppercase">
            Membership
          </p>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Invest In Yourself
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            No contracts. No hidden fees. Just results.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl p-8",
                tier.popular ? "bg-white text-black" : "bg-white/5 text-white"
              )}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-black px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <h3 className="mb-2 text-xl font-bold">{tier.name}</h3>
                <p
                  className={cn(
                    "text-sm",
                    tier.popular ? "text-black/60" : "text-white/60"
                  )}
                >
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      tier.popular ? "text-black/60" : "text-white/60"
                    )}
                  >
                    {tier.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "mt-0.5 h-5 w-5 shrink-0",
                        tier.popular ? "text-black" : "text-white/60"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm",
                        tier.popular ? "text-black/80" : "text-white/70"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                size="lg"
                className={cn(
                  "w-full rounded-full font-semibold",
                  tier.popular
                    ? "bg-black text-white hover:bg-black/90"
                    : "bg-white text-black hover:bg-white/90"
                )}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <p className="mt-12 text-center text-sm text-white/40">
          All memberships include a complimentary fitness assessment. Cancel
          anytime.
        </p>
      </div>
    </section>
  )
}
