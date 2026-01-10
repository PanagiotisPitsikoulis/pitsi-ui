"use client"

import { Anchor, Search } from "lucide-react"

import {
  searchDefaults,
  type SearchBlockProps,
} from "@/lib/blocks/search.types"
import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

// Block-specific defaults for boat/yacht template
const blockDefaults = {
  badge: "Explore Fleet",
  title: "Find Your Perfect Vessel",
  description:
    "Search our collection of luxury yachts, sailboats, and charter services.",
  placeholder: "Search yachts, charters, destinations...",
  categories: ["All", "Yachts", "Sailboats", "Charters", "Destinations"],
  results: [
    {
      title: "Mediterranean Yacht Charter",
      description:
        "Explore the azure waters of the French Riviera and Italian coast.",
      href: "#",
      category: "Charters",
      type: "page" as const,
      date: "Dec 15, 2024",
    },
    {
      title: "Sunseeker Predator 74",
      description:
        "Luxury motor yacht with exceptional performance and elegant design.",
      href: "#",
      category: "Yachts",
      type: "page" as const,
      date: "Dec 12, 2024",
    },
    {
      title: "Caribbean Sailing Guide",
      description:
        "Navigate the best routes through the Bahamas and Virgin Islands.",
      href: "#",
      category: "Guides",
      type: "doc" as const,
      date: "Dec 10, 2024",
    },
    {
      title: "Classic Swan 65",
      description:
        "Timeless sailing yacht combining tradition with modern amenities.",
      href: "#",
      category: "Sailboats",
      type: "page" as const,
      date: "Dec 8, 2024",
    },
    {
      title: "Greek Islands Itinerary",
      description:
        "Week-long sailing adventure through Cyclades and Dodecanese.",
      href: "#",
      category: "Destinations",
      type: "post" as const,
      date: "Dec 5, 2024",
    },
    {
      title: "Yacht Maintenance Guide",
      description:
        "Essential tips for keeping your vessel in pristine condition.",
      href: "#",
      category: "Guides",
      type: "doc" as const,
      date: "Dec 1, 2024",
    },
  ],
}

export function Search3({ content = {}, classNames = {} }: SearchBlockProps) {
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
      {/* Decorative wave pattern */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23currentColor' d='M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <div className={cn("mb-12 text-center", classNames.header?.root)}>
          {badge && (
            <div
              className={cn(
                "text-primary mb-4 inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase",
                classNames.header?.badge
              )}
            >
              <Anchor className="h-4 w-4" />
              {badge}
            </div>
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
                "h-14 border-2 pr-4 pl-12 text-lg",
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
                "group bg-card hover:bg-muted/50 hover:border-primary/20 rounded-lg border-2 p-6 transition-all hover:shadow-lg",
                classNames.result?.root
              )}
            >
              {result.category && (
                <Badge
                  variant="outline"
                  className={cn(
                    "border-primary/30 mb-3",
                    classNames.result?.category
                  )}
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
