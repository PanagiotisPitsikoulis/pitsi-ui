"use client"

import { type StatsBlockProps } from "@/lib/blocks/stats.types"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

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
        <BlockHeader
          badge={badge}
          title={title}
          classNames={classNames.header}
        />

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
