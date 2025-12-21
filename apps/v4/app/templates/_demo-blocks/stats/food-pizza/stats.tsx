"use client"

export function StatsFoodPizza() {
  return (
    <section className="bg-foreground text-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Order Counter
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Fresh Stats Daily</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: "847,293", label: "Pizzas Served", symbol: "🍕" },
            { value: "25,600", label: "Slices Today", symbol: "📊" },
            { value: "4.8/5.0", label: "Average Rating", symbol: "⭐" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 rounded-lg bg-background/5">
              <div className="text-4xl mb-4">{stat.symbol}</div>
              <div className="text-5xl md:text-6xl font-bold text-primary font-mono tracking-tighter mb-2">
                {stat.value}
              </div>
              <p className="text-background/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
