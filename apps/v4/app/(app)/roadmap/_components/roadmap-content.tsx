"use client"

import { useState } from "react"

import { Badge } from "@/registry/new-york-v4/ui/badge"

type RoadmapStatus = "completed" | "in-progress" | "planned" | "exploring"

interface RoadmapItem {
  quarter: string
  title: string
  description: string
  status: RoadmapStatus
  items: string[]
}

interface RoadmapContentProps {
  items: RoadmapItem[]
}

const statusLabels: Record<RoadmapStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
  exploring: "Exploring",
}

function StatusBadge({ status }: { status: RoadmapStatus }) {
  return (
    <Badge variant="outline" className="font-mono text-xs">
      {statusLabels[status]}
    </Badge>
  )
}

export function RoadmapContent({ items }: RoadmapContentProps) {
  const [activeFilter, setActiveFilter] = useState<RoadmapStatus | "all">("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = items.filter((item) => {
    const matchesFilter =
      activeFilter === "all" || item.status === activeFilter
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.items.some((i) =>
        i.toLowerCase().includes(searchQuery.toLowerCase())
      )
    return matchesFilter && matchesSearch
  })

  return (
    <>
      {/* Search and Tags */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search roadmap..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-border bg-background placeholder:text-muted-foreground focus:ring-brand h-10 w-full rounded-lg border pl-10 pr-4 text-sm outline-none focus:ring-2"
          />
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {(["all", "completed", "in-progress", "planned", "exploring"] as const).map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter === "all" ? "All" : statusLabels[filter]}
              </button>
            )
          )}
        </div>
      </div>

      <div className="space-y-12">
        {filteredItems.length === 0 ? (
          <p className="text-muted-foreground">No items match your search.</p>
        ) : (
          filteredItems.map((item, index) => (
            <article key={index} className="relative">
              {/* Title section with vertical line */}
              <div className="border-brand border-l-2 pl-4">
                {/* Quarter and status */}
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                    {item.quarter}
                  </span>
                  <StatusBadge status={item.status} />
                </div>

                {/* Title and description */}
                <h2 className="display mb-1 text-xl tracking-tight md:text-2xl">
                  {item.title}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>

              {/* Items */}
              <ul className="mt-4 space-y-2 pl-8">
                {item.items.map((listItem, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-muted-foreground flex items-start gap-2 text-sm"
                  >
                    <span className="bg-muted-foreground mt-1.5 size-1.5 shrink-0 rounded-full" />
                    <span>{listItem}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))
        )}
      </div>
    </>
  )
}
