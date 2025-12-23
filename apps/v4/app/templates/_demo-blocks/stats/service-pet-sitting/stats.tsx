"use client"

export function StatsServicePetSitting() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Paws & Play
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Happy Tails Count
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "12,847", label: "Happy Pets", emoji: "🐾" },
              { value: "4.9/5", label: "Pet Parent Rating", emoji: "⭐" },
              { value: "8,500+", label: "Walks Completed", emoji: "🦴" },
              { value: "24/7", label: "Emergency Care", emoji: "💚" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20">
                  <span className="text-4xl">{stat.emoji}</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
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
