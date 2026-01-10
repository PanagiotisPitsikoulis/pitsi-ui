"use client"

import { statsDefaults, type StatsBlockProps } from "@/lib/blocks/stats.types"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

// ============================================================================
// Block-specific defaults (preserves original content)
// ============================================================================

const blockDefaults = {
  ...statsDefaults,
  badge: "By the Numbers",
  title: "Plants Delivered with Care",
  stats: [
    { value: "50K+", label: "Plants Delivered" },
    { value: "98%", label: "Survival Rate" },
    { value: "15K+", label: "Happy Customers" },
    { value: "200+", label: "Plant Varieties" },
  ],
}

export function Stats1({ content = {}, classNames = {} }: StatsBlockProps) {
  // Merge content with defaults
  const {
    badge = blockDefaults.badge,
    title = blockDefaults.title,
    stats = blockDefaults.stats,
  } = content

  return (
    <section className={classNames.root}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          classNames={classNames.header}
        />

        <div
          className={cn(
            "grid grid-cols-2 gap-8 md:grid-cols-4",
            classNames.grid
          )}
        >
          {stats.map((stat, i) => (
            <div key={i} className={cn("text-center", classNames.stat?.root)}>
              <div
                className={cn(
                  "text-primary mb-2 text-4xl font-bold md:text-6xl",
                  classNames.stat?.value
                )}
              >
                {stat.value}
              </div>
              <p
                className={cn("text-muted-foreground", classNames.stat?.label)}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Stats1 as StatsServicePlants }
