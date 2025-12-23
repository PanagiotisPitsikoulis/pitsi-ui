"use client"

import { useBlockContext } from "../../_components"

export function TestimonialsProductSciFi() {
  const { cardBg } = useBlockContext()

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            User Transmissions
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "The quantum communicator exceeded specifications. Signal remains stable across parsecs. Remarkable engineering.",
              author: "Commander Vale",
              role: "Fleet Operations",
            },
            {
              quote: "Holographic interface is intuitive and responsive. This tech integrates seamlessly with our systems.",
              author: "Dr. Kira Novak",
              role: "Research Division",
            },
            {
              quote: "Build quality is stellar. These products survive harsh environments. Worth every credit.",
              author: "Atlas Prime",
              role: "Mining Engineer",
            },
          ].map((testimonial, i) => (
            <div key={i} className={`p-8 rounded-2xl ${cardBg} border border-border`}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-6 text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
