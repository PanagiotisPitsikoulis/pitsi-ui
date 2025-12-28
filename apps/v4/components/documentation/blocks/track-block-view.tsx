"use client"

import { useEffect, useRef } from "react"

import { useRecentBlocks } from "@/lib/blocks-storage"

interface TrackBlockViewProps {
  name: string
  category: string
}

export function TrackBlockView({ name, category }: TrackBlockViewProps) {
  const { addRecentBlock, isHydrated } = useRecentBlocks()
  // Track which block we've already tracked (not just a boolean)
  // This handles client-side navigation where the component doesn't unmount
  const trackedBlockRef = useRef<string | null>(null)

  useEffect(() => {
    // Only track once per block after hydration is complete
    if (isHydrated && trackedBlockRef.current !== name) {
      trackedBlockRef.current = name
      addRecentBlock(name, category)
    }
  }, [name, category, addRecentBlock, isHydrated])

  return null
}
