"use client"

import {
  BlendModeCursor,
  GradientCursor,
} from "@/registry/new-york-v4/animations/blend-mode-cursor/blend-mode-cursor"

export default function BlendModeCursorDemo() {
  return (
    <div className="bg-background relative h-[100vh]">
      <div className="flex h-full items-center justify-center">
        <h1
          data-cursor-active
          className="text-foreground z-10 max-w-[90vw] p-20 text-center text-[4.5vw]"
        >
          The quick brown fox jumps over the lazy dog
        </h1>
      </div>
      <BlendModeCursor />
    </div>
  )
}

export function GradientCursorDemo() {
  return (
    <div className="bg-background relative h-[100vh]">
      <div className="flex h-full items-center justify-center">
        <h1
          data-cursor-active
          className="text-foreground z-10 max-w-[90vw] p-20 text-center text-[4.5vw]"
        >
          The quick brown fox jumps over the lazy dog
        </h1>
      </div>
      <GradientCursor />
    </div>
  )
}
