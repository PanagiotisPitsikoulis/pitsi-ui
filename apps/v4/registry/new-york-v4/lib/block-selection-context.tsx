"use client"

import * as React from "react"

import {
  getBlockTypesWithAlternatives,
  getDefaultBlockSelections,
  getSelectedTemplateBlocks,
  type ComputedTemplateBlock,
} from "./templates"

// Selection state for a template
interface BlockSelectionState {
  templateSlug: string
  selections: Record<string, string> // blockType -> selected block name
  blockTypesWithAlternatives: string[]
}

interface BlockSelectionContextValue {
  state: BlockSelectionState | null
  setTemplateSlug: (slug: string) => void
  selectBlock: (blockType: string, blockName: string) => void
  getSelectedBlocks: () => ComputedTemplateBlock[]
  isBlockSelected: (blockName: string) => boolean
  getSelectedBlockForType: (blockType: string) => string | undefined
}

const BlockSelectionContext =
  React.createContext<BlockSelectionContextValue | null>(null)

export function useBlockSelection() {
  const context = React.useContext(BlockSelectionContext)
  if (!context) {
    throw new Error(
      "useBlockSelection must be used within a BlockSelectionProvider"
    )
  }
  return context
}

interface BlockSelectionProviderProps {
  children: React.ReactNode
  initialTemplateSlug?: string
}

export function BlockSelectionProvider({
  children,
  initialTemplateSlug,
}: BlockSelectionProviderProps) {
  const [state, setState] = React.useState<BlockSelectionState | null>(() => {
    if (!initialTemplateSlug) return null
    return {
      templateSlug: initialTemplateSlug,
      selections: getDefaultBlockSelections(initialTemplateSlug),
      blockTypesWithAlternatives:
        getBlockTypesWithAlternatives(initialTemplateSlug),
    }
  })

  const setTemplateSlug = React.useCallback((slug: string) => {
    setState({
      templateSlug: slug,
      selections: getDefaultBlockSelections(slug),
      blockTypesWithAlternatives: getBlockTypesWithAlternatives(slug),
    })
  }, [])

  const selectBlock = React.useCallback(
    (blockType: string, blockName: string) => {
      setState((prev) => {
        if (!prev) return null
        return {
          ...prev,
          selections: {
            ...prev.selections,
            [blockType]: blockName,
          },
        }
      })
    },
    []
  )

  const getSelectedBlocks = React.useCallback((): ComputedTemplateBlock[] => {
    if (!state) return []
    return getSelectedTemplateBlocks(state.templateSlug, state.selections)
  }, [state])

  const isBlockSelected = React.useCallback(
    (blockName: string): boolean => {
      if (!state) return false
      return Object.values(state.selections).includes(blockName)
    },
    [state]
  )

  const getSelectedBlockForType = React.useCallback(
    (blockType: string): string | undefined => {
      return state?.selections[blockType]
    },
    [state]
  )

  const value = React.useMemo<BlockSelectionContextValue>(
    () => ({
      state,
      setTemplateSlug,
      selectBlock,
      getSelectedBlocks,
      isBlockSelected,
      getSelectedBlockForType,
    }),
    [
      state,
      setTemplateSlug,
      selectBlock,
      getSelectedBlocks,
      isBlockSelected,
      getSelectedBlockForType,
    ]
  )

  return (
    <BlockSelectionContext.Provider value={value}>
      {children}
    </BlockSelectionContext.Provider>
  )
}
