"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Flame, Zap } from "lucide-react"

import { cn } from "@/lib/utils"

interface ClassType {
  name: string
  description: string
  duration: string
  intensity: "low" | "medium" | "high" | "extreme"
  image: string
  href: string
}

const classes: ClassType[] = [
  {
    name: "HIIT",
    description:
      "High-intensity intervals that torch calories and build endurance",
    duration: "45 min",
    intensity: "extreme",
    image: "/placeholders/blocks/service-fitness/classes/hiit.webp",
    href: "#",
  },
  {
    name: "Boxing",
    description: "Learn technique while getting a full-body cardio workout",
    duration: "60 min",
    intensity: "high",
    image: "/placeholders/blocks/service-fitness/classes/boxing.webp",
    href: "#",
  },
  {
    name: "Strength",
    description: "Build muscle and power with progressive resistance training",
    duration: "50 min",
    intensity: "high",
    image: "/placeholders/blocks/service-fitness/classes/strength.webp",
    href: "#",
  },
  {
    name: "Yoga Flow",
    description: "Dynamic sequences to improve flexibility and mental clarity",
    duration: "60 min",
    intensity: "medium",
    image: "/placeholders/blocks/service-fitness/classes/yoga.webp",
    href: "#",
  },
  {
    name: "Spin",
    description: "Ride to the beat in our immersive cycling studio",
    duration: "45 min",
    intensity: "high",
    image: "/placeholders/blocks/service-fitness/classes/spin.webp",
    href: "#",
  },
  {
    name: "Recovery",
    description: "Stretch, roll, and restore with guided mobility work",
    duration: "30 min",
    intensity: "low",
    image: "/placeholders/blocks/service-fitness/classes/recovery.webp",
    href: "#",
  },
]

const intensityConfig = {
  low: { label: "Low", bars: 1, color: "bg-white/40" },
  medium: { label: "Medium", bars: 2, color: "bg-white/60" },
  high: { label: "High", bars: 3, color: "bg-white/80" },
  extreme: { label: "Extreme", bars: 4, color: "bg-white" },
}

export function Features6() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="container px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-white/60 uppercase">
            Our Classes
          </p>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Find Your Fight
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            From high-intensity sweat sessions to mindful movement, we've got a
            class for every goal.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem) => (
            <Link
              key={classItem.name}
              href={classItem.href}
              className="group relative flex h-[400px] flex-col overflow-hidden rounded-2xl bg-neutral-900"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={classItem.image}
                  alt={classItem.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-auto p-6">
                {/* Intensity indicator */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((bar) => (
                      <div
                        key={bar}
                        className={cn(
                          "h-3 w-1 rounded-full",
                          bar <= intensityConfig[classItem.intensity].bars
                            ? intensityConfig[classItem.intensity].color
                            : "bg-white/20"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-white/60 uppercase">
                    {intensityConfig[classItem.intensity].label}
                  </span>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-white">
                  {classItem.name}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-white/70">
                  {classItem.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-white/60">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{classItem.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-sm font-medium">View Schedule</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
