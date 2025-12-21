"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroBoat() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/boat/1.webp"
          alt="Ocean view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 text-center">
        <p className="text-shadow text-sm md:text-base tracking-[0.5em] uppercase mb-8 font-medium">
          Premium Charter
        </p>

        <h1
          className="text-shadow-lg text-[3rem] leading-[0.95] font-light tracking-[0.1em] text-foreground uppercase sm:text-5xl md:text-7xl lg:text-9xl"
          style={{ fontFamily: 'Optima, Candara, Noto Sans, sans-serif' }}
        >
          Set Sail
        </h1>
        <h1
          className="text-shadow-lg text-[3rem] leading-[0.95] font-light tracking-[0.1em] text-foreground uppercase sm:text-5xl md:text-7xl lg:text-9xl"
          style={{ fontFamily: 'Optima, Candara, Noto Sans, sans-serif' }}
        >
          For Adventure
        </h1>

        <Spacer size="xl" sizeMobile="lg" />

        <p className="text-shadow text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed max-w-2xl">
          Luxury yachts and boat rentals for unforgettable ocean adventures. Experience the freedom of the open water.
        </p>

        <Spacer size="xl" sizeMobile="lg" />

        <div className="flex flex-row items-center gap-3">
          <Link href="#">
            <HeroButton>Book Now</HeroButton>
          </Link>
          <Link href="#">
            <Button variant="outline" size="lg" className="rounded-full border-border hover:bg-muted">View Fleet</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
