"use client"

import { useEffect, useRef } from "react"

import { useRecentAnimations } from "@/lib/blocks-storage"

interface TrackAnimationViewProps {
  name: string
}

export function TrackAnimationView({ name }: TrackAnimationViewProps) {
  const { addRecentAnimation, isHydrated } = useRecentAnimations()
  // Track which animation we've already tracked (not just a boolean)
  // This handles client-side navigation where the component doesn't unmount
  const trackedAnimationRef = useRef<string | null>(null)

  useEffect(() => {
    // Only track once per animation after hydration is complete
    if (isHydrated && trackedAnimationRef.current !== name) {
      trackedAnimationRef.current = name
      addRecentAnimation(name)
    }
  }, [name, addRecentAnimation, isHydrated])

  return null
}
