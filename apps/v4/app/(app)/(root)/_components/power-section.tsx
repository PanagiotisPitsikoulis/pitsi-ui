import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { LayoutGrid, LayoutGridItem } from "./layout-grid"

function FeatureCard({
  children,
  label,
  className,
}: {
  children?: React.ReactNode
  label: string
  className?: string
}) {
  return (
    <div className={`group relative flex h-[20rem] flex-col overflow-hidden rounded-4xl border border-border bg-background shadow-sm md:h-[24rem] ${className ?? ""}`}>
      <div className="flex flex-1 items-center justify-center p-6 overflow-hidden">
        {children}
      </div>
      <div className="border-t bg-background/50 px-6 py-4 backdrop-blur-sm">
        <p className="text-base font-medium">{label}</p>
      </div>
    </div>
  )
}

export function PowerSection() {
  return (
    <div className="container flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
        A Full Ecosystem Behind a Simple Install
      </p>
      <Spacer size="lg" sizeMobile="md" />
      <h2 className="display max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Blocks Are Just
        <br />
        <span className="text-muted-foreground">the Beginning.</span>
      </h2>
      <Spacer size="3xl" sizeMobile="xl" />
      <LayoutGrid className="w-full">
        <LayoutGridItem span={6} spanMd={2}>
          <FeatureCard label="100% Payload CMS compatible" />
        </LayoutGridItem>
        <LayoutGridItem span={6} spanMd={2}>
          <FeatureCard label="MCP server included" />
        </LayoutGridItem>
        <LayoutGridItem span={6} spanMd={2}>
          <FeatureCard label="Built for AI" />
        </LayoutGridItem>
      </LayoutGrid>
      <Spacer size="xl" sizeMobile="md" />
      <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
        Built for humans. Built for AI. Built to last.
      </p>
    </div>
  )
}
