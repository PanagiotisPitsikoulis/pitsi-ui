"use client"

import Link from "next/link"

export function BlogProductCoffee() {
  const guides = [
    {
      title: "The Perfect Pour Over: A Step-by-Step Guide",
      excerpt: "Master the art of pour over coffee with our detailed brewing guide. Learn water temperature, pour technique, and timing for the perfect cup.",
      method: "Pour Over",
      difficulty: "Intermediate",
      brewTime: "3-4 min",
      tags: ["Technique", "Brewing"],
    },
    {
      title: "Understanding Coffee Origins: From Bean to Cup",
      excerpt: "Explore how geography, altitude, and processing methods influence your coffee's flavor profile. A journey through the world's best coffee regions.",
      method: "Education",
      difficulty: "Beginner",
      brewTime: "Read: 7 min",
      tags: ["Origins", "Knowledge"],
    },
    {
      title: "Dialing In Your Espresso: The Ultimate Guide",
      excerpt: "Fine-tune your espresso shots like a professional barista. Learn about grind size, pressure, and extraction time for consistent results.",
      method: "Espresso",
      difficulty: "Advanced",
      brewTime: "25-30 sec",
      tags: ["Espresso", "Advanced"],
    },
  ]

  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,80,50,0.03),transparent_50%)]" />

      <div className="container px-6 relative">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Brew Guides</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: 'serif' }}>
            Coffee Knowledge
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert guides and techniques for brewing exceptional coffee at home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="relative h-full border-2 border-border rounded-lg p-6 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                {/* Coffee stain decoration */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/5 blur-sm" />
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-primary/10 blur-sm" />

                <div className="relative space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded">
                      {guide.method}
                    </span>
                    <span className="text-xs text-muted-foreground border border-border px-2 py-1 rounded">
                      {guide.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {guide.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {guide.excerpt}
                  </p>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs text-muted-foreground">{guide.brewTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {guide.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs text-muted-foreground">
                          #{tag}
                        </span>
                      ))}
                    </div>
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
