"use client"

import { createContext, useContext, type RefObject } from "react"

const ScrollContainerContext = createContext<RefObject<HTMLElement> | null>(
  null
)

export const ScrollContainerProvider = ScrollContainerContext.Provider

export function useScrollContainer() {
  return useContext(ScrollContainerContext)
}
