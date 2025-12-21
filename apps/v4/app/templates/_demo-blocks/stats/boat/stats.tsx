"use client"

export function StatsBoat() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Fleet Performance
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Voyage Statistics
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {[
            { value: "25K+", label: "Nautical Miles", unit: "nm" },
            { value: "850+", label: "Voyages Completed", unit: "trips" },
            { value: "4.9", label: "Safety Rating", unit: "/5.0" },
            { value: "15", label: "Fleet Vessels", unit: "boats" },
          ].map((stat, i) => (
            <div key={i} className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-primary/30 flex flex-col items-center justify-center bg-card">
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.unit}</div>
              </div>
              <p className="text-center mt-4 text-sm font-medium text-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
