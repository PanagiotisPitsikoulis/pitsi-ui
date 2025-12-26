"use client"

export function StatsServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <div className="mb-20 text-center">
          <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
            By the Numbers
          </p>
          <h2 className="font-display text-foreground text-3xl font-bold md:text-5xl">
            Plants Delivered with Care
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "50K+", label: "Plants Delivered" },
            { value: "98%", label: "Survival Rate" },
            { value: "15K+", label: "Happy Customers" },
            { value: "200+", label: "Plant Varieties" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-primary mb-2 text-4xl font-bold md:text-6xl">
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
