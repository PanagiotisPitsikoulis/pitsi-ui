"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { getThemeStyle, plantsTheme } from "../../_themes"

export function HeroServicePlants() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-emerald-50 dark:bg-emerald-950"
      style={getThemeStyle(plantsTheme, "light")}
    >
      {/* Organic blob shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-emerald-200/40 dark:bg-emerald-800/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-green-200/40 dark:bg-green-800/20 blur-3xl" />
      </div>

      {/* Plant images grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left plant */}
        <div className="absolute left-0 bottom-0 w-80 h-[600px] hidden lg:block">
          <img
            src="/images/hero/plant-1.jpg"
            alt="Indoor plant"
            className="w-full h-full object-contain object-bottom"
          />
          <div className="absolute right-0 inset-y-0 w-32 bg-emerald-50/80 dark:bg-emerald-950/80" />
        </div>

        {/* Right plant */}
        <div className="absolute right-0 bottom-0 w-72 h-[550px] hidden lg:block">
          <img
            src="/images/hero/plant-2.jpg"
            alt="Indoor plant"
            className="w-full h-full object-contain object-bottom"
          />
          <div className="absolute left-0 inset-y-0 w-32 bg-emerald-50/80 dark:bg-emerald-950/80" />
        </div>

        {/* Top accent plant */}
        <div className="absolute right-1/4 -top-10 w-48 h-64 rotate-12 hidden xl:block opacity-60">
          <img
            src="/images/hero/plant-3.jpg"
            alt="Plant accent"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Leaf decorations */}
      <div className="absolute top-20 left-20 w-16 h-16 opacity-20 hidden lg:block">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C50 0 80 30 80 60C80 90 50 100 50 100C50 100 20 90 20 60C20 30 50 0 50 0Z" fill="currentColor" className="text-emerald-600"/>
        </svg>
      </div>

      {/* Content - Organic flowing layout */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 dark:bg-emerald-500/10 mb-6">
            <svg className="w-3 h-3 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-emerald-700 dark:text-emerald-400 text-xs font-medium tracking-wider uppercase">
              Free Shipping Over $50
            </span>
          </div>
          <h1 className="font-sans text-center text-[3rem] leading-[0.85] sm:text-6xl md:text-[7rem] uppercase font-light tracking-widest">
            Bring
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-6">
            <h1 className="font-sans text-center text-[4rem] leading-[0.85] sm:text-7xl md:text-[10rem] text-emerald-600 dark:text-emerald-400 uppercase font-semibold">
              Nature
            </h1>
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-emerald-300/50 dark:bg-emerald-700/50 hidden sm:block" />
          </div>
          <h1 className="font-sans text-center text-[3rem] leading-[0.9] sm:text-6xl md:text-[8rem] uppercase font-light tracking-widest">
            Home
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-muted-foreground text-center text-sm md:text-base max-w-sm mx-auto">
            Curated indoor plants delivered. Transform your space with greenery.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Shop Plants</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full">
                Care Guide
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
