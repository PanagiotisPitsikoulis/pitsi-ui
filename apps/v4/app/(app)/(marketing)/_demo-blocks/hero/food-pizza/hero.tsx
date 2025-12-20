"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { getThemeStyle, pizzaTheme } from "../../_themes"

export function HeroFoodPizza() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden"
      style={getThemeStyle(pizzaTheme, "dark")}
    >
      {/* Full-bleed warm background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/pizza.jpg"
          alt="Wood-fired pizza"
          className="w-full h-full object-cover"
        />
        {/* Warm vignette overlay */}
        <div className="absolute inset-0 bg-amber-950/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-20 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 0L35 25L60 30L35 35L30 60L25 35L0 30L25 25L30 0Z" fill="white"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-16 opacity-15 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
          <path d="M30 0L35 25L60 30L35 35L30 60L25 35L0 30L25 25L30 0Z" fill="white"/>
        </svg>
      </div>

      {/* Content - Classic centered with decorative dividers */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center">
          {/* Decorative top */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-amber-300/20" />
            <p className="font-serif italic text-amber-200/50 text-xs md:text-sm">
              Est. 1985 — Napoli
            </p>
            <div className="w-16 h-px bg-amber-300/20" />
          </div>
          <h1 className="font-serif italic text-center text-[2.5rem] leading-[0.9] sm:text-5xl md:text-[7rem] text-amber-200/70">
            Authentic Italian
          </h1>
          <h1 className="font-serif italic text-center text-[3rem] leading-[0.85] sm:text-6xl md:text-[9rem] text-white">
            Wood-Fired
          </h1>
          <h1 className="font-serif italic text-center text-[4rem] leading-[0.85] sm:text-7xl md:text-[12rem] text-white">
            Pizza
          </h1>
          <Spacer size="lg" sizeMobile="md" />
          <p className="text-amber-100/50 text-center text-sm md:text-base max-w-md mx-auto">
            Crafted with love since 1985. Traditional recipes, modern taste.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Order Online</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-amber-200/30 text-white hover:bg-amber-200/10">
                Our Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
