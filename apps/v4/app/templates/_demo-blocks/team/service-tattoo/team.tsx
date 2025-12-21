"use client"

import Image from "next/image"
import { Palette, Image as ImageIcon } from "lucide-react"

export function TeamServiceTattoo() {
  const artists = [
    { name: "Raven Black", role: "Master Tattoo Artist", style: "Black & Grey Realism", portfolio: "/placeholders/blocks/service-tattoo/3.webp" },
    { name: "Ink Martinez", role: "Color Specialist", style: "Traditional & Neo-Traditional", portfolio: "/placeholders/blocks/service-tattoo/4.webp" },
    { name: "Storm Walker", role: "Fine Line Artist", style: "Minimalist & Geometric", portfolio: "/placeholders/blocks/service-tattoo/5.webp" },
    { name: "Phoenix Luna", role: "Custom Designer", style: "Watercolor & Illustrative", portfolio: "/placeholders/blocks/service-tattoo/6.webp" },
  ]

  return (
    <section className="bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Palette className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Tattoo Artists
          </h2>
          <p className="text-muted-foreground mt-4">
            Masters of ink bringing your vision to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, i) => (
            <div key={i} className="group">
              {/* Artist portfolio card with sample work */}
              <div className="relative bg-card border-2 border-border overflow-hidden hover:border-primary/50 transition-all">
                {/* Main portfolio image */}
                <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                  <Image
                    src={artist.portfolio}
                    alt={artist.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Portfolio icon */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
                    <ImageIcon className="w-4 h-4" />
                  </div>

                  {/* Style badge */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Palette className="w-4 h-4" />
                      <div className="h-px flex-1 bg-white/30" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wide">
                      {artist.style}
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-b from-card to-muted/20">
                  <h3 className="font-bold text-foreground text-lg mb-1">{artist.name}</h3>
                  <p className="text-sm text-muted-foreground">{artist.role}</p>

                  <div className="mt-4 pt-3 border-t border-border">
                    <button
                      className="w-full text-xs font-semibold text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-2"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
