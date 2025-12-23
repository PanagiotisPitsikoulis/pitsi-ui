"use client"

export function StatsServiceMakeup() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Beauty by Numbers
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Artistry & Expertise
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              value: "8,500+",
              label: "Looks Created",
              description: "Bridal, editorial, and special events",
            },
            {
              value: "450+",
              label: "Happy Clients",
              description: "Transformations that inspire confidence",
            },
            {
              value: "200+",
              label: "Product Expertise",
              description: "High-end and professional brands",
            },
            {
              value: "12",
              label: "Years Experience",
              description: "Certified makeup artistry",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-6 p-6 bg-card border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex-shrink-0 text-center min-w-[140px]">
                <div className="text-5xl font-bold text-primary">
                  {stat.value}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xl font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
