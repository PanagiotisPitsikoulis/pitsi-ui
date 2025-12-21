"use client"

import Image from "next/image"

export function GalleryServiceBarber() {
  const styles = [
    { name: "Classic Fade", image: "1.webp" },
    { name: "Modern Pompadour", image: "2.webp" },
    { name: "Textured Crop", image: "3.webp" },
    { name: "Slick Back", image: "4.webp" },
    { name: "Undercut", image: "5.webp" },
    { name: "Quiff Style", image: "6.webp" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Style Portfolio</h2>
        </div>

        {/* Style portfolio with before/after hints */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {styles.map((style, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900"
            >
              <Image
                src={`/placeholders/blocks/service-barber/${style.image}`}
                alt={style.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-bold text-xl">{style.name}</h3>
                    <span className="text-primary text-xs font-semibold px-3 py-1 bg-black/40 rounded-full">
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
