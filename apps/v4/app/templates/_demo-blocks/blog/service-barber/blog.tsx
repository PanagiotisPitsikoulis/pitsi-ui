"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogServiceBarber() {
  const articles = [
    {
      title: "The Classic Pompadour Revival",
      excerpt: "Vintage styling meets modern technique. Learn how we're bringing back this timeless look for today's gentleman.",
      style: "Pompadour",
      era: "1950s Classic",
      image: "/placeholders/blocks/service-barber/1.webp",
    },
    {
      title: "Fade Techniques: From Military to Modern",
      excerpt: "The evolution of the fade cut through the decades. A masterclass in precision barbering.",
      style: "Fade",
      era: "Contemporary",
      image: "/placeholders/blocks/service-barber/2.webp",
    },
    {
      title: "Beard Grooming Essentials",
      excerpt: "Master the art of beard maintenance with our comprehensive guide to oils, balms, and styling techniques.",
      style: "Grooming",
      era: "Timeless",
      image: "/placeholders/blocks/service-barber/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(0deg,#000_0px,#000_1px,transparent_1px,transparent_2px)]" />

      <div className="container px-6 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-border" />
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-semibold">Style Guide</span>
            <div className="h-px w-16 bg-border" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: 'serif' }}>
            Barbershop Chronicles
          </h2>
          <p className="text-muted-foreground italic">
            Classic cuts, timeless style, modern techniques
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="relative bg-card border-4 border-border/60 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                {/* Vintage clipping effect */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground/10 rotate-45 blur-sm" />

                <div className="relative aspect-[3/4] overflow-hidden bg-muted border-b-4 border-border/60">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />

                  {/* Vintage stamp effect */}
                  <div className="absolute bottom-3 right-3 border-2 border-primary/60 px-3 py-1 rotate-6 bg-background/80">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                      {article.era}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-px bg-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {article.style}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight" style={{ fontFamily: 'serif' }}>
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="pt-3 flex items-center gap-2">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider group-hover:underline">
                      Read Article
                    </span>
                    <span className="text-primary">→</span>
                  </div>
                </div>

                {/* Vintage corner decoration */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-border/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-border/40" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
