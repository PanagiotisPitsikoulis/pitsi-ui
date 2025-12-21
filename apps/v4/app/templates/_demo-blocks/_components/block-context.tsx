"use client"

import { createContext, useContext, type ReactNode } from "react"

type ContainerBg = "page" | "muted"

interface BlockContextValue {
  index: number
  isEven: boolean
  containerBg: ContainerBg
  // Derived values for styling children
  cardBg: string // CSS class for cards
  surfaceBg: string // CSS class for surfaces/sections within the block
}

const BlockContext = createContext<BlockContextValue | null>(null)

export function useBlockContext() {
  const context = useContext(BlockContext)
  if (!context) {
    // Return defaults if used outside provider (standalone block)
    return {
      index: 0,
      isEven: true,
      containerBg: "page" as ContainerBg,
      cardBg: "bg-card shadow-sm",
      surfaceBg: "bg-muted",
    }
  }
  return context
}

interface BlockProviderProps {
  index: number
  children: ReactNode
}

export function BlockProvider({ index, children }: BlockProviderProps) {
  const isEven = index % 2 === 0
  const containerBg: ContainerBg = isEven ? "page" : "muted"

  // When container is page (light), cards should be muted/card
  // When container is muted (darker), cards should be background/card
  // Cards include a subtle shadow for depth
  const cardBg =
    containerBg === "page"
      ? "bg-card shadow-sm"
      : "bg-background shadow-sm"
  const surfaceBg = containerBg === "page" ? "bg-muted" : "bg-background"

  const value: BlockContextValue = {
    index,
    isEven,
    containerBg,
    cardBg,
    surfaceBg,
  }

  return (
    <BlockContext.Provider value={value}>
      {children}
    </BlockContext.Provider>
  )
}
