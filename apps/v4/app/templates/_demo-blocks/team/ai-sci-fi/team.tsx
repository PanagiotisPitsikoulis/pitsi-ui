"use client"

import Image from "next/image"

export function TeamAiSciFi() {
  const crew = [
    { name: "Commander Aria Voss", role: "Mission Commander", rank: "CMD", image: "/placeholders/blocks/ai-sci-fi/3.webp", status: "ACTIVE" },
    { name: "Lt. Kai Nakamura", role: "Navigation Officer", rank: "LT", image: "/placeholders/blocks/ai-sci-fi/4.webp", status: "ACTIVE" },
    { name: "Dr. Zara Quinn", role: "Science Officer", rank: "SCI", image: "/placeholders/blocks/ai-sci-fi/5.webp", status: "ACTIVE" },
    { name: "Sgt. Rex Hunter", role: "Security Chief", rank: "SEC", image: "/placeholders/blocks/ai-sci-fi/6.webp", status: "ACTIVE" },
  ]

  return (
    <section className="relative">
      <div className="container px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-mono">CREW ROSTER</p>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center">
            Mission Personnel
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {crew.map((member, i) => (
            <div key={i} className="group relative">
              {/* HUD Panel */}
              <div className="relative border border-primary/30 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/60 transition-all duration-300">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />

                <div className="flex gap-6">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/20 clip-path-hexagon" />
                    <div className="absolute inset-1 overflow-hidden clip-path-hexagon bg-muted">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Rank badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-mono font-bold">
                      {member.rank}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-primary">STATUS:</span>
                      <span className="text-xs font-mono text-green-500">{member.status}</span>
                    </div>
                  </div>
                </div>

                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
