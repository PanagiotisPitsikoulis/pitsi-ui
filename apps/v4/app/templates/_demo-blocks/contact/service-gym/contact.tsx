"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServiceGym() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Start Your Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to transform? Get in touch for a free tour or to discuss your fitness goals with our team.
            </p>
          </div>

          {/* Trial class booking with class options */}
          <div className={`${cardBg} rounded-2xl border-2 border-border p-8`}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-foreground">Get a Free Trial</h3>
                <p className="text-sm text-muted-foreground mt-1">Try any class for free + facility tour</p>
              </div>
              <div className={`px-4 py-2 rounded-lg bg-muted/50 border border-border`}>
                <p className="text-xs text-muted-foreground">Open 24/7</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-foreground mb-3 block">Select Trial Class</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['HIIT Training', 'Strength & Conditioning', 'Yoga Flow', 'Spin Class', 'Boxing', 'Personal Training'].map((className) => (
                    <label key={className} className={`${cardBg} border border-border rounded-lg p-4 cursor-pointer hover:bg-muted transition-colors`}>
                      <input type="radio" name="class" className="mr-3" />
                      <span className="text-sm font-medium text-foreground">{className}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-foreground mb-2 block">Fitness Goals</label>
                <textarea
                  placeholder="What are your fitness goals?"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
              </div>

              <Button className="w-full rounded-xl font-bold">
                Claim Free Trial
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="text-sm font-bold text-foreground">Gym Location</p>
                    <p className="text-xs text-muted-foreground">100 Fitness Boulevard</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <div>
                    <p className="text-sm font-bold text-foreground">Open Hours</p>
                    <p className="text-xs text-muted-foreground">24/7 for members</p>
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
