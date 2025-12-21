"use client"

export function LogosServiceMakeup() {
  const brands = [
    "LUMIÈRE BEAUTY",
    "GLOW COSMETICS",
    "RADIANT PRO",
    "VELVET TOUCH",
    "BEAUTY AWARDS 2024",
    "GLAMOUR CHOICE",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Featured by top beauty brands and awards
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-muted-foreground/50 font-semibold text-base md:text-lg tracking-wider hover:text-primary transition-colors px-4 py-2">
                {brand}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
