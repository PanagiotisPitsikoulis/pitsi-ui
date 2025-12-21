"use client"

import Image from "next/image"

export function GalleryServiceFashion() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Runway Collection</h2>
        </div>

        {/* Runway gallery - tall vertical images like fashion editorials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/service-fashion/1.webp"
              alt="Spring Collection"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/service-fashion/2.webp"
              alt="Summer Looks"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/service-fashion/3.webp"
              alt="Fall Fashion"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/service-fashion/4.webp"
              alt="Winter Style"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/service-fashion/5.webp"
              alt="Editorial Feature"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/service-fashion/6.webp"
              alt="Couture Details"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/service-fashion/7.webp"
              alt="Runway Ready"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
