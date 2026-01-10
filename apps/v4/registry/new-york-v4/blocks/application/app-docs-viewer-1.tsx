"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clipboard,
  List,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/new-york-v4/ui/sheet"

// Types
interface TocItem {
  title: string
  url: string
  depth: number
}

interface NeighbourPage {
  url: string
  name: string
}

interface DocLinks {
  doc?: string
  api?: string
}

// Table of Contents Component
function TableOfContents({
  items,
  className,
}: {
  items: TocItem[]
  className?: string
}) {
  const [activeId, setActiveId] = React.useState<string>("")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" }
    )

    const headings = document.querySelectorAll("h2, h3, h4")
    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [])

  return (
    <nav className={cn("space-y-1", className)}>
      <h4 className="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase">
        On this page
      </h4>
      <ul className="space-y-2">
        {items.map((item) => {
          const id = item.url.replace("#", "")
          const isActive = activeId === id

          return (
            <li key={item.url}>
              <a
                href={item.url}
                className={cn(
                  "text-muted-foreground hover:text-foreground block text-sm transition-colors",
                  item.depth === 2 && "pl-0",
                  item.depth === 3 && "pl-4",
                  item.depth === 4 && "pl-8",
                  isActive && "text-foreground font-medium"
                )}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

// Copy Page Button
function CopyPageButton({
  content,
  className,
}: {
  content: string
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={cn("gap-2", className)}
      onClick={handleCopy}
    >
      {copied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
      {copied ? "Copied" : "Copy page"}
    </Button>
  )
}

// Default data
const appDocsViewer1Defaults = {
  title: "Getting Started",
  description:
    "A guide to installing and configuring the component library in your project.",
  toc: [
    { title: "Installation", url: "#installation", depth: 2 },
    { title: "Prerequisites", url: "#prerequisites", depth: 3 },
    { title: "Quick Start", url: "#quick-start", depth: 3 },
    { title: "Configuration", url: "#configuration", depth: 2 },
    { title: "Project Setup", url: "#project-setup", depth: 3 },
    { title: "Tailwind Config", url: "#tailwind-config", depth: 3 },
    { title: "Usage", url: "#usage", depth: 2 },
    { title: "Importing Components", url: "#importing-components", depth: 3 },
    { title: "Customization", url: "#customization", depth: 3 },
  ] as TocItem[],
  links: {
    doc: "https://github.com/example/docs",
    api: "https://api.example.com/reference",
  } as DocLinks,
  neighbours: {
    previous: { url: "/docs/introduction", name: "Introduction" },
    next: { url: "/docs/components", name: "Components" },
  } as { previous?: NeighbourPage; next?: NeighbourPage },
  rawContent: `# Getting Started

## Installation

To get started with the component library...

### Prerequisites

Make sure you have Node.js 18 or higher installed.

### Quick Start

Run the following command to initialize your project:

\`\`\`bash
npx pitsi init
\`\`\`

## Configuration

Configure your project to use the components.

### Project Setup

Add the following to your tailwind.config.js...

### Tailwind Config

Extend the default theme with our design tokens.

## Usage

Start using components in your application.

### Importing Components

Import components from the ui directory.

### Customization

Customize components using CSS variables.
`,
  pageUrl: "/docs/getting-started",
  children: (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2 id="installation">Installation</h2>
      <p>
        To get started with the component library, you&apos;ll need to install
        and configure a few dependencies.
      </p>

      <h3 id="prerequisites">Prerequisites</h3>
      <p>Make sure you have Node.js 18 or higher installed on your system.</p>

      <h3 id="quick-start">Quick Start</h3>
      <p>Run the following command to initialize your project:</p>
      <pre>
        <code>npx pitsi init</code>
      </pre>

      <h2 id="configuration">Configuration</h2>
      <p>Configure your project to use the components effectively.</p>

      <h3 id="project-setup">Project Setup</h3>
      <p>
        Add the following to your project configuration to enable component
        styling.
      </p>

      <h3 id="tailwind-config">Tailwind Config</h3>
      <p>Extend the default theme with our design tokens for consistency.</p>

      <h2 id="usage">Usage</h2>
      <p>Start using components in your application right away.</p>

      <h3 id="importing-components">Importing Components</h3>
      <p>Import components from the ui directory in your component files.</p>

      <h3 id="customization">Customization</h3>
      <p>
        Customize components using CSS variables for theming and brand
        alignment.
      </p>
    </div>
  ),
}

interface AppDocsViewer1Props {
  title?: string
  description?: string
  toc?: TocItem[]
  links?: DocLinks
  neighbours?: { previous?: NeighbourPage; next?: NeighbourPage }
  rawContent?: string
  pageUrl?: string
  children?: React.ReactNode
  className?: string
}

export function AppDocsViewer1({
  title = appDocsViewer1Defaults.title,
  description = appDocsViewer1Defaults.description,
  toc = appDocsViewer1Defaults.toc,
  links = appDocsViewer1Defaults.links,
  neighbours = appDocsViewer1Defaults.neighbours,
  rawContent = appDocsViewer1Defaults.rawContent,
  pageUrl = appDocsViewer1Defaults.pageUrl,
  children = appDocsViewer1Defaults.children,
  className,
}: AppDocsViewer1Props) {
  const hasToc = toc?.length > 0

  return (
    <div className={cn("flex items-stretch", className)}>
      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div
          className={cn(
            "mx-auto flex w-full min-w-0 flex-1 flex-col gap-8 px-4 py-6 lg:py-8",
            hasToc ? "max-w-2xl" : "max-w-6xl"
          )}
        >
          {/* Header */}
          <div className="bg-muted rounded-2xl p-4 sm:p-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4">
                <h1 className="display scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {title}
                </h1>
                <div className="flex items-center gap-2">
                  <CopyPageButton content={rawContent} />
                  <div className="flex items-center gap-1">
                    {neighbours.previous && (
                      <Button variant="outline" size="icon" asChild>
                        <Link href={neighbours.previous.url}>
                          <ArrowLeft className="size-4" />
                          <span className="sr-only">Previous</span>
                        </Link>
                      </Button>
                    )}
                    {neighbours.next && (
                      <Button variant="outline" size="icon" asChild>
                        <Link href={neighbours.next.url}>
                          <span className="sr-only">Next</span>
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              {(description || links) && (
                <p className="text-muted-foreground text-base text-balance">
                  {description}
                  {links && (description ? " " : "")}
                  {links?.doc && (
                    <a
                      href={links.doc}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-foreground ml-1 inline-flex items-center gap-0.5 underline underline-offset-4"
                    >
                      Docs
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  )}
                  {links?.doc && links?.api && " "}
                  {links?.api && (
                    <a
                      href={links.api}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-foreground inline-flex items-center gap-0.5 underline underline-offset-4"
                    >
                      API Reference
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  )}
                </p>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="w-full flex-1">{children}</div>
        </div>

        {/* Bottom Navigation */}
        <div
          className={cn(
            "mx-auto hidden h-16 w-full items-center gap-2 px-4 sm:flex",
            hasToc ? "max-w-2xl" : "max-w-6xl"
          )}
        >
          {neighbours.previous && (
            <Button variant="outline" size="sm" asChild>
              <Link href={neighbours.previous.url}>
                <ArrowLeft className="size-4" /> {neighbours.previous.name}
              </Link>
            </Button>
          )}
          {neighbours.next && (
            <Button variant="outline" size="sm" className="ml-auto" asChild>
              <Link href={neighbours.next.url}>
                {neighbours.next.name} <ArrowRight className="size-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Table of Contents Sidebar - Desktop */}
      {hasToc && (
        <div className="sticky top-20 hidden h-[calc(100vh-5rem)] w-72 shrink-0 flex-col gap-4 pb-8 xl:flex">
          <div className="no-scrollbar overflow-y-auto px-8 pt-6">
            <TableOfContents items={toc} />
          </div>
        </div>
      )}

      {/* Table of Contents - Mobile */}
      {hasToc && (
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed right-4 bottom-4 z-50 size-12 rounded-full shadow-lg xl:hidden"
            >
              <List className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>On this page</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <TableOfContents items={toc} />
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  )
}
