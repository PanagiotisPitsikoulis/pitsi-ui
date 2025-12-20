"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { coffeeTheme, getThemeStyle } from "../../_themes"

export function HeroServiceCoffeeShop() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-stone-100 dark:bg-stone-950"
      style={getThemeStyle(coffeeTheme, "light")}
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Warm accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-200/20 dark:bg-amber-900/10 blur-[120px]" />

      {/* Product image - floating centered */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[400px] h-[500px] hidden lg:block">
        <img
          src="/images/hero/coffee.jpg"
          alt="Premium coffee"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-stone-100 dark:bg-stone-950" />
      </div>

      {/* Coffee bean decorations */}
      <div className="absolute top-32 left-20 w-8 h-12 bg-amber-900/20 dark:bg-amber-700/20 rounded-full rotate-45 blur-sm hidden lg:block" />
      <div className="absolute top-48 right-32 w-6 h-10 bg-amber-800/15 dark:bg-amber-600/15 rounded-full -rotate-12 blur-sm hidden lg:block" />
      <div className="absolute bottom-40 left-40 w-7 h-11 bg-amber-900/10 dark:bg-amber-700/10 rounded-full rotate-[30deg] blur-sm hidden lg:block" />

      {/* Content - Minimal with side label */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="relative text-center">
          {/* Side label */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden xl:block">
            <span className="text-amber-600/30 dark:text-amber-400/20 text-[10px] font-medium tracking-[0.5em] uppercase whitespace-nowrap">
              Single Origin Beans
            </span>
          </div>

          <p className="text-amber-600 dark:text-amber-500 text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8 font-light">
            Artisan Roasted
          </p>
          <h1 className="text-center text-[3rem] leading-[0.85] tracking-[0.2em] sm:text-6xl md:text-[8rem] uppercase font-thin">
            Premium
          </h1>
          <h1 className="text-center text-[4rem] leading-[0.8] tracking-[0.1em] sm:text-7xl md:text-[11rem] text-amber-700 dark:text-amber-500 uppercase font-light">
            Coffee
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-muted-foreground text-center text-sm md:text-base max-w-xs mx-auto">
            Single-origin beans, expertly roasted. Elevate your morning ritual.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Shop Now</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
