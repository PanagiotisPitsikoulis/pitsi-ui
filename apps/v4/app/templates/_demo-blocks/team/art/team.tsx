"use client"

import Image from "next/image"

export function TeamArt() {
  const artists = [
    { name: "Isabella Martinez", role: "Painter & Founder", image: "/placeholders/blocks/art/3.webp", size: "large" },
    { name: "Oliver Chen", role: "Sculptor", image: "/placeholders/blocks/art/4.webp", size: "small" },
    { name: "Amara Johnson", role: "Mixed Media Artist", image: "/placeholders/blocks/art/5.webp", size: "medium" },
    { name: "Lucas Bergström", role: "Digital Artist", image: "/placeholders/blocks/art/6.webp", size: "small" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-wider uppercase font-medium mb-4">The Collective</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Our Artists
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A diverse group of creators pushing boundaries
          </p>
        </div>

        {/* Irregular masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* First artist - large vertical */}
          <div className="col-span-2 md:col-span-2 md:row-span-2 group">
            <div className="relative h-full min-h-[400px] overflow-hidden bg-muted border border-border">
              <Image
                src={artists[0].image}
                alt={artists[0].name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-2xl mb-1">{artists[0].name}</h3>
                <p className="text-white/80">{artists[0].role}</p>
              </div>
            </div>
          </div>

          {/* Second artist - small square */}
          <div className="col-span-1 group">
            <div className="relative aspect-square overflow-hidden bg-muted border border-border">
              <Image
                src={artists[1].image}
                alt={artists[1].name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-sm mb-0.5">{artists[1].name}</h3>
                <p className="text-white/80 text-xs">{artists[1].role}</p>
              </div>
            </div>
          </div>

          {/* Third artist - small square */}
          <div className="col-span-1 group">
            <div className="relative aspect-square overflow-hidden bg-muted border border-border">
              <Image
                src={artists[3].image}
                alt={artists[3].name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-sm mb-0.5">{artists[3].name}</h3>
                <p className="text-white/80 text-xs">{artists[3].role}</p>
              </div>
            </div>
          </div>

          {/* Fourth artist - wide horizontal */}
          <div className="col-span-2 group">
            <div className="relative aspect-[2/1] overflow-hidden bg-muted border border-border">
              <Image
                src={artists[2].image}
                alt={artists[2].name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg mb-1">{artists[2].name}</h3>
                <p className="text-white/80 text-sm">{artists[2].role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
