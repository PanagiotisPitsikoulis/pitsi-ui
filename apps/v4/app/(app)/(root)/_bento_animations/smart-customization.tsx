"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"

export function SmartCustomizationIllustration() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // Morphing states
  const variants = [
    { size: "compact", accent: false },
    { size: "expanded", accent: false },
    { size: "expanded", accent: true },
  ]

  const current = variants[step]
  const isExpanded = current.size === "expanded"
  const hasAccent = current.accent

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background p-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

      {/* Morphing Card */}
      <motion.div
        className="relative z-10 flex flex-col rounded-xl border border-border bg-background shadow-sm"
        animate={{
          width: isExpanded ? 200 : 160,
          padding: isExpanded ? 16 : 12,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Avatar Row */}
        <div className="flex items-center gap-3">
          <motion.div
            className="flex items-center justify-center rounded-lg bg-muted"
            animate={{
              width: isExpanded ? 40 : 32,
              height: isExpanded ? 40 : 32,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div
              className="rounded bg-muted-foreground"
              animate={{
                width: isExpanded ? 20 : 14,
                height: isExpanded ? 20 : 14,
                opacity: hasAccent ? 0.5 : 0.3,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </motion.div>

          {/* Text Lines */}
          <div className="flex flex-1 flex-col gap-1.5">
            <motion.div
              className="h-2 rounded-full bg-foreground/70"
              animate={{ width: isExpanded ? "75%" : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <motion.div
              className="h-1.5 rounded-full bg-muted-foreground/30"
              animate={{ width: isExpanded ? "50%" : "70%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Expandable Content */}
        <motion.div
          className="overflow-hidden"
          animate={{
            height: isExpanded ? 48 : 0,
            marginTop: isExpanded ? 12 : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="h-1.5 flex-1 rounded-full bg-muted" />
              <motion.div
                className="h-1.5 w-8 rounded-full bg-muted-foreground"
                animate={{
                  opacity: hasAccent ? 0.5 : 0.3,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
            <div className="h-6 rounded-lg border border-dashed border-border" />
          </div>
        </motion.div>
      </motion.div>

      {/* State Indicator */}
      <div className="absolute bottom-4 flex items-center gap-1.5">
        {variants.map((_, i) => (
          <motion.div
            key={i}
            className="h-1 rounded-full"
            animate={{
              width: step === i ? 12 : 4,
              backgroundColor:
                step === i ? "var(--muted-foreground)" : "var(--muted)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        ))}
      </div>
    </div>
  )
}
