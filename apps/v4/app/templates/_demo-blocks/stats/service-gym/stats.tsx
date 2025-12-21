"use client"

export function StatsServiceGym() {
  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Training Metrics
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Power in Numbers
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2.8M", label: "Total Reps", icon: "💪" },
            { value: "3,400", label: "Active Members", icon: "👥" },
            { value: "120+", label: "Classes Weekly", icon: "📅" },
            { value: "18", label: "Certified Trainers", icon: "🏆" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-lg p-6 text-center"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
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
    </section>
  )
}
