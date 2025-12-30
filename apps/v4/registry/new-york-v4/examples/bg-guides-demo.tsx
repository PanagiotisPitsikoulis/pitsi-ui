"use client"

import { StripeBgGuides } from "@/registry/new-york-v4/ui/bg-guides"

export default function BgGuidesDemo() {
  return (
    <div className="relative h-[300px] w-full max-w-2xl overflow-hidden rounded-lg border">
      <StripeBgGuides
        contained
        columnCount={4}
        animated
        glowOpacity={0.5}
        maxActiveColumns={2}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-bold">Hero Section</h2>
        <p className="text-muted-foreground mt-2">
          Background guides add visual interest
        </p>
      </div>
    </div>
  )
}
