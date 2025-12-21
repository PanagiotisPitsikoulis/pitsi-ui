"use client"

import Image from "next/image"
import { Coffee, Heart } from "lucide-react"

export function TeamServiceCoffeeShop() {
  const baristas = [
    { name: "Alex Rivera", role: "Head Barista", favBrew: "Cortado", artStyle: "Latte Art Pro", image: "/placeholders/blocks/service-coffee-shop/3.webp" },
    { name: "Sam Taylor", role: "Barista", favBrew: "Pour Over", artStyle: "Minimalist", image: "/placeholders/blocks/service-coffee-shop/4.webp" },
    { name: "Jordan Lee", role: "Barista", favBrew: "Flat White", artStyle: "Rosetta", image: "/placeholders/blocks/service-coffee-shop/5.webp" },
    { name: "Casey Morgan", role: "Barista", favBrew: "Cappuccino", artStyle: "Tulip", image: "/placeholders/blocks/service-coffee-shop/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Coffee className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Barista Team
          </h2>
          <p className="text-muted-foreground mt-4">
            Passionate coffee lovers serving you daily
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {baristas.map((barista, i) => (
            <div key={i} className="group">
              <div className="relative bg-card border border-border overflow-hidden hover:shadow-lg transition-all">
                {/* Coffee cup icon badge */}
                <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
                  <Coffee className="w-4 h-4" />
                </div>

                <div className="relative aspect-square bg-muted">
                  <Image
                    src={barista.image}
                    alt={barista.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-foreground text-lg mb-1">{barista.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{barista.role}</p>

                  <div className="space-y-2 pt-3 border-t border-border">
                    <div className="flex items-center gap-2 text-xs">
                      <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                      <span className="text-muted-foreground">Favorite: <span className="text-foreground font-medium">{barista.favBrew}</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Coffee className="w-3.5 h-3.5 text-primary" />
                      <span className="text-muted-foreground">Art: <span className="text-foreground font-medium">{barista.artStyle}</span></span>
                    </div>
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
