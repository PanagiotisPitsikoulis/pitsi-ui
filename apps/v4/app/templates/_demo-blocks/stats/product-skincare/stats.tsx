"use client"

export function StatsProductSkincare() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Clinical Results
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Proven Performance
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                percentage: "94%",
                label: "Visible Improvement",
                timeframe: "Within 2 weeks",
              },
              {
                percentage: "87%",
                label: "Hydration Increase",
                timeframe: "After first use",
              },
              {
                percentage: "91%",
                label: "Would Recommend",
                timeframe: "Customer survey",
              },
              {
                percentage: "100%",
                label: "Natural Ingredients",
                timeframe: "Certified organic",
              },
            ].map((stat, i) => (
              <div key={i} className="bg-card border rounded-lg p-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-bold text-primary">
                    {stat.percentage}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.timeframe}
                  </span>
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center p-6 border rounded-lg bg-primary/5">
            <p className="text-sm text-muted-foreground mb-2">
              Based on clinical study
            </p>
            <p className="text-lg font-semibold text-foreground">
              <span className="text-3xl text-primary font-bold">250+</span>{" "}
              participants • 8-week trial
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
