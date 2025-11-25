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

  // Check if this is an animation by looking at categories
  const isAnimation = registryItem?.categories?.includes("animations")

  if (isBlock) {
    return (
      <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-md border md:-mx-1">
        <div className="bg-background absolute inset-0 w-full md:w-[1600px]">
          <div className="flex items-center gap-2">
            <ReadinessBadge readiness={registryItem?.readiness} />
            <TierBadge tier={registryItem?.tier ?? "free"} />
          </div>
          <iframe src={`/view/${styleName}/${name}`} className="size-full" />
        </div>
      </div>
    )
  }

  if (isAnimation) {
    return (
      <ComponentPreviewTabs
        isScrollable={false}
        className={className}
        align={align}
        hideCode={hideCode}
        readiness={registryItem?.readiness}
        tier={registryItem?.tier ?? "free"}
        poweredBy={registryItem?.poweredBy}
        component={
          <div className="relative aspect-video w-full overflow-hidden rounded-md border">
            <iframe
              src={`/view/${styleName}/${name}`}
              className="h-full w-full border-0 overflow-hidden"
              title={`${name} animation`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              allowFullScreen
              style={{ overflow: 'hidden' }}
            />
          </div>
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

  return (
    <ComponentPreviewTabs
      className={className}
      align={align}
      hideCode={hideCode}
      readiness={registryItem?.readiness}
      tier={registryItem?.tier ?? "free"}
      poweredBy={registryItem?.poweredBy}
      component={<Component />}
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
