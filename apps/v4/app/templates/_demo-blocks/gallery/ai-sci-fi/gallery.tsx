"use client"

import Image from "next/image"

export function GalleryAiSciFi() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Holographic Showcase</h2>
        </div>

        {/* Holographic grid with glowing borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large holographic frame */}
          <div className="md:col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(var(--primary),0.3)] border-2 border-primary/30 hover:border-primary/60 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 pointer-events-none" />
            <Image
              src="/placeholders/blocks/ai-sci-fi/1.webp"
              alt="Holographic Display"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Side panel */}
          <div className="relative aspect-[16/9] md:aspect-auto rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(var(--primary),0.2)] border border-primary/20 hover:border-primary/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent z-10 pointer-events-none" />
            <Image
              src="/placeholders/blocks/ai-sci-fi/2.webp"
              alt="Sci-Fi Interface"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Three equal panels with glow effect */}
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(var(--primary),0.2)] border border-primary/20 hover:border-primary/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 pointer-events-none" />
            <Image
              src="/placeholders/blocks/ai-sci-fi/3.webp"
              alt="Future Tech"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(var(--primary),0.2)] border border-primary/20 hover:border-primary/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent z-10 pointer-events-none" />
            <Image
              src="/placeholders/blocks/ai-sci-fi/4.webp"
              alt="Digital Reality"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(var(--primary),0.2)] border border-primary/20 hover:border-primary/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 pointer-events-none" />
            <Image
              src="/placeholders/blocks/ai-sci-fi/5.webp"
              alt="Cyber Space"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Wide bottom panel */}
          <div className="md:col-span-3 relative aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(var(--primary),0.3)] border-2 border-primary/30 hover:border-primary/60 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 z-10 pointer-events-none" />
            <Image
              src="/placeholders/blocks/ai-sci-fi/6.webp"
              alt="Futuristic Vision"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
