"use client"

import { ReactNode } from "react"
import { LucideIcon } from "@/lib/icons"

import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export interface WorkflowStep {
  number: string
  icon: LucideIcon
  title: string
  description: string
  visual?: ReactNode
}

export interface WorkflowStepsBlockProps {
  tagline: string
  headline: ReactNode
  description?: string
  steps: WorkflowStep[]
  className?: string
}

export function WorkflowStepsBlock({
  tagline,
  headline,
  description,
  steps,
  className,
}: WorkflowStepsBlockProps) {
  return (
    <div
      id="workflow"
      className={`container flex flex-col items-center justify-center px-6 py-16 text-center md:py-24 ${className ?? ""}`}
    >
      <p className="text-brand text-sm font-medium tracking-widest uppercase">
        {tagline}
      </p>
      <Spacer size="md" sizeMobile="sm" />
      <h2 className="display text-muted-foreground max-w-4xl text-4xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
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

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Step Number */}
              <div className="text-brand/20 mb-4 text-6xl font-bold">
                {step.number}
              </div>

              {/* Icon */}
              <div className="bg-brand/10 text-brand mb-4 flex size-12 items-center justify-center rounded-xl">
                <Icon className="size-6" />
              </div>

              {/* Title */}
              <h3 className="text-foreground text-xl font-medium">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mt-2 text-sm">
                {step.description}
              </p>

              {/* Optional Visual */}
              {step.visual && (
                <div className="mt-6 w-full">{step.visual}</div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
