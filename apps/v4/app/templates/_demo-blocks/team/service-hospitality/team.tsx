"use client"

import Image from "next/image"
import { Star } from "lucide-react"

export function TeamServiceHospitality() {
  const staff = [
    { name: "Victoria Laurent", role: "General Manager", department: "Management", image: "/placeholders/blocks/service-hospitality/3.webp" },
    { name: "Alexandre Dubois", role: "Head Concierge", department: "Guest Services", image: "/placeholders/blocks/service-hospitality/4.webp" },
    { name: "Isabella Romano", role: "Executive Housekeeper", department: "Operations", image: "/placeholders/blocks/service-hospitality/5.webp" },
    { name: "Christopher Hayes", role: "Food & Beverage Director", department: "Dining", image: "/placeholders/blocks/service-hospitality/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-primary fill-primary" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Distinguished Team
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Excellence in hospitality, dedication to your comfort
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member, i) => (
            <div key={i} className="group">
              <div className="bg-card border border-border overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Elegant staff photo */}
                <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Department badge */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm text-foreground px-3 py-1.5 text-xs font-semibold text-center border border-border/20">
                      {member.department}
                    </div>
                  </div>

                  {/* Star rating */}
                  <div className="absolute bottom-4 left-4 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Staff info */}
                <div className="p-6 text-center bg-gradient-to-b from-card to-muted/10">
                  <h3 className="font-bold text-foreground text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
