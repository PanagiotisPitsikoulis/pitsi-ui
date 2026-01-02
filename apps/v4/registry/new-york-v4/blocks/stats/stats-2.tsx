"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
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
]

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

export function Stats2() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-black/60 uppercase">
            By The Numbers
          </p>
          <h2 className="font-display text-4xl font-bold text-black md:text-5xl lg:text-6xl">
            Results Speak Louder
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl bg-black p-8 text-center"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Value */}
              <div className="relative mb-4">
                <span className="font-display text-5xl font-bold text-white md:text-6xl">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
              </div>

              {/* Label */}
              <h3 className="mb-2 text-lg font-semibold text-white">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/60">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 rounded-2xl bg-black p-8 text-center md:p-12">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-white/60 uppercase">
            Member Achievement
          </p>
          <p className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            <span className="text-white/60">Over</span> 1,000,000{" "}
            <span className="text-white/60">
              calories burned collectively this month
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
