"use client"

import Image from "next/image"

import { Button } from "@/registry/new-york-v4/ui/button"

import { getTemplateThemeStyle } from "../../_components"

export function CTAFoodPizza() {
  const darkCardStyle = getTemplateThemeStyle("food-pizza", "tinted", "dark")

  return (
    <section>
      <div className="container px-6">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={darkCardStyle}
        >
          <div className="absolute inset-0">
            <Image
              src="/placeholders/blocks/food-pizza/1.webp"
              alt="Pizza background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="relative z-10 py-16 md:py-24 px-8 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Hungry for More?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Join our pizza club and get exclusive deals, new menu updates, and a free pizza on your birthday. Slice of heaven awaits!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <Button className="rounded-full px-8">
                Join Club
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
