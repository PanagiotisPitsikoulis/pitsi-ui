"use client"

import React, { forwardRef, useRef } from "react"

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
        "z-10 flex size-10 items-center justify-center rounded-xl border border-border bg-card p-2 shadow-sm",
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

// Sanity Logo (proper zigzag mark)
function SanityLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 172 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M166.467 91.1548L160.09 80.3741L129.251 98.6238L163.508 56.2524L168.687 53.3048L167.407 51.4375L169.756 48.5251L158.951 39.776L153.995 45.9062L54.1503 102.652L91.0726 59.5289L159.832 22.912L153.303 10.6398L115.852 30.5807L134.29 9.04267L123.72 0L82.2178 48.4898L40.9856 70.4389L72.5527 29.9113L92.3292 19.9174L86.058 7.50424L28.4198 36.6522L44.1447 16.453L33.1643 7.91527L0 50.545L0.516727 50.956L6.70567 63.2047L43.487 44.6144L9.97042 87.6434L15.4547 91.9181L18.7195 98.0484L57.4386 77.4381L14.8088 127.243L25.3664 136.274L27.4921 133.796L130.344 75.1598L96.1929 117.402L96.7566 117.86L96.6979 117.884L103.779 129.85L149.192 102.981L131.706 130.391L143.426 137.86L171.271 94.2199L166.467 91.1548Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Payload Logo (icon only - just the geometric mark)
function PayloadLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 45 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.2356 43.9869L6.97565 35.184C6.79045 35.0728 6.66699 34.8753 6.66699 34.6531V21.0475C6.66699 20.8129 6.92626 20.6647 7.1238 20.7759L24.8407 30.9986C25.0876 31.1467 25.3963 30.9615 25.3963 30.6776V24.0476C25.3963 23.7884 25.2605 23.5414 25.0259 23.4056L3.71623 11.1087C3.53103 10.9976 3.28411 10.9976 3.09892 11.1087L0.308657 12.7261C0.123463 12.8372 0 13.0347 0 13.257V38.5298C0 38.752 0.123463 38.9496 0.308657 39.0607L22.1986 51.7033C22.3838 51.8144 22.6307 51.8144 22.8159 51.7033L41.1995 41.0855C41.4464 40.9373 41.4464 40.5916 41.1995 40.4435L35.4709 37.1347C35.2363 36.9989 34.9647 36.9989 34.7301 37.1347L22.8653 43.9869C22.6801 44.098 22.4332 44.098 22.248 43.9869H22.2356Z"
        fill="currentColor"
      />
      <path
        d="M44.7062 12.7155L22.8163 0.0852905C22.6311 -0.025826 22.3842 -0.025826 22.199 0.0852905L10.6305 6.76463C10.3836 6.91278 10.3836 7.25848 10.6305 7.40663L16.3098 10.6907C16.5444 10.8265 16.816 10.8265 17.0506 10.6907L22.236 7.70294C22.4212 7.59183 22.6681 7.59183 22.8533 7.70294L38.1133 16.5058C38.2985 16.617 38.422 16.8145 38.422 17.0367V30.7041C38.422 30.9633 38.5578 31.2102 38.7924 31.3461L44.4717 34.6178C44.7186 34.766 45.0272 34.5808 45.0272 34.2968V13.2588C45.0272 13.0365 44.9038 12.839 44.7186 12.7279L44.7062 12.7155Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function CMSIntegrationIllustration() {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const sanityRef = useRef<HTMLDivElement>(null)
  const payloadRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background p-10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--background) 100%)",
        }}
      />

      <div className="flex size-full max-w-xs flex-row items-center justify-between">
        {/* Left - Sanity */}
        <div className="flex flex-col items-center gap-1">
          <Circle ref={sanityRef}>
            <SanityLogo className="size-5 text-foreground" />
          </Circle>
          <span className="text-[8px] font-medium text-muted-foreground">
            Sanity
          </span>
        </div>

        {/* Center - App Logo */}
        <Circle
          ref={centerRef}
          className="size-14 rounded-2xl border-border bg-card"
        >
          <AppLogo className="size-7 text-foreground" />
        </Circle>

        {/* Right - Payload */}
        <div className="flex flex-col items-center gap-1">
          <Circle ref={payloadRef}>
            <PayloadLogo className="size-5 text-foreground" />
          </Circle>
          <span className="text-[8px] font-medium text-muted-foreground">
            Payload
          </span>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={sanityRef}
        toRef={centerRef}
        gradientStartColor={BRAND_COLOR}
        gradientStopColor={BRAND_COLOR}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={payloadRef}
        toRef={centerRef}
        gradientStartColor={BRAND_COLOR}
        gradientStopColor={BRAND_COLOR}
        reverse
      />

    </div>
  )
}
