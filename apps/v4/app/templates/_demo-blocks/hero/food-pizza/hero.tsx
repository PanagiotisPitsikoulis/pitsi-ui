"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroFoodPizza() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Full-bleed warm background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/food-pizza/1.webp"
          alt="Wood-fired pizza"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/70 to-background/50" />
      </div>

      {/* Steam effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-40 opacity-20 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-foreground/20 to-transparent blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-foreground/10 to-transparent blur-2xl" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-20 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 0L35 25L60 30L35 35L30 60L25 35L0 30L25 25L30 0Z" className="fill-foreground"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-16 opacity-15 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
          <path d="M30 0L35 25L60 30L35 35L30 60L25 35L0 30L25 25L30 0Z" className="fill-foreground"/>
        </svg>
      </div>

      {/* Warm glow accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-muted/50 blur-[80px]" />
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-muted/50 blur-[40px]" />

      {/* Content - Classic centered with decorative dividers */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center">
          {/* Decorative top */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-border" />
            <p className="text-shadow font-serif italic text-xs md:text-sm">
              Est. 1985 — Napoli
            </p>
            <div className="w-16 h-px bg-border" />
          </div>
          <h1 className="font-display text-shadow-lg font-serif italic text-center text-[2.5rem] leading-[0.9] sm:text-5xl md:text-[7rem] text-foreground">
            Authentic Italian
          </h1>
          <h1 className="font-display text-shadow-lg font-serif italic text-center text-[3rem] leading-[0.85] sm:text-6xl md:text-[9rem] text-foreground">
            Wood-Fired
          </h1>
          <h1 className="font-display text-shadow-lg font-serif italic text-center text-[4rem] leading-[0.85] sm:text-7xl md:text-[12rem] text-foreground">
            Pizza
          </h1>
          <Spacer size="lg" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-center text-sm md:text-base max-w-md mx-auto">
            Crafted with love since 1985. Traditional recipes, modern taste.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Order Online</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-muted">
                Our Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
