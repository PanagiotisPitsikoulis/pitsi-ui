"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { ImageOverlay } from "../../_block_components"

export function CTAServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/placeholders/blocks/service-plants/1.webp"
            alt="Plants background"
            fill
            className="object-cover"
          />
          <ImageOverlay opacity={80} />
          <div className="relative z-20 flex flex-col items-center px-8 py-16 md:py-24">
            <h2 className="font-display mb-6 text-center text-3xl font-bold text-white md:text-5xl">
              Start Your Plant Journey
            </h2>
            <p className="mb-10 max-w-xl text-center text-lg text-white/70">
              Get 15% off your first order when you join our community.
            </p>
            <div className="mx-auto flex w-full max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className={cn(
                  "h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-6 text-white",
                  "placeholder:text-white/50 focus:ring-1 focus:ring-white/30 focus:outline-none"
                )}
              />
              <Button className="h-12 rounded-full bg-white px-8 text-black hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
