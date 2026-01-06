"use client"

import { ReactNode } from "react"

import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export interface FeatureCardItem {
  type: "card"
  icon: ReactNode
  title: string
  description: string
}

export interface FeatureIconItem {
  type: "icon"
  icon: ReactNode
}

export type FeatureItem = FeatureCardItem | FeatureIconItem

export interface FeatureGridBlockProps {
  tagline: string
  headline: ReactNode
  description?: string
  features: FeatureItem[]
  centerContent?: ReactNode
  className?: string
}

export function FeatureGridBlock({
  tagline,
  headline,
  description,
  features,
  centerContent,
  className,
}: FeatureGridBlockProps) {
  // Split features for left/right columns if centerContent is provided
  const hasCenter = !!centerContent
  const leftFeatures = hasCenter
    ? features.slice(0, Math.ceil(features.length / 2))
    : features
  const rightFeatures = hasCenter
    ? features.slice(Math.ceil(features.length / 2))
    : []

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
      {description && (
        <>
          <Spacer size="lg" sizeMobile="md" />
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
            {description}
          </p>
        </>
      )}
      <Spacer size="4xl" sizeMobile="3xl" />

      {hasCenter ? (
        <div className="grid w-full grid-cols-6 gap-6">
          {/* Left column */}
          <div className="col-span-6 flex flex-col gap-6 lg:col-span-2">
            {leftFeatures.map((feature, index) =>
              renderFeatureItem(feature, index)
            )}
          </div>

          {/* Center content */}
          <div className="col-span-6 hidden lg:col-span-2 lg:block">
            {centerContent}
          </div>

          {/* Right column */}
          <div className="col-span-6 flex flex-col gap-6 lg:col-span-2">
            {rightFeatures.map((feature, index) =>
              renderFeatureItem(feature, index + leftFeatures.length)
            )}
          </div>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => renderFeatureItem(feature, index))}
        </div>
      )}
    </div>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardItem) {
  return (
    <div className="group border-border bg-background relative z-10 flex h-[16rem] flex-col overflow-hidden rounded-4xl border shadow-sm md:h-[18rem]">
      <div className="flex flex-1 items-center justify-center overflow-hidden p-6">
        <div className="text-brand size-16 md:size-20">{icon}</div>
      </div>
      <div className="bg-background/50 border-t px-6 py-4 backdrop-blur-sm">
        <p className="text-base font-medium">{title}</p>
        <p className="text-muted-foreground mt-1 text-sm">{description}</p>
      </div>
    </div>
  )
}

function IconOnly({ icon }: FeatureIconItem) {
  return (
    <div className="relative z-10 hidden h-[16rem] items-center justify-center md:h-[18rem] lg:flex">
      <div className="text-brand size-28 md:size-36">{icon}</div>
    </div>
  )
}

function renderFeatureItem(item: FeatureItem, index: number) {
  if (item.type === "icon") {
    return <IconOnly key={`icon-${index}`} {...item} />
  }
  return <FeatureCard key={`card-${index}`} {...item} />
}
