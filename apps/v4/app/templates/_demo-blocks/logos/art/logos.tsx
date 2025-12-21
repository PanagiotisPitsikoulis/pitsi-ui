"use client"

export function LogosArt() {
  const institutions = [
    "THE METROPOLITAN GALLERY",
    "CONTEMPORARY ART FOUNDATION",
    "NATIONAL MUSEUM OF DESIGN",
    "MODERN ART INSTITUTE",
    "CULTURAL HERITAGE SOCIETY",
    "BIENNALE ASSOCIATION",
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-10">
          In partnership with renowned cultural institutions
        </p>
        <div className="max-w-3xl mx-auto space-y-4">
          {institutions.map((institution, i) => (
            <div
              key={i}
              className="text-center text-muted-foreground/50 font-light text-base md:text-lg tracking-wide hover:text-primary transition-colors italic border-b border-muted-foreground/10 pb-3"
            >
              {institution}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
