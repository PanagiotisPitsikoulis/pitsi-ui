"use client"

export function StatsProductCoffee() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Brewing Excellence
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Crafted with Precision
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-7xl md:text-8xl font-bold text-primary mb-4">
                1.2M
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">
                Cups Brewed Annually
              </div>
              <p className="text-muted-foreground">
                From bean to cup, perfection in every pour
              </p>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="text-7xl md:text-8xl font-bold text-primary mb-4">
                42
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">
                Origin Countries
              </div>
              <p className="text-muted-foreground">
                Single-origin beans from around the world
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "15+", label: "Years Roasting" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "24/7", label: "Online Ordering" },
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
