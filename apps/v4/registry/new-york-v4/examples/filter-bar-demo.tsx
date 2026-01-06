"use client"

import * as React from "react"

import { CheckCircle, Layout, Palette, Type } from "@/lib/icons"
import {
  FilterBar,
  type FilterConfig,
} from "@/registry/new-york-v4/ui/filter-bar"

const FILTER_OPTIONS = {
  status: ["active", "pending", "completed", "archived"],
  priority: ["low", "medium", "high", "urgent"],
  category: ["design", "development", "marketing", "sales"],
  type: ["task", "bug", "feature", "improvement"],
}

export default function FilterBarDemo() {
  const [search, setSearch] = React.useState("")
  const [selected, setSelected] = React.useState<Record<string, string[]>>({
    status: [],
    priority: [],
    category: [],
    type: [],
  })

  const filters: FilterConfig[] = [
    {
      key: "status",
      label: "Status",
      icon: CheckCircle,
      options: FILTER_OPTIONS.status,
      selected: selected.status,
    },
    {
      key: "priority",
      label: "Priority",
      icon: Palette,
      options: FILTER_OPTIONS.priority,
      selected: selected.priority,
    },
    {
      key: "category",
      label: "Category",
      icon: Layout,
      options: FILTER_OPTIONS.category,
      selected: selected.category,
    },
    {
      key: "type",
      label: "Type",
      icon: Type,
      options: FILTER_OPTIONS.type,
      selected: selected.type,
    },
  ]

  const handleFilterToggle = (filterKey: string, value: string) => {
    setSelected((prev) => {
      const current = prev[filterKey] || []
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      return { ...prev, [filterKey]: updated }
    })
  }

  const handleFilterClear = (filterKey: string) => {
    setSelected((prev) => ({ ...prev, [filterKey]: [] }))
  }

  const handleClearAll = () => {
    setSelected({
      status: [],
      priority: [],
      category: [],
      type: [],
    })
    setSearch("")
  }

  return (
    <div className="w-full max-w-2xl">
      <FilterBar
        filters={filters}
        searchValue={search}
        searchPlaceholder="Search items..."
        onSearchChange={setSearch}
        onFilterToggle={handleFilterToggle}
        onFilterClear={handleFilterClear}
        onClearAll={handleClearAll}
      />
    </div>
  )
}
