"use client"

import * as React from "react"
import { Bot, Copy, Check, RotateCcw } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

interface AIJsonEditorProps<T> {
  value: T
  onChange: (value: T) => void
  title?: string
  description?: string
  hints?: string[]
  trigger?: React.ReactNode
  className?: string
  tooltip?: string
}

export function AIJsonEditor<T>({
  value,
  onChange,
  title = "Edit with AI",
  description = "Edit the JSON directly or copy to use with AI",
  hints = [],
  trigger,
  className,
  tooltip = "Edit with AI",
}: AIJsonEditorProps<T>) {
  const [open, setOpen] = React.useState(false)
  const [jsonValue, setJsonValue] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)
  const [copied, setCopied] = React.useState(false)
  const initialValue = React.useRef<string>("")

  React.useEffect(() => {
    if (open) {
      const formatted = JSON.stringify(value, null, 2)
      setJsonValue(formatted)
      initialValue.current = formatted
      setError(null)
    }
  }, [open, value])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(jsonValue)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    setJsonValue(initialValue.current)
    setError(null)
  }

  const handleApply = () => {
    try {
      const parsed = JSON.parse(jsonValue) as T
      onChange(parsed)
      setOpen(false)
      setError(null)
    } catch {
      setError("Invalid JSON format")
    }
  }

  const handleChange = (newValue: string) => {
    setJsonValue(newValue)
    setError(null)
  }

  const defaultTrigger = (
    <Button variant="outline" size="icon" className={cn("size-8", className)}>
      <Bot className="size-4" />
    </Button>
  )

  return (
    <TooltipProvider delayDuration={0}>
      <Dialog open={open} onOpenChange={setOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              {trigger || defaultTrigger}
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>{tooltip}</TooltipContent>
        </Tooltip>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">JSON Configuration</p>
              <div className="flex items-center gap-1">
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
                    <TooltipContent>Copy to clipboard</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7"
                        onClick={handleReset}
                      >
                        <RotateCcw className="size-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Reset to original</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <Textarea
              value={jsonValue}
              onChange={(e) => handleChange(e.target.value)}
              className="h-[400px] font-mono text-xs"
              placeholder="Paste your JSON here..."
            />

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            {hints.length > 0 && (
              <div className="rounded-lg border bg-muted/50 p-3">
                <p className="text-xs font-medium text-foreground mb-1">AI can help you:</p>
                <ul className="text-xs text-muted-foreground space-y-0.5">
                  {hints.map((hint, i) => (
                    <li key={i}>• {hint}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleApply} disabled={!!error}>
              Apply Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  )
}
