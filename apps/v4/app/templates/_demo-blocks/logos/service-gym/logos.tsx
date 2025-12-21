"use client"

export function LogosServiceGym() {
  const partners = [
    { name: "TITAN EQUIPMENT", type: "Equipment Partner" },
    { name: "PERFORMANCE NUTRITION", type: "Nutrition Partner" },
    { name: "FLEX CERTIFIED", type: "Certification" },
    { name: "ATHLETE PRO", type: "Training Partner" },
    { name: "RECOVERY SYSTEMS", type: "Wellness Partner" },
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Partnered with leading fitness brands
        </p>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 border-l-2 border-muted-foreground/10 hover:border-primary transition-colors group"
            >
              <div className="text-muted-foreground/50 font-bold text-base md:text-lg tracking-wider group-hover:text-primary transition-colors">
                {partner.name}
              </div>
              <div className="text-muted-foreground/30 text-xs tracking-wide">
                {partner.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
