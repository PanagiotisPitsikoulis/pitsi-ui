import { ComponentPreviewTabs } from "@/components/documentation/components/component-preview-tabs"
import { ComponentSource } from "@/components/documentation/components/component-source"
import { Index } from "@/registry/__index__"
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
  const Component = Index[styleName]?.[name]?.component
  const registryItem = Index[styleName]?.[name]

  if (!Component) {
    return (
      <p className="text-muted-foreground mt-6 text-sm">
        Component{" "}
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {name}
        </code>{" "}
        not found in registry.
      </p>
    )
  }

  // Auto-detect type from registry if not provided
  const itemType = type || registryItem?.type
  const isBlock = itemType === "registry:block"

  // Check if this is an animation by looking at registryDependencies
  const isAnimation = registryItem?.registryDependencies?.some(
    (dep: string) => {
      const depItem = Index[styleName]?.[dep]
      return depItem?.categories?.includes("animations")
    }
  )

  if (isBlock) {
    return (
      <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-md border md:-mx-1">
        <div className="bg-background absolute inset-0 w-full md:w-[1600px]">
          <iframe src={`/view/${styleName}/${name}`} className="size-full" />
        </div>
      </div>
    )
  }

  if (isAnimation) {
    return (
      <ComponentPreviewTabs
        isScrollable={true}
        className={className}
        align={align}
        hideCode={hideCode}
        component={
          <div className="relative aspect-video w-full overflow-y-auto rounded-md">
            <iframe
              src={`/view/${styleName}/${name}`}
              className="h-full w-full"
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
