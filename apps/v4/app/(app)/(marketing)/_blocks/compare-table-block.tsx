"use client"

import { ArrowRight } from "@/lib/icons"
import React from "react"

import { cn } from "@/lib/utils"

import { Button } from "@/registry/new-york-v4/ui/button"

export interface CompareRowValue {
  value: string
  unit?: string
  desc: string
}

export interface CompareRow {
  title: string
  optionA: CompareRowValue
  optionB: CompareRowValue
}

export interface CompareTableBlockProps {
  headline?: string
  optionALabel?: string
  optionBLabel?: string
  rows?: CompareRow[]
  footnotes?: string[]
  ctaLabel?: string
  ctaHref?: string
  className?: string
}

const defaultHeadline = "Compare Cloud vs On-site Infrastructure"
const defaultOptionALabel = "Traditional"
const defaultOptionBLabel = "Cloud-Native"

const defaultRows: CompareRow[] = [
  {
    title: "Server Requirements",
    optionA: {
      value: "2500",
      unit: "GB",
      desc: "High-performance dedicated servers",
    },
    optionB: {
      value: "250",
      unit: "GB",
      desc: "Cloud-optimized infrastructure",
    },
  },
  {
    title: "Team Size (~)",
    optionA: { value: "20", desc: "Full in-house development team" },
    optionB: { value: "5", desc: "Core team with automated workflows" },
  },
  {
    title: "Development Time",
    optionA: { value: "48", unit: "w", desc: "Traditional development cycle" },
    optionB: { value: "8", unit: "w", desc: "Rapid deployment framework" },
  },
  {
    title: "Initial Setup",
    optionA: {
      value: "$1.2",
      unit: "M",
      desc: "Enterprise infrastructure costs",
    },
    optionB: { value: "$40", unit: "k*", desc: "Pay-as-you-grow model" },
  },
  {
    title: "ROI Timeline",
    optionA: { value: "4", unit: "y", desc: "Standard enterprise timeline" },
    optionB: { value: "8", unit: "m", desc: "Accelerated market entry" },
  },
]

const defaultFootnotes = [
  "* Varies based on specific requirements and complexity",
  "^ Deployment time may vary depending on integration requirements",
  "# Additional costs may apply for premium features",
]

const defaultCtaLabel = "Get Started"

export function CompareTableBlock({
  headline = defaultHeadline,
  optionALabel = defaultOptionALabel,
  optionBLabel = defaultOptionBLabel,
  rows = defaultRows,
  footnotes = defaultFootnotes,
  ctaLabel = defaultCtaLabel,
  ctaHref,
  className,
}: CompareTableBlockProps) {
  return (
    <section className={cn("bg-muted/30 py-32", className)}>
      <div className="container grid grid-cols-4 gap-x-4 gap-y-8 md:grid-cols-8 lg:grid-cols-12">
        {/* Header */}
        <div className="col-span-4 mb-8 max-w-3xl md:col-span-8 md:mb-12 lg:col-span-10 lg:col-start-2 lg:mb-16">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-left md:text-4xl lg:text-6xl">
            {headline}
          </h2>
        </div>

        {/* Column Headers */}
        <div className="col-span-4 px-4 md:col-span-8 lg:col-span-10 lg:col-start-2">
          <div className="grid grid-cols-4 items-center gap-4 md:grid-cols-8">
            <div className="col-span-4 md:col-span-2"></div>
            <div className="col-span-2 ml-0 md:col-span-3 md:ml-32 lg:ml-40 xl:ml-48 2xl:ml-56">
              <h4 className="text-muted-foreground text-xs font-bold uppercase tracking-wider md:text-sm">
                {optionALabel}
              </h4>
            </div>
            <div className="col-span-2 ml-0 md:col-span-3 md:ml-32 lg:ml-40 xl:ml-48 2xl:ml-56">
              <h4 className="text-xs font-bold uppercase tracking-wider md:text-sm">
                {optionBLabel}
              </h4>
            </div>
          </div>
        </div>

        {/* Comparison rows wrapper */}
        <div className="bg-background col-span-4 rounded-xl shadow-sm md:col-span-8 lg:col-span-10 lg:col-start-2">
          {rows.map((row, index) => (
            <div
              key={index}
              className="hover:bg-muted/50 group border-t px-4 transition-colors first:rounded-t-xl first:border-t-0 last:rounded-b-xl"
            >
              <div className="grid grid-cols-4 items-start gap-4 py-6 md:grid-cols-8 md:py-8">
                <h3 className="col-span-4 mt-2 text-base font-bold md:col-span-2 md:text-lg">
                  {row.title}
                </h3>

                {/* Option A Stat */}
                <div className="col-span-2 flex flex-col md:col-span-3">
                  <div className="group-hover:text-foreground ml-0 transition-colors md:ml-32 lg:ml-40 xl:ml-48 2xl:ml-56">
                    <p className="text-foreground mb-1 flex items-baseline text-2xl font-bold md:mb-2 md:text-5xl">
                      {row.optionA.value}
                      {row.optionA.unit && (
                        <sup className="text-foreground ml-0.5 text-xs md:text-sm">
                          {row.optionA.unit}
                        </sup>
                      )}
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight md:text-sm md:leading-normal">
                      {row.optionA.desc}
                    </p>
                  </div>
                </div>

                {/* Option B Stat */}
                <div className="col-span-2 flex flex-col md:col-span-3">
                  <div className="group-hover:text-accent-foreground ml-0 transition-colors md:ml-32 lg:ml-40 xl:ml-48 2xl:ml-56">
                    <p className="text-foreground mb-1 flex items-baseline text-2xl font-bold md:mb-2 md:text-5xl">
                      {row.optionB.value}
                      {row.optionB.unit && (
                        <sup className="text-foreground ml-0.5 text-xs md:text-sm">
                          {row.optionB.unit}
                        </sup>
                      )}
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight md:text-sm md:leading-normal">
                      {row.optionB.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2">
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              {footnotes.map((note, index) => (
                <p key={index} className="text-muted-foreground text-xs md:text-sm">
                  {note}
                </p>
              ))}
            </div>
            <div className="flex justify-end">
              <Button
                className="rounded-full px-8 transition-transform hover:scale-105"
                asChild={!!ctaHref}
              >
                {ctaHref ? (
                  <a href={ctaHref}>
                    {ctaLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                ) : (
                  <>
                    {ctaLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
