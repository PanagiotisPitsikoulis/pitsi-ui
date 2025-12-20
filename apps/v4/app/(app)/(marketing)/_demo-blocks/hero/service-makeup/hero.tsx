"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { getThemeStyle, makeupTheme } from "../../_themes"

export function HeroServiceMakeup() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-fuchsia-50 dark:bg-fuchsia-950"
      style={getThemeStyle(makeupTheme, "light")}
    >
      {/* Soft glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-200/30 dark:bg-fuchsia-800/10 blur-[120px]" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-pink-200/30 dark:bg-pink-800/10 blur-[100px]" />
      </div>

      {/* Decorative brush stroke accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 hidden lg:block">
        <svg viewBox="0 0 200 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M150 0C180 200 100 400 180 600C220 700 140 800 200 800V0H150Z" fill="currentColor" className="text-fuchsia-600" />
        </svg>
      </div>

      {/* Makeup product images */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[350px] h-[450px] hidden xl:block opacity-90">
        <img
          src="/images/hero/makeup.jpg"
          alt="Makeup products"
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute left-0 inset-y-0 w-20 bg-fuchsia-50/80 dark:bg-fuchsia-950/80 rounded-l-3xl" />
      </div>

      {/* Floating makeup accents */}
      <div className="absolute left-16 top-1/4 w-24 h-24 rotate-[-15deg] opacity-50 hidden lg:block">
        <img
          src="/images/hero/makeup-brush.jpg"
          alt="Makeup brush"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute left-32 bottom-1/4 w-20 h-20 rotate-[12deg] opacity-40 hidden lg:block">
        <img
          src="/images/hero/lipstick.jpg"
          alt="Lipstick"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-32 left-20 w-20 h-20 rounded-full border border-fuchsia-200/50 dark:border-fuchsia-800/30 hidden lg:block" />
      <div className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full border border-pink-200/50 dark:border-pink-800/30 hidden lg:block" />

      {/* Content */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 dark:bg-fuchsia-500/5 mb-8">
            <svg className="w-3 h-3 text-fuchsia-600 dark:text-fuchsia-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span className="text-fuchsia-700 dark:text-fuchsia-400 text-xs font-medium tracking-wider">
              Professional Artistry
            </span>
          </div>
          <p className="text-fuchsia-600/50 dark:text-fuchsia-400/40 text-sm md:text-lg tracking-[0.3em] mb-4 font-light uppercase">
            Reveal Your
          </p>
          <h1 className="font-serif italic text-center text-[3rem] leading-[0.9] sm:text-6xl md:text-[8rem]">
            Inner
          </h1>
          <h1 className="font-serif italic text-center text-[4rem] leading-[0.85] sm:text-7xl md:text-[11rem] text-fuchsia-500 dark:text-fuchsia-400">
            Glamour
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-muted-foreground text-center text-sm md:text-lg max-w-md mx-auto leading-relaxed">
            Professional makeup artistry for every occasion. Bridal, editorial, and everyday beauty.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Book Session</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
