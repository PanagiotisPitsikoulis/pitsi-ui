"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroServiceMakeup() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Split layout - beauty image on right like Fashion */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <Image
          src="/placeholders/blocks/service-makeup/1.webp"
          alt="Makeup artistry"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      {/* Soft accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-muted/50 blur-[80px]" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-muted/50 blur-[60px]" />

      {/* Shimmer effects on left side */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-foreground/40" />
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-border" />
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 rounded-full bg-border" />
      </div>

      {/* Content */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 mb-8">
            <svg className="w-3 h-3 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span className="text-shadow text-xs font-medium tracking-wider">
              Professional Artistry
            </span>
          </div>
          <p className="text-shadow text-xs md:text-sm tracking-[0.4em] mb-4 uppercase">
            Artistry by Design
          </p>
          <h1 className="text-shadow-lg text-center text-[4rem] leading-[0.75] sm:text-7xl md:text-[11rem] text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.5)] font-black uppercase tracking-tighter">
            Be
          </h1>
          <div className="flex items-baseline justify-center gap-2 md:gap-4">
            <h1 className="text-shadow-lg font-serif italic text-[3rem] leading-none sm:text-5xl md:text-[8rem] text-foreground">
              Bold
            </h1>
            <span className="text-shadow text-2xl md:text-4xl">/</span>
            <h1 className="text-shadow-lg font-serif italic text-[3rem] leading-none sm:text-5xl md:text-[8rem] text-foreground">
              Beautiful
            </h1>
          </div>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-center text-sm md:text-lg max-w-md mx-auto leading-relaxed">
            Professional makeup artistry for every occasion. Bridal, editorial, and everyday beauty.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Book Session</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-muted">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
