"use client"

import { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import {
  useRecentAnimations,
  useRecentComponents,
  useSavedAnimations,
  useSavedComponents,
} from "@/lib/blocks-storage"
import { Bookmark, Clock, MoreVertical } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { ReadinessBadge } from "@/components/ui/readiness-badge"
import { TierBadge } from "@/components/ui/tier-badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"
import type { Style } from "@/registry/styles"

interface ComponentItem {
  $id: string
  url: string
  name: string | React.ReactNode
  registryName?: string
  description?: string
  readiness?: string
  tier?: string
}

interface ComponentsListPaginatedProps {
  items: ComponentItem[]
  styleName?: Style["name"]
  label?: string
  type: "component" | "animation"
}

// Component preview using screenshots
const ComponentPreviewContent = memo(function ComponentPreviewContent({
  registryName,
  styleName,
}: {
  registryName: string
  styleName: Style["name"]
}) {
  // Try demo version first, then base component
  const demoName = `${registryName}-demo`

  // Special cases mapping
  const specialCases: Record<string, string> = {
    chart: "chart-bar-demo",
    "data-table": "data-table-demo",
  }

  const previewName = specialCases[registryName] || demoName
  const lightSrc = `/r/styles/${styleName}/${previewName}-light.webp`
  const darkSrc = `/r/styles/${styleName}/${previewName}-dark.webp`

  return (
    <div className="bg-background relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Light mode image */}
      <Image
        src={lightSrc}
        alt={`${previewName} preview`}
        fill
        className="object-contain dark:hidden"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={false}
      />
      {/* Dark mode image */}
      <Image
        src={darkSrc}
        alt={`${previewName} preview`}
        fill
        className="hidden object-contain dark:block"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={false}
      />
    </div>
  )
})

// Memoized card component to prevent re-renders
const ComponentCard = memo(function ComponentCard({
  item,
  styleName,
  isSaved,
  toggleSave,
}: {
  item: ComponentItem
  styleName: Style["name"]
  isSaved: boolean
  toggleSave: () => void
}) {
  const registryName = item.registryName || item.$id

  return (
    <div
      id={item.$id}
      className="group/card relative flex scroll-mt-20 flex-col gap-4"
    >
      <Link href={item.url}>
        <div className="overflow-hidden rounded-3xl shadow-sm dark:border">
          <div className="bg-background relative">
            <div className="opacity-0 transition-opacity duration-200 group-hover/card:opacity-100">
              <ReadinessBadge readiness={item.readiness as any} />
              <TierBadge tier={(item.tier ?? "free") as any} />
            </div>
            <div data-slot="preview" className="overflow-hidden">
              <div
                data-align="center"
                className="preview relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden"
              >
                <ComponentPreviewContent
                  registryName={registryName}
                  styleName={styleName}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-0.5 px-2">
        <div className="flex items-center justify-between gap-2">
          <Link href={item.url}>
            <span className="group-hover/card:text-primary text-base font-medium transition-colors group-hover/card:underline">
              {item.name}
            </span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-muted-foreground hover:bg-muted hover:text-foreground flex size-8 items-center justify-center rounded-md transition-colors">
              <MoreVertical className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={toggleSave} className="gap-2">
                <Bookmark className={cn("size-4", isSaved && "fill-current")} />
                {isSaved ? "Remove from saved" : "Save"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {item.description && (
          <p className="text-muted-foreground group-hover/card:text-foreground/70 line-clamp-2 max-w-6/7 text-sm transition-colors">
            {item.description}
          </p>
        )}
      </div>
    </div>
  )
})

export const ComponentsListPaginated = memo(function ComponentsListPaginated({
  items,
  label,
  styleName = "new-york-v4",
  type,
}: ComponentsListPaginatedProps) {
  const searchParams = useSearchParams()
  const filter = searchParams.get("filter")

  // Use appropriate hooks based on type
  const {
    savedComponents,
    isComponentSaved,
    toggleSaveComponent,
    isHydrated: savedComponentsHydrated,
  } = useSavedComponents()
  const { recentComponents, isHydrated: recentComponentsHydrated } =
    useRecentComponents()
  const {
    savedAnimations,
    isAnimationSaved,
    toggleSaveAnimation,
    isHydrated: savedAnimationsHydrated,
  } = useSavedAnimations()
  const { recentAnimations, isHydrated: recentAnimationsHydrated } =
    useRecentAnimations()

  // Determine which data to use based on type
  const savedItems = type === "component" ? savedComponents : savedAnimations
  const recentItems = type === "component" ? recentComponents : recentAnimations
  const isSaved =
    type === "component"
      ? (name: string) => isComponentSaved(name)
      : (name: string) => isAnimationSaved(name)
  const toggleSave =
    type === "component"
      ? (name: string) => toggleSaveComponent(name)
      : (name: string) => toggleSaveAnimation(name)
  const savedHydrated =
    type === "component" ? savedComponentsHydrated : savedAnimationsHydrated
  const recentHydrated =
    type === "component" ? recentComponentsHydrated : recentAnimationsHydrated

  // Filter items based on search params
  const filteredItems = items.filter((item) => {
    if (!filter) return true
    const registryName = item.registryName || item.$id

    if (filter === "saved") {
      return savedItems.some((s) => s.name === registryName)
    }

    if (filter === "recent") {
      return recentItems.some((r) => r.name === registryName)
    }

    return true
  })

  // Show loading state while hydrating
  if (
    filter &&
    ((filter === "saved" && !savedHydrated) ||
      (filter === "recent" && !recentHydrated))
  ) {
    return (
      <div className="relative mt-6 pb-8">
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="text-muted-foreground">Loading...</div>
        </div>
      </div>
    )
  }

  // Show empty state
  if (filteredItems.length === 0) {
    const Icon =
      filter === "saved" ? Bookmark : filter === "recent" ? Clock : null
    const itemType = type === "component" ? "components" : "animations"
    const title =
      filter === "saved"
        ? `No saved ${itemType}`
        : filter === "recent"
          ? `No recently viewed ${itemType}`
          : `No ${itemType}`
    const description =
      filter === "saved"
        ? `Save ${itemType} by clicking the menu on any card`
        : filter === "recent"
          ? `${type === "component" ? "Components" : "Animations"} you view will appear here`
          : `No ${itemType} available`

    return (
      <div className="relative mt-6 pb-8">
        <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 text-center">
          {Icon && (
            <div className="bg-muted flex size-16 items-center justify-center rounded-full">
              <Icon className="text-muted-foreground size-8" />
            </div>
          )}
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative mt-6 pb-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredItems.map((item) => {
          const registryName = item.registryName || item.$id
          return (
            <ComponentCard
              key={item.$id}
              item={item}
              styleName={styleName}
              isSaved={isSaved(registryName)}
              toggleSave={() => toggleSave(registryName)}
            />
          )
        })}
      </div>
    </div>
  )
})
