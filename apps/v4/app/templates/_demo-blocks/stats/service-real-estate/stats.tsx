"use client"

export function StatsServiceRealEstate() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Market Leader
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Proven Track Record
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-6xl md:text-7xl font-bold text-primary">
                  $2.4
                </span>
                <span className="text-3xl text-primary">B</span>
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">
                Total Sales Volume
              </div>
              <p className="text-muted-foreground">
                Lifetime property transactions
              </p>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-6xl md:text-7xl font-bold text-primary">
                  1,847
                </span>
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">
                Properties Sold
              </div>
              <p className="text-muted-foreground">
                Residential and commercial
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "92%", label: "Above Asking Price" },
              { value: "28 days", label: "Average Time on Market" },
              { value: "2,400+", label: "Happy Clients" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 border rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
