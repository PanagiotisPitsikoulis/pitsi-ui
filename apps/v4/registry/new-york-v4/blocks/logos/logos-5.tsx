"use client"

import { cn } from "@/lib/utils"

interface LogosBlockProps {
  content?: {
    title?: string
    stats?: Array<{
      value: string
      label: string
    }>
    logos?: Array<{ name: string }>
    industries?: Array<{
      name: string
      count: number
    }>
  }
  classNames?: {
    root?: string
    container?: string
    title?: string
  }
}

const logos5Defaults = {
  title: "Join 10,000+ companies worldwide",
  stats: [
    { value: "10,000+", label: "Companies" },
    { value: "50M+", label: "Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "150+", label: "Countries" },
  ],
  logos: [
    { name: "Microsoft" },
    { name: "Google" },
    { name: "Amazon" },
    { name: "Meta" },
    { name: "Apple" },
    { name: "Netflix" },
    { name: "Uber" },
    { name: "Shopify" },
  ],
  industries: [
    { name: "Technology", count: 4500 },
    { name: "Finance", count: 2300 },
    { name: "Healthcare", count: 1800 },
    { name: "E-commerce", count: 1400 },
  ],
}

export function Logos5({ content = {}, classNames = {} }: LogosBlockProps) {
  const {
    title = logos5Defaults.title,
    stats = logos5Defaults.stats,
    logos = logos5Defaults.logos,
    industries = logos5Defaults.industries,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <h2
          className={cn(
            "text-foreground mb-12 text-center text-3xl font-bold md:text-4xl",
            classNames.title
          )}
        >
          {title}
        </h2>

        {/* Stats */}
        <div className="bg-muted mb-12 grid gap-6 rounded-xl p-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-primary text-3xl font-bold md:text-4xl">
                {stat.value}
              </p>
              <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Logo Grid */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="text-muted-foreground/50 hover:text-foreground text-lg font-semibold tracking-wider transition-colors"
            >
              {logo.name}
            </div>
          ))}
        </div>

        {/* Industry Breakdown */}
        <div className="border-border border-t pt-8">
          <p className="text-muted-foreground mb-6 text-center text-sm">
            Industry breakdown
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="bg-muted flex items-center gap-2 rounded-full px-4 py-2"
              >
                <span className="text-foreground text-sm font-medium">
                  {industry.name}
                </span>
                <span className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs font-semibold">
                  {industry.count.toLocaleString()}+
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
