"use client"

import { type StatsBlockProps } from "@/lib/blocks/stats.types"
import { cn } from "@/lib/utils"
import { ScrollScale } from "@/registry/new-york-v4/animations/scroll-scale/scroll-scale"

const stats13Defaults = {
  headline: "Adventure Awaits",
  subheadline:
    "Join thousands of travelers who have discovered the world with us",
  stats: [
    { value: "150+", label: "Destinations" },
    { value: "50K+", label: "Happy Travelers" },
    { value: "1200+", label: "Tours" },
    { value: "15+", label: "Years" },
  ],
}

export function Stats13({ content = {}, classNames = {} }: StatsBlockProps) {
  const headline =
    (content as { headline?: string }).headline ?? stats13Defaults.headline
  const subheadline =
    (content as { subheadline?: string }).subheadline ??
    stats13Defaults.subheadline
  const stats =
    (content as { stats?: typeof stats13Defaults.stats }).stats ??
    stats13Defaults.stats

  return (
    <section
      className={cn(
        "bg-primary relative overflow-hidden py-20 md:py-28",
        classNames.root
      )}
    >
      <div className="bg-primary-foreground/5 absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className={cn("relative container px-6", classNames.container)}>
        <ScrollScale startScale={0.9} endScale={1}>
          <div className="mb-16 text-center">
            <h2 className="font-display text-primary-foreground text-4xl font-bold md:text-6xl lg:text-7xl">
              {headline}
            </h2>
            <p className="text-primary-foreground/70 mx-auto mt-4 max-w-2xl text-lg md:text-xl">
              {subheadline}
            </p>
          </div>
        </ScrollScale>

        <div
          className={cn(
            "grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12",
            classNames.grid
          )}
        >
          {stats.map((stat, idx) => (
            <ScrollScale
              key={idx}
              startScale={0.8}
              endScale={1}
              delay={idx * 0.1}
            >
              <div className={cn("text-center", classNames.stat?.root)}>
                <div
                  className={cn(
                    "text-primary-foreground text-5xl font-bold md:text-7xl lg:text-8xl",
                    classNames.stat?.value
                  )}
                >
                  {stat.value}
                </div>
                <div
                  className={cn(
                    "text-primary-foreground/60 mt-2 text-sm font-medium tracking-wider uppercase md:text-base",
                    classNames.stat?.label
                  )}
                >
                  {stat.label}
                </div>
              </div>
            </ScrollScale>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats13
