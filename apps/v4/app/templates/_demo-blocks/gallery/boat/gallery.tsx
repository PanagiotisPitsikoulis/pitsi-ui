"use client"

import Image from "next/image"

export function GalleryBoat() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Through the Portholes</h2>
        </div>

        {/* Porthole circular frames - nautical theme */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Large porthole */}
            <div className="col-span-2 row-span-2 relative aspect-square">
              <div className="absolute inset-0 rounded-full border-8 border-foreground/20 shadow-2xl overflow-hidden">
                <div className="absolute inset-2 rounded-full border-4 border-foreground/10 overflow-hidden">
                  <Image
                    src="/placeholders/blocks/boat/1.webp"
                    alt="Captain's View"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Small portholes */}
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full border-8 border-foreground/20 shadow-xl overflow-hidden">
                <div className="absolute inset-2 rounded-full border-4 border-foreground/10 overflow-hidden">
                  <Image
                    src="/placeholders/blocks/boat/2.webp"
                    alt="Deck View"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full border-8 border-foreground/20 shadow-xl overflow-hidden">
                <div className="absolute inset-2 rounded-full border-4 border-foreground/10 overflow-hidden">
                  <Image
                    src="/placeholders/blocks/boat/3.webp"
                    alt="Ocean View"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full border-8 border-foreground/20 shadow-xl overflow-hidden">
                <div className="absolute inset-2 rounded-full border-4 border-foreground/10 overflow-hidden">
                  <Image
                    src="/placeholders/blocks/boat/4.webp"
                    alt="Sail View"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full border-8 border-foreground/20 shadow-xl overflow-hidden">
                <div className="absolute inset-2 rounded-full border-4 border-foreground/10 overflow-hidden">
                  <Image
                    src="/placeholders/blocks/boat/5.webp"
                    alt="Marina View"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
