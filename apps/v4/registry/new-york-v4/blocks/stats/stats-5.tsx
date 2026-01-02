"use client"

import { cn } from "@/lib/utils"

interface StatsBlockProps {
  content?: {
    title?: string
    description?: string
    milestones?: Array<{
      year: string
      title: string
      stat: string
      description: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const stats5Defaults = {
  title: "Our Journey",
  description: "Key milestones in our growth story.",
  milestones: [
    {
      year: "2020",
      title: "Founded",
      stat: "3",
      description: "Started with 3 founders in a small office",
    },
    {
      year: "2021",
      title: "First Funding",
      stat: "$5M",
      description: "Raised seed round to accelerate growth",
    },
    {
      year: "2022",
      title: "100K Users",
      stat: "100K+",
      description: "Reached our first major user milestone",
    },
    {
      year: "2023",
      title: "Series A",
      stat: "$25M",
      description: "Secured Series A to expand globally",
    },
    {
      year: "2024",
      title: "1M Users",
      stat: "1M+",
      description: "Crossed one million active users",
    },
    {
      year: "2025",
      title: "Today",
      stat: "10M+",
      description: "Serving millions of users worldwide",
    },
  ],
}

export function Stats5({ content = {}, classNames = {} }: StatsBlockProps) {
  const {
    title = stats5Defaults.title,
    description = stats5Defaults.description,
    milestones = stats5Defaults.milestones,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mb-16 text-center">
          <h2
            className={cn(
              "text-foreground mb-4 text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-muted-foreground mx-auto max-w-2xl",
              classNames.header?.description
            )}
          >
            {description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="bg-border absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 md:block" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, i) => (
              <div
                key={i}
                className={cn(
                  "relative grid gap-8 md:grid-cols-2 md:gap-16",
                  i % 2 === 0 ? "md:text-right" : ""
                )}
              >
                {/* Content */}
                <div
                  className={cn(
                    "md:py-8",
                    i % 2 === 0 ? "md:order-1" : "md:order-2"
                  )}
                >
                  <span className="text-primary text-sm font-semibold">
                    {milestone.year}
                  </span>
                  <h3 className="text-foreground mt-1 text-xl font-bold">
                    {milestone.title}
                  </h3>
                  <p className="text-foreground mt-2 text-4xl font-bold">
                    {milestone.stat}
                  </p>
                  <p className="text-muted-foreground mt-2">
                    {milestone.description}
                  </p>
                </div>

                {/* Dot */}
                <div
                  className={cn(
                    "absolute top-8 left-1/2 hidden h-4 w-4 -translate-x-1/2 md:block",
                    i % 2 === 0 ? "md:order-2" : "md:order-1"
                  )}
                >
                  <div className="bg-primary h-4 w-4 rounded-full" />
                </div>

                {/* Empty space for alternating layout */}
                <div
                  className={cn(
                    "hidden md:block",
                    i % 2 === 0 ? "md:order-2" : "md:order-1"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
