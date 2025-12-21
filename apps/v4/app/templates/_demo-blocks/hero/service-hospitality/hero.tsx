"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroServiceHospitality() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Full-bleed luxury background with gradient */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/service-hospitality/1.webp"
          alt="Luxury hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/60 to-background/50" />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-muted/50 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-muted/50 blur-[120px]" />

      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-border" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-border" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-border" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-1/3 bg-gradient-to-b from-border to-transparent hidden lg:block" />
      <div className="absolute bottom-0 right-1/3 w-px h-1/4 bg-gradient-to-t from-border to-transparent hidden lg:block" />

      {/* Elegant corner accent */}
      <div className="absolute top-20 right-20 hidden lg:block opacity-40">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-foreground" strokeWidth="1">
          <path d="M0 50 L50 50 L50 0" />
          <path d="M10 50 L50 50 L50 10" />
        </svg>
      </div>

      {/* Star rating accent */}
      <div className="absolute bottom-20 left-20 hidden lg:flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>

      {/* Content */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-border bg-muted/50 mb-8">
            <span className="text-shadow text-xs font-medium tracking-[0.3em] uppercase">
              Five Star Experience
            </span>
          </div>
          <p className="text-shadow text-sm md:text-lg tracking-[0.4em] mb-4 font-light uppercase">
            Welcome to
          </p>
          <h1 className="text-shadow-lg font-serif italic text-center text-[3rem] leading-[0.9] sm:text-6xl md:text-[8rem] text-foreground">
            Timeless
          </h1>
          <h1 className="text-shadow-lg font-serif italic text-center text-[4rem] leading-[0.85] sm:text-7xl md:text-[11rem] text-foreground">
            Luxury
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-center text-sm md:text-lg max-w-md mx-auto leading-relaxed">
            Exceptional hospitality and unforgettable experiences. Where every moment is crafted for you.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Reserve Now</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-muted">
                View Suites
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
