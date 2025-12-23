"use client"

import Image from "next/image"

export function TeamFoodJuice() {
  const team = [
    { name: "Mia Sunshine", role: "Founder & Juice Artist", fruit: "Mango", color: "bg-orange-500", image: "/placeholders/blocks/food-juice/3.webp" },
    { name: "Leo Fresh", role: "Smoothie Specialist", fruit: "Blueberry", color: "bg-blue-500", image: "/placeholders/blocks/food-juice/4.webp" },
    { name: "Ruby Green", role: "Nutrition Expert", fruit: "Kiwi", color: "bg-green-500", image: "/placeholders/blocks/food-juice/5.webp" },
    { name: "Sam Berry", role: "Bar Manager", fruit: "Strawberry", color: "bg-red-500", image: "/placeholders/blocks/food-juice/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-wider uppercase font-medium mb-4">Fresh Squad</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Meet Your Juice Crew
          </h2>
          <p className="text-muted-foreground mt-4">
            Passionate about bringing you the freshest flavors
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative mb-6">
                {/* Circular avatar with fruit color accent */}
                <div className="relative w-48 h-48 mx-auto">
                  <div className={`absolute inset-0 rounded-full ${member.color} opacity-20 blur-2xl animate-pulse`} />
                  <div className={`absolute inset-0 rounded-full ${member.color} opacity-10`} />
                  <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-background bg-muted shadow-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />
                  </div>
                  {/* Fruit badge */}
                  <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 ${member.color} text-white text-sm font-bold rounded-full shadow-lg`}>
                    {member.fruit}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground text-xl mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
