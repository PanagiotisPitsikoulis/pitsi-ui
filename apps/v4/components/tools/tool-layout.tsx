"use client"

import * as React from "react"
import { Eye, Settings2 } from "@/lib/icons"

import { cn } from "@/lib/utils"
import { LayoutGrid, LayoutGridItem } from "@/components/layout/layout-grid"
import { StripeBgGuides } from "@/components/layout/striped-bg-guides"
import { BackLink } from "@/components/navigation/back-link"
import { Button } from "@/registry/new-york-v4/ui/button"
import { ScrollArea, ScrollBar } from "@/registry/new-york-v4/ui/scroll-area"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

/* -----------------------------------------------------------------------------
 * Mobile View Context - Toggle between tool controls and preview on mobile
 * -------------------------------------------------------------------------- */

type MobileView = "tool" | "preview"

interface MobileViewContextValue {
  mobileView: MobileView
  setMobileView: (view: MobileView) => void
  toggleMobileView: () => void
}

const MobileViewContext = React.createContext<MobileViewContextValue | null>(null)

function useMobileView() {
  const context = React.useContext(MobileViewContext)
  if (!context) {
    throw new Error("useMobileView must be used within a ToolLayout")
  }
  return context
}

/* -----------------------------------------------------------------------------
 * ToolLayout - Root container
 * -------------------------------------------------------------------------- */

interface ToolLayoutProps {
  children: React.ReactNode
  className?: string
}

function ToolLayout({ children, className }: ToolLayoutProps) {
  const [mobileView, setMobileView] = React.useState<MobileView>("tool")

  const toggleMobileView = React.useCallback(() => {
    setMobileView((prev) => (prev === "tool" ? "preview" : "tool"))
  }, [])

  const contextValue = React.useMemo(
    () => ({ mobileView, setMobileView, toggleMobileView }),
    [mobileView, toggleMobileView]
  )

  return (
    <MobileViewContext.Provider value={contextValue}>
      <div className={cn("relative overflow-clip", className)}>{children}</div>
    </MobileViewContext.Provider>
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

function ToolLayoutContainer({
  children,
  className,
}: ToolLayoutContainerProps) {
  return (
    <div className={cn("relative z-10 container px-6", className)}>
      <Spacer size="lg" sizeMobile="md" />
      <LayoutGrid className="items-start">
        {children}
      </LayoutGrid>
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
  const { mobileView } = useMobileView()

  return (
    <LayoutGridItem
      span={6}
      spanLg={2}
      className={cn(
        mobileView === "preview" && "hidden lg:block",
        className
      )}
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
  backLabel = "Tools Menu",
  title,
  description,
  className,
}: ToolLayoutHeaderProps) {
  const { mobileView, toggleMobileView } = useMobileView()

  return (
    <div className={cn("h-[100px] shrink-0", className)}>
      <div className="flex items-center justify-between">
        <BackLink href={backHref}>{backLabel}</BackLink>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMobileView}
          className="lg:hidden"
        >
          {mobileView === "tool" ? (
            <>
              <Eye className="size-4" />
              Preview
            </>
          ) : (
            <>
              <Settings2 className="size-4" />
              Controls
            </>
          )}
        </Button>
      </div>
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
        "bg-muted flex flex-col overflow-y-auto rounded-3xl border p-2",
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

interface ToolLayoutTabsProps extends React.ComponentPropsWithoutRef<
  typeof Tabs
> {
  children: React.ReactNode
}

function ToolLayoutTabs({
  children,
  className,
  ...props
}: ToolLayoutTabsProps) {
  return (
    <Tabs className={cn("flex min-h-0 flex-1 flex-col", className)} {...props}>
      {children}
    </Tabs>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutTabsList - Tab triggers container
 * -------------------------------------------------------------------------- */

interface ToolLayoutTabsListProps extends React.ComponentPropsWithoutRef<
  typeof TabsList
> {
  children: React.ReactNode
}

function ToolLayoutTabsList({
  children,
  className,
  ...props
}: ToolLayoutTabsListProps) {
  return (
    <ScrollArea className="w-full">
      <TabsList className={cn("inline-flex h-10 w-max min-w-full gap-2", className)} {...props}>
        {children}
      </TabsList>
      <ScrollBar orientation="horizontal" className="h-1.5" />
    </ScrollArea>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutTabsTrigger - Individual tab trigger with icon support
 * -------------------------------------------------------------------------- */

interface ToolLayoutTabsTriggerProps extends React.ComponentPropsWithoutRef<
  typeof TabsTrigger
> {
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
    <TabsTrigger className={cn("flex-1 py-2 shadow-none", className)} {...props}>
      {Icon && <Icon className="size-4" />}
      {children}
    </TabsTrigger>
  )
}

/* -----------------------------------------------------------------------------
 * ToolLayoutTabsContent - Tab content with optional scroll area
 * -------------------------------------------------------------------------- */

interface ToolLayoutTabsContentProps extends React.ComponentPropsWithoutRef<
  typeof TabsContent
> {
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
        <ScrollArea className="[&_[data-radix-scroll-area-scrollbar]]:bg-background h-full">
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
  const { mobileView, toggleMobileView } = useMobileView()

  return (
    <LayoutGridItem
      span={6}
      spanLg={4}
      className={cn(
        "lg:pl-4",
        mobileView === "tool" && "hidden lg:block",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        {/* Mobile close button - only shown when preview is visible on mobile */}
        <div className="flex items-center justify-end lg:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMobileView}
          >
            <Settings2 className="size-4" />
            Controls
          </Button>
        </div>
        {children}
      </div>
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

function ToolLayoutPreviewHeader({
  children,
  className,
}: ToolLayoutPreviewHeaderProps) {
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

function ToolLayoutPreviewTitle({
  children,
  className,
}: ToolLayoutPreviewTitleProps) {
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
        "overflow-hidden rounded-3xl border dark:border-transparent",
        className
      )}
      style={{
        height,
        ...(forceLightMode
          ? {
              ...lightModeStyles,
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
            }
          : {}),
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
  useMobileView,
}
