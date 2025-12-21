"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroServiceTattoo() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/service-tattoo/1.webp"
          alt="Tattoo studio"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="relative z-10 container flex min-h-[100svh] w-full flex-col justify-end px-6 pb-16 md:pb-24">
        <div className="w-full">
          <h1
            className="text-shadow-lg text-5xl leading-[0.9] font-black tracking-tight text-foreground uppercase sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Ink Your Story
          </h1>
        </div>

        <Spacer size="lg" sizeMobile="md" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="text-shadow max-w-lg text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed">
            Custom tattoo artistry where your vision becomes permanent art. Every piece tells a story — let us help write yours.
          </p>
          <div className="flex flex-row items-center gap-3">
            <Link href="#">
              <HeroButton>Book Consultation</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border hover:bg-muted">View Portfolio</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
