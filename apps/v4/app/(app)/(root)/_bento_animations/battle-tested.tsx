"use client"

import { motion } from "motion/react"

export function BattleTestedIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background p-6">
      
      {/* Background Grid/Pattern to imply technical/testing env */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

      <motion.div
        className="relative z-10 flex w-48 flex-col gap-3 rounded-xl border border-border bg-background p-4 shadow-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Component Content */}
        <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-muted/20" />
            <div className="space-y-1">
                <div className="h-2 w-20 rounded-full bg-muted/20" />
                <div className="h-2 w-12 rounded-full bg-muted/20" />
            </div>
        </div>
        <div className="h-16 w-full rounded-lg bg-muted/10" />

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

        {/* Status Badge */}
        <motion.div
            className="absolute -right-2 -top-2 flex items-center gap-1 rounded-full bg-success px-2 py-1 text-[10px] font-bold text-success-foreground shadow-sm"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 1, 1]
            }}
            transition={{
                delay: 1.5,
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2.5
            }}
        >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>PASS</span>
        </motion.div>

      </motion.div>
    </div>
  )
}
