"use client"

import { BlocksNav, BlocksSearch } from "@/components/navigation/blocks-nav"
import { SidebarProvider } from "@/registry/new-york-v4/ui/sidebar"

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
  // If no categories, show simplified layout without sidebar
  if (categoryLinks.length === 0) {
    return (
      <div className="container flex flex-1 flex-col px-6">
        <div className="section-soft h-full w-full pt-8 pb-8">{children}</div>
      </div>
    )
  }

  return (
    <div className="container flex flex-1 flex-col px-6">
      <SidebarProvider className="min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
        <BlocksNav categoryLinks={categoryLinks} />
        <div className="section-soft h-full w-full pt-8 pb-8">
          <div className="mb-6 lg:hidden">
            <BlocksSearch categoryLinks={categoryLinks} />
          </div>
          {children}
        </div>
      </SidebarProvider>
    </div>
  )
}
