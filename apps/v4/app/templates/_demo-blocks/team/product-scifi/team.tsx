"use client"

import Image from "next/image"
import { Cpu, Shield, Zap, Rocket } from "lucide-react"

export function TeamProductScifi() {
  const engineers = [
    { name: "Dr. Nexus Prime", role: "Chief Engineer", specialty: "Quantum Systems", icon: Cpu, image: "/placeholders/blocks/product-scifi/3.webp", color: "text-blue-500" },
    { name: "Cipher Vale", role: "Security Architect", specialty: "Defense Matrix", icon: Shield, image: "/placeholders/blocks/product-scifi/4.webp", color: "text-red-500" },
    { name: "Nova Sterling", role: "Energy Specialist", specialty: "Power Core", icon: Zap, image: "/placeholders/blocks/product-scifi/5.webp", color: "text-yellow-500" },
    { name: "Orion Drake", role: "Propulsion Lead", specialty: "Warp Drive", icon: Rocket, image: "/placeholders/blocks/product-scifi/6.webp", color: "text-green-500" },
  ]

  return (
    <section className="relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.4em] uppercase font-mono mb-4">ENGINEERING DIVISION</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Tech Crew
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineers.map((member, i) => {
            const Icon = member.icon
            return (
              <div key={i} className="group">
                <div className="relative border border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all">
                  {/* Tech badge with icon */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className={`p-2 bg-black/60 backdrop-blur-sm border border-primary/30 ${member.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="relative aspect-square bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Tech scan lines */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  <div className="p-5 border-t border-primary/20">
                    <div className="mb-3">
                      <h3 className="font-bold text-foreground text-lg mb-1">{member.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{member.role}</p>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-mono text-primary">{member.specialty}</span>
                    </div>
                  </div>

                  {/* Corner tech details */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-t border-l border-primary/20" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
