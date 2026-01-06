"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

export function FullyFunctionalIllustration() {
  const [isActive, setIsActive] = useState(false)

  // Sync state with cursor animation
  // Animation cycle is 3s
  // 0.4 (1.2s): Arrive
  // 0.5 (1.5s): Click (Toggle)
  // 0.6 (1.8s): Leave
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive((prev) => !prev)
      const interval = setInterval(() => {
        setIsActive((prev) => !prev)
      }, 3000)
      return () => clearInterval(interval)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-6">
      <div className="border-border bg-background relative z-10 flex w-full max-w-[200px] flex-col gap-4 rounded-xl border p-4 shadow-sm">
        {/* Title Badge */}
        <div className="bg-background text-muted-foreground absolute -top-2 -right-2 rounded-full border px-2.5 py-1 text-[10px] font-medium shadow-xs">
          fetching data...
        </div>

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="bg-muted h-2 w-12 rounded-full" />
          <motion.div
            className="h-2 w-2 rounded-full bg-green-500"
            animate={{ opacity: isActive ? 1 : 0.2 }}
          />
        </div>

        {/* Interactive Element */}
        <div className="border-border bg-muted flex items-center justify-between rounded-lg border p-2">
          <div className="bg-muted-foreground/30 h-2 w-16 rounded-full" />

          {/* Switch */}
          <motion.div
            className={`relative h-5 w-9 rounded-full transition-colors duration-300 ${isActive ? "bg-brand" : "bg-muted"}`}
          >
            <motion.div
              className="bg-background absolute top-0.5 left-0.5 h-4 w-4 rounded-full shadow-sm"
              animate={{ x: isActive ? 16 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </motion.div>
        </div>

        {/* Result Area */}
        <div className="bg-muted h-16 rounded-lg p-2">
          <div
            className={`h-full w-full rounded border border-dashed transition-colors duration-300 ${
              isActive
                ? "bg-brand/10 border-brand"
                : "border-border bg-transparent"
            }`}
          />
        </div>
      </div>
    </div>
  )
}
