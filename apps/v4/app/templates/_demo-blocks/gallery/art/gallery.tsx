"use client"

import Image from "next/image"

export function GalleryArt() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Museum Collection</h2>
        </div>

        {/* Museum wall arrangement - varied sizes and positions */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Large centerpiece */}
            <div className="col-span-12 md:col-span-7 relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl border-8 border-background">
              <Image
                src="/placeholders/blocks/art/1.webp"
                alt="Featured Artwork"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Side gallery - stacked */}
            <div className="col-span-12 md:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl border-8 border-background">
                <Image
                  src="/placeholders/blocks/art/2.webp"
                  alt="Gallery Piece"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl border-8 border-background">
                <Image
                  src="/placeholders/blocks/art/3.webp"
                  alt="Exhibition Art"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Bottom row - varied heights */}
            <div className="col-span-12 md:col-span-4 relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl border-8 border-background">
              <Image
                src="/placeholders/blocks/art/4.webp"
                alt="Portrait"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="col-span-12 md:col-span-5 relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl border-8 border-background">
              <Image
                src="/placeholders/blocks/art/5.webp"
                alt="Landscape"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="col-span-12 md:col-span-3 relative aspect-square rounded-lg overflow-hidden shadow-xl border-8 border-background">
              <Image
                src="/placeholders/blocks/art/6.webp"
                alt="Modern Art"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
