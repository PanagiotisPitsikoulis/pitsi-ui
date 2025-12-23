"use client"

import Image from "next/image"
import Link from "next/link"

import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroAI() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/ai/1.webp"
          alt="AI visualization"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      {/* Accent glow effects */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/3 h-48 w-48 rounded-full bg-primary/10 blur-[80px]" />

      {/* Content - Asymmetric left-aligned with stroke contrast */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-start justify-center px-6 z-10 lg:max-w-[60%]">
        <div className="relative max-lg:text-center max-lg:w-full">
          <p className="text-shadow text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8">
            Next Generation Intelligence
          </p>
          <h1 className="font-display text-shadow-lg text-left max-lg:text-center text-[3.5rem] leading-[0.85] sm:text-6xl md:text-[9rem] text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.5)] uppercase font-black tracking-tighter">
            Beyond
          </h1>
          <h1 className="font-display text-shadow-lg text-left max-lg:text-center text-[4.5rem] leading-[0.8] sm:text-7xl md:text-[11rem] text-foreground uppercase font-black tracking-tighter">
            Human
          </h1>
          <div className="flex items-center gap-4 mt-6 max-lg:justify-center">
            <div className="w-12 h-px bg-border" />
            <p className="text-shadow text-sm md:text-base font-light tracking-widest uppercase">Artificial Intelligence</p>
          </div>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-left max-lg:text-center text-base md:text-lg max-w-md max-lg:mx-auto">
            Unlock limitless possibilities. Powered by next-gen AI technology.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 max-lg:justify-center">
            <Link href="#">
              <HeroButton>Try AI Now</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-muted">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
