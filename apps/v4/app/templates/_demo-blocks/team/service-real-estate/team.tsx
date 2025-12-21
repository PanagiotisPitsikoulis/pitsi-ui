"use client"

import Image from "next/image"
import { Home, Award, TrendingUp } from "lucide-react"

export function TeamServiceRealEstate() {
  const agents = [
    { name: "Jennifer Hamilton", role: "Senior Broker", sales: "$45M", years: "15 years", image: "/placeholders/blocks/service-real-estate/3.webp" },
    { name: "Robert Mitchell", role: "Luxury Specialist", sales: "$38M", years: "12 years", image: "/placeholders/blocks/service-real-estate/4.webp" },
    { name: "Amanda Foster", role: "Commercial Agent", sales: "$52M", years: "18 years", image: "/placeholders/blocks/service-real-estate/5.webp" },
    { name: "Daniel Cruz", role: "Investment Advisor", sales: "$41M", years: "14 years", image: "/placeholders/blocks/service-real-estate/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Home className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Meet Our Agents
          </h2>
          <p className="text-muted-foreground mt-4">
            Award-winning professionals finding your perfect property
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, i) => (
            <div key={i} className="group">
              <div className="bg-card border border-border overflow-hidden hover:shadow-xl transition-all">
                {/* Professional agent photo */}
                <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Award badge */}
                  <div className="absolute top-4 right-4 bg-amber-500 text-white p-2 rounded-full shadow-lg">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-b from-card to-muted/10">
                  <h3 className="font-bold text-foreground text-lg mb-1">{agent.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{agent.role}</p>

                  {/* Sales stats */}
                  <div className="space-y-2 pt-3 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Total Sales</span>
                      </div>
                      <span className="text-sm font-bold text-primary">{agent.sales}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Award className="w-3.5 h-3.5" />
                        <span>Experience</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">{agent.years}</span>
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
