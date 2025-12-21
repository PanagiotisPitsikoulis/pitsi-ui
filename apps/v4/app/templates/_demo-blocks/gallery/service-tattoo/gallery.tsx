"use client"

import Image from "next/image"

export function GalleryServiceTattoo() {
  const tattoos = [
    { category: "Traditional", image: "1.webp" },
    { category: "Realism", image: "2.webp" },
    { category: "Geometric", image: "3.webp" },
    { category: "Watercolor", image: "4.webp" },
    { category: "Japanese", image: "5.webp" },
    { category: "Minimalist", image: "6.webp" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Ink Portfolio</h2>
          <p className="text-muted-foreground mt-4">Explore our diverse tattoo styles</p>
        </div>

        {/* Ink portfolio - masonry-style layout with style categories */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* First item - larger featured */}
            <div className="col-span-2 md:col-span-2 row-span-2 group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-black">
              <Image
                src="/placeholders/blocks/service-tattoo/1.webp"
                alt="Traditional Style"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-3xl mb-2">Traditional</h3>
                  <p className="text-white/80 text-sm">Bold lines & classic designs</p>
                </div>
              </div>
            </div>

            {/* Regular grid items */}
            {tattoos.slice(1).map((tattoo, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-black"
              >
                <Image
                  src={`/placeholders/blocks/service-tattoo/${tattoo.image}`}
                  alt={tattoo.category}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{tattoo.category}</h3>
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {tattoo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
