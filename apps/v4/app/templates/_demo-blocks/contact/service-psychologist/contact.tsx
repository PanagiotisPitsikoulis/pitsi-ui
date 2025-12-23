"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServicePsychologist() {
  const { cardBg } = useBlockContext()
  return (
    <section className="py-24">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto overflow-hidden rounded-3xl border border-border">
          {/* Form Side */}
          <div className={`${cardBg} p-12 lg:p-16`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-xs font-medium text-primary tracking-wider uppercase">Confidential</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
              Begin Your Journey
            </h2>
            <p className="text-muted-foreground mb-10">
              Taking the first step is often the hardest. You're not alone.
            </p>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your name (or preferred name)"
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
                  placeholder="Share what brings you here today... (optional)"
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button className="w-full rounded-full py-6 text-base font-medium tracking-wide">
                Request Consultation
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Prefer to call? <a href="mailto:care@mindwellness.com" className="text-primary hover:underline">care@mindwellness.com</a>
              </p>
            </form>
          </div>

          {/* Testimonial Side */}
          <div className="relative bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-primary/5 p-12 lg:p-16 flex flex-col justify-between">
            <div className="absolute inset-0 bg-[url(/placeholders/blocks/service-psychologist/1.webp)] bg-cover bg-center opacity-5" />

            <div className="relative z-10">
              <div className={`${cardBg} inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border mb-8`}>
                <div className="w-2 h-2 rounded-full bg-primary/50" />
                <span className="text-xs font-medium text-foreground">Client Experience</span>
              </div>

              <svg className="w-10 h-10 text-primary/30 mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>

              <p className="text-2xl lg:text-3xl font-light text-foreground mb-8 leading-relaxed">
                "I was hesitant at first, but the supportive environment made all the difference. I finally feel heard and have tools to move forward."
              </p>

              <div className="flex items-center gap-4">
                <div className={`${cardBg} w-12 h-12 rounded-full border border-border flex items-center justify-center`}>
                  <span className="text-sm font-light text-muted-foreground">M</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">M.L.</p>
                  <p className="text-sm text-muted-foreground">Client Since 2023</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="pt-8 border-t border-border/50">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Response Time</p>
                    <p className="text-lg font-light text-foreground">24 hours</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Sessions</p>
                    <p className="text-lg font-light text-foreground">Virtual & In-Person</p>
                  </div>
                </div>
              </div>

              <div className={`${cardBg} rounded-2xl border border-border p-4`}>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    All sessions are completely confidential and conducted in a safe, judgment-free environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
