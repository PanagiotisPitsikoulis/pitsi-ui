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

// React Logo
function ReactLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground", className)}
      fill="currentColor"
    >
      <circle cx="12" cy="11.245" r="1.785" />
      <path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.111-.39a19.628 19.628 0 0 0-1.137-2.984l-.085-.178.085-.178c.46-.963.841-1.961 1.137-2.984l.111-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.099zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z" />
      <path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z" />
      <path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 1.95.418 2.946.519l.194.019.113.16c.574.86 1.2 1.686 1.876 2.471l.283.29-.283.29c-1.586 1.63-3.112 2.517-3.939 2.517zm-1.143-5.399c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z" />
      <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.631.622-1.252.971-1.858.347-.596.724-1.182 1.126-1.77l.113-.16.196-.018c1.376-.117 2.772-.117 4.148 0l.194.019.113.16a25.18 25.18 0 0 1 2.1 3.628l.083.179-.083.177a24.126 24.126 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z" />
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

export function FullStackBlocksIllustration() {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  const reactRef = useRef<HTMLDivElement>(null)
  const drizzleRef = useRef<HTMLDivElement>(null)
  const authRef = useRef<HTMLDivElement>(null)

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

      <div className="flex size-full max-w-xs flex-col items-stretch justify-between gap-6">
        {/* Top row */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center gap-1">
            <Circle ref={nextRef}>
              <NextLogo className="size-5 text-foreground" />
            </Circle>
            <span className="text-[8px] font-medium text-muted-foreground">
              Next.js
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Circle ref={reactRef}>
              <ReactLogo className="size-4" />
            </Circle>
            <span className="text-[8px] font-medium text-muted-foreground">
              React
            </span>
          </div>
        </div>

        {/* Middle row - center logo */}
        <div className="flex flex-row items-center justify-center">
          <Circle
            ref={centerRef}
            className="size-14 rounded-2xl border-border bg-card"
          >
            <AppLogo className="size-7 text-foreground" />
          </Circle>
        </div>

        {/* Bottom row */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center gap-1">
            <Circle ref={drizzleRef}>
              <DrizzleLogo className="size-4" />
            </Circle>
            <span className="text-[8px] font-medium text-muted-foreground">
              Drizzle
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Circle ref={authRef}>
              <BetterAuthLogo className="size-4" />
            </Circle>
            <span className="text-[8px] font-medium text-muted-foreground">
              Auth
            </span>
          </div>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={nextRef}
        toRef={centerRef}
        curvature={-50}
        endYOffset={-5}
        gradientStartColor={BRAND_COLOR}
        gradientStopColor={BRAND_COLOR}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={reactRef}
        toRef={centerRef}
        curvature={50}
        endYOffset={-5}
        gradientStartColor={BRAND_COLOR}
        gradientStopColor={BRAND_COLOR}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={drizzleRef}
        toRef={centerRef}
        curvature={50}
        endYOffset={5}
        gradientStartColor={BRAND_COLOR}
        gradientStopColor={BRAND_COLOR}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={authRef}
        toRef={centerRef}
        curvature={-50}
        endYOffset={5}
        gradientStartColor={BRAND_COLOR}
        gradientStopColor={BRAND_COLOR}
        reverse
      />
    </div>
  )
}
