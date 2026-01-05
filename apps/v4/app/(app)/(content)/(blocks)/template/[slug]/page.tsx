import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getActiveStyle } from "@/registry/styles"
import blocksData from "@/registry/__blocks__.json"
import {
  COMPUTED_TEMPLATES,
  type ComputedTemplateBlock,
} from "@/registry/__blocks-metadata__"

import {
  getTemplateMetadata,
  getApplicationTemplateConfig,
  ALL_TEMPLATE_SLUGS,
} from "../../blocks.server"

import { TemplateViewerClient } from "./page.client"
import { ApplicationTemplateViewerClient } from "./page.application.client"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  // Check service templates first, then application templates
  const serviceTemplate = getTemplateMetadata(slug)
  const appTemplate = getApplicationTemplateConfig(slug)
  const template = serviceTemplate || appTemplate?.metadata

  if (!template) {
    return { title: "Template Not Found - Pitsi UI" }
  }

  const title = `${template.name} Template - Pitsi UI`
  const description = template.description

  return {
    title,
    description,
    openGraph: {
      images: [{ url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}` }],
    },
    twitter: {
      card: "summary_large_image",
      images: [{ url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}` }],
    },
  }
}

export function generateStaticParams() {
  return ALL_TEMPLATE_SLUGS.map((slug) => ({ slug }))
}

export default async function TemplateViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const activeStyle = await getActiveStyle()

  // Check if it's an application template
  const appTemplate = getApplicationTemplateConfig(slug)
  if (appTemplate) {
    return (
      <ApplicationTemplateViewerClient
        slug={slug}
        styleName={activeStyle.name}
        template={{ name: appTemplate.metadata.name, description: appTemplate.metadata.description }}
        templateBlocks={appTemplate.views}
        shell={appTemplate.shell}
        blocksMetadata={blocksData}
      />
    )
  }

  // Otherwise, it's a service template from computed templates
  const computedTemplate = COMPUTED_TEMPLATES[slug]

  if (!computedTemplate) {
    notFound()
  }

  return (
    <TemplateViewerClient
      slug={slug}
      styleName={activeStyle.name}
      template={{ name: computedTemplate.name, description: computedTemplate.description }}
      templateBlocks={computedTemplate.blocks}
      blocksMetadata={blocksData}
    />
  )
}
