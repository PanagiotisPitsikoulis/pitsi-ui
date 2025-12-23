"use client"

export function StatsAiSciFi() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            System Status
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Neural Network Performance
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "8.7", label: "PetaFLOPS", sublabel: "Processing Power" },
            {
              value: "99.97",
              label: "% Uptime",
              sublabel: "System Reliability",
            },
            {
              value: "3.2M",
              label: "Nodes",
              sublabel: "Neural Connections",
            },
            { value: "156", label: "Countries", sublabel: "Global Reach" },
          ].map((stat, i) => (
            <div
              key={i}
              className="relative p-6 rounded-lg border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent"
            >
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="text-4xl md:text-5xl font-bold text-primary mb-1 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
              <div className="mt-4 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
