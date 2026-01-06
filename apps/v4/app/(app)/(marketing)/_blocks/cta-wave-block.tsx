import { ReactNode } from "react"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export interface CtaWaveBlockProps {
  tagline?: string
  headline: ReactNode
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  lightModeImage: string
  darkModeImage: string
  className?: string
}

export function CtaWaveBlock({
  tagline,
  headline,
  primaryCta,
  secondaryCta,
  lightModeImage,
  darkModeImage,
  className,
}: CtaWaveBlockProps) {
  return (
    <div id="cta" className={`relative overflow-hidden ${className ?? ""}`}>
      {/* Wave background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="relative w-full max-w-[1920px]">
          {/* Light mode */}
          <svg
            className="absolute bottom-0 h-full w-full dark:hidden"
            viewBox="0 0 1920 600"
            preserveAspectRatio="xMidYMax slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="cta-image-light"
                patternUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <image
                  href={lightModeImage}
                  x="0"
                  y="0"
                  width="1920"
                  height="1080"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
            <path
              d="M0 600 L1920 600 L1920 200 C1600 50 1333 150 1067 100 C800 50 533 150 267 100 C133 75 67 50 0 100 Z"
              fill="url(#cta-image-light)"
            />
          </svg>
          {/* Dark mode */}
          <svg
            className="absolute bottom-0 hidden h-full w-full dark:block"
            viewBox="0 0 1920 600"
            preserveAspectRatio="xMidYMax slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="cta-image-dark"
                patternUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <image
                  href={darkModeImage}
                  x="0"
                  y="0"
                  width="1920"
                  height="1080"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
            <path
              d="M0 600 L1920 600 L1920 200 C1600 50 1333 150 1067 100 C800 50 533 150 267 100 C133 75 67 50 0 100 Z"
              fill="url(#cta-image-dark)"
            />
          </svg>
        </div>
      </div>

      <div className="relative container flex flex-col items-center justify-center px-6 py-24 text-center md:py-32">
        {tagline && (
          <>
            <p className="text-brand text-sm font-medium tracking-widest uppercase">
              {tagline}
            </p>
            <Spacer size="md" sizeMobile="sm" />
          </>
        )}
        <h2 className="display text-muted-foreground max-w-4xl text-4xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
          {headline}
        </h2>
        <Spacer size="3xl" sizeMobile="xl" />
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
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
        <Spacer size="8xl" sizeMobile="6xl" />
      </div>
    </div>
  )
}
