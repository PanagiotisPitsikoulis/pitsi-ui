"use client"

import { motion } from "motion/react"
import { Database, MessageSquare, Terminal, Server } from "lucide-react"

export function SmartMCPServerIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background p-6">
      
      {/* Background Grid/Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

      <motion.div
        className="relative z-10 flex w-48 flex-col gap-3 rounded-xl border border-border bg-background p-4 shadow-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header: MCP Server Identity */}
        <div className="flex items-center gap-3 border-b border-border pb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Server className="size-4" />
            </div>
            <div className="space-y-1">
                <div className="h-2 w-16 rounded-full bg-foreground/20" />
                <div className="h-1.5 w-10 rounded-full bg-muted-foreground/20" />
            </div>
        </div>

        {/* Body: Capabilities List */}
        <div className="flex flex-col gap-2">
            {/* Resources */}
            <div className="flex items-center gap-2">
                <Database className="size-3 text-muted-foreground" />
                <div className="h-1.5 w-full rounded-full bg-muted" />
            </div>
            {/* Prompts */}
            <div className="flex items-center gap-2">
                <MessageSquare className="size-3 text-muted-foreground" />
                <div className="h-1.5 w-3/4 rounded-full bg-muted" />
            </div>
            {/* Tools */}
            <div className="flex items-center gap-2">
                <Terminal className="size-3 text-muted-foreground" />
                <div className="h-1.5 w-5/6 rounded-full bg-muted" />
            </div>
        </div>

        {/* Scan Line (Representing Discovery Protocol) */}
        <motion.div
            className="absolute top-0 left-0 h-[2px] w-full bg-brand shadow-[0_0_20px_var(--brand)]"
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



      </motion.div>
    </div>
  )
}
