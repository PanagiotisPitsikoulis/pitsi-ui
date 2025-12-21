"use client"

import Image from "next/image"
import { Heart, Award } from "lucide-react"

export function TeamServicePetSitting() {
  const caregivers = [
    { name: "Emily Parker", role: "Lead Pet Caregiver", cert: "Certified Animal Handler", pets: "Dogs & Cats", image: "/placeholders/blocks/service-pet-sitting/3.webp" },
    { name: "Jake Wilson", role: "Dog Trainer", cert: "CPDT-KA Certified", pets: "Dogs", image: "/placeholders/blocks/service-pet-sitting/4.webp" },
    { name: "Maya Thompson", role: "Cat Specialist", cert: "Feline Behavior Expert", pets: "Cats", image: "/placeholders/blocks/service-pet-sitting/5.webp" },
    { name: "Noah Anderson", role: "Exotic Pet Care", cert: "Small Animal Specialist", pets: "All Animals", image: "/placeholders/blocks/service-pet-sitting/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Heart className="w-10 h-10 text-primary fill-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Your Pet Care Team
          </h2>
          <p className="text-muted-foreground mt-4">
            Certified professionals who love animals as much as you do
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {caregivers.map((caregiver, i) => (
            <div key={i} className="group">
              <div className="bg-card border-2 border-border overflow-hidden hover:border-primary/50 transition-all">
                {/* Photo with pets */}
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={caregiver.image}
                    alt={caregiver.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Heart badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg">
                    <Heart className="w-5 h-5 fill-white" />
                  </div>

                  {/* Pets specialization */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 text-xs font-bold text-center rounded">
                      {caregiver.pets}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-foreground text-lg mb-1">{caregiver.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{caregiver.role}</p>

                  <div className="pt-3 border-t border-border">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-primary font-semibold">{caregiver.cert}</p>
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
