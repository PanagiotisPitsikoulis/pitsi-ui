"use client"

import Image from "next/image"
import Link from "next/link"

import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroProductSciFi() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/product-scifi/1.webp"
          alt="Tech product"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/15 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-primary/10 blur-[80px]" />

      {/* Scan line overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsl(var(--primary)/0.05)_2px,hsl(var(--primary)/0.05)_4px)]" />
      </div>

      {/* Floating UI elements */}
      <div className="absolute top-32 right-20 w-48 h-24 rounded-xl bg-card/80 border border-border backdrop-blur-sm hidden xl:flex items-center justify-center overflow-hidden">
        <span className="text-shadow text-xs font-mono">SYSTEM ONLINE</span>
        <BorderBeam size={80} duration={4} colorFrom="hsl(var(--foreground))" colorTo="hsl(var(--border))" />
      </div>
      <div className="absolute bottom-40 left-16 w-40 h-20 rounded-xl bg-card/80 border border-border backdrop-blur-sm hidden xl:flex items-center justify-center">
        <span className="text-shadow text-xs font-mono">v2.0.45</span>
      </div>

      {/* Content - Tech terminal style */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="text-shadow text-xs font-mono tracking-wider">
              NEW_RELEASE_v2.0
            </span>
          </div>
          <p className="text-shadow font-mono text-[10px] md:text-xs mb-4">
            $ sudo upgrade --to=future
          </p>
          <h1 className="font-display text-shadow-lg font-mono text-center text-[3.5rem] leading-[0.8] sm:text-6xl md:text-[9rem] text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.5)] uppercase font-black">
            Next Gen
          </h1>
          <h1 className="font-display text-shadow-lg font-mono text-center text-[4rem] leading-[0.8] sm:text-7xl md:text-[11rem] text-foreground uppercase font-bold tracking-tight">
            Tech
          </h1>
          <p className="text-shadow font-mono text-[10px] md:text-xs mt-6 tracking-wider">
            {"["} <span className="text-foreground">AVAILABLE</span> {"]"} • SHIPS WORLDWIDE
          </p>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-center text-sm md:text-base max-w-sm mx-auto">
            Cutting-edge gadgets and gear. Experience the future now.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Explore Tech</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-muted">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
