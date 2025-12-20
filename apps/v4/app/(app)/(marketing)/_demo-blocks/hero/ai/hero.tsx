"use client"

import Link from "next/link"

import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { aiTheme, getThemeStyle } from "../../_themes"

export function HeroAI() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-black"
      style={getThemeStyle(aiTheme, "dark")}
    >

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />

      {/* Hero Image with glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-60">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="/images/hero/ai.jpg"
          alt="AI visualization"
          className="w-full h-full object-cover object-top rounded-t-3xl"
        />
        <div className="absolute inset-0 rounded-t-3xl overflow-hidden">
          <BorderBeam
            size={200}
            duration={8}
            colorFrom="#6366f1"
            colorTo="#a855f7"
            borderWidth={2}
          />
        </div>
      </div>

      {/* Content - Stacked vertical with large type */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="flex flex-col items-center">
          <p className="text-indigo-400/60 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8">
            Next Generation
          </p>
          <h1 className="font-display text-center text-[3rem] leading-[0.9] sm:text-6xl md:text-[8rem] text-white/40 uppercase font-medium tracking-wide">
            The
          </h1>
          <h1 className="font-display text-center text-[5rem] leading-[0.8] sm:text-8xl md:text-[14rem] text-indigo-400 uppercase font-bold">
            Future
          </h1>
          <h1 className="font-display text-center text-[2.5rem] leading-[0.9] sm:text-5xl md:text-[6rem] text-white uppercase font-medium tracking-wide">
            of AI
          </h1>
          <Spacer size="2xl" sizeMobile="lg" />
          <p className="text-zinc-500 text-center text-base md:text-xl max-w-md">
            Unlock limitless possibilities. Powered by next-gen AI technology.
          </p>
          <Spacer size="xl" sizeMobile="md" />
          <div className="flex flex-row gap-3">
            <Link href="#">
              <HeroButton>Try AI Now</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-zinc-700 text-white hover:bg-zinc-800">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
