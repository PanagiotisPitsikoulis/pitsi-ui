"use client"

import Image from "next/image"

export function GalleryProductScifi() {
  const products = [
    { name: "Quantum Processor X-9000", specs: "9.2 GHz Neural Core", image: "1.webp" },
    { name: "Holographic Display Pro", specs: "8K Resolution Matrix", image: "2.webp" },
    { name: "Neural Interface V3", specs: "Low-Latency Connection", image: "3.webp" },
    { name: "Photon Battery Cell", specs: "5000mAh Quantum Charge", image: "4.webp" },
    { name: "Gravity Stabilizer", specs: "Anti-Grav Technology", image: "5.webp" },
    { name: "Plasma Shield Generator", specs: "Multi-Layer Protection", image: "6.webp" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Product Lineup</h2>
        </div>

        {/* Horizontal scroll product lineup */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-none w-[300px] md:w-[400px] snap-center group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/20 border border-primary/30">
                  <Image
                    src={`/placeholders/blocks/product-scifi/${product.image}`}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-xl mb-2">{product.name}</h3>
                      <p className="text-primary text-sm font-mono">{product.specs}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      NEW
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          Scroll to explore our full product range
        </p>
      </div>
    </section>
  )
}
