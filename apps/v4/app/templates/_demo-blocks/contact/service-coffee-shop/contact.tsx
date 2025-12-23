"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceCoffeeShop() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-border/50">
            {/* Form Side */}
            <div className={`${cardBg} p-12 lg:p-16`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
                <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span className="text-xs tracking-wider uppercase text-primary font-medium">Visit Us</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Your Daily Brew Awaits
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Reserve a table for groups, inquire about catering, or just reach out to say hello. We'd love to hear from you.
              </p>

              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone number (optional)"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message, reservation details, or catering inquiry..."
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button className="w-full rounded-full py-6 text-base">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Prefer calling? <a href="mailto:hello@brewcafe.com" className="text-primary hover:underline">hello@brewcafe.com</a>
                </p>
              </form>
            </div>

            {/* Cozy Testimonial Side */}
            <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 lg:p-16 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="/placeholders/blocks/service-coffee-shop/1.webp"
                  alt="Coffee Shop"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <div className="flex gap-2 mb-8">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>

                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                  "My favorite spot in the neighborhood. The atmosphere is warm, the coffee is exceptional, and the staff remembers my order. It's become my second home."
                </blockquote>

                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Alex Rivera</p>
                    <p className="text-sm text-muted-foreground">Regular Since 2022</p>
                  </div>
                </div>

                <div className="space-y-3 p-5 rounded-2xl bg-background/50 border border-border/30">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Usual Order:</span>
                    <span className="text-foreground font-medium">Oat Milk Latte</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Favorite Spot:</span>
                    <span className="text-foreground font-medium">Window Seat</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Visits/Month:</span>
                    <span className="text-primary font-semibold">~15</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 border-t border-border/30 text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Voted Best Café</p>
                <p className="text-sm text-foreground font-medium">City Magazine 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
