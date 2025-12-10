import { Suspense } from "react"

import { Index } from "@/registry/__index__"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

interface LazyComponentRendererProps {
  name: string
  styleName: string
  isComponent: boolean
}

export async function LazyComponentRenderer({
  name,
  styleName,
}: LazyComponentRendererProps) {
  // Get the component from the registry index
  const styleIndex = Index[styleName]

  if (!styleIndex || !styleIndex[name]) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-muted-foreground">Component not found</div>
      </div>
    )
  }

  const registryItem = styleIndex[name]
  const Component = registryItem.component

  if (!Component) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-muted-foreground">Component not found</div>
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <Spinner className="size-6" />
        </div>
      }
    >
      <Component />
    </Suspense>
  )
}
