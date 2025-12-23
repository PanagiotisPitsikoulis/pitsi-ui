"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"

export function HeroServicePlants() {
  return (
    <section className="flex min-h-[70svh] flex-col items-center justify-center px-6 py-24">
      {/* Tagline */}
      <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-brand">
        Curated Indoor Plants
      </p>

      {/* Main headline - centered, multi-line, tight line height */}
      <h1 className="display text-center text-[2.5rem] leading-[0.9] tracking-tight sm:text-5xl md:text-8xl">
        The Plant Shop
        <br />
        Your Home Deserves
      </h1>

      {/* Subheading */}
      <p className="mt-8 text-center text-lg text-muted-foreground md:text-3xl">
        Premium greenery. Expert guidance.
        <br />
        Delivered with care.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-row gap-3">
        <Link href="#">
          <HeroButton>Shop Plants</HeroButton>
        </Link>
        <Button variant="outline" size="lg" className="rounded-full px-8">
          Care Guide
        </Button>
      </div>
    </section>
  )
}
