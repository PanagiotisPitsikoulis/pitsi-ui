"use client"

import Link from "next/link"

import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { aiSciFiTheme, getThemeStyle } from "../../_themes"

export function HeroAISciFi() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-zinc-950"
      style={getThemeStyle(aiSciFiTheme, "dark")}
    >
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="100,0 100,100 40,100 60,0"
            fill="rgba(6, 182, 212, 0.1)"
          />
        </svg>
      </div>

      {/* Neon accent lines */}
      <div className="absolute top-0 right-[45%] w-px h-1/2 bg-cyan-500/30" />

      {/* Image panel */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[80%] hidden lg:block">
        <div className="relative w-full h-full rounded-l-3xl overflow-hidden">
          <img
            src="/images/hero/ai-sci-fi.jpg"
            alt="Sci-Fi AI"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-zinc-950/60" />
          <BorderBeam
            size={150}
            duration={6}
            colorFrom="#06b6d4"
            colorTo="#a855f7"
            borderWidth={2}
          />
        </div>
      </div>

      {/* Floating glow orbs */}
      <div className="absolute top-20 left-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-[80px]" />
      <div className="absolute bottom-20 left-1/4 h-56 w-56 rounded-full bg-purple-500/10 blur-[100px]" />

      {/* Content - Rotated accent text */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-start justify-center px-6 z-10 lg:max-w-[55%]">
        <div className="relative">
          {/* Rotated side text */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden xl:block">
            <span className="text-cyan-500/30 text-xs font-mono tracking-[0.5em] uppercase whitespace-nowrap">
              Science Fiction Reality
            </span>
          </div>

          <p className="font-mono text-cyan-400/60 text-[10px] md:text-xs tracking-normal mb-6 max-lg:text-center max-lg:w-full">
            {">"} dimension.load(02)
          </p>
          <h1 className="font-mono text-left text-[2.5rem] leading-[0.9] tracking-normal max-lg:text-[3rem] sm:text-5xl md:text-[6rem] text-white max-lg:text-center max-lg:w-full uppercase">
            Beyond the
          </h1>
          <h1 className="font-mono text-left text-[3rem] leading-[0.85] tracking-normal max-lg:text-[4rem] sm:text-6xl md:text-[8rem] text-cyan-400 max-lg:text-center max-lg:w-full uppercase">
            Digital
          </h1>
          <h1 className="font-mono text-left text-[3rem] leading-[0.85] tracking-normal max-lg:text-[4rem] sm:text-6xl md:text-[8rem] text-white max-lg:text-center max-lg:w-full uppercase">
            Horizon
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-zinc-500 text-left text-base md:text-lg max-w-lg max-lg:text-center max-lg:w-full max-lg:mx-auto">
            Enter the next dimension. Where science fiction becomes reality.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 max-lg:w-full max-lg:justify-center">
            <Link href="#">
              <HeroButton>Explore Now</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-zinc-700 text-white hover:bg-zinc-800">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
