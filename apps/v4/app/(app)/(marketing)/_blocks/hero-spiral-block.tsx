"use client"

import React from "react"

import { ArrowRight } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

export interface HeroSpiralBlockProps {
  badge?: string
  headline?: string
  description?: string
  primaryCta?: {
    label: string
    href?: string
    onClick?: () => void
  }
  secondaryCta?: {
    label: string
    href?: string
    onClick?: () => void
  }
  className?: string
}

const defaultBadge = "New Release"
const defaultHeadline = "Welcome to Our Website"
const defaultDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo."

export function HeroSpiralBlock({
  badge = defaultBadge,
  headline = defaultHeadline,
  description = defaultDescription,
  primaryCta = { label: "Primary" },
  secondaryCta = { label: "Secondary" },
  className,
}: HeroSpiralBlockProps) {
  return (
    <section className={cn(className)}>
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
            <p>{badge}</p>
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
              {headline}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button
                className="w-full sm:w-auto"
                onClick={primaryCta.onClick}
                asChild={!!primaryCta.href}
              >
                {primaryCta.href ? (
                  <a href={primaryCta.href}>
                    <ArrowRight className="mr-2 size-4" />
                    {primaryCta.label}
                  </a>
                ) : (
                  <>
                    <ArrowRight className="mr-2 size-4" />
                    {primaryCta.label}
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={secondaryCta.onClick}
                asChild={!!secondaryCta.href}
              >
                {secondaryCta.href ? (
                  <a href={secondaryCta.href}>{secondaryCta.label}</a>
                ) : (
                  secondaryCta.label
                )}
              </Button>
            </div>
          </div>
          <div className="relative aspect-3/4">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800"
                className="text-muted-foreground h-full w-full opacity-20"
              >
                {Array.from(Array(720).keys()).map((dot, index, array) => {
                  const angle = 0.2 * index
                  const scalar = 40 + index * (360 / array.length)
                  const x = Math.round(Math.cos(angle) * scalar)
                  const y = Math.round(Math.sin(angle) * scalar)

                  return (
                    <circle
                      key={index}
                      r={(3 * index) / array.length}
                      cx={400 + x}
                      cy={400 + y}
                      opacity={1 - Math.sin(angle)}
                    />
                  )
                })}
              </svg>
            </div>
            <div className="border-border bg-accent absolute top-[10%] left-[8%] flex aspect-5/6 w-[38%] justify-center rounded-lg border"></div>
            <div className="border-border bg-accent absolute top-[20%] right-[12%] flex aspect-square w-[20%] justify-center rounded-lg border"></div>
            <div className="border-border bg-accent absolute right-[24%] bottom-[24%] flex aspect-5/6 w-[38%] justify-center rounded-lg border"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
