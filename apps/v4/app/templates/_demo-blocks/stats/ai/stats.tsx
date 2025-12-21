"use client"

export function StatsAi() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Performance Metrics
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            AI-Powered Analytics
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              value: "99.9",
              unit: "%",
              label: "Accuracy Rate",
              description: "Model prediction precision",
            },
            {
              value: "2.4",
              unit: "M",
              label: "Data Points",
              description: "Processed daily",
            },
            {
              value: "45",
              unit: "ms",
              label: "Response Time",
              description: "Average latency",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg border bg-card p-8 text-center"
            >
              <div className="mb-4">
                <span className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-3xl md:text-4xl font-bold text-primary ml-1">
                  {stat.unit}
                </span>
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
