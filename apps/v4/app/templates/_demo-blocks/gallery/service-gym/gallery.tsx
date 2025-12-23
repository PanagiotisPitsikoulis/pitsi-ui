"use client"

import Image from "next/image"

export function GalleryServiceGym() {
  const facilities = [
    { name: "Weight Training Area", image: "1.webp" },
    { name: "Cardio Zone", image: "2.webp" },
    { name: "Group Classes Studio", image: "3.webp" },
    { name: "Olympic Pool", image: "4.webp" },
    { name: "Yoga & Meditation", image: "5.webp" },
    { name: "Locker Rooms", image: "6.webp" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Facility Tour</h2>
          <p className="text-muted-foreground mt-4">State-of-the-art equipment & amenities</p>
        </div>

        {/* Facility tour - wide panoramic shots */}
        <div className="space-y-4 max-w-6xl mx-auto">
          {/* Large panoramic header */}
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/placeholders/blocks/service-gym/1.webp"
              alt="Main Gym Floor"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50">
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white font-bold text-3xl">Main Training Floor</h3>
              </div>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src="/placeholders/blocks/service-gym/2.webp"
                alt="Cardio Equipment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-semibold text-lg">Cardio Zone</p>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src="/placeholders/blocks/service-gym/3.webp"
                alt="Group Classes"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-semibold text-lg">Group Classes</p>
              </div>
            </div>
          </div>

          {/* Three-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src="/placeholders/blocks/service-gym/4.webp"
                alt="Pool"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-semibold">Olympic Pool</p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src="/placeholders/blocks/service-gym/5.webp"
                alt="Yoga Studio"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-semibold">Yoga Studio</p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src="/placeholders/blocks/service-gym/6.webp"
                alt="Amenities"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-semibold">Locker Rooms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
