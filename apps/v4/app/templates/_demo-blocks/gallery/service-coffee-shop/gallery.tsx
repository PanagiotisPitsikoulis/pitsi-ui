"use client"

import Image from "next/image"

export function GalleryServiceCoffeeShop() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Our Cozy Space</h2>
        </div>

        {/* Café atmosphere - lifestyle shots with cozy vibes */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {/* Large feature image */}
            <div className="col-span-4 md:col-span-5 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/placeholders/blocks/service-coffee-shop/1.webp"
                alt="Café Interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Vertical stack */}
            <div className="col-span-4 md:col-span-3 grid grid-rows-2 gap-4">
              <div className="relative aspect-[16/10] md:aspect-auto rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholders/blocks/service-coffee-shop/2.webp"
                  alt="Coffee Art"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-[16/10] md:aspect-auto rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholders/blocks/service-coffee-shop/3.webp"
                  alt="Barista at Work"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom row */}
            <div className="col-span-2 md:col-span-3 relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/placeholders/blocks/service-coffee-shop/4.webp"
                alt="Fresh Pastries"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="col-span-2 md:col-span-2 relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/placeholders/blocks/service-coffee-shop/5.webp"
                alt="Coffee Brewing"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="col-span-4 md:col-span-3 relative aspect-[16/10] md:aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/placeholders/blocks/service-coffee-shop/6.webp"
                alt="Cozy Corner"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
