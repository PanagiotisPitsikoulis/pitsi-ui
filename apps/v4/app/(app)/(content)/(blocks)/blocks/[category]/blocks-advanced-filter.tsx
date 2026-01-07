"use client"

import { useMemo } from "react"
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs"

import {
  BadgeDollarSign,
  CheckCircle,
  Layout,
  Palette,
  Type,
} from "@/lib/icons"
import {
  FilterBar,
  type FilterConfig,
} from "@/registry/new-york-v4/ui/filter-bar"

export interface BlockFilterOptions {
  palettes: string[]
  typographies: string[]
  templates: string[]
  tiers: string[]
  readinessOptions: string[]
}

interface BlocksAdvancedFilterProps {
  filterOptions: BlockFilterOptions
}

// Define parsers for nuqs
const filterParsers = {
  q: parseAsString.withDefault(""),
  palette: parseAsArrayOf(parseAsString).withDefault([]),
  typography: parseAsArrayOf(parseAsString).withDefault([]),
  template: parseAsArrayOf(parseAsString).withDefault([]),
  tier: parseAsArrayOf(parseAsString).withDefault([]),
  readiness: parseAsArrayOf(parseAsString).withDefault([]),
}

export function BlocksAdvancedFilter({
  filterOptions,
}: BlocksAdvancedFilterProps) {
  const [filterState, setFilterState] = useQueryStates(filterParsers, {
    shallow: false,
  })

  // Build filter configurations
  const filters: FilterConfig[] = useMemo(
    () => [
      {
        key: "palette",
        label: "Palette",
        icon: Palette,
        options: filterOptions.palettes,
        selected: filterState.palette,
      },
      {
        key: "typography",
        label: "Typography",
        icon: Type,
        options: filterOptions.typographies,
        selected: filterState.typography,
      },
      {
        key: "template",
        label: "Template",
        icon: Layout,
        options: filterOptions.templates,
        selected: filterState.template,
      },
      {
        key: "tier",
        label: "Tier",
        icon: BadgeDollarSign,
        options: filterOptions.tiers,
        selected: filterState.tier,
      },
      {
        key: "readiness",
        label: "Readiness",
        icon: CheckCircle,
        options: filterOptions.readinessOptions,
        selected: filterState.readiness,
      },
    ],
    [filterOptions, filterState]
  )

  // Toggle a single value in a filter
  const handleFilterToggle = (key: string, value: string) => {
    const currentValues =
      filterState[key as keyof typeof filterState] as string[]
    const updated = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value]
    setFilterState({ [key]: updated.length > 0 ? updated : null })
  }

  // Clear a single filter
  const handleFilterClear = (key: string) => {
    setFilterState({ [key]: null })
  }

  // Clear all filters
  const handleClearAll = () => {
    setFilterState({
      q: null,
      palette: null,
      typography: null,
      template: null,
      tier: null,
      readiness: null,
    })
  }

  // Search functionality
  const handleSearchChange = (value: string) => {
    setFilterState({ q: value || null })
  }

  return (
    <div className="container">
      <FilterBar
        filters={filters}
        searchValue={filterState.q}
        searchPlaceholder="Search blocks..."
        onSearchChange={handleSearchChange}
        onFilterToggle={handleFilterToggle}
        onFilterClear={handleFilterClear}
        onClearAll={handleClearAll}
      />
    </div>
  )
}
