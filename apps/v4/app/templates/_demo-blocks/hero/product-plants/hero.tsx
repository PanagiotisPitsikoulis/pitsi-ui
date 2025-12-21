"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroProductPlants() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Organic blob shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-muted/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-muted/50 blur-3xl" />
      </div>

      {/* Plant images grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left plant */}
        <div className="absolute left-0 bottom-0 w-80 h-[600px] hidden lg:block">
          <Image
            src="/placeholders/blocks/service-plants/1.webp"
            alt="Indoor plant"
            fill
            className="object-contain object-bottom"
          />
          <div className="absolute right-0 inset-y-0 w-32 bg-background/80" />
        </div>

        {/* Right plant */}
        <div className="absolute right-0 bottom-0 w-72 h-[550px] hidden lg:block">
          <Image
            src="/placeholders/blocks/service-plants/4.webp"
            alt="Indoor plant"
            fill
            className="object-contain object-bottom"
          />
          <div className="absolute left-0 inset-y-0 w-32 bg-background/80" />
        </div>

        {/* Top accent plant */}
        <div className="absolute right-1/4 -top-10 w-48 h-64 rotate-12 hidden xl:block opacity-60">
          <Image
            src="/placeholders/blocks/service-plants/7.webp"
            alt="Plant accent"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Leaf decorations */}
      <div className="absolute top-20 left-20 w-16 h-16 opacity-20 hidden lg:block">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C50 0 80 30 80 60C80 90 50 100 50 100C50 100 20 90 20 60C20 30 50 0 50 0Z" className="fill-primary"/>
        </svg>
      </div>

      {/* Content - Organic flowing layout */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 mb-6">
            <svg className="w-3 h-3 text-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-shadow text-xs font-medium tracking-wider uppercase">
              Free Shipping Over $50
            </span>
          </div>
          <h1 className="text-shadow-lg font-sans text-center text-[3rem] leading-[0.85] sm:text-6xl md:text-[7rem] uppercase font-light tracking-widest text-foreground">
            Bring
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-6">
            <h1 className="text-shadow-lg font-sans text-center text-[4rem] leading-[0.85] sm:text-7xl md:text-[10rem] text-foreground uppercase font-semibold">
              Nature
            </h1>
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-border hidden sm:block" />
          </div>
          <h1 className="text-shadow-lg font-sans text-center text-[3rem] leading-[0.9] sm:text-6xl md:text-[8rem] uppercase font-light tracking-widest text-foreground">
            Home
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-center text-sm md:text-base max-w-sm mx-auto">
            Curated indoor plants delivered. Transform your space with greenery.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Shop Plants</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border hover:bg-muted">
                Care Guide
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
