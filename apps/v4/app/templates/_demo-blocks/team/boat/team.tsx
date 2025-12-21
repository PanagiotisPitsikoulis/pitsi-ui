"use client"

import Image from "next/image"
import { Anchor } from "lucide-react"

export function TeamBoat() {
  const crew = [
    { name: "Captain James Morrison", role: "Master & Commander", rank: "Captain", image: "/placeholders/blocks/boat/3.webp", experience: "25 years" },
    { name: "Sarah Williams", role: "First Mate", rank: "First Mate", image: "/placeholders/blocks/boat/4.webp", experience: "15 years" },
    { name: "Marcus O'Brien", role: "Chief Engineer", rank: "Engineer", image: "/placeholders/blocks/boat/5.webp", experience: "18 years" },
    { name: "Elena Rodriguez", role: "Navigator", rank: "Navigator", image: "/placeholders/blocks/boat/6.webp", experience: "12 years" },
  ]

  return (
    <section className="relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Anchor className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Your Experienced Crew
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seasoned professionals dedicated to your safe voyage
          </p>
        </div>

        {/* Captain prominently featured */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative border-2 border-primary/30 bg-card p-8 group hover:border-primary/60 transition-colors">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-40 h-40 flex-shrink-0">
                <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-background bg-muted">
                  <Image
                    src={crew[0].image}
                    alt={crew[0].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold whitespace-nowrap">
                  {crew[0].rank}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">{crew[0].name}</h3>
                <p className="text-lg text-muted-foreground mb-3">{crew[0].role}</p>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Anchor className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{crew[0].experience} at sea</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of crew in grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {crew.slice(1).map((member, i) => (
            <div key={i} className="border border-border bg-card p-6 group hover:shadow-lg transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-28 h-28 mb-4">
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
                  <div className="absolute inset-1 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold mb-3 rounded">
                  {member.rank}
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Anchor className="w-3 h-3" />
                  <span>{member.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
