import { notFound } from "next/navigation"
import { cacheLife } from "next/cache"

import {
  generateViewMetadata,
  generateViewStaticParams,
} from "@/lib/pages/view"
import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { cn } from "@/lib/utils"
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
  const isComponent =
    item.type === "registry:component" || item.type === "registry:example"
  const isAnimation = item.categories?.includes("animations")

  return (
    <>
      {isBlock ? (
        <div className="bg-background min-h-screen w-full">
          <LazyComponentRenderer
            name={name}
            styleName={style.name}
            isComponent={isComponent}
          />
        </div>
      ) : isAnimation ? (
        <div className="bg-background min-h-screen w-full">
          <LazyComponentRenderer
            name={name}
            styleName={style.name}
            isComponent={isComponent}
          />
        </div>
      ) : (
        <div className={cn("bg-background flex h-screen w-screen items-center justify-center")}>
          <div className="flex items-center justify-center p-8">
            <LazyComponentRenderer
              name={name}
              styleName={style.name}
              isComponent={isComponent}
            />
          </div>
        </div>
      )}
    </>
  )
}
