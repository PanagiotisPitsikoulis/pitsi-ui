"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroServiceGym() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/service-gym/1.webp"
          alt="Gym"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="relative z-10 container flex min-h-[100svh] w-full flex-col items-center justify-center px-6">
        <div className="text-center w-full">
          <p className="text-shadow text-sm md:text-base tracking-[0.4em] uppercase mb-8 font-bold">
            Fitness Center
          </p>

          <h1
            className="font-display text-shadow-lg text-5xl leading-[0.85] font-black tracking-[-0.02em] text-foreground uppercase sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif' }}
          >
            Push
          </h1>
          <h1
            className="font-display text-shadow-lg text-5xl leading-[0.85] font-black tracking-[-0.02em] text-foreground uppercase sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif' }}
          >
            Your
          </h1>
          <h1
            className="font-display text-shadow-lg text-5xl leading-[0.85] font-black tracking-[-0.02em] text-foreground uppercase sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif' }}
          >
            Limits
          </h1>

          <Spacer size="xl" sizeMobile="lg" />

          <p className="text-shadow text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed max-w-2xl mx-auto">
            State-of-the-art fitness center with expert trainers dedicated to helping you achieve real, lasting results.
          </p>

          <Spacer size="xl" sizeMobile="lg" />

          <div className="flex flex-row items-center justify-center gap-3">
            <Link href="#">
              <HeroButton>Start Free Trial</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border hover:bg-muted">View Classes</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
