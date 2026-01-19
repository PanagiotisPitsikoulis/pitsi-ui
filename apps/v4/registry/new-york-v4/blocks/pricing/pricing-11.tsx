"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface PricingBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    plans?: Array<{
      name: string
      price: string
      period: string
      description: string
      highlighted?: boolean
      cta: { label: string; href: string }
    }>
    features?: Array<{
      name: string
      category?: string
      tiers: Array<boolean | string>
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: {
      root?: string
      badge?: string
      title?: string
      description?: string
    }
  }
}

const pricing11Defaults = {
  badge: "Compare Tours",
  title: "Find Your Perfect Journey",
  description:
    "Compare our tour packages side by side to find the experience that matches your travel style.",
  plans: [
    {
      name: "Budget Explorer",
      price: "$899",
      period: "per person",
      description: "Essential travel experience",
      cta: { label: "Select", href: "#" },
    },
    {
      name: "Comfort Plus",
      price: "$1,599",
      period: "per person",
      description: "Enhanced comfort & access",
      highlighted: true,
      cta: { label: "Select", href: "#" },
    },
    {
      name: "Premium Journey",
      price: "$2,799",
      period: "per person",
      description: "Ultimate travel luxury",
      cta: { label: "Select", href: "#" },
    },
  ],
  features: [
    {
      name: "Accommodation",
      category: "Lodging",
      tiers: ["3-star hotels", "4-star boutique", "5-star luxury"],
    },
    { name: "Room Type", tiers: ["Standard", "Deluxe", "Suite"] },
    {
      name: "Airport Transfers",
      category: "Transportation",
      tiers: ["Shared shuttle", "Private sedan", "Luxury vehicle"],
    },
    {
      name: "Inter-city Travel",
      tiers: ["Economy class", "Business class", "First class"],
    },
    {
      name: "Guided Tours",
      category: "Experiences",
      tiers: ["Group tours", "Small group", "Private guide"],
    },
    { name: "Attraction Access", tiers: [true, "Skip-the-line", "VIP access"] },
    {
      name: "Meals Included",
      category: "Dining",
      tiers: ["Breakfast only", "Breakfast & dinner", "All meals"],
    },
    {
      name: "Restaurant Level",
      tiers: ["Local eateries", "Recommended spots", "Fine dining"],
    },
    {
      name: "Travel Insurance",
      category: "Support",
      tiers: ["Basic", "Comprehensive", "Premium"],
    },
    { name: "24/7 Support", tiers: [true, true, true] },
    { name: "Concierge Service", tiers: [false, true, true] },
    { name: "Trip Customization", tiers: [false, false, true] },
  ],
}

export function Pricing11({
  content = {},
  classNames = {},
}: PricingBlockProps) {
  const {
    badge = pricing11Defaults.badge,
    title = pricing11Defaults.title,
    description = pricing11Defaults.description,
    plans = pricing11Defaults.plans,
    features = pricing11Defaults.features,
  } = content

  // Group features by category
  let currentCategory = ""

  return (
    <section className={cn("bg-background py-24 lg:py-32", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          classNames={classNames.header}
        />

        <div className="mx-auto max-w-5xl overflow-x-auto">
          <table className="w-full min-w-[640px]">
            {/* Header with plans */}
            <thead>
              <tr>
                <th className="w-1/4 p-4 text-left"></th>
                {plans.map((plan, i) => (
                  <th
                    key={i}
                    className={cn(
                      "w-1/4 p-6 text-center",
                      plan.highlighted && "bg-brand/5 rounded-t-2xl"
                    )}
                  >
                    {plan.highlighted && (
                      <span className="bg-brand text-brand-foreground mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold">
                        Recommended
                      </span>
                    )}
                    <h3 className="text-foreground text-xl font-bold">
                      {plan.name}
                    </h3>
                    <div className="mt-3 flex items-baseline justify-center gap-1">
                      <span className="text-foreground text-4xl font-bold">
                        {plan.price}
                      </span>
                    </div>
                    <span className="text-muted-foreground mt-1 block text-sm">
                      {plan.period}
                    </span>
                    <p className="text-muted-foreground mt-2 text-sm">
                      {plan.description}
                    </p>
                    <Button
                      className={cn("mt-4 w-full")}
                      variant={plan.highlighted ? "default" : "outline"}
                      asChild
                    >
                      <Link href={plan.cta.href}>{plan.cta.label}</Link>
                    </Button>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Features */}
            <tbody>
              {features.map((feature, i) => {
                const showCategory =
                  feature.category && feature.category !== currentCategory
                if (feature.category) {
                  currentCategory = feature.category
                }

                return (
                  <ScrollFade
                    key={i}
                    delay={i * 0.03}
                    scrollBased={false}
                    className="contents"
                  >
                    {showCategory && (
                      <tr>
                        <td
                          colSpan={4}
                          className="text-foreground bg-muted/50 px-4 py-3 text-sm font-semibold"
                        >
                          {feature.category}
                        </td>
                      </tr>
                    )}
                    <tr className="border-border border-t">
                      <td className="text-foreground p-4 text-sm font-medium">
                        {feature.name}
                      </td>
                      {feature.tiers.map((value, j) => (
                        <td
                          key={j}
                          className={cn(
                            "p-4 text-center text-sm",
                            plans[j]?.highlighted && "bg-brand/5"
                          )}
                        >
                          {typeof value === "boolean" ? (
                            value ? (
                              <DynamicIcon
                                name="Check"
                                className="text-brand mx-auto h-5 w-5"
                              />
                            ) : (
                              <DynamicIcon
                                name="X"
                                className="text-muted-foreground/40 mx-auto h-5 w-5"
                              />
                            )
                          ) : (
                            <span className="text-foreground">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  </ScrollFade>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            All prices are per person based on double occupancy.{" "}
            <Link href="#" className="text-brand hover:underline">
              See full terms and conditions
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
