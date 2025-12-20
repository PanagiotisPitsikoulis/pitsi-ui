"use client"

import Link from "next/link"

import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { getThemeStyle, techTheme } from "../../_themes"

export function HeroProductSciFi() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-zinc-950"
      style={getThemeStyle(techTheme, "dark")}
    >

      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-green-500/10 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-emerald-500/10 blur-[120px]" />

      {/* Floating product */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[500px] h-[400px] hidden lg:block">
        <div className="relative w-full h-full">
          <img
            src="/images/hero/tech-product.jpg"
            alt="Tech product"
            className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(34,197,94,0.3)]"
          />
          {/* Product glow ring */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-4 bg-green-500/20 rounded-full blur-xl" />
        </div>
      </div>

      {/* Floating UI elements */}
      <div className="absolute top-32 right-20 w-48 h-24 rounded-xl bg-zinc-900/80 border border-green-500/30 backdrop-blur-sm hidden xl:flex items-center justify-center overflow-hidden">
        <span className="text-green-400 text-xs font-mono">SYSTEM ONLINE</span>
        <BorderBeam size={80} duration={4} colorFrom="#22c55e" colorTo="#10b981" />
      </div>
      <div className="absolute bottom-40 left-16 w-40 h-20 rounded-xl bg-zinc-900/80 border border-green-500/20 backdrop-blur-sm hidden xl:flex items-center justify-center">
        <span className="text-green-400/70 text-xs font-mono">v2.0.45</span>
      </div>

      {/* Content - Tech terminal style */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-xs font-mono tracking-wider">
              NEW_RELEASE_v2.0
            </span>
          </div>
          <p className="font-mono text-green-500/50 text-[10px] md:text-xs mb-4">
            $ init future_tech --version 2.0
          </p>
          <h1 className="font-mono text-center text-[2.5rem] leading-[0.9] sm:text-5xl md:text-[7rem] text-white uppercase">
            Technology
          </h1>
          <h1 className="font-mono text-center text-[2rem] leading-[0.85] sm:text-4xl md:text-[5rem] text-green-500/40 lowercase">
            from
          </h1>
          <h1 className="font-mono text-center text-[3rem] leading-[0.85] sm:text-6xl md:text-[8rem] text-green-400 uppercase">
            Tomorrow
          </h1>
          <p className="font-mono text-green-500/40 text-[10px] md:text-xs mt-6">
            {">"} status: <span className="text-green-400">available_today</span>
          </p>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-zinc-500 text-center text-sm md:text-base max-w-sm mx-auto">
            Cutting-edge gadgets and gear. Experience the future now.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Explore Tech</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-zinc-700 text-white hover:bg-zinc-800">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
