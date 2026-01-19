"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

// Block-specific defaults for travel theme
const features14Defaults = {
  badge: "Why Choose Us",
  title: "Travel With Confidence",
  description:
    "We handle every detail so you can focus on making memories. From planning to return, we've got you covered.",
  features: [
    {
      icon: "Compass",
      title: "Expert Local Guides",
      description:
        "Our certified guides bring destinations to life with insider knowledge and authentic experiences.",
    },
    {
      icon: "Shield",
      title: "24/7 Support",
      description:
        "Round-the-clock assistance wherever you are. One call away from solving any travel challenge.",
    },
    {
      icon: "Target",
      title: "Best Price Guarantee",
      description:
        "Found a lower price? We'll match it and give you 10% off your next adventure with us.",
    },
    {
      icon: "MapPin",
      title: "Handpicked Destinations",
      description:
        "Every location is personally vetted by our travel experts for quality and authenticity.",
    },
    {
      icon: "Calendar",
      title: "Flexible Booking",
      description:
        "Plans change. Our flexible policies let you modify or cancel with peace of mind.",
    },
    {
      icon: "Heart",
      title: "Sustainable Travel",
      description:
        "Travel responsibly with our eco-conscious partners and carbon offset programs.",
    },
  ],
}

export function Features14({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const {
    badge = features14Defaults.badge,
    title = features14Defaults.title,
    description = features14Defaults.description,
    features = features14Defaults.features,
  } = content

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <SlideUp delay={0} duration={0.6} distance={30}>
          <BlockHeader
            badge={badge}
            title={title}
            description={description}
            classNames={classNames.header}
          />
        </SlideUp>

        <div
          className={cn(
            "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
            classNames.grid
          )}
        >
          {features.map((feature, idx) => (
            <SlideUp
              key={idx}
              delay={0.1 + idx * 0.05}
              duration={0.6}
              distance={30}
            >
              <div
                className={cn(
                  "bg-card border-border group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md",
                  classNames.feature?.root
                )}
              >
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
                    "text-foreground mb-2 text-lg font-semibold",
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
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// Backward compatibility export
export { Features14 as FeaturesTravelGrid }
