"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type StatsBlockProps } from "@/lib/blocks/stats.types"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"

interface Stats14Item {
  value: string
  label: string
  icon: string
  description: string
}

const stats14Defaults = {
  title: "Your Journey, Our Passion",
  description:
    "For over 15 years, we've been crafting unforgettable travel experiences across the globe. Our numbers reflect our commitment to excellence.",
  stats: [
    {
      value: "150+",
      label: "Countries Explored",
      icon: "Globe",
      description: "From iconic cities to hidden gems across every continent",
    },
    {
      value: "50,000+",
      label: "Happy Travelers",
      icon: "Users",
      description: "Adventurers who trusted us with their dream vacations",
    },
    {
      value: "1,200+",
      label: "Curated Tours",
      icon: "Map",
      description: "Unique itineraries designed by travel experts",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      icon: "Star",
      description: "Travelers who would recommend us to friends",
    },
    {
      value: "24/7",
      label: "Travel Support",
      icon: "Phone",
      description: "Round-the-clock assistance wherever you are",
    },
    {
      value: "15+",
      label: "Years of Excellence",
      icon: "Award",
      description: "Decades of creating memorable journeys",
    },
  ] as Stats14Item[],
}

export function Stats14({ content = {}, classNames = {} }: StatsBlockProps) {
  const title = (content as { title?: string }).title ?? stats14Defaults.title
  const description =
    (content as { description?: string }).description ??
    stats14Defaults.description
  const stats =
    (content as { stats?: Stats14Item[] }).stats ?? stats14Defaults.stats

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ScrollFade>
              <p className="text-brand mb-4 text-sm font-medium tracking-[0.3em] uppercase">
                Our Impact
              </p>
              <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
                {title}
              </h2>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                {description}
              </p>

              <div className="border-border mt-8 border-t pt-8">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                    <DynamicIcon
                      name="Shield"
                      className="text-primary h-6 w-6"
                    />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">
                      100% Money Back Guarantee
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Your satisfaction is our priority
                    </p>
                  </div>
                </div>
              </div>
            </ScrollFade>
          </div>

          <div className={cn("grid gap-6 sm:grid-cols-2", classNames.grid)}>
            {stats.map((stat, idx) => (
              <SlideUp key={idx} delay={0.1 + idx * 0.08} distance={30}>
                <div
                  className={cn(
                    "border-border group hover:border-primary/30 hover:bg-primary/5 rounded-2xl border p-6 transition-colors",
                    classNames.stat?.root
                  )}
                >
                  <div className="bg-muted group-hover:bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
                    <DynamicIcon
                      name={stat.icon}
                      className="text-primary h-6 w-6"
                    />
                  </div>

                  <div
                    className={cn(
                      "text-foreground text-3xl font-bold",
                      classNames.stat?.value
                    )}
                  >
                    {stat.value}
                  </div>

                  <h3
                    className={cn(
                      "text-foreground mt-1 font-semibold",
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
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats14
