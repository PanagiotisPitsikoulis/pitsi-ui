"use client"

import Image from "next/image"
import { Dumbbell, Award } from "lucide-react"

export function TeamServiceGym() {
  const trainers = [
    { name: "Jake Morrison", role: "Head Trainer", specialty: "Strength & Conditioning", cert: "CSCS, CPT", image: "/placeholders/blocks/service-gym/3.webp" },
    { name: "Sophia Chen", role: "Yoga Instructor", specialty: "Flexibility & Mindfulness", cert: "RYT-500", image: "/placeholders/blocks/service-gym/4.webp" },
    { name: "Marcus Williams", role: "Boxing Coach", specialty: "HIIT & Cardio", cert: "CPT, Boxing L3", image: "/placeholders/blocks/service-gym/5.webp" },
    { name: "Emma Davis", role: "Nutrition Coach", specialty: "Weight Management", cert: "RD, CPT", image: "/placeholders/blocks/service-gym/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Dumbbell className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Your Trainer Team
          </h2>
          <p className="text-muted-foreground mt-4">
            Certified professionals committed to your fitness journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <div key={i} className="group">
              <div className="relative bg-card border-2 border-border overflow-hidden hover:border-primary/50 transition-all">
                {/* Certification badge */}
                <div className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
                  <Award className="w-5 h-5" />
                </div>

                <div className="relative aspect-square bg-muted">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Stats overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Dumbbell className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">{trainer.specialty}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-b from-card to-muted/20">
                  <h3 className="font-bold text-foreground text-lg mb-1">{trainer.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{trainer.role}</p>

                  <div className="flex items-center gap-2 pt-3 border-t border-border">
                    <Award className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-xs text-primary font-semibold">{trainer.cert}</span>
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
