"use client"

import Image from "next/image"

export function GalleryFoodJuice() {
  const ingredients = [
    { name: "Fresh Oranges", image: "1.webp" },
    { name: "Tropical Mango", image: "2.webp" },
    { name: "Berry Blend", image: "3.webp" },
    { name: "Green Detox", image: "4.webp" },
    { name: "Citrus Mix", image: "5.webp" },
    { name: "Superfood Smoothie", image: "6.webp" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Fresh Ingredients</h2>
        </div>

        {/* Colorful ingredient showcase grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ingredients.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10"
            >
              <Image
                src={`/placeholders/blocks/food-juice/${item.image}`}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
