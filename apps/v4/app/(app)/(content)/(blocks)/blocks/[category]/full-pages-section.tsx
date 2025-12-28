"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronDown } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"
import type { TemplateMetadata } from "@/app/(app)/(content)/(blocks)/template-config"

interface FullPagesSectionProps {
  templates: TemplateMetadata[]
  styleName: string
}

export function FullPagesSection({ templates, styleName }: FullPagesSectionProps) {
  return (
    <div className="container">
      <div className="bg-muted rounded-xl p-6">
        <Collapsible className="group/collapsible">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-muted-foreground text-sm font-medium">
              Full Pages
            </h2>
            <CollapsibleTrigger className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm transition-colors">
              <span className="group-data-[state=open]/collapsible:hidden">View all</span>
              <span className="group-data-[state=closed]/collapsible:hidden">Collapse</span>
              <ChevronDown className="size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
          </div>

          {/* Collapsed: Horizontal scroll */}
          <div className="group-data-[state=open]/collapsible:hidden relative -mx-4 px-4">
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
  template: TemplateMetadata
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
      <div className="overflow-hidden rounded-2xl shadow-sm dark:border dark:border-border">
        <div className="bg-background relative">
          <div data-slot="preview" className="overflow-hidden">
            <div
              data-align="center"
              className="preview relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden"
            >
              <div className="relative h-full w-full overflow-hidden bg-page">
                <Image
                  src={`/r/styles/${styleName}/${template.heroBlock}-light.webp`}
                  alt={`${template.name} preview`}
                  fill
                  className="object-cover object-top dark:hidden"
                  sizes={compact ? "280px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                  priority={false}
                />
                <Image
                  src={`/r/styles/${styleName}/${template.heroBlock}-dark.webp`}
                  alt={`${template.name} preview`}
                  fill
                  className="hidden object-cover object-top dark:block"
                  sizes={compact ? "280px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-2">
        <div className="flex items-center justify-between gap-2">
          <span className="group-hover/card:text-primary text-base font-medium transition-colors group-hover/card:underline">
            {template.name}
          </span>
          <ArrowUpRight className="text-muted-foreground group-hover/card:text-foreground size-4 shrink-0 transition-colors" />
        </div>
        <p className="text-muted-foreground group-hover/card:text-foreground/70 line-clamp-2 min-h-[2.5rem] max-w-6/7 text-sm transition-colors">
          {template.description || "A complete page template."}
        </p>
      </div>
    </Link>
  )
}
