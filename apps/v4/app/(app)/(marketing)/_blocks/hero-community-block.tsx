"use client"

import { Minus } from "@/lib/icons"
import Image from "next/image"
import React from "react"

import { cn } from "@/lib/utils"

import { Button } from "@/registry/new-york-v4/ui/button"

export interface HeroCommunityBlockProps {
  badge?: {
    text: string
    highlight: string
    linkText: string
    href?: string
  }
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
  mainImage?: string
  leftImage?: string
  rightImage?: string
  className?: string
}

const defaultBadge = {
  text: "Join our Community Collaboration Survey!",
  highlight: "We'll donate $20 for each response.",
  linkText: "Take a tour",
}
const defaultHeadline = "Community & business data, centralized"
const defaultDescription = "Showcase the value of your community to the business. Talkbase sets the stage for successful cross-collaboration among community teams working with customer, marketing, sales, and product development."
const defaultPrimaryCta = { label: "Get started for free" }
const defaultSecondaryCta = { label: "Book a demo" }
const defaultMainImage = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
const defaultLeftImage = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
const defaultRightImage = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg"

export function HeroCommunityBlock({
  badge = defaultBadge,
  headline = defaultHeadline,
  description = defaultDescription,
  primaryCta = defaultPrimaryCta,
  secondaryCta = defaultSecondaryCta,
  mainImage = defaultMainImage,
  leftImage = defaultLeftImage,
  rightImage = defaultRightImage,
  className,
}: HeroCommunityBlockProps) {
  return (
    <section className={cn("py-32", className)}>
      <div className="container flex flex-col gap-7 text-center">
        <a
          href={badge.href || "#"}
          className="group mx-auto mb-3 w-fit gap-3 rounded-full border px-5 py-2 text-sm"
        >
          <span className="mr-1 font-medium">{badge.text}</span>
          {badge.highlight}
          <Minus className="mx-1 inline-block w-4" />
          <span className="font-semibold group-hover:underline">
            {badge.linkText}
          </span>
        </a>
        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold lg:text-6xl">
          {headline}
        </h1>
        <p className="text-muted-foreground mx-auto max-w-4xl lg:text-xl">
          {description}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            onClick={primaryCta.onClick}
            asChild={!!primaryCta.href}
          >
            {primaryCta.href ? (
              <a href={primaryCta.href}>{primaryCta.label}</a>
            ) : (
              primaryCta.label
            )}
          </Button>
          <Button
            size="lg"
            variant="outline"
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
      <div className="relative px-8">
        <div className="bg-linear-to-b from-muted absolute inset-0 top-1/2 h-full w-full to-transparent to-50%"></div>
        <div className="relative mx-auto max-w-5xl">
          <div className="relative mt-20 max-h-[580px] w-full aspect-video rounded-lg overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <Image
              src={mainImage}
              alt="placeholder"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -left-3 top-1/2 hidden max-h-56 h-56 w-40 -translate-y-1/2 rounded-lg overflow-hidden shadow-md md:block xl:-left-10">
            <Image
              src={leftImage}
              alt="placeholder"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-muted absolute -right-3 top-1/3 hidden h-24 w-24 -translate-y-1/2 rounded-lg overflow-hidden shadow-md md:block xl:-right-10">
            <Image
              src={rightImage}
              alt="placeholder"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
