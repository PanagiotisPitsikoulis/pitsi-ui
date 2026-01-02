"use client"

import { Globe, TrendingUp, Users, Zap } from "lucide-react"

import { cn } from "@/lib/utils"

interface StatsBlockProps {
  content?: {
    title?: string
    description?: string
    stats?: Array<{
      icon: "users" | "trending" | "globe" | "zap"
      value: string
      label: string
      change?: {
        value: string
        positive: boolean
      }
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const stats4Defaults = {
  title: "Platform Metrics",
  description: "Real-time performance data from our platform.",
  stats: [
    {
      icon: "users" as const,
      value: "2.4M",
      label: "Active Users",
      change: { value: "+12%", positive: true },
    },
    {
      icon: "trending" as const,
      value: "$48M",
      label: "Revenue",
      change: { value: "+28%", positive: true },
    },
    {
      icon: "globe" as const,
      value: "98",
      label: "Countries",
      change: { value: "+5", positive: true },
    },
    {
      icon: "zap" as const,
      value: "99.9%",
      label: "Uptime",
      change: { value: "-0.01%", positive: false },
    },
  ],
}

const IconMap = {
  users: Users,
  trending: TrendingUp,
  globe: Globe,
  zap: Zap,
}

export function Stats4({ content = {}, classNames = {} }: StatsBlockProps) {
  const {
    title = stats4Defaults.title,
    description = stats4Defaults.description,
    stats = stats4Defaults.stats,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = IconMap[stat.icon]
            return (
              <div
                key={i}
                className="bg-background border-border rounded-xl border p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  {stat.change && (
                    <span
                      className={cn(
                        "rounded-full px-2 py-1 text-xs font-medium",
                        stat.change.positive
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      )}
                    >
                      {stat.change.value}
                    </span>
                  )}
                </div>
                <p className="text-foreground text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-1 text-sm">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
