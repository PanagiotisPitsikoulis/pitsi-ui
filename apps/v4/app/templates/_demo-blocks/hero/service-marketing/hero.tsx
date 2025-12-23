"use client"

import Image from "next/image"
import Link from "next/link"

import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroServiceMarketing() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Full-bleed background image - more visible */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/service-marketing/1.webp"
          alt="Marketing strategy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-muted/50 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-muted/50 blur-[120px]" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-muted/50 blur-[100px]" />
      </div>

      {/* Floating UI cards */}
      <div className="absolute top-32 right-20 w-56 h-32 rounded-xl bg-card/60 border border-border backdrop-blur-sm hidden xl:flex flex-col justify-center items-center overflow-hidden">
        <div className="text-3xl font-bold text-foreground">+247%</div>
        <div className="text-xs text-muted-foreground mt-1">Growth Rate</div>
        <BorderBeam size={80} duration={4} colorFrom="hsl(var(--foreground))" colorTo="hsl(var(--border))" />
      </div>
      <div className="absolute bottom-40 left-16 w-48 h-28 rounded-xl bg-card/60 border border-border backdrop-blur-sm hidden xl:flex flex-col justify-center items-center">
        <div className="text-2xl font-bold text-foreground">10M+</div>
        <div className="text-xs text-muted-foreground mt-1">Impressions</div>
      </div>
      <div className="absolute top-1/2 right-1/3 w-40 h-24 rounded-xl bg-card/40 border border-border backdrop-blur-sm hidden xl:flex flex-col justify-center items-center">
        <div className="text-xl font-bold text-foreground">98%</div>
        <div className="text-xs text-muted-foreground mt-1">Satisfaction</div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 left-1/4 w-px h-32 bg-gradient-to-b from-border to-transparent hidden lg:block" />
      <div className="absolute bottom-20 right-1/4 w-32 h-px bg-gradient-to-r from-border to-transparent hidden lg:block" />

      {/* Floating icons */}
      <div className="absolute top-1/3 left-20 opacity-20 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-foreground" strokeWidth="1.5">
          <path d="M18 20V10"/>
          <path d="M12 20V4"/>
          <path d="M6 20v-6"/>
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-20 opacity-20 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-foreground" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="text-shadow text-xs font-medium tracking-wider uppercase">
              Digital Marketing Agency
            </span>
          </div>
          <p className="text-shadow font-mono text-xs md:text-sm mb-4">
            {">"} brand.transform()
          </p>
          <h1 className="font-display text-shadow-lg text-center text-[3rem] leading-[0.9] sm:text-5xl md:text-[8rem] text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.5)] font-black uppercase tracking-tighter">
            Amplify
          </h1>
          <h1 className="font-display text-shadow-lg text-center text-[4rem] leading-[0.8] sm:text-7xl md:text-[11rem] text-foreground font-black uppercase tracking-tighter">
            Growth
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="px-3 py-1 rounded-full border border-border bg-muted/50">
              <span className="text-shadow text-xs font-mono">+247% ROI</span>
            </div>
            <div className="px-3 py-1 rounded-full border border-border bg-muted/50">
              <span className="text-shadow text-xs font-mono">10M+ Reach</span>
            </div>
          </div>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-center text-sm md:text-lg max-w-md mx-auto leading-relaxed">
            Data-driven marketing strategies that deliver results. Transform your brand's digital presence.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Get Started</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-muted">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
