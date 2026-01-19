"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

interface NewsletterBlockProps {
  content?: {
    badge?: string
    title?: string
    description?: string
    placeholder?: string
    buttonLabel?: string
    perks?: Array<{ icon: string; title: string; description: string }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const newsletter10Defaults = {
  badge: "Travel Newsletter",
  title: "Your Passport to Savings",
  description:
    "Subscribe and unlock access to exclusive travel deals, destination guides, and members-only perks.",
  placeholder: "Enter your email",
  buttonLabel: "Join Free",
  perks: [
    {
      icon: "Tag",
      title: "Exclusive Deals",
      description: "Up to 40% off flights & hotels",
    },
    {
      icon: "Map",
      title: "Destination Guides",
      description: "Curated travel itineraries",
    },
    {
      icon: "Clock",
      title: "Early Access",
      description: "Book deals before anyone else",
    },
  ],
}

export function Newsletter10({
  content = {},
  classNames = {},
}: NewsletterBlockProps) {
  const {
    badge = newsletter10Defaults.badge,
    title = newsletter10Defaults.title,
    description = newsletter10Defaults.description,
    placeholder = newsletter10Defaults.placeholder,
    buttonLabel = newsletter10Defaults.buttonLabel,
    perks = newsletter10Defaults.perks,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: Content & Form */}
          <SlideUp delay={0} distance={20}>
            <div>
              {badge && (
                <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
                  {badge}
                </span>
              )}
              <h2 className="font-display text-foreground mb-4 text-3xl font-bold md:text-4xl">
                {title}
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                {description}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder={placeholder}
                  className="h-12 flex-1"
                />
                <Button size="lg" className="h-12 shrink-0">
                  {buttonLabel}
                </Button>
              </div>

              <p className="text-muted-foreground mt-4 text-sm">
                Join 30,000+ travelers. No spam, ever.
              </p>
            </div>
          </SlideUp>

          {/* Right: Perks */}
          <SlideUp delay={0.1} distance={20}>
            <div className="bg-muted rounded-2xl p-6 md:p-8">
              <h3 className="text-foreground mb-6 text-lg font-semibold">
                What you'll get
              </h3>
              <div className="space-y-6">
                {perks.map((perk, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <DynamicIcon
                        name={perk.icon}
                        className="text-primary h-5 w-5"
                      />
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">
                        {perk.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {perk.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
