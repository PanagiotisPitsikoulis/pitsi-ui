"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function HeroProductSkincare() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Split layout - large image on right like Fashion */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <Image
          src="/placeholders/blocks/product-skincare/1.webp"
          alt="Skincare products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      {/* Soft accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-muted/50 blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-muted/50 blur-[80px]" />

      {/* Content - Left aligned like Fashion */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-start justify-center px-6 z-10 lg:max-w-[50%]">
        <div className="relative max-lg:text-center max-lg:w-full">
          <p className="text-shadow text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8">
            Clean Beauty Since 2018
          </p>
          <h1 className="text-shadow-lg font-serif italic text-left max-lg:text-center text-[2.5rem] leading-none sm:text-4xl md:text-[5rem] text-foreground">
            the Glow
          </h1>
          <h1 className="text-shadow-lg text-left max-lg:text-center text-[4rem] leading-[0.75] sm:text-7xl md:text-[12rem] text-foreground font-black uppercase tracking-tighter">
            You
          </h1>
          <h1 className="text-shadow-lg font-serif italic text-left max-lg:text-center text-[2rem] leading-none sm:text-3xl md:text-[4rem] text-foreground">
            Deserve
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-shadow text-muted-foreground text-left max-lg:text-center text-sm md:text-base max-w-sm max-lg:mx-auto">
            Clean beauty, proven results. Dermatologist-approved formulas.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 max-lg:justify-center">
            <Link href="#">
              <HeroButton>Shop Skincare</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full border-border text-foreground hover:bg-muted">
                Take Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
