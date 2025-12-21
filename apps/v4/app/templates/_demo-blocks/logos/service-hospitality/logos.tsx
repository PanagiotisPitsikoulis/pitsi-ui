"use client"

export function LogosServiceHospitality() {
  const partners = [
    "SKYWAYS INTERNATIONAL",
    "GLOBAL STAYS",
    "LUXURY BOOKINGS",
    "TRAVEL ELITE",
    "PRESTIGE REWARDS",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-10">
          Trusted by premium travel and booking partners
        </p>
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 divide-x divide-muted-foreground/10">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-6 hover:bg-muted/20 transition-colors group"
              >
                <div className="text-muted-foreground/50 font-semibold text-sm md:text-base text-center tracking-wide group-hover:text-primary transition-colors leading-tight">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
