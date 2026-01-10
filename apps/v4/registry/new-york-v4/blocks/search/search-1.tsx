"use client"

import { Search } from "lucide-react"

import {
  searchDefaults,
  type SearchBlockProps,
} from "@/lib/blocks/search.types"
import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

// Block-specific defaults that override the generic defaults
const blockDefaults = {
  badge: "Search",
  title: "Find What You're Looking For",
  description:
    "Search through our collection of plants, guides, and resources.",
  placeholder: "Search plants, care guides, tips...",
  categories: ["All", "Plants", "Guides", "Care Tips"],
  results: [
    {
      title: "Monstera Deliciosa Care Guide",
      description:
        "Everything you need to know about caring for the Swiss Cheese Plant.",
      href: "#",
      category: "Guides",
      type: "doc" as const,
      date: "Dec 15, 2024",
    },
    {
      title: "Low Light Indoor Plants",
      description: "Perfect plants for darker corners of your home or office.",
      href: "#",
      category: "Plants",
      type: "page" as const,
      date: "Dec 12, 2024",
    },
    {
      title: "Watering Schedule Tips",
      description:
        "How often should you water your plants? Our expert guide explains.",
      href: "#",
      category: "Care Tips",
      type: "post" as const,
      date: "Dec 10, 2024",
    },
    {
      title: "Snake Plant (Sansevieria)",
      description: "The ultimate low-maintenance plant for beginners.",
      href: "#",
      category: "Plants",
      type: "page" as const,
      date: "Dec 8, 2024",
    },
    {
      title: "Humidity Tips for Tropical Plants",
      description:
        "Keep your tropical plants thriving with proper humidity levels.",
      href: "#",
      category: "Care Tips",
      type: "post" as const,
      date: "Dec 5, 2024",
    },
    {
      title: "Best Plants for Beginners",
      description: "Start your plant journey with these foolproof options.",
      href: "#",
      category: "Guides",
      type: "doc" as const,
      date: "Dec 1, 2024",
    },
  ],
}

export function Search1({ content = {}, classNames = {} }: SearchBlockProps) {
  const {
    badge = blockDefaults.badge ?? searchDefaults.badge,
    title = blockDefaults.title ?? searchDefaults.title,
    description = blockDefaults.description ?? searchDefaults.description,
    placeholder = blockDefaults.placeholder ?? searchDefaults.placeholder,
    categories = blockDefaults.categories ?? searchDefaults.categories,
    results = blockDefaults.results ?? searchDefaults.results,
  } = content

  return (
    <section className={cn("relative overflow-x-clip", classNames.root)}>
      {/* Left decoration */}
      <div
        className="pointer-events-none absolute top-0 -left-32 h-[500px] w-[500px] -rotate-12 opacity-30 select-none"
        style={{
          backgroundImage: "url('/elements/decoration-bg/plants/1.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      {/* Right decoration */}
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rotate-12 opacity-30 select-none"
        style={{
          backgroundImage: "url('/elements/decoration-bg/plants/2.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      <div className={cn("relative z-10 container px-6", classNames.container)}>
        {/* Header */}
        <div className={cn("mb-12 text-center", classNames.header?.root)}>
          {badge && (
            <p
              className={cn(
                "text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase",
                classNames.header?.badge
              )}
            >
              {badge}
            </p>
          )}
          <h1
            className={cn(
              "font-display text-foreground mb-4 text-3xl font-bold md:text-5xl",
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
                "h-14 rounded-full border-2 pr-4 pl-12 text-lg",
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
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        )}

        {/* Results Count */}
        <p className="text-muted-foreground mb-8 text-center text-sm">
          Showing {results.length} results
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
                "group bg-card hover:bg-muted/50 rounded-2xl border p-6 transition-all hover:shadow-lg",
                classNames.result?.root
              )}
            >
              {result.category && (
                <Badge
                  variant="secondary"
                  className={cn("mb-3", classNames.result?.category)}
                >
                  {result.category}
                </Badge>
              )}
              <h3
                className={cn(
                  "font-display text-foreground group-hover:text-primary mb-2 text-lg font-semibold transition-colors",
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
                    "text-muted-foreground text-xs",
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
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="default" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </section>
  )
}
