"use client"

import React, { forwardRef, useRef } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/registry/new-york-v4/ui/animated-beam"

// Brand color (blue) - matches --brand from globals.css
const BRAND_COLOR = "#5b8def"

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-10 items-center justify-center rounded-full border border-border bg-background p-2 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  )
})
Circle.displayName = "Circle"

// App Logo (pitsi/ui)
function AppLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 1 21.5 6.5V17.5L13 22.4211V11.4234L3.49793 5.92225 12 1ZM2.5 7.6555V17.5L11 22.4211V12.5765L2.5 7.6555Z" />
    </svg>
  )
}

// Next.js Logo
function NextLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 180"
      className={className}
    >
      <mask
        height="180"
        id="nextmask"
        maskUnits="userSpaceOnUse"
        width="180"
        x="0"
        y="0"
        style={{ maskType: "alpha" }}
      >
        <circle cx="90" cy="90" fill="black" r="90" />
      </mask>
      <g mask="url(#nextmask)">
        <circle cx="90" cy="90" fill="currentColor" r="90" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#nextgrad0)"
        />
        <rect fill="url(#nextgrad1)" height="72" width="12" x="115" y="54" />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="nextgrad0"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
        >
          <stop stopColor="var(--background, white)" />
          <stop offset="1" stopColor="var(--background, white)" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="nextgrad1"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
        >
          <stop stopColor="var(--background, white)" />
          <stop offset="1" stopColor="var(--background, white)" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Drizzle Logo
function DrizzleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground", className)}
      fill="currentColor"
    >
      <path d="M5.353 11.823a1.036 1.036 0 0 0 -0.395 -1.422 1.063 1.063 0 0 0 -1.437 0.399L0.138 16.702a1.035 1.035 0 0 0 0.395 1.422 1.063 1.063 0 0 0 1.437 -0.398l3.383 -5.903Zm11.216 0a1.036 1.036 0 0 0 -0.394 -1.422 1.064 1.064 0 0 0 -1.438 0.399l-3.382 5.902a1.036 1.036 0 0 0 0.394 1.422c0.506 0.283 1.15 0.104 1.438 -0.398l3.382 -5.903Zm7.293 -4.525a1.036 1.036 0 0 0 -0.395 -1.422 1.062 1.062 0 0 0 -1.437 0.399l-3.383 5.902a1.036 1.036 0 0 0 0.395 1.422 1.063 1.063 0 0 0 1.437 -0.399l3.383 -5.902Zm-11.219 0a1.035 1.035 0 0 0 -0.394 -1.422 1.064 1.064 0 0 0 -1.438 0.398l-3.382 5.903a1.036 1.036 0 0 0 0.394 1.422c0.506 0.282 1.15 0.104 1.438 -0.399l3.382 -5.902Z" />
    </svg>
  )
}

// Better Auth Logo
function BetterAuthLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/integrations/better-auth_dark.svg"
      alt="Better Auth"
      width={24}
      height={24}
      className={cn("dark:invert", className)}
    />
  )
}

// Tailwind Logo
function TailwindLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  )
}

export function FullStackBlocksIllustration() {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background p-6"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
      />

      <div className="flex size-full max-w-[240px] flex-row items-stretch justify-between gap-8">
        {/* Left - pitsi/ui logo */}
        <div className="flex flex-col justify-center">
          <Circle ref={centerRef} className="size-14">
            <AppLogo className="size-7 text-foreground" />
          </Circle>
        </div>

        {/* Right column - stacked icons */}
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <NextLogo className="size-5 text-foreground" />
          </Circle>
          <Circle ref={div2Ref}>
            <DrizzleLogo className="size-4" />
          </Circle>
          <Circle ref={div3Ref}>
            <BetterAuthLogo className="size-4" />
          </Circle>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={div1Ref}
        gradientStartColor={BRAND_COLOR}
        gradientStopColor={BRAND_COLOR}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={div2Ref}
        gradientStartColor={BRAND_COLOR}
        gradientStopColor={BRAND_COLOR}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={div3Ref}
        gradientStartColor={BRAND_COLOR}
        gradientStopColor={BRAND_COLOR}
        duration={3}
      />
    </div>
  )
}
