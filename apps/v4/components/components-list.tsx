import * as React from "react"

import { ComponentsListPaginated } from "@/components/components-list-paginated"

interface ComponentItem {
  $id: string
  url: string
  name: string | React.ReactNode
  registryName?: string
}

interface ComponentsListProps {
  items?: ComponentItem[]
  styleName?: string
}

export function ComponentsList({
  items = [],
  styleName = "new-york-v4",
}: ComponentsListProps) {
  if (!items.length) {
    return null
  }

  return <ComponentsListPaginated items={items} styleName={styleName} />
}
