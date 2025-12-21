"use client"

export function LogosProductSkincare() {
  const awards = [
    "DERMATOLOGIST TESTED",
    "CLINICAL RESULTS",
    "ALLURE BEST OF BEAUTY",
    "CRUELTY FREE",
    "HYPOALLERGENIC",
    "VOGUE BEAUTY AWARD",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-10">
          Recognized by leading dermatologists and beauty experts
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-4xl mx-auto">
          {awards.map((award, i) => (
            <div
              key={i}
              className={`text-muted-foreground/50 font-semibold tracking-wider hover:text-primary transition-colors ${
                i % 2 === 0 ? "text-lg md:text-2xl" : "text-sm md:text-base"
              }`}
            >
              {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
