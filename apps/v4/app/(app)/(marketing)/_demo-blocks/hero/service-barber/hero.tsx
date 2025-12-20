"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { barberTheme, getThemeStyle } from "../../_themes"

export function HeroServiceBarber() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-zinc-950"
      style={getThemeStyle(barberTheme, "dark")}
    >
      {/* Split layout - image on right */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <img
          src="/images/hero/barber.jpg"
          alt="Barbershop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 opacity-10 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1"/>
          <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="1"/>
          <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="1"/>
        </svg>
      </div>

      {/* Barber pole stripes accent */}
      <div className="absolute left-0 top-0 w-2 h-full overflow-hidden hidden lg:block">
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-blue-600" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-blue-600" />
          <div className="flex-1 bg-white" />
        </div>
      </div>

      {/* Content - Bold stacked with contrast */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-start justify-center px-6 z-10 lg:max-w-[55%]">
        <div className="relative">
          <p className="font-mono text-zinc-500 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 max-lg:text-center max-lg:w-full">
            Est. 1952 — Premium Grooming
          </p>
          <h1 className="font-mono text-left text-[3rem] leading-[0.85] tracking-tight sm:text-6xl md:text-[7rem] text-white max-lg:text-center max-lg:w-full uppercase font-normal">
            Classic Cuts
          </h1>
          <h1 className="font-mono text-left text-[3rem] leading-[0.85] tracking-tight sm:text-6xl md:text-[7rem] text-zinc-600 max-lg:text-center max-lg:w-full uppercase font-normal">
            Modern Style
          </h1>
          <Spacer size="lg" sizeMobile="md" />
          <p className="text-zinc-500 text-left text-sm md:text-base max-w-md max-lg:text-center max-lg:w-full max-lg:mx-auto">
            Premium barbershop experience. Where tradition meets trend.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 max-lg:w-full max-lg:justify-center">
            <Link href="#">
              <HeroButton>Book Appointment</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-zinc-700 text-white hover:bg-zinc-800">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
