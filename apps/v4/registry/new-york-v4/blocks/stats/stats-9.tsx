"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type StatsBlockProps } from "@/lib/blocks/stats.types"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

const stats9Defaults = {
  badge: "By The Numbers",
  title: "Explore the World With Us",
  stats: [
    { value: "150+", label: "Destinations", icon: "Globe" },
    { value: "50K+", label: "Happy Travelers", icon: "Users" },
    { value: "1200+", label: "Tours Completed", icon: "Map" },
    { value: "15+", label: "Years Experience", icon: "Award" },
  ],
}

export function Stats9({ content = {}, classNames = {} }: StatsBlockProps) {
  const {
    badge = stats9Defaults.badge,
    title = stats9Defaults.title,
    stats = stats9Defaults.stats,
  } = content as typeof stats9Defaults

  return (
    <section className={cn("py-24", classNames.root)}>
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
          {stats.map((stat, idx) => (
            <ScrollFade key={idx} delay={idx * 0.1}>
              <div className={cn("group text-center", classNames.stat?.root)}>
                <div className="bg-primary/10 group-hover:bg-primary/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors">
                  <DynamicIcon
                    name={stat.icon || "MapPin"}
                    className="text-primary h-8 w-8"
                  />
                </div>
                <div
                  className={cn(
                    "text-primary text-4xl font-bold md:text-5xl",
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
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats9
