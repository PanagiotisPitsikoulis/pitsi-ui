import { ParallaxImage } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { LayoutGrid, LayoutGridItem } from "./layout-grid"

export function HeroSection() {
  return (
    <div className="relative -mt-[56px] overflow-hidden">
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
          <HeroButton>Start Copy Pasting</HeroButton>
          <Button size={"lg"} variant={"outline"} className="rounded-full">
            Get Pro
          </Button>
        </div>
        {/* Features */}
        <Spacer size={"5xl"} sizeMobile={"5xl"} />
        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
          <span>Up your design game with 300+ free Elements</span>
        </div>
        <Spacer size={"xl"} sizeMobile={"md"} />
        {/*Media*/}
        <div className="flex w-full flex-col gap-4 md:hidden">
          {/*Desktop Preview - Mobile View*/}
          <div className="h-56">
            <ParallaxImage
              src="/marketing/surfing.webp"
              alt="Desktop hero preview"
              className="rounded-4xl h-full"
              imageClassName="absolute inset-0 h-[120%] w-full"
              range={["-10%", "10%"]}
              offset={["start end", "end start"]}
              zoom
            >
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start p-4">
                <div className="h-5 w-40 rounded-full bg-white" />
                <div className="mt-1.5 h-5 w-32 rounded-full bg-white" />
                <div className="mt-3 flex gap-2">
                  <div className="h-6 w-16 rounded-full bg-white" />
                  <div className="h-6 w-16 rounded-full bg-white/30 backdrop-blur-sm" />
                </div>
              </div>
            </ParallaxImage>
          </div>
          {/*Mobile Preview - Mobile View*/}
          <div className="w-full aspect-[9/16]">
            <ParallaxImage
              src="/marketing/party.webp"
              alt="Mobile hero preview"
              className="rounded-4xl h-full"
              imageClassName="absolute inset-0 h-[120%] w-full"
              range={["-10%", "10%"]}
              offset={["start end", "end start"]}
              zoom
            >
              {/* Navbar */}
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-3">
                <div className="size-6 rounded-lg bg-white" />
                <div className="flex size-6 flex-col items-center justify-center gap-0.5">
                  <div className="h-0.5 w-3 rounded-full bg-white" />
                  <div className="h-0.5 w-3 rounded-full bg-white" />
                  <div className="h-0.5 w-3 rounded-full bg-white" />
                </div>
              </div>
              {/* Hero Content Top */}
              <div className="absolute inset-x-0 top-12 z-10 flex flex-col items-center p-3 text-center">
                <div className="h-5 w-28 rounded-full bg-white" />
                <div className="mt-1.5 h-5 w-24 rounded-full bg-white" />
                <div className="mt-2 h-2 w-32 rounded-full bg-white/70" />
                <div className="mt-1 h-2 w-28 rounded-full bg-white/70" />
              </div>
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center p-4 pb-6 text-center">
                <div className="h-4 w-28 rounded-full bg-white" />
                <div className="mt-1.5 h-2 w-24 rounded-full bg-white/70" />
                <div className="mt-3 h-7 w-20 rounded-full bg-white" />
              </div>
            </ParallaxImage>
          </div>
        </div>
        {/*Media - Desktop*/}
        <LayoutGrid className="hidden h-[40rem] w-full md:grid">
          {/*Card Desktop*/}
          <LayoutGridItem span={6} spanMd={4}>
            <ParallaxImage
              src="/marketing/surfing.webp"
              alt="Desktop hero preview"
              className="rounded-4xl h-full"
              imageClassName="absolute inset-0 h-[120%] w-full"
              range={["-10%", "10%"]}
              offset={["start end", "end start"]}
              zoom
            >
              {/* Navbar */}
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-white" />
                  <div className="h-4 w-20 rounded-full bg-white/80" />
                </div>
                <div className="flex items-center gap-6">
                  <div className="h-3 w-12 rounded-full bg-white/70" />
                  <div className="h-3 w-12 rounded-full bg-white/70" />
                  <div className="h-3 w-12 rounded-full bg-white/70" />
                  <div className="h-3 w-12 rounded-full bg-white/70" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-14 rounded-full bg-white/30" />
                  <div className="h-8 w-16 rounded-full bg-white" />
                </div>
              </div>
              {/* Content */}
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
          {/*Card Mobile*/}
          <LayoutGridItem span={6} spanMd={2}>
            <ParallaxImage
              src="/marketing/party.webp"
              alt="Mobile hero preview"
              className="rounded-4xl h-full"
              imageClassName="absolute inset-0 h-[120%] w-full"
              range={["-10%", "10%"]}
              offset={["start end", "end start"]}
              zoom
            >
              {/* Navbar */}
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4">
                <div className="size-8 rounded-lg bg-white" />
                <div className="flex size-8 flex-col items-center justify-center gap-1">
                  <div className="h-0.5 w-4 rounded-full bg-white" />
                  <div className="h-0.5 w-4 rounded-full bg-white" />
                  <div className="h-0.5 w-4 rounded-full bg-white" />
                </div>
              </div>
              {/* Hero Content Top */}
              <div className="absolute inset-x-0 top-16 z-10 flex flex-col items-center p-4 text-center">
                <div className="h-8 w-44 rounded-full bg-white" />
                <div className="mt-2 h-8 w-36 rounded-full bg-white" />
                <div className="mt-4 h-3 w-48 rounded-full bg-white/70" />
                <div className="mt-2 h-3 w-40 rounded-full bg-white/70" />
              </div>
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center p-6 pb-10 text-center">
                <div className="h-6 w-40 rounded-full bg-white" />
                <div className="mt-2 h-3 w-32 rounded-full bg-white/70" />
                <div className="mt-4 h-10 w-28 rounded-full bg-white" />
              </div>
            </ParallaxImage>
          </LayoutGridItem>
        </LayoutGrid>
        {/* Stats */}
        <Spacer size={"xl"} sizeMobile={"md"} />
        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
          <span>1000+ blocks</span>
          <span>65+ components</span>
          <span>24 animations</span>
          <span>12 hooks</span>
        </div>
      </div>
    </div>
  )
}
