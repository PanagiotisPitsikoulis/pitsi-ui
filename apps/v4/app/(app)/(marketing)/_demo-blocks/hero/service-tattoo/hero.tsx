"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { getThemeStyle, tattooTheme } from "../../_themes"

export function HeroServiceTattoo() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-zinc-950"
      style={getThemeStyle(tattooTheme, "dark")}
    >
      {/* Ink splatter/texture background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/tattoo.jpg"
          alt="Tattoo studio"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-zinc-950/80" />
      </div>

      {/* Ink splatter accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-red-500 blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-500 blur-[100px]" />
      </div>

      {/* Decorative ink drops */}
      <div className="absolute top-20 right-20 opacity-20 hidden lg:block">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="white">
          <path d="M30 0C30 0 60 40 60 55C60 70 47 80 30 80C13 80 0 70 0 55C0 40 30 0 30 0Z"/>
        </svg>
      </div>
      <div className="absolute bottom-32 left-16 opacity-15 hidden lg:block rotate-[-20deg]">
        <svg width="40" height="55" viewBox="0 0 60 80" fill="white">
          <path d="M30 0C30 0 60 40 60 55C60 70 47 80 30 80C13 80 0 70 0 55C0 40 30 0 30 0Z"/>
        </svg>
      </div>

      {/* Needle line accent */}
      <div className="absolute top-0 left-1/3 w-px h-1/2 bg-red-500/20 hidden lg:block" />

      {/* Portfolio thumbnails */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
        <div className="w-24 h-24 rounded-lg overflow-hidden border border-zinc-800 opacity-60 hover:opacity-100 transition-opacity">
          <img src="/images/hero/tattoo-1.jpg" alt="Portfolio" className="w-full h-full object-cover" />
        </div>
        <div className="w-24 h-24 rounded-lg overflow-hidden border border-zinc-800 opacity-60 hover:opacity-100 transition-opacity">
          <img src="/images/hero/tattoo-2.jpg" alt="Portfolio" className="w-full h-full object-cover" />
        </div>
        <div className="w-24 h-24 rounded-lg overflow-hidden border border-zinc-800 opacity-60 hover:opacity-100 transition-opacity">
          <img src="/images/hero/tattoo-3.jpg" alt="Portfolio" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content - Edgy asymmetric layout */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center">
          <p className="text-zinc-600 text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8">
            Custom Tattoo Artistry
          </p>
          <h1 className="text-center text-[4rem] leading-[0.75] tracking-[-0.05em] sm:text-7xl md:text-[12rem] text-white font-black uppercase">
            Ink
          </h1>
          <h1 className="text-center text-[3rem] leading-[0.75] tracking-[-0.05em] sm:text-6xl md:text-[10rem] text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.3)] font-black uppercase">
            Your
          </h1>
          <h1 className="text-center text-[4rem] leading-[0.75] tracking-[-0.05em] sm:text-7xl md:text-[12rem] text-red-500 font-black uppercase">
            Story
          </h1>
          <Spacer size="lg" sizeMobile="md" />
          <p className="text-zinc-500 text-center text-sm md:text-base max-w-sm mx-auto">
            Custom tattoo artistry. Where your vision becomes permanent art.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Book Consultation</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-zinc-700 text-white hover:bg-zinc-800">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
