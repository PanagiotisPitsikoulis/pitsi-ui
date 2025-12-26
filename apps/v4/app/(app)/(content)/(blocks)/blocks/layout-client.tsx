"use client"

import { BlocksLayoutWrapper } from "@/components/documentation/blocks/blocks-layout-wrapper"

type CategoryLink = {
  category: string
  href: string
  count: number
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
