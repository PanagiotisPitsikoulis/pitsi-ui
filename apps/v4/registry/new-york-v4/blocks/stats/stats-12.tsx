"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type StatsBlockProps } from "@/lib/blocks/stats.types"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface Stats12Item {
  value: string
  label: string
  icon: string
  gradient: string
}

const stats12Defaults = {
  badge: "Why Choose Us",
  title: "Numbers That Speak",
  stats: [
    {
      value: "150+",
      label: "Dream Destinations",
      icon: "Globe",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      value: "50K+",
      label: "Happy Travelers",
      icon: "Users",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      value: "1200+",
      label: "Tours Completed",
      icon: "Map",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      value: "99%",
      label: "Satisfaction Rate",
      icon: "Heart",
      gradient: "from-rose-500 to-pink-500",
    },
  ] as Stats12Item[],
}

export function Stats12({ content = {}, classNames = {} }: StatsBlockProps) {
  const { badge = stats12Defaults.badge, title = stats12Defaults.title } =
    content

  const stats =
    (content as { stats?: Stats12Item[] }).stats ?? stats12Defaults.stats

  return (
    <section className={cn("bg-foreground py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          classNames={{
            ...classNames.header,
            title: cn("text-background", classNames.header?.title),
            badge: cn("text-background/70", classNames.header?.badge),
          }}
        />

        <div
          className={cn(
            "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
            classNames.grid
          )}
        >
          {stats.map((stat, idx) => (
            <SlideUp key={idx} delay={0.1 + idx * 0.1} distance={40}>
              <div
                className={cn(
                  "group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1",
                  classNames.stat?.root
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-90",
                    stat.gradient
                  )}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <DynamicIcon
                      name={stat.icon}
                      className="h-7 w-7 text-white"
                    />
                  </div>

                  <div
                    className={cn(
                      "text-4xl font-bold text-white md:text-5xl",
                      classNames.stat?.value
                    )}
                  >
                    {stat.value}
                  </div>

                  <div
                    className={cn(
                      "mt-2 text-sm font-medium text-white/80",
                      classNames.stat?.label
                    )}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats12
