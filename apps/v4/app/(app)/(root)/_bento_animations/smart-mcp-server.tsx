"use client"

import { motion } from "motion/react"

export function SmartMCPServerIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background p-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />
      
      {/* Central Node (MCP) */}
      <div className="relative flex items-center justify-center">
          {/* Pulse Effect - Significantly reduced opacity */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-brand/5"
            animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute inset-0 rounded-full bg-brand/5"
            animate={{ scale: [1, 2], opacity: [0.2, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />

          {/* Main Icon - Clean Server Chip */}
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-background shadow-sm">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                <line x1="6" y1="6" x2="6.01" y2="6"/>
                <line x1="6" y1="18" x2="6.01" y2="18"/>
                <path d="M12 14v-4"/>
                <path d="M12 10l-2-2"/>
                <path d="M12 10l2-2"/>
            </svg>
          </div>
      </div>

      {/* Satellite Nodes */}
      {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ 
                top: "50%", 
                left: "50%", 
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: i * -5 }}
          >
             <motion.div
                className="absolute flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background shadow-sm"
                style={{ 
                    transform: `rotate(${i * 90}deg) translate(100px) rotate(-${i * 90}deg)`
                }}
             >
                <div className="h-4 w-4 rounded-full bg-muted/20" />
             </motion.div>
          </motion.div>
      ))}

      {/* Subtle Connection Lines */}
       <svg className="absolute inset-0 h-full w-full pointer-events-none">
        <circle cx="50%" cy="50%" r="100" fill="none" stroke="currentColor" strokeOpacity="0.05" strokeDasharray="4 4" />
      </svg>

    </div>
  )
}
