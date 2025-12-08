import { ReadinessBadge } from "@/components/ui/readiness-badge"
import { TierBadge } from "@/components/ui/tier-badge"
import { ComponentPreviewTabs } from "@/components/documentation/components/component-preview-tabs"
import { ComponentSource } from "@/components/documentation/components/component-source"
import {
  getRegistryIndexItem,
  getRegistryComponent
} from "@/lib/registry-client"
import { type Style } from "@/registry/styles"

export function ComponentPreview({
  name,
  styleName = "new-york-v4",
  type,
  className,
  align = "center",
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
  const Component = getRegistryComponent(name, styleName)
  const registryItem = getRegistryIndexItem(name, styleName)

  if (!Component) {
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
  const isBlock = itemType === "registry:block"

  if (isBlock) {
    return (
      <div className="bg-background relative aspect-[4/2.5] w-full overflow-hidden rounded-md border md:-mx-1">
        <div className="bg-background absolute inset-0 w-full md:w-[1600px]">
          <div className="absolute right-3 top-3 z-20 flex items-center gap-2">
            <ReadinessBadge readiness={registryItem?.readiness} />
            <TierBadge tier={registryItem?.tier ?? "free"} />
          </div>
          <iframe
            src={`/view/${styleName}/${name}`}
            className="pointer-events-none size-full overflow-hidden"
            scrolling="no"
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
      readiness={registryItem?.readiness}
      tier={registryItem?.tier ?? "free"}
      component={<div className="overflow-hidden"><Component /></div>}
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
