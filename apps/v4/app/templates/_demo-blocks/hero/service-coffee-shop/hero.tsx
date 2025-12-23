"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroServiceCoffeeShop() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/service-coffee-shop/1.webp"
          alt="Coffee shop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/30" />
      </div>

      {/* Warm accent glow */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[hsl(var(--brand)/0.2)] blur-[80px]" />

      {/* Content - Minimal with side label */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="relative text-center">
          {/* Side label */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden xl:block">
            <span className="text-shadow text-[10px] font-medium tracking-[0.5em] uppercase whitespace-nowrap">
              Single Origin Beans
            </span>
          </div>

          <p className="text-shadow text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8 font-light">
            Established 2019
          </p>
          <h1 className="font-display text-shadow-lg font-serif italic text-center text-[3.5rem] leading-[0.9] sm:text-6xl md:text-[9rem] text-foreground">
            Morning
          </h1>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="w-16 md:w-24 h-px bg-border" />
            <h1 className="font-display text-shadow-lg text-center text-[2rem] leading-none sm:text-4xl md:text-[5rem] uppercase font-extralight tracking-[0.3em] text-foreground">
              Ritual
            </h1>
            <div className="w-16 md:w-24 h-px bg-border" />
          </div>
          <h1 className="font-display text-shadow-lg text-center text-[4rem] leading-[0.85] sm:text-7xl md:text-[11rem] text-foreground uppercase font-black tracking-tighter">
            Coffee
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-center text-sm md:text-base max-w-xs mx-auto">
            Single-origin beans, expertly roasted. Elevate your morning ritual.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Shop Now</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-muted">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
