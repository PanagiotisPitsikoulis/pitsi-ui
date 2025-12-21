"use client"

import Image from "next/image"
import { Scissors } from "lucide-react"

export function TeamServiceBarber() {
  const barbers = [
    { name: "Vincent Russo", role: "Master Barber", experience: "22 years", specialty: "Classic Cuts", image: "/placeholders/blocks/service-barber/3.webp" },
    { name: "Marcus Stone", role: "Senior Barber", experience: "14 years", specialty: "Fades & Tapers", image: "/placeholders/blocks/service-barber/4.webp" },
    { name: "Diego Martinez", role: "Barber & Stylist", experience: "9 years", specialty: "Modern Styles", image: "/placeholders/blocks/service-barber/5.webp" },
    { name: "James Porter", role: "Beard Specialist", experience: "11 years", specialty: "Grooming", image: "/placeholders/blocks/service-barber/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Scissors className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Meet Your Barbers
          </h2>
          <p className="text-muted-foreground mt-4">
            Craftsmen dedicated to the perfect cut
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {barbers.map((barber, i) => (
            <div key={i} className="group">
              {/* Vintage barber chair card design */}
              <div className="relative">
                {/* Ornate vintage frame */}
                <div className="absolute -inset-2 border-4 border-double border-primary/30 group-hover:border-primary/60 transition-colors" />
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 to-transparent" />

                <div className="relative bg-card border-2 border-border p-6">
                  <div className="relative aspect-square mb-4 overflow-hidden bg-muted">
                    <Image
                      src={barber.image}
                      alt={barber.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105 sepia-[20%] group-hover:sepia-0"
                    />
                    {/* Vintage vignette */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />
                  </div>

                  <div className="text-center space-y-2">
                    <div className="flex justify-center mb-3">
                      <Scissors className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg">{barber.name}</h3>
                    <p className="text-sm text-muted-foreground">{barber.role}</p>

                    <div className="pt-3 border-t border-border space-y-1">
                      <p className="text-xs text-primary font-semibold">{barber.specialty}</p>
                      <p className="text-xs text-muted-foreground">{barber.experience} experience</p>
                    </div>
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
