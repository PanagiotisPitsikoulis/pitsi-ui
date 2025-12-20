"use client"

import Link from "next/link"

import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { getThemeStyle, marketingTheme } from "../../_themes"

export function HeroServiceMarketing() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-violet-950"
      style={getThemeStyle(marketingTheme, "dark")}
    >
      {/* Dynamic glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/20 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-500/15 blur-[120px]" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      {/* Floating UI cards */}
      <div className="absolute top-32 right-20 w-56 h-32 rounded-xl bg-violet-900/60 border border-violet-500/30 backdrop-blur-sm hidden xl:flex flex-col justify-center items-center overflow-hidden">
        <div className="text-3xl font-bold text-violet-300">+247%</div>
        <div className="text-xs text-violet-400 mt-1">Growth Rate</div>
        <BorderBeam size={80} duration={4} colorFrom="#8b5cf6" colorTo="#d946ef" />
      </div>
      <div className="absolute bottom-40 left-16 w-48 h-28 rounded-xl bg-violet-900/60 border border-violet-500/20 backdrop-blur-sm hidden xl:flex flex-col justify-center items-center">
        <div className="text-2xl font-bold text-fuchsia-300">10M+</div>
        <div className="text-xs text-violet-400 mt-1">Impressions</div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 left-1/4 w-px h-32 bg-violet-500/30 hidden lg:block" />
      <div className="absolute bottom-20 right-1/4 w-32 h-px bg-fuchsia-500/30 hidden lg:block" />

      {/* Floating icons */}
      <div className="absolute top-1/3 left-20 opacity-20 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-violet-400" strokeWidth="1.5">
          <path d="M18 20V10"/>
          <path d="M12 20V4"/>
          <path d="M6 20v-6"/>
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-20 opacity-20 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-fuchsia-400" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
            <span className="text-violet-300 text-xs font-medium tracking-wider uppercase">
              Digital Marketing Agency
            </span>
          </div>
          <p className="font-mono text-violet-500/50 text-xs md:text-sm mb-4">
            {">"} elevate_your_brand.execute()
          </p>
          <h1 className="text-center text-[3rem] leading-[0.9] tracking-tight sm:text-6xl md:text-[7rem] text-white font-bold uppercase">
            Amplify
          </h1>
          <h1 className="text-center text-[2.5rem] leading-[0.85] tracking-tight sm:text-5xl md:text-[5rem] text-white/40 font-bold uppercase">
            Your
          </h1>
          <h1 className="text-center text-[4rem] leading-[0.85] tracking-tight sm:text-7xl md:text-[10rem] text-violet-400 font-bold uppercase">
            Reach
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-violet-300/60 text-center text-sm md:text-lg max-w-md mx-auto leading-relaxed">
            Data-driven marketing strategies that deliver results. Transform your brand's digital presence.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Get Started</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-violet-500/30 text-white hover:bg-violet-500/10">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
