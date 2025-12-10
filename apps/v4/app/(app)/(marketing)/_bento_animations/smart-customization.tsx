"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

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
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-6">
      {/* Morphing Card */}
      <motion.div
        className="border-border bg-background relative z-10 flex flex-col rounded-xl border shadow-sm"
        animate={{
          width: isExpanded ? 200 : 160,
          padding: isExpanded ? 16 : 12,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Avatar Row */}
        <div className="flex items-center gap-3">
          <motion.div
            className={`flex items-center justify-center rounded-lg transition-colors duration-300 ${hasAccent ? "bg-brand/20" : "bg-muted"}`}
            animate={{
              width: isExpanded ? 40 : 32,
              height: isExpanded ? 40 : 32,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div
              className={`rounded transition-colors duration-300 ${hasAccent ? "bg-brand" : "bg-muted/40"}`}
              animate={{
                width: isExpanded ? 20 : 14,
                height: isExpanded ? 20 : 14,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </motion.div>

          {/* Text Lines */}
          <div className="flex flex-1 flex-col gap-1.5">
            <motion.div
              className="bg-muted/70 h-2 rounded-full"
              animate={{ width: isExpanded ? "75%" : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <motion.div
              className="bg-muted-foreground/30 h-1.5 rounded-full"
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
              <div className="bg-muted h-1.5 flex-1 rounded-full" />
              <div
                className={`h-1.5 w-8 rounded-full transition-colors duration-300 ${hasAccent ? "bg-brand" : "bg-muted/40"}`}
              />
            </div>
            <div
              className={`h-6 rounded-lg border border-dashed transition-colors duration-300 ${hasAccent ? "border-brand/50" : "border-border"}`}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* State Indicator */}
      <div className="absolute bottom-4 flex items-center gap-1.5">
        {variants.map((variant, i) => (
          <motion.div
            key={i}
            className={`h-1 rounded-full transition-colors duration-300 ${
              step === i
                ? variant.accent
                  ? "bg-brand"
                  : "bg-muted-foreground"
                : "bg-muted"
            }`}
            animate={{
              width: step === i ? 12 : 4,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        ))}
      </div>
    </div>
  )
}
