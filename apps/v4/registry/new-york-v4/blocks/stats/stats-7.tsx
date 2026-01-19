"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { ScrollExpand } from "@/registry/new-york-v4/animations/scroll-expand/scroll-expand"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"

interface StatsBlockProps {
  content?: {
    title?: string
    description?: string
    categories?: Array<{
      name: string
      value: number
      color: string
    }>
    highlights?: Array<{
      value: string
      label: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const stats7Defaults = {
  title: "Usage Analytics",
  description: "How our customers use the platform.",
  categories: [
    { name: "Enterprise", value: 45, color: "bg-blue-500" },
    { name: "Small Business", value: 30, color: "bg-green-500" },
    { name: "Startups", value: 15, color: "bg-yellow-500" },
    { name: "Individual", value: 10, color: "bg-purple-500" },
  ],
  highlights: [
    { value: "4.9", label: "Average Rating" },
    { value: "12min", label: "Avg. Session" },
    { value: "85%", label: "Return Rate" },
    { value: "2.3M", label: "Daily Actions" },
  ],
}

// Animated bar component that expands on scroll
function AnimatedBar({
  category,
  total,
  index,
}: {
  category: { name: string; value: number; color: string }
  total: number
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 50%"],
  })

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${(category.value / total) * 100}%`]
  )

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-foreground text-sm font-medium">
          {category.name}
        </span>
        <span className="text-muted-foreground text-sm">{category.value}%</span>
      </div>
      <div className="bg-muted-foreground/20 h-3 overflow-hidden rounded-full">
        <motion.div
          className={cn("h-full rounded-full", category.color)}
          style={{ width }}
        />
      </div>
    </div>
  )
}

export function Stats7({ content = {}, classNames = {} }: StatsBlockProps) {
  const {
    title = stats7Defaults.title,
    description = stats7Defaults.description,
    categories = stats7Defaults.categories,
    highlights = stats7Defaults.highlights,
  } = content

  const total = categories.reduce((sum, cat) => sum + cat.value, 0)

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <SlideUp delay={0} distance={20}>
          <div className="mb-12 text-center">
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
        </SlideUp>

        <div className="mx-auto max-w-4xl">
          {/* Visual Bar Chart with ScrollExpand wrapper */}
          <ScrollExpand
            marginX="2rem"
            borderRadius="1rem"
            className="bg-muted mb-8 rounded-xl p-8"
          >
            <h3 className="text-foreground mb-6 font-semibold">
              Customer Segments
            </h3>

            <div className="space-y-4">
              {categories.map((category, i) => (
                <AnimatedBar
                  key={i}
                  category={category}
                  total={total}
                  index={i}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-4">
              {categories.map((category, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={cn("h-3 w-3 rounded-full", category.color)} />
                  <span className="text-muted-foreground text-xs">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollExpand>

          {/* Highlight Stats */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((stat, i) => (
              <SlideUp key={i} delay={0.1 + i * 0.1} distance={25}>
                <div className="border-border rounded-xl border p-6 text-center">
                  <p className="text-primary text-3xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {stat.label}
                  </p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats7
