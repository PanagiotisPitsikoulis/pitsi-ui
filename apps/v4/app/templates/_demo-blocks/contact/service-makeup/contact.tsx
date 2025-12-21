"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceMakeup() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-light tracking-[0.3em] uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
              Book Your Glam Session
            </h2>
            <p className="text-muted-foreground text-lg">
              From everyday beauty to bridal glam, let's create your perfect look together.
            </p>
          </div>

          {/* Glamorous beauty session scheduler */}
          <div className={`${cardBg} rounded-3xl border-2 border-border p-8 md:p-10 relative overflow-hidden`}>
            {/* Glamorous gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
              <div className="w-16 h-16 rounded-full bg-muted/50 border-2 border-border flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-light text-foreground">Glam Session Booking</h3>
                <p className="text-sm text-muted-foreground">Professional makeup artistry</p>
              </div>
            </div>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-light text-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-light text-foreground mb-2 block">Phone</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-light text-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <div>
                <label className="text-sm font-light text-foreground mb-3 block">Service Type</label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {['Bridal', 'Event', 'Photoshoot', 'Everyday', 'Special Occasion', 'Consultation'].map((service) => (
                    <label key={service} className={`${cardBg} border border-border rounded-xl p-3 cursor-pointer hover:bg-muted transition-colors text-center`}>
                      <input type="radio" name="service" className="sr-only" />
                      <span className="text-sm font-light text-foreground">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-light text-foreground mb-2 block">Details & Inspiration</label>
                <textarea
                  placeholder="Occasion, date, and any inspiration or reference photos you'd like to share..."
                  rows={4}
                  className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
              </div>

              <Button className="w-full rounded-2xl py-6 font-light">
                Book Session
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm font-light text-muted-foreground mb-2">Studio Location</p>
              <p className="text-sm text-foreground">222 Beauty Lane, Glamour District</p>
              <p className="text-sm text-muted-foreground mt-1">bookings@glamstudio.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
