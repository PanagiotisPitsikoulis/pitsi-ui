"use client"

import { useSyncExternalStore } from "react"

import { useIsMobile } from "@/hooks/use-mobile"

// Subscribe function that never updates (we only care about initial mount)
const subscribe = () => () => {}

// Common hook for handling mounted state and animation conditions
export function useAnimationState(scrollBased: boolean, noMobile: boolean) {
  const isMobile = useIsMobile()

  // Use useSyncExternalStore for mount detection (recommended by React)
  const mounted = useSyncExternalStore(
    subscribe,
    () => true, // Client
    () => false // Server
  )

  const shouldDisableAnimation = !mounted || (isMobile && noMobile)
  const shouldUseScroll = scrollBased && mounted && !(isMobile && noMobile)

  return { mounted, shouldDisableAnimation, shouldUseScroll, isMobile }
}
