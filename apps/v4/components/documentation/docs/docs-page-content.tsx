import type { ReactNode } from "react"
import Link from "next/link"
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react"

import { DocsCopyPage } from "@/components/documentation/docs/docs-copy-page"
import { DocsTableOfContents } from "@/components/documentation/docs/docs-toc"
import { OpenInV0Cta } from "@/components/documentation/integrations/open-in-v0-cta"
import { Button } from "@/registry/new-york-v4/ui/button"

type TocItem = {
  title?: ReactNode
  url: string
  depth: number
}

interface DocsPageContentProps {
  title: string
  description?: string
  links?: {
    doc?: string
    api?: string
  }
  toc: TocItem[]
  rawContent: string
  pageUrl: string
  neighbours: {
    previous?: { url: string; name: ReactNode }
    next?: { url: string; name: ReactNode }
  }
  children: ReactNode
}

export function DocsPageContent({
  title,
  description,
  links,
  toc,
  rawContent,
  pageUrl,
  neighbours,
  children,
}: DocsPageContentProps) {
  const hasToc = toc?.length > 0

  return (
    <div className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div
          className={`mx-auto flex w-full min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300 ${hasToc ? "max-w-2xl" : "max-w-6xl"}`}
        >
          <div className="rounded-3xl bg-muted p-4 sm:p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4">
                <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight sm:text-2xl">
                  {title}
                </h1>
                <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-0 sm:backdrop-blur-none">
                  <DocsCopyPage page={rawContent} url={pageUrl} />
                  <div className="ml-auto flex items-center gap-1">
                    {neighbours.previous && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="extend-touch-target size-8 md:size-7"
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
              </div>
              {(description || links) && (
                <p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
                  {description}
                  {links && (description ? " " : "")}
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
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            {children}
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
          {toc?.length ? (
            <div className="no-scrollbar overflow-y-auto px-8">
              <DocsTableOfContents toc={toc} />
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
