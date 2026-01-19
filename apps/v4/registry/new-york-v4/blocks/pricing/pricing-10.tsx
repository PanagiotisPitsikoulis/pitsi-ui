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
    packages?: Array<{
      icon: string
      name: string
      destination: string
      duration: string
      price: string
      originalPrice?: string
      description: string
      highlights: string[]
      highlighted?: boolean
      cta: { label: string; href: string }
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

const pricing10Defaults = {
  badge: "Featured Tours",
  title: "Curated Travel Experiences",
  description:
    "Handpicked destinations with expertly crafted itineraries for unforgettable adventures.",
  packages: [
    {
      icon: "Mountain",
      name: "Alpine Adventure",
      destination: "Swiss Alps",
      duration: "7 Days",
      price: "$2,499",
      originalPrice: "$2,999",
      description:
        "Experience breathtaking mountain scenery with guided hikes and cozy chalets.",
      highlights: [
        "Scenic train rides",
        "Mountain lodges",
        "Guided hiking tours",
        "Local cuisine",
      ],
      cta: { label: "View Details", href: "#" },
    },
    {
      icon: "Palmtree",
      name: "Tropical Paradise",
      destination: "Maldives",
      duration: "5 Days",
      price: "$3,999",
      description:
        "Escape to crystal-clear waters and pristine beaches in overwater villas.",
      highlights: [
        "Overwater bungalow",
        "Snorkeling trips",
        "Sunset cruise",
        "Spa treatment",
      ],
      highlighted: true,
      cta: { label: "View Details", href: "#" },
    },
    {
      icon: "Landmark",
      name: "European Discovery",
      destination: "Italy & France",
      duration: "10 Days",
      price: "$4,299",
      originalPrice: "$4,999",
      description:
        "Explore iconic cities, world-class art, and legendary cuisine across two countries.",
      highlights: [
        "Skip-the-line access",
        "Boutique hotels",
        "Wine tasting",
        "Private guides",
      ],
      cta: { label: "View Details", href: "#" },
    },
  ],
}

export function Pricing10({
  content = {},
  classNames = {},
}: PricingBlockProps) {
  const {
    badge = pricing10Defaults.badge,
    title = pricing10Defaults.title,
    description = pricing10Defaults.description,
    packages = pricing10Defaults.packages,
  } = content

  return (
    <section className={cn("bg-muted py-24 lg:py-32", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          classNames={classNames.header}
        />

        {/* Package Cards */}
        <div className="mx-auto max-w-5xl space-y-6">
          {packages.map((pkg, i) => (
            <ScrollFade key={i} delay={i * 0.1} scrollBased={false}>
              <div
                className={cn(
                  "group relative flex flex-col gap-6 rounded-3xl p-6 transition-all md:flex-row md:items-center md:p-8",
                  pkg.highlighted
                    ? "bg-brand text-brand-foreground shadow-brand/20 shadow-2xl"
                    : "bg-background border-border border hover:shadow-lg"
                )}
              >
                {pkg.highlighted && (
                  <div className="bg-background text-foreground absolute -top-3 right-6 rounded-full px-4 py-1 text-xs font-semibold shadow-lg">
                    Best Value
                  </div>
                )}

                {/* Left: Icon & Basic Info */}
                <div className="flex items-start gap-4 md:w-1/4">
                  <div
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
                      pkg.highlighted ? "bg-brand-foreground/20" : "bg-brand/10"
                    )}
                  >
                    <DynamicIcon
                      name={pkg.icon}
                      className={cn(
                        "h-7 w-7",
                        pkg.highlighted ? "text-brand-foreground" : "text-brand"
                      )}
                    />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        "text-lg font-bold",
                        !pkg.highlighted && "text-foreground"
                      )}
                    >
                      {pkg.name}
                    </h3>
                    <div
                      className={cn(
                        "mt-1 flex items-center gap-2 text-sm",
                        pkg.highlighted
                          ? "text-brand-foreground/70"
                          : "text-muted-foreground"
                      )}
                    >
                      <DynamicIcon name="MapPin" className="h-4 w-4" />
                      {pkg.destination}
                    </div>
                    <div
                      className={cn(
                        "mt-1 flex items-center gap-2 text-sm",
                        pkg.highlighted
                          ? "text-brand-foreground/70"
                          : "text-muted-foreground"
                      )}
                    >
                      <DynamicIcon name="Calendar" className="h-4 w-4" />
                      {pkg.duration}
                    </div>
                  </div>
                </div>

                {/* Center: Description & Highlights */}
                <div className="flex-1">
                  <p
                    className={cn(
                      "mb-4 text-sm",
                      pkg.highlighted
                        ? "text-brand-foreground/80"
                        : "text-muted-foreground"
                    )}
                  >
                    {pkg.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, j) => (
                      <span
                        key={j}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
                          pkg.highlighted
                            ? "bg-brand-foreground/20 text-brand-foreground"
                            : "bg-muted text-foreground"
                        )}
                      >
                        <DynamicIcon
                          name="Check"
                          className={cn(
                            "h-3 w-3",
                            pkg.highlighted
                              ? "text-brand-foreground"
                              : "text-brand"
                          )}
                        />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Price & CTA */}
                <div className="flex flex-col items-end gap-4 md:w-48">
                  <div className="text-right">
                    <div className="flex items-baseline gap-2">
                      {pkg.originalPrice && (
                        <span
                          className={cn(
                            "text-sm line-through",
                            pkg.highlighted
                              ? "text-brand-foreground/50"
                              : "text-muted-foreground"
                          )}
                        >
                          {pkg.originalPrice}
                        </span>
                      )}
                      <span
                        className={cn(
                          "text-3xl font-bold",
                          !pkg.highlighted && "text-foreground"
                        )}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "text-xs",
                        pkg.highlighted
                          ? "text-brand-foreground/60"
                          : "text-muted-foreground"
                      )}
                    >
                      per person
                    </span>
                  </div>
                  <Button
                    className={cn(
                      "w-full rounded-full md:w-auto",
                      pkg.highlighted &&
                        "bg-brand-foreground text-brand hover:bg-brand-foreground/90"
                    )}
                    variant={pkg.highlighted ? "secondary" : "default"}
                    asChild
                  >
                    <Link href={pkg.cta.href}>{pkg.cta.label}</Link>
                  </Button>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="#" className="text-brand hover:underline">
              Contact us for custom itineraries
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
