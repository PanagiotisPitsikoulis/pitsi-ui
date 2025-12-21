"use client"

export function StatsArt() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Exhibition Impact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Gallery by Numbers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { value: "2,400+", label: "Artworks Exhibited" },
            { value: "180", label: "Featured Artists" },
            { value: "50K+", label: "Annual Visitors" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mb-4 inline-block">
                <div className="text-6xl md:text-8xl font-bold text-primary italic">
                  {stat.value}
                </div>
                <div className="h-1 bg-primary mt-2" />
              </div>
              <p className="text-xl text-muted-foreground font-light tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
