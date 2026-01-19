"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { type StatsBlockProps } from "@/lib/blocks/stats.types"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface Stats11Item {
  label: string
  value: string
  percentage: number
  color: string
}

const stats11Defaults = {
  badge: "Travel Expertise",
  title: "Our Global Reach",
  description: "From local hidden gems to iconic landmarks, we cover it all.",
  stats: [
    {
      label: "Europe Coverage",
      value: "45+ Countries",
      percentage: 90,
      color: "bg-blue-500",
    },
    {
      label: "Asia Pacific",
      value: "35+ Countries",
      percentage: 75,
      color: "bg-emerald-500",
    },
    {
      label: "Americas",
      value: "28+ Countries",
      percentage: 65,
      color: "bg-amber-500",
    },
    {
      label: "Africa & Middle East",
      value: "22+ Countries",
      percentage: 55,
      color: "bg-rose-500",
    },
  ] as Stats11Item[],
}

function AnimatedBar({ stat, index }: { stat: Stats11Item; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 50%"],
  })

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${stat.percentage}%`]
  )

  return (
    <div ref={ref} className="group">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-foreground font-medium">{stat.label}</span>
        <span className="text-muted-foreground text-sm">{stat.value}</span>
      </div>
      <div className="bg-muted h-3 overflow-hidden rounded-full">
        <motion.div
          className={cn("h-full rounded-full", stat.color)}
          style={{ width }}
        />
      </div>
    </div>
  )
}

export function Stats11({ content = {}, classNames = {} }: StatsBlockProps) {
  const { badge = stats11Defaults.badge, title = stats11Defaults.title } =
    content

  const description =
    (content as { description?: string }).description ??
    stats11Defaults.description
  const stats =
    (content as { stats?: Stats11Item[] }).stats ?? stats11Defaults.stats

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <div className="mx-auto max-w-4xl">
          <BlockHeader
            badge={badge}
            title={title}
            description={description}
            classNames={classNames.header}
          />

          <div className={cn("space-y-8", classNames.grid)}>
            {stats.map((stat, idx) => (
              <SlideUp key={idx} delay={0.1 * idx} distance={20}>
                <AnimatedBar stat={stat} index={idx} />
              </SlideUp>
            ))}
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <SlideUp delay={0.4} distance={30}>
              <div className="text-center">
                <div className="text-primary text-4xl font-bold">150+</div>
                <div className="text-muted-foreground mt-2 text-sm">
                  Total Destinations
                </div>
              </div>
            </SlideUp>
            <SlideUp delay={0.5} distance={30}>
              <div className="text-center">
                <div className="text-primary text-4xl font-bold">7</div>
                <div className="text-muted-foreground mt-2 text-sm">
                  Continents Covered
                </div>
              </div>
            </SlideUp>
            <SlideUp delay={0.6} distance={30}>
              <div className="text-center">
                <div className="text-primary text-4xl font-bold">24/7</div>
                <div className="text-muted-foreground mt-2 text-sm">
                  Travel Support
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats11
