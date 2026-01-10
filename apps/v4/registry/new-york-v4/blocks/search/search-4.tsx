"use client"

import { Dumbbell, Search } from "lucide-react"

import {
  searchDefaults,
  type SearchBlockProps,
} from "@/lib/blocks/search.types"
import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

// Block-specific defaults for fitness template
const blockDefaults = {
  badge: "Search",
  title: "Find Your Workout",
  description:
    "Search workouts, programs, nutrition guides, and fitness content.",
  placeholder: "Search workouts, exercises, plans...",
  categories: ["All", "Workouts", "Programs", "Nutrition", "Equipment"],
  results: [
    {
      title: "Full Body HIIT Workout",
      description:
        "High-intensity interval training to burn calories and build strength.",
      href: "#",
      category: "Workouts",
      type: "page" as const,
      date: "Dec 15, 2024",
    },
    {
      title: "12-Week Strength Program",
      description:
        "Progressive overload program for building muscle and increasing power.",
      href: "#",
      category: "Programs",
      type: "doc" as const,
      date: "Dec 12, 2024",
    },
    {
      title: "Pre-Workout Nutrition Guide",
      description:
        "What to eat before training for maximum performance and energy.",
      href: "#",
      category: "Nutrition",
      type: "post" as const,
      date: "Dec 10, 2024",
    },
    {
      title: "Kettlebell Fundamentals",
      description:
        "Master the essential kettlebell movements for full-body conditioning.",
      href: "#",
      category: "Equipment",
      type: "page" as const,
      date: "Dec 8, 2024",
    },
    {
      title: "Protein Requirements Calculator",
      description:
        "Determine your optimal daily protein intake based on your goals.",
      href: "#",
      category: "Nutrition",
      type: "doc" as const,
      date: "Dec 5, 2024",
    },
    {
      title: "Recovery & Mobility Routine",
      description:
        "Essential stretches and movements for muscle recovery and flexibility.",
      href: "#",
      category: "Workouts",
      type: "post" as const,
      date: "Dec 1, 2024",
    },
  ],
}

export function Search4({ content = {}, classNames = {} }: SearchBlockProps) {
  const {
    badge = blockDefaults.badge ?? searchDefaults.badge,
    title = blockDefaults.title ?? searchDefaults.title,
    description = blockDefaults.description ?? searchDefaults.description,
    placeholder = blockDefaults.placeholder ?? searchDefaults.placeholder,
    categories = blockDefaults.categories ?? searchDefaults.categories,
    results = blockDefaults.results ?? searchDefaults.results,
  } = content

  return (
    <section className={cn("relative overflow-hidden", classNames.root)}>
      {/* Neon glow effect */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top, hsl(var(--primary) / 0.15), transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <div className={cn("mb-12 text-center", classNames.header?.root)}>
          {badge && (
            <div
              className={cn(
                "bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wider uppercase",
                classNames.header?.badge
              )}
            >
              <Dumbbell className="h-4 w-4" />
              {badge}
            </div>
          )}
          <h1
            className={cn(
              "font-display text-foreground mb-4 text-3xl font-bold tracking-tight uppercase md:text-5xl",
              classNames.header?.title
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "text-muted-foreground mx-auto max-w-2xl text-lg",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          )}
        </div>

        {/* Search Input */}
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
            <Input
              type="search"
              placeholder={placeholder}
              className={cn(
                "border-primary/30 bg-background/80 focus:border-primary h-14 rounded-none border-2 pr-4 pl-12 text-lg backdrop-blur-sm",
                classNames.searchInput
              )}
            />
          </div>
        </div>

        {/* Filters */}
        {categories && categories.length > 0 && (
          <div
            className={cn(
              "mb-12 flex flex-wrap justify-center gap-2",
              classNames.filters
            )}
          >
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="rounded-none tracking-wider uppercase"
              >
                {category}
              </Button>
            ))}
          </div>
        )}

        {/* Results Count */}
        <p className="text-muted-foreground mb-8 text-center text-sm tracking-wider uppercase">
          {results.length} Results Found
        </p>

        {/* Results Grid */}
        <div
          className={cn(
            "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
            classNames.resultsGrid
          )}
        >
          {results.map((result, index) => (
            <a
              key={index}
              href={result.href}
              className={cn(
                "group bg-card/80 hover:bg-card border-border/50 hover:shadow-primary/10 hover:border-primary/30 border p-6 backdrop-blur-sm transition-all hover:shadow-lg",
                classNames.result?.root
              )}
            >
              {result.category && (
                <Badge
                  variant="outline"
                  className={cn(
                    "border-primary/30 mb-3 rounded-none text-xs tracking-wider uppercase",
                    classNames.result?.category
                  )}
                >
                  {result.category}
                </Badge>
              )}
              <h3
                className={cn(
                  "font-display text-foreground group-hover:text-primary mb-2 text-lg font-bold tracking-wide uppercase transition-colors",
                  classNames.result?.title
                )}
              >
                {result.title}
              </h3>
              {result.description && (
                <p
                  className={cn(
                    "text-muted-foreground mb-3 line-clamp-2 text-sm",
                    classNames.result?.description
                  )}
                >
                  {result.description}
                </p>
              )}
              {result.date && (
                <p
                  className={cn(
                    "text-muted-foreground text-xs tracking-wider uppercase",
                    classNames.result?.date
                  )}
                >
                  {result.date}
                </p>
              )}
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div
          className={cn(
            "mt-12 flex justify-center gap-2",
            classNames.pagination
          )}
        >
          <Button variant="outline" size="sm" className="rounded-none" disabled>
            Prev
          </Button>
          <Button variant="outline" size="sm" className="rounded-none">
            1
          </Button>
          <Button variant="default" size="sm" className="rounded-none">
            2
          </Button>
          <Button variant="outline" size="sm" className="rounded-none">
            3
          </Button>
          <Button variant="outline" size="sm" className="rounded-none">
            Next
          </Button>
        </div>
      </div>
    </section>
  )
}
