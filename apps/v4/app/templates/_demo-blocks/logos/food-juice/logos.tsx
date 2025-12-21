"use client"

export function LogosFoodJuice() {
  const certifications = [
    { name: "USDA ORGANIC", year: "2020" },
    { name: "NON-GMO PROJECT", year: "2019" },
    { name: "RAINFOREST ALLIANCE", year: "2021" },
    { name: "FAIR TRADE", year: "2018" },
    { name: "CERTIFIED VEGAN", year: "2020" },
    { name: "GLUTEN FREE", year: "2019" },
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-10">
          Certified by leading organic and sustainability organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-4 border border-muted-foreground/10 rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="text-muted-foreground/50 font-bold text-xs md:text-sm text-center tracking-tight group-hover:text-primary transition-colors">
                {cert.name}
              </div>
              <div className="text-muted-foreground/30 text-[10px] mt-1">
                EST. {cert.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
