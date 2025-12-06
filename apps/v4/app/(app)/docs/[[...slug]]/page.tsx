import { Suspense } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cacheLife } from "next/cache"
import { mdxComponents } from "@/mdx-components"
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react"
import fm from "front-matter"
import { findNeighbour } from "fumadocs-core/page-tree"
import z from "zod"

import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { getCurrentUser } from "@/lib/server/user"
import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { ComponentsList } from "@/components/documentation/components/components-list"
import { DocsCopyPage } from "@/components/documentation/docs/docs-copy-page"
import { DocsPaywall } from "@/components/documentation/docs/docs-paywall"
import { DocsTableOfContents } from "@/components/documentation/docs/docs-toc"
import { OpenInV0Cta } from "@/components/documentation/integrations/open-in-v0-cta"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    notFound()
  }

  const doc = page.data

  if (!doc.title || !doc.description) {
    notFound()
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
      creator: "@pitsi",
    },
  }
}

// Component to check pro tier access at request time
async function ProTierCheck({
  itemName,
  title,
  type,
  children,
}: {
  itemName: string
  title: string
  type: "component"
  children: React.ReactNode
}) {
  const registryItem = (await queryRegistry({
    name: itemName,
  })) as RegistryItem | null

  if (registryItem?.tier === "pro") {
    const user = await getCurrentUser()
    const isPro = user?.isPro ?? false

    if (!isPro) {
      return <DocsPaywall title={title} type={type} />
    }
  }

  return <>{children}</>
}

