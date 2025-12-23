"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceBarber() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-xl border-2 border-border">
            {/* Vintage Testimonial Side */}
            <div className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 p-12 lg:p-16 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/placeholders/blocks/service-barber/1.webp"
                  alt="Barber Shop"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-16 h-1 bg-primary"></div>
                  <div className="w-4 h-1 bg-primary/50"></div>
                </div>

                <svg className="w-10 h-10 text-primary mb-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight">
                  "Best barbershop in the city. Classic cuts, modern style, and genuine craftsmanship. Been coming here for 3 years."
                </blockquote>

                <div className="flex items-center gap-4 mb-12">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                    <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Marcus Thompson</p>
                    <p className="text-sm text-muted-foreground font-medium">Regular Since 2021</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 p-6 rounded-lg bg-background/50 border-2 border-border">
                  <div>
                    <p className="text-2xl font-bold text-foreground mb-1">15+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Years</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground mb-1">500+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Clients</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground mb-1">5★</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Rated</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">EST. 2009</p>
              </div>
            </div>

            {/* Form Side */}
            <div className={`${cardBg} p-12 lg:p-16`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border-2 border-primary/20 mb-6">
                <span className="text-xs tracking-widest uppercase text-primary font-bold">Book Appointment</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Reserve Your Chair
              </h2>
              <p className="text-lg text-muted-foreground mb-10 font-medium">
                Walk-ins welcome, but appointments get priority seating. Book your spot with our master barbers.
              </p>

              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-medium"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-medium"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone number (optional)"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-medium"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Preferred date, time, and service (haircut, beard trim, shave, etc.)..."
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none font-medium"
                  />
                </div>

                <Button className="w-full rounded-lg py-6 text-base font-bold">
                  Book Now
                </Button>

                <p className="text-sm text-muted-foreground text-center font-medium">
                  Questions? <a href="mailto:shop@classiccuts.com" className="text-primary hover:underline font-bold">shop@classiccuts.com</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
