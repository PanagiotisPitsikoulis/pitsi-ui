"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"

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
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background p-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 flex w-full max-w-[200px] flex-col gap-4 rounded-xl border border-border bg-background p-4 shadow-sm">
        
        {/* Header */}
        <div className="flex items-center justify-between">
            <div className="h-2 w-12 rounded-full bg-muted" />
            <motion.div
                className="h-2 w-2 rounded-full bg-green-500"
                animate={{ opacity: isActive ? 1 : 0.2 }}
            />
        </div>

        {/* Interactive Element */}
        <div className="flex items-center justify-between rounded-lg border border-border bg-muted p-2">
            <div className="h-2 w-16 rounded-full bg-muted-foreground/30" />
            
            {/* Switch */}
            <motion.div 
                className={`relative h-5 w-9 rounded-full transition-colors duration-300 ${isActive ? 'bg-brand' : 'bg-muted'}`}
            >
                <motion.div 
                    className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-background shadow-sm"
                    animate={{ x: isActive ? 16 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            </motion.div>
        </div>
        
        {/* Result Area */}
        <div className="h-16 rounded-lg bg-muted p-2">
            <div
                className={`h-full w-full rounded border border-dashed transition-colors duration-300 ${
                    isActive ? 'bg-brand/10 border-brand' : 'bg-transparent border-border'
                }`}
            />
        </div>

      </div>


    </div>
  )
}
