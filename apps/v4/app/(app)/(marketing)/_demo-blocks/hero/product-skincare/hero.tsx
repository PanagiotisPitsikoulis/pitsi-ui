"use client"

import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { getThemeStyle, skincareTheme } from "../../_themes"

export function HeroProductSkincare() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden bg-rose-50 dark:bg-rose-950"
      style={getThemeStyle(skincareTheme, "light")}
    >
      {/* Soft orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-rose-200/30 dark:bg-rose-800/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-pink-200/30 dark:bg-pink-800/10 blur-[100px]" />
      </div>

      {/* Product image - centered floating */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[350px] h-[450px] hidden lg:block">
        <img
          src="/images/hero/skincare.jpg"
          alt="Skincare products"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-rose-50 dark:bg-rose-950" />
      </div>

      {/* Floating accent products */}
      <div className="absolute left-20 top-1/3 w-32 h-40 rotate-[-12deg] opacity-60 hidden xl:block">
        <img
          src="/images/hero/skincare-2.jpg"
          alt="Product"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div className="absolute right-24 top-1/4 w-28 h-36 rotate-[8deg] opacity-50 hidden xl:block">
        <img
          src="/images/hero/skincare-3.jpg"
          alt="Product"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-32 w-24 h-24 rounded-full border border-rose-200/50 dark:border-rose-800/30 hidden lg:block" />
      <div className="absolute bottom-32 left-24 w-16 h-16 rounded-full border border-pink-200/50 dark:border-pink-800/30 hidden lg:block" />

      {/* Content - Soft feminine with script accent */}
      <div className="relative container flex min-h-[100svh] w-full flex-col items-center justify-center px-6 z-10">
        <div className="text-center">
          <p className="font-serif italic text-rose-400 dark:text-rose-400 text-xs md:text-sm mb-8">
            Clean Beauty
          </p>
          <h1 className="font-serif italic text-center text-[3rem] leading-[0.9] sm:text-6xl md:text-[8rem]">
            Radiant
          </h1>
          <h1 className="font-serif italic text-center text-[4rem] leading-[0.85] sm:text-7xl md:text-[11rem] text-rose-500 dark:text-rose-400">
            Skin
          </h1>
          <h1 className="font-serif italic text-center text-[2.5rem] leading-[0.9] sm:text-5xl md:text-[6rem]">
            Starts Here
          </h1>
          <Spacer size="xl" sizeMobile="md" />
          <p className="text-muted-foreground text-center text-sm md:text-base max-w-sm mx-auto">
            Clean beauty, proven results. Dermatologist-approved formulas.
          </p>
          <Spacer size="lg" sizeMobile="md" />
          <div className="flex flex-row gap-3 justify-center">
            <Link href="#">
              <HeroButton>Shop Skincare</HeroButton>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg" className="rounded-full">
                Take Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
