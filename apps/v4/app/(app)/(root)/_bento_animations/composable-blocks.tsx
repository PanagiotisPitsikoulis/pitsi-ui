"use client"

import { motion } from "motion/react"

export function ComposableBlocksIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background p-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

      <div className="relative w-56">
        {/* Main Container Outline */}
        <div className="absolute inset-0 -m-2 rounded-xl border border-dashed border-border/30" />

        <div className="flex flex-col gap-2">
            
            {/* Header Block */}
            <motion.div
                className="h-12 w-full rounded-lg border border-border bg-background px-3 py-2 shadow-sm flex items-center justify-between"
                animate={{ 
                    y: [0, -6, -6, 0],
                    boxShadow: ["0 1px 2px 0 rgba(0,0,0,0.05)", "0 4px 6px -1px rgba(0,0,0,0.1)", "0 4px 6px -1px rgba(0,0,0,0.1)", "0 1px 2px 0 rgba(0,0,0,0.05)"]
                }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.6, 1], ease: "easeInOut" }}
            >
                <div className="h-3 w-3 rounded-full bg-brand/20" />
                <div className="flex gap-2">
                    <div className="h-1.5 w-6 rounded-full bg-muted/20" />
                    <div className="h-1.5 w-6 rounded-full bg-muted/20" />
                </div>
            </motion.div>

            {/* Hero Block */}
            <motion.div
                className="h-28 w-full rounded-lg border border-brand/30 bg-brand/5 px-3 py-3 shadow-sm flex flex-col justify-center gap-2"
                animate={{ 
                    scale: [1, 0.96, 0.96, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.6, 1], ease: "easeInOut" }}
            >
                <div className="h-3 w-3/4 rounded-md bg-brand/10" />
                <div className="h-2 w-1/2 rounded-md bg-brand/5" />
                <div className="mt-2 flex gap-2">
                    <div className="h-6 w-16 rounded bg-brand text-brand-foreground text-[8px] flex items-center justify-center font-medium">Action</div>
                    <div className="h-6 w-16 rounded border border-brand/20 bg-background text-[8px] flex items-center justify-center text-brand">Learn</div>
                </div>
            </motion.div>

            {/* Features Block */}
            <motion.div
                className="grid grid-cols-2 gap-2"
                animate={{ 
                    y: [0, 6, 6, 0],
                    boxShadow: ["0 1px 2px 0 rgba(0,0,0,0.05)", "0 4px 6px -1px rgba(0,0,0,0.1)", "0 4px 6px -1px rgba(0,0,0,0.1)", "0 1px 2px 0 rgba(0,0,0,0.05)"]
                }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.6, 1], ease: "easeInOut" }}
            >
                <div className="h-20 rounded-lg border border-border bg-background p-2 shadow-sm flex flex-col gap-2">
                    <div className="h-6 w-6 rounded bg-muted/10 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-muted/20" />
                    </div>
                    <div className="h-1.5 w-full rounded bg-muted/10" />
                    <div className="h-1.5 w-2/3 rounded bg-muted/5" />
                </div>
                <div className="h-20 rounded-lg border border-border bg-background p-2 shadow-sm flex flex-col gap-2">
                     <div className="h-6 w-6 rounded bg-muted/10 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-muted/20" />
                    </div>
                    <div className="h-1.5 w-full rounded bg-muted/10" />
                    <div className="h-1.5 w-2/3 rounded bg-muted/5" />
                </div>
            </motion.div>

        </div>
      </div>
    </div>
  )
}
