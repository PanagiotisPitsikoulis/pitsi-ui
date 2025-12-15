"use client"

import { ReactNode } from "react"

import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export interface BentoCardItem {
  type: "card"
  title: string
  description: string
  illustration: ReactNode
}

export interface BentoIconItem {
  type: "icon"
  icon: ReactNode
}

export type BentoItem = BentoCardItem | BentoIconItem

export interface BentoFeaturesBlockProps {
  tagline: string
  headline: ReactNode
  items: BentoItem[]
  className?: string
}

export function BentoFeaturesBlock({
  tagline,
  headline,
  items,
  className,
}: BentoFeaturesBlockProps) {
  return (
    <div
      id="features"
      className={`container flex flex-col items-center justify-center px-6 py-16 text-center md:py-24 ${className ?? ""}`}
    >
      <p className="text-brand text-sm font-medium tracking-widest uppercase">
        {tagline}
      </p>
      <Spacer size="md" sizeMobile="sm" />
      <h2 className="display max-w-4xl text-4xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
        {headline}
      </h2>
      <Spacer size="4xl" sizeMobile="3xl" />

      {/* Artistic Bento Grid - 3 columns with strategic gaps */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {items.map((item, index) => {
          if (item.type === "icon") {
            return (
              <div
                key={`icon-${index}`}
                className="hidden items-center justify-center md:flex"
              >
                <div className="text-brand size-36">{item.icon}</div>
              </div>
            )
          }

          return (
            <div key={item.title} className="flex flex-col gap-4">
              {/* Illustration Card */}
              <div className="border-border bg-background dark:bg-page group relative h-72 overflow-hidden rounded-3xl border shadow-sm">
                <div className="relative h-full w-full p-4">
                  {item.illustration}
                </div>
              </div>
              {/* Description Card */}
              <div className="border-border bg-background dark:bg-page flex flex-col gap-2 rounded-3xl border p-6 text-left shadow-sm">
                <h3 className="text-lg font-medium capitalize">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
