"use client"

import { ReactNode } from "react"
import Link from "next/link"

import { LayoutGrid, LayoutGridItem } from "@/components/layout/layout-grid"
import { ParallaxImage } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export interface ParallaxHeroBlockProps {
  headline: ReactNode
  subheadline: ReactNode
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  stats?: Array<{
    label: string
  }>
  features?: Array<{
    label: string
  }>
  images: {
    lightDesktop: string
    darkDesktop: string
    lightMobile?: string
    darkMobile?: string
  }
  className?: string
}

export function ParallaxHeroBlock({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  stats,
  features,
  images,
  className,
}: ParallaxHeroBlockProps) {
  return (
    <div
      id="hero"
      className={`relative -mt-[56px] overflow-hidden ${className ?? ""}`}
    >
      {/* Gradient header overlay */}
      <div className="from-background absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b to-transparent" />

      {/* Diagonal background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="relative w-full max-w-[1920px]">
          {/* Light mode */}
          <svg
            className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_3%,black_12%)] dark:hidden"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hero-image-light"
                patternUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <image
                  href={images.lightDesktop}
                  x="0"
                  y="0"
                  width="1920"
                  height="1080"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
            <path
              d="M0 0 L1920 0 C1600 160 1333 93 1067 227 C800 360 533 293 267 427 C133 493 67 520 0 560 Z"
              fill="url(#hero-image-light)"
            />
          </svg>
          {/* Dark mode */}
          <svg
            className="absolute hidden h-full w-full [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_3%,black_12%)] dark:block"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hero-image-dark"
                patternUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <image
                  href={images.darkDesktop}
                  x="0"
                  y="0"
                  width="1920"
                  height="1080"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
            <path
              d="M0 0 L1920 0 C1600 160 1333 93 1067 227 C800 360 533 293 267 427 C133 493 67 520 0 560 Z"
              fill="url(#hero-image-dark)"
            />
          </svg>
        </div>
      </div>

      <div className="relative container flex h-full w-full flex-col items-center justify-center px-6">
        <Spacer size={"8xl"} sizeMobile={"6xl"} />

        {/* Headline */}
        <h1 className="display text-center text-[2.5rem] leading-[0.9] tracking-tight sm:text-5xl md:text-8xl">
          {headline}
        </h1>

        <Spacer size={"2xl"} sizeMobile={"md"} />

        {/* Subheadline */}
        <div className="text-muted-foreground text-center text-lg md:text-3xl">
          {subheadline}
        </div>

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
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>

        {/* Features */}
        {features && features.length > 0 && (
          <>
            <Spacer size={"5xl"} sizeMobile={"5xl"} />
            <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
              {features.map((feature, index) => (
                <span key={index}>{feature.label}</span>
              ))}
            </div>
          </>
        )}

        <Spacer size={"xl"} sizeMobile={"md"} />

        {/* Media - Desktop */}
        <LayoutGrid className="hidden h-[40rem] w-full md:grid">
          <LayoutGridItem span={6} spanMd={4}>
            <ParallaxImage
              src={images.lightDesktop}
              alt="Desktop hero preview"
              className="h-full rounded-4xl"
              imageClassName="absolute inset-0 h-[120%] w-full"
              range={["-10%", "10%"]}
              offset={["start end", "end start"]}
              zoom
            >
              {/* Navbar mockup */}
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-white" />
                  <div className="h-4 w-20 rounded-full bg-white/80" />
                </div>
                <div className="flex items-center gap-6">
                  <div className="h-3 w-12 rounded-full bg-white/70" />
                  <div className="h-3 w-12 rounded-full bg-white/70" />
                  <div className="h-3 w-12 rounded-full bg-white/70" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-14 rounded-full bg-white/30" />
                  <div className="h-8 w-16 rounded-full bg-white" />
                </div>
              </div>
              {/* Content mockup */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start p-8 lg:p-12">
                <div className="h-10 w-80 rounded-full bg-white lg:h-12 lg:w-[28rem]" />
                <div className="mt-3 h-10 w-64 rounded-full bg-white lg:w-80" />
                <div className="mt-3 flex flex-col gap-2">
                  <div className="h-4 w-72 rounded-full bg-white/70 lg:w-96" />
                  <div className="h-4 w-56 rounded-full bg-white/70 lg:w-72" />
                </div>
                <div className="mt-6 flex gap-3">
                  <div className="h-10 w-28 rounded-full bg-white" />
                  <div className="h-10 w-28 rounded-full bg-white/30 backdrop-blur-sm" />
                </div>
              </div>
            </ParallaxImage>
          </LayoutGridItem>
          <LayoutGridItem span={6} spanMd={2}>
            <ParallaxImage
              src={images.lightMobile ?? images.lightDesktop}
              alt="Mobile hero preview"
              className="h-full rounded-4xl"
              imageClassName="absolute inset-0 h-[120%] w-full"
              range={["-10%", "10%"]}
              offset={["start end", "end start"]}
              zoom
            >
              {/* Mobile navbar mockup */}
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4">
                <div className="size-8 rounded-lg bg-white" />
                <div className="flex size-8 flex-col items-center justify-center gap-1">
                  <div className="h-0.5 w-4 rounded-full bg-white" />
                  <div className="h-0.5 w-4 rounded-full bg-white" />
                  <div className="h-0.5 w-4 rounded-full bg-white" />
                </div>
              </div>
              {/* Content mockup */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center p-6 pb-10 text-center">
                <div className="h-6 w-40 rounded-full bg-white" />
                <div className="mt-2 h-3 w-32 rounded-full bg-white/70" />
                <div className="mt-4 h-10 w-28 rounded-full bg-white" />
              </div>
            </ParallaxImage>
          </LayoutGridItem>
        </LayoutGrid>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <>
            <Spacer size={"xl"} sizeMobile={"md"} />
            <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
              {stats.map((stat, index) => (
                <span key={index}>{stat.label}</span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
