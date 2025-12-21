"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogServiceGym() {
  const workouts = [
    {
      title: "Full Body HIIT: 30-Minute Fat Burner",
      excerpt: "High-intensity interval training that targets every major muscle group. Perfect for busy schedules and maximum calorie burn.",
      difficulty: "Advanced",
      duration: "30 min",
      category: "HIIT",
      equipment: ["Dumbbells", "Mat"],
      image: "/placeholders/blocks/service-gym/1.webp",
    },
    {
      title: "Beginner's Strength Training Blueprint",
      excerpt: "Build a solid foundation with this comprehensive strength program designed for those new to resistance training.",
      difficulty: "Beginner",
      duration: "45 min",
      category: "Strength",
      equipment: ["Barbell", "Bench"],
      image: "/placeholders/blocks/service-gym/2.webp",
    },
    {
      title: "Core Power: Advanced Ab Workout",
      excerpt: "Sculpt a rock-solid core with these challenging exercises that go beyond basic crunches. Transform your midsection.",
      difficulty: "Intermediate",
      duration: "20 min",
      category: "Core",
      equipment: ["Mat", "Medicine Ball"],
      image: "/placeholders/blocks/service-gym/3.webp",
    },
  ]

  const difficultyColors = {
    Beginner: "bg-green-500/10 text-green-600 border-green-500/30",
    Intermediate: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30",
    Advanced: "bg-red-500/10 text-red-600 border-red-500/30",
  }

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-1 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Workout Guides</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase">
              Train Hard
            </h2>
            <p className="text-muted-foreground text-lg mt-2">
              Expert-designed workouts for every fitness level
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workouts.map((workout, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="h-full bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                  <Image
                    src={workout.image}
                    alt={workout.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                  {/* Difficulty badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${difficultyColors[workout.difficulty as keyof typeof difficultyColors]}`}>
                      {workout.difficulty}
                    </span>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs font-bold text-foreground">{workout.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {workout.category}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {workout.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {workout.excerpt}
                  </p>

                  <div className="pt-3 border-t border-border/50">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Equipment Needed
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {workout.equipment.map((item, idx) => (
                        <span key={idx} className="text-xs bg-muted text-foreground px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-sm font-bold text-primary uppercase tracking-wide group-hover:underline">
                      View Workout →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
