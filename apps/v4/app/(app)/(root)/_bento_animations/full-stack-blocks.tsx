"use client"

import { motion } from "motion/react"

export function FullStackBlocksIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background p-8">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

      <div className="grid w-full max-w-2xl grid-cols-2 gap-6">
        
        {/* Left: Code Editor (Backend/Logic) */}
        <motion.div 
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex items-center gap-1.5 border-b border-border/50 bg-muted/5 px-3 py-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/20" />
                <div className="ml-2 h-1.5 w-16 rounded-full bg-muted/20" />
            </div>
            <div className="flex-1 p-4 space-y-2">
                <div className="h-2 w-1/3 rounded-full bg-brand/20" />
                <div className="h-2 w-2/3 rounded-full bg-muted/20" />
                <div className="h-2 w-1/2 rounded-full bg-muted/10" />
                <div className="h-2 w-3/4 rounded-full bg-muted/10" />
                <div className="h-2 w-1/4 rounded-full bg-brand/10" />
            </div>
        </motion.div>

        {/* Right: Visual Preview (Frontend) */}
        <motion.div 
            className="relative flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-lg"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            {/* Hero Section */}
            <div className="flex flex-1 flex-col items-center justify-center p-6 text-center gap-3 bg-muted/5">
                <div className="h-2.5 w-16 rounded-full bg-brand/20" />
                <div className="h-4 w-32 rounded-lg bg-foreground/10" />
                <div className="h-2 w-24 rounded-full bg-muted-foreground/20" />
                <div className="mt-2 flex gap-2">
                    <div className="h-6 w-16 rounded-md bg-brand text-[0px]">Button</div>
                    <div className="h-6 w-16 rounded-md bg-muted/20 text-[0px]">Button</div>
                </div>
            </div>
            
            {/* Connecting Arrow (Animated) */}
            <motion.div 
                className="absolute top-1/2 -left-3 -translate-y-1/2 z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="h-6 w-6 rotate-45 border-r border-t border-brand/50 bg-background" />
            </motion.div>
        </motion.div>

      </div>
    </div>
  )
}