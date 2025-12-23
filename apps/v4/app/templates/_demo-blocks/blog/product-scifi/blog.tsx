"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogProductScifi() {
  const specs = [
    {
      title: "Quantum Processor Architecture v3.7",
      excerpt: "Technical specifications and performance benchmarks for the latest quantum computing core. Featuring 256-qubit processing power.",
      specId: "QP-2047-v3.7",
      category: "Hardware",
      version: "3.7.2",
      status: "Stable",
      image: "/placeholders/blocks/product-scifi/1.webp",
    },
    {
      title: "Neural Network Interface Protocol",
      excerpt: "Comprehensive documentation for brain-computer interface implementation. Supports multi-modal sensory integration and real-time neural mapping.",
      specId: "NNI-2047-std",
      category: "Software",
      version: "2.4.1",
      status: "Beta",
      image: "/placeholders/blocks/product-scifi/2.webp",
    },
    {
      title: "Holographic Display System Blueprint",
      excerpt: "Engineering schematics for volumetric holographic projection. Includes spatial light modulator specifications and calibration procedures.",
      specId: "HDS-2047-mk4",
      category: "Display",
      version: "4.0.0",
      status: "Stable",
      image: "/placeholders/blocks/product-scifi/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-primary rounded-full" />
              <div className="w-1 h-1 bg-primary rounded-full" />
              <div className="w-1 h-1 bg-primary rounded-full" />
            </div>
            <span className="text-primary text-xs font-mono uppercase tracking-[0.3em]">Technical Documentation</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground font-mono mb-4">
            SPEC_SHEETS://
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            &gt; Engineering documentation and technical specifications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {specs.map((spec, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="relative h-full border border-primary/30 rounded bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                {/* Blueprint grid overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `
                    linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }} />

                <div className="relative aspect-video bg-muted/50 overflow-hidden border-b border-primary/20">
                  <Image
                    src={spec.image}
                    alt={spec.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/30">
                      {spec.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-muted-foreground">v{spec.version}</span>
                      <div className={`w-2 h-2 rounded-full ${spec.status === 'Stable' ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground font-mono leading-tight group-hover:text-primary transition-colors">
                    {spec.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {spec.excerpt}
                  </p>

                  <div className="pt-3 border-t border-border/50">
                    <p className="text-[10px] font-mono text-muted-foreground mb-2">
                      SPEC_ID: {spec.specId}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-primary">&gt;</span>
                      <span className="text-xs font-mono text-primary group-hover:underline">
                        VIEW_DOCUMENTATION
                      </span>
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
