"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactFoodPizza() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-primary font-serif italic text-sm tracking-[0.2em] mb-4">Contattaci</p>
            <h2 className="text-3xl md:text-5xl font-serif italic font-bold text-foreground mb-6">
              Visit Our Pizzeria
            </h2>
            <p className="text-muted-foreground text-lg">
              Join us for an authentic Italian dining experience. Reservations recommended for dinner.
            </p>
          </div>

          {/* Delivery order interface */}
          <div className={`${cardBg} rounded-2xl border-2 border-border p-8`}>
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Make a Reservation</h3>
                <p className="text-sm text-muted-foreground mt-1">Or call for delivery: (555) PIZZA-NOW</p>
              </div>
              <div className={`px-4 py-2 rounded-lg bg-muted/50 border border-border`}>
                <p className="text-xs text-muted-foreground">Delivery in</p>
                <p className="text-lg font-bold text-primary font-serif">30 min</p>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-serif font-medium text-foreground mb-2 block">Nome</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-serif font-medium text-foreground mb-2 block">Telefono</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-serif font-medium text-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-serif font-medium text-foreground mb-2 block">Party Size & Date</label>
                <textarea
                  placeholder="Party size and preferred date..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
              </div>
              <Button className="w-full rounded-xl font-serif">
                Reserve Table
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-sm font-serif font-semibold text-foreground">Ristorante</p>
                  <p className="text-xs text-muted-foreground">123 Little Italy Lane</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <p className="text-sm font-serif font-semibold text-foreground">Orario</p>
                  <p className="text-xs text-muted-foreground">Tue-Sun: 5pm-11pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
