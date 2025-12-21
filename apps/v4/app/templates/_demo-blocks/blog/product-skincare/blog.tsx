"use client"

import Image from "next/image"
import Link from "next/link"

export function BlogProductSkincare() {
  const routines = [
    {
      title: "The Essential Morning Routine for Radiant Skin",
      description: "Start your day right with this simple yet effective 5-step morning skincare routine that protects and energizes your skin.",
      steps: ["Gentle Cleanser", "Vitamin C Serum", "Hyaluronic Moisturizer", "SPF 50 Sunscreen"],
      duration: "5 min",
      skinType: "All Types",
      image: "/placeholders/blocks/product-skincare/1.webp",
    },
    {
      title: "Evening Repair: The Night-Time Recovery Protocol",
      description: "Allow your skin to repair and regenerate overnight with our targeted evening routine focused on renewal and deep hydration.",
      steps: ["Oil Cleanser", "Retinol Serum", "Night Cream", "Eye Treatment"],
      duration: "8 min",
      skinType: "Mature",
      image: "/placeholders/blocks/product-skincare/2.webp",
    },
    {
      title: "Weekly Reset: Deep Cleanse & Exfoliation",
      description: "Give your skin a fresh start with this weekly treatment routine that clears pores and reveals a brighter, smoother complexion.",
      steps: ["Exfoliating Scrub", "Clay Mask", "Toner", "Sheet Mask"],
      duration: "30 min",
      skinType: "Combination",
      image: "/placeholders/blocks/product-skincare/3.webp",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm uppercase tracking-[0.4em] font-light">Skincare Guides</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-6">
            Your Routine, Perfected
          </h2>
          <p className="text-lg text-muted-foreground">
            Science-backed skincare routines tailored to your skin's needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {routines.map((routine, i) => (
            <Link
              href="#"
              key={i}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/5 to-background overflow-hidden">
                  <Image
                    src={routine.image}
                    alt={routine.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-foreground">{routine.duration}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {routine.skinType}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {routine.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {routine.description}
                  </p>

                  <div className="pt-4 space-y-2">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-3">
                      Routine Steps
                    </p>
                    <div className="space-y-2">
                      {routine.steps.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xs font-semibold text-primary">{idx + 1}</span>
                          </div>
                          <span className="text-sm text-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <span className="text-sm text-primary font-medium group-hover:underline">
                      View Full Routine →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
