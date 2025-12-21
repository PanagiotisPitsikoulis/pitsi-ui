"use client"

import Image from "next/image"

export function GalleryServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Green Spaces We've Created
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative col-span-2 row-span-2 aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/placeholders/blocks/service-plants/6.webp"
              alt="Gallery 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/placeholders/blocks/service-plants/7.webp"
              alt="Gallery 2"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/placeholders/blocks/service-plants/8.webp"
              alt="Gallery 3"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/placeholders/blocks/service-plants/9.webp"
              alt="Gallery 4"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/placeholders/blocks/service-plants/2.webp"
              alt="Gallery 5"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
