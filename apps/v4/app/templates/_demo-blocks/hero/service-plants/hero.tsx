"use client"

import Link from "next/link"

import { ParallaxImage } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export const tint = "base"

export function HeroServicePlants() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Parallax background image */}
      <ParallaxImage
        src="/placeholders/blocks/service-plants/1.webp"
        alt="Plant nursery"
        className="absolute inset-0"
        range={["0%", "10%"]}
      />

      {/* Circle overlay behind text */}
      <div className="bg-background/90 pointer-events-none absolute top-1/2 left-1/2 z-0 h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full mask-y-from-60% mask-y-to-95% mask-x-from-60% mask-x-to-95% backdrop-blur-sm md:h-[1600px] md:w-[1600px]" />

      {/* Content */}
      <div className="relative z-10 container flex min-h-[100svh] w-full flex-col items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="text-brand-complementary text-shadow mb-4 text-sm tracking-[0.25em] uppercase">
            Indoor Plants Delivered
          </p>
          <h1 className="text-foreground mb-6 text-shadow-lg">
            <span className="text-6xl font-bold tracking-tight md:text-9xl">
              Bring Nature
            </span>
            <span className="block text-5xl text-6xl font-bold tracking-tight md:text-9xl lg:-mt-5">
              Into Your Home
            </span>
          </h1>
          <p className="text-foreground text-shadow mx-auto mb-10 max-w-xl text-base md:text-2xl">
            Curated plants, expert care guides, and doorstep delivery. Transform
            your space with living greenery.
          </p>
          <Spacer size={"2xl"} />
          <div className="flex flex-row justify-center gap-4">
            <Link href="#">
              <HeroButton>Shop Plants</HeroButton>
            </Link>
            <Link href="#">
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-muted rounded-full"
              >
                Care Guide
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
