"use client"

export function StatsServiceMarketing() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Results that Matter
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Driving Growth
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 rounded-lg">
              <div className="inline-flex items-baseline mb-3">
                <span className="text-6xl md:text-7xl font-bold text-primary">
                  284
                </span>
                <span className="text-3xl text-primary ml-1">%</span>
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                Average ROI
              </div>
              <p className="text-sm text-muted-foreground">
                Client campaigns 2024
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 rounded-lg">
              <div className="inline-flex items-baseline mb-3">
                <span className="text-6xl md:text-7xl font-bold text-primary">
                  1.8
                </span>
                <span className="text-3xl text-primary ml-1">M</span>
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                Leads Generated
              </div>
              <p className="text-sm text-muted-foreground">
                Across all channels
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 rounded-lg">
              <div className="inline-flex items-baseline mb-3">
                <span className="text-6xl md:text-7xl font-bold text-primary">
                  520
                </span>
                <span className="text-3xl text-primary ml-1">+</span>
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                Campaigns Launched
              </div>
              <p className="text-sm text-muted-foreground">
                Multi-channel strategies
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-12">
            {[
              { value: "92%", label: "Client Retention" },
              { value: "4.9/5", label: "Satisfaction Score" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
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
