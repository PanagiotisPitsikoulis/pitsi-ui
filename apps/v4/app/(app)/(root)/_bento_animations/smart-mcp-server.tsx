"use client"

import { useRef } from "react"
import { motion } from "motion/react"

import { AnimatedBeam } from "@/registry/new-york-v4/ui/animated-beam"
import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"

// Brand color (blue) - matches --brand from globals.css
const BRAND_COLOR = "#5b8def"

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

export function SmartMCPServerIllustration() {
  const containerRef = useRef<HTMLDivElement>(null)
  const topCardRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const bottomCardRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background p-6"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--background) 100%)",
        }}
      />

      {/* Container */}
      <div className="flex flex-col items-center gap-6">
        {/* Top Card (Input/Source) */}
        <div
          ref={topCardRef}
          className="relative z-10 w-64 rounded-xl border border-border bg-background p-4"
        >
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded bg-muted">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="text-xs text-muted-foreground">
              AI Agent • <span className="opacity-60">Request</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="h-3 w-full rounded bg-muted" />
            <div className="h-3 w-2/3 rounded bg-muted" />
          </div>
        </div>

        {/* Middle Node (The MCP Server Icon) */}
        <div className="relative z-20">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
          >
            <div
              ref={iconRef}
              className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background overflow-hidden"
            >
              <AppLogo className="h-6 w-6 text-foreground" />
              <BorderBeam
                size={60}
                duration={4}
                colorFrom={BRAND_COLOR}
                colorTo={BRAND_COLOR}
                borderWidth={2}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-foreground">
                MCP Server
              </span>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-muted-foreground">
                  Connected
                </span>
                <motion.span
                  className="h-1 w-1 rounded-full bg-green-500"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Card (Result) */}
        <motion.div
          ref={bottomCardRef}
          className="relative z-10 w-64 rounded-xl border border-border bg-background p-4"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded bg-muted">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <span className="text-xs text-foreground">Tools Available</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-md border border-border bg-muted px-2 py-1">
                <span className="text-[10px] text-muted-foreground">
                  add_component
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-border bg-muted px-2 py-1">
                <span className="text-[10px] text-muted-foreground">
                  search
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-border bg-muted px-2 py-1">
                <span className="text-[10px] text-muted-foreground">view</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={topCardRef}
        toRef={iconRef}
        curvature={-50}
        endYOffset={-5}
        gradientStartColor={BRAND_COLOR}
        gradientStopColor={BRAND_COLOR}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bottomCardRef}
        toRef={iconRef}
        curvature={50}
        endYOffset={5}
        gradientStartColor={BRAND_COLOR}
        gradientStopColor={BRAND_COLOR}
        reverse
      />
    </div>
  )
}
