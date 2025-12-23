"use client"

import Image from "next/image"

export function GalleryServiceHospitality() {
  const rooms = [
    { type: "Deluxe Suite", image: "2.webp" },
    { type: "Ocean View", image: "3.webp" },
    { type: "Presidential", image: "4.webp" },
    { type: "Standard Room", image: "5.webp" },
    { type: "Garden Villa", image: "6.webp" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Our Rooms & Suites</h2>
        </div>

        {/* Room showcase - large hero + thumbnail grid */}
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Large hero image */}
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/placeholders/blocks/service-hospitality/1.webp"
              alt="Featured Suite"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-3">
                  FEATURED
                </span>
                <h3 className="text-white font-bold text-4xl mb-2">Luxury Presidential Suite</h3>
                <p className="text-white/90 text-lg">Experience unparalleled comfort and elegance</p>
              </div>
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={`/placeholders/blocks/service-hospitality/${room.image}`}
                  alt={room.type}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm">{room.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
