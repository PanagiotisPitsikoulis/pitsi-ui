"use client"

import { useEffect, useRef, useState } from "react"

import { statsDefaults, type StatsBlockProps } from "@/lib/blocks/stats.types"
import { cn } from "@/lib/utils"
import GridDistortion from "@/registry/new-york-v4/animations/grid-distortion/grid-distortion"
import LetterGlitch from "@/registry/new-york-v4/animations/letter-glitch/letter-glitch"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

// Extended stat item with numeric value for animation
interface Stats2Item {
  value: number
  suffix: string
  label: string
  description: string
}

// Block-specific defaults (fitness theme)
const stats2Defaults = {
  ...statsDefaults,
  badge: "By The Numbers",
  title: "Results Speak Louder",
  stats: [
    {
      value: 150,
      suffix: "+",
      label: "Classes Weekly",
      description: "Every week, rain or shine",
    },
    {
      value: 2500,
      suffix: "+",
      label: "Active Members",
      description: "And growing every day",
    },
    {
      value: 98,
      suffix: "%",
      label: "Would Recommend",
      description: "Based on member surveys",
    },
    {
      value: 12,
      suffix: "",
      label: "Expert Coaches",
      description: "World-class instructors",
    },
  ] as Stats2Item[],
  highlightText: {
    prefix: "Over",
    value: "1,000,000",
    suffix: "calories burned collectively this month",
  },
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
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

export function Stats2({ content = {}, classNames = {} }: StatsBlockProps) {
  const { badge = stats2Defaults.badge, title = stats2Defaults.title } = content

  // Use block-specific stats with extended fields
  const stats =
    (content as { stats?: Stats2Item[] }).stats ?? stats2Defaults.stats
  const highlightText =
    (content as { highlightText?: typeof stats2Defaults.highlightText })
      .highlightText ?? stats2Defaults.highlightText

  return (
    <section
      className={cn("relative bg-white py-24 lg:py-32", classNames.root)}
    >
      {/* LetterGlitch background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <LetterGlitch
          glitchColors={["#22d3ee", "#a855f7", "#10b981"]}
          glitchSpeed={100}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
          characters="FITNESS POWER STRENGTH ENERGY"
        />
      </div>
      <div className={cn("relative container px-6", classNames.container)}>
        {/* Header */}
        <BlockHeader
          badge={badge}
          title={title}
          classNames={classNames.header}
        />

        {/* Stats Grid */}
        <div
          className={cn(
            "grid gap-8 md:grid-cols-2 lg:grid-cols-4",
            classNames.grid
          )}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-black p-8 text-center",
                classNames.stat?.root
              )}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Value */}
              <div className="relative mb-4">
                <span
                  className={cn(
                    "font-display text-5xl font-bold text-white md:text-6xl",
                    classNames.stat?.value
                  )}
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
              </div>

              {/* Label */}
              <h3
                className={cn(
                  "mb-2 text-lg font-semibold text-white",
                  classNames.stat?.label
                )}
              >
                {stat.label}
              </h3>

              {/* Description */}
              <p
                className={cn(
                  "text-sm text-white/60",
                  classNames.stat?.description
                )}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom highlight with GridDistortion */}
        {highlightText && (
          <div className="relative mt-16 overflow-hidden rounded-2xl bg-black">
            {/* GridDistortion background */}
            <div className="absolute inset-0 opacity-30">
              <GridDistortion
                imageSrc="/placeholders/blocks/service-fitness/gym-bg.webp"
                grid={12}
                mouse={0.15}
                strength={0.2}
                relaxation={0.85}
                className="h-full w-full"
              />
            </div>
            <div className="relative p-8 text-center md:p-12">
              <p className="mb-4 text-sm font-medium tracking-[0.3em] text-cyan-400 uppercase">
                Member Achievement
              </p>
              <p className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                <span className="text-white/60">{highlightText.prefix}</span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {highlightText.value}
                </span>{" "}
                <span className="text-white/60">{highlightText.suffix}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
