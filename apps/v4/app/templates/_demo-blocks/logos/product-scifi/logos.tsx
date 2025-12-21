"use client"

export function LogosProductScifi() {
  const alliances = [
    "INTERSTELLAR SPACE AGENCY",
    "QUANTUM TECH CORP",
    "NEXUS SYSTEMS",
    "STELLAR DYNAMICS",
    "FUSION INDUSTRIES",
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center text-muted-foreground text-xs tracking-[0.2em] mb-8">
          TECHNOLOGY PARTNERS
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
            {alliances.map((alliance, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 border-r border-muted-foreground/10 last:border-r-0 hover:bg-primary/5 transition-colors group"
              >
                <div className="text-muted-foreground/40 font-bold text-xs md:text-sm text-center tracking-wider group-hover:text-primary transition-colors uppercase">
                  {alliance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
