import Link from "next/link"
import {
  Accessibility,
  CheckCircle2,
  Code2,
  Layers,
} from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

// Floating component primitive mockups
function FloatingPrimitive({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div
      className={`bg-card/90 rounded-xl border shadow-lg backdrop-blur-sm animate-float ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function ComponentsHeroSection() {
  return (
    <div id="hero" className="relative -mt-[56px] overflow-hidden">
      {/* Gradient header overlay */}
      <div className="from-background absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b to-transparent" />

      {/* Abstract geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <div className="bg-brand/5 dark:bg-brand/10 absolute top-1/4 -left-20 h-[400px] w-[400px] rotate-45 rounded-3xl blur-3xl" />
        <div className="bg-brand/3 dark:bg-brand/5 absolute -bottom-20 right-1/4 h-[300px] w-[300px] rotate-12 rounded-3xl blur-3xl" />
        <div className="bg-brand/5 dark:bg-brand/10 absolute top-1/2 right-10 h-[200px] w-[200px] -rotate-12 rounded-3xl blur-2xl" />
      </div>

      <div className="relative container flex h-full w-full flex-col items-center justify-center px-6">
        {/* Typography */}
        <Spacer size={"8xl"} sizeMobile={"6xl"} />

        {/* Eyebrow */}
        <div className="bg-brand/10 text-brand inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
          <span className="bg-brand size-1.5 rounded-full" />
          65+ Foundational Components
        </div>

        <Spacer size={"lg"} sizeMobile={"md"} />

        <h1 className="display text-center text-[2.5rem] leading-[0.9] tracking-tight sm:text-5xl md:text-8xl">
          The Building Blocks
          <br />
          <span className="text-brand">of Modern UIs</span>
        </h1>

        <Spacer size={"2xl"} sizeMobile={"md"} />

        <p className="text-muted-foreground max-w-2xl text-center text-lg md:text-2xl">
          Radix primitives. Full accessibility. Zero compromises.
          Build faster with battle-tested components.
        </p>

        {/* Buttons */}
        <Spacer size={"3xl"} sizeMobile={"lg"} />
        <div className="flex flex-row gap-2">
          <Link href="/docs/components">
            <HeroButton>View Components</HeroButton>
          </Link>
          <Button asChild size={"lg"} variant={"outline"} className="rounded-full">
            <Link href="/docs">Documentation</Link>
          </Button>
        </div>

        {/* Stats bar */}
        <Spacer size={"4xl"} sizeMobile={"3xl"} />
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-2">
            <Layers className="text-brand size-5" />
            <span className="text-foreground font-medium">65+ Components</span>
          </div>
          <div className="bg-border h-6 w-px" />
          <div className="flex items-center gap-2">
            <Code2 className="text-brand size-5" />
            <span className="text-foreground font-medium">Radix Based</span>
          </div>
          <div className="bg-border h-6 w-px" />
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-brand size-5" />
            <span className="text-foreground font-medium">TypeScript</span>
          </div>
          <div className="bg-border h-6 w-px" />
          <div className="flex items-center gap-2">
            <Accessibility className="text-brand size-5" />
            <span className="text-foreground font-medium">Accessible</span>
          </div>
        </div>

        {/* Floating component primitives showcase */}
        <Spacer size={"4xl"} sizeMobile={"3xl"} />
        <div className="relative w-full max-w-4xl">
          {/* Desktop layout */}
          <div className="hidden md:block">
            <div className="relative h-[24rem]">
              {/* Button primitive */}
              <FloatingPrimitive className="absolute left-0 top-0 p-4" delay={0}>
                <div className="flex items-center gap-2">
                  <div className="bg-brand h-10 w-24 rounded-lg" />
                  <div className="bg-muted h-10 w-24 rounded-lg" />
                </div>
              </FloatingPrimitive>

              {/* Input primitive */}
              <FloatingPrimitive className="absolute right-0 top-4 p-4" delay={200}>
                <div className="space-y-2">
                  <div className="bg-muted h-3 w-16 rounded" />
                  <div className="h-10 w-48 rounded-lg border" />
                </div>
              </FloatingPrimitive>

              {/* Card primitive */}
              <FloatingPrimitive className="absolute left-1/4 top-20 p-4" delay={400}>
                <div className="w-56 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-brand size-10 rounded-full" />
                    <div className="space-y-1">
                      <div className="bg-foreground/80 h-3 w-20 rounded" />
                      <div className="bg-muted h-2 w-16 rounded" />
                    </div>
                  </div>
                  <div className="bg-muted h-20 w-full rounded-lg" />
                </div>
              </FloatingPrimitive>

              {/* Select primitive */}
              <FloatingPrimitive className="absolute right-1/4 top-32 p-4" delay={600}>
                <div className="space-y-2">
                  <div className="bg-muted h-3 w-12 rounded" />
                  <div className="flex h-10 w-40 items-center justify-between rounded-lg border px-3">
                    <div className="bg-muted h-3 w-16 rounded" />
                    <div className="bg-muted size-4 rounded" />
                  </div>
                </div>
              </FloatingPrimitive>

              {/* Toggle primitive */}
              <FloatingPrimitive className="absolute left-8 bottom-16 p-4" delay={800}>
                <div className="flex items-center gap-3">
                  <div className="bg-brand h-6 w-10 rounded-full" />
                  <div className="bg-muted h-3 w-20 rounded" />
                </div>
              </FloatingPrimitive>

              {/* Dialog primitive */}
              <FloatingPrimitive className="absolute right-8 bottom-8 p-4" delay={1000}>
                <div className="w-48 space-y-3">
                  <div className="bg-foreground/80 h-4 w-28 rounded" />
                  <div className="bg-muted h-2 w-full rounded" />
                  <div className="bg-muted h-2 w-3/4 rounded" />
                  <div className="flex justify-end gap-2 pt-2">
                    <div className="bg-muted h-8 w-16 rounded-lg" />
                    <div className="bg-brand h-8 w-16 rounded-lg" />
                  </div>
                </div>
              </FloatingPrimitive>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            <FloatingPrimitive className="p-3" delay={0}>
              <div className="flex gap-2">
                <div className="bg-brand h-8 w-16 rounded-lg" />
                <div className="bg-muted h-8 w-16 rounded-lg" />
              </div>
            </FloatingPrimitive>

            <FloatingPrimitive className="p-3" delay={100}>
              <div className="h-8 w-full rounded-lg border" />
            </FloatingPrimitive>

            <FloatingPrimitive className="col-span-2 p-3" delay={200}>
              <div className="flex items-center gap-3">
                <div className="bg-brand size-8 rounded-full" />
                <div className="space-y-1 flex-1">
                  <div className="bg-foreground/80 h-2 w-20 rounded" />
                  <div className="bg-muted h-2 w-16 rounded" />
                </div>
              </div>
            </FloatingPrimitive>

            <FloatingPrimitive className="p-3" delay={300}>
              <div className="flex items-center gap-2">
                <div className="bg-brand h-5 w-9 rounded-full" />
                <div className="bg-muted h-2 w-12 rounded" />
              </div>
            </FloatingPrimitive>

            <FloatingPrimitive className="p-3" delay={400}>
              <div className="flex h-8 items-center justify-between rounded-lg border px-2">
                <div className="bg-muted h-2 w-12 rounded" />
                <div className="bg-muted size-3 rounded" />
              </div>
            </FloatingPrimitive>
          </div>

          {/* Fade overlay at bottom */}
          <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t to-transparent" />
        </div>

        <Spacer size={"lg"} sizeMobile={"md"} />

        {/* Component type tags */}
        <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="bg-muted rounded-full px-3 py-1">Forms</span>
          <span className="bg-muted rounded-full px-3 py-1">Navigation</span>
          <span className="bg-muted rounded-full px-3 py-1">Overlays</span>
          <span className="bg-muted rounded-full px-3 py-1">Data Display</span>
          <span className="bg-muted rounded-full px-3 py-1">Feedback</span>
        </div>
      </div>
    </div>
  )
}
