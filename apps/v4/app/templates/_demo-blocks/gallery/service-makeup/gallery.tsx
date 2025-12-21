"use client"

import Image from "next/image"

export function GalleryServiceMakeup() {
  const transformations = [
    { before: "1.webp", after: "2.webp", style: "Natural Glow" },
    { before: "3.webp", after: "4.webp", style: "Evening Glam" },
    { before: "5.webp", after: "6.webp", style: "Bridal Beauty" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Transformation Gallery</h2>
          <p className="text-muted-foreground mt-4">See the magic happen</p>
        </div>

        {/* Before/after grid with split images */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {transformations.map((item, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-center text-2xl font-bold text-foreground">{item.style}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Before */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src={`/placeholders/blocks/service-makeup/${item.before}`}
                    alt="Before"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-black/60 text-white text-sm font-bold rounded-full backdrop-blur-sm">
                      BEFORE
                    </span>
                  </div>
                </div>

                {/* After */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src={`/placeholders/blocks/service-makeup/${item.after}`}
                    alt="After"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
