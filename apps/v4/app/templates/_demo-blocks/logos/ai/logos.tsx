"use client"

export function LogosAi() {
  const partners = [
    { name: "NEURAL LABS", tag: "AI/ML" },
    { name: "QUANTUM SYNC", tag: "CLOUD" },
    { name: "VECTOR AI", tag: "DATA" },
    { name: "APEX COMPUTE", tag: "INFRASTRUCTURE" },
    { name: "COGNITION", tag: "RESEARCH" },
    { name: "SYNAPSE", tag: "INTEGRATION" },
  ]

  return (
    <section>
      <div className="container px-6">
        <p className="text-center text-muted-foreground text-sm mb-12">
          Powered by leading technology partners
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group">
              <div className="text-muted-foreground/50 font-semibold text-xl md:text-2xl tracking-wider hover:text-primary transition-colors">
                {partner.name}
              </div>
              <div className="text-muted-foreground/30 text-xs tracking-widest">
                {partner.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
