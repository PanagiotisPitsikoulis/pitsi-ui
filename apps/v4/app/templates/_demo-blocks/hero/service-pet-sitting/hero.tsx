"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroServicePetSitting() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/service-pet-sitting/1.webp"
          alt="Happy pets"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      {/* Warm glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-muted/50 blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-muted/50 blur-[120px]" />
      </div>

      {/* Paw prints */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <div className="absolute top-32 right-20 opacity-20">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" className="text-foreground">
            <ellipse cx="50" cy="65" rx="25" ry="20"/>
            <ellipse cx="25" cy="35" rx="12" ry="15"/>
            <ellipse cx="75" cy="35" rx="12" ry="15"/>
            <ellipse cx="15" cy="55" rx="10" ry="12"/>
            <ellipse cx="85" cy="55" rx="10" ry="12"/>
          </svg>
        </div>
        <div className="absolute bottom-40 left-16 opacity-15 rotate-[-20deg]">
          <svg width="50" height="50" viewBox="0 0 100 100" fill="currentColor" className="text-foreground">
            <ellipse cx="50" cy="65" rx="25" ry="20"/>
            <ellipse cx="25" cy="35" rx="12" ry="15"/>
            <ellipse cx="75" cy="35" rx="12" ry="15"/>
            <ellipse cx="15" cy="55" rx="10" ry="12"/>
            <ellipse cx="85" cy="55" rx="10" ry="12"/>
          </svg>
        </div>
      </div>

      {/* Decorative heart accents */}
      <div className="absolute top-1/4 left-1/3 hidden lg:block">
        <svg className="w-6 h-6 text-foreground/50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-1/4 hidden lg:block">
        <svg className="w-5 h-5 text-foreground/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 mb-8">
            <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="text-shadow text-xs font-medium tracking-wider">
              Trusted Pet Care
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-foreground" viewBox="0 0 100 100" fill="currentColor">
              <ellipse cx="50" cy="65" rx="20" ry="16"/><ellipse cx="25" cy="40" rx="10" ry="12"/><ellipse cx="75" cy="40" rx="10" ry="12"/><ellipse cx="18" cy="55" rx="8" ry="10"/><ellipse cx="82" cy="55" rx="8" ry="10"/>
            </svg>
            <p className="text-shadow text-xs md:text-sm tracking-[0.3em] uppercase">
              Tail-Wagging Good
            </p>
            <svg className="w-5 h-5 md:w-6 md:h-6 text-foreground" viewBox="0 0 100 100" fill="currentColor">
              <ellipse cx="50" cy="65" rx="20" ry="16"/><ellipse cx="25" cy="40" rx="10" ry="12"/><ellipse cx="75" cy="40" rx="10" ry="12"/><ellipse cx="18" cy="55" rx="8" ry="10"/><ellipse cx="82" cy="55" rx="8" ry="10"/>
            </svg>
          </div>
          <h1 className="text-shadow-lg font-serif italic text-center text-[3rem] leading-[0.9] sm:text-5xl md:text-[7rem] text-foreground">
            furry friend
          </h1>
          <h1 className="text-shadow-lg text-center text-[4rem] leading-[0.75] sm:text-7xl md:text-[12rem] text-foreground font-black uppercase tracking-tighter">
            Paradise
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-center text-sm md:text-lg max-w-md mx-auto leading-relaxed">
            Professional pet sitting and dog walking. Your furry friends in safe, loving hands.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Book a Sitter</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border hover:bg-muted">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
