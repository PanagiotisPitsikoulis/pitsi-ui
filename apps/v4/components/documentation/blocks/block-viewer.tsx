"use client"

import * as React from "react"
import Link from "next/link"
import {
  Check,
  ChevronRight,
  Clipboard,
  File,
  Folder,
  Maximize,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
  Terminal,
} from "lucide-react"
import { registryItemFileSchema, type RegistryItem } from "pitsi/schema"
import { ImperativePanelHandle } from "react-resizable-panels"
import { z } from "zod"

import { trackEvent } from "@/lib/events"
import { createFileTreeForRegistryItemFiles, FileTree } from "@/lib/registry"
import { cn } from "@/lib/utils"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { ReadinessBadge } from "@/components/ui/readiness-badge"
import { TierBadge } from "@/components/ui/tier-badge"
import { OpenInV0Button } from "@/components/documentation/integrations/open-in-v0-button"
import { getIconForLanguageExtension } from "@/components/shared/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/new-york-v4/ui/resizable"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar"
import { Tabs, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group"
import { type Style } from "@/registry/styles"

type BlockViewerContext = {
  item: RegistryItem
  view: "code" | "preview"
  setView: (view: "code" | "preview") => void
  activeFile: string | null
  setActiveFile: (file: string) => void
  resizablePanelRef: React.RefObject<ImperativePanelHandle | null> | null
  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null
  highlightedFiles:
    | (z.infer<typeof registryItemFileSchema> & {
        highlightedContent: string
      })[]
    | null
  iframeKey?: number
  setIframeKey?: React.Dispatch<React.SetStateAction<number>>
}

const BlockViewerContext = React.createContext<BlockViewerContext | null>(null)

function useBlockViewer() {
  const context = React.useContext(BlockViewerContext)
  if (!context) {
    throw new Error("useBlockViewer must be used within a BlockViewerProvider.")
  }
  return context
}

function BlockViewerProvider({
  item,
  tree,
  highlightedFiles,
  children,
}: Pick<BlockViewerContext, "item" | "tree" | "highlightedFiles"> & {
  children: React.ReactNode
}) {
  const [view, setView] = React.useState<BlockViewerContext["view"]>("preview")
  const [activeFile, setActiveFile] = React.useState<
    BlockViewerContext["activeFile"]
  >(highlightedFiles?.[0].target ?? null)
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null)
  const [iframeKey, setIframeKey] = React.useState(0)

  return (
    <BlockViewerContext.Provider
      value={{
        item,
        view,
        setView,
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
        data-view={view}
        className="group/block-view-wrapper flex min-w-0 scroll-mt-24 flex-col-reverse items-stretch gap-4 md:flex-col"
        style={
          {
            "--height": item.meta?.iframeHeight ?? "930px",
          } as React.CSSProperties
        }
        suppressHydrationWarning
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  )
}

type BlockViewerProps = Pick<
  BlockViewerContext,
  "item" | "tree" | "highlightedFiles"
> & {
  styleName: Style["name"]
}

function BlockViewerToolbar({ styleName }: { styleName: Style["name"] }) {
  const { setView, view, item, resizablePanelRef, setIframeKey } =
    useBlockViewer()
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  return (
    <div className="relative z-10 flex w-full items-center justify-between border-b px-4 py-2">
      {/* Left side: View toggle and title */}
      <div className="flex items-center gap-3">
        <Tabs
          value={view}
          onValueChange={(value) => setView(value as "preview" | "code")}
          suppressHydrationWarning
        >
          <TabsList className="grid h-8 grid-cols-2 items-center rounded-md p-0.5 *:data-[slot=tabs-trigger]:h-7 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-3 *:data-[slot=tabs-trigger]:text-xs">
            <TabsTrigger value="preview" suppressHydrationWarning>
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" suppressHydrationWarning>
              Code
            </TabsTrigger>
          </TabsList>
        </Tabs>
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

      {/* Right side: Device preview, CLI, and actions */}
      <div className="hidden items-center gap-1.5 lg:flex">
        {/* Device size toggles */}
        <div className="flex h-8 items-center gap-0.5 rounded-md border p-0.5">
          <ToggleGroup
            type="single"
            defaultValue="100"
            onValueChange={(value) => {
              setView("preview")
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
              onClick={() => {
                if (setIframeKey) {
                  setIframeKey((k) => k + 1)
                }
              }}
            >
              <RotateCw />
            </Button>
          </ToggleGroup>
        </div>

        <Separator orientation="vertical" className="!h-4" />

        {/* CLI copy button */}
        <Button
          variant="outline"
          size="sm"
          className="h-8 max-w-[200px] gap-1.5 px-3 font-mono text-xs"
          onClick={() => {
            copyToClipboard(`npx pitsi@latest add ${item.name}`)
          }}
        >
          {isCopied ? <Check /> : <Terminal />}
          <span className="line-clamp-1 hidden md:inline">
            npx pitsi add {item.name}
          </span>
        </Button>

        <Separator orientation="vertical" className="!h-4" />
        <OpenInV0Button name={item.name} />
      </div>
    </div>
  )
}

function BlockViewerIframe({
  className,
  styleName,
}: {
  className?: string
  styleName: Style["name"]
}) {
  const { item, iframeKey } = useBlockViewer()

  return (
    <div className="relative h-full w-full">
      <iframe
        key={iframeKey}
        src={`/view/${styleName}/${item.name}`}
        height={item.meta?.iframeHeight ?? 800}
        className={cn(
          "bg-background no-scrollbar pointer-events-none relative z-20 h-full w-full overflow-hidden",
          className
        )}
        scrolling="no"
      />
      {/* Invisible overlay to prevent scrolling */}
      <div className="absolute inset-0 z-30" />
    </div>
  )
}

function BlockViewerView({ styleName }: { styleName: Style["name"] }) {
  const { resizablePanelRef, item } = useBlockViewer()

  return (
    <div className="hidden group-data-[view=code]/block-view-wrapper:hidden md:h-(--height) lg:flex">
      <div className="relative grid w-full gap-4">
        <ResizablePanelGroup
          id={`block-viewer-${item.name}`}
          direction="horizontal"
          className="after:bg-background/50 relative z-10 after:absolute after:inset-0 after:right-3 after:z-0"
          suppressHydrationWarning
        >
          <ResizablePanel
            id={`block-viewer-panel-${item.name}`}
            ref={resizablePanelRef}
            className="bg-background relative aspect-[3/4] overflow-hidden md:aspect-auto"
            defaultSize={100}
            minSize={30}
            suppressHydrationWarning
          >
            <div className="relative flex h-full w-full flex-col">
              <div className="flex items-center gap-2 p-2">
                <ReadinessBadge readiness={item.readiness} />
                <TierBadge tier={item.tier ?? "free"} />
              </div>
              <div className="flex-1">
                <BlockViewerIframe styleName={styleName} />
              </div>
              {/* Invisible overlay to prevent scrolling */}
              <div className="absolute inset-0 z-40" />
            </div>
          </ResizablePanel>
          <ResizableHandle
            id={`block-viewer-handle-${item.name}`}
            className="after:bg-border relative hidden w-3 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[6px] after:translate-x-[-1px] after:-translate-y-1/2 after:rounded-full after:transition-all after:hover:h-10 md:block"
          />
          <ResizablePanel
            id={`block-viewer-panel-empty-${item.name}`}
            defaultSize={0}
            minSize={0}
            suppressHydrationWarning
          />
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

function BlockViewerMobile({ styleName }: { styleName: Style["name"] }) {
  const { item, view } = useBlockViewer()

  if (view === "code") {
    return null
  }

  return (
    <div className="group-data-[view=code]/block-view-wrapper:hidden lg:hidden">
      <div className="relative w-full overflow-x-auto">
        <div className="after:bg-background/50 relative min-w-[1024px] after:absolute after:inset-0 after:z-0">
          <div className="relative z-10 flex items-center gap-2 p-2">
            <ReadinessBadge readiness={item.readiness} />
            <TierBadge tier={item.tier ?? "free"} />
          </div>
          <div className="relative z-10 h-(--height) min-h-[600px] w-full">
            <BlockViewerIframe
              styleName={styleName}
              className="relative z-10 h-full w-full"
            />
          </div>
          {/* Invisible overlay to prevent scrolling */}
          <div className="absolute inset-0 z-20" />
        </div>
      </div>
    </div>
  )
}

function BlockViewerCode() {
  const { activeFile, highlightedFiles } = useBlockViewer()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  const file = React.useMemo(() => {
    return highlightedFiles?.find((file) => file.target === activeFile)
  }, [highlightedFiles, activeFile])

  if (!file) {
    return null
  }

  const language = file.path.split(".").pop() ?? "tsx"

  return (
    <div className="bg-code text-code-foreground relative flex overflow-hidden rounded-br-2xl group-data-[view=preview]/block-view-wrapper:hidden md:-mt-4 md:h-(--height)">
      {/* Sidebar - collapsible on mobile */}
      <div
        className={cn(
          "bg-code absolute inset-y-0 left-0 z-40 w-72 transition-transform md:relative md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <BlockViewerFileTree />
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
            <BlockCopyCodeButton />
          </div>
        </figcaption>
        <div
          key={file?.path}
          dangerouslySetInnerHTML={{ __html: file?.highlightedContent ?? "" }}
          className="no-scrollbar overflow-y-auto"
        />
      </figure>
    </div>
  )
}

export function BlockViewerFileTree() {
  const { tree } = useBlockViewer()

  if (!tree) {
    return null
  }

  return (
    <SidebarProvider className="flex !min-h-full flex-col border-r">
      <Sidebar collapsible="none" className="w-full flex-1">
        <SidebarGroupLabel className="h-12 rounded-none border-b px-4 text-sm">
          Files
        </SidebarGroupLabel>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="translate-x-0 gap-1.5">
              {tree.map((file, index) => (
                <Tree key={index} item={file} index={1} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  )
}

function Tree({ item, index }: { item: FileTree; index: number }) {
  const { activeFile, setActiveFile } = useBlockViewer()

  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          isActive={item.path === activeFile}
          onClick={() => item.path && setActiveFile(item.path)}
          className="hover:bg-background/80 focus:bg-background/80 focus-visible:bg-background/80 active:bg-background/80 data-[active=true]:bg-background data-[active=true]:border-border rounded-none pl-(--index) whitespace-nowrap data-[active=true]:border data-[active=true]:shadow-xs"
          data-index={index}
          style={
            {
              "--index": `${index * (index === 2 ? 1.2 : 1.3)}rem`,
            } as React.CSSProperties
          }
        >
          <ChevronRight className="invisible" />
          <File className="h-4 w-4" />
          {item.name}
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen
        suppressHydrationWarning
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className="hover:bg-background/80 focus:bg-background/80 focus-visible:bg-background/80 active:bg-background/80 data-[active=true]:bg-background data-[active=true]:border-border rounded-none pl-(--index) whitespace-nowrap data-[active=true]:border data-[active=true]:shadow-xs"
            style={
              {
                "--index": `${index * (index === 1 ? 1 : 1.2)}rem`,
              } as React.CSSProperties
            }
          >
            <ChevronRight className="transition-transform" />
            <Folder />
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent suppressHydrationWarning>
          <SidebarMenuSub className="m-0 w-full translate-x-0 border-none p-0">
            {item.children.map((subItem, key) => (
              <Tree key={key} item={subItem} index={index + 1} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}

function BlockCopyCodeButton() {
  const { activeFile, item } = useBlockViewer()
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const file = React.useMemo(() => {
    return item.files?.find((file) => file.target === activeFile)
  }, [activeFile, item.files])

  const content = file?.content

  if (!content) {
    return null
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-7"
      onClick={() => {
        copyToClipboard(content)
        trackEvent({
          name: "copy_block_code",
          properties: {
            name: item.name,
            file: file.path,
          },
        })
      }}
    >
      {isCopied ? <Check /> : <Clipboard />}
    </Button>
  )
}

function BlockViewer({
  item,
  tree,
  highlightedFiles,
  styleName,
}: BlockViewerProps) {
  return (
    <BlockViewerProvider
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
    >
      <BlockViewerToolbar styleName={styleName} />
      <BlockViewerView styleName={styleName} />
      <BlockViewerCode />
      <BlockViewerMobile styleName={styleName} />
    </BlockViewerProvider>
  )
}

export { BlockViewer }
