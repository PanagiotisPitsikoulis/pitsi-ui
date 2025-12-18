"use client"

import { useState } from "react"
import { motion } from "motion/react"

import EasingComposerClient from "@/app/(app)/(tools)/tools/easing-composer/page.client"
import ShadowComposerPageClient from "@/app/(app)/(tools)/tools/shadow-composer/page.client"

export function StackedToolsSection() {
  const [frontCard, setFrontCard] = useState<"easing" | "shadow">("easing")

  const swapCards = () => {
    setFrontCard((prev) => (prev === "easing" ? "shadow" : "easing"))
  }

  return (
    <div className="relative px-6 lg:px-20">
      <div className="relative">
        {/* Shadow Composer */}
        <motion.div
          className="absolute inset-0"
          animate={{
            zIndex: frontCard === "shadow" ? 10 : 0,
            x: frontCard === "shadow" ? 0 : 24,
            y: frontCard === "shadow" ? 0 : -24,
            right: frontCard === "shadow" ? 0 : -32,
            rotateZ: frontCard === "shadow" ? 0 : 1,
          }}
          transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="bg-background text-foreground dark relative h-full rounded-3xl border">
            <ShadowComposerPageClient hasBackgroundDecoration={false} />
            {frontCard === "easing" && (
              <div
                className="absolute inset-0 z-50 cursor-pointer rounded-3xl transition-colors hover:bg-white/5"
                onClick={swapCards}
              />
            )}
          </div>
        </motion.div>
        {/* Easing Composer */}
        <motion.div
          className="relative"
          animate={{
            zIndex: frontCard === "easing" ? 10 : 0,
            x: frontCard === "easing" ? 0 : 24,
            y: frontCard === "easing" ? 0 : -24,
            marginRight: frontCard === "easing" ? 0 : -32,
            rotateZ: frontCard === "easing" ? 0 : 1,
          }}
          transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="bg-background text-foreground dark relative rounded-3xl border">
            <EasingComposerClient hasBackgroundDecoration={false} />
            {frontCard === "shadow" && (
              <div
                className="absolute inset-0 z-50 cursor-pointer rounded-3xl transition-colors hover:bg-white/5"
                onClick={swapCards}
              />
            )}
          </div>
        </motion.div>
      </div>
      {/* Mobile swap button */}
      <button
        onClick={swapCards}
        className="bg-brand text-primary-foreground absolute -bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg transition-opacity hover:opacity-90"
      >
        <svg
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
          />
        </svg>
        Swap Tool
      </button>
    </div>
  )
}
