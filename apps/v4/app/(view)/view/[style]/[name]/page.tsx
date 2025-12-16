import { cacheLife } from "next/cache"
import { notFound } from "next/navigation"

import {
  generateViewMetadata,
  generateViewStaticParams,
} from "@/lib/pages/view"
import { itemExists, queryRegistry, type RegistryItem } from "@/lib/registry"
import { getStyle } from "@/registry/styles"
import { LazyComponentRenderer } from "@/app/(view)/_components"

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    style: string
    name: string
  }>
}) {
  const { style, name } = await params
  return generateViewMetadata({ style, name })
}

export async function generateStaticParams() {
  return generateViewStaticParams()
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    style: string
    name: string
  }>
}) {
  "use cache"
  cacheLife("max")
  const { style: styleName, name } = await params
  const style = getStyle(styleName)

  if (!style) {
    return notFound()
  }

  const item = (await queryRegistry({
    name,
    style: style.name,
  })) as RegistryItem | null

  if (!item) {
    return notFound()
  }

  const isBlock = item.type === "registry:block"
  const isInternal = item.type === "registry:internal"
  const isExample = item.type === "registry:example"
  const isUI = item.type === "registry:ui"

  // For UI components, try to use the demo version instead
  // UI components like "button" and "dialog" can't render standalone
  let componentName = name
  let componentItem = item
  if (isUI) {
    const demoName = `${name}-demo`
    const demoItem = (await queryRegistry({
      name: demoName,
      style: style.name,
    })) as RegistryItem | null
    if (demoItem) {
      componentName = demoName
      componentItem = demoItem
    }
  }

  // Get the file path for dynamic import
  const filePath = componentItem.files?.[0]?.path || ""

  return (
    <div className="bg-background min-h-screen w-full">
      <LazyComponentRenderer
        name={componentName}
        styleName={style.name}
        isComponent={isExample || isUI}
        componentType={componentItem.type}
        filePath={filePath}
      />
    </div>
  )
}
