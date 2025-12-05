"use client"

import { Database, MessageSquare, Server, Terminal } from "lucide-react"
import { motion } from "motion/react"

export function SmartMCPServerIllustration() {
  return (
    <div className="bg-background relative flex h-full w-full items-center justify-center overflow-hidden p-6">
      {/* Background Grid/Pattern */}


      <motion.div
        className="border-border bg-background relative z-10 flex w-48 flex-col gap-3 rounded-xl border p-4 shadow-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header: MCP Server Identity */}
        <div className="border-border flex items-center gap-3 border-b pb-3">
          <div className="bg-brand/10 text-brand flex h-8 w-8 items-center justify-center rounded-full">
            <Server className="size-4" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-brand text-xs">MCP Server</span>
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="bg-success size-1 animate-pulse rounded-full"></div>
              <span className="text-[7px]">active</span>
            </div>
          </div>
        </div>

        {/* Body: Capabilities List */}
        <div className="flex flex-col gap-2">
          {/* Resources */}
          <div className="flex items-center gap-2">
            <Database className="text-muted-foreground size-3" />
            <div className="bg-muted h-1.5 w-full rounded-full" />
          </div>
          {/* Prompts */}
          <div className="flex items-center gap-2">
            <MessageSquare className="text-muted-foreground size-3" />
            <div className="bg-muted h-1.5 w-3/4 rounded-full" />
          </div>
          {/* Tools */}
          <div className="flex items-center gap-2">
            <Terminal className="text-muted-foreground size-3" />
            <div className="bg-muted h-1.5 w-5/6 rounded-full" />
          </div>
        </div>

        {/* Scan Line (Representing Discovery Protocol) */}
        <motion.div
          className="bg-brand absolute top-0 left-0 h-[2px] w-full shadow-[0_0_20px_var(--brand)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.div>
    </div>
  )
}
