"use client"

export function LogosProductPlants() {
  const partners = [
    "GREENLEAF NURSERY",
    "BOTANICAL GARDENS SOCIETY",
    "URBAN JUNGLE",
    "PLANT CARE MONTHLY",
    "ECO GROWERS ALLIANCE",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Featured by leading plant and gardening publications
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col divide-y divide-muted-foreground/10">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="py-4 text-center text-muted-foreground/50 font-semibold text-base md:text-lg tracking-wide hover:text-primary transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
