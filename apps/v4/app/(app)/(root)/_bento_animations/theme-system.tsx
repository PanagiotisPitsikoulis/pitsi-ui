"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"

export function ThemeSystemIllustration() {
  const [theme, setTheme] = useState<"professional" | "playful">("professional")

  useEffect(() => {
    const interval = setInterval(() => {
      setTheme(prev => prev === "professional" ? "playful" : "professional")
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const isPlayful = theme === "playful"

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background p-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

      {/* Dashboard Container */}
      <motion.div 
        className="grid w-full max-w-3xl h-[320px] grid-cols-[200px_1fr] gap-4 rounded-xl border border-border bg-background p-4 shadow-sm overflow-hidden"
        animate={{ 
            borderRadius: isPlayful ? "24px" : "8px",
            gap: isPlayful ? "24px" : "16px"
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        
        {/* Sidebar */}
        <div className="flex flex-col gap-4 border-r border-border/50 pr-4">
            <motion.div 
                className="h-8 w-8 bg-brand"
                animate={{ borderRadius: isPlayful ? "12px" : "4px" }}
                transition={{ duration: 1 }}
            />
            <div className="space-y-3 mt-2">
                {[1, 2, 3].map(i => (
                    <motion.div 
                        key={i}
                        className="h-8 w-full bg-muted/10"
                        animate={{ borderRadius: isPlayful ? "12px" : "4px" }}
                        transition={{ duration: 1 }}
                    />
                ))}
            </div>
            <div className="mt-auto flex gap-2 items-center">
                <motion.div className="h-8 w-8 bg-muted/20" animate={{ borderRadius: isPlayful ? "50%" : "4px" }} transition={{ duration: 1 }} />
                <div className="h-2 w-20 bg-muted/20 rounded-full" />
            </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-4">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="h-4 w-32 bg-muted/20 rounded-full" />
                <div className="flex gap-2">
                    <motion.div className="h-8 w-8 bg-muted/10" animate={{ borderRadius: isPlayful ? "50%" : "4px" }} transition={{ duration: 1 }} />
                    <motion.div className="h-8 w-8 bg-muted/10" animate={{ borderRadius: isPlayful ? "50%" : "4px" }} transition={{ duration: 1 }} />
                </div>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-3 gap-4 flex-1">
                {/* Big Chart */}
                <motion.div 
                    className="col-span-2 border border-border/50 bg-muted/5 p-4"
                    animate={{ borderRadius: isPlayful ? "20px" : "4px" }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex items-end gap-2 h-full pt-4 px-2">
                        <motion.div className="flex-1 bg-brand/20" animate={{ height: "40%", borderRadius: isPlayful ? "8px 8px 0 0" : "2px 2px 0 0" }} transition={{ duration: 1 }} />
                        <motion.div className="flex-1 bg-brand/40" animate={{ height: "70%", borderRadius: isPlayful ? "8px 8px 0 0" : "2px 2px 0 0" }} transition={{ duration: 1 }} />
                        <motion.div className="flex-1 bg-brand/60" animate={{ height: "50%", borderRadius: isPlayful ? "8px 8px 0 0" : "2px 2px 0 0" }} transition={{ duration: 1 }} />
                        <motion.div className="flex-1 bg-brand" animate={{ height: "85%", borderRadius: isPlayful ? "8px 8px 0 0" : "2px 2px 0 0" }} transition={{ duration: 1 }} />
                    </div>
                </motion.div>

                {/* Side Stats */}
                <div className="flex flex-col gap-4">
                    <motion.div 
                        className="flex-1 border border-border/50 bg-muted/5 p-3"
                        animate={{ borderRadius: isPlayful ? "20px" : "4px" }}
                        transition={{ duration: 1 }}
                    >
                         <motion.div className="h-8 w-8 bg-brand/20 mb-2" animate={{ borderRadius: isPlayful ? "50%" : "2px" }} transition={{ duration: 1 }} />
                         <div className="h-2 w-16 bg-muted/20 rounded-full" />
                    </motion.div>
                    <motion.div 
                        className="flex-1 border border-border/50 bg-muted/5 p-3"
                        animate={{ borderRadius: isPlayful ? "20px" : "4px" }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div className="h-8 w-8 bg-brand/20 mb-2" animate={{ borderRadius: isPlayful ? "50%" : "2px" }} transition={{ duration: 1 }} />
                         <div className="h-2 w-16 bg-muted/20 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </div>

      </motion.div>
    </div>
  )
}