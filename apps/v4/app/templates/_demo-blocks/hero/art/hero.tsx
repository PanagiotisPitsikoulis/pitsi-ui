"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroArt() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Gallery frames */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 left-8 w-48 h-64 rotate-[-8deg] hidden md:block">
          <div className="relative w-full h-full bg-card rounded-sm shadow-xl p-2">
            <Image src="/placeholders/blocks/art/1.webp" alt="Artwork 1" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute top-12 -right-8 w-56 h-72 rotate-[6deg] hidden lg:block">
          <div className="relative w-full h-full bg-card rounded-sm shadow-xl p-2">
            <Image src="/placeholders/blocks/art/4.webp" alt="Artwork 2" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute -bottom-8 left-20 w-44 h-56 rotate-[5deg] hidden md:block">
          <div className="relative w-full h-full bg-card rounded-sm shadow-xl p-2">
            <Image src="/placeholders/blocks/art/7.webp" alt="Artwork 3" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute -bottom-4 right-16 w-52 h-64 rotate-[-4deg] hidden lg:block">
          <div className="relative w-full h-full bg-card rounded-sm shadow-xl p-2">
            <Image src="/placeholders/blocks/art/9.webp" alt="Artwork 4" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container flex min-h-[100svh] w-full flex-col items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <p className="text-shadow text-sm md:text-base tracking-wide mb-6 font-medium italic" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            Gallery Exhibition — 2024
          </p>

          <h1
            className="font-display text-shadow-lg text-[2.5rem] leading-[1] tracking-normal text-foreground italic sm:text-5xl md:text-7xl"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            Where
          </h1>
          <h1
            className="font-display text-shadow-lg text-[4rem] leading-[0.9] tracking-normal text-foreground italic sm:text-7xl md:text-[10rem] lg:text-[12rem]"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            Creativity
          </h1>
          <h1
            className="font-display text-shadow-lg text-[2.5rem] leading-[1] tracking-normal text-foreground italic sm:text-5xl md:text-7xl"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            Lives
          </h1>

          <Spacer size="xl" sizeMobile="lg" />

          <p className="text-shadow text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed max-w-2xl mx-auto">
            Discover extraordinary artworks from emerging and established artists. A curated collection that speaks to the soul.
          </p>

          <Spacer size="xl" sizeMobile="lg" />

          <div className="flex flex-row items-center justify-center gap-3">
            <Link href="#">
              <HeroButton>View Gallery</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border hover:bg-muted">About Artists</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
