"use client"

export function StatsProductScifi() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            System Specifications
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Tech Readout
          </h2>
        </div>
        <div className="max-w-6xl mx-auto space-y-4">
          {[
            {
              label: "QUANTUM CORES",
              value: "128",
              unit: "cores",
              bar: 95,
            },
            {
              label: "ENERGY EFFICIENCY",
              value: "99.2",
              unit: "%",
              bar: 99,
            },
            {
              label: "PROCESSING SPEED",
              value: "5.8",
              unit: "GHz",
              bar: 87,
            },
            {
              label: "UNITS DEPLOYED",
              value: "847K",
              unit: "global",
              bar: 78,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="border border-primary/30 rounded p-6 bg-gradient-to-r from-primary/5 to-transparent"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs tracking-[0.2em] text-muted-foreground font-mono">
                    {stat.label}
                  </span>
                  <span className="text-4xl font-bold text-primary font-mono">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground font-mono">
                    {stat.unit}
                  </span>
                </div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-1000"
                  style={{ width: `${stat.bar}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
