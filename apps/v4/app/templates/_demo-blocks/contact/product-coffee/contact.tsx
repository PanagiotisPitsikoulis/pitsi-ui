"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactProductCoffee() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24 bg-gradient-to-br from-amber-950/10 via-background to-background">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Coffee shop testimonial with image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700/20 via-transparent to-transparent rounded-3xl" />
            <div className="relative h-full min-h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholders/blocks/product-coffee/1.webp')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-8 lg:p-12">
                <div className={`${cardBg} border border-border rounded-2xl p-8 backdrop-blur-sm bg-background/90`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground tracking-wide">Verified Purchase</span>
                  </div>

                  <svg className="w-8 h-8 text-primary mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>

                  <p className="text-foreground text-lg mb-6 leading-relaxed tracking-wide">
                    "Best coffee beans I've ever purchased. The Ethiopian single-origin has notes of blueberry and jasmine. Simply incredible quality."
                  </p>

                  <div className="flex items-center gap-4 pb-6 border-b border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-700/30 to-amber-900/10 flex items-center justify-center">
                      <span className="text-primary font-semibold tracking-wide">AL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground tracking-wide">Alex Liu</p>
                      <p className="text-sm text-muted-foreground">Home Barista</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary tracking-wide">Single</p>
                      <p className="text-xs text-muted-foreground tracking-wide">Origin</p>
                    </div>
                    <div className="text-center border-x border-border">
                      <p className="text-lg font-bold text-primary tracking-wide">Fresh</p>
                      <p className="text-xs text-muted-foreground tracking-wide">Roasted</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary tracking-wide">Artisan</p>
                      <p className="text-xs text-muted-foreground tracking-wide">Quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-medium tracking-[0.3em] uppercase mb-6 rounded-sm">
              Connect
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-6">
              Let's Talk Coffee
            </h2>
            <p className="text-muted-foreground text-lg mb-8 tracking-wide">
              Questions about our beans, brewing methods, or wholesale inquiries? We'd love to hear from you.
            </p>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors tracking-wide"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors tracking-wide"
              />
              <input
                type="tel"
                placeholder="Phone number (optional)"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors tracking-wide"
              />
              <textarea
                placeholder="Tell us about your coffee needs..."
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none tracking-wide"
              />
              <Button className="w-full rounded-full py-6 text-base font-medium tracking-wide">
                Send Message
              </Button>
              <p className="text-center text-sm text-muted-foreground tracking-wide">
                Prefer email?{" "}
                <a href="mailto:hello@premiumcoffee.co" className="text-primary hover:underline">
                  hello@premiumcoffee.co
                </a>
              </p>
            </form>

            {/* Info cards */}
            <div className="mt-8 pt-8 border-t border-border grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Roastery</p>
                <p className="text-sm text-foreground tracking-wide">88 Roaster Row</p>
                <p className="text-xs text-muted-foreground tracking-wide mt-1">Open Daily 7am-6pm</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Wholesale</p>
                <p className="text-sm text-foreground tracking-wide">wholesale@premiumcoffee.co</p>
                <p className="text-xs text-muted-foreground tracking-wide mt-1">Bulk orders available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
