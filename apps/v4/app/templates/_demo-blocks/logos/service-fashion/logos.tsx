"use client"

export function LogosServiceFashion() {
  const collaborations = [
    "MAISON CLAIRE",
    "ATELIER NOIR",
    "THREADS & CO",
    "STYLE HOUSE",
    "URBAN COUTURE",
    "AVANT FASHION",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Exclusive collaborations with renowned designers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {collaborations.map((brand, i) => (
            <div
              key={i}
              className="text-center text-muted-foreground/50 font-light text-xl md:text-2xl tracking-widest hover:text-primary transition-all hover:scale-105 duration-300"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
