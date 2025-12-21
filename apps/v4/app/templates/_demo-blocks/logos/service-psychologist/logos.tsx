"use client"

export function LogosServicePsychologist() {
  const accreditations = [
    { name: "AMERICAN PSYCHOLOGICAL ASSOCIATION", abbr: "APA" },
    { name: "COGNITIVE BEHAVIORAL THERAPY INSTITUTE", abbr: "CBTI" },
    { name: "MENTAL HEALTH PROFESSIONALS", abbr: "MHP" },
    { name: "CLINICAL EXCELLENCE BOARD", abbr: "CEB" },
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Accredited by leading professional organizations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {accreditations.map((accred, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-6 bg-muted/10 rounded-lg hover:bg-muted/20 transition-colors group"
            >
              <div className="text-muted-foreground/60 font-bold text-2xl tracking-wider group-hover:text-primary transition-colors">
                {accred.abbr}
              </div>
              <div className="text-muted-foreground/40 text-xs text-center tracking-wide">
                {accred.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
