"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactProductPlants() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-border">
            {/* Form Side */}
            <div className={`${cardBg} p-12 lg:p-16`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span className="text-xs tracking-wider uppercase text-muted-foreground">Get In Touch</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Let's Grow Together
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Have questions about plant care or our greenhouse? Our botanical experts are here to help nurture your green journey.
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
                    placeholder="Tell us about your plant questions or greenhouse visit preferences..."
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button className="w-full rounded-full py-6 text-base">
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Prefer email? <a href="mailto:care@rareplants.co" className="text-primary hover:underline">care@rareplants.co</a>
                </p>
              </form>
            </div>

            {/* Testimonial Side */}
            <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background p-12 lg:p-16 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="/placeholders/blocks/product-plants/1.webp"
                  alt="Greenhouse"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <svg className="w-12 h-12 text-primary mb-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <blockquote className="text-xl md:text-2xl font-light text-foreground mb-8 leading-relaxed">
                  The greenhouse tour was incredible! The staff helped me select perfect plants for my home and taught me proper care techniques. My urban jungle is thriving!
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Emma Richardson</p>
                    <p className="text-sm text-muted-foreground">Plant Enthusiast</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-6 pt-8 border-t border-border/30">
                <div>
                  <p className="text-3xl font-bold text-foreground mb-1">500+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Plant Varieties</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground mb-1">15yrs</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground mb-1">1.2k+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
