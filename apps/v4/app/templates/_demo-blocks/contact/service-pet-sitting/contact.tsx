"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServicePetSitting() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto overflow-hidden rounded-3xl border border-border">
          {/* Form Side */}
          <div className={`${cardBg} p-12 lg:p-16`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
              </svg>
              <span className="text-xs font-medium text-primary tracking-wider uppercase">Pet Care</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
              We'll Love Them Like Our Own
            </h2>
            <p className="text-muted-foreground mb-10">
              Trusted, loving care for your furry family members.
            </p>

            <form className="space-y-6">
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
                  placeholder="Tell us about your pet (name, breed, age, special needs)..."
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button className="w-full rounded-full py-6 text-base font-medium tracking-wide">
                Schedule Meet & Greet
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Questions? <a href="mailto:care@pawsitters.com" className="text-primary hover:underline">care@pawsitters.com</a>
              </p>
            </form>
          </div>

          {/* Testimonial Side */}
          <div className="relative bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-primary/10 p-12 lg:p-16 flex flex-col justify-between">
            <div className="absolute inset-0 bg-[url(/placeholders/blocks/service-pet-sitting/1.webp)] bg-cover bg-center opacity-15" />

            <div className="relative z-10">
              <div className={`${cardBg} inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border mb-8`}>
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <span className="text-xs font-medium text-foreground">Happy Pet Parent</span>
              </div>

              <svg className="w-10 h-10 text-primary/40 mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>

              <p className="text-2xl lg:text-3xl font-light text-foreground mb-8 leading-relaxed">
                "I was so nervous leaving Max for the first time, but they sent daily photos and updates. He came home happy and tired from all the playtime!"
              </p>

              <div className="flex items-center gap-4">
                <div className={`${cardBg} w-12 h-12 rounded-full border border-border overflow-hidden`}>
                  <div className="w-full h-full bg-gradient-to-br from-orange-300 to-amber-300" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Sarah & Max</p>
                  <p className="text-sm text-muted-foreground">Golden Retriever, Regular Client</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-light text-foreground">300+</p>
                <p className="text-xs text-muted-foreground mt-1">Happy Pets</p>
              </div>
              <div>
                <p className="text-3xl font-light text-foreground">8yr</p>
                <p className="text-xs text-muted-foreground mt-1">Experience</p>
              </div>
              <div>
                <p className="text-3xl font-light text-foreground">24/7</p>
                <p className="text-xs text-muted-foreground mt-1">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
