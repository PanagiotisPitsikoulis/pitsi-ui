"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogServiceTattoo() {
  const spotlights = [
    {
      title: "Minimalist Blackwork: The Art of Simplicity",
      excerpt: "Exploring the elegant world of minimalist tattoo design where less is more. Clean lines, bold statements, timeless beauty.",
      artist: "Marcus Kane",
      style: "Blackwork",
      specialty: "Minimalist",
      portfolio: "View 24 works",
      image: "/placeholders/blocks/service-tattoo/1.webp",
    },
    {
      title: "Traditional Japanese Irezumi Masters",
      excerpt: "Honoring the ancient art of Japanese tattooing. Intricate patterns, mythological creatures, and centuries of tradition.",
      artist: "Yuki Tanaka",
      style: "Irezumi",
      specialty: "Japanese Traditional",
      portfolio: "View 32 works",
      image: "/placeholders/blocks/service-tattoo/2.webp",
    },
    {
      title: "Watercolor Dreams: Contemporary Expression",
      excerpt: "Breaking boundaries with vibrant watercolor techniques. Abstract art meets skin in these stunning contemporary pieces.",
      artist: "Sofia Rivera",
      style: "Watercolor",
      specialty: "Abstract/Contemporary",
      portfolio: "View 18 works",
      image: "/placeholders/blocks/service-tattoo/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-border" />
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-bold">Artist Spotlights</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Featured Artists
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the talented artists behind our most iconic work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {spotlights.map((spotlight, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="relative h-full">
                <div className="bg-card border-2 border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  {/* Portfolio grid preview */}
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    <Image
                      src={spotlight.image}
                      alt={spotlight.title}
                      fill
                      className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                    {/* Artist signature style */}
                    <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded border border-border shadow-sm">
                      <p className="text-xs font-bold text-foreground">{spotlight.artist}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{spotlight.style}</p>
                    </div>

                    {/* Portfolio count */}
                    <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {spotlight.portfolio}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        {spotlight.specialty}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {spotlight.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {spotlight.excerpt}
                    </p>

                    <div className="pt-3 flex items-center justify-between border-t border-border/50">
                      <span className="text-xs text-muted-foreground italic">Artist Bio & Portfolio</span>
                      <div className="flex items-center gap-2 text-primary">
                        <span className="text-sm font-semibold group-hover:underline">View More</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Corner frame decoration */}
                  <div className="absolute top-0 left-0 w-6 h-6">
                    <div className="absolute top-0 left-0 w-full h-px bg-primary/30" />
                    <div className="absolute top-0 left-0 h-full w-px bg-primary/30" />
                  </div>
                  <div className="absolute top-0 right-0 w-6 h-6">
                    <div className="absolute top-0 right-0 w-full h-px bg-primary/30" />
                    <div className="absolute top-0 right-0 h-full w-px bg-primary/30" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-6 h-6">
                    <div className="absolute bottom-0 left-0 w-full h-px bg-primary/30" />
                    <div className="absolute bottom-0 left-0 h-full w-px bg-primary/30" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-primary/30" />
                    <div className="absolute bottom-0 right-0 h-full w-px bg-primary/30" />
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