export default async function Page(props: {
  params: Promise<{ slug: string[] }>
}) {
  "use cache"
  cacheLife("max")

  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) {
    notFound()
  }

  const doc = page.data
  const MDX = doc.body
  const neighbours = findNeighbour(source.pageTree, page.url)

  // Check if this is a component/animation page that might need tier checking
  const isComponentPage =
    params.slug?.length === 2 && params.slug[0] === "components"
  const isAnimationPage =
    params.slug?.length === 2 && params.slug[0] === "animations"
  const needsTierCheck = isComponentPage || isAnimationPage
  const itemName = needsTierCheck ? params.slug[1] : ""

  const raw = await page.data.getText("raw")
  const { attributes } = fm(raw)
  const { links } = z
    .object({
      links: z
        .object({
          doc: z.string().optional(),
          api: z.string().optional(),
        })
        .optional(),
    })
    .parse(attributes)

  // Fetch all available component data
  const componentsFolder = source.pageTree.children.find(
    (p) => p.$id === "components"
  )
  const animationsFolder = source.pageTree.children.find(
    (p) => p.$id === "animations"
  )

  // Get component categories from registry
  const registryComponents = (await queryRegistry({
    types: ["registry:ui"],
  })) as RegistryItem[]

  const componentCategoryMap = new Map<string, string[]>()
  registryComponents.forEach((comp) => {
    componentCategoryMap.set(comp.name, comp.categories || [])
  })

  const componentsData =
    componentsFolder?.type === "folder"
      ? componentsFolder.children
          .filter((c): c is Extract<typeof c, { type: "page" }> => c.type === "page" && c.url !== "/docs/components")
          .map((c) => {
            // Extract registry name from URL: /docs/components/button -> button
            const urlParts = c.url.split("/").filter(Boolean)
            const registryName = urlParts[urlParts.length - 1] || ""

            // Get categories from registry
            const categories = componentCategoryMap.get(registryName) || []

            // Get page data for description (remove 'docs' prefix)
            const slug = urlParts.slice(1) // Remove 'docs' from ['docs', 'components', 'button']
            const componentPage = source.getPage(slug)
            const description = componentPage?.data.description

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

  const animationsData =
    animationsFolder?.type === "folder"
      ? animationsFolder.children
          .filter((a): a is Extract<typeof a, { type: "page" }> => a.type === "page")
          .map((a) => {
            // Extract registry name from URL: /docs/animations/parallax-scroll -> parallax-scroll
            const urlParts = a.url.split("/").filter(Boolean)
            const registryName = urlParts[urlParts.length - 1] || ""

            // Get categories from registry
            const categories = componentCategoryMap.get(registryName) || []

            // Get page data for description (remove 'docs' prefix)
            const slug = urlParts.slice(1) // Remove 'docs' from ['docs', 'animations', 'parallax-scroll']
            const animationPage = source.getPage(slug)
            const description = animationPage?.data.description

            return {
              $id: registryName,
              url: a.url,
              name: a.name,
              registryName,
              categories,
              description,
            }
          })
      : []

  // Filter items based on current page
  const isComponentsPage = page.url.includes("/docs/components")
  const isAnimationsPage = page.url.includes("/docs/animations")

  const allComponents = isComponentsPage
    ? componentsData
    : isAnimationsPage
      ? animationsData
      : [...componentsData, ...animationsData]

  // Enhanced TOC for components/animations pages
  let enhancedToc = doc.toc || []

  if (isComponentsPage || isAnimationsPage) {
    // Group components by their primary category (first category only)
    const componentsByCategory: Record<string, typeof allComponents> = {}

    allComponents.forEach((item) => {
      // Use the first category as the primary category
      const primaryCategory =
        item.categories && item.categories.length > 0
          ? item.categories[0]
          : "uncategorized"

      if (!componentsByCategory[primaryCategory]) {
        componentsByCategory[primaryCategory] = []
      }
      componentsByCategory[primaryCategory].push(item)
    })

    // Define category order and labels for URL matching
    const CATEGORY_URLS: Record<string, string> = {
      "core-components": "#core-components",
      primitives: "#primitives",
      sectorial: "#sectorial",
      animations: "#animations",
    }

    // Build enhanced TOC by inserting component items after their category headers
    const newToc: typeof enhancedToc = []
    const mdxToc = doc.toc || []

    mdxToc.forEach((entry) => {
      // Add the MDX TOC entry (like "Overview", "Core components", etc.)
      newToc.push(entry)

      // Check if this entry is a category header that has components
      const matchingCategory = Object.keys(CATEGORY_URLS).find(
        (category) => CATEGORY_URLS[category] === entry.url
      )

      if (matchingCategory && componentsByCategory[matchingCategory]) {
        // Add all component items for this category as depth 3
        componentsByCategory[matchingCategory].forEach((item) => {
          newToc.push({
            title: typeof item.name === "string" ? item.name : item.$id,
            url: `#${item.$id}`,
            depth: 3,
          })
        })
      }
    })

    enhancedToc = newToc
  }

  // Show TOC if available
  const hasToc = enhancedToc?.length

  const content = (
    <div className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div
          className={`mx-auto flex w-full min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300 ${hasToc ? "max-w-2xl" : "max-w-6xl"}`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
                  {doc.title}
                </h1>
                <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                  <DocsCopyPage page={raw} url={absoluteUrl(page.url)} />
                  {neighbours.previous && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="extend-touch-target ml-auto size-8 md:size-7"
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
                      className="extend-touch-target size-8 md:size-7"
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
              {doc.description && (
                <p className="text-foreground text-[1.05rem] text-balance sm:text-base">
                  {doc.description}
                </p>
              )}
            </div>
            {links ? (
              <div className="flex items-center gap-2 pt-4">
                {links?.doc && (
                  <Badge asChild variant="outline" className="rounded-full">
                    <a href={links.doc} target="_blank" rel="noreferrer">
                      Docs <IconArrowUpRight />
                    </a>
                  </Badge>
                )}
                {links?.api && (
                  <Badge asChild variant="outline" className="rounded-full">
                    <a href={links.api} target="_blank" rel="noreferrer">
                      API Reference <IconArrowUpRight />
                    </a>
                  </Badge>
                )}
              </div>
            ) : null}
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <MDX
              components={{
                ...mdxComponents,
                ComponentsList: (props: any) => (
                  <ComponentsList items={allComponents} {...props} />
                ),
              }}
            />
          </div>
        </div>
        <div
          className={`mx-auto hidden h-16 w-full items-center gap-2 px-4 sm:flex md:px-0 ${hasToc ? "max-w-2xl" : "max-w-6xl"}`}
        >
          {neighbours.previous && (
            <Button variant="outline" size="sm" asChild className="shadow-none">
              <Link href={neighbours.previous.url}>
                <IconArrowLeft /> {neighbours.previous.name}
              </Link>
            </Button>
          )}
          {neighbours.next && (
            <Button variant="outline" size="sm" className="ml-auto" asChild>
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

  // Wrap in tier check if needed (for component/animation detail pages)
  if (needsTierCheck) {
    return (
      <Suspense fallback={content}>
        <ProTierCheck
          itemName={itemName}
          title={doc.title || itemName}
          type="component"
        >
          {content}
        </ProTierCheck>
      </Suspense>
    )
  }

  return content
}
