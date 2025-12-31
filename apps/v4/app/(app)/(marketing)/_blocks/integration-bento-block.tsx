"use client"

import { ReactNode } from "react"
import { LucideIcon } from "@/lib/icons"

import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export interface IntegrationItem {
  icon: LucideIcon
  title: string
  description: string
  size: "small" | "large"
  visual?: ReactNode
}

export interface TechStackItem {
  name: string
  icon?: ReactNode
}

export interface IntegrationBentoBlockProps {
  tagline: string
  headline: ReactNode
  description: string
  integrations: IntegrationItem[]
  techStack?: TechStackItem[]
  className?: string
}

export function IntegrationBentoBlock({
  tagline,
  headline,
  description,
  integrations,
  techStack,
  className,
}: IntegrationBentoBlockProps) {
  return (
    <div
      id="integrations"
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

      {/* Bento Grid */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {integrations.map((item, index) => {
          const Icon = item.icon
          const isLarge = item.size === "large"

          return (
            <div
              key={index}
              className={`border-border bg-card flex flex-col rounded-2xl border p-6 text-left ${
                isLarge ? "lg:col-span-2" : ""
              }`}
            >
              <div className="bg-brand/10 text-brand mb-4 flex size-10 items-center justify-center rounded-lg">
                <Icon className="size-5" />
              </div>
              <h3 className="text-foreground text-lg font-medium">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                {item.description}
              </p>
              {item.visual && <div className="mt-auto pt-4">{item.visual}</div>}
            </div>
          )
        })}
      </div>

      {/* Tech Stack */}
      {techStack && techStack.length > 0 && (
        <>
          <Spacer size="3xl" sizeMobile="2xl" />
          <div className="flex flex-wrap items-center justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-muted text-muted-foreground flex items-center gap-2 rounded-full px-4 py-2 text-sm"
              >
                {tech.icon}
                {tech.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
