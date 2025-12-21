"use client"

import Image from "next/image"

export function TeamServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Our Experts</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Meet the Green Team
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Emma Green", role: "Head Horticulturist", image: "/placeholders/blocks/service-plants/3.webp" },
            { name: "James Fern", role: "Plant Care Specialist", image: "/placeholders/blocks/service-plants/4.webp" },
            { name: "Sofia Bloom", role: "Botanical Designer", image: "/placeholders/blocks/service-plants/5.webp" },
            { name: "Marcus Leaf", role: "Delivery Manager", image: "/placeholders/blocks/service-plants/6.webp" },
          ].map((member, i) => (
            <div key={i} className="text-center group">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
