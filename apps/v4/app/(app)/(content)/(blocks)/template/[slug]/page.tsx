import { Metadata } from "next"
import { notFound } from "next/navigation"

import { TemplateViewerClient } from "./page.client"

// Template metadata
const templatesMeta: Record<
  string,
  { name: string; description: string }
> = {
  "service-plants": {
    name: "Service Plants",
    description: "A modern template for plant care services and nurseries",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const template = templatesMeta[slug]

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
  return Object.keys(templatesMeta).map((slug) => ({ slug }))
}

export default async function TemplateViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const template = templatesMeta[slug]

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
