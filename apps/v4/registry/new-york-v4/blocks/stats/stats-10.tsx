"use client"

import { useEffect, useRef, useState } from "react"

import { type StatsBlockProps } from "@/lib/blocks/stats.types"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface Stats10Item {
  value: number
  suffix: string
  label: string
  description: string
}

const stats10Defaults = {
  badge: "Our Impact",
  title: "Creating Unforgettable Journeys",
  stats: [
    {
      value: 150,
      suffix: "+",
      label: "Countries Explored",
      description: "Destinations across all continents",
    },
    {
      value: 50000,
      suffix: "+",
      label: "Happy Travelers",
      description: "Satisfied adventurers worldwide",
    },
    {
      value: 98,
      suffix: "%",
      label: "Satisfaction Rate",
      description: "Based on customer reviews",
    },
    {
      value: 15,
      suffix: "",
      label: "Years of Excellence",
      description: "Trusted travel expertise",
    },
  ] as Stats10Item[],
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setDisplayValue(value)
              clearInterval(timer)
            } else {
              setDisplayValue(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Stats10({ content = {}, classNames = {} }: StatsBlockProps) {
  const { badge = stats10Defaults.badge, title = stats10Defaults.title } =
    content

  const stats =
    (content as { stats?: Stats10Item[] }).stats ?? stats10Defaults.stats

  return (
    <section className={cn("bg-muted py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <BlockHeader
          badge={badge}
          title={title}
          classNames={classNames.header}
        />

        <div
          className={cn(
            "grid gap-8 md:grid-cols-2 lg:grid-cols-4",
            classNames.grid
          )}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={cn(
                "bg-background relative overflow-hidden rounded-2xl p-8 text-center shadow-sm transition-shadow hover:shadow-md",
                classNames.stat?.root
              )}
            >
              <div className="bg-primary/5 absolute -top-8 -right-8 h-32 w-32 rounded-full" />
              <div className="bg-primary/5 absolute -bottom-4 -left-4 h-20 w-20 rounded-full" />

              <div className="relative">
                <div
                  className={cn(
                    "text-primary text-5xl font-bold md:text-6xl",
                    classNames.stat?.value
                  )}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <h3
                  className={cn(
                    "text-foreground mt-4 text-lg font-semibold",
                    classNames.stat?.label
                  )}
                >
                  {stat.label}
                </h3>

                <p
                  className={cn(
                    "text-muted-foreground mt-2 text-sm",
                    classNames.stat?.description
                  )}
                >
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats10
