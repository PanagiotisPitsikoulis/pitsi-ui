"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { getThemeStyle, petSittingTheme } from "../../_themes"

export function HeroServicePetSitting() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-amber-50 dark:bg-amber-950"
      style={getThemeStyle(petSittingTheme, "light")}
    >
      {/* Warm glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-200/40 dark:bg-amber-800/20 blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-200/30 dark:bg-orange-800/10 blur-[120px]" />
      </div>

      {/* Paw print decorations */}
      <div className="absolute top-32 right-20 opacity-10 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" className="text-amber-600">
          <ellipse cx="50" cy="65" rx="25" ry="20"/>
          <ellipse cx="25" cy="35" rx="12" ry="15"/>
          <ellipse cx="75" cy="35" rx="12" ry="15"/>
          <ellipse cx="15" cy="55" rx="10" ry="12"/>
          <ellipse cx="85" cy="55" rx="10" ry="12"/>
        </svg>
      </div>
      <div className="absolute bottom-40 left-16 opacity-10 hidden lg:block rotate-[-20deg]">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" className="text-orange-600">
          <ellipse cx="50" cy="65" rx="25" ry="20"/>
          <ellipse cx="25" cy="35" rx="12" ry="15"/>
          <ellipse cx="75" cy="35" rx="12" ry="15"/>
          <ellipse cx="15" cy="55" rx="10" ry="12"/>
          <ellipse cx="85" cy="55" rx="10" ry="12"/>
        </svg>
      </div>

      {/* Pet image */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[400px] h-[500px] hidden xl:block opacity-90">
        <img
          src="/images/hero/pet-sitting.jpg"
          alt="Happy pets"
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute left-0 inset-y-0 w-24 bg-amber-50/80 dark:bg-amber-950/80 rounded-l-3xl" />
      </div>

      {/* Floating pet accents */}
      <div className="absolute left-20 top-1/3 w-28 h-28 rotate-[-10deg] opacity-60 hidden lg:block">
        <img
          src="/images/hero/pet-dog.jpg"
          alt="Dog"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>
      <div className="absolute left-32 bottom-1/4 w-20 h-20 rotate-[8deg] opacity-50 hidden lg:block">
        <img
          src="/images/hero/pet-cat.jpg"
          alt="Cat"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 dark:bg-amber-500/10 mb-8">
            <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="text-amber-700 dark:text-amber-400 text-xs font-medium tracking-wider">
              Trusted Pet Care
            </span>
          </div>
          <p className="text-amber-600/50 dark:text-amber-400/40 text-sm md:text-lg tracking-[0.2em] mb-4 font-light uppercase">
            Your Pets Deserve
          </p>
          <h1 className="text-center text-[3rem] leading-[0.9] tracking-tight sm:text-6xl md:text-[8rem] font-bold">
            The Best
          </h1>
          <h1 className="text-center text-[4rem] leading-[0.85] tracking-tight sm:text-7xl md:text-[11rem] text-amber-500 dark:text-amber-400 font-bold">
            Care
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-muted-foreground text-center text-sm md:text-lg max-w-md mx-auto leading-relaxed">
            Professional pet sitting and dog walking. Your furry friends in safe, loving hands.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Book a Sitter</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
