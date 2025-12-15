"use client"

import React from "react"

import { cn } from "@/lib/utils"

import { Button } from "@/registry/new-york-v4/ui/button"

export interface HeroMobileAppBlockProps {
  headline?: string
  description?: string
  ctaLabel?: string
  ctaIcon?: string
  iphoneImage?: string
  screenImage?: string
  className?: string
}

const defaultHeadline = "Master your monetary matters"
const defaultDescription = "Minimize financial stress and build wealth with our intuitive, AI-enhanced budgeting tool. Our platform analyzes your spending and offers insights for smarter financial decisions."
const defaultCtaLabel = "Get started now"
const defaultCtaIcon = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero49/download.svg"
const defaultIphoneImage = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero49/iphone.png"
const defaultScreenImage = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg"

export function HeroMobileAppBlock({
  headline = defaultHeadline,
  description = defaultDescription,
  ctaLabel = defaultCtaLabel,
  ctaIcon = defaultCtaIcon,
  iphoneImage = defaultIphoneImage,
  screenImage = defaultScreenImage,
  className,
}: HeroMobileAppBlockProps) {
  return (
    <section className={cn("bg-background", className)}>
      <div className="container mx-auto flex flex-col items-center px-4 pt-10">
        <div className="flex max-w-3xl flex-col items-center gap-8 text-center">
          <h1 className="text-foreground text-5xl font-semibold lg:text-8xl">
            {headline}
          </h1>
          <p className="text-4 text-muted-foreground max-w-xl leading-[165%] tracking-tight">
            {description}
          </p>
          <Button className="flex h-fit w-fit items-center gap-[8px] rounded-full px-8 py-5 text-base font-medium transition-all hover:scale-95">
            <img
              alt="google play and app store download icons"
              loading="lazy"
              width="44"
              height="18"
              decoding="async"
              data-nimg="1"
              src={ctaIcon}
            />
            <p>{ctaLabel}</p>
          </Button>
        </div>
        <div className="relative translate-x-[14.7%]">
          {/* Image inside Iphone */}
          <div className="left-[36.5%]! h-[67%]! w-[31%]! bg-muted absolute top-[12%] -translate-x-[52%] overflow-hidden rounded-[10px]">
            <img
              className="min-h-full min-w-full"
              src={screenImage}
              alt=""
            />
          </div>
          {/* Iphone Image  */}
          <img
            alt=""
            src={iphoneImage}
            className="relative z-10"
            loading="lazy"
            width="1008.71"
            height="857"
          />
        </div>
      </div>
    </section>
  )
}
