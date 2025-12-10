import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function CTASection() {
  return (
    <div id="cta" className="relative pb-32 md:pb-40">
      {/* SVG Waves in background */}
      {/* Back wave - with Tailwind mask fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto w-full max-w-[1920px]">
        <svg
          className="w-full dark:hidden"
          viewBox="0 0 1440 450"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-image-light-1"
              patternUnits="userSpaceOnUse"
              width="1440"
              height="450"
            >
              <image
                href="/marketing/surfing.webp"
                x="0"
                y="0"
                width="1440"
                height="450"
                preserveAspectRatio="xMidYMin slice"
              />
            </pattern>
          </defs>
          <path
            d="M 0,450 L 0,80 C 90,80 180,85 282,95 C 384,105 498,125 583,130 C 668,135 725,125 810,125 C 895,125 1008,135 1118,130 C 1228,125 1334,100 1440,80 L 1440,450 L 0,450 Z"
            fill="url(#cta-image-light-1)"
            fillOpacity="0.08"
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="hidden w-full dark:block"
          viewBox="0 0 1440 450"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-image-dark-1"
              patternUnits="userSpaceOnUse"
              width="1440"
              height="450"
            >
              <image
                href="/marketing/sky-night.webp"
                x="0"
                y="0"
                width="1440"
                height="450"
                preserveAspectRatio="xMidYMin slice"
              />
            </pattern>
          </defs>
          <path
            d="M 0,450 L 0,80 C 90,80 180,85 282,95 C 384,105 498,125 583,130 C 668,135 725,125 810,125 C 895,125 1008,135 1118,130 C 1228,125 1334,100 1440,80 L 1440,450 L 0,450 Z"
            fill="url(#cta-image-dark-1)"
            fillOpacity="0.08"
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto w-full max-w-[1920px]">
        <svg
          className="w-full dark:hidden"
          viewBox="0 0 1440 450"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-image-light-2"
              patternUnits="userSpaceOnUse"
              width="1440"
              height="450"
            >
              <image
                href="/marketing/surfing.webp"
                x="0"
                y="0"
                width="1440"
                height="450"
                preserveAspectRatio="xMidYMin slice"
              />
            </pattern>
          </defs>
          <path
            d="M 0,450 L 0,200 C 114,170 229,140 333,150 C 437,160 532,210 623,210 C 714,210 803,160 879,175 C 955,190 1020,250 1111,265 C 1202,280 1321,250 1440,200 L 1440,450 L 0,450 Z"
            fill="url(#cta-image-light-2)"
            fillOpacity="0.3"
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="hidden w-full dark:block"
          viewBox="0 0 1440 450"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-image-dark-2"
              patternUnits="userSpaceOnUse"
              width="1440"
              height="450"
            >
              <image
                href="/marketing/sky-night.webp"
                x="0"
                y="0"
                width="1440"
                height="450"
                preserveAspectRatio="xMidYMin slice"
              />
            </pattern>
          </defs>
          <path
            d="M 0,450 L 0,200 C 114,170 229,140 333,150 C 437,160 532,210 623,210 C 714,210 803,160 879,175 C 955,190 1020,250 1111,265 C 1202,280 1321,250 1440,200 L 1440,450 L 0,450 Z"
            fill="url(#cta-image-dark-2)"
            fillOpacity="0.3"
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Bottom fade overlay */}
      <div className="from-page pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center justify-center px-6 pt-16 text-center md:pt-24">
        <p className="text-brand text-sm font-medium tracking-widest uppercase">
          Start Building
        </p>
        <Spacer size="md" sizeMobile="sm" />
        <h2 className="display max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          Get Ready to Build
          <br />
          <span className="text-foreground">Something Beautiful</span>
        </h2>
        <Spacer size="4xl" sizeMobile="2xl" />
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/blocks">
            <HeroButton>Explore Blocks</HeroButton>
          </Link>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/docs/components">Browse Components</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
