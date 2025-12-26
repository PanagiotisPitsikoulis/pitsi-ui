"use client"

export function LogosServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <p className="text-muted-foreground mb-8 text-center text-sm">
          Trusted by leading brands and publications
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            "Vogue Living",
            "Architectural Digest",
            "House Beautiful",
            "Elle Decor",
            "Dwell",
          ].map((brand, i) => (
            <div
              key={i}
              className="text-muted-foreground/50 hover:text-primary text-lg font-semibold tracking-wider transition-colors md:text-xl"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
