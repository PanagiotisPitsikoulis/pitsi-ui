"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { artTheme, getThemeStyle } from "../../_themes"

export function HeroArt() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-stone-50 dark:bg-stone-950"
      style={getThemeStyle(artTheme, "light")}
    >
      {/* Floating gallery frames */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Frame 1 - top left */}
        <div className="absolute -top-8 -left-8 w-56 h-72 rotate-[-12deg] hidden md:block">
          <div className="w-full h-full bg-white dark:bg-stone-900 rounded-sm shadow-2xl p-2">
            <img
              src="/images/hero/art-1.jpg"
              alt="Artwork 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Frame 2 - top right */}
        <div className="absolute -top-4 -right-12 w-64 h-80 rotate-[10deg] hidden lg:block">
          <div className="w-full h-full bg-white dark:bg-stone-900 rounded-sm shadow-2xl p-2">
            <img
              src="/images/hero/art-2.jpg"
              alt="Artwork 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Frame 3 - bottom left */}
        <div className="absolute -bottom-16 left-16 w-48 h-64 rotate-[8deg] hidden md:block">
          <div className="w-full h-full bg-white dark:bg-stone-900 rounded-sm shadow-2xl p-2">
            <img
              src="/images/hero/art-3.jpg"
              alt="Artwork 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Frame 4 - bottom right */}
        <div className="absolute -bottom-12 -right-4 w-52 h-68 rotate-[-6deg] hidden lg:block">
          <div className="w-full h-full bg-white dark:bg-stone-900 rounded-sm shadow-2xl p-2">
            <img
              src="/images/hero/art-4.jpg"
              alt="Artwork 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content - Elegant serif mix */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center">
          <p className="font-serif italic text-stone-500 dark:text-stone-400 text-xs md:text-sm tracking-wide mb-8">
            Gallery Exhibition — 2024
          </p>
          <h1 className="font-serif italic text-center text-[3rem] leading-[0.9] tracking-normal max-lg:text-[4rem] sm:text-6xl md:text-[9rem] text-stone-800 dark:text-stone-200">
            Where
          </h1>
          <h1 className="font-serif italic text-center text-[4rem] leading-[0.85] tracking-normal max-lg:text-[5rem] sm:text-7xl md:text-[12rem] text-stone-600 dark:text-stone-300">
            Creativity
          </h1>
          <h1 className="font-serif italic text-center text-[3rem] leading-[0.9] tracking-normal max-lg:text-[4rem] sm:text-6xl md:text-[9rem] text-stone-800 dark:text-stone-200">
            Lives
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-muted-foreground text-center text-sm md:text-base max-w-sm mx-auto">
            Discover extraordinary artworks from emerging and established artists.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>View Gallery</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full">
                About Artists
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
