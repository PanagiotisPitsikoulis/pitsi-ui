"use client"

export function LogosAiSciFi() {
  const alliances = [
    "TERRAN COALITION",
    "ORBITAL DEFENSE",
    "MARS SYNDICATE",
    "LUNAR FACTION",
    "TITAN PROTOCOL",
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted-foreground/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-xs text-muted-foreground tracking-widest">
              ALLIED FACTIONS
            </span>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-6">
          {alliances.map((alliance, i) => (
            <div
              key={i}
              className="text-muted-foreground/40 font-bold text-sm md:text-base tracking-[0.3em] hover:text-primary transition-colors hover:tracking-[0.4em] duration-300"
            >
              [{alliance}]
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
