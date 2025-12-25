"use client"

import * as React from "react"
import { memo } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Style } from "@/registry/styles"

interface ComponentItem {
  $id: string
  url: string
  name: string | React.ReactNode
  registryName?: string
  description?: string
  readiness?: string
  tier?: string
  isAnimation?: boolean
}

interface ComponentsListPaginatedProps {
  items: ComponentItem[]
  styleName?: Style["name"]
  label?: string
}

// Component preview using iframe
const ComponentPreviewContent = memo(function ComponentPreviewContent({
  registryName,
  styleName,
  isAnimation,
}: {
  registryName: string
  styleName: Style["name"]
  isAnimation?: boolean
}) {
  // Try demo version first, then base component
  const demoName = `${registryName}-demo`

  // Special cases mapping
  const specialCases: Record<string, string> = {
    chart: "chart-bar-demo",
    "data-table": "data-table-demo",
  }

  const previewName = specialCases[registryName] || demoName

  return (
    <iframe
      src={`/view/${styleName}/${previewName}`}
      className="absolute inset-0 size-full border-0"
      title={`${previewName} preview`}
      loading="lazy"
      sandbox="allow-scripts allow-same-origin"
      style={
        isAnimation
          ? {
              transform: "scale(0.65)",
              transformOrigin: "center",
              width: "153.85%",
              height: "153.85%",
              left: "-26.92%",
              top: "-26.92%",
            }
          : {
              transform: "scale(0.5)",
              transformOrigin: "center",
              width: "200%",
              height: "200%",
              left: "-50%",
              top: "-50%",
            }
      }
    />
  )
})

// Memoized card component to prevent re-renders
const ComponentCard = memo(function ComponentCard({
  item,
  styleName,
}: {
  item: ComponentItem
  styleName: Style["name"]
}) {
  const registryName = item.registryName || item.$id
  const isAnimation = item.isAnimation

  return (
    <div
      id={item.$id}
      className="group relative flex scroll-mt-20 flex-col gap-4"
    >
      <div className="overflow-hidden rounded-2xl border shadow-xs">
        <div className="bg-background relative transition-all">
          {item.readiness && item.readiness !== "production" && (
            <div className="absolute top-2 left-2 z-10 rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-600 dark:text-yellow-400">
              {item.readiness}
            </div>
          )}
          {item.tier && item.tier !== "free" && (
            <div className="absolute top-2 right-2 z-10 rounded-full bg-purple-500/10 px-2 py-0.5 text-xs font-medium text-purple-600 dark:text-purple-400">
              {item.tier}
            </div>
          )}
          <div data-slot="preview" className="overflow-hidden">
            <div
              data-align="center"
              className={cn(
                "preview relative flex aspect-square w-full items-center justify-center",
                isAnimation ? "" : "p-8"
              )}
            >
              <ComponentPreviewContent
                registryName={registryName}
                styleName={styleName}
                isAnimation={isAnimation}
              />
            </div>
          </div>
        </div>
      </div>
      <Link href={item.url} className="group/link flex flex-col gap-1 px-2">
        <div className="flex items-center justify-between gap-2">
          <span className="group-hover/link:text-primary text-base font-medium transition-colors group-hover/link:underline">
            {item.name}
          </span>
          <ArrowUpRight className="text-muted-foreground group-hover/link:text-foreground size-4 shrink-0 transition-colors" />
        </div>
        {item.description && (
          <p className="text-muted-foreground group-hover/link:text-foreground/70 line-clamp-1 max-w-6/7 text-sm transition-colors">
            {item.description}
          </p>
        )}
      </Link>
    </div>
  )
})

export const ComponentsListPaginated = memo(function ComponentsListPaginated({
  items,
  label,
  styleName = "new-york-v4",
}: ComponentsListPaginatedProps) {
  return (
    <div className="relative mt-6 pb-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {items.map((item) => (
          <ComponentCard key={item.$id} item={item} styleName={styleName} />
        ))}
      </div>
    </div>
  )
})
