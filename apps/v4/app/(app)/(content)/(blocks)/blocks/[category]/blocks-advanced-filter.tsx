"use client"

import { useCallback, useMemo } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import {
  BadgeDollarSign,
  CheckCircle,
  Layout,
  Palette,
  Type,
} from "@/lib/icons"
import { FilterBar, type FilterConfig } from "@/registry/new-york-v4/ui/filter-bar"

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

export function BlocksAdvancedFilter({
  filterOptions,
}: BlocksAdvancedFilterProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Parse current filter values from URL
  const getSelectedValues = useCallback(
    (key: string): string[] => {
      const value = searchParams.get(key)
      return value ? value.split(",") : []
    },
    [searchParams]
  )

  // Build filter configurations
  const filters: FilterConfig[] = useMemo(
    () => [
      {
        key: "palette",
        label: "Palette",
        icon: Palette,
        options: filterOptions.palettes,
        selected: getSelectedValues("palette"),
      },
      {
        key: "typography",
        label: "Typography",
        icon: Type,
        options: filterOptions.typographies,
        selected: getSelectedValues("typography"),
      },
      {
        key: "template",
        label: "Template",
        icon: Layout,
        options: filterOptions.templates,
        selected: getSelectedValues("template"),
      },
      {
        key: "tier",
        label: "Tier",
        icon: BadgeDollarSign,
        options: filterOptions.tiers,
        selected: getSelectedValues("tier"),
      },
      {
        key: "readiness",
        label: "Readiness",
        icon: CheckCircle,
        options: filterOptions.readinessOptions,
        selected: getSelectedValues("readiness"),
      },
    ],
    [filterOptions, getSelectedValues]
  )

  // Update URL with new filter values
  const updateFilters = useCallback(
    (key: string, values: string[]) => {
      const params = new URLSearchParams(searchParams.toString())
      if (values.length > 0) {
        params.set(key, values.join(","))
      } else {
        params.delete(key)
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [router, pathname, searchParams]
  )

  // Toggle a single value in a filter
  const handleFilterToggle = useCallback(
    (key: string, value: string) => {
      const current = getSelectedValues(key)
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      updateFilters(key, updated)
    },
    [getSelectedValues, updateFilters]
  )

  // Clear a single filter
  const handleFilterClear = useCallback(
    (key: string) => {
      updateFilters(key, [])
    },
    [updateFilters]
  )

  // Clear all filters
  const handleClearAll = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete("palette")
    params.delete("typography")
    params.delete("template")
    params.delete("tier")
    params.delete("readiness")
    params.delete("q")
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }, [router, pathname, searchParams])

  // Search functionality
  const searchQuery = searchParams.get("q") || ""

  const handleSearchChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set("q", value)
      } else {
        params.delete("q")
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [router, pathname, searchParams]
  )

  return (
    <div className="container">
      <FilterBar
        filters={filters}
        searchValue={searchQuery}
        searchPlaceholder="Search blocks..."
        onSearchChange={handleSearchChange}
        onFilterToggle={handleFilterToggle}
        onFilterClear={handleFilterClear}
        onClearAll={handleClearAll}
      />
    </div>
  )
}
