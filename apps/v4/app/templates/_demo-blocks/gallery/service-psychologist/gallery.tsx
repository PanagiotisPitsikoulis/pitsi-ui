"use client"

import Image from "next/image"

export function GalleryServicePsychologist() {
  const spaces = [
    { title: "Private Consultation Room", image: "1.webp" },
    { title: "Relaxation Area", image: "2.webp" },
    { title: "Group Therapy Space", image: "3.webp" },
    { title: "Mindfulness Corner", image: "4.webp" },
    { title: "Outdoor Sanctuary", image: "5.webp" },
    { title: "Wellness Library", image: "6.webp" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Peaceful Spaces</h2>
          <p className="text-muted-foreground mt-4">A safe haven for healing and growth</p>
        </div>

        {/* Peaceful spaces - soft transitions and calming layout */}
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Two large images side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/placeholders/blocks/service-psychologist/1.webp"
                alt="Private Consultation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">Private Consultation Room</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/placeholders/blocks/service-psychologist/2.webp"
                alt="Relaxation Area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">Relaxation Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Wide panoramic */}
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/placeholders/blocks/service-psychologist/3.webp"
              alt="Group Therapy Space"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <p className="text-white font-semibold text-xl">Group Therapy Space</p>
              </div>
            </div>
          </div>

          {/* Three smaller images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/placeholders/blocks/service-psychologist/4.webp"
                alt="Mindfulness Corner"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">Mindfulness Corner</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/placeholders/blocks/service-psychologist/5.webp"
                alt="Outdoor Sanctuary"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">Outdoor Sanctuary</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/placeholders/blocks/service-psychologist/6.webp"
                alt="Wellness Library"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">Wellness Library</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
