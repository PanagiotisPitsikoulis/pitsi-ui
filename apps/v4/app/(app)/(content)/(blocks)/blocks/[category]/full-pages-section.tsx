"use client"

import Image from "next/image"
import Link from "next/link"

import type { RegistryTemplateMetadata } from "@/lib/blocks"
import { ChevronDown } from "@/lib/icons"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"

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
      <div className="bg-muted rounded-xl p-6">
        <Collapsible className="group/collapsible">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm font-medium">
              Full Pages
            </h2>
            <CollapsibleTrigger className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm transition-colors">
              <span className="group-data-[state=open]/collapsible:hidden">
                View all
              </span>
              <span className="group-data-[state=closed]/collapsible:hidden">
                Collapse
              </span>
              <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
          </div>

          {/* Collapsed: Horizontal scroll */}
          <div className="relative -mx-4 px-4 group-data-[state=open]/collapsible:hidden">
            <div className="no-scrollbar flex gap-8 overflow-x-auto pb-2">
              {templates.map((template) => (
                <TemplateCard
                  key={template.slug}
                  template={template}
                  styleName={styleName}
                  compact
                />
              ))}
            </div>
          </div>

          {/* Expanded: Grid */}
          <CollapsibleContent>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <TemplateCard
                  key={template.slug}
                  template={template}
                  styleName={styleName}
                />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}

function TemplateCard({
  template,
  styleName,
  compact = false,
}: {
  template: RegistryTemplateMetadata
  styleName: string
  compact?: boolean
}) {
  return (
    <Link
      href={`/template/${template.slug}`}
      className={`group/card relative flex scroll-mt-20 flex-col gap-4 ${
        compact ? "w-[280px] shrink-0" : ""
      }`}
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
                  sizes={
                    compact
                      ? "280px"
                      : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  }
                  priority={false}
                />
                <Image
                  src={`/r/styles/${styleName}/${template.heroBlock}-dark.webp`}
                  alt={`${template.name} preview`}
                  fill
                  className="hidden object-cover object-top dark:block"
                  sizes={
                    compact
                      ? "280px"
                      : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  }
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
