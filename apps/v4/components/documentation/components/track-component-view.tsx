"use client"

import { useEffect, useRef } from "react"

import { useRecentComponents } from "@/lib/blocks-storage"

interface TrackComponentViewProps {
  name: string
}

export function TrackComponentView({ name }: TrackComponentViewProps) {
  const { addRecentComponent, isHydrated } = useRecentComponents()
  // Track which component we've already tracked (not just a boolean)
  // This handles client-side navigation where the component doesn't unmount
  const trackedComponentRef = useRef<string | null>(null)

  useEffect(() => {
    // Only track once per component after hydration is complete
    if (isHydrated && trackedComponentRef.current !== name) {
      trackedComponentRef.current = name
      addRecentComponent(name)
    }
  }, [name, addRecentComponent, isHydrated])

  return null
}
