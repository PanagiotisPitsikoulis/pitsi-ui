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
        className="pointer-events-none absolute -right-64 -bottom-64 z-20 hidden select-none md:block"
      />
      <div className="relative z-10 container px-6">
        <div className="mb-16 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            Gallery
          </p>
          <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
            Green Spaces We've Created
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            From cozy apartments to sprawling offices, see how our plants have
            transformed spaces into thriving green sanctuaries.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="relative col-span-2 row-span-2 aspect-square overflow-clip rounded-2xl">
            <Image
              draggable={false}
              src="/placeholders/blocks/service-plants/6.webp"
              alt="Gallery 1"
              fill
              className="pointer-events-none object-cover transition-transform duration-500 select-none hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-clip rounded-2xl">
            <Image
              draggable={false}
              src="/placeholders/blocks/service-plants/7.webp"
              alt="Gallery 2"
              fill
              className="pointer-events-none object-cover transition-transform duration-500 select-none hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-clip rounded-2xl">
            <Image
              draggable={false}
              src="/placeholders/blocks/service-plants/8.webp"
              alt="Gallery 3"
              fill
              className="pointer-events-none object-cover transition-transform duration-500 select-none hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-clip rounded-2xl">
            <Image
              draggable={false}
              src="/placeholders/blocks/service-plants/9.webp"
              alt="Gallery 4"
              fill
              className="pointer-events-none object-cover transition-transform duration-500 select-none hover:scale-105"
            />
          </div>
          <div className="relative aspect-square overflow-clip rounded-2xl">
            <Image
              draggable={false}
              src="/placeholders/blocks/service-plants/2.webp"
              alt="Gallery 5"
              fill
              className="pointer-events-none object-cover transition-transform duration-500 select-none hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
