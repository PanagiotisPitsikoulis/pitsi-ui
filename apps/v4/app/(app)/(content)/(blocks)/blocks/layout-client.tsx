"use client"

import { BlocksLayoutWrapper } from "@/components/documentation/blocks/blocks-layout-wrapper"

type SubcategoryLink = {
  subcategory: string
  href: string
  count: number
}

type CategoryLink = {
  category: string
  href: string
  count: number
  subcategories: SubcategoryLink[]
}

export function BlocksLayoutClient({
  categoryLinks,
  children,
}: {
  categoryLinks: CategoryLink[]
  children: React.ReactNode
}) {
  return (
    <BlocksLayoutWrapper categoryLinks={categoryLinks}>
      {children}
    </BlocksLayoutWrapper>
  )
}
