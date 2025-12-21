"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogServiceMakeup() {
  const tutorials = [
    {
      title: "The Perfect Everyday Natural Look",
      description: "Achieve a fresh, effortless makeup look perfect for any occasion. Learn the essential steps for a radiant, natural finish.",
      steps: 6,
      duration: "15 min",
      level: "Beginner",
      products: ["Foundation", "Mascara", "Lip Tint"],
      image: "/placeholders/blocks/service-makeup/1.webp",
    },
    {
      title: "Glamorous Evening Smokey Eye",
      description: "Create a stunning smokey eye perfect for special events. Master blending techniques and product application for dramatic results.",
      steps: 8,
      duration: "25 min",
      level: "Intermediate",
      products: ["Eyeshadow Palette", "Eyeliner", "False Lashes"],
      image: "/placeholders/blocks/service-makeup/2.webp",
    },
    {
      title: "Flawless Skin: Full Coverage Tutorial",
      description: "Learn professional techniques for achieving airbrushed, photo-ready skin. Perfect for long-lasting, flawless coverage.",
      steps: 5,
      duration: "20 min",
      level: "Advanced",
      products: ["Primer", "Full Coverage Foundation", "Setting Powder"],
      image: "/placeholders/blocks/service-makeup/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary text-sm uppercase tracking-[0.4em] mb-4">Step-by-Step Tutorials</span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Master Your Look
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional makeup tutorials for every skill level
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                  <Image
                    src={tutorial.image}
                    alt={tutorial.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />

                  {/* Step indicator */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold leading-none">{tutorial.steps}</div>
                      <div className="text-[8px] uppercase">Steps</div>
                    </div>
                  </div>

                  {/* Level badge */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
                    <span className="text-xs font-medium text-foreground">{tutorial.level}</span>
                  </div>

                  {/* Duration at bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-background">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-semibold">{tutorial.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {tutorial.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {tutorial.description}
                  </p>

                  <div className="pt-4 border-t border-border/50 space-y-3">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      Key Products
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tutorial.products.map((product, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-xs text-foreground">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-sm text-primary font-semibold group-hover:underline">
                      View Tutorial →
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
