"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroServiceFashion() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Geometric lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-border via-muted to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-2/3 bg-gradient-to-b from-border to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-border to-transparent" />
      </div>

      {/* Fashion image - large editorial style */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <Image
          src="/placeholders/blocks/service-fashion/1.webp"
          alt="Fashion model"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-background to-transparent" />
      </div>

      {/* Lookbook thumbnails */}
      <div className="absolute left-8 bottom-32 hidden xl:flex flex-col gap-3">
        <div className="relative w-20 h-28 bg-card border border-border overflow-hidden opacity-60">
          <Image src="/placeholders/blocks/service-fashion/3.webp" alt="Look 1" fill className="object-cover" />
        </div>
        <div className="relative w-20 h-28 bg-card border border-border overflow-hidden opacity-60">
          <Image src="/placeholders/blocks/service-fashion/5.webp" alt="Look 2" fill className="object-cover" />
        </div>
        <div className="relative w-20 h-28 bg-card border border-border overflow-hidden opacity-60">
          <Image src="/placeholders/blocks/service-fashion/7.webp" alt="Look 3" fill className="object-cover" />
        </div>
      </div>

      {/* Season tag */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <p className="text-muted-foreground text-[10px] tracking-[0.5em] uppercase">SS 2025</p>
      </div>

      {/* Subtle accent glow */}
      <div className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-foreground/5 blur-[80px]" />

      {/* Content */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-start justify-center px-6 z-10 lg:max-w-[50%]">
        <div className="relative">
          <p className="text-shadow text-muted-foreground text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8">
            New Collection
          </p>
          <h1 className="text-shadow-lg text-left text-[3rem] leading-[0.85] tracking-tight sm:text-6xl md:text-[7rem] text-foreground uppercase font-extralight">
            Redefine
          </h1>
          <h1 className="text-shadow-lg text-left text-[4rem] leading-[0.8] tracking-tight sm:text-7xl md:text-[10rem] text-foreground uppercase font-bold">
            Style
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-16 h-px bg-border" />
            <p className="text-shadow text-muted-foreground text-xs tracking-widest uppercase">Spring Summer</p>
          </div>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-left text-sm md:text-base max-w-sm">
            Curated collections for the modern individual. Timeless pieces, contemporary vision.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3">
            <Link href="#">
              <HeroButton>Shop Collection</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-muted">
                Lookbook
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
