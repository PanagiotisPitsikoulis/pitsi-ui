"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactProductSkincare() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[2.5rem] border border-border/50">
            {/* Form Side */}
            <div className={`${cardBg} p-12 lg:p-16 order-2 lg:order-1`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-xs tracking-wider uppercase text-primary font-light">Book Consultation</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
                Transform Your Skin
              </h2>
              <p className="text-lg text-muted-foreground mb-10 font-light">
                Experience personalized skincare with our expert aestheticians. Complimentary skin analysis included with every consultation.
              </p>

              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-light"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-light"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone number (optional)"
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-light"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Share your skin concerns and goals..."
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none font-light"
                  />
                </div>

                <Button className="w-full rounded-full py-6 text-base font-light">
                  Book Your Session
                </Button>

                <p className="text-sm text-muted-foreground text-center font-light">
                  Questions? <a href="mailto:glow@puraskin.com" className="text-primary hover:underline">glow@puraskin.com</a>
                </p>
              </form>
            </div>

            {/* Before/After Testimonial Side */}
            <div className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 p-12 lg:p-16 flex flex-col justify-between order-1 lg:order-2">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/placeholders/blocks/product-skincare/1.webp"
                  alt="Skincare"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-1 bg-primary mb-8"></div>

                <blockquote className="text-xl md:text-2xl font-light text-foreground mb-8 leading-relaxed">
                  "After just 6 weeks of following their personalized regimen, my skin has completely transformed. The glow is real, and I finally feel confident without makeup."
                </blockquote>

                <div className="flex items-center gap-4 mb-12">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground font-light">Age 32, Combination Skin</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 rounded-2xl bg-background/50 border border-border/30">
                    <p className="text-sm text-muted-foreground font-light mb-1">Before</p>
                    <p className="text-xs text-muted-foreground">Uneven tone<br />Texture issues</p>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-primary/10 border border-primary/20">
                    <p className="text-sm text-primary font-medium mb-1">After 6 Weeks</p>
                    <p className="text-xs text-muted-foreground">Radiant glow<br />Smooth texture</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 border-t border-border/30">
                <p className="text-xs text-muted-foreground font-light tracking-wider uppercase mb-3">Trusted By</p>
                <div className="flex items-center gap-6">
                  <div className="h-8 w-20 rounded bg-muted/30 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground font-light">VOGUE</span>
                  </div>
                  <div className="h-8 w-20 rounded bg-muted/30 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground font-light">ELLE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
