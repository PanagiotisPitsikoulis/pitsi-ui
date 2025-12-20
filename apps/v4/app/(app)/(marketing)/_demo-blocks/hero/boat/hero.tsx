"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { boatTheme, getThemeStyle } from "../../_themes"

export function HeroBoat() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden"
      style={getThemeStyle(boatTheme, "dark")}
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/boat.jpg"
          alt="Ocean view"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-sky-950/70" />
      </div>

      {/* Wave pattern overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V120H0V60Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Floating compass accent */}
      <div className="absolute top-20 right-20 w-24 h-24 opacity-20 hidden lg:block">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2"/>
          <path d="M50 10L55 45H45L50 10Z" fill="white"/>
          <path d="M50 90L45 55H55L50 90Z" fill="white" opacity="0.5"/>
          <path d="M10 50L45 45V55L10 50Z" fill="white" opacity="0.5"/>
          <path d="M90 50L55 55V45L90 50Z" fill="white"/>
        </svg>
      </div>

      {/* Content - Bottom aligned with horizontal title */}
      <div className="relative container flex min-h-[100svh] w-full flex-col justify-end px-6 z-10 pb-20 md:pb-32">
        <div className="max-w-4xl">
          <p className="text-sky-300/50 text-[10px] md:text-xs tracking-[0.6em] uppercase mb-4">
            Premium Yacht Charter
          </p>
          <h1 className="text-left text-[3rem] leading-[0.85] tracking-[0.15em] sm:text-6xl md:text-[8rem] text-white uppercase font-extralight">
            Set Sail
          </h1>
          <h1 className="text-left text-[3rem] leading-[0.85] tracking-[0.15em] sm:text-6xl md:text-[8rem] text-white uppercase font-extralight">
            for Adventure
          </h1>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex items-center gap-6 md:gap-10">
            <p className="text-sky-100/50 text-sm md:text-base max-w-xs">
              Luxury yachts and boat rentals. Your ocean adventure awaits.
            </p>
            <div className="flex flex-row gap-3">
              <Link href="#">
                <HeroButton>Book Now</HeroButton>
              </Link>
              <Link href="#">
                <Button variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10">
                  View Fleet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
