import { notFound } from "next/navigation"
import { cacheLife } from "next/cache"
import { mdxComponents } from "@/mdx-components"
import fm from "front-matter"
import { findNeighbour } from "fumadocs-core/page-tree"
import z from "zod"

import {
  generateDocsMetadata,
  generateDocsStaticParams,
} from "@/lib/pages/docs"
import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { DocsPageContent } from "@/components/documentation/docs/docs-page-content"

export function generateStaticParams() {
  return generateDocsStaticParams()
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}) {
  const params = await props.params
  return generateDocsMetadata({ slug: params.slug })
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

  const toc = doc.toc || []

  return (
    <DocsPageContent
      title={doc.title}
      description={doc.description}
      links={links}
      toc={toc}
      rawContent={raw}
      pageUrl={absoluteUrl(page.url)}
      neighbours={neighbours}
    >
      <MDX components={mdxComponents} />
    </DocsPageContent>
  )
}
