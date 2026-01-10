"use client"

import * as React from "react"
import Link from "next/link"
import {
  Check,
  ChevronRight,
  Clipboard,
  File,
  Folder,
  FolderOpen,
  Maximize,
  Monitor,
  RefreshCw,
  Smartphone,
  Tablet,
  Terminal,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/new-york-v4/ui/resizable"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group"

// Types
type ReadinessLevel = "alpha" | "beta" | "production"
type TierLevel = "free" | "pro"
type ViewMode = "preview" | "code"

interface FileNode {
  name: string
  type: "file" | "folder"
  path: string
  children?: FileNode[]
}

interface CodeFile {
  path: string
  content: string
  language: string
}

// Readiness Badge
function ReadinessIndicator({ readiness }: { readiness?: ReadinessLevel }) {
  if (!readiness) return null

  const config = {
    alpha: { label: "Alpha", variant: "secondary" as const },
    beta: { label: "Beta", variant: "outline" as const },
    production: { label: "Stable", variant: "default" as const },
  }

  const { label, variant } = config[readiness]

  return (
    <Badge variant={variant} className="text-xs">
      {label}
    </Badge>
  )
}

// Tier Badge
function TierIndicator({ tier }: { tier?: TierLevel }) {
  if (!tier || tier === "free") return null

  return (
    <Badge className="bg-primary/10 text-primary border-primary/20 border text-xs">
      Pro
    </Badge>
  )
}

// File Tree Node
function FileTreeNode({
  node,
  activeFile,
  onSelect,
  depth = 0,
}: {
  node: FileNode
  activeFile: string | null
  onSelect: (path: string) => void
  depth?: number
}) {
  const [isOpen, setIsOpen] = React.useState(depth < 2)
  const isActive = activeFile === node.path

  if (node.type === "folder") {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:bg-muted flex w-full items-center gap-1.5 rounded px-2 py-1 text-sm"
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
        >
          <ChevronRight
            className={cn(
              "size-3.5 transition-transform",
              isOpen && "rotate-90"
            )}
          />
          {isOpen ? (
            <FolderOpen className="text-muted-foreground size-4" />
          ) : (
            <Folder className="text-muted-foreground size-4" />
          )}
          <span className="truncate">{node.name}</span>
        </button>
        {isOpen && node.children && (
          <div>
            {node.children.map((child) => (
              <FileTreeNode
                key={child.path}
                node={child}
                activeFile={activeFile}
                onSelect={onSelect}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <button
      onClick={() => onSelect(node.path)}
      className={cn(
        "flex w-full items-center gap-1.5 rounded px-2 py-1 text-sm",
        isActive ? "bg-accent text-accent-foreground" : "hover:bg-muted"
      )}
      style={{ paddingLeft: `${depth * 12 + 8}px` }}
    >
      <File className="text-muted-foreground size-4" />
      <span className="truncate">{node.name}</span>
    </button>
  )
}

// File Tree Sidebar
function FileTreeSidebar({
  tree,
  activeFile,
  onSelectFile,
}: {
  tree: FileNode[]
  activeFile: string | null
  onSelectFile: (path: string) => void
}) {
  return (
    <div className="border-r p-2">
      <div className="text-muted-foreground mb-2 px-2 text-xs font-medium tracking-wider uppercase">
        Files
      </div>
      <div className="space-y-0.5">
        {tree.map((node) => (
          <FileTreeNode
            key={node.path}
            node={node}
            activeFile={activeFile}
            onSelect={onSelectFile}
          />
        ))}
      </div>
    </div>
  )
}

// Default data
const appBlockViewer1Defaults = {
  name: "hero-1",
  readiness: "production" as ReadinessLevel,
  tier: "free" as TierLevel,
  viewUrl: "/view/new-york-v4/hero-1",
  iframeHeight: 800,
  fileTree: [
    {
      name: "components",
      type: "folder" as const,
      path: "components",
      children: [
        {
          name: "hero-1.tsx",
          type: "file" as const,
          path: "components/hero-1.tsx",
        },
      ],
    },
    {
      name: "lib",
      type: "folder" as const,
      path: "lib",
      children: [
        {
          name: "utils.ts",
          type: "file" as const,
          path: "lib/utils.ts",
        },
      ],
    },
  ] as FileNode[],
  codeFiles: [
    {
      path: "components/hero-1.tsx",
      language: "tsx",
      content: `import { Button } from "@/components/ui/button"

export function Hero1() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Build beautiful apps faster
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A collection of beautifully designed, accessible components
          that you can copy and paste into your apps.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
    </section>
  )
}`,
    },
    {
      path: "lib/utils.ts",
      language: "ts",
      content: `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`,
    },
  ] as CodeFile[],
}

interface AppBlockViewer1Props {
  name?: string
  readiness?: ReadinessLevel
  tier?: TierLevel
  viewUrl?: string
  iframeHeight?: number
  fileTree?: FileNode[]
  codeFiles?: CodeFile[]
  className?: string
}

export function AppBlockViewer1({
  name = appBlockViewer1Defaults.name,
  readiness = appBlockViewer1Defaults.readiness,
  tier = appBlockViewer1Defaults.tier,
  viewUrl = appBlockViewer1Defaults.viewUrl,
  iframeHeight = appBlockViewer1Defaults.iframeHeight,
  fileTree = appBlockViewer1Defaults.fileTree,
  codeFiles = appBlockViewer1Defaults.codeFiles,
  className,
}: AppBlockViewer1Props) {
  const [view, setView] = React.useState<ViewMode>("preview")
  const [activeFile, setActiveFile] = React.useState<string>(
    codeFiles[0]?.path ?? ""
  )
  const [panelSize, setPanelSize] = React.useState(100)
  const [iframeKey, setIframeKey] = React.useState(0)
  const [copied, setCopied] = React.useState(false)

  const activeCode = codeFiles.find((f) => f.path === activeFile)

  const handleCopyCommand = async () => {
    await navigator.clipboard.writeText(`npx pitsi@latest add ${name}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopyCode = async () => {
    if (activeCode) {
      await navigator.clipboard.writeText(activeCode.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div
      className={cn(
        "bg-background flex flex-col overflow-hidden rounded-xl border shadow-sm",
        className
      )}
      style={{ "--iframe-height": `${iframeHeight}px` } as React.CSSProperties}
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b px-4 py-2">
        {/* Left: View Toggle */}
        <div className="flex items-center gap-3">
          <Tabs value={view} onValueChange={(v) => setView(v as ViewMode)}>
            <TabsList className="h-8">
              <TabsTrigger value="preview" className="px-3 text-xs">
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="px-3 text-xs">
                Code
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Separator orientation="vertical" className="hidden h-4 lg:block" />

          <Button
            size="icon"
            variant="ghost"
            className="hidden size-8 lg:flex"
            asChild
          >
            <Link href={viewUrl} target="_blank" title="Open in New Tab">
              <Maximize className="size-4" />
            </Link>
          </Button>
        </div>

        {/* Right: Device Toggle & CLI */}
        <div className="hidden items-center gap-1.5 lg:flex">
          {/* Device Size Toggles */}
          <div className="flex h-8 items-center gap-0.5 rounded-md border p-0.5">
            <ToggleGroup
              type="single"
              value={String(panelSize)}
              onValueChange={(value) => {
                if (value) {
                  setView("preview")
                  setPanelSize(parseInt(value))
                }
              }}
            >
              <ToggleGroupItem
                value="100"
                className="size-7 p-0"
                title="Desktop"
              >
                <Monitor className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="60" className="size-7 p-0" title="Tablet">
                <Tablet className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="30" className="size-7 p-0" title="Mobile">
                <Smartphone className="size-4" />
              </ToggleGroupItem>
            </ToggleGroup>

            <Separator orientation="vertical" className="mx-0.5 h-4" />

            <Button
              size="icon"
              variant="ghost"
              className="size-7 p-0"
              title="Refresh Preview"
              onClick={() => setIframeKey((k) => k + 1)}
            >
              <RefreshCw className="size-4" />
            </Button>
          </div>

          <Separator orientation="vertical" className="h-4" />

          {/* CLI Copy Button */}
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 font-mono text-xs"
            onClick={handleCopyCommand}
          >
            {copied ? (
              <Check className="size-3.5" />
            ) : (
              <Terminal className="size-3.5" />
            )}
            npx pitsi add {name}
          </Button>
        </div>
      </div>

      {/* Content */}
      {view === "preview" ? (
        <div className="relative h-[var(--iframe-height)]">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel
              defaultSize={panelSize}
              minSize={30}
              onResize={setPanelSize}
              className="bg-background relative"
            >
              {/* Badges */}
              <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
                <ReadinessIndicator readiness={readiness} />
                <TierIndicator tier={tier} />
              </div>

              {/* Iframe */}
              <iframe
                key={iframeKey}
                src={viewUrl}
                className="size-full"
                title={`Preview of ${name}`}
              />
            </ResizablePanel>
            <ResizableHandle className="w-3 bg-transparent" />
            <ResizablePanel defaultSize={100 - panelSize} minSize={0} />
          </ResizablePanelGroup>
        </div>
      ) : (
        <div className="bg-muted/50 flex h-[var(--iframe-height)]">
          {/* File Tree */}
          <div className="hidden w-64 shrink-0 overflow-auto md:block">
            <FileTreeSidebar
              tree={fileTree}
              activeFile={activeFile}
              onSelectFile={setActiveFile}
            />
          </div>

          {/* Code Panel */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* File Header */}
            <div className="bg-background flex h-12 items-center justify-between border-b px-4">
              <span className="text-muted-foreground text-sm">
                {activeFile}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="size-7"
                onClick={handleCopyCode}
              >
                {copied ? (
                  <Check className="size-3.5" />
                ) : (
                  <Clipboard className="size-3.5" />
                )}
              </Button>
            </div>

            {/* Code Content */}
            <div className="flex-1 overflow-auto">
              <pre className="p-4 text-sm">
                <code>{activeCode?.content}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
