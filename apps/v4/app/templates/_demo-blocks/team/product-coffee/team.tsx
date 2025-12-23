"use client"

import Image from "next/image"
import { Coffee } from "lucide-react"

export function TeamProductCoffee() {
  const roasters = [
    { name: "Elena Santos", role: "Head Roaster", origin: "Colombia", years: "12 years", image: "/placeholders/blocks/product-coffee/3.webp" },
    { name: "David Kim", role: "Master Blender", origin: "Ethiopia", years: "9 years", image: "/placeholders/blocks/product-coffee/4.webp" },
    { name: "Maya Rodriguez", role: "Quality Control", origin: "Brazil", years: "7 years", image: "/placeholders/blocks/product-coffee/5.webp" },
    { name: "Tom Anderson", role: "Bean Curator", origin: "Kenya", years: "11 years", image: "/placeholders/blocks/product-coffee/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Coffee className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Meet Our Roasters
          </h2>
          <p className="text-muted-foreground mt-4">
            Craftspeople dedicated to the perfect roast
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {roasters.map((member, i) => (
            <div key={i} className="group">
              {/* Craft aesthetic with vintage feel */}
              <div className="relative mb-6">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted border-4 border-border shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 sepia-[15%] group-hover:sepia-0"
                  />
                  {/* Vintage overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Origin tag */}
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 text-xs font-bold transform rotate-2">
                    {member.origin}
                  </div>
                </div>

                {/* Coffee bean decoration */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-amber-800 rounded-full border-4 border-background flex items-center justify-center shadow-lg">
                  <Coffee className="w-6 h-6 text-amber-100" />
                </div>
              </div>

              <div className="text-center mt-6">
                <h3 className="font-bold text-foreground text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                <p className="text-xs text-primary font-medium">{member.years} experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
