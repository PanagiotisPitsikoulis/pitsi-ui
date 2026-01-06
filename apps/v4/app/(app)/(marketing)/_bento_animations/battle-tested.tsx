"use client"

import { motion } from "motion/react"

export function BattleTestedIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-6">
      <motion.div
        className="border-border bg-background relative z-10 flex w-48 flex-col gap-3 rounded-xl border p-4 shadow-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Component Content */}
        <div className="flex items-center gap-3">
          <div className="bg-muted h-8 w-8 rounded-full" />
          <div className="space-y-1">
            <div className="bg-muted h-2 w-20 rounded-full" />
            <div className="bg-muted h-2 w-12 rounded-full" />
          </div>
        </div>
        <div className="bg-muted h-16 w-full rounded-lg" />

        {/* Scan Line */}
        <motion.div
          className="bg-success absolute top-0 left-0 h-[2px] w-full shadow-[0_0_20px_rgba(var(--success),1)]"
          initial={{ top: "0%", opacity: 0 }}
          animate={{
            top: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1,
          }}
        />

        {/* Title Badge */}
        <div className="bg-background text-muted-foreground absolute -top-2 -right-2 rounded-full border px-2.5 py-1 text-[10px] font-medium shadow-xs">
          30/30 Tests
        </div>
      </motion.div>
    </div>
  )
}
