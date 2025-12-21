"use client"

import { Button } from "@/registry/new-york-v4/ui/button"

import { useBlockContext } from "../../_components"

export function ContactServicePsychologist() {
  const { cardBg } = useBlockContext()
  return (
    <section>
      <div className="container px-6">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Begin Your Healing Journey
            </h2>
            <p className="text-muted-foreground">
              Taking the first step is often the hardest. Reach out for a confidential consultation.
            </p>
          </div>

          {/* Calm, private, minimal design */}
          <div className={`${cardBg} rounded-3xl border border-border p-10 md:p-12`}>
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">All communications are confidential</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="How would you like to be addressed?"
                  className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Contact Information</label>
                <input
                  type="email"
                  placeholder="Email or Phone (your preference)"
                  className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Briefly share what brings you here</label>
                <textarea
                  placeholder="Take your time. Share what feels comfortable..."
                  rows={5}
                  className="w-full px-4 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Preferred Contact Method</label>
                <div className="flex gap-3">
                  <label className={`${cardBg} flex-1 border border-border rounded-xl p-3 cursor-pointer hover:bg-muted transition-colors text-center`}>
                    <input type="radio" name="contact" className="sr-only" />
                    <span className="text-sm text-foreground">Email</span>
                  </label>
                  <label className={`${cardBg} flex-1 border border-border rounded-xl p-3 cursor-pointer hover:bg-muted transition-colors text-center`}>
                    <input type="radio" name="contact" className="sr-only" />
                    <span className="text-sm text-foreground">Phone</span>
                  </label>
                  <label className={`${cardBg} flex-1 border border-border rounded-xl p-3 cursor-pointer hover:bg-muted transition-colors text-center`}>
                    <input type="radio" name="contact" className="sr-only" />
                    <span className="text-sm text-foreground">Either</span>
                  </label>
                </div>
              </div>

              <Button className="w-full rounded-2xl py-6 font-medium">
                Schedule Session
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border text-center space-y-2">
              <p className="text-sm text-muted-foreground">300 Wellness Center, Suite 200</p>
              <p className="text-sm text-muted-foreground">Mon-Fri: 9am-7pm, Sat: 10am-2pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
