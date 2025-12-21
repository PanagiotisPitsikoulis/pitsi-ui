"use client"

export function LogosProductCoffee() {
  const origins = [
    { name: "COLOMBIAN HIGHLANDS", region: "South America" },
    { name: "ETHIOPIAN ESTATES", region: "East Africa" },
    { name: "SUMATRA SELECT", region: "Indonesia" },
    { name: "COSTA RICA FARMS", region: "Central America" },
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Sourced from the world's finest coffee regions
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {origins.map((origin, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 p-6 hover:bg-muted/30 rounded-lg transition-colors group"
            >
              <div className="text-muted-foreground/50 font-bold text-lg md:text-xl tracking-wider group-hover:text-primary transition-colors">
                {origin.name}
              </div>
              <div className="text-muted-foreground/40 text-xs tracking-wide">
                {origin.region}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
