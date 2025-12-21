"use client"

import Image from "next/image"
import { Award } from "lucide-react"

export function TeamProductSkincare() {
  const experts = [
    { name: "Dr. Lauren Mitchell", role: "Dermatologist", credentials: "MD, FAAD", experience: "15+ years", image: "/placeholders/blocks/product-skincare/3.webp" },
    { name: "Dr. Michael Chen", role: "Cosmetic Scientist", credentials: "PhD Chemistry", experience: "12+ years", image: "/placeholders/blocks/product-skincare/4.webp" },
    { name: "Dr. Aisha Patel", role: "Clinical Researcher", credentials: "MD, MSc", experience: "10+ years", image: "/placeholders/blocks/product-skincare/5.webp" },
    { name: "Dr. Emma Williams", role: "Skin Health Advisor", credentials: "DO, MBA", experience: "14+ years", image: "/placeholders/blocks/product-skincare/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Award className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Expert Team
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Board-certified dermatologists and scientists dedicated to your skin health
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, i) => (
            <div key={i} className="group">
              <div className="bg-card border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Professional headshot */}
                <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Credentials section */}
                <div className="p-6 text-center">
                  <h3 className="font-bold text-foreground text-lg mb-1">{expert.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{expert.credentials}</p>
                  <p className="text-sm text-muted-foreground mb-3">{expert.role}</p>

                  <div className="pt-3 border-t border-border">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      <Award className="w-3.5 h-3.5" />
                      {expert.experience}
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
