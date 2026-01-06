"use client"

import { memo, useEffect, useState } from "react"
import { codeToHtml } from "shiki"

import { Check, Copy } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { ScrollArea } from "@/registry/new-york-v4/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

interface CodeBlockProps {
  code: string
  language?: string
  filename: string
  onCopy?: () => void
}

export const CodeBlock = memo(function CodeBlock({
  code,
  language = "css",
  filename,
  onCopy,
}: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let mounted = true

    const highlight = async () => {
      try {
        const html = await codeToHtml(code, {
          lang: language,
          themes: {
            dark: "github-dark",
            light: "github-light",
          },
          transformers: [
            {
              pre(node) {
                node.properties["class"] = "bg-transparent p-0 m-0"
              },
            },
          ],
        })
        if (mounted) {
          setHighlightedCode(html)
        }
      } catch {
        // Fallback to plain text
        if (mounted) {
          setHighlightedCode(`<pre><code>${escapeHtml(code)}</code></pre>`)
        }
      }
    }

    highlight()

    return () => {
      mounted = false
    }
  }, [code, language])

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    onCopy?.()
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <figure
      data-rehype-pretty-code-figure=""
      className="bg-code text-code-foreground !mx-0 mt-0 overflow-hidden rounded-lg border shadow-xs"
    >
      <figcaption
        className="text-code-foreground flex h-10 items-center justify-between gap-2 border-b px-3"
        data-language={language}
      >
        <span className="text-xs font-medium opacity-70">{filename}</span>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-7"
                onClick={handleCopy}
              >
                {copied ? (
                  <Check className="size-3.5" />
                ) : (
                  <Copy className="size-3.5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{copied ? "Copied!" : "Copy"}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </figcaption>
      <ScrollArea className="h-[180px]">
        <div
          className={cn(
            "w-full p-3 font-mono text-xs leading-relaxed",
            "[&_pre]:!bg-transparent [&_pre]:break-all [&_pre]:whitespace-pre-wrap",
            "[&_code]:!bg-transparent [&_code]:break-all [&_code]:whitespace-pre-wrap"
          )}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </ScrollArea>
    </figure>
  )
})

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
