"use client"

import { MapPin, Search } from "lucide-react"

import {
  searchDefaults,
  type SearchBlockProps,
} from "@/lib/blocks/search.types"
import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

// Block-specific defaults for travel template
const blockDefaults = {
  badge: "Discover",
  title: "Find Your Next Adventure",
  description: "Search destinations, tours, and travel experiences worldwide.",
  placeholder: "Search destinations, activities, guides...",
  categories: ["All", "Destinations", "Tours", "Experiences", "Guides"],
  results: [
    {
      title: "Santorini Island Guide",
      description:
        "Everything you need to know about visiting the stunning Greek island.",
      href: "#",
      category: "Destinations",
      type: "doc" as const,
      date: "Dec 15, 2024",
    },
    {
      title: "Northern Lights Tour",
      description:
        "Witness the magical aurora borealis in Iceland's pristine wilderness.",
      href: "#",
      category: "Tours",
      type: "page" as const,
      date: "Dec 12, 2024",
    },
    {
      title: "Best Time to Visit Japan",
      description:
        "Seasonal guide to planning your perfect Japanese adventure.",
      href: "#",
      category: "Guides",
      type: "post" as const,
      date: "Dec 10, 2024",
    },
    {
      title: "Safari Adventures in Kenya",
      description: "Unforgettable wildlife experiences in the African savanna.",
      href: "#",
      category: "Experiences",
      type: "page" as const,
      date: "Dec 8, 2024",
    },
    {
      title: "Backpacking Through Southeast Asia",
      description:
        "Budget-friendly tips for exploring Thailand, Vietnam, and beyond.",
      href: "#",
      category: "Guides",
      type: "post" as const,
      date: "Dec 5, 2024",
    },
    {
      title: "Amalfi Coast Road Trip",
      description:
        "Scenic drives and hidden gems along Italy's stunning coastline.",
      href: "#",
      category: "Tours",
      type: "doc" as const,
      date: "Dec 1, 2024",
    },
  ],
}

export function Search2({ content = {}, classNames = {} }: SearchBlockProps) {
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
      {/* Gradient background */}
      <div
        className="from-primary/5 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <div className={cn("mb-12 text-center", classNames.header?.root)}>
          {badge && (
            <div
              className={cn(
                "mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm",
                classNames.header?.badge
              )}
            >
              <MapPin className="h-4 w-4" />
              {badge}
            </div>
          )}
          <h1
            className={cn(
              "font-display text-foreground mb-4 text-3xl font-bold tracking-tight md:text-5xl",
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
                "h-14 rounded-xl border-2 pr-4 pl-12 text-lg shadow-sm",
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
                className="rounded-lg"
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
                "group bg-card hover:bg-muted/50 rounded-xl border p-6 transition-all hover:-translate-y-1 hover:shadow-md",
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
