"use client"

import { type StatsBlockProps } from "@/lib/blocks/stats.types"
import { cn } from "@/lib/utils"

const stats8Defaults = {
  badge: "Trusted by developers",
  title: "Built for scale",
  stats: [
    { value: "100+", label: "Components" },
    { value: "50K+", label: "Downloads" },
    { value: "10K+", label: "GitHub Stars" },
    { value: "500+", label: "Contributors" },
  ],
}

export function Stats8({ content = {}, classNames = {} }: StatsBlockProps) {
  const {
    badge = stats8Defaults.badge,
    title = stats8Defaults.title,
    stats = stats8Defaults.stats,
  } = content as typeof stats8Defaults

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <div className={cn("mb-16 text-center", classNames.header?.root)}>
          {badge && (
            <p
              className={cn(
                "text-brand mb-4 text-sm font-medium tracking-wider uppercase",
                classNames.header?.badge
              )}
            >
              {badge}
            </p>
          )}
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
        </div>

        {/* Stats grid */}
        <div
          className={cn(
            "grid grid-cols-2 gap-8 md:grid-cols-4",
            classNames.grid
          )}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className={cn("text-center", classNames.stat?.root)}>
              <div
                className={cn(
                  "text-brand text-4xl font-bold md:text-5xl",
                  classNames.stat?.value
                )}
              >
                {stat.value}
              </div>
              <div
                className={cn(
                  "text-muted-foreground mt-2 text-sm font-medium",
                  classNames.stat?.label
                )}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
