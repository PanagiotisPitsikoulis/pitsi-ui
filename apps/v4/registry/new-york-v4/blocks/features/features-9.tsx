"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FeaturesBlockProps } from "@/lib/blocks/features.types"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

const features9Defaults = {
  badge: "Why Choose Us",
  title: "Everything you need to build modern interfaces",
  description:
    "A collection of beautifully designed, accessible components that you own and control.",
  features: [
    {
      icon: "Copy01Icon",
      title: "Copy & Paste",
      description:
        "No package to install. Just copy the code and customize it to your needs.",
    },
    {
      icon: "PaintBrushIcon",
      title: "Customizable",
      description:
        "Built with Tailwind CSS. Every component is fully customizable.",
    },
    {
      icon: "AccessibilityIcon",
      title: "Accessible",
      description: "Built on Radix UI primitives. Follows WAI-ARIA guidelines.",
    },
    {
      icon: "CodeIcon",
      title: "TypeScript",
      description: "Written in TypeScript with full type definitions included.",
    },
    {
      icon: "Moon02Icon",
      title: "Dark Mode",
      description:
        "Every component supports light and dark mode out of the box.",
    },
    {
      icon: "OpenSourceIcon",
      title: "Open Source",
      description:
        "Free and open source. Use it in personal or commercial projects.",
    },
  ],
}

export function Features9({
  content = {},
  classNames = {},
}: FeaturesBlockProps) {
  const {
    badge = features9Defaults.badge,
    title = features9Defaults.title,
    description = features9Defaults.description,
    features = features9Defaults.features,
  } = content as typeof features9Defaults

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          classNames={classNames.header}
        />

        {/* Features grid */}
        <div
          className={cn(
            "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
            classNames.grid
          )}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={cn(
                "bg-card border-border group hover:border-foreground/20 rounded-2xl border p-6 transition-colors",
                classNames.feature?.root
              )}
            >
              <div
                className={cn(
                  "bg-brand/10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl",
                  classNames.feature?.iconWrapper
                )}
              >
                <DynamicIcon
                  name={feature.icon}
                  className={cn("text-brand h-6 w-6", classNames.feature?.icon)}
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
          ))}
        </div>
      </div>
    </section>
  )
}
