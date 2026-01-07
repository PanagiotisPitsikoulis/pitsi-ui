"use client"

import * as React from "react"

import { ChevronDown, Search, X } from "@/lib/icons"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

/* -----------------------------------------------------------------------------
 * Types
 * -------------------------------------------------------------------------- */

export interface FilterConfig {
  /** Unique key for the filter */
  key: string
  /** Label shown in tooltip */
  label: string
  /** Icon component to display */
  icon: React.ComponentType<{ className?: string }>
  /** Available options for this filter */
  options: string[]
  /** Currently selected values */
  selected: string[]
}

export interface FilterBarProps {
  /** Filter configurations */
  filters: FilterConfig[]
  /** Search query value */
  searchValue?: string
  /** Search input placeholder */
  searchPlaceholder?: string
  /** Callback when search value changes */
  onSearchChange?: (value: string) => void
  /** Callback when a filter option is toggled */
  onFilterToggle: (filterKey: string, value: string) => void
  /** Callback when a filter is cleared */
  onFilterClear: (filterKey: string) => void
  /** Callback when all filters are cleared */
  onClearAll?: () => void
  /** Additional class name for the root element */
  className?: string
}

/* -----------------------------------------------------------------------------
 * Utilities
 * -------------------------------------------------------------------------- */

function formatLabel(value: string): string {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

/* -----------------------------------------------------------------------------
 * FilterDropdown
 * -------------------------------------------------------------------------- */

interface FilterDropdownProps {
  label: string
  icon: React.ComponentType<{ className?: string }>
  options: string[]
  selected: string[]
  onToggle: (value: string) => void
  onClear: () => void
}

function FilterDropdown({
  label,
  icon: Icon,
  options,
  selected,
  onToggle,
  onClear,
}: FilterDropdownProps) {
  const hasSelection = selected.length > 0

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              data-slot="filter-dropdown-trigger"
              className={cn(
                "flex h-8 items-center gap-0.5 rounded-full px-2 transition-colors",
                hasSelection
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-background/80 hover:text-foreground"
              )}
            >
              <Icon className="size-4" />
              <ChevronDown className="size-3" />
            </button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="start" className="max-h-64 overflow-auto">
        {hasSelection && (
          <button
            type="button"
            onClick={onClear}
            className="text-muted-foreground hover:text-foreground flex w-full items-center gap-2 px-2 py-1.5 text-sm"
          >
            <X className="size-3.5" />
            Clear selection
          </button>
        )}
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option}
            checked={selected.includes(option)}
            onCheckedChange={() => onToggle(option)}
          >
            {formatLabel(option)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/* -----------------------------------------------------------------------------
 * FilterBar
 * -------------------------------------------------------------------------- */

function FilterBar({
  filters,
  searchValue = "",
  searchPlaceholder = "Search...",
  onSearchChange,
  onFilterToggle,
  onFilterClear,
  onClearAll,
  className,
}: FilterBarProps) {
  const hasActiveFilters = filters.some((f) => f.selected.length > 0)
  const showSearch = onSearchChange !== undefined

  return (
    <div
      data-slot="filter-bar"
      className={cn(
        "bg-muted flex flex-wrap items-center gap-1.5 rounded-full px-2 py-2",
        className
      )}
    >
      {/* Search input */}
      {showSearch && (
        <>
          <div className="relative w-56">
            <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input
              type="search"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-background h-8 rounded-full border-0 pr-3 pl-9 shadow-none focus-visible:ring-0"
            />
          </div>
          <div className="bg-border mx-1 h-5 w-px" />
        </>
      )}

      {/* Filter dropdowns */}
      <div className="flex shrink-0 items-center gap-1">
        {filters.map((filter) => (
          <FilterDropdown
            key={filter.key}
            label={filter.label}
            icon={filter.icon}
            options={filter.options}
            selected={filter.selected}
            onToggle={(value) => onFilterToggle(filter.key, value)}
            onClear={() => onFilterClear(filter.key)}
          />
        ))}
      </div>

      {/* Clear all button */}
      {hasActiveFilters && onClearAll && (
        <>
          <div className="bg-border mx-1 h-5 w-px shrink-0" />
          <button
            type="button"
            onClick={onClearAll}
            className="text-muted-foreground hover:text-foreground hover:bg-background/80 flex h-8 shrink-0 items-center gap-1.5 rounded-full px-3 text-sm transition-colors"
          >
            <X className="size-3.5" />
            Clear
          </button>
        </>
      )}
    </div>
  )
}

export { FilterBar, FilterDropdown, formatLabel }
export type { FilterDropdownProps }
