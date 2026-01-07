"use client"

import Image from "next/image"
import Link from "next/link"

import type { RegistryTemplateMetadata } from "@/lib/blocks"
import { CollapsibleGallery } from "@/registry/new-york-v4/ui/collapsible-gallery"

interface FullPagesSectionProps {
  templates: RegistryTemplateMetadata[]
  styleName: string
}

export function FullPagesSection({
  templates,
  styleName,
}: FullPagesSectionProps) {
  return (
    <div className="container">
      <CollapsibleGallery
        title="Full Pages"
        items={templates}
        renderItem={(template) => (
          <TemplateCard template={template} styleName={styleName} />
        )}
        keyExtractor={(template) => template.slug}
        itemWidth={280}
        gridCols={{ default: 1, md: 2, lg: 3 }}
      />
    </div>
  )
}

function TemplateCard({
  template,
  styleName,
}: {
  template: RegistryTemplateMetadata
  styleName: string
}) {
  return (
    <Link
      href={`/template/${template.slug}`}
      className="group/card relative flex scroll-mt-20 flex-col gap-4"
    >
      <div className="dark:border-border overflow-hidden rounded-2xl shadow-sm dark:border">
        <div className="bg-background relative">
          <div data-slot="preview" className="overflow-hidden">
            <div
              data-align="center"
              className="preview relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden"
            >
              <div className="bg-page relative h-full w-full overflow-hidden">
                <Image
                  src={`/r/styles/${styleName}/${template.heroBlock}-light.webp`}
                  alt={`${template.name} preview`}
                  fill
                  className="object-cover object-top dark:hidden"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
                <Image
                  src={`/r/styles/${styleName}/${template.heroBlock}-dark.webp`}
                  alt={`${template.name} preview`}
                  fill
                  className="hidden object-cover object-top dark:block"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-0.5 px-2">
        <span className="group-hover/card:text-primary text-base font-medium transition-colors group-hover/card:underline">
          {template.name}
        </span>
        {template.description && (
          <p className="text-muted-foreground line-clamp-1 text-sm">
            {template.description}
          </p>
        )}
      </div>
    </Link>
  )
}
