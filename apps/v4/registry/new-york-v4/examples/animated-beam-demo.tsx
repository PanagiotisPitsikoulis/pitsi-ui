"use client"

import { useRef } from "react"
import { Cpu, Database, Globe } from "lucide-react"

import { AnimatedBeam } from "@/registry/new-york-v4/ui/animated-beam"

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="bg-background relative flex h-[200px] w-full max-w-lg items-center justify-between gap-16 p-12"
    >
      <div
        ref={leftRef}
        className="bg-card z-10 flex size-12 items-center justify-center rounded-full border shadow-sm"
      >
        <Database className="size-5" />
      </div>
      <div
        ref={centerRef}
        className="bg-card z-10 flex size-12 items-center justify-center rounded-full border shadow-sm"
      >
        <Cpu className="size-5" />
      </div>
      <div
        ref={rightRef}
        className="bg-card z-10 flex size-12 items-center justify-center rounded-full border shadow-sm"
      >
        <Globe className="size-5" />
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={leftRef}
        toRef={centerRef}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={rightRef}
        curvature={20}
        reverse
      />
    </div>
  )
}
