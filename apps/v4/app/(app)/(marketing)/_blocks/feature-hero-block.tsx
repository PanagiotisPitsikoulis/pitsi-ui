"use client"

import Link from "next/link"
import { ReactNode } from "react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export interface FeatureHeroStat {
  value: string
  label: string
}

export interface FeatureHeroBlockProps {
  eyebrow?: {
    text: string
    showDot?: boolean
  }
  headline: ReactNode
  subheadline: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
    isAnchor?: boolean
  }
  stats?: FeatureHeroStat[]
  previewBlocks?: string[]
  tags?: string[]
  backgroundVariant?: "gradient" | "plain" | "geometric"
  className?: string
}

export function FeatureHeroBlock({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  stats,
  tags,
  backgroundVariant = "gradient",
  className,
}: FeatureHeroBlockProps) {
  return (
    <div id="hero" className={`relative -mt-[56px] overflow-hidden ${className ?? ""}`}>
      {/* Gradient header overlay */}
      <div className="from-background absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b to-transparent" />

      {/* Background variants */}
      {backgroundVariant === "gradient" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="bg-brand/5 dark:bg-brand/10 absolute top-1/4 -left-20 h-[400px] w-[400px] rotate-45 rounded-3xl blur-3xl" />
          <div className="bg-brand/3 dark:bg-brand/5 absolute -bottom-20 right-1/4 h-[300px] w-[300px] rotate-12 rounded-3xl blur-3xl" />
          <div className="bg-brand/5 dark:bg-brand/10 absolute top-1/2 right-10 h-[200px] w-[200px] -rotate-12 rounded-3xl blur-2xl" />
        </div>
      )}

      {backgroundVariant === "geometric" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="bg-brand/10 absolute -top-32 -right-32 size-96 rotate-45 rounded-3xl" />
          <div className="bg-brand/5 absolute -bottom-48 -left-48 size-[500px] rotate-12 rounded-full" />
        </div>
      )}

      <div className="relative container flex h-full w-full flex-col items-center justify-center px-6">
        <Spacer size={"8xl"} sizeMobile={"6xl"} />

        {/* Eyebrow */}
        {eyebrow && (
          <>
            <div className="bg-brand/10 text-brand inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
              {eyebrow.showDot && <span className="bg-brand size-1.5 rounded-full" />}
              {eyebrow.text}
            </div>
            <Spacer size={"lg"} sizeMobile={"md"} />
          </>
        )}

        {/* Headline */}
        <h1 className="display text-center text-[2.5rem] leading-[0.9] tracking-tight sm:text-5xl md:text-8xl">
          {headline}
        </h1>

        <Spacer size={"2xl"} sizeMobile={"md"} />

        {/* Subheadline */}
        <p className="text-muted-foreground max-w-2xl text-center text-lg md:text-2xl">
          {subheadline}
        </p>

        {/* CTAs */}
        <Spacer size={"3xl"} sizeMobile={"lg"} />
        <div className="flex flex-row gap-2">
          <Link href={primaryCta.href}>
            <HeroButton>{primaryCta.label}</HeroButton>
          </Link>
          {secondaryCta && (
            <Button
              asChild
              size={"lg"}
              variant={"outline"}
              className="rounded-full"
            >
              {secondaryCta.isAnchor ? (
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              ) : (
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              )}
            </Button>
          )}
        </div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <>
            <Spacer size={"4xl"} sizeMobile={"3xl"} />
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-foreground text-2xl font-bold md:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <>
            <Spacer size={"3xl"} sizeMobile={"xl"} />
            <div className="flex flex-wrap items-center justify-center gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}

        <Spacer size={"4xl"} sizeMobile={"3xl"} />
      </div>
    </div>
  )
}
