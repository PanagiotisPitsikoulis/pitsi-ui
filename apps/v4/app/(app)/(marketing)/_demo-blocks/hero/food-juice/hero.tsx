"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { getThemeStyle, juiceTheme } from "../../_themes"

export function HeroFoodJuice() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-lime-50 dark:bg-lime-950"
      style={getThemeStyle(juiceTheme, "light")}
    >
      {/* Decorative fruit circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-orange-200/40 dark:bg-orange-800/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-lime-200/40 dark:bg-lime-800/20 blur-3xl" />
        <div className="absolute top-1/3 right-10 w-40 h-40 rounded-full bg-yellow-200/50 dark:bg-yellow-800/20 blur-2xl" />
      </div>

      {/* Product images - left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 hidden lg:block">
        <div className="relative w-72 h-[500px]">
          <img
            src="/images/hero/juice-1.jpg"
            alt="Fresh juice"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Product images - right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 hidden lg:block">
        <div className="relative w-72 h-[500px]">
          <img
            src="/images/hero/juice-2.jpg"
            alt="Fresh juice"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Content - Playful stacked with emoji-like accents */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/20 dark:bg-lime-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
            <span className="text-lime-700 dark:text-lime-400 text-xs font-medium tracking-wider uppercase">
              100% Organic
            </span>
          </div>
          <h1 className="font-display text-center text-[4rem] leading-[0.85] sm:text-7xl md:text-[10rem] uppercase font-bold">
            Fresh
          </h1>
          <h1 className="font-display text-center text-[4rem] leading-[0.85] sm:text-7xl md:text-[10rem] text-lime-600 dark:text-lime-400 uppercase font-bold">
            Natural
          </h1>
          <p className="font-display text-lime-600 dark:text-lime-400 text-sm md:text-lg tracking-[0.3em] uppercase mt-4 font-medium">
            Cold-Pressed Juices
          </p>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-muted-foreground text-center text-sm md:text-base max-w-sm mx-auto">
            100% organic ingredients. Nourish your body, energize your life.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Order Now</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full">
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
