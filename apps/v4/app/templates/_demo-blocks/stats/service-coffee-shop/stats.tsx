"use client"

export function StatsServiceCoffeeShop() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Daily Brew
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Counting Smiles
          </h2>
        </div>
        <div className="max-w-3xl mx-auto bg-foreground text-background p-12 rounded-lg">
          <div className="space-y-8">
            {[
              { value: "1,247", label: "Cups Today", tally: "||||" },
              { value: "18K+", label: "This Month", tally: "||||" },
              { value: "250K+", label: "This Year", tally: "||||" },
              { value: "2.1M", label: "Since Opening", tally: "||||" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center justify-between pb-6 border-b border-background/20 last:border-0"
              >
                <div className="flex-1">
                  <div className="text-sm tracking-wider opacity-80 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-primary">
                    {stat.value}
                  </div>
                </div>
                <div className="text-6xl font-light opacity-30 select-none">
                  {stat.tally}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
