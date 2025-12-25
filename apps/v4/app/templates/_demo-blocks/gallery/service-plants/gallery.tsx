"use client"

import Image from "next/image"

export function GalleryServicePlants() {
  return (
    <section className="relative overflow-x-clip">
      {/* Huge decoration - top left corner, clipping off screen */}
      <Image
        draggable={false}
        src="/placeholders/blocks/service-plants/assets/decoration-small-4.svg"
        alt=""
        width={600}
        height={600}
        className="pointer-events-none absolute -top-64 -left-64 z-20 hidden select-none md:block"
      />
      {/* Huge decoration - bottom right corner, clipping off screen */}
      <Image
        draggable={false}
        src="/placeholders/blocks/service-plants/assets/decoration-small-5.svg"
        alt=""
        width={550}
        height={550}
        className="pointer-events-none absolute -bottom-64 -right-64 z-20 hidden select-none md:block"
      />
      <div className="container relative z-10 px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Green Spaces We've Created
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            From cozy apartments to sprawling offices, see how our plants have transformed spaces into thriving green sanctuaries.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative col-span-2 row-span-2 aspect-square rounded-2xl overflow-clip">
            <Image draggable={false}
              src="/placeholders/blocks/service-plants/6.webp"
              alt="Gallery 1"
              fill
              className="select-none pointer-events-none object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-clip">
            <Image draggable={false}
              src="/placeholders/blocks/service-plants/7.webp"
              alt="Gallery 2"
              fill
              className="select-none pointer-events-none object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-clip">
            <Image draggable={false}
              src="/placeholders/blocks/service-plants/8.webp"
              alt="Gallery 3"
              fill
              className="select-none pointer-events-none object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-clip">
            <Image draggable={false}
              src="/placeholders/blocks/service-plants/9.webp"
              alt="Gallery 4"
              fill
              className="select-none pointer-events-none object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-clip">
            <Image draggable={false}
              src="/placeholders/blocks/service-plants/2.webp"
              alt="Gallery 5"
              fill
              className="select-none pointer-events-none object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
