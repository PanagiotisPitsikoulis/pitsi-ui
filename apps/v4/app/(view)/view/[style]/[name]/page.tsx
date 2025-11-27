 
import { Suspense } from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import { siteConfig } from "@/lib/config"
import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { absoluteUrl, cn } from "@/lib/utils"
import { Index } from "@/registry/__index__"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"
import { getStyle, STYLES } from "@/registry/styles"

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    style: string
    name: string
  }>
}): Promise<Metadata> {
  const { style: styleName, name } = await params
  const style = getStyle(styleName)

  if (!style) {
    return {}
  }

  const item = (await queryRegistry({
    name,
    style: style.name,
  })) as RegistryItem | null

  if (!item) {
    return {}
  }

  const title = item.name
  const description = item.description

  return {
    title: item.name,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(`/view/${style.name}/${item.name}`),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: "@pitsi",
    },
  }
}

export async function generateStaticParams() {
  const { Index } = await import("@/registry/__index__")
  const params: Array<{ style: string; name: string }> = []

  for (const style of STYLES) {
    if (!Index[style.name]) {
      continue
    }

    const styleIndex = Index[style.name]
    for (const itemName in styleIndex) {
      const item = styleIndex[itemName]
      if (
        ["registry:block", "registry:component", "registry:example"].includes(
          item.type
        )
      ) {
        params.push({
          style: style.name,
          name: item.name,
        })
      }
    }
  }

  return params
}

async function LazyComponentRenderer({
  name,
  styleName,
  isComponent,
}: {
  name: string
  styleName: string
  isComponent: boolean
}) {
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

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    style: string
    name: string
  }>
}) {
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
        <div className="bg-background min-h-screen w-full overflow-hidden">
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
