"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroServiceBarber() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholders/blocks/service-barber/1.webp"
          alt="Barbershop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 text-center">
        <p className="text-shadow text-sm md:text-base tracking-[0.5em] uppercase mb-8 font-medium">
          Est. 1952
        </p>

        <h1
          className="font-display text-shadow-lg text-[3rem] leading-[0.9] tracking-tight text-foreground uppercase font-bold sm:text-6xl md:text-8xl lg:text-[10rem]"
          style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
        >
          Classic
        </h1>
        <h1
          className="font-display text-shadow-lg text-[3rem] leading-[0.9] tracking-tight text-foreground uppercase font-bold sm:text-6xl md:text-8xl lg:text-[10rem]"
          style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
        >
          Cuts
        </h1>

        <Spacer size="xl" sizeMobile="lg" />

        <p className="text-shadow text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed max-w-2xl">
          Premium barbershop experience where tradition meets trend. Expert barbers, timeless techniques, modern finishing.
        </p>

        <Spacer size="xl" sizeMobile="lg" />

        <div className="flex flex-row items-center gap-3">
          <Link href="#">
            <HeroButton>Book Now</HeroButton>
          </Link>
          <Link href="#">
            <Button variant="outline" size="lg" className="rounded-full border-border hover:bg-muted">Our Services</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
