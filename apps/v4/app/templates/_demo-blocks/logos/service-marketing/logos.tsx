"use client"

export function LogosServiceMarketing() {
  const clients = [
    "TECHCORP",
    "INNOVATE INC",
    "BRAND MASTERS",
    "DIGITAL FRONTIER",
    "GROWTH PARTNERS",
    "MARKET LEADERS",
    "SCALE VENTURES",
    "FUTURE BRANDS",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Trusted by innovative companies worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-20 border border-muted-foreground/10 rounded hover:border-primary/50 transition-colors group"
            >
              <div className="text-muted-foreground/50 font-semibold text-sm md:text-base tracking-wide group-hover:text-primary transition-colors text-center px-4">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
