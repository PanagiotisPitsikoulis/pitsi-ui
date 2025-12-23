"use client"

import Image from "next/image"
import { Linkedin, TrendingUp } from "lucide-react"

export function TeamServiceMarketing() {
  const team = [
    { name: "Sarah Mitchell", role: "Chief Strategy Officer", expertise: "Brand Strategy", linkedin: "#", image: "/placeholders/blocks/service-marketing/3.webp" },
    { name: "David Chen", role: "Digital Marketing Director", expertise: "SEO & Analytics", linkedin: "#", image: "/placeholders/blocks/service-marketing/4.webp" },
    { name: "Emily Rodriguez", role: "Content Marketing Lead", expertise: "Content Strategy", linkedin: "#", image: "/placeholders/blocks/service-marketing/5.webp" },
    { name: "Michael Brooks", role: "Social Media Manager", expertise: "Social Growth", linkedin: "#", image: "/placeholders/blocks/service-marketing/6.webp" },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <TrendingUp className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Strategic minds driving digital excellence
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="group">
              {/* Professional LinkedIn-style card */}
              <div className="bg-card border border-border overflow-hidden hover:shadow-lg transition-all">
                {/* Professional headshot */}
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* LinkedIn icon */}
                  <div className="absolute top-3 right-3">
                    <a
                      href={member.linkedin}
                      className="bg-white text-blue-600 p-2 rounded-sm hover:bg-blue-600 hover:text-white transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-foreground text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>

                  <div className="pt-3 border-t border-border">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Expertise</p>
                        <p className="text-sm text-foreground font-medium">{member.expertise}</p>
                      </div>
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
