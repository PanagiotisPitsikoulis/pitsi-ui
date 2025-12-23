"use client"

import Image from "next/image"

export function GalleryFoodPizza() {
  const menuItems = [
    { name: "Margherita Classic", price: "$12", image: "1.webp" },
    { name: "Pepperoni Supreme", price: "$15", image: "2.webp" },
    { name: "Vegetarian Deluxe", price: "$14", image: "3.webp" },
    { name: "Quattro Formaggi", price: "$16", image: "4.webp" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Our Menu</h2>
        </div>

        {/* Menu item gallery - square tiles with price overlays */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={`/placeholders/blocks/food-pizza/${item.image}`}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-2xl mb-2">{item.name}</h3>
                  <p className="text-primary text-xl font-semibold">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
