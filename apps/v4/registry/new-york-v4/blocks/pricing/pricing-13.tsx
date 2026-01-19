"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import Aurora from "@/registry/new-york-v4/animations/aurora/aurora"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface PricingBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    signature?: {
      name: string
      icon: string
      price: string
      period: string
      description: string
      features: string[]
      cta: { label: string; href: string }
    }
    private?: {
      name: string
      icon: string
      description: string
      highlights: string[]
      features: string[]
      cta: { label: string; href: string }
    }
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

const pricing13Defaults = {
  badge: "Luxury Collection",
  title: "Extraordinary Journeys",
  description:
    "Experience the world's most exclusive destinations with our signature luxury travel experiences.",
  signature: {
    name: "Signature Experience",
    icon: "Gem",
    price: "$8,999",
    period: "per person",
    description: "Curated luxury for discerning travelers",
    features: [
      "5-star iconic hotels",
      "First-class flights",
      "Private chauffeur service",
      "Exclusive restaurant reservations",
      "VIP museum & attraction access",
      "Personal travel designer",
      "Luxury spa experiences",
      "Premium travel insurance",
    ],
    cta: { label: "Book Signature", href: "#" },
  },
  private: {
    name: "Private Charter",
    icon: "Crown",
    description: "The ultimate in personalized luxury travel",
    highlights: [
      "Private jet travel",
      "Yacht excursions",
      "Royal suite accommodations",
    ],
    features: [
      "Everything in Signature",
      "Private aircraft charter",
      "Superyacht experiences",
      "Presidential suites only",
      "Michelin-star private dining",
      "Celebrity chef experiences",
      "Exclusive event access",
      "24/7 dedicated concierge team",
      "Custom itinerary creation",
      "Family office coordination",
    ],
    cta: { label: "Contact Private Travel", href: "#" },
  },
}

export function Pricing13({
  content = {},
  classNames = {},
}: PricingBlockProps) {
  const {
    badge = pricing13Defaults.badge,
    title = pricing13Defaults.title,
    description = pricing13Defaults.description,
    signature = pricing13Defaults.signature,
    private: privateTravel = pricing13Defaults.private,
  } = content

  return (
    <section className={cn("bg-background py-24 lg:py-32", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          classNames={classNames.header}
        />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Signature Plan */}
          <SlideUp delay={0.1} scrollBased={false}>
            <div className="border-border flex h-full flex-col rounded-3xl border p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="bg-brand/10 flex h-14 w-14 items-center justify-center rounded-2xl">
                  <DynamicIcon
                    name={signature.icon}
                    className="text-brand h-7 w-7"
                  />
                </div>
                <div>
                  <h3 className="text-foreground text-xl font-bold">
                    {signature.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {signature.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-foreground text-5xl font-bold">
                  {signature.price}
                </span>
                <span className="text-muted-foreground ml-2">
                  {signature.period}
                </span>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {signature.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-foreground flex items-center gap-3 text-sm"
                  >
                    <DynamicIcon
                      name="Check"
                      className="text-brand h-5 w-5 shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full rounded-full" size="lg" asChild>
                <Link href={signature.cta.href}>{signature.cta.label}</Link>
              </Button>
            </div>
          </SlideUp>

          {/* Private Charter Plan */}
          <SlideUp delay={0.2} scrollBased={false}>
            <div className="bg-foreground text-background relative flex h-full flex-col overflow-hidden rounded-3xl p-8">
              {/* Aurora background */}
              <div className="pointer-events-none absolute inset-0 opacity-30">
                <Aurora
                  colorStops={["#0ea5e9", "#6366f1", "#0ea5e9"]}
                  amplitude={0.8}
                  blend={0.6}
                  speed={0.5}
                />
              </div>

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="bg-background/10 flex h-14 w-14 items-center justify-center rounded-2xl">
                    <DynamicIcon
                      name={privateTravel.icon}
                      className="text-background h-7 w-7"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{privateTravel.name}</h3>
                    <p className="text-background/70 text-sm">
                      {privateTravel.description}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {privateTravel.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="bg-background/20 rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold">Custom Pricing</span>
                  <p className="text-background/70 mt-1 text-sm">
                    Tailored to your dream journey
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-4">
                  {privateTravel.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <DynamicIcon
                        name="Check"
                        className="text-background h-5 w-5 shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="secondary"
                  className="w-full rounded-full"
                  size="lg"
                  asChild
                >
                  <Link href={privateTravel.cta.href}>
                    {privateTravel.cta.label}
                  </Link>
                </Button>
              </div>
            </div>
          </SlideUp>
        </div>

        {/* Trust indicators */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-muted-foreground mb-6 text-sm">
            Trusted by discerning travelers worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <DynamicIcon name="Award" className="text-brand h-5 w-5" />
              <span className="text-foreground text-sm font-medium">
                Conde Nast Top 10
              </span>
            </div>
            <div className="flex items-center gap-2">
              <DynamicIcon name="Star" className="text-brand h-5 w-5" />
              <span className="text-foreground text-sm font-medium">
                5-Star Service
              </span>
            </div>
            <div className="flex items-center gap-2">
              <DynamicIcon name="Shield" className="text-brand h-5 w-5" />
              <span className="text-foreground text-sm font-medium">
                ASTA Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
