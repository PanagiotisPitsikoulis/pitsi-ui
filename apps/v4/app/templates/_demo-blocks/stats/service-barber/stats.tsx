"use client"

export function StatsServiceBarber() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Experience Counts
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Classic Craftsmanship
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="text-center flex-1">
              <div className="inline-flex flex-col items-center justify-center w-40 h-40 rounded-full border-8 border-primary bg-card mb-4">
                <div className="text-5xl font-bold text-primary">28</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <p className="text-lg font-medium text-foreground">
                In Business
              </p>
            </div>
            <div className="text-center flex-1">
              <div className="inline-flex flex-col items-center justify-center w-40 h-40 rounded-full border-8 border-primary bg-card mb-4">
                <div className="text-5xl font-bold text-primary">85K+</div>
                <div className="text-sm text-muted-foreground">Total</div>
              </div>
              <p className="text-lg font-medium text-foreground">
                Cuts Completed
              </p>
            </div>
            <div className="text-center flex-1">
              <div className="inline-flex flex-col items-center justify-center w-40 h-40 rounded-full border-8 border-primary bg-card mb-4">
                <div className="text-5xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">/ 5.0</div>
              </div>
              <p className="text-lg font-medium text-foreground">
                Customer Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
