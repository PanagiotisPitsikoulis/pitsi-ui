"use client"

export function LogosServiceCoffeeShop() {
  const categories = [
    {
      category: "Roasters",
      brands: ["ARTISAN ROAST", "BEAN MASTERS"],
    },
    {
      category: "Equipment",
      brands: ["ESPRESSO PRO", "GRIND TECH"],
    },
    {
      category: "Supplies",
      brands: ["MILK ALTERNATIVE CO.", "PASTRY PARTNERS"],
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Partnering with industry-leading suppliers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="text-muted-foreground/40 text-xs tracking-widest uppercase">
                {cat.category}
              </div>
              <div className="flex flex-col items-center gap-2">
                {cat.brands.map((brand, j) => (
                  <div
                    key={j}
                    className="text-muted-foreground/50 font-semibold text-sm md:text-base tracking-wide hover:text-primary transition-colors text-center"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
