"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceFashion() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden">
            {/* Editorial Testimonial Side */}
            <div className="relative bg-gradient-to-br from-background via-primary/5 to-primary/10 p-12 lg:p-20 flex flex-col justify-between min-h-[700px]">
              <div className="absolute inset-0 opacity-5">
                <img
                  src="/placeholders/blocks/service-fashion/1.webp"
                  alt="Fashion"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-0.5 bg-primary mb-12"></div>

                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-light">CLIENT TESTIMONIAL</p>

                <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-12 leading-relaxed italic">
                  "Working with their styling team was transformative. They understood my aesthetic immediately and curated a wardrobe that reflects my personal brand perfectly."
                </blockquote>

                <div className="flex items-start gap-5 mb-16">
                  <div className="w-16 h-16 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-2xl text-primary font-light">L</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-lg">Lucia Martinez</p>
                    <p className="text-sm text-muted-foreground font-light mb-3">Creative Director</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-muted-foreground px-3 py-1 border border-border rounded-full">Campaign: Fall 2024</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 p-6 border-t border-border/30">
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-light">Investment</p>
                    <p className="text-xl text-foreground font-light">$8,500</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-light">Sessions</p>
                    <p className="text-xl text-foreground font-light">4</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
                  <span>VOGUE</span>
                  <span>•</span>
                  <span>HARPER'S BAZAAR</span>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className={`${cardBg} p-12 lg:p-20 border-l border-border`}>
              <div className="inline-block mb-8">
                <span className="text-xs tracking-[0.4em] uppercase text-primary font-light border-b border-primary pb-2">Book Consultation</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
                Elevate Your Style
              </h2>
              <p className="text-lg text-muted-foreground mb-12 font-light">
                Schedule a personalized styling session with our expert team. By appointment only.
              </p>

              <form className="space-y-10">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-light text-lg"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-light text-lg"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone number (optional)"
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-light text-lg"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Tell us about your style vision and goals..."
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none font-light text-lg"
                  />
                </div>

                <Button className="w-full rounded-full py-7 text-base font-light tracking-wider">
                  REQUEST CONSULTATION
                </Button>

                <p className="text-sm text-muted-foreground text-center font-light">
                  Direct inquiries: <a href="mailto:style@fashionhouse.com" className="text-primary hover:underline">style@fashionhouse.com</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
