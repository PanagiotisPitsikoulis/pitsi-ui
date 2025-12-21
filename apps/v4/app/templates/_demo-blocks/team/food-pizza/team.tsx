"use client"

import Image from "next/image"
import { ChefHat } from "lucide-react"

export function TeamFoodPizza() {
  const kitchen = [
    { name: "Antonio Rossi", role: "Executive Chef", hat: "3 stars", image: "/placeholders/blocks/food-pizza/3.webp", specialty: "Neapolitan" },
    { name: "Maria Lombardi", role: "Sous Chef", hat: "2 stars", image: "/placeholders/blocks/food-pizza/4.webp", specialty: "Wood-Fired" },
    { name: "Giovanni Costa", role: "Pizzaiolo", hat: "2 stars", image: "/placeholders/blocks/food-pizza/5.webp", specialty: "Traditional" },
    { name: "Sofia Benedetti", role: "Pastry Chef", hat: "2 stars", image: "/placeholders/blocks/food-pizza/6.webp", specialty: "Desserts" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ChefHat className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Kitchen Brigade
          </h2>
          <p className="text-muted-foreground mt-4">
            Masters of authentic Italian cuisine
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kitchen.map((member, i) => (
            <div key={i} className="group">
              <div className="relative border-2 border-border bg-card overflow-hidden hover:border-primary/50 transition-all">
                {/* Chef hat decoration */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
                    <ChefHat className="w-5 h-5" />
                  </div>
                </div>

                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Stars badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded">
                    {member.hat}
                  </div>
                </div>

                <div className="p-5 text-center">
                  <h3 className="font-bold text-foreground text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <div className="text-xs text-primary font-medium">
                    Specialty: {member.specialty}
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
