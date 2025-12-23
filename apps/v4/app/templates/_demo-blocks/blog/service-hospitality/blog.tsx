"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogServiceHospitality() {
  const destinations = [
    {
      title: "Hidden Gems of the Italian Riviera",
      excerpt: "Discover charming coastal villages, pristine beaches, and authentic trattorias away from the tourist crowds. Your perfect Mediterranean escape awaits.",
      destination: "Italian Riviera",
      readTime: "6 min read",
      category: "Europe",
      image: "/placeholders/blocks/service-hospitality/1.webp",
    },
    {
      title: "Luxury Safari: Tanzania's Serengeti Experience",
      excerpt: "Witness the great migration and stay in award-winning eco-lodges. An unforgettable journey through Africa's most iconic wildlife reserve.",
      destination: "Tanzania",
      readTime: "8 min read",
      category: "Africa",
      image: "/placeholders/blocks/service-hospitality/2.webp",
    },
    {
      title: "Kyoto's Secret Gardens and Temples",
      excerpt: "Step into tranquility with our curated tour of Kyoto's lesser-known temples, zen gardens, and traditional tea houses.",
      destination: "Japan",
      readTime: "5 min read",
      category: "Asia",
      image: "/placeholders/blocks/service-hospitality/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Travel Stories</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Destination Guides
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated travel experiences from around the world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="relative h-full">
                {/* Postcard-style design */}
                <div className="relative bg-card border-2 border-border rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <Image
                      src={dest.image}
                      alt={dest.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                    {/* Postage stamp decoration */}
                    <div className="absolute top-4 right-4">
                      <div className="relative w-16 h-16 bg-background/90 backdrop-blur-sm border-2 border-dashed border-primary/50 p-1">
                        <div className="w-full h-full border border-primary/30 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">{dest.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Destination tag */}
                    <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                      <p className="text-xs font-semibold text-foreground">{dest.destination}</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {dest.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {dest.excerpt}
                    </p>

                    <div className="pt-3 flex items-center justify-between border-t border-border/50">
                      <span className="text-xs text-muted-foreground">{dest.readTime}</span>
                      <div className="flex items-center gap-2 text-primary">
                        <span className="text-sm font-semibold group-hover:underline">Explore</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Postcard lines decoration */}
                  <div className="absolute bottom-0 right-0 w-1/2 opacity-10 pointer-events-none">
                    <div className="space-y-2 p-4">
                      {[1, 2, 3].map((_, idx) => (
                        <div key={idx} className="h-px bg-foreground" />
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
