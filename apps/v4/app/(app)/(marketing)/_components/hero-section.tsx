import Link from "next/link"

import { LayoutGrid, LayoutGridItem } from "@/components/layout/layout-grid"
import { ParallaxImage } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroSection() {
  return (
    <div id="hero" className="relative -mt-[56px] overflow-hidden">
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
                  href="/marketing/surfing.webp"
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
                  href="/marketing/sky-night.webp"
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
        {/*Typography*/}
        <Spacer size={"8xl"} sizeMobile={"6xl"} />
        <h1 className="display text-center text-[2.5rem] leading-[0.9] tracking-tight sm:text-5xl md:text-8xl">
          The Block Library
          <br />
          shadcn Deserves
        </h1>
        <Spacer size={"2xl"} sizeMobile={"md"} />
        <p className="text-muted-foreground text-center text-lg md:text-3xl">
          Next-gen UI. 1000+ blocks.
          <br />
          Same API you already know.
        </p>
        {/*Buttons*/}
        <Spacer size={"3xl"} sizeMobile={"lg"} />
        <div className="flex flex-row gap-2">
          <Link href="/blocks">
            <HeroButton>Start Copy Pasting</HeroButton>
          </Link>
          <Button
            asChild
            size={"lg"}
            variant={"outline"}
            className="rounded-full"
          >
            <a href="#pricing">Get Pro</a>
          </Button>
        </div>
        <Spacer size={"8xl"} />
        <Spacer size={"8xl"} />
        <Spacer size={"8xl"} />
      </div>
    </div>
  )
}
