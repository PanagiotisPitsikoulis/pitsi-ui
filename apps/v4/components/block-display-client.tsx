"use client"

import * as React from "react"
import Link from "next/link"
import {
  Check,
  Fullscreen,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
  Terminal,
} from "lucide-react"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { LazyIframe } from "@/components/lazy-iframe"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group"

interface BlockDisplayProps {
  name: string
  styleName: string
}

export function BlockDisplay({ name, styleName }: BlockDisplayProps) {
  const [iframeKey, setIframeKey] = React.useState(0)
  const [viewportSize, setViewportSize] = React.useState("100")
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const getViewportWidth = () => {
    switch (viewportSize) {
      case "30":
        return "30%"
      case "60":
        return "60%"
      case "100":
      default:
        return "100%"
    }
  }

  return (
    <div
      id={name}
      className="group/block-view-wrapper flex min-w-0 scroll-mt-24 flex-col-reverse items-stretch gap-4 overflow-hidden md:flex-col"
    >
      {/* Toolbar - Desktop only */}
      <div className="hidden w-full items-center gap-2 pl-2 md:pr-6 lg:flex">
        <a
          href={`#${name}`}
          className="flex-1 text-center text-sm font-medium underline-offset-2 hover:underline md:flex-auto md:text-left"
        >
          {name}
        </a>
        <div className="ml-auto flex items-center gap-2">
          <div className="h-8 items-center gap-1.5 rounded-md border p-1">
            <ToggleGroup
              type="single"
              value={viewportSize}
              onValueChange={(value) => {
                if (value) setViewportSize(value)
              }}
              className="gap-1 *:data-[slot=toggle-group-item]:!size-6 *:data-[slot=toggle-group-item]:!rounded-sm"
            >
              <ToggleGroupItem value="100" title="Desktop">
                <Monitor />
              </ToggleGroupItem>
              <ToggleGroupItem value="60" title="Tablet">
                <Tablet />
              </ToggleGroupItem>
              <ToggleGroupItem value="30" title="Mobile">
                <Smartphone />
              </ToggleGroupItem>
              <Separator orientation="vertical" className="!h-4" />
              <Button
                size="icon"
                variant="ghost"
                className="size-6 rounded-sm p-0"
                asChild
                title="Open in New Tab"
              >
                <Link href={`/view/${styleName}/${name}`} target="_blank">
                  <span className="sr-only">Open in New Tab</span>
                  <Fullscreen />
                </Link>
              </Button>
              <Separator orientation="vertical" className="!h-4" />
              <Button
                size="icon"
                variant="ghost"
                className="size-6 rounded-sm p-0"
                title="Refresh Preview"
                onClick={() => setIframeKey((k) => k + 1)}
              >
                <RotateCw />
                <span className="sr-only">Refresh Preview</span>
              </Button>
            </ToggleGroup>
          </div>
          <Separator orientation="vertical" className="mx-1 !h-4" />
          <Button
            variant="outline"
            className="w-fit gap-1 px-2"
            size="sm"
            onClick={() => {
              copyToClipboard(`npx pitsi@latest add ${name}`)
            }}
          >
            {isCopied ? <Check /> : <Terminal />}
            <span>npx pitsi add {name}</span>
          </Button>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col gap-2 lg:hidden">
        <div className="flex items-center gap-2 px-2">
          <div className="line-clamp-1 text-sm font-medium">{name}</div>
        </div>
        <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-md border">
          <LazyIframe
            key={iframeKey}
            src={`/view/${styleName}/${name}`}
            className="size-full"
          />
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block">
        <div className="relative grid w-full gap-4" style={{ height: "930px" }}>
          <div className="absolute inset-0 right-4 [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"></div>
          <div className="after:bg-surface/50 relative z-10 after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-xl">
            <div
              className="bg-background relative aspect-[4/2.5] overflow-hidden rounded-lg border transition-all duration-300 md:aspect-auto md:rounded-xl"
              style={{ width: getViewportWidth() }}
            >
              <LazyIframe
                key={iframeKey}
                src={`/view/${styleName}/${name}`}
                height={930}
                className="bg-background no-scrollbar relative z-20 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
