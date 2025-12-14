"use client"

import React, { memo, useMemo } from "react"
import { createPortal } from "react-dom"
import { Inspect, SquarePen } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/new-york-v4/ui/hover-card"
import { Separator } from "@/registry/new-york-v4/ui/separator"

import type { InspectorState } from "./use-inspector"

export interface InspectorOverlayProps {
  inspector: InspectorState
  enabled: boolean
  rootRef: React.RefObject<HTMLDivElement | null>
  styles: Record<string, string>
  onColorClick?: (colorKey: string) => void
}

// Parse a theme class like "bg-primary" or "text-muted-foreground/80"
const segmentClassName = (className: string) => {
  // Handle selectors like "hover:", "focus:", etc.
  const selectorMatch = className.match(/^((?:[^:]+:)*)/)
  let selector = ""
  let remaining = className

  if (selectorMatch && selectorMatch[1]) {
    selector = selectorMatch[1].slice(0, -1)
    remaining = className.slice(selectorMatch[1].length)
  }

  // Handle opacity modifier (e.g., "card/80")
  const opacityMatch = remaining.match(/^([^/]+)\/(.+)$/)
  let baseClass = remaining
  let opacity = ""

  if (opacityMatch) {
    baseClass = opacityMatch[1]
    opacity = opacityMatch[2]
  }

  // Split into prefix (bg, text, border, etc.) and value (primary, muted-foreground, etc.)
  const dashIndex = baseClass.indexOf("-")
  let prefix = ""
  let value = ""

  if (dashIndex !== -1) {
    prefix = baseClass.slice(0, dashIndex)
    value = baseClass.slice(dashIndex + 1)
  } else {
    prefix = baseClass
  }

  return {
    selector: selector || null,
    prefix: prefix || null,
    value: value || null,
    opacity: opacity || null,
  }
}

const InspectorClassItem = memo(
  ({
    className,
    styles,
    onColorClick,
  }: {
    className: string
    styles: Record<string, string>
    onColorClick?: (colorKey: string) => void
  }) => {
    const segments = useMemo(() => segmentClassName(className), [className])

    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      if (segments.value && onColorClick) {
        onColorClick(segments.value)
      }
    }

    const colorValue = segments.value && styles[segments.value]

    return (
      <div
        className="group hover:bg-foreground/10 flex cursor-pointer items-center justify-between gap-2 rounded-md p-1.5 transition-colors"
        onClick={handleClick}
      >
        <div className="flex items-center gap-1.5">
          {colorValue && (
            <span
              style={{ backgroundColor: colorValue }}
              className="border-foreground ring-border block size-4 shrink-0 rounded-md border ring-1"
            />
          )}
          <span className="font-mono text-xs">
            {segments.selector && (
              <span className="text-foreground/60">{segments.selector}:</span>
            )}
            {segments.prefix && (
              <span className="text-foreground">{segments.prefix}</span>
            )}
            {segments.value && (
              <>
                <span className="text-foreground/80">-</span>
                <span className="text-foreground font-bold">
                  {segments.value}
                </span>
              </>
            )}
            {segments.opacity && (
              <>
                <span className="text-foreground/60">/</span>
                <span className="text-foreground/60">{segments.opacity}</span>
              </>
            )}
          </span>
        </div>
        <SquarePen className="text-muted-foreground size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    )
  }
)

InspectorClassItem.displayName = "InspectorClassItem"

export const InspectorOverlay = memo(
  ({
    inspector,
    enabled,
    rootRef,
    styles,
    onColorClick,
  }: InspectorOverlayProps) => {
    const classNames = useMemo(() => {
      const seen = new Set<string>()
      return inspector.className
        .split(/\s+/)
        .filter((cls) => cls && !seen.has(cls) && seen.add(cls))
    }, [inspector.className])

    if (
      !enabled ||
      !inspector.rect ||
      typeof window === "undefined" ||
      !rootRef.current
    ) {
      return null
    }

    // Get container's rect to convert to relative coordinates
    const containerRect = rootRef.current.getBoundingClientRect()
    const relativeRect = {
      top: inspector.rect.top - containerRect.top,
      left: inspector.rect.left - containerRect.left,
      width: inspector.rect.width,
      height: inspector.rect.height,
    }

    return createPortal(
      <HoverCard open={true} defaultOpen={false}>
        <HoverCardTrigger asChild>
          <div
            data-inspector-overlay
            className={cn(
              "ring-brand ring-offset-background/90 pointer-events-none absolute z-50 ring-3 ring-offset-2",
              "transition-all duration-100 ease-in-out"
            )}
            style={{
              top: relativeRect.top,
              left: relativeRect.left,
              width: relativeRect.width,
              height: relativeRect.height,
            }}
          />
        </HoverCardTrigger>

        <HoverCardContent
          data-inspector-overlay
          side="top"
          align="start"
          className={cn(
            "bg-popover/85 text-popover-foreground pointer-events-auto relative w-auto max-w-[50vw] rounded-lg border p-0 shadow-xl backdrop-blur-lg"
          )}
          sideOffset={8}
        >
          <div className="text-muted-foreground flex items-center gap-1.5 px-2 pt-2 text-sm">
            <Inspect className="size-4" />
            Inspector
          </div>
          <Separator className="my-1" />
          <div className="flex flex-col gap-1 px-1 pb-2">
            {classNames.map((cls) => (
              <InspectorClassItem
                key={cls}
                className={cls}
                styles={styles}
                onColorClick={onColorClick}
              />
            ))}
          </div>
        </HoverCardContent>
      </HoverCard>,
      rootRef.current
    )
  }
)

InspectorOverlay.displayName = "InspectorOverlay"
