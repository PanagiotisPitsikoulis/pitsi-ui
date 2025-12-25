"use client"

import React, { useReducer, useRef } from "react"
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
  type ImperativePanelGroupHandle,
} from "react-resizable-panels"

import { cn } from "@/lib/utils"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

import { BlockPreviewWrapper } from "./preview-wrapper"
import { initialState, previewReducer, usePreviewActions } from "./state"
import BlockPreviewToolbar, { DEFAULTSIZE } from "./toolbar"

export interface BlockPreviewProps {
  previewLink: string
  title: string
  id: string
  category: string
  previewOnly?: boolean
  height?: number
}

const BlockPreview: React.FC<BlockPreviewProps> = ({
  previewLink,
  title,
  id,
  category,
  previewOnly = false,
  height = 930,
}) => {
  const [state, dispatch] = useReducer(previewReducer, initialState)
  const { mode } = state

  const { copyToClipboard } = useCopyToClipboard()

  const handleCliCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    copyToClipboard(`npx pitsi@latest add ${id}`)
    dispatch({ type: "SET_COPIED_CLI", payload: true })
    setTimeout(() => dispatch({ type: "SET_COPIED_CLI", payload: false }), 2000)
  }

  const panelGroupRef = useRef<ImperativePanelGroupHandle>(null)

  const { handleModeChange, setPanelSizes } = usePreviewActions(
    state,
    dispatch,
    panelGroupRef,
    handleCliCopy
  )

  return (
    <BlockPreviewWrapper id={id} height={height}>
      <div className="border-foreground/[0.075] relative border-y">
        <div
          aria-hidden
          className="absolute inset-x-4 -top-14 bottom-0 mx-auto max-w-7xl lg:inset-x-0"
        >
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent to-[color-mix(in_oklab,var(--color-foreground)_7.5%,transparent)] to-75%"></div>
          <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent to-[color-mix(in_oklab,var(--color-foreground)_7.5%,transparent)] to-75%"></div>
        </div>

        <BlockPreviewToolbar
          mode={state.mode}
          onModeChange={handleModeChange}
          onCliCopy={handleCliCopy}
          codeAvailable={false}
          previewOnly={previewOnly}
          previewLink={previewLink}
          title={title}
          id={id}
          category={category}
          cliCopied={state.copied.cli}
        />
      </div>

      <div className="relative mx-auto h-fit max-w-7xl px-4 lg:px-0">
        <div className={cn("border-foreground/[0.075] border-x")}>
          <div
            aria-hidden
            className="absolute inset-x-4 -bottom-14 mx-auto h-14 max-w-7xl lg:inset-x-0"
          >
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-[color-mix(in_oklab,var(--color-foreground)_7.5%,transparent)]"></div>
            <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-[color-mix(in_oklab,var(--color-foreground)_7.5%,transparent)]"></div>
          </div>
          <div
            className={cn(
              "h-[calc(var(--block-height)-51px)] bg-white dark:bg-transparent",
              mode === "code" && "hidden"
            )}
          >
            <PanelGroup
              ref={panelGroupRef}
              direction="horizontal"
              className="h-fit"
              onLayout={setPanelSizes}
            >
              <Panel
                id={`block-panel-${id}`}
                order={1}
                defaultSize={DEFAULTSIZE}
                minSize={30}
                className="border-foreground/[0.075]"
              >
                <div className="relative h-[calc(var(--block-height)-51px)] lg:h-[calc(var(--block-height)-48px)]">
                  <iframe
                    src={previewLink}
                    title={title}
                    aria-label={`${category}-${title}-block-preview`}
                    id={`iframe-${id}`}
                    className="pointer-events-none absolute inset-0 size-full overflow-hidden"
                    sandbox="allow-scripts allow-same-origin"
                    scrolling="no"
                  />
                  {/* Invisible overlay to prevent scrolling */}
                  <div className="absolute inset-0 z-20" />
                </div>
              </Panel>

              <PanelResizeHandle className="relative hidden w-2 before:absolute before:inset-0 before:m-auto before:h-12 before:w-1 before:rounded-full before:bg-zinc-300 before:transition-[height,background] hover:before:h-16 hover:before:bg-zinc-400 focus:before:bg-zinc-400 lg:block dark:before:bg-zinc-600 dark:hover:before:bg-zinc-500 dark:focus:before:bg-zinc-400" />
              <Panel
                id={`code-${title}`}
                order={2}
                defaultSize={0}
                className="-mr-[0.5px] ml-px"
              ></Panel>
            </PanelGroup>
          </div>
        </div>
      </div>
    </BlockPreviewWrapper>
  )
}

export default BlockPreview
