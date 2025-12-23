"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactAI() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Form */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide uppercase mb-6">
              Contact Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Build The Future
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to transform your business with AI? Our team is here to help you get started.
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
                placeholder="Tell us about your project"
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <Button className="w-full rounded-full py-6 text-base font-medium">
                Schedule Demo
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Prefer email?{" "}
                <a href="mailto:hello@neuralai.com" className="text-primary hover:underline">
                  hello@neuralai.com
                </a>
              </p>
            </form>
          </div>

          {/* Right side - Testimonial with gradient */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl" />
            <div className="relative h-full min-h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholders/blocks/ai/1.webp')] bg-cover bg-center opacity-10" />
              <div className="relative h-full flex flex-col justify-end p-8 lg:p-12">
                <div className={`${cardBg} border border-border rounded-2xl p-8 backdrop-blur-sm bg-background/80`}>
                  <svg className="w-10 h-10 text-primary mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  <p className="text-foreground text-lg mb-6 leading-relaxed">
                    "Working with this team transformed how we approach AI integration. The results exceeded our expectations, and their support has been invaluable."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center">
                      <span className="text-primary font-semibold">JD</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">James Davidson</p>
                      <p className="text-sm text-muted-foreground">CTO, TechVentures Inc.</p>
                    </div>
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
