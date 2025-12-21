"use client"

export function LogosServiceRealEstate() {
  const partners = [
    "NATIONAL ASSOCIATION OF REALTORS",
    "PREMIER MLS NETWORK",
    "TRUSTED MORTGAGE PARTNERS",
    "ELITE PROPERTY GROUP",
    "REAL ESTATE EXCELLENCE",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-10">
          Members of prestigious real estate networks
        </p>
        <div className="max-w-4xl mx-auto space-y-6">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/20 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full border-2 border-muted-foreground/20 group-hover:border-primary transition-colors flex items-center justify-center">
                <div className="text-muted-foreground/40 text-xs font-bold group-hover:text-primary transition-colors">
                  {i + 1}
                </div>
              </div>
              <div className="text-muted-foreground/50 font-semibold text-base md:text-lg tracking-wide group-hover:text-primary transition-colors">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
