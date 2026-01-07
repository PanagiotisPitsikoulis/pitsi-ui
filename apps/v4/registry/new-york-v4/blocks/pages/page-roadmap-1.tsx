"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

// Striped Background Component
function StripedBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <div className="container relative mx-auto h-full px-6">
        <div className="absolute inset-0 flex justify-between">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="bg-border/30 h-full w-px" />
          ))}
        </div>
      </div>
    </div>
  )
}

// Roadmap Icon
function RoadmapIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-48", className)}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 160 L40 60 L100 60 L100 100 L160 100 L160 160"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="40" cy="60" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="100" cy="60" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="160" cy="100" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="160" cy="160" r="8" fill="currentColor" />
    </svg>
  )
}

// Types
type RoadmapStatus = "completed" | "in-progress" | "planned" | "exploring"

interface RoadmapItem {
  quarter: string
  status: RoadmapStatus
  items: string[]
}

// Status labels
const statusLabels: Record<RoadmapStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
  exploring: "Exploring",
}

// Default content
const pageRoadmap1Defaults = {
  label: "What's Next",
  title: "Roadmap",
  description: "See what we're building next and what's on the horizon.",
  backLink: { label: "Back to home", href: "/" },
  items: [
    {
      quarter: "Q1 2024",
      status: "completed" as RoadmapStatus,
      items: [
        "Initial component library release",
        "Documentation site launch",
        "CLI tool for component installation",
        "Dark mode support",
      ],
    },
    {
      quarter: "Q2 2024",
      status: "in-progress" as RoadmapStatus,
      items: [
        "Advanced theming system",
        "Chart components",
        "Form builder components",
        "Animation library",
      ],
    },
    {
      quarter: "Q3 2024",
      status: "planned" as RoadmapStatus,
      items: [
        "Dashboard templates",
        "E-commerce components",
        "Marketing page blocks",
        "Figma plugin",
      ],
    },
    {
      quarter: "Q4 2024",
      status: "exploring" as RoadmapStatus,
      items: [
        "AI-powered component generation",
        "Visual component editor",
        "Team collaboration features",
        "Enterprise features",
      ],
    },
  ] as RoadmapItem[],
}

interface PageRoadmap1Props {
  label?: string
  title?: string
  description?: string
  backLink?: { label: string; href: string }
  items?: RoadmapItem[]
  className?: string
}

export function PageRoadmap1({
  label = pageRoadmap1Defaults.label,
  title = pageRoadmap1Defaults.title,
  description = pageRoadmap1Defaults.description,
  backLink = pageRoadmap1Defaults.backLink,
  items = pageRoadmap1Defaults.items,
  className,
}: PageRoadmap1Props) {
  const [activeFilter, setActiveFilter] = useState<RoadmapStatus | "all">("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = items.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.status === activeFilter
    const matchesSearch =
      searchQuery === "" ||
      item.quarter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.items.some((i) =>
        i.toLowerCase().includes(searchQuery.toLowerCase())
      )
    return matchesFilter && matchesSearch
  })

  return (
    <div
      className={cn(
        "relative -mt-14 min-h-screen overflow-x-clip",
        className
      )}
    >
      <StripedBackground />

      <div className="relative z-10 container px-6">
        <Spacer size="6xl" sizeMobile="4xl" />

        <div className="grid grid-cols-6 gap-6">
          {/* Left Column - Sticky Sidebar */}
          <div className="col-span-6 lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              {/* Back Link */}
              <Link
                href={backLink.href}
                className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
              >
                <ArrowLeft className="size-4" />
                {backLink.label}
              </Link>

              {/* Label */}
              <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
                {label}
              </p>

              <Spacer size="md" sizeMobile="sm" />

              {/* Title */}
              <h1 className="text-4xl font-bold leading-[0.9] tracking-tight md:text-5xl lg:text-6xl">
                {title}
              </h1>

              <Spacer size="lg" sizeMobile="md" />

              {/* Description */}
              <p className="text-muted-foreground text-base md:text-lg">
                {description}
              </p>

              <Spacer size="6xl" sizeMobile="2xl" />

              {/* Icon */}
              <div className="flex justify-center">
                <RoadmapIcon className="text-primary w-48" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-6 lg:col-span-3 lg:col-start-4">
            {/* Search and Tags */}
            <div className="mb-8 space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                <Input
                  type="text"
                  placeholder="Search roadmap..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {(
                  ["all", "completed", "in-progress", "planned", "exploring"] as const
                ).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                      activeFilter === filter
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {filter === "all" ? "All" : statusLabels[filter]}
                  </button>
                ))}
              </div>
            </div>

            {/* Roadmap Items */}
            <div className="space-y-12">
              {filteredItems.length === 0 ? (
                <p className="text-muted-foreground">No items match your search.</p>
              ) : (
                filteredItems.map((item, index) => (
                  <article key={index} className="relative">
                    {/* Title section with vertical line */}
                    <div className="border-primary border-l-2 pl-4">
                      {/* Quarter and status */}
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <Badge variant="outline" className="font-mono text-xs">
                          {item.quarter}
                        </Badge>
                        <Badge variant="outline" className="font-mono text-xs">
                          {statusLabels[item.status]}
                        </Badge>
                      </div>

                      <h2 className="mb-2 text-xl font-bold tracking-tight md:text-2xl">
                        {statusLabels[item.status]}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {item.items.length} item{item.items.length !== 1 ? "s" : ""}{" "}
                        in this milestone
                      </p>
                    </div>

                    {/* Items */}
                    <ul className="mt-4 space-y-3 pl-8">
                      {item.items.map((listItem, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-muted-foreground flex items-start gap-2 text-sm"
                        >
                          <span className="bg-muted-foreground mt-1.5 size-1.5 shrink-0 rounded-full" />
                          <span className="text-foreground">{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>

        <Spacer size="6xl" sizeMobile="4xl" />
      </div>
    </div>
  )
}
