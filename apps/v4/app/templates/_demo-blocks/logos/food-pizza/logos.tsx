"use client"

export function LogosFoodPizza() {
  const suppliers = [
    "ARTISAN FLOUR CO.",
    "HERITAGE TOMATOES",
    "ALPINE CHEESE",
    "PRIMO OLIVE OIL",
    "FRESH BASIL FARMS",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Made with premium ingredients from trusted suppliers
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          {suppliers.map((supplier, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="text-muted-foreground/50 font-semibold text-base md:text-lg tracking-wide hover:text-primary transition-colors">
                {supplier}
              </div>
              {i < suppliers.length - 1 && (
                <div className="hidden md:block text-muted-foreground/20">•</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
