"use client"

export function LogosServicePetSitting() {
  const partners = [
    "CENTRAL VET HOSPITAL",
    "HAPPY PAWS CLINIC",
    "PET PARADISE STORE",
    "FURRY FRIENDS SUPPLY",
    "ANIMAL CARE ASSOCIATION",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Partnered with trusted veterinary and pet care providers
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <div key={i} className="group relative">
              <div className="text-muted-foreground/50 font-semibold text-sm md:text-base tracking-wide hover:text-primary transition-colors text-center">
                {partner}
              </div>
              {i < partners.length - 1 && (
                <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-muted-foreground/20">
                  /
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
