"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceMarketing() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto overflow-hidden rounded-3xl border border-border">
          {/* Form Side - Left */}
          <div className={`${cardBg} p-12 lg:p-16`}>
            <div className="mb-8">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-medium text-primary tracking-wider uppercase">Let's Partner Up</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
              Scale Your Brand
            </h2>
            <p className="text-muted-foreground mb-10">
              Data-driven strategies that deliver measurable growth.
            </p>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Work email"
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
                  placeholder="Tell us about your goals and challenges..."
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button className="w-full rounded-full py-6 text-base font-medium tracking-wide">
                Get Started
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Prefer email? <a href="mailto:partner@growthagency.com" className="text-primary hover:underline">partner@growthagency.com</a>
              </p>
            </form>
          </div>

          {/* Case Study Side - Right */}
          <div className="relative bg-gradient-to-br from-foreground to-foreground/90 p-12 lg:p-16 flex flex-col justify-between text-background">
            <div className="absolute inset-0 bg-[url(/placeholders/blocks/service-marketing/1.webp)] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />

            <div className="relative z-10">
              <svg className="w-12 h-12 text-background/60 mb-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>

              <p className="text-2xl lg:text-3xl font-light mb-12 leading-relaxed">
                "Working with this agency transformed our digital presence. We saw a 340% increase in qualified leads within 6 months."
              </p>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-background/20">
                <div>
                  <p className="text-xs text-background/60 mb-1">Partner</p>
                  <p className="text-sm font-medium">TechFlow SaaS</p>
                </div>
                <div>
                  <p className="text-xs text-background/60 mb-1">Year</p>
                  <p className="text-sm font-medium">2024</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-background/60 mb-2">Investment</p>
                <p className="text-3xl font-light mb-4">$75K</p>
              </div>

              <div>
                <p className="text-xs text-background/60 mb-3">Services</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-background/10 border border-background/20 text-xs">SEO</span>
                  <span className="px-3 py-1 rounded-full bg-background/10 border border-background/20 text-xs">PPC</span>
                  <span className="px-3 py-1 rounded-full bg-background/10 border border-background/20 text-xs">Content</span>
                  <span className="px-3 py-1 rounded-full bg-background/10 border border-background/20 text-xs">Analytics</span>
                </div>
              </div>

              <div className="pt-6 border-t border-background/20">
                <div className="w-24 h-8 rounded bg-background/10 border border-background/20 flex items-center justify-center">
                  <span className="text-xs font-medium">TechFlow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
