"use client"

import { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Bookmark, Clock, MoreVertical } from "lucide-react"

import {
  useSavedComponents,
  useRecentComponents,
  useSavedAnimations,
  useRecentAnimations,
} from "@/lib/blocks-storage"
import { cn } from "@/lib/utils"
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
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-page">
      {/* Light mode image */}
      <Image
        src={lightSrc}
        alt={`${previewName} preview`}
        fill
        className="object-contain object-center dark:hidden"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={false}
      />
      {/* Dark mode image */}
      <Image
        src={darkSrc}
        alt={`${previewName} preview`}
        fill
        className="hidden object-contain object-center dark:block"
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
        <div className="overflow-hidden rounded-3xl border shadow-sm">
          <div className="bg-background relative">
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
      <div className="flex flex-col gap-1 px-2">
        <div className="flex items-center justify-between gap-2">
          <Link href={item.url}>
            <span className="group-hover/card:text-primary text-base font-medium transition-colors group-hover/card:underline">
              {item.name}
            </span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
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
          <p className="text-muted-foreground group-hover/card:text-foreground/70 line-clamp-2 min-h-[2.5rem] max-w-6/7 text-sm transition-colors">
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
            <div className="flex size-16 items-center justify-center rounded-full bg-muted">
              <Icon className="size-8 text-muted-foreground" />
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
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
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
