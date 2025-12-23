"use client"

import Image from "next/image"
import { Sparkles, Palette } from "lucide-react"

export function TeamServiceMakeup() {
  const artists = [
    { name: "Luna Starr", role: "Lead Makeup Artist", signature: "Glamour", image: "/placeholders/blocks/service-makeup/3.webp" },
    { name: "Phoenix Blake", role: "Celebrity Artist", signature: "Editorial", image: "/placeholders/blocks/service-makeup/4.webp" },
    { name: "Jade Monroe", role: "Bridal Specialist", signature: "Natural Beauty", image: "/placeholders/blocks/service-makeup/5.webp" },
    { name: "River Quinn", role: "SFX Artist", signature: "Creative", image: "/placeholders/blocks/service-makeup/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Palette className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Makeup Artists
          </h2>
          <p className="text-muted-foreground mt-4">
            Creating beauty, one brushstroke at a time
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, i) => (
            <div key={i} className="group">
              {/* Glamour shot with signature look */}
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-pink-500/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-card border border-border overflow-hidden">
                  <div className="relative aspect-[3/4] bg-muted">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Sparkle decoration */}
                    <div className="absolute top-4 right-4">
                      <Sparkles className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>

                    {/* Signature look badge */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-px flex-1 bg-white/30" />
                        <Palette className="w-4 h-4" />
                        <div className="h-px flex-1 bg-white/30" />
                      </div>
                      <p className="text-xs uppercase tracking-widest text-center font-semibold">
                        {artist.signature}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 text-center bg-gradient-to-b from-card to-pink-500/5">
                    <h3 className="font-bold text-foreground text-lg mb-1">{artist.name}</h3>
                    <p className="text-sm text-muted-foreground">{artist.role}</p>
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
