"use client"

import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { TextGradientOpacity } from "@/registry/new-york-v4/animations/text-gradient-opacity/text-gradient-opacity"

interface StatsBlockProps {
  content?: {
    title?: string
    description?: string
    stats?: Array<{
      value: string
      label: string
      description?: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const stats3Defaults = {
  title: "Driving Growth at Scale",
  description: "Our impact by the numbers.",
  stats: [
    {
      value: "10M+",
      label: "Active Users",
      description: "Monthly active users across all platforms",
    },
    {
      value: "$2.5B",
      label: "Processed",
      description: "Transaction volume processed annually",
    },
    {
      value: "99.99%",
      label: "Uptime",
      description: "System reliability over the past year",
    },
    {
      value: "150+",
      label: "Countries",
      description: "Serving customers globally",
    },
  ],
}

export function Stats3({ content = {}, classNames = {} }: StatsBlockProps) {
  const {
    title = stats3Defaults.title,
    description = stats3Defaults.description,
    stats = stats3Defaults.stats,
  } = content

  // Create a combined text for the gradient opacity effect
  const combinedStatsText = stats
    .map((stat) => `${stat.value} ${stat.label}`)
    .join(" - ")

  return (
    <section className={cn("bg-foreground text-background", classNames.root)}>
      <div
        className={cn("container px-6 py-20 md:py-32", classNames.container)}
      >
        <div className="mb-16 text-center">
          <h2
            className={cn(
              "mb-4 text-3xl font-bold md:text-5xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-background/70 mx-auto max-w-2xl text-lg",
              classNames.header?.description
            )}
          >
            {description}
          </p>
        </div>

        {/* Animated headline with TextGradientOpacity */}
        <div className="mb-16">
          <TextGradientOpacity
            text={combinedStatsText}
            className="[&_p]:text-background [&_span]:text-background text-center"
            offset={["start 0.9", "start 0.4"]}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <SlideUp key={i} delay={0.1 * i} distance={30}>
              <div className="border-background/20 border-l pl-6 text-center md:text-left">
                <p className="mb-2 text-5xl font-bold md:text-6xl lg:text-7xl">
                  {stat.value}
                </p>
                <p className="mb-2 text-lg font-semibold">{stat.label}</p>
                {stat.description && (
                  <p className="text-background/60 text-sm">
                    {stat.description}
                  </p>
                )}
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats3
