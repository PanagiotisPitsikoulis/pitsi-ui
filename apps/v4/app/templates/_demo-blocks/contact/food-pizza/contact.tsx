"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactFoodPizza() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24 bg-gradient-to-br from-amber-500/5 via-background to-background">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Form */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-serif italic font-medium mb-6 rounded-sm">
              Contattaci
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-serif italic font-bold text-foreground mb-6">
              Visit Our Pizzeria
            </h2>
            <p className="text-muted-foreground text-lg mb-8 font-serif">
              Join us for an authentic Italian dining experience. Reservations recommended for dinner.
            </p>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Il tuo nome"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-serif"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-serif"
              />
              <input
                type="tel"
                placeholder="Telefono (optional)"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-serif"
              />
              <textarea
                placeholder="Reservation details..."
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none font-serif"
              />
              <Button className="w-full rounded-full py-6 text-base font-serif font-medium">
                Reserve Table
              </Button>
              <p className="text-center text-sm text-muted-foreground font-serif">
                For delivery call{" "}
                <a href="tel:555-PIZZA-NOW" className="text-primary hover:underline">
                  (555) PIZZA-NOW
                </a>
              </p>
            </form>
          </div>

          {/* Right side - Customer testimonial with food image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/20 via-transparent to-transparent rounded-3xl" />
            <div className="relative h-full min-h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholders/blocks/food-pizza/1.webp')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />

              <div className="relative h-full flex flex-col justify-end p-8 lg:p-12">
                <div className={`${cardBg} border border-border rounded-2xl p-8 backdrop-blur-sm bg-background/90`}>
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                    <span className="text-xs text-muted-foreground font-serif italic">Customer Favorite</span>
                  </div>

                  <p className="text-foreground text-lg mb-6 leading-relaxed font-serif italic">
                    "The margherita pizza here is perfection. Authentic Neapolitan style with the freshest ingredients. It's our family's go-to spot every weekend!"
                  </p>

                  <div className="flex items-center gap-4 pb-6 border-b border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/30 to-primary/10 flex items-center justify-center">
                      <span className="text-primary font-serif font-semibold">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground font-serif">Marco Rossi</p>
                      <p className="text-sm text-muted-foreground font-serif italic">Food Enthusiast</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="text-center">
                      <p className="text-2xl font-serif font-bold text-primary">30min</p>
                      <p className="text-xs text-muted-foreground font-serif">Delivery</p>
                    </div>
                    <div className="text-center border-x border-border px-6">
                      <p className="text-2xl font-serif font-bold text-primary">500°C</p>
                      <p className="text-xs text-muted-foreground font-serif">Wood Oven</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-serif font-bold text-primary">24h</p>
                      <p className="text-xs text-muted-foreground font-serif">Dough Rest</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info below */}
        <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-2xl">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <p className="font-serif font-semibold text-foreground">Ristorante Location</p>
              <p className="text-sm text-muted-foreground font-serif">123 Little Italy Lane</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <div>
              <p className="font-serif font-semibold text-foreground">Orario</p>
              <p className="text-sm text-muted-foreground font-serif">Tue-Sun: 5pm-11pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
