"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { getThemeStyle, realEstateTheme } from "../../_themes"

export function HeroServiceRealEstate() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-slate-50 dark:bg-slate-950"
      style={getThemeStyle(realEstateTheme, "light")}
    >
      {/* Subtle blue orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-200/20 dark:bg-blue-800/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-sky-200/20 dark:bg-sky-800/10 blur-[100px]" />
      </div>

      {/* Property image - large floating card */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[450px] h-[550px] hidden xl:block">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/images/hero/real-estate.jpg"
            alt="Luxury property"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
            <p className="text-xs text-blue-600 font-medium mb-1">Featured Property</p>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">Modern Luxury Villa</p>
            <p className="text-sm text-slate-500">Starting at $2.4M</p>
          </div>
        </div>
      </div>

      {/* Property thumbnails */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        <div className="w-32 h-24 rounded-lg overflow-hidden shadow-lg opacity-70 hover:opacity-100 transition-opacity">
          <img src="/images/hero/property-1.jpg" alt="Property" className="w-full h-full object-cover" />
        </div>
        <div className="w-32 h-24 rounded-lg overflow-hidden shadow-lg opacity-70 hover:opacity-100 transition-opacity">
          <img src="/images/hero/property-2.jpg" alt="Property" className="w-full h-full object-cover" />
        </div>
        <div className="w-32 h-24 rounded-lg overflow-hidden shadow-lg opacity-70 hover:opacity-100 transition-opacity">
          <img src="/images/hero/property-3.jpg" alt="Property" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Geometric accents */}
      <div className="absolute top-20 left-1/3 w-20 h-20 border border-blue-200/50 dark:border-blue-800/30 hidden lg:block" />
      <div className="absolute bottom-32 right-1/3 w-16 h-16 border border-slate-200/50 dark:border-slate-800/30 rotate-45 hidden lg:block" />

      {/* Content */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/5 mb-8">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span className="text-blue-700 dark:text-blue-400 text-xs font-medium tracking-wider">
              Premium Properties
            </span>
          </div>
          <p className="text-blue-600/50 dark:text-blue-400/40 text-sm md:text-lg tracking-[0.2em] mb-4 font-light uppercase">
            Find Your
          </p>
          <h1 className="text-center text-[3rem] leading-[0.9] tracking-tight sm:text-6xl md:text-[7rem] font-semibold">
            Dream
          </h1>
          <h1 className="text-center text-[4rem] leading-[0.85] tracking-tight sm:text-7xl md:text-[10rem] text-blue-600 dark:text-blue-400 font-bold">
            Home
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-muted-foreground text-center text-sm md:text-lg max-w-md mx-auto leading-relaxed">
            Exclusive properties and expert guidance. Your journey to the perfect home starts here.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Browse Listings</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full">
                Schedule Viewing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
