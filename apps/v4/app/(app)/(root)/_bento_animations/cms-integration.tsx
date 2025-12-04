"use client"

import { motion } from "motion/react"

export function CMSIntegrationIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background p-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 flex w-full max-w-[280px] items-center justify-between gap-4">
        
        {/* CMS Side */}
        <div className="flex flex-col gap-4">
            {/* CMS Node 1 */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted/5 shadow-sm">
                <div className="h-6 w-6 rounded bg-muted-foreground/20" />
                {/* Connecting Line */}
                <motion.div 
                    className="absolute top-1/2 left-full h-[2px] w-12 bg-border"
                    style={{ transform: "translateY(-50%)" }}
                >
                    <motion.div 
                        className="absolute top-0 left-0 h-full w-4 bg-brand"
                        animate={{ x: [-16, 48], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            </div>

            {/* CMS Node 2 */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted/5 shadow-sm">
                <div className="h-6 w-6 rounded-full bg-muted-foreground/20" />
                 {/* Connecting Line */}
                 <motion.div 
                    className="absolute top-1/2 left-full h-[2px] w-12 bg-border"
                    style={{ transform: "translateY(-50%)" }}
                >
                    <motion.div 
                        className="absolute top-0 left-0 h-full w-4 bg-brand"
                        animate={{ x: [-16, 48], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                </motion.div>
            </div>
        </div>

        {/* App Block */}
        <motion.div 
            className="relative z-10 flex h-32 flex-1 flex-col gap-2 rounded-xl border border-border bg-background p-3 shadow-sm"
            animate={{ 
                borderColor: ["var(--border)", "var(--brand)", "var(--border)"],
                boxShadow: ["0 1px 2px 0 rgb(0 0 0 / 0.05)", "0 0 0 1px var(--brand)", "0 1px 2px 0 rgb(0 0 0 / 0.05)"] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
        >
             <div className="h-2 w-1/3 rounded-full bg-muted-foreground/10" />
             <div className="h-20 w-full rounded-lg bg-muted/10" />
             <motion.div 
                className="absolute top-3 right-3 h-2 w-2 rounded-full bg-brand"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
             />
        </motion.div>

      </div>
    </div>
  )
}
