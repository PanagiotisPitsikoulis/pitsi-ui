"use client"

import Image from "next/image"

export function GalleryProductCoffee() {
  const origins = [
    { name: "Ethiopian Highlands", region: "Africa", image: "1.webp" },
    { name: "Colombian Supremo", region: "South America", image: "2.webp" },
    { name: "Sumatra Mandheling", region: "Asia", image: "3.webp" },
    { name: "Costa Rican Tarrazu", region: "Central America", image: "4.webp" },
    { name: "Kenyan AA", region: "Africa", image: "5.webp" },
    { name: "Brazilian Santos", region: "South America", image: "6.webp" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Bean Origins</h2>
          <p className="text-muted-foreground mt-4">From Around the World</p>
        </div>

        {/* Bean origin gallery with region labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {origins.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950"
            >
              <Image
                src={`/placeholders/blocks/product-coffee/${item.image}`}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                    {item.region}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl">{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
