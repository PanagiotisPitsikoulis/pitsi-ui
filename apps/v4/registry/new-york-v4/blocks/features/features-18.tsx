"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import { ScrollScale } from "@/registry/new-york-v4/animations/scroll-scale/scroll-scale"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

// Block-specific defaults for travel theme
const features18Defaults = {
  badge: "By The Numbers",
  title: "Trusted By Travelers Worldwide",
  description:
    "Join thousands of satisfied adventurers who have explored the world with us.",
  stats: [
    { value: "150+", label: "Destinations", icon: "Globe" },
    { value: "50k+", label: "Happy Travelers", icon: "Users" },
    { value: "98%", label: "Satisfaction Rate", icon: "Star" },
    { value: "15+", label: "Years Experience", icon: "Award" },
  ],
  features: [
    {
      icon: "Map",
      title: "Global Network",
      description:
        "Partners and guides in over 150 countries ensure authentic local experiences wherever you go.",
      stat: { value: "150+", label: "Countries" },
    },
    {
      icon: "Shield",
      title: "Secure Booking",
      description:
        "Your payments are protected with bank-level security and our satisfaction guarantee.",
      stat: { value: "100%", label: "Secure" },
    },
    {
      icon: "Clock",
      title: "Instant Confirmation",
      description:
        "Receive immediate booking confirmation and access your itinerary within minutes.",
      stat: { value: "<5min", label: "Response" },
    },
    {
      icon: "HeartHandshake",
      title: "Dedicated Support",
      description:
        "Our travel experts are available around the clock to assist with any needs.",
      stat: { value: "24/7", label: "Support" },
    },
  ],
}

export function Features18({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const {
    badge = features18Defaults.badge,
    title = features18Defaults.title,
    description = features18Defaults.description,
    stats = features18Defaults.stats,
    features = features18Defaults.features,
  } = content as typeof features18Defaults

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          classNames={classNames.header}
        />

        {/* Stats Bar */}
        <div className="bg-brand/5 border-brand/10 mb-16 grid grid-cols-2 gap-6 rounded-3xl border p-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <ScrollScale
              key={idx}
              startScale={0.9}
              endScale={1}
              delay={idx * 0.05}
            >
              <div className="text-center">
                <div className="bg-brand/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl">
                  <DynamicIcon
                    name={stat.icon}
                    className="text-brand h-6 w-6"
                  />
                </div>
                <div className="text-brand text-3xl font-bold md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-muted-foreground mt-1 text-sm">
                  {stat.label}
                </div>
              </div>
            </ScrollScale>
          ))}
        </div>

        {/* Feature Cards with Stats */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, idx) => (
            <ScrollScale
              key={idx}
              startScale={0.95}
              endScale={1}
              delay={0.1 + idx * 0.05}
            >
              <div
                className={cn(
                  "bg-card border-border group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md",
                  classNames.feature?.root
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div
                      className={cn(
                        "bg-brand/10 group-hover:bg-brand/20 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors",
                        classNames.feature?.iconWrapper
                      )}
                    >
                      <DynamicIcon
                        name={feature.icon}
                        className={cn(
                          "text-brand h-6 w-6",
                          classNames.feature?.icon
                        )}
                      />
                    </div>
                    <h3
                      className={cn(
                        "text-foreground mb-2 text-xl font-semibold",
                        classNames.feature?.title
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={cn(
                        "text-muted-foreground text-sm leading-relaxed",
                        classNames.feature?.description
                      )}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Stat Highlight */}
                  {feature.stat && (
                    <div className="ml-6 text-right">
                      <div className="text-brand text-2xl font-bold md:text-3xl">
                        {feature.stat.value}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {feature.stat.label}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollScale>
          ))}
        </div>
      </div>
    </section>
  )
}

// Backward compatibility export
export { Features18 as FeaturesTravelStats }
