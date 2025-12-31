"use client"

import React from "react"
import Link from "next/link"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Check, Terminal } from "@/lib/icons"
import { Code2, Eye, Maximize } from "@/lib/icons"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Separator } from "@/registry/new-york-v4/ui/separator"

const radioItem =
  "rounded-md duration-200 flex items-center justify-center h-8 px-2.5 gap-2 transition-[color] data-[state=checked]:bg-background data-[state=checked]:border-border data-[state=checked]:border data-[state=checked]:shadow-xs"

export const DEFAULTSIZE = 100
export const SMSIZE = 30
export const MDSIZE = 62
export const LGSIZE = 82

interface BlockPreviewToolbarProps {
  mode: "preview" | "code"
  onModeChange: (mode: "preview" | "code") => void
  onCliCopy: (e: React.MouseEvent<HTMLButtonElement>) => void
  codeAvailable: boolean
  previewOnly?: boolean
  title: string
  id: string
  previewLink: string
  category: string
  cliCopied: boolean
}

const BlockPreviewToolbar: React.FC<BlockPreviewToolbarProps> = ({
  mode,
  onModeChange,
  codeAvailable,
  previewOnly,
  title,
  id,
  previewLink,
  category,
  cliCopied,
  onCliCopy,
}) => {
  return (
    <div className="relative z-10 mx-auto flex h-12 max-w-7xl justify-between pr-6 pl-8 [--color-border:var(--color-zinc-200)] md:py-2 lg:pr-2 lg:pl-5 dark:[--color-border:var(--color-zinc-800)]">
      <div className="-ml-3 flex items-center gap-3">
        {codeAvailable && !previewOnly && (
          <>
            <RadioGroupPrimitive.Root
              className="flex gap-0.5"
              value={mode}
              onValueChange={(value: "preview" | "code") => onModeChange(value)}
            >
              <RadioGroupPrimitive.Item
                value="preview"
                aria-label="Block preview"
                className={radioItem}
              >
                <Eye className="size-3.5 sm:opacity-50" />
                <span className="hidden text-[13px] sm:block">Preview</span>
              </RadioGroupPrimitive.Item>

              <RadioGroupPrimitive.Item
                value="code"
                aria-label="Code"
                className={radioItem}
              >
                <Code2 className="size-3.5 sm:opacity-50" />
                <span className="hidden text-[13px] sm:block">Code</span>
              </RadioGroupPrimitive.Item>
            </RadioGroupPrimitive.Root>

            <Separator
              orientation="vertical"
              className="hidden !h-4 lg:block"
            />
            <Button
              variant="ghost"
              className="size-8"
              size="icon"
              asChild
              title="View in full screen"
            >
              <Link href={previewLink} target="_blank">
                <Maximize className="size-4" />
              </Link>
            </Button>
          </>
        )}
        {previewOnly && (
          <>
            <h2 className="ml-3 text-sm font-medium">{title}</h2>
            <Separator
              orientation="vertical"
              className="hidden !h-4 lg:block"
            />
            <Button
              variant="ghost"
              className="size-8"
              size="icon"
              asChild
              title="View in full screen"
            >
              <Link href={previewLink} target="_blank">
                <Maximize className="size-4" />
              </Link>
            </Button>
          </>
        )}
      </div>

      {!previewOnly && (
        <div className="flex items-center gap-1.5">
          <Button
            onClick={onCliCopy}
            variant="outline"
            size="sm"
            aria-label="Copy CLI"
            className={cn("gap-1.5 font-mono text-xs transition-none")}
          >
            {cliCopied ? <Check /> : <Terminal />}
            <span className="hidden md:inline">npx pitsi add {id}</span>
          </Button>
        </div>
      )}
    </div>
  )
}

export default BlockPreviewToolbar
