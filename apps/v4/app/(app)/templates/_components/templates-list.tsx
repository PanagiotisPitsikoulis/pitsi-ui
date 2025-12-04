"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/registry/new-york-v4/ui/badge"

type TemplateCategory =
  | "landing"
  | "dashboard"
  | "ecommerce"
  | "portfolio"
  | "saas"
  | "blog"

interface Template {
  slug: string
  title: string
  description: string
  category: TemplateCategory
  image: string
  features: string[]
  demoUrl?: string
  isPremium?: boolean
}

interface TemplatesListProps {
  templates: Template[]
  categories: TemplateCategory[]
  categoryLabels: Record<TemplateCategory, string>
}

export function TemplatesList({
  templates,
  categories,
  categoryLabels,
}: TemplatesListProps) {
  const [activeCategory, setActiveCategory] = useState<
    TemplateCategory | "all"
  >("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      activeCategory === "all" || template.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
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
            className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-border bg-background placeholder:text-muted-foreground focus:ring-brand h-10 w-full rounded-lg border pl-10 pr-4 text-sm outline-none focus:ring-2"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
      </div>

      {/* Templates grid */}
      <div className="space-y-8">
        {filteredTemplates.length === 0 ? (
          <p className="text-muted-foreground">No templates found.</p>
        ) : (
          filteredTemplates.map((template) => (
            <article
              key={template.slug}
              className="group relative overflow-hidden rounded-2xl border"
            >
              <Link href={`/templates/${template.slug}`} className="block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {categoryLabels[template.category]}
                      </Badge>
                      {template.isPremium && (
                        <Badge
                          variant="outline"
                          className="border-yellow-500/50 bg-yellow-500/10 text-xs text-yellow-400"
                        >
                          Premium
                        </Badge>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                      {template.title}
                    </h2>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground mb-4 text-sm">
                    {template.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {template.features.slice(0, 4).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {template.features.length > 4 && (
                      <span className="text-muted-foreground text-xs">
                        +{template.features.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </>
  )
}
