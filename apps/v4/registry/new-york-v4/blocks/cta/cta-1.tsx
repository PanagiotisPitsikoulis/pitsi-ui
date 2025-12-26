"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { ImageOverlay } from "@/app/(app)/(content)/(blocks)/_block_components"
import { BlockThemeWrapper } from "@/app/(app)/(content)/(blocks)/_components"

export function CTAServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <BlockThemeWrapper
          slug="service-plants"
          tint="deep"
          forceDark
          className="relative overflow-hidden rounded-3xl"
        >
          <Image
            draggable={false}
            src="/placeholders/blocks/service-plants/1.webp"
            alt="Plants background"
            fill
            className="pointer-events-none object-cover select-none"
          />
          <ImageOverlay opacity={50} />
          <div className="relative z-20 flex flex-col items-center px-8 py-16 md:py-24">
            <h2 className="font-display text-foreground mb-6 text-center text-3xl font-bold md:text-5xl">
              Start Your Plant Journey
            </h2>
            <p className="text-foreground/70 mb-10 max-w-xl text-center text-lg">
              Get 15% off your first order when you join our community.
            </p>
            <div className="mx-auto flex w-full max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className={cn(
                  "border-foreground/20 bg-foreground/10 text-foreground h-12 flex-1 rounded-full border px-6",
                  "placeholder:text-foreground/50 focus:ring-foreground/30 focus:ring-1 focus:outline-none"
                )}
              />
              <Button className="bg-foreground text-background hover:bg-foreground/90 h-12 rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </BlockThemeWrapper>
      </div>
    </section>
  )
}
