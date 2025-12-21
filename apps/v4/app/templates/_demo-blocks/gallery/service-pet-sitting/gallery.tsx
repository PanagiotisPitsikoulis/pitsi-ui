"use client"

import Image from "next/image"

export function GalleryServicePetSitting() {
  const pets = [
    { name: "Max", type: "Golden Retriever", image: "1.webp" },
    { name: "Luna", type: "Tabby Cat", image: "2.webp" },
    { name: "Charlie", type: "Beagle", image: "3.webp" },
    { name: "Bella", type: "Persian Cat", image: "4.webp" },
    { name: "Rocky", type: "German Shepherd", image: "5.webp" },
    { name: "Milo", type: "French Bulldog", image: "6.webp" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Happy Pets We Care For</h2>
          <p className="text-muted-foreground mt-4">Meet some of our furry friends</p>
        </div>

        {/* Happy pets grid - playful arrangement */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* First pet - larger */}
            <div className="col-span-2 md:col-span-2 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl group bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950">
              <Image
                src="/placeholders/blocks/service-pet-sitting/1.webp"
                alt="Max"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-2xl mb-1">Max</h3>
                  <p className="text-white/90">Golden Retriever</p>
                </div>
              </div>
            </div>

            {/* Regular pets */}
            {pets.slice(1).map((pet, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-lg group bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950"
              >
                <Image
                  src={`/placeholders/blocks/service-pet-sitting/${pet.image}`}
                  alt={pet.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{pet.name}</h3>
                    <p className="text-white/90 text-sm">{pet.type}</p>
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
