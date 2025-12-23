"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceGym() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border-2 border-border">
            {/* Transformation Testimonial Side */}
            <div className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 p-12 lg:p-16 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs tracking-wider uppercase text-primary font-bold">Success Story</span>
                </div>

                <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-tight">
                  "Down 35 lbs, stronger than ever, and finally loving the gym. The coaching staff pushed me beyond what I thought possible."
                </blockquote>

                <div className="flex items-center gap-4 mb-12">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Jordan Williams</p>
                    <p className="text-sm text-muted-foreground font-medium">6-Month Transformation</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-background/50 border-2 border-border text-center">
                    <p className="text-3xl font-bold text-primary mb-1">-35</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">LBS LOST</p>
                  </div>
                  <div className="p-5 rounded-xl bg-background/50 border-2 border-border text-center">
                    <p className="text-3xl font-bold text-primary mb-1">+40%</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">STRENGTH</p>
                  </div>
                  <div className="p-5 rounded-xl bg-background/50 border-2 border-border text-center">
                    <p className="text-3xl font-bold text-primary mb-1">100%</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">CONFIDENT</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-8 border-t-2 border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Program</p>
                  <p className="text-sm text-foreground font-bold">Performance Training</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Duration</p>
                  <p className="text-sm text-foreground font-bold">6 Months</p>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className={`${cardBg} p-12 lg:p-16`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border-2 border-primary/20 mb-6">
                <span className="text-xs tracking-widest uppercase text-primary font-bold">Free Trial</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Start Your Transformation
              </h2>
              <p className="text-lg text-muted-foreground mb-10 font-medium">
                Claim your free trial class and facility tour. No commitment required. Experience what elite training feels like.
              </p>

              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-medium"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-medium"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone number (optional)"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-medium"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Tell us about your fitness goals and experience level..."
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none font-medium"
                  />
                </div>

                <Button className="w-full rounded-lg py-6 text-base font-bold">
                  CLAIM FREE TRIAL
                </Button>

                <p className="text-sm text-muted-foreground text-center font-medium">
                  Questions? <a href="mailto:info@elitefit.com" className="text-primary hover:underline font-bold">info@elitefit.com</a>
                </p>
              </form>

              <div className="mt-8 pt-8 border-t-2 border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Open 24/7</span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">100 Fitness Boulevard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
