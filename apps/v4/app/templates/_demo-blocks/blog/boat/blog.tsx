"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogBoat() {
  const logEntries = [
    {
      title: "Navigating the Adriatic: A Captain's Perspective",
      excerpt: "The winds were favorable as we set sail from Dubrovnik. Crystal waters and ancient coastlines remind us why we chose this life at sea.",
      date: "November 18, 2024",
      weather: "Clear skies, 15kt winds",
      location: "Adriatic Sea",
      image: "/placeholders/blocks/boat/1.webp",
    },
    {
      title: "Maintenance at Sea: Lessons from 20 Years of Sailing",
      excerpt: "A well-maintained vessel is a safe vessel. Today we share our hard-earned wisdom about keeping your boat in pristine condition.",
      date: "November 12, 2024",
      weather: "Partly cloudy, calm seas",
      location: "Marina Porto Montenegro",
      image: "/placeholders/blocks/boat/2.webp",
    },
    {
      title: "The Art of Reading the Tides",
      excerpt: "Understanding tidal patterns is crucial for safe passage. Here's what decades of experience have taught us about working with nature, not against it.",
      date: "November 5, 2024",
      weather: "Overcast, moderate swell",
      location: "Bay of Kotor",
      image: "/placeholders/blocks/boat/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 pb-8 border-b-2 border-border">
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-serif text-foreground mb-4">
              Captain's Log
            </h2>
            <p className="text-muted-foreground italic">
              Chronicles from the open water
            </p>
          </div>

          <div className="space-y-12">
            {logEntries.map((entry, i) => (
              <Link
                href="#"
                key={i}
                className="group block"
              >
                <div className="border-2 border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="relative aspect-[21/9] bg-muted">
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{entry.date}</span>
                      </div>
                      <span>•</span>
                      <span>{entry.location}</span>
                      <span>•</span>
                      <span className="italic">{entry.weather}</span>
                    </div>

                    <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                      {entry.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed line-clamp-2">
                      {entry.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-primary">
                      <span className="text-sm font-medium group-hover:underline">Read full entry</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
