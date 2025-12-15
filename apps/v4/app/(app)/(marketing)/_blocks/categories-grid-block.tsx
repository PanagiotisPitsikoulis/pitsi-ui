"use client"

import Link from "next/link"
import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export interface CategoryItem {
  id: string
  name: string
  description: string
  count: string
  icon: LucideIcon
  href: string
  previewBlock?: string
  color?: string
}

export interface CategoriesGridBlockProps {
  tagline: string
  headline: ReactNode
  description: string
  categories: CategoryItem[]
  viewAllLink?: {
    label: string
    href: string
  }
  className?: string
}

export function CategoriesGridBlock({
  tagline,
  headline,
  description,
  categories,
  viewAllLink,
  className,
}: CategoriesGridBlockProps) {
  return (
    <div
      id="categories"
      className={`container flex flex-col items-center justify-center px-6 py-16 text-center md:py-24 ${className ?? ""}`}
    >
      <p className="text-brand text-sm font-medium tracking-widest uppercase">
        {tagline}
      </p>
      <Spacer size="md" sizeMobile="sm" />
      <h2 className="display text-muted-foreground max-w-4xl text-4xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
        {headline}
      </h2>
      <Spacer size="lg" sizeMobile="md" />
      <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
        {description}
      </p>
      <Spacer size="4xl" sizeMobile="3xl" />

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Link
              key={category.id}
              href={category.href}
              className="border-border bg-card hover:border-brand/50 group relative flex flex-col overflow-hidden rounded-2xl border p-6 text-left transition-colors"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex size-12 items-center justify-center rounded-xl ${category.color ?? "bg-brand/10 text-brand"}`}
                >
                  <Icon className="size-6" />
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  {category.count}
                </span>
              </div>
              <Spacer size="md" sizeMobile="sm" />
              <h3 className="text-foreground text-lg font-medium">
                {category.name}
              </h3>
              <p className="text-muted-foreground mt-1 text-sm">
                {category.description}
              </p>
            </Link>
          )
        })}
      </div>

      {viewAllLink && (
        <>
          <Spacer size="2xl" sizeMobile="xl" />
          <Button asChild variant="outline" className="rounded-full">
            <Link href={viewAllLink.href}>{viewAllLink.label}</Link>
          </Button>
        </>
      )}
    </div>
  )
}
