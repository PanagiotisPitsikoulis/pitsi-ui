"use client"

export function StatsServiceFashion() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Fashion Forward
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Runway to Reality
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1 text-center md:text-left border-l-4 border-primary pl-6">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-2">
                147
              </div>
              <div className="text-xl font-semibold text-foreground mb-1">
                Fashion Shows
              </div>
              <p className="text-muted-foreground">International runways</p>
            </div>
            <div className="flex-1 text-center md:text-left border-l-4 border-primary pl-6">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-2">
                3.2K
              </div>
              <div className="text-xl font-semibold text-foreground mb-1">
                Looks Created
              </div>
              <p className="text-muted-foreground">Unique designs</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 border-t pt-8">
            {[
              { value: "45+", label: "Press Features" },
              { value: "28", label: "Award Nominations" },
              { value: "850K", label: "Social Followers" },
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
