"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { LayoutGrid, LayoutGridItem } from "@/components/layout/layout-grid"
import { StripeBgGuides } from "@/components/layout/striped-bg-guides"
import { BackLink } from "@/components/navigation/back-link"
import { ScrollArea, ScrollBar } from "@/registry/new-york-v4/ui/scroll-area"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

/* -----------------------------------------------------------------------------
 * ToolLayout - Root container
 * -------------------------------------------------------------------------- */

interface ToolLayoutProps {
  children: React.ReactNode
  className?: string
}

function ToolLayout({ children, className }: ToolLayoutProps) {
  return (
    <div className={cn("relative overflow-x-clip", className)}>
      {children}
    </div>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutBackground - Striped background guides
 * -------------------------------------------------------------------------- */

interface ToolLayoutBackgroundProps {
  columnCount?: number
  animated?: boolean
}

function ToolLayoutBackground({
  columnCount = 6,
  animated = false,
}: ToolLayoutBackgroundProps) {
  return <StripeBgGuides columnCount={columnCount} animated={animated} />
}

/* -----------------------------------------------------------------------------
 * ToolLayoutContainer - Main container with grid
 * -------------------------------------------------------------------------- */

interface ToolLayoutContainerProps {
  children: React.ReactNode
  className?: string
}

function ToolLayoutContainer({ children, className }: ToolLayoutContainerProps) {
  return (
    <div className={cn("relative z-10 container px-6", className)}>
      <Spacer size="lg" sizeMobile="md" />
      <LayoutGrid className="items-start lg:h-[calc(100vh-100px)]">
        {children}
      </LayoutGrid>
      <Spacer size="6xl" sizeMobile="4xl" />
    </div>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutSidebar - Left sidebar (2 columns on desktop)
 * -------------------------------------------------------------------------- */

interface ToolLayoutSidebarProps {
  children: React.ReactNode
  className?: string
}

function ToolLayoutSidebar({ children, className }: ToolLayoutSidebarProps) {
  return (
    <LayoutGridItem
      span={6}
      spanLg={2}
      className={cn("lg:max-h-[calc(100vh-100px)]", className)}
    >
      <div className="flex h-full flex-col space-y-4 overflow-hidden">
        {children}
      </div>
    </LayoutGridItem>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutHeader - Title, description, and back link
 * -------------------------------------------------------------------------- */

interface ToolLayoutHeaderProps {
  backHref: string
  backLabel?: string
  title: string
  description?: string
  className?: string
}

function ToolLayoutHeader({
  backHref,
  backLabel = "Back to tools",
  title,
  description,
  className,
}: ToolLayoutHeaderProps) {
  return (
    <div className={cn("h-[100px] shrink-0", className)}>
      <BackLink href={backHref}>{backLabel}</BackLink>
      <h1 className="display -mt-2 text-2xl font-semibold tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </div>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutCard - Card container for sidebar content
 * -------------------------------------------------------------------------- */

interface ToolLayoutCardProps {
  children: React.ReactNode
  className?: string
  height?: string
}

function ToolLayoutCard({
  children,
  className,
  height = "68svh",
}: ToolLayoutCardProps) {
  return (
    <div
      className={cn(
        "bg-muted flex flex-col overflow-y-auto rounded-2xl border p-2",
        className
      )}
      style={{ height }}
    >
      {children}
    </div>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutTabs - Wrapper around Tabs with tool styling
 * -------------------------------------------------------------------------- */

interface ToolLayoutTabsProps extends React.ComponentPropsWithoutRef<typeof Tabs> {
  children: React.ReactNode
}

function ToolLayoutTabs({ children, className, ...props }: ToolLayoutTabsProps) {
  return (
    <Tabs
      className={cn("flex min-h-0 flex-1 flex-col", className)}
      {...props}
    >
      {children}
    </Tabs>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutTabsList - Tab triggers container
 * -------------------------------------------------------------------------- */

interface ToolLayoutTabsListProps extends React.ComponentPropsWithoutRef<typeof TabsList> {
  children: React.ReactNode
}

function ToolLayoutTabsList({ children, className, ...props }: ToolLayoutTabsListProps) {
  return (
    <TabsList className={cn("h-10 w-full", className)} {...props}>
      {children}
    </TabsList>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutTabsTrigger - Individual tab trigger with icon support
 * -------------------------------------------------------------------------- */

interface ToolLayoutTabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsTrigger> {
  icon?: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}

function ToolLayoutTabsTrigger({
  icon: Icon,
  children,
  className,
  ...props
}: ToolLayoutTabsTriggerProps) {
  return (
    <TabsTrigger className={cn("flex-1 py-2", className)} {...props}>
      {Icon && <Icon className="size-4" />}
      {children}
    </TabsTrigger>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutTabsContent - Tab content with optional scroll area
 * -------------------------------------------------------------------------- */

interface ToolLayoutTabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsContent> {
  children: React.ReactNode
  scrollable?: boolean
}

function ToolLayoutTabsContent({
  children,
  scrollable = true,
  className,
  ...props
}: ToolLayoutTabsContentProps) {
  if (scrollable) {
    return (
      <TabsContent className={cn("min-h-0 flex-1", className)} {...props}>
        <ScrollArea className="h-full [&_[data-radix-scroll-area-scrollbar]]:bg-background">
          <div className="space-y-3 pt-2">{children}</div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsContent>
    )
  }

  return (
    <TabsContent className={cn("min-h-0 flex-1", className)} {...props}>
      {children}
    </TabsContent>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutPreview - Right preview panel (4 columns on desktop)
 * -------------------------------------------------------------------------- */

interface ToolLayoutPreviewProps {
  children: React.ReactNode
  className?: string
}

function ToolLayoutPreview({ children, className }: ToolLayoutPreviewProps) {
  return (
    <LayoutGridItem span={6} spanLg={4} className={cn("lg:pl-8", className)}>
      <div className="flex flex-col gap-3">{children}</div>
    </LayoutGridItem>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutPreviewHeader - Preview header with title and controls
 * -------------------------------------------------------------------------- */

interface ToolLayoutPreviewHeaderProps {
  children: React.ReactNode
  className?: string
}

function ToolLayoutPreviewHeader({ children, className }: ToolLayoutPreviewHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {children}
    </div>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutPreviewTitle - Preview section title
 * -------------------------------------------------------------------------- */

interface ToolLayoutPreviewTitleProps {
  children: React.ReactNode
  className?: string
}

function ToolLayoutPreviewTitle({ children, className }: ToolLayoutPreviewTitleProps) {
  return (
    <h2
      className={cn(
        "text-muted-foreground text-sm font-medium tracking-wider uppercase",
        className
      )}
    >
      {children}
    </h2>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutPreviewContent - Preview content area with optional light mode
 * -------------------------------------------------------------------------- */

interface ToolLayoutPreviewContentProps {
  children: React.ReactNode
  className?: string
  forceLightMode?: boolean
  height?: string
}

const lightModeStyles = {
  "--background": "oklch(1 0 0)",
  "--foreground": "oklch(0.145 0 0)",
  "--card": "oklch(1 0 0)",
  "--card-foreground": "oklch(0.145 0 0)",
  "--muted": "oklch(0.965 0 0)",
  "--muted-foreground": "oklch(0.45 0 0)",
  "--border": "oklch(0.922 0 0)",
} as React.CSSProperties

function ToolLayoutPreviewContent({
  children,
  className,
  forceLightMode = false,
  height = "calc(68svh + 72px)",
}: ToolLayoutPreviewContentProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border dark:border-transparent",
        className
      )}
      style={{
        height,
        ...(forceLightMode ? {
          ...lightModeStyles,
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        } : {}),
      }}
    >
      {children}
    </div>
  )
}

/* -----------------------------------------------------------------------------
 * Exports
 * -------------------------------------------------------------------------- */

export {
  ToolLayout,
  ToolLayoutBackground,
  ToolLayoutContainer,
  ToolLayoutSidebar,
  ToolLayoutHeader,
  ToolLayoutCard,
  ToolLayoutTabs,
  ToolLayoutTabsList,
  ToolLayoutTabsTrigger,
  ToolLayoutTabsContent,
  ToolLayoutPreview,
  ToolLayoutPreviewHeader,
  ToolLayoutPreviewTitle,
  ToolLayoutPreviewContent,
}
