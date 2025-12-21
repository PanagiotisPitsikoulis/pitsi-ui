"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroFoodJuice() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/food-juice/1.webp"
          alt="Fresh juice"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/30" />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-muted/50 blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-muted/50 blur-[60px]" />

      {/* Content - Playful stacked with emoji-like accents */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="text-shadow text-xs font-medium tracking-wider uppercase">
              100% Organic
            </span>
          </div>
          <p className="text-shadow text-xs md:text-sm tracking-[0.3em] uppercase mb-2">
            Squeeze the Good Stuff
          </p>
          <h1 className="text-shadow-lg font-serif italic text-center text-[4rem] leading-[0.85] sm:text-7xl md:text-[12rem] text-foreground">
            Fresh
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-6">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-border" />
            <h1 className="text-shadow-lg text-center text-[3rem] leading-none sm:text-5xl md:text-[8rem] text-foreground uppercase font-black tracking-tighter">
              Juice
            </h1>
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-border" />
          </div>
          <p className="text-shadow text-xs md:text-sm tracking-[0.2em] uppercase mt-6 font-medium">
            Cold-Pressed • Organic • Fresh Daily
          </p>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-center text-sm md:text-base max-w-sm mx-auto">
            100% organic ingredients. Nourish your body, energize your life.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Order Now</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-muted">
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
