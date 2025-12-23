"use client"

export function StatsServicePsychologist() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Professional Impact
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Supporting Mental Wellness
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-8 bg-card border rounded-lg text-center">
            <div className="text-7xl md:text-8xl font-bold text-primary mb-4">
              15,000+
            </div>
            <div className="text-2xl font-semibold text-foreground mb-2">
              Counseling Sessions Completed
            </div>
            <p className="text-muted-foreground">
              Individual, couples, and family therapy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "850+", label: "Clients Supported" },
              { value: "18", label: "Years of Practice" },
              { value: "95%", label: "Positive Outcomes" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 border rounded-lg bg-gradient-to-b from-primary/5 to-transparent"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
