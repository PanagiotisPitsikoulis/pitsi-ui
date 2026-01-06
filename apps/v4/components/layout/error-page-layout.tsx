import { ReactNode } from "react"

import { LayoutGrid, LayoutGridItem } from "@/components/layout/layout-grid"
import { StripeBgGuides } from "@/components/layout/striped-bg-guides"
import { BackLink } from "@/components/navigation/back-link"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

interface ErrorPageLayoutProps {
  statusLabel: string
  title: string
  description: string
  content: ReactNode
  actions: ReactNode
}

export function ErrorPageLayout({
  statusLabel,
  title,
  description,
  content,
  actions,
}: ErrorPageLayoutProps) {
  return (
    <div className="relative -mt-[56px] min-h-screen overflow-x-clip">
      <StripeBgGuides columnCount={6} animated={false} />

      <div className="relative z-10 container px-6">
        <Spacer size="6xl" sizeMobile="4xl" />
        <LayoutGrid>
          <LayoutGridItem span={6} spanLg={2}>
            <div className="lg:sticky lg:top-24">
              <BackLink href="/">Back to home</BackLink>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                  {statusLabel}
                </span>
              </div>
              <Spacer size="sm" sizeMobile="xs" />
              <h1 className="display text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <Spacer size="md" sizeMobile="sm" />
              <p className="text-muted-foreground text-base md:text-lg">
                {description}
              </p>
            </div>
          </LayoutGridItem>

          <LayoutGridItem span={6} spanLg={3} className="lg:col-start-4">
            <div className="flex flex-col gap-6">
              {content}
              <div className="flex flex-col gap-4 sm:flex-row">{actions}</div>
            </div>
          </LayoutGridItem>
        </LayoutGrid>
        <Spacer size="6xl" sizeMobile="4xl" />
      </div>
    </div>
  )
}
