"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogServicePetSitting() {
  const tips = [
    {
      title: "First-Time Dog Owner? Essential Training Tips",
      excerpt: "Everything new dog parents need to know about house training, basic commands, and creating a loving bond with your furry friend.",
      category: "Training",
      petType: "Dogs",
      readTime: "5 min",
      image: "/placeholders/blocks/service-pet-sitting/1.webp",
    },
    {
      title: "Cat Care 101: Creating the Purr-fect Home",
      excerpt: "From litter boxes to scratching posts, learn how to create a safe and enriching environment for your feline companion.",
      category: "Care Guide",
      petType: "Cats",
      readTime: "4 min",
      image: "/placeholders/blocks/service-pet-sitting/2.webp",
    },
    {
      title: "Summer Safety: Keeping Pets Cool and Comfortable",
      excerpt: "Expert advice on protecting your pets from heat, ensuring proper hydration, and recognizing signs of overheating during summer months.",
      category: "Health",
      petType: "All Pets",
      readTime: "6 min",
      image: "/placeholders/blocks/service-pet-sitting/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
            <span className="text-primary text-sm uppercase tracking-wider font-semibold">Pet Care Tips</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Happy & Healthy Pets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice for caring for your beloved companions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="h-full bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />

                  {/* Cute paw print decoration */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                    </svg>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {tip.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{tip.petType}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {tip.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {tip.excerpt}
                  </p>

                  <div className="pt-3 flex items-center justify-between border-t border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs">{tip.readTime}</span>
                    </div>
                    <span className="text-sm text-primary font-semibold group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>

                {/* Decorative paw prints */}
                <div className="absolute bottom-2 left-2 opacity-5 pointer-events-none">
                  <svg className="w-8 h-8 text-foreground transform rotate-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
