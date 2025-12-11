"use client"

import * as React from "react"
import { memo, useMemo } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"
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

const ComponentPreviewContent = memo(function ComponentPreviewContent({
  registryName,
  styleName,
}: {
  registryName: string
  styleName: Style["name"]
}) {
  // Memoize special cases lookup
  const specialCases: Record<string, string> = {
    chart: "chart-bar-demo",
    "data-table": "data-table-demo",
  }

  // Memoize the preview resolution
  const { previewName, Component, isAnimation } = useMemo(() => {
    let name: string | null = specialCases[registryName] || null

    if (!name) {
      const demoName = `${registryName}-demo`
      const demoExists = registryComponentExists(demoName, styleName)
      const baseComponent = getRegistryComponent(registryName, styleName)
      const baseItem = getRegistryIndexItem(registryName, styleName)

      name = demoExists
        ? demoName
        : baseComponent && baseItem
          ? registryName
          : null
    } else {
      if (!registryComponentExists(name, styleName)) {
        name = null
      }
    }

    if (!name) {
      return { previewName: null, Component: null, isAnimation: false }
    }

    const comp = getRegistryComponent(name, styleName)
    const item = getRegistryIndexItem(name, styleName)
    const isAnim = item?.categories?.includes("animations") ?? false

    return { previewName: name, Component: comp, isAnimation: isAnim }
  }, [registryName, styleName])

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
        <React.Suspense fallback={<Spinner className="size-6" />}>
          <Component />
        </React.Suspense>
      </div>
    </LazyComponentPreview>
  )
})

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

// Memoized card component to prevent re-renders
const ComponentCard = memo(function ComponentCard({
  item,
  styleName,
}: {
  item: ComponentItem
  styleName: Style["name"]
}) {
  const registryName = item.registryName || item.$id

  // Memoize registry lookups
  const { registryItem, isAnimation } = useMemo(() => {
    const regItem = getRegistryIndexItem(registryName, styleName)
    const demoName = `${registryName}-demo`
    const demoItem = getRegistryIndexItem(demoName, styleName)
    const isAnim =
      regItem?.categories?.includes("animations") ||
      demoItem?.categories?.includes("animations")

    return { registryItem: regItem, isAnimation: isAnim }
  }, [registryName, styleName])

  return (
    <div
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
