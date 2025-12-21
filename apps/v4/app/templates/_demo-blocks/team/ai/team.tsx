"use client"

import Image from "next/image"

export function TeamAi() {
  const team = [
    { name: "Dr. Sarah Chen", role: "Chief AI Architect", image: "/placeholders/blocks/ai/3.webp", connections: [1, 2] },
    { name: "Marcus Rodriguez", role: "ML Engineer", image: "/placeholders/blocks/ai/4.webp", connections: [0, 3] },
    { name: "Nina Patel", role: "Data Scientist", image: "/placeholders/blocks/ai/5.webp", connections: [0, 3] },
    { name: "James Liu", role: "AI Research Lead", image: "/placeholders/blocks/ai/6.webp", connections: [1, 2] },
  ]

  return (
    <section className="relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-wider uppercase font-medium mb-4">Neural Network</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our AI Team
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Connected minds driving innovation
          </p>
        </div>

        {/* Neural network layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
            <line x1="25%" y1="30%" x2="75%" y2="30%" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <line x1="25%" y1="30%" x2="25%" y2="70%" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <line x1="75%" y1="30%" x2="75%" y2="70%" stroke="currentColor" strokeWidth="2" className="text-primary" />
            <line x1="25%" y1="70%" x2="75%" y2="70%" stroke="currentColor" strokeWidth="2" className="text-primary" />
          </svg>

          <div className="grid grid-cols-2 gap-12 md:gap-24 relative">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center group relative z-10">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
                  {/* Neural node ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
                  <div className="absolute inset-2 rounded-full border border-primary/20" />
                  <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-background bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Connection node */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
