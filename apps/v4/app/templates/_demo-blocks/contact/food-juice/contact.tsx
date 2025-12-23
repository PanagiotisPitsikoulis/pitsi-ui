"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactFoodJuice() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Form */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase mb-6">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" />
              </svg>
              Get In Touch
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Fresh Is Just Around The Corner
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Visit our juice bar or order for delivery. We're here to help you feel your best.
            </p>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone number (optional)"
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="How can we help you feel your best?"
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <Button className="w-full rounded-full py-6 text-base font-medium">
                Send Message
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Quick question?{" "}
                <a href="mailto:hello@freshpress.com" className="text-primary hover:underline">
                  hello@freshpress.com
                </a>
              </p>
            </form>
          </div>

          {/* Right side - Customer review with fruit imagery */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-transparent to-transparent rounded-3xl" />
            <div className="relative h-full min-h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholders/blocks/food-juice/1.webp')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-8 lg:p-12">
                <div className={`${cardBg} border border-border rounded-2xl p-8 backdrop-blur-md bg-background/85`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">Verified Customer</span>
                  </div>

                  <p className="text-foreground text-lg mb-6 leading-relaxed">
                    "I've been coming here every morning for the past year. The green goddess smoothie is my absolute favorite - fresh, energizing, and delicious!"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">SK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Sarah Kim</p>
                      <p className="text-sm text-muted-foreground">Wellness Enthusiast</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6 pt-6 border-t border-border">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Fresh</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Organic</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Cold-Pressed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info cards below */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-foreground">Visit Us</p>
              <p className="text-sm text-muted-foreground">456 Wellness Way</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-foreground">Open Daily</p>
              <p className="text-sm text-muted-foreground">7am - 7pm</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-foreground">Call to Order</p>
              <p className="text-sm text-muted-foreground">(555) JUICE-UP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
