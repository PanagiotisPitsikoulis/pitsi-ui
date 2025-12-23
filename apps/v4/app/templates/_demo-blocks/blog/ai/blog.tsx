"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogAi() {
  const papers = [
    {
      title: "Neural Architecture Search: A Comprehensive Survey",
      abstract: "We present a comprehensive survey of neural architecture search methods, covering evolutionary algorithms, reinforcement learning, and gradient-based approaches.",
      authors: "Chen et al.",
      citations: 1247,
      year: "2024",
      category: "Machine Learning",
      image: "/placeholders/blocks/ai/1.webp",
    },
    {
      title: "Transformer Models in Computer Vision: Current State and Future",
      abstract: "An in-depth analysis of transformer architectures adapted for vision tasks, including attention mechanisms and positional encodings.",
      authors: "Rodriguez & Kim",
      citations: 892,
      year: "2024",
      category: "Computer Vision",
      image: "/placeholders/blocks/ai/2.webp",
    },
    {
      title: "Federated Learning: Privacy-Preserving Distributed AI",
      abstract: "Exploring federated learning frameworks that enable collaborative model training while maintaining data privacy across distributed systems.",
      authors: "Park et al.",
      citations: 2103,
      year: "2023",
      category: "Distributed Systems",
      image: "/placeholders/blocks/ai/3.webp",
    },
  ]

  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-primary text-xs font-mono uppercase tracking-wider">Research Papers</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Latest Publications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Peer-reviewed research from our team and collaborators
          </p>
        </div>

        <div className="space-y-6">
          {papers.map((paper, i) => (
            <Link
              href="#"
              key={i}
              className="group block border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="grid md:grid-cols-[200px,1fr] gap-6">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={paper.image}
                    alt={paper.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {paper.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{paper.year}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{paper.citations} citations</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {paper.title}
                  </h3>

                  <p className="text-sm text-muted-foreground italic mb-3">
                    {paper.authors}
                  </p>

                  <p className="text-muted-foreground leading-relaxed line-clamp-2">
                    {paper.abstract}
                  </p>

                  <div className="mt-auto pt-4">
                    <span className="text-sm text-primary font-medium group-hover:underline">
                      Read Full Paper →
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
