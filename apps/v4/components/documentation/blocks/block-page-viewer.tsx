"use client"

import * as React from "react"
import Link from "next/link"
import {
  Check,
  Clipboard,
  Folder,
  Maximize,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
} from "lucide-react"
import { registryItemFileSchema, type RegistryItem } from "pitsi/schema"
import { ImperativePanelHandle } from "react-resizable-panels"
import { z } from "zod"

import { trackEvent } from "@/lib/events"
import { createFileTreeForRegistryItemFiles } from "@/lib/registry"
import { cn } from "@/lib/utils"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { ReadinessBadge } from "@/components/ui/readiness-badge"
import { TierBadge } from "@/components/ui/tier-badge"
import { FileTreeSidebar } from "@/components/documentation/blocks/shared/file-tree"
import { getIconForLanguageExtension } from "@/components/shared/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/new-york-v4/ui/resizable"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group"
import { type Style } from "@/registry/styles"

type BlockPageViewerContext = {
  item: RegistryItem
  activeFile: string | null
  setActiveFile: (file: string) => void
  resizablePanelRef: React.RefObject<ImperativePanelHandle | null> | null
  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null
  highlightedFiles:
    | (z.infer<typeof registryItemFileSchema> & {
        highlightedContent: string
      })[]
    | null
  iframeKey: number
  setIframeKey: React.Dispatch<React.SetStateAction<number>>
}

const BlockPageViewerContext =
  React.createContext<BlockPageViewerContext | null>(null)

function useBlockPageViewer() {
  const context = React.useContext(BlockPageViewerContext)
  if (!context) {
    throw new Error(
      "useBlockPageViewer must be used within a BlockPageViewerProvider."
    )
  }
  return context
}

function BlockPageViewerProvider({
  item,
  tree,
  highlightedFiles,
  children,
}: Pick<BlockPageViewerContext, "item" | "tree" | "highlightedFiles"> & {
  children: React.ReactNode
}) {
  const [activeFile, setActiveFile] = React.useState<
    BlockPageViewerContext["activeFile"]
  >(highlightedFiles?.[0].target ?? null)
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null)
  const [iframeKey, setIframeKey] = React.useState(0)

  return (
    <BlockPageViewerContext.Provider
      value={{
        item,
        resizablePanelRef,
        activeFile,
        setActiveFile,
        tree,
        highlightedFiles,
        iframeKey,
        setIframeKey,
      }}
    >
      <div
        id={item.name}
        className="flex flex-col gap-8"
        style={
          {
            "--height": item.meta?.iframeHeight ?? "800px",
          } as React.CSSProperties
        }
        suppressHydrationWarning
      >
        {children}
      </div>
    </BlockPageViewerContext.Provider>
  )
}

function PreviewToolbar({ styleName }: { styleName: Style["name"] }) {
  const { item, resizablePanelRef, setIframeKey } = useBlockPageViewer()

  return (
    <div className="flex w-full items-center justify-between border-b px-4 py-2">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm font-medium">
          Preview
        </span>
        <Separator orientation="vertical" className="hidden !h-4 lg:block" />
        <Button
          size="icon"
          variant="ghost"
          className="hidden size-8 lg:flex"
          asChild
          title="Open in New Tab"
        >
          <Link href={`/view/${styleName}/${item.name}`} target="_blank">
            <Maximize />
          </Link>
        </Button>
      </div>

      <div className="hidden items-center gap-1.5 lg:flex">
        {/* Device size toggles */}
        <div className="flex h-8 items-center gap-0.5 rounded-md border p-0.5">
          <ToggleGroup
            type="single"
            defaultValue="100"
            onValueChange={(value) => {
              if (resizablePanelRef?.current) {
                resizablePanelRef.current.resize(parseInt(value))
              }
            }}
            className="*:data-[state=on]:!bg-background *:data-[state=on]:dark:!bg-muted *:hover:text-muted-foreground -ml-px gap-0.5 *:data-[slot=toggle-group-item]:!size-7 *:data-[slot=toggle-group-item]:!rounded-sm *:data-[state=on]:!border *:data-[state=on]:!shadow-xs"
          >
            <ToggleGroupItem
              className="hover:!bg-transparent"
              value="100"
              title="Desktop"
            >
              <Monitor />
            </ToggleGroupItem>
            <ToggleGroupItem
              className="hover:!bg-transparent"
              value="60"
              title="Tablet"
            >
              <Tablet />
            </ToggleGroupItem>
            <ToggleGroupItem
              className="hover:!bg-transparent"
              value="30"
              title="Mobile"
            >
              <Smartphone />
            </ToggleGroupItem>
            <Separator orientation="vertical" className="mx-0.5 !h-4" />
            <Button
              size="icon"
              variant="ghost"
              className="size-7 rounded-sm p-0 hover:!bg-transparent"
              title="Refresh Preview"
              onClick={() => setIframeKey((k) => k + 1)}
            >
              <RotateCw />
            </Button>
          </ToggleGroup>
        </div>

      </div>
    </div>
  )
}

