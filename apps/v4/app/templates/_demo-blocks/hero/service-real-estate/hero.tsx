"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroServiceRealEstate() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/service-real-estate/1.webp"
          alt="Luxury property"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      {/* Subtle orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-muted/50 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-muted/50 blur-[100px]" />
      </div>

      {/* Geometric accents */}
      <div className="absolute top-20 left-1/3 w-20 h-20 border border-border hidden lg:block" />
      <div className="absolute bottom-32 right-1/3 w-16 h-16 border border-border/40 rotate-45 hidden lg:block" />

      {/* Content */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 mb-8">
            <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span className="text-shadow text-xs font-medium tracking-wider">
              Premium Properties
            </span>
          </div>
          <h1 className="text-shadow-lg font-serif italic text-center text-[3rem] leading-[0.9] sm:text-5xl md:text-[7rem] text-foreground">
            Find your
          </h1>
          <h1 className="text-shadow-lg text-center text-[4rem] leading-[0.75] sm:text-7xl md:text-[12rem] text-transparent [-webkit-text-stroke:2px_hsl(var(--foreground))] font-black uppercase tracking-tighter">
            Forever
          </h1>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="w-12 md:w-20 h-px bg-border" />
            <h1 className="text-shadow-lg text-center text-[2.5rem] leading-none sm:text-4xl md:text-[6rem] uppercase font-black tracking-tight text-foreground">
              Home
            </h1>
            <div className="w-12 md:w-20 h-px bg-border" />
          </div>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-center text-sm md:text-lg max-w-md mx-auto leading-relaxed">
            Exclusive properties and expert guidance. Your journey to the perfect home starts here.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Browse Listings</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border hover:bg-muted">
                Schedule Viewing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
