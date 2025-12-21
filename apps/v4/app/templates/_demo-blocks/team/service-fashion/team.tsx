"use client"

import Image from "next/image"
import { Sparkles } from "lucide-react"

export function TeamServiceFashion() {
  const designers = [
    { name: "Valentina Ross", role: "Creative Director", signature: "Avant-Garde", image: "/placeholders/blocks/service-fashion/3.webp" },
    { name: "Sebastian Kane", role: "Lead Designer", signature: "Minimalist Chic", image: "/placeholders/blocks/service-fashion/4.webp" },
    { name: "Aria Fontaine", role: "Senior Designer", signature: "Romantic Couture", image: "/placeholders/blocks/service-fashion/5.webp" },
    { name: "Max Sterling", role: "Accessories Designer", signature: "Bold & Modern", image: "/placeholders/blocks/service-fashion/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Design Team
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Visionaries shaping the future of fashion
          </p>
        </div>

        {/* Runway-style layout - alternating large/small */}
        <div className="max-w-6xl mx-auto space-y-6">
          {designers.map((designer, i) => (
            <div
              key={i}
              className={`group flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center`}
            >
              {/* Image - larger for even indices */}
              <div className={`relative ${i % 2 === 0 ? 'md:w-2/3' : 'md:w-1/2'} w-full`}>
                <div className="relative aspect-[16/9] overflow-hidden bg-muted border border-border">
                  <Image
                    src={designer.image}
                    alt={designer.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Signature style badge */}
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 border border-white/20">
                    <p className="text-xs uppercase tracking-wider">{designer.signature}</p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className={`${i % 2 === 0 ? 'md:w-1/3' : 'md:w-1/2'} w-full ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <div className="h-px flex-1 max-w-[100px] bg-border" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{designer.name}</h3>
                <p className="text-muted-foreground text-lg">{designer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
