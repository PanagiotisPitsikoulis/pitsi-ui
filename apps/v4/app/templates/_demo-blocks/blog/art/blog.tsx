"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogArt() {
  const exhibitions = [
    {
      title: "Chromatic Abstractions",
      artist: "Elena Rodriguez",
      curatorNote: "A masterful exploration of color theory through non-representational forms. Rodriguez challenges traditional perceptions of space and dimension.",
      period: "Contemporary, 2024",
      medium: "Mixed Media on Canvas",
      image: "/placeholders/blocks/art/1.webp",
    },
    {
      title: "Urban Metamorphosis",
      artist: "James Chen",
      curatorNote: "Chen's photographic series captures the raw beauty of architectural decay and renewal in post-industrial landscapes.",
      period: "21st Century Photography",
      medium: "Archival Pigment Print",
      image: "/placeholders/blocks/art/2.webp",
    },
    {
      title: "Whispers in Clay",
      artist: "Amara Okafor",
      curatorNote: "Traditional techniques meet contemporary narratives in this striking collection of ceramic sculptures inspired by ancestral storytelling.",
      period: "Contemporary Sculpture",
      medium: "Ceramic, Gold Leaf",
      image: "/placeholders/blocks/art/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="inline-block border-t border-b border-border py-2 px-8 mb-6">
            <span className="text-sm tracking-[0.4em] uppercase text-muted-foreground">Exhibition Highlights</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-serif font-light text-foreground">
            Current Collections
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {exhibitions.map((exhibit, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden mb-6 bg-muted">
                <Image
                  src={exhibit.image}
                  alt={exhibit.title}
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="border-l-2 border-border pl-4 space-y-3">
                <div>
                  <h3 className="text-xl font-serif text-foreground mb-1 group-hover:text-primary transition-colors">
                    {exhibit.title}
                  </h3>
                  <p className="text-sm italic text-muted-foreground">
                    {exhibit.artist}
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Period:</span> {exhibit.period}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Medium:</span> {exhibit.medium}
                  </p>
                </div>

                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Curator's Note
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {exhibit.curatorNote}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
