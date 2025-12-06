import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cacheLife } from "next/cache"

import {
  categoryLabels,
  getTemplate,
  getTemplates,
} from "@/lib/templates/source"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { LayoutGrid, LayoutGridItem } from "../../(root)/_components/layout-grid"
import { StripeBgGuides } from "../../(root)/_components/striped-bg-guides"

export function generateStaticParams() {
  const templates = getTemplates()
  return templates.map((template) => ({
    slug: template.slug,
  }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const params = await props.params
  const template = getTemplate(params.slug)

  if (!template) {
    return { title: "Template Not Found" }
  }

  return {
    title: template.title,
    description: template.description,
    openGraph: {
      title: template.title,
      description: template.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(template.title)}&description=${encodeURIComponent(template.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: template.title,
      description: template.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(template.title)}&description=${encodeURIComponent(template.description)}`,
        },
      ],
    },
  }
}

export default async function TemplatePage(props: {
  params: Promise<{ slug: string }>
}) {
  "use cache"
  cacheLife("max")

  const params = await props.params
  const template = getTemplate(params.slug)

  if (!template) {
    notFound()
  }

  return (
    <div className="relative -mt-[56px] min-h-screen overflow-x-clip">
      <StripeBgGuides columnCount={6} animated={false} />

      <div className="relative z-10 container px-6">
        <Spacer size="6xl" sizeMobile="4xl" />
        <LayoutGrid>
          <LayoutGridItem span={6} spanLg={2}>
            <div className="lg:sticky lg:top-24">
              <Link
                href="/templates"
                className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to templates
              </Link>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {categoryLabels[template.category]}
                </Badge>
                {template.isPremium && (
                  <Badge
                    variant="outline"
                    className="border-yellow-500/50 bg-yellow-500/10 text-xs text-yellow-600 dark:text-yellow-400"
                  >
                    Premium
                  </Badge>
                )}
              </div>
              <Spacer size="sm" sizeMobile="xs" />
              <h1 className="display text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                {template.title}
              </h1>
              <Spacer size="md" sizeMobile="sm" />
              <p className="text-muted-foreground text-base md:text-lg">
                {template.description}
              </p>
              <Spacer size="lg" sizeMobile="md" />
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
                >
                  Preview
                </Link>
                <Link
                  href="#"
                  className="border-border bg-background hover:bg-muted inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-sm font-medium transition-colors"
                >
                  Get Template
                </Link>
              </div>
            </div>
          </LayoutGridItem>

          <LayoutGridItem span={6} spanLg={3} className="lg:col-start-4">
            {/* Template Preview Image */}
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border">
              <Image
                src={template.image}
                alt={template.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Features */}
            <div className="border-brand border-l-2 pl-4">
              <h2 className="display mb-4 text-xl tracking-tight md:text-2xl">
                Features
              </h2>
              <ul className="space-y-3">
                {template.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground flex items-start gap-3 text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Spacer size="xl" sizeMobile="lg" />

            {/* Tech Stack */}
            <div className="border-brand border-l-2 pl-4">
              <h2 className="display mb-4 text-xl tracking-tight md:text-2xl">
                Built With
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "React 19",
                  "Next.js 15",
                  "Tailwind CSS v4",
                  "TypeScript",
                  "Framer Motion",
                ].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </LayoutGridItem>
        </LayoutGrid>
        <Spacer size="6xl" sizeMobile="4xl" />
      </div>
    </div>
  )
}
