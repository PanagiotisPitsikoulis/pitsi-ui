"use client"

import { BookOpen, Search } from "lucide-react"

import {
  searchDefaults,
  type SearchBlockProps,
} from "@/lib/blocks/search.types"
import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

// Block-specific defaults for library template
const blockDefaults = {
  badge: "Search Catalog",
  title: "Explore Our Collection",
  description:
    "Search through our extensive catalog of books, journals, and resources.",
  placeholder: "Search books, authors, subjects...",
  categories: ["All", "Books", "Journals", "E-Books", "Archives"],
  results: [
    {
      title: "The Art of Programming",
      description:
        "A comprehensive guide to software craftsmanship and clean code principles.",
      href: "#",
      category: "Books",
      type: "page" as const,
      date: "Dec 15, 2024",
    },
    {
      title: "Journal of Modern Architecture",
      description:
        "Quarterly publication covering contemporary design and building innovation.",
      href: "#",
      category: "Journals",
      type: "doc" as const,
      date: "Dec 12, 2024",
    },
    {
      title: "Introduction to Philosophy",
      description:
        "Foundational texts and critical analysis of Western philosophical thought.",
      href: "#",
      category: "E-Books",
      type: "page" as const,
      date: "Dec 10, 2024",
    },
    {
      title: "Historical Maps Collection",
      description:
        "Digitized archive of cartographic materials from the 17th to 19th century.",
      href: "#",
      category: "Archives",
      type: "page" as const,
      date: "Dec 8, 2024",
    },
    {
      title: "Scientific American Archive",
      description:
        "Complete digital access to over 170 years of scientific journalism.",
      href: "#",
      category: "Journals",
      type: "doc" as const,
      date: "Dec 5, 2024",
    },
    {
      title: "Classic Literature Anthology",
      description:
        "Curated collection of essential works from world literature traditions.",
      href: "#",
      category: "Books",
      type: "post" as const,
      date: "Dec 1, 2024",
    },
  ],
}

export function Search5({ content = {}, classNames = {} }: SearchBlockProps) {
  const {
    badge = blockDefaults.badge ?? searchDefaults.badge,
    title = blockDefaults.title ?? searchDefaults.title,
    description = blockDefaults.description ?? searchDefaults.description,
    placeholder = blockDefaults.placeholder ?? searchDefaults.placeholder,
    categories = blockDefaults.categories ?? searchDefaults.categories,
    results = blockDefaults.results ?? searchDefaults.results,
  } = content

  return (
    <section className={cn("relative", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <div className={cn("mb-12 text-center", classNames.header?.root)}>
          {badge && (
            <div
              className={cn(
                "text-muted-foreground mb-4 inline-flex items-center gap-2 text-sm",
                classNames.header?.badge
              )}
            >
              <BookOpen className="h-4 w-4" />
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
                "h-14 rounded-lg border pr-4 pl-12 text-lg shadow-sm",
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
                variant={index === 0 ? "default" : "ghost"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        )}

        {/* Results Count */}
        <p className="text-muted-foreground mb-8 text-sm">
          Showing {results.length} results
        </p>

        {/* Results List */}
        <div className={cn("space-y-4", classNames.resultsGrid)}>
          {results.map((result, index) => (
            <a
              key={index}
              href={result.href}
              className={cn(
                "group bg-card hover:bg-muted/50 flex items-start gap-4 rounded-lg border p-4 transition-all hover:shadow-sm",
                classNames.result?.root
              )}
            >
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-3">
                  <h3
                    className={cn(
                      "font-display text-foreground group-hover:text-primary truncate font-semibold transition-colors",
                      classNames.result?.title
                    )}
                  >
                    {result.title}
                  </h3>
                  {result.category && (
                    <Badge
                      variant="secondary"
                      className={cn(
                        "shrink-0 text-xs",
                        classNames.result?.category
                      )}
                    >
                      {result.category}
                    </Badge>
                  )}
                </div>
                {result.description && (
                  <p
                    className={cn(
                      "text-muted-foreground line-clamp-1 text-sm",
                      classNames.result?.description
                    )}
                  >
                    {result.description}
                  </p>
                )}
              </div>
              {result.date && (
                <p
                  className={cn(
                    "text-muted-foreground shrink-0 text-xs",
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
            "mt-12 flex items-center justify-between",
            classNames.pagination
          )}
        >
          <p className="text-muted-foreground text-sm">Page 2 of 10</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
