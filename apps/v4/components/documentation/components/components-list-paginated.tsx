"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { PAGES_NEW } from "@/lib/docs"
import {
  getRegistryComponent,
  getRegistryIndexItem,
  registryComponentExists,
} from "@/lib/registry-client"
import type { Style } from "@/registry/styles"
import { ReadinessBadge } from "@/components/ui/readiness-badge"
import { TierBadge } from "@/components/ui/tier-badge"
import { LazyComponentPreview } from "@/components/documentation/components/lazy-component-preview"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

interface ComponentItem {
  $id: string
  url: string
  name: string | React.ReactNode
  registryName?: string
  description?: string
}

interface ComponentsListPaginatedProps {
  items: ComponentItem[]
  styleName?: Style["name"]
  label?: string
}

function ComponentPreviewContent({
  registryName,
  styleName,
}: {
  registryName: string
  styleName: Style["name"]
}) {
  // Special cases for components that need specific demos
  const specialCases: Record<string, string> = {
    chart: "chart-bar-demo", // chart requires ChartConfig, use bar demo
    "data-table": "data-table-demo",
  }

  // Use special case if it exists
  let previewName: string | null = specialCases[registryName] || null

  // If no special case, try to find a demo version (e.g., "accordion-demo" for "accordion")
  if (!previewName) {
    const demoName = `${registryName}-demo`
    const demoExists = registryComponentExists(demoName, styleName)

    // Check if base component exists
    const Component = getRegistryComponent(registryName, styleName)
    const registryItem = getRegistryIndexItem(registryName, styleName)

    // Prefer demo, fallback to component
    previewName = demoExists
      ? demoName
      : Component && registryItem
        ? registryName
        : null
  } else {
    // Verify special case exists
    if (!registryComponentExists(previewName, styleName)) {
      previewName = null
    }
  }

  if (!previewName) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-muted-foreground text-center text-sm">
          <div className="mb-2 text-4xl">📦</div>
          <div className="text-xs">{registryName || "No preview"}</div>
        </div>
      </div>
    )
  }

  // Get the component from the registry
  const Component = getRegistryComponent(previewName, styleName)

  if (!Component) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-muted-foreground text-center text-sm">
          <div className="mb-2 text-4xl">⚠️</div>
          <div className="text-xs">Component not found: {previewName}</div>
        </div>
      </div>
    )
  }

  // Check if this is an animation by looking at categories
  const registryItem = getRegistryIndexItem(previewName, styleName)
  const isAnimation = registryItem?.categories?.includes("animations")

  // Render animations in iframe
  if (isAnimation) {
    return (
      <iframe
        src={`/view/${styleName}/${previewName}`}
        className="absolute inset-0 size-full border-0"
        title={`${previewName} animation preview`}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
        allowFullScreen
        style={{
          transform: 'scale(0.65)',
          transformOrigin: 'center',
          width: '153.85%',
          height: '153.85%',
          left: '-26.92%',
          top: '-26.92%'
        }}
      />
    )
  }

  return (
    <LazyComponentPreview className="flex h-full w-full items-center justify-center">
      <div className="flex w-fit min-w-[600px] origin-center scale-[0.5] transform items-center justify-center">
        <Component />
      </div>
    </LazyComponentPreview>
  )
}

// Dynamically import the preview with a spinner
const ComponentPreview = dynamic(
  () => Promise.resolve(ComponentPreviewContent),
  {
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
    ),
    ssr: false,
  }
)

export function ComponentsListPaginated({
  items,
  label,
  styleName = "new-york-v4",
}: ComponentsListPaginatedProps) {
  return (
    <div className="relative mt-6 pb-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {items.map((item) => {
          const registryName = item.registryName || item.$id
          const registryItem = getRegistryIndexItem(registryName, styleName)

          // Check if it's an animation to apply different styling
          const demoName = `${registryName}-demo`
          const demoItem = getRegistryIndexItem(demoName, styleName)
          const isAnimation =
            registryItem?.categories?.includes("animations") ||
            demoItem?.categories?.includes("animations")

          return (
            <div
              key={item.$id}
              id={item.$id}
              className="group relative flex scroll-mt-20 flex-col gap-4"
            >
              <div className="overflow-hidden rounded-2xl border shadow-xs">
                <div className="bg-background relative transition-all">
                  <ReadinessBadge readiness={registryItem?.readiness} />
                  <TierBadge tier={registryItem?.tier ?? "free"} />
                  <div data-slot="preview" className="overflow-visible">
                    <div
                      data-align="center"
                      className={cn(
                        "preview relative flex aspect-square w-full items-center justify-center",
                        isAnimation ? "" : "p-8"
                      )}
                    >
                      <ComponentPreview
                        registryName={registryName}
                        styleName={styleName}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href={item.url}
                className="group/link flex flex-col gap-1 px-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="group-hover/link:text-primary text-base font-medium transition-colors group-hover/link:underline">
                      {item.name}
                    </span>
                    {PAGES_NEW.includes(item.url) && (
                      <span
                        className="bg-primary flex size-2 rounded-full"
                        title="New"
                      />
                    )}
                  </div>
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
        })}
      </div>
    </div>
  )
}
