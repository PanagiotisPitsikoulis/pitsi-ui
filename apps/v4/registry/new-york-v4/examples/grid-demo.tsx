"use client"

import Grid from "@/registry/new-york-v4/ui/grid"

export default function GridDemo() {
  return (
    <div className="w-full max-w-3xl p-8">
      <Grid cols={3} gap="md" colsMobile={2}>
        <div className="bg-card border-border text-foreground flex h-20 items-center justify-center rounded-lg border shadow-sm">
          <span className="text-lg font-semibold">1</span>
        </div>
        <div className="bg-card border-border text-foreground flex h-20 items-center justify-center rounded-lg border shadow-sm">
          <span className="text-lg font-semibold">2</span>
        </div>
        <div className="bg-card border-border text-foreground flex h-20 items-center justify-center rounded-lg border shadow-sm">
          <span className="text-lg font-semibold">3</span>
        </div>
        <div className="bg-card border-border text-foreground flex h-20 items-center justify-center rounded-lg border shadow-sm">
          <span className="text-lg font-semibold">4</span>
        </div>
        <div className="bg-card border-border text-foreground flex h-20 items-center justify-center rounded-lg border shadow-sm">
          <span className="text-lg font-semibold">5</span>
        </div>
        <div className="bg-card border-border text-foreground flex h-20 items-center justify-center rounded-lg border shadow-sm">
          <span className="text-lg font-semibold">6</span>
        </div>
      </Grid>
    </div>
  )
}
