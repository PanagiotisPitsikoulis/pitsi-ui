"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroServicePsychologist() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Full-bleed calming background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/service-psychologist/1.webp"
          alt="Peaceful environment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      {/* Soft accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-muted/50 blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-muted/50 blur-[60px]" />

      {/* Content - Gentle centered with breathing room */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 mb-8">
            <svg className="w-3 h-3 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span className="text-shadow text-xs font-medium tracking-wider">
              You Are Not Alone
            </span>
          </div>
          <h1 className="text-shadow-lg font-serif italic text-center text-[2.5rem] leading-none sm:text-4xl md:text-[5rem] text-foreground">
            You Are Enough
          </h1>
          <h1 className="text-shadow-lg text-center text-[4rem] leading-[0.75] sm:text-7xl md:text-[11rem] text-foreground font-extralight tracking-widest uppercase">
            Begin
          </h1>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-8 md:w-16 h-px bg-border" />
            <p className="text-shadow text-xs md:text-sm tracking-[0.3em] uppercase">
              Compassionate Care
            </p>
            <div className="w-8 md:w-16 h-px bg-border" />
          </div>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-center text-sm md:text-lg max-w-md mx-auto leading-relaxed">
            Professional therapy services. A safe space for healing and growth.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Book Session</HeroButton>
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
