"use client"

import Image from "next/image"

export function GalleryAi() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">AI-Powered Visual Analytics</h2>
        </div>

        {/* Asymmetric dashboard-like grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Large left panel */}
          <div className="col-span-12 md:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden border border-border">
            <Image
              src="/placeholders/blocks/ai/1.webp"
              alt="AI Analytics Dashboard"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right vertical panels */}
          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4">
            <div className="relative aspect-[16/9] md:aspect-auto rounded-2xl overflow-hidden border border-border">
              <Image
                src="/placeholders/blocks/ai/2.webp"
                alt="Data Visualization"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[16/9] md:aspect-auto rounded-2xl overflow-hidden border border-border">
              <Image
                src="/placeholders/blocks/ai/3.webp"
                alt="AI Metrics"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bottom row - three panels */}
          <div className="col-span-12 md:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
            <Image
              src="/placeholders/blocks/ai/4.webp"
              alt="Neural Network"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="col-span-12 md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
            <Image
              src="/placeholders/blocks/ai/5.webp"
              alt="Machine Learning"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="col-span-12 md:col-span-3 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
            <Image
              src="/placeholders/blocks/ai/6.webp"
              alt="AI Insights"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
