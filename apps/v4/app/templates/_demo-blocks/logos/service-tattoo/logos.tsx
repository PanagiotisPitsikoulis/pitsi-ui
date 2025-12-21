"use client"

export function LogosServiceTattoo() {
  const suppliers = [
    "INK MASTERS PRO",
    "NEEDLE ELITE",
    "SKIN SAFE STUDIOS",
    "TATTOO EXCELLENCE",
    "ART SUPPLY CO.",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Using premium equipment from trusted suppliers
        </p>
        <div className="relative">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              {suppliers.slice(0, 3).map((supplier, i) => (
                <div
                  key={i}
                  className="text-muted-foreground/50 font-bold text-lg md:text-2xl tracking-widest hover:text-primary transition-colors uppercase"
                >
                  {supplier}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              {suppliers.slice(3).map((supplier, i) => (
                <div
                  key={i}
                  className="text-muted-foreground/50 font-bold text-base md:text-xl tracking-widest hover:text-primary transition-colors uppercase"
                >
                  {supplier}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
