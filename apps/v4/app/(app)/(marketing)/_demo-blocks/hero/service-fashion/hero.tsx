"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { fashionTheme, getThemeStyle } from "../../_themes"

export function HeroServiceFashion() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-zinc-950"
      style={getThemeStyle(fashionTheme, "dark")}
    >
      {/* Subtle geometric lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-zinc-800" />
        <div className="absolute top-0 right-1/3 w-px h-2/3 bg-zinc-800" />
        <div className="absolute bottom-1/4 left-0 w-1/2 h-px bg-zinc-800" />
      </div>

      {/* Fashion image - large editorial style */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <img
          src="/images/hero/fashion.jpg"
          alt="Fashion model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/40" />
        <div className="absolute left-0 inset-y-0 w-32 bg-zinc-950" style={{ background: 'linear-gradient(to right, #09090b, transparent)' }} />
      </div>

      {/* Floating lookbook thumbnails */}
      <div className="absolute left-8 bottom-32 hidden xl:flex flex-col gap-3">
        <div className="w-20 h-28 bg-zinc-900 border border-zinc-800 overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
          <img src="/images/hero/fashion-1.jpg" alt="Look 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-20 h-28 bg-zinc-900 border border-zinc-800 overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
          <img src="/images/hero/fashion-2.jpg" alt="Look 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-20 h-28 bg-zinc-900 border border-zinc-800 overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
          <img src="/images/hero/fashion-3.jpg" alt="Look 3" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Season tag */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <p className="text-zinc-600 text-[10px] tracking-[0.5em] uppercase">SS 2025</p>
      </div>

      {/* Content */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-start justify-center px-6 z-10 lg:max-w-[50%]">
        <div className="relative">
          <p className="text-zinc-500 text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8">
            New Collection
          </p>
          <h1 className="text-left text-[3rem] leading-[0.85] tracking-tight sm:text-6xl md:text-[7rem] text-white uppercase font-extralight">
            Redefine
          </h1>
          <h1 className="text-left text-[4rem] leading-[0.8] tracking-tight sm:text-7xl md:text-[10rem] text-white uppercase font-bold">
            Style
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-16 h-px bg-white/30" />
            <p className="text-zinc-500 text-xs tracking-widest uppercase">Spring Summer</p>
          </div>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-zinc-400 text-left text-sm md:text-base max-w-sm">
            Curated collections for the modern individual. Timeless pieces, contemporary vision.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3">
            <Link href="#">
              <HeroButton>Shop Collection</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-zinc-700 text-white hover:bg-zinc-800">
                Lookbook
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
