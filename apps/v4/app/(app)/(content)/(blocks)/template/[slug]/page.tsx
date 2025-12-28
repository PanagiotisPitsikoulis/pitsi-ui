import { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getTemplateMetadata,
  TEMPLATE_SLUGS,
} from "../../template-config"

import { TemplateViewerClient } from "./page.client"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const template = getTemplateMetadata(slug)

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
  return TEMPLATE_SLUGS.map((slug) => ({ slug }))
}

export default async function TemplateViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const template = getTemplateMetadata(slug)

  if (!template) {
    notFound()
  }

  return (
    <TemplateViewerClient
      slug={slug}
      template={{ name: template.name, description: template.description }}
    />
  )
}
