"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { getThemeStyle, gymTheme } from "../../_themes"

export function HeroServiceGym() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden"
      style={getThemeStyle(gymTheme, "dark")}
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/gym.jpg"
          alt="Fitness center"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Dynamic lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-1/2 bg-orange-500/20" />
        <div className="absolute top-1/4 right-1/3 w-px h-1/2 bg-orange-500/20" />
      </div>


      {/* Content - Bold energetic with strong contrast */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
            <span className="text-orange-400 text-xs font-bold tracking-[0.3em] uppercase">
              Start Your Journey
            </span>
          </div>
          <h1 className="text-center text-[4rem] leading-[0.75] tracking-[-0.03em] sm:text-7xl md:text-[10rem] text-white uppercase font-black">
            Transform
          </h1>
          <h1 className="text-center text-[3rem] leading-[0.75] tracking-[-0.03em] sm:text-6xl md:text-[8rem] text-white/30 uppercase font-black">
            Your
          </h1>
          <h1 className="text-center text-[4rem] leading-[0.75] tracking-[-0.03em] sm:text-7xl md:text-[11rem] text-orange-500 uppercase font-black">
            Body
          </h1>
          <h1 className="text-center text-[4rem] leading-[0.75] tracking-[-0.03em] sm:text-7xl md:text-[11rem] text-orange-500 uppercase font-black">
            Mind
          </h1>
          <Spacer size="lg" sizeMobile="md" />
          <p className="text-zinc-400 text-center text-sm md:text-base max-w-md mx-auto">
            State-of-the-art fitness center. Expert trainers, real results.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Start Free Trial</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10">
                View Classes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
