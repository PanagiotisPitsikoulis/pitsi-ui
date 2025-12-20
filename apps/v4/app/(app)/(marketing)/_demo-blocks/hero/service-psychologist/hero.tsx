"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { getThemeStyle, therapyTheme } from "../../_themes"

export function HeroServicePsychologist() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-teal-50 dark:bg-teal-950"
      style={getThemeStyle(therapyTheme, "light")}
    >
      {/* Soft, calming orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-sky-200/30 dark:bg-sky-800/10 blur-[120px]" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-teal-200/30 dark:bg-teal-800/10 blur-[100px]" />
      </div>

      {/* Calming wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-10">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 100C360 150 720 50 1080 100C1260 125 1380 140 1440 100V200H0V100Z" fill="currentColor" className="text-teal-500"/>
          <path d="M0 120C360 170 720 70 1080 120C1260 145 1380 160 1440 120V200H0V120Z" fill="currentColor" className="text-sky-500" opacity="0.5"/>
        </svg>
      </div>

      {/* Accent image - subtle */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[400px] h-[500px] hidden xl:block opacity-80">
        <img
          src="/images/hero/therapy.jpg"
          alt="Peaceful environment"
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute left-0 inset-y-0 w-24 bg-teal-50/80 dark:bg-teal-950/80 rounded-l-3xl" />
      </div>

      {/* Decorative elements - gentle shapes */}
      <div className="absolute top-32 left-16 w-20 h-20 rounded-full border-2 border-teal-200/30 dark:border-teal-700/20 hidden lg:block" />
      <div className="absolute bottom-40 left-32 w-12 h-12 rounded-full bg-sky-200/50 dark:bg-sky-800/20 hidden lg:block" />

      {/* Content - Gentle centered with breathing room */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/5 mb-8">
            <svg className="w-3 h-3 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span className="text-teal-700 dark:text-teal-400 text-xs font-medium tracking-wider">
              You Are Not Alone
            </span>
          </div>
          <p className="text-teal-600/50 dark:text-teal-400/40 text-sm md:text-lg tracking-[0.3em] mb-4 font-light">
            Your
          </p>
          <h1 className="text-center text-[2.5rem] leading-[0.9] tracking-[0.1em] sm:text-5xl md:text-[6rem] uppercase font-extralight">
            Mental Health
          </h1>
          <h1 className="text-center text-[4rem] leading-[0.85] tracking-[0.05em] sm:text-7xl md:text-[11rem] text-teal-600 dark:text-teal-400 font-light">
            Matters
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-muted-foreground text-center text-sm md:text-lg max-w-md mx-auto leading-relaxed">
            Professional therapy services. A safe space for healing and growth.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Book Session</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
