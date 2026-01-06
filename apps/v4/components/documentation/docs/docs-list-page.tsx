import Link from "next/link"
import { notFound } from "next/navigation"
import { mdxComponents } from "@/mdx-components"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { findNeighbour } from "fumadocs-core/page-tree"

import { type DocsItemType } from "@/lib/pages/docs"
import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { ComponentsFilter } from "@/components/documentation/components/components-filter"
import { ComponentsList } from "@/components/documentation/components/components-list"
import { DocsCopyPage } from "@/components/documentation/docs/docs-copy-page"
import { DocsTableOfContents } from "@/components/documentation/docs/docs-toc"
import { OpenInV0Cta } from "@/components/documentation/integrations/open-in-v0-cta"
import { Button } from "@/registry/new-york-v4/ui/button"

export type CategoryUrlMap = Record<string, string>

export async function DocsListPage({
  type,
  categoryUrls,
}: {
  type: DocsItemType
  categoryUrls: CategoryUrlMap
}) {
  const page = source.getPage([type])

  if (!page) {
    notFound()
  }

  const doc = page.data
  const MDX = doc.body
  const neighbours = findNeighbour(source.pageTree, page.url)
  const raw = await page.data.getText("raw")

  // Fetch items data
  const folder = source.pageTree.children.find((p) => p.$id === type)

  const registryItems = (await queryRegistry({
    types: ["registry:ui"],
  })) as RegistryItem[]

  const categoryMap = new Map<string, string[]>()
  registryItems.forEach((item) => {
    categoryMap.set(item.name, item.categories || [])
  })

  const itemsData =
    folder?.type === "folder"
      ? folder.children
          .filter(
            (c): c is Extract<typeof c, { type: "page" }> =>
              c.type === "page" && c.url !== `/docs/${type}`
          )
          .map((c) => {
            const urlParts = c.url.split("/").filter(Boolean)
            const registryName = urlParts[urlParts.length - 1] || ""
            const categories = categoryMap.get(registryName) || []
            const slug = urlParts.slice(1)
            const itemPage = source.getPage(slug)
            const description = itemPage?.data.description

            return {
              $id: registryName,
              url: c.url,
              name: c.name,
              registryName,
              categories,
              description,
            }
          })
      : []

  // Build enhanced TOC
  const itemsByCategory: Record<string, typeof itemsData> = {}
  itemsData.forEach((item) => {
    const primaryCategory =
      item.categories && item.categories.length > 0
        ? item.categories[0]
        : "uncategorized"

    if (!itemsByCategory[primaryCategory]) {
      itemsByCategory[primaryCategory] = []
    }
    itemsByCategory[primaryCategory].push(item)
  })

  const newToc: typeof doc.toc = []
  const mdxToc = doc.toc || []

  mdxToc.forEach((entry) => {
    newToc.push(entry)
    const matchingCategory = Object.keys(categoryUrls).find(
      (category) => categoryUrls[category] === entry.url
    )

    if (matchingCategory && itemsByCategory[matchingCategory]) {
      itemsByCategory[matchingCategory].forEach((item) => {
        newToc.push({
          title: typeof item.name === "string" ? item.name : item.$id,
          url: `#${item.$id}`,
          depth: 3,
        })
      })
    }
  })

  const enhancedToc = newToc
  const hasToc = enhancedToc?.length

  return (
    <div className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div
          className={`mx-auto flex w-full min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300 ${hasToc ? "max-w-2xl" : "max-w-6xl"}`}
        >
          <div className="flex flex-col gap-4">
            <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
              <DocsCopyPage page={raw} url={absoluteUrl(page.url)} />
              <div className="ml-auto flex items-center gap-1">
                {neighbours.previous && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="extend-touch-target size-8 rounded-full md:size-7"
                    asChild
                  >
                    <Link href={neighbours.previous.url}>
                      <IconArrowLeft />
                      <span className="sr-only">Previous</span>
                    </Link>
                  </Button>
                )}
                {neighbours.next && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="extend-touch-target size-8 rounded-full md:size-7"
                    asChild
                  >
                    <Link href={neighbours.next.url}>
                      <span className="sr-only">Next</span>
                      <IconArrowRight />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="bg-muted flex flex-col gap-3 rounded-3xl p-4 sm:p-5">
              <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight sm:text-2xl">
                {doc.title}
              </h1>
              {doc.description && (
                <p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
                  {doc.description}
                </p>
              )}
            </div>
            {(type === "components" || type === "animations") && (
              <ComponentsFilter />
            )}
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <MDX
              components={{
                ...mdxComponents,
                ComponentsList: (props: { category?: string }) => (
                  <ComponentsList
                    items={itemsData}
                    type={type === "components" ? "component" : "animation"}
                    {...props}
                  />
                ),
              }}
            />
          </div>
        </div>
        <div
          className={`mx-auto hidden h-16 w-full items-center gap-2 px-4 sm:flex md:px-0 ${hasToc ? "max-w-2xl" : "max-w-6xl"}`}
        >
          {neighbours.previous && (
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              asChild
            >
              <Link href={neighbours.previous.url}>
                <IconArrowLeft /> {neighbours.previous.name}
              </Link>
            </Button>
          )}
          {neighbours.next && (
            <Button
              variant="outline"
              size="sm"
              className="ml-auto rounded-full"
              asChild
            >
              <Link href={neighbours.next.url}>
                {neighbours.next.name} <IconArrowRight />
              </Link>
            </Button>
          )}
        </div>
      </div>
      {hasToc && (
        <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[calc(100svh-var(--footer-height)+2rem)] w-72 flex-col gap-4 pb-8 xl:flex">
          <div className="h-(--top-spacing) shrink-0" />
          {enhancedToc?.length ? (
            <div className="no-scrollbar overflow-y-auto px-8">
              <DocsTableOfContents toc={enhancedToc} />
              <div className="h-12" />
            </div>
          ) : null}
          <div className="flex flex-1 flex-col gap-12 px-6">
            <OpenInV0Cta />
          </div>
        </div>
      )}
    </div>
  )
}
