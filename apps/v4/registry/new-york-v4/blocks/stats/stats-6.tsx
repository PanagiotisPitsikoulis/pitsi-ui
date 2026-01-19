"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import {
  PerspectiveContainer,
  PerspectiveSection,
} from "@/registry/new-york-v4/animations/perspective-section-transition/perspective-section-transition"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"

interface StatsBlockProps {
  content?: {
    title?: string
    description?: string
    stats?: Array<{
      label: string
      before: string
      after: string
      improvement: string
      positive: boolean
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const stats6Defaults = {
  title: "The Impact",
  description: "See the difference we make for our customers.",
  stats: [
    {
      label: "Page Load Time",
      before: "4.2s",
      after: "0.8s",
      improvement: "81% faster",
      positive: true,
    },
    {
      label: "Conversion Rate",
      before: "2.1%",
      after: "5.8%",
      improvement: "176% increase",
      positive: true,
    },
    {
      label: "Bounce Rate",
      before: "68%",
      after: "32%",
      improvement: "53% reduction",
      positive: true,
    },
    {
      label: "Support Tickets",
      before: "450/mo",
      after: "120/mo",
      improvement: "73% decrease",
      positive: true,
    },
  ],
}

export function Stats6({ content = {}, classNames = {} }: StatsBlockProps) {
  const {
    title = stats6Defaults.title,
    description = stats6Defaults.description,
    stats = stats6Defaults.stats,
  } = content

  return (
    <PerspectiveContainer
      height="auto"
      className={cn("bg-muted min-h-fit", classNames.root)}
    >
      <PerspectiveSection
        scaleRange={[1, 0.95]}
        rotateRange={[0, -2]}
        sticky={false}
        className="h-auto min-h-fit py-16 md:py-24"
      >
        <div className={cn("container px-6", classNames.container)}>
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <SlideUp key={i} delay={0.1 + i * 0.1} distance={30}>
                <div className="bg-background border-border h-full overflow-hidden rounded-xl border">
                  <div className="p-6">
                    <p className="text-foreground mb-4 font-semibold">
                      {stat.label}
                    </p>

                    <div className="mb-4 flex items-center gap-3">
                      {/* Before */}
                      <div className="flex-1">
                        <p className="text-muted-foreground mb-1 text-xs uppercase">
                          Before
                        </p>
                        <p className="text-muted-foreground text-2xl font-bold line-through decoration-red-500/50">
                          {stat.before}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="text-primary">
                        <DynamicIcon name="ArrowUp" className="h-6 w-6" />
                      </div>

                      {/* After */}
                      <div className="flex-1 text-right">
                        <p className="text-muted-foreground mb-1 text-xs uppercase">
                          After
                        </p>
                        <p className="text-foreground text-2xl font-bold">
                          {stat.after}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Improvement Badge */}
                  <div
                    className={cn(
                      "flex items-center justify-center gap-2 py-3",
                      stat.positive
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    )}
                  >
                    {stat.positive ? (
                      <DynamicIcon name="ArrowUp" className="h-4 w-4" />
                    ) : (
                      <DynamicIcon name="ArrowDown" className="h-4 w-4" />
                    )}
                    <span className="text-sm font-semibold">
                      {stat.improvement}
                    </span>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </PerspectiveSection>
    </PerspectiveContainer>
  )
}

export default Stats6
