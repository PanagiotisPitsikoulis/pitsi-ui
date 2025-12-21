"use client"

import Image from "next/image"
import { Heart, GraduationCap } from "lucide-react"

export function TeamServicePsychologist() {
  const therapists = [
    { name: "Dr. Rachel Green", role: "Clinical Psychologist", credentials: "PhD, Licensed", specialty: "Anxiety & Depression", image: "/placeholders/blocks/service-psychologist/3.webp" },
    { name: "Dr. Marcus Thompson", role: "Marriage Counselor", credentials: "PsyD, LMFT", specialty: "Couples Therapy", image: "/placeholders/blocks/service-psychologist/4.webp" },
    { name: "Dr. Sophia Martinez", role: "Child Psychologist", credentials: "PhD, BCBA", specialty: "Child Development", image: "/placeholders/blocks/service-psychologist/5.webp" },
    { name: "Dr. James Park", role: "Trauma Specialist", credentials: "MD, Psychiatrist", specialty: "PTSD & Trauma", image: "/placeholders/blocks/service-psychologist/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Heart className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Meet Our Therapists
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Compassionate professionals dedicated to your mental wellbeing
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {therapists.map((therapist, i) => (
            <div key={i} className="group">
              {/* Warm, approachable design */}
              <div className="bg-card border border-border overflow-hidden hover:shadow-xl transition-all duration-300 rounded-lg">
                {/* Professional but warm photo */}
                <div className="relative aspect-[4/5] bg-muted overflow-hidden">
                  <Image
                    src={therapist.image}
                    alt={therapist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Credentials badge */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-xs font-semibold text-center flex items-center justify-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-primary" />
                      {therapist.credentials}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-foreground text-lg mb-1">{therapist.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{therapist.role}</p>

                  <div className="pt-3 border-t border-border">
                    <div className="flex items-start gap-2">
                      <Heart className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">Specialization</p>
                        <p className="text-sm text-foreground font-medium">{therapist.specialty}</p>
                      </div>
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
