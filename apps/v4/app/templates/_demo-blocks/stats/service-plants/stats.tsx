"use client"

export function StatsServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Our Impact</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Growing Together
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50K+", label: "Plants Delivered" },
            { value: "98%", label: "Survival Rate" },
            { value: "15K+", label: "Happy Customers" },
            { value: "200+", label: "Plant Varieties" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
