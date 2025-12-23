"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceMakeup() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto overflow-hidden rounded-3xl border border-border">
          {/* Testimonial Side - Left */}
          <div className="relative bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-primary/10 p-12 lg:p-16 flex flex-col justify-between order-2 lg:order-1">
            <div className="absolute inset-0 bg-[url(/placeholders/blocks/service-makeup/1.webp)] bg-cover bg-center opacity-15" />

            <div className="relative z-10">
              <div className={`${cardBg} inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border mb-8`}>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-foreground">Bridal Transformation</span>
              </div>

              <svg className="w-10 h-10 text-primary/40 mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>

              <p className="text-2xl lg:text-3xl font-light text-foreground mb-8 leading-relaxed">
                "She made me feel like a goddess on my wedding day. The makeup lasted through tears, dancing, everything. Absolute perfection."
              </p>

              <div className="flex items-center gap-4">
                <div className={`${cardBg} w-12 h-12 rounded-full border border-border overflow-hidden`}>
                  <div className="w-full h-full bg-gradient-to-br from-pink-300 to-purple-300" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Sophia Martinez</p>
                  <p className="text-sm text-muted-foreground">Bride, October 2024</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-light text-foreground">500+</p>
                <p className="text-xs text-muted-foreground mt-1">Brides</p>
              </div>
              <div>
                <p className="text-3xl font-light text-foreground">12yr</p>
                <p className="text-xs text-muted-foreground mt-1">Experience</p>
              </div>
              <div>
                <p className="text-3xl font-light text-foreground">5★</p>
                <p className="text-xs text-muted-foreground mt-1">Rated</p>
              </div>
            </div>
          </div>

          {/* Form Side - Right */}
          <div className={`${cardBg} p-12 lg:p-16 order-1 lg:order-2`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
              </svg>
              <span className="text-xs font-medium text-primary tracking-wider uppercase">Beauty Artistry</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
              Book Your Glam Session
            </h2>
            <p className="text-muted-foreground mb-10">
              Bridal, events, photoshoots — let's create your signature look.
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
                  placeholder="Service type, occasion, date, inspiration..."
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button className="w-full rounded-full py-6 text-base font-medium tracking-wide">
                Book Consultation
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Prefer email? <a href="mailto:hello@glamstudio.com" className="text-primary hover:underline">hello@glamstudio.com</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
