"use client"

import { motion } from "motion/react"

export function BattleTestedIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-6">
      <motion.div
        className="relative z-10 flex w-48 flex-col gap-3 rounded-xl border border-border bg-background p-4 shadow-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Component Content */}
        <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-muted" />
            <div className="space-y-1">
                <div className="h-2 w-20 rounded-full bg-muted" />
                <div className="h-2 w-12 rounded-full bg-muted" />
            </div>
        </div>
        <div className="h-16 w-full rounded-lg bg-muted" />

        {/* Scan Line */}
        <motion.div
            className="absolute top-0 left-0 h-[2px] w-full bg-success shadow-[0_0_20px_rgba(var(--success),1)]"
            initial={{ top: "0%", opacity: 0 }}
            animate={{ 
                top: ["0%", "100%"],
                opacity: [0, 1, 1, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1
            }}
        />

        {/* Title Badge */}
        <div className="absolute -right-2 -top-2 rounded-full border bg-background px-2.5 py-1 text-[10px] font-medium text-muted-foreground shadow-xs">
            30/30 Tests
        </div>

      </motion.div>
    </div>
  )
}
