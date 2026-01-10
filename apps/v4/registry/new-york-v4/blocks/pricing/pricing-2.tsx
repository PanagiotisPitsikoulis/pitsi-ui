"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import {
  pricingDefaults,
  type PricingBlockProps,
} from "@/lib/blocks/pricing.types"
import { cn } from "@/lib/utils"
import TextPressure from "@/registry/new-york-v4/animations/text-pressure/text-pressure"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"
import { Button } from "@/registry/new-york-v4/ui/button"

// Block-specific defaults (fitness theme)
const pricing2Defaults = {
  ...pricingDefaults,
  badge: "Membership",
  title: "Invest In Yourself",
  description: "No contracts. No hidden fees. Just results.",
  footerNote:
    "All memberships include a complimentary fitness assessment. Cancel anytime.",
  plans: [
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
      cta: { label: "Buy Class", href: "#" },
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
      cta: { label: "Start Membership", href: "#" },
      highlighted: true,
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
      cta: { label: "Buy Pack", href: "#" },
    },
  ],
}

export function Pricing2({ content = {}, classNames = {} }: PricingBlockProps) {
  const {
    badge = pricing2Defaults.badge,
    title = pricing2Defaults.title,
    description = pricing2Defaults.description,
    plans = pricing2Defaults.plans,
  } = content

  const footerNote =
    (content as { footerNote?: string }).footerNote ??
    pricing2Defaults.footerNote
  return (
    <section className={cn("bg-neutral-950 py-24 lg:py-32", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Animated Title with TextPressure */}
        <div className="mx-auto mb-16 text-center">
          {badge && (
            <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              {badge}
            </span>
          )}
          <div className="mx-auto h-24 w-full max-w-3xl md:h-32 lg:h-40">
            <TextPressure
              text={title || "Invest In Yourself"}
              textColor="#22d3ee"
              strokeColor="#06b6d4"
              stroke={true}
              width={true}
              weight={true}
              italic={false}
              minFontSize={32}
              className="font-display"
            />
          </div>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              {description}
            </p>
          )}
        </div>

        {/* Pricing Cards */}
        <div
          className={cn(
            "mx-auto grid max-w-5xl gap-6 lg:grid-cols-3",
            classNames.grid
          )}
        >
          {plans.map((plan) => {
            const planClassNames = plan.highlighted
              ? classNames.planHighlighted
              : classNames.plan

            return (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-2xl p-8",
                  plan.highlighted
                    ? "bg-white text-black"
                    : "bg-white/5 text-white",
                  planClassNames?.root
                )}
              >
                {/* BorderBeam animation for highlighted plan */}
                {plan.highlighted && (
                  <BorderBeam
                    size={200}
                    duration={8}
                    colorFrom="#22d3ee"
                    colorTo="#a855f7"
                    borderWidth={2}
                  />
                )}
                {/* Popular badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-cyan-500/25">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className={cn("mb-8", planClassNames?.header)}>
                  <h3
                    className={cn(
                      "mb-2 text-xl font-bold",
                      planClassNames?.name
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      "text-sm",
                      plan.highlighted ? "text-black/60" : "text-white/60",
                      planClassNames?.description
                    )}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={cn(
                        "text-5xl font-bold tracking-tight",
                        planClassNames?.price
                      )}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        plan.highlighted ? "text-black/60" : "text-white/60",
                        planClassNames?.period
                      )}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul
                  className={cn(
                    "mb-8 flex-1 space-y-4",
                    planClassNames?.features
                  )}
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-start gap-3",
                        planClassNames?.featureItem
                      )}
                    >
                      <DynamicIcon
                        name="Check"
                        className={cn(
                          "mt-0.5 h-5 w-5 shrink-0",
                          plan.highlighted ? "text-black" : "text-white/60"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm",
                          plan.highlighted ? "text-black/80" : "text-white/70"
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
                    plan.highlighted
                      ? "bg-black text-white hover:bg-black/90"
                      : "bg-white text-black hover:bg-white/90",
                    planClassNames?.cta
                  )}
                >
                  {plan.cta?.label}
                </Button>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        {footerNote && (
          <p className="mt-12 text-center text-sm text-white/40">
            {footerNote}
          </p>
        )}
      </div>
    </section>
  )
}
