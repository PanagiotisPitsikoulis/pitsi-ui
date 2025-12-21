"use client"

export function StatsServiceTattoo() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Ink Statistics
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Art on Skin
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "3,200+",
                label: "Pieces Completed",
                detail: "Custom designs",
              },
              {
                value: "15,000+",
                label: "Hours of Ink",
                detail: "Dedication to craft",
              },
              {
                value: "28",
                label: "Styles Mastered",
                detail: "Traditional to modern",
              },
              {
                value: "4.9/5",
                label: "Client Rating",
                detail: "Trusted artistry",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="relative p-6 border-2 border-foreground bg-background"
              >
                <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-foreground bg-background" />
                <div className="absolute -top-3 -right-3 w-6 h-6 border-2 border-foreground bg-background" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-foreground bg-background" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-foreground bg-background" />
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
