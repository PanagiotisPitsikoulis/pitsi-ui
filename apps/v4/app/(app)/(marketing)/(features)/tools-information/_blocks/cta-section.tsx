"use client"

import Link from "next/link"

import EasingComposerClient from "@/app/(app)/(tools)/tools/easing-composer/page.client"
import ShadowComposerPageClient from "@/app/(app)/(tools)/tools/shadow-composer/page.client"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export function CTASection() {
  return (
    <section className="relative">
      {/* Tool Previews - positioned far off center, only edges visible */}
      <div className="pointer-events-none absolute inset-0">
        {/* Easing Composer - Left/Up */}
        <div
          className="absolute left-0 top-0 w-[70%] -translate-x-[80%] md:-translate-x-[70%] -translate-y-[15%] -rotate-6 origin-center"
          aria-hidden="true"
        >
          <div className="bg-background text-foreground dark rounded-3xl border shadow-2xl">
            <EasingComposerClient hasBackgroundDecoration={false} />
          </div>
        </div>

        {/* Shadow Composer - Right/Down */}
        <div
          className="absolute right-0 bottom-0 w-[70%] translate-x-[90%] md:translate-x-[70%] translate-y-[15%] -rotate-6 md:rotate-6 origin-center"
          aria-hidden="true"
        >
          <div className="bg-background text-foreground dark rounded-3xl border shadow-2xl">
            <ShadowComposerPageClient hasBackgroundDecoration={false} />
          </div>
        </div>
      </div>

      {/* CTA Content - centered */}
      <div className="container relative z-10 flex min-h-[500px] flex-col items-center justify-center px-6 md:min-h-[600px]">
        <h2 className="display text-center text-4xl tracking-tight md:text-6xl lg:text-7xl">
          Start creating
        </h2>
        <Spacer size="lg" sizeMobile="md" />
        <p className="text-muted-foreground mx-auto max-w-md text-center text-xl md:text-2xl">
          No accounts. No setup. <br />
          Just click and start creating.
        </p>
        <Spacer size="2xl" sizeMobile="xl" />
        <Link href="/tools">
          <HeroButton>Explore All Tools</HeroButton>
        </Link>
      </div>
    </section>
  )
}
