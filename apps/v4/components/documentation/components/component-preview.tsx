import { getRegistryIndexItem } from "@/lib/registry-client"
import { ReadinessBadge } from "@/components/ui/readiness-badge"
import { TierBadge } from "@/components/ui/tier-badge"
import { ComponentPreviewTabs } from "@/components/documentation/components/component-preview-tabs"
import { ComponentSource } from "@/components/documentation/components/component-source"
import { type Style } from "@/registry/styles"

export function ComponentPreview({
  name,
  styleName = "new-york-v4",
  type,
  className,
  align = "start",
  hideCode = false,
  chromeLessOnMobile = false,
  ...props
}: React.ComponentProps<"div"> & {
  name: string
  styleName?: Style["name"]
  align?: "center" | "start" | "end"
  description?: string
  hideCode?: boolean
  type?: "block" | "component" | "example"
  chromeLessOnMobile?: boolean
}) {
  const registryItem = getRegistryIndexItem(name, styleName)

  if (!registryItem) {
    return (
      <p className="text-muted-foreground mt-6 text-sm">
        Component{" "}
        <code className="border-border bg-background relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm shadow-xs">
          {name}
        </code>{" "}
        not found in registry.
      </p>
    )
  }

  // Auto-detect type from registry if not provided
  const itemType = type || registryItem?.type
  const isBlock =
    itemType === "registry:block" ||
    itemType === "block" ||
    itemType === "registry:internal"

  // Only show badges for demo components (main preview)
  const isDemo = name.includes("demo")

  if (isBlock) {
    return (
      <div className="bg-page relative aspect-[4/2.5] w-full overflow-hidden rounded-md border md:-mx-1">
        <div className="bg-page absolute inset-0 w-full md:w-[1600px]">
          {isDemo && (
            <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
              <ReadinessBadge readiness={registryItem?.readiness} />
              <TierBadge tier={registryItem?.tier ?? "free"} />
            </div>
          )}
          <iframe
            src={`/view/${styleName}/${name}`}
            className="pointer-events-none size-full overflow-hidden"
          />
          {/* Invisible overlay to prevent scrolling */}
          <div className="absolute inset-0 z-10" />
        </div>
      </div>
    )
  }

  return (
    <ComponentPreviewTabs
      className={className}
      align={align}
      hideCode={hideCode}
      readiness={isDemo ? registryItem?.readiness : undefined}
      tier={isDemo ? (registryItem?.tier ?? "free") : undefined}
      component={
        <iframe
          src={`/view/${styleName}/${name}`}
          className="size-full overflow-hidden border-0"
        />
      }
      source={
        <ComponentSource
          name={name}
          collapsible={false}
          styleName={styleName}
        />
      }
      chromeLessOnMobile={chromeLessOnMobile}
      {...props}
    />
  )
}
