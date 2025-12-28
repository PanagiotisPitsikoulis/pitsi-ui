import * as React from "react"

import { ComponentsListPaginated } from "@/components/documentation/components/components-list-paginated"
import type { Style } from "@/registry/styles"

interface ComponentItem {
  $id: string
  url: string
  name: string | React.ReactNode
  registryName?: string
  categories?: string[]
  description?: string
}

interface ComponentsListProps {
  items?: ComponentItem[]
  styleName?: Style["name"]
  label?: string
  category?: string
  type: "component" | "animation"
}

export function ComponentsList({
  items = [],
  styleName = "new-york-v4",
  label,
  category,
  type,
}: ComponentsListProps) {
  if (!items.length) {
    return null
  }

  // If category is specified, filter items where this is their primary (first) category
  const filteredItems = category
    ? items.filter((item) => {
        const primaryCategory = item.categories?.[0]
        return primaryCategory === category
      })
    : items

  if (!filteredItems.length) {
    return null
  }

  return (
    <ComponentsListPaginated
      label={label}
      items={filteredItems}
      styleName={styleName}
      type={type}
    />
  )
}