function PreviewSection({ styleName }: { styleName: Style["name"] }) {
  const { item, resizablePanelRef, iframeKey } = useBlockPageViewer()

  return (
    <div className="overflow-hidden rounded-xl border shadow-xs">
      <PreviewToolbar styleName={styleName} />

      {/* Desktop preview */}
      <div className="hidden h-(--height) lg:block">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]" />
          <ResizablePanelGroup
            id={`block-page-viewer-${item.name}`}
            direction="horizontal"
            className="after:bg-background/50 relative z-10 h-full after:absolute after:inset-0 after:right-3 after:z-0"
            suppressHydrationWarning
          >
            <ResizablePanel
              id={`block-page-viewer-panel-${item.name}`}
              ref={resizablePanelRef}
              className="bg-background relative overflow-hidden"
              defaultSize={100}
              minSize={30}
              suppressHydrationWarning
            >
              <ReadinessBadge readiness={item.readiness} />
              <TierBadge tier={item.tier ?? "free"} />
              <iframe
                key={iframeKey}
                src={`/view/${styleName}/${item.name}`}
                height={item.meta?.iframeHeight ?? 800}
                className="bg-background no-scrollbar relative z-20 h-full w-full"
              />
            </ResizablePanel>
            <ResizableHandle
              id={`block-page-viewer-handle-${item.name}`}
              className="after:bg-border relative w-3 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[6px] after:translate-x-[-1px] after:-translate-y-1/2 after:rounded-full after:transition-all after:hover:h-10"
            />
            <ResizablePanel
              id={`block-page-viewer-panel-empty-${item.name}`}
              defaultSize={0}
              minSize={0}
              suppressHydrationWarning
            />
          </ResizablePanelGroup>
        </div>
      </div>

      {/* Mobile preview */}
      <div className="lg:hidden">
        <div className="relative w-full overflow-x-auto">
          <div className="absolute inset-0 [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]" />
          <div className="after:bg-background/50 relative min-w-[1024px] after:absolute after:inset-0 after:z-0">
            <div className="relative z-10 h-(--height) min-h-[600px] w-full">
              <ReadinessBadge readiness={item.readiness} />
              <TierBadge tier={item.tier ?? "free"} />
              <iframe
                key={iframeKey}
                src={`/view/${styleName}/${item.name}`}
                height={item.meta?.iframeHeight ?? 800}
                className="bg-background no-scrollbar relative z-10 h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CodeSection() {
  const { activeFile, setActiveFile, highlightedFiles, item, tree } = useBlockPageViewer()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const file = React.useMemo(() => {
    return highlightedFiles?.find((file) => file.target === activeFile)
  }, [highlightedFiles, activeFile])

  const fileForCopy = React.useMemo(() => {
    return item.files?.find((file) => file.target === activeFile)
  }, [activeFile, item.files])

  if (!file) {
    return null
  }

  const language = file.path.split(".").pop() ?? "tsx"

  return (
    <div className="overflow-hidden rounded-xl border shadow-xs">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <span className="text-muted-foreground text-sm font-medium">Code</span>
      </div>

      <div className="bg-code text-code-foreground relative flex h-[700px] overflow-hidden">
        {/* Sidebar - collapsible on mobile */}
        <div
          className={cn(
            "bg-code absolute inset-y-0 left-0 z-40 w-72 transition-transform md:relative md:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {tree && (
            <FileTreeSidebar
              tree={tree}
              activeFile={activeFile}
              setActiveFile={setActiveFile}
            />
          )}
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="absolute inset-0 z-30 bg-black/50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <figure
          data-rehype-pretty-code-figure=""
          className="!mx-0 mt-0 flex min-w-0 flex-1 flex-col !rounded-none border-none"
        >
          <figcaption
            className="text-code-foreground [&_svg]:text-code-foreground flex h-12 shrink-0 items-center gap-2 border-b px-4 pb-2 [&_svg]:size-4 [&_svg]:opacity-70"
            data-language={language}
          >
            {getIconForLanguageExtension(language)}
            <span className="line-clamp-1">{file.target}</span>
            <div className="ml-auto flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="bg-background size-7 border shadow-sm md:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Folder />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="size-7"
                onClick={() => {
                  if (fileForCopy?.content) {
                    copyToClipboard(fileForCopy.content)
                    trackEvent({
                      name: "copy_block_code",
                      properties: {
                        name: item.name,
                        file: file.path,
                      },
                    })
                  }
                }}
              >
                {isCopied ? <Check /> : <Clipboard />}
              </Button>
            </div>
          </figcaption>
          <div
            key={file?.path}
            dangerouslySetInnerHTML={{ __html: file?.highlightedContent ?? "" }}
            className="no-scrollbar overflow-y-auto"
          />
        </figure>
      </div>
    </div>
  )
}

type BlockPageViewerProps = {
  item: RegistryItem
  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null
  highlightedFiles:
    | (z.infer<typeof registryItemFileSchema> & {
        highlightedContent: string
      })[]
    | null
  styleName: Style["name"]
}

export function BlockPageViewer({
  item,
  tree,
  highlightedFiles,
  styleName,
}: BlockPageViewerProps) {
  return (
    <BlockPageViewerProvider
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
    >
      <PreviewSection styleName={styleName} />
      <CodeSection />
    </BlockPageViewerProvider>
  )
}
