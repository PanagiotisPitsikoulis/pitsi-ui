"use client"

export function LogosServiceBarber() {
  const partners = [
    "MASTER BARBERS GUILD",
    "CLASSIC CUTS ASSOCIATION",
    "PREMIUM BLADE CO.",
    "HERITAGE GROOMING",
    "BARBER ELITE",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Members of professional trade associations
        </p>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10"></div>
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll gap-12 md:gap-16">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={i}
                  className="text-muted-foreground/50 font-semibold text-lg md:text-xl tracking-wider hover:text-primary transition-colors whitespace-nowrap"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </div>
    </section>
  )
}
