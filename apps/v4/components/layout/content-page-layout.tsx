import { ReactNode } from "react"

import { LayoutGrid, LayoutGridItem } from "@/components/layout/layout-grid"
import { StripeBgGuides } from "@/components/layout/striped-bg-guides"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

interface ContentPageLayoutProps {
  sidebar: ReactNode
  children: ReactNode
}

export function ContentPageLayout({
  sidebar,
  children,
}: ContentPageLayoutProps) {
  return (
    <div className="relative -mt-[56px] min-h-screen overflow-x-clip">
      <StripeBgGuides columnCount={6} animated={false} />

      <div className="relative z-10 container px-6">
        <Spacer size="6xl" sizeMobile="4xl" />
        <LayoutGrid>
          <LayoutGridItem span={6} spanLg={2}>
            <div className="lg:sticky lg:top-24">{sidebar}</div>
          </LayoutGridItem>

          <LayoutGridItem span={6} spanLg={3} className="lg:col-start-4">
            {children}
          </LayoutGridItem>
        </LayoutGrid>
        <Spacer size="6xl" sizeMobile="4xl" />
      </div>
    </div>
  )
}
