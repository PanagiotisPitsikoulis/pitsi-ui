"use client"

export function LogosServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-8">
          Trusted by leading brands and publications
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {["Vogue Living", "Architectural Digest", "House Beautiful", "Elle Decor", "Dwell"].map(
            (brand, i) => (
              <div
                key={i}
                className="text-muted-foreground/50 font-semibold text-lg md:text-xl tracking-wider hover:text-primary transition-colors"
              >
                {brand}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
