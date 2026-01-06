"use client"

import React from "react"

import { cn } from "@/lib/utils"

export interface FeatureValueItem {
  title: string
  description: string
}

export interface FeatureValuesBlockProps {
  tagline?: string
  headline?: string
  headlineAccent?: string
  values?: FeatureValueItem[]
  className?: string
}

const defaultTagline = "Export Anywhere"
const defaultHeadline = "One Design"
const defaultHeadlineAccent = "All Platforms"
const defaultValues: FeatureValueItem[] = [
  {
    title: "CSS Variables",
    description:
      "Standard CSS custom properties. Works everywhere, no build step required.",
  },
  {
    title: "Tailwind v4",
    description: "Native Tailwind CSS v4 format. Drop into your config and go.",
  },
  {
    title: "Figma Variables",
    description:
      "Copy directly to Figma. Maintain design-dev parity effortlessly.",
  },
  {
    title: "JSON Schema",
    description:
      "Structured data for any tooling. Build your own integrations.",
  },
]

export function FeatureValuesBlock({
  tagline = defaultTagline,
  headline = defaultHeadline,
  headlineAccent = defaultHeadlineAccent,
  values = defaultValues,
  className,
}: FeatureValuesBlockProps) {
  return (
    <section className={cn(className)}>
      <div className="container px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="row-span-2">
            <p className="text-brand text-sm font-medium tracking-widest uppercase">
              {tagline}
            </p>
            <h2 className="display mt-6 text-4xl tracking-tight md:text-5xl lg:text-6xl">
              {headline}
              <br />
              <span className="text-foreground">{headlineAccent}</span>
            </h2>
          </div>
          {values.map((value, index) => (
            <div key={index}>
              <h3 className="mb-2 text-lg font-medium md:text-xl">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
