"use client"

export function LogosBoat() {
  const partners = [
    "PACIFIC YACHT CLUB",
    "AZURE MARINA",
    "NAUTICAL MASTERS",
    "SEASIDE ALLIANCE",
    "HARBOR ELITE",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Affiliated with premier maritime partners
        </p>
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center gap-12 md:gap-20 flex-wrap">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="relative group"
              >
                <div className="text-muted-foreground/50 font-semibold text-lg md:text-xl tracking-wider hover:text-primary transition-colors uppercase">
                  {partner}
                </div>
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
