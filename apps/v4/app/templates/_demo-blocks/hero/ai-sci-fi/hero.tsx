"use client"

import Image from "next/image"
import Link from "next/link"

import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroAISciFi() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="100,0 100,100 40,100 60,0"
            className="fill-primary/10"
          />
        </svg>
      </div>

      {/* Neon accent lines */}
      <div className="absolute top-0 right-[45%] w-px h-1/2 bg-gradient-to-b from-border to-transparent" />
      <div className="absolute top-1/4 right-[40%] w-px h-1/3 bg-gradient-to-b from-border to-transparent" />

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsl(var(--primary)/0.03)_2px,hsl(var(--primary)/0.03)_4px)]" />
      </div>

      {/* Full-height image panel - more prominent */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <Image
          src="/placeholders/blocks/ai-sci-fi/1.webp"
          alt="Sci-Fi AI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 overflow-hidden">
          <BorderBeam
            size={200}
            duration={6}
            colorFrom="hsl(var(--primary))"
            colorTo="hsl(var(--accent))"
            borderWidth={2}
          />
        </div>
      </div>

      {/* Glow orbs */}
      <div className="absolute top-20 left-20 h-40 w-40 rounded-full bg-primary/15 blur-[80px]" />
      <div className="absolute bottom-20 left-1/4 h-56 w-56 rounded-full bg-accent/15 blur-[100px]" />
      <div className="absolute top-1/2 right-1/3 h-32 w-32 rounded-full bg-primary/10 blur-[60px]" />

      {/* Content - Rotated accent text */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-start justify-center px-6 z-10 lg:max-w-[55%]">
        <div className="relative">
          {/* Rotated side text */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden xl:block">
            <span className="text-shadow text-xs font-mono tracking-[0.5em] uppercase whitespace-nowrap">
              Science Fiction Reality
            </span>
          </div>

          <p className="text-shadow font-mono text-[10px] md:text-xs tracking-normal mb-6 max-lg:text-center max-lg:w-full">
            {">"} init --dimension=future
          </p>
          <h1 className="font-display text-shadow-lg font-mono text-left text-[3rem] leading-[0.85] sm:text-5xl md:text-[8rem] text-foreground uppercase font-light tracking-tight max-lg:text-center max-lg:w-full">
            Synthetic
          </h1>
          <h1 className="font-display text-shadow-lg font-mono text-left text-[4rem] leading-[0.8] sm:text-7xl md:text-[10rem] text-transparent [-webkit-text-stroke:2px_hsl(var(--foreground))] max-lg:text-center max-lg:w-full uppercase font-black">
            Reality
          </h1>
          <div className="flex items-center gap-3 mt-4 max-lg:justify-center">
            <span className="text-shadow font-mono text-xs">v2.0.47</span>
            <div className="w-2 h-2 rounded-full bg-border" />
            <span className="text-shadow font-mono text-xs uppercase tracking-widest">system online</span>
          </div>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-left text-base md:text-lg max-w-lg max-lg:text-center max-lg:w-full max-lg:mx-auto">
            Enter the next dimension. Where science fiction becomes reality.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 max-lg:w-full max-lg:justify-center">
            <Link href="#">
              <HeroButton>Explore Now</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-muted">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
