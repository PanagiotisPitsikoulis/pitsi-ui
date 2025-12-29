import Link from "next/link"
import { notFound } from "next/navigation"
import { mdxComponents } from "@/mdx-components"
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react"
import fm from "front-matter"
import { findNeighbour } from "fumadocs-core/page-tree"
import z from "zod"

import { type DocsItemType } from "@/lib/pages/docs"
import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { DevPillMenu } from "@/components/documentation/docs/dev-pill-menu"
import { DocsCopyPage } from "@/components/documentation/docs/docs-copy-page"
import { DocsTableOfContents } from "@/components/documentation/docs/docs-toc"
import { OpenInV0Cta } from "@/components/documentation/integrations/open-in-v0-cta"
import { Button } from "@/registry/new-york-v4/ui/button"

function SafeMDX({
  MDX,
  components,
}: {
  MDX: React.ComponentType<{ components: typeof mdxComponents }> | null
  components: typeof mdxComponents
}) {
  if (!MDX) {
    return null
  }
  return (
    <ErrorBoundary>
      <MDX components={components} />
    </ErrorBoundary>
  )
}

export async function DocsItemContent({
  itemName,
  type,
}: {
  itemName: string
  type: DocsItemType
}) {
  const page = source.getPage([type, itemName])

  if (!page) {
    notFound()
  }

  const doc = page?.data
  if (!doc) {
    notFound()
  }

  const MDX = doc.body ?? null
  const neighbours = findNeighbour(source.pageTree, page.url) ?? {
    previous: null,
    next: null,
  }

  // Safely get raw text for front-matter parsing
  let raw = ""
  let links: { doc?: string; api?: string } | undefined
  try {
    raw = (await page.data.getText?.("raw")) ?? ""
    if (raw) {
      const { attributes } = fm(raw)
      const parsed = z
        .object({
          links: z
            .object({
              doc: z.string().optional(),
              api: z.string().optional(),
            })
            .optional(),
        })
        .safeParse(attributes)
      links = parsed.success ? parsed.data.links : undefined
    }
  } catch (error) {
    console.warn(`Failed to parse front-matter for ${itemName}:`, error)
  }

  const enhancedToc = doc.toc ?? []
  const hasToc = enhancedToc.length > 0

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
                {neighbours.previous?.url && (
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
                {neighbours.next?.url && (
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
                {doc.title ?? itemName}
              </h1>
              {(doc.description || links) && (
                <p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
                  {doc.description}
                  {links && (doc.description ? " " : "")}
                  {links?.doc && (
                    <a
                      href={links.doc}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-foreground inline-flex items-center gap-0.5 underline underline-offset-4"
                    >
                      Docs
                      <IconArrowUpRight className="size-3.5" />
                    </a>
                  )}
                  {links?.doc && links?.api && " "}
                  {links?.api && (
                    <a
                      href={links.api}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-foreground inline-flex items-center gap-0.5 underline underline-offset-4"
                    >
                      API Reference
                      <IconArrowUpRight className="size-3.5" />
                    </a>
                  )}
                </p>
              )}
            </div>
            <DevPillMenu
              itemName={itemName}
              type={type === "components" ? "components" : "animations"}
            />
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <SafeMDX MDX={MDX} components={mdxComponents} />
          </div>
        </div>
        <div
          className={`mx-auto hidden h-16 w-full items-center gap-2 px-4 sm:flex md:px-0 ${hasToc ? "max-w-2xl" : "max-w-6xl"}`}
        >
          {neighbours.previous?.url && (
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <Link href={neighbours.previous.url}>
                <IconArrowLeft /> {neighbours.previous.name ?? "Previous"}
              </Link>
            </Button>
          )}
          {neighbours.next?.url && (
            <Button variant="outline" size="sm" className="ml-auto rounded-full" asChild>
              <Link href={neighbours.next.url}>
                {neighbours.next.name ?? "Next"} <IconArrowRight />
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
