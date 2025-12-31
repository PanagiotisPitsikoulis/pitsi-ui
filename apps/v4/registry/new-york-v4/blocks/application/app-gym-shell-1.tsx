"use client"

import * as React from "react"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { Dumbbell, Flame, Play, Trophy, User } from "@/lib/icons"
import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/registry/new-york-v4/ui/sidebar"

// Default content
const defaults = {
  appName: "Gym Tracker",
  navigation: [
    { name: "today", label: "Today", icon: "LayoutDashboard", shortcut: "1" },
    { name: "log", label: "Log", icon: "Dumbbell", shortcut: "2" },
    { name: "history", label: "History", icon: "Calendar", shortcut: "3" },
    { name: "gains", label: "Gains", icon: "TrendingUp", shortcut: "4" },
    { name: "library", label: "Library", icon: "Library", shortcut: "5" },
    { name: "profile", label: "Profile", icon: "User", shortcut: "6" },
  ],
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/01.webp",
  },
  stats: {
    streak: 12,
    weeklyWorkouts: 4,
    weeklyGoal: 5,
    recentPRs: [
      { exercise: "Bench Press", weight: "107.5kg", change: "+2.5" },
      { exercise: "Squat", weight: "150kg", change: "+5" },
    ],
  },
}

interface RightSidebarContentProps {
  activeView: string
  stats: typeof defaults.stats
  onStartWorkout?: () => void
}

function RightSidebarContent({
  activeView,
  stats,
  onStartWorkout,
}: RightSidebarContentProps) {
  return (
    <div className="flex h-full flex-col">
      {/* Fixed: Today's Snapshot */}
      <div className="space-y-4 p-4">
        <div className="space-y-3">
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Today
          </p>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-orange-500/10">
              <Flame className="size-5 text-orange-500" />
            </div>
            <div>
              <p className="text-2xl font-bold tabular-nums">{stats.streak}</p>
              <p className="text-muted-foreground text-xs">day streak</p>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Weekly goal</span>
              <span className="font-medium tabular-nums">
                {stats.weeklyWorkouts}/{stats.weeklyGoal}
              </span>
            </div>
            <div className="bg-muted h-2 overflow-hidden rounded-full">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${(stats.weeklyWorkouts / stats.weeklyGoal) * 100}%`,
                  backgroundColor: "var(--brand)",
                }}
              />
            </div>
          </div>
        </div>

        <Button
          onClick={onStartWorkout}
          className="w-full gap-2"
          style={{ backgroundColor: "var(--brand)" }}
        >
          <Play className="size-4" />
          Start Workout
        </Button>
      </div>

      <Separator />

      {/* Recent PRs */}
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <Trophy className="text-muted-foreground size-4" />
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Recent PRs
          </p>
        </div>
        <div className="space-y-2">
          {stats.recentPRs.map((pr) => (
            <div
              key={pr.exercise}
              className="flex items-center justify-between text-sm"
            >
              <span className="truncate">{pr.exercise}</span>
              <div className="flex items-center gap-1.5">
                <span className="font-medium tabular-nums">{pr.weight}</span>
                <span className="text-xs text-emerald-600">{pr.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Contextual content based on active view */}
      <div className="flex-1 overflow-auto p-4">
        <ContextualContent activeView={activeView} />
      </div>
    </div>
  )
}

function ContextualContent({ activeView }: { activeView: string }) {
  switch (activeView) {
    case "today":
      return (
        <div className="space-y-3">
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Next Up
          </p>
          <div className="bg-muted/50 space-y-2 rounded-lg p-3">
            <p className="text-sm font-medium">Push Day</p>
            <p className="text-muted-foreground text-xs">
              Bench, OHP, Incline DB, Laterals, Triceps
            </p>
          </div>
        </div>
      )
    case "log":
      return (
        <div className="space-y-3">
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Rest Timer
          </p>
          <div className="bg-muted/50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold tabular-nums">2:30</p>
            <p className="text-muted-foreground text-xs">until next set</p>
          </div>
        </div>
      )
    case "history":
      return (
        <div className="space-y-3">
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Selected Day
          </p>
          <p className="text-muted-foreground text-sm">
            Click a day to see details
          </p>
        </div>
      )
    case "gains":
      return (
        <div className="space-y-3">
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            PR Timeline
          </p>
          <p className="text-muted-foreground text-sm">
            Select a lift to see history
          </p>
        </div>
      )
    case "library":
      return (
        <div className="space-y-3">
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Exercise Details
          </p>
          <p className="text-muted-foreground text-sm">
            Select an exercise for tips & history
          </p>
        </div>
      )
    case "profile":
      return (
        <div className="space-y-3">
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Quick Settings
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Weight unit</span>
              <span className="font-medium">kg</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Rest timer</span>
              <span className="font-medium">2:30</span>
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

interface AppGymShell1Props {
  children?: React.ReactNode
  activeView?: string
  onNavigate?: (view: string) => void
  content?: Partial<typeof defaults>
}

export function AppGymShell1({
  children,
  activeView = "today",
  onNavigate,
  content = {},
}: AppGymShell1Props) {
  const {
    appName = defaults.appName,
    navigation = defaults.navigation,
    user = defaults.user,
    stats = defaults.stats,
  } = content

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return
      }
      const item = navigation.find((n) => n.shortcut === event.key)
      if (item && onNavigate) {
        event.preventDefault()
        onNavigate(item.name)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [navigation, onNavigate])

  return (
    <div className="bg-background text-foreground h-full min-h-[600px]">
      <SidebarProvider defaultOpen>
        {/* Left Sidebar - Navigation */}
        <Sidebar collapsible="icon" className="border-r-0">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div
                className="flex size-8 items-center justify-center rounded-lg"
                style={{ backgroundColor: "var(--brand)", color: "#ffffff" }}
              >
                <Dumbbell className="size-4" />
              </div>
              <span className="truncate text-sm font-semibold group-data-[collapsible=icon]:hidden">
                {appName}
              </span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigation.map((item) => {
                    const isActive = activeView === item.name
                    return (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          isActive={isActive}
                          onClick={() => onNavigate?.(item.name)}
                          tooltip={item.label}
                          className={cn(isActive && "font-medium")}
                        >
                          <DynamicIcon name={item.icon} className="size-4" />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg">
                  <Avatar className="size-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-muted rounded-lg">
                      <User className="size-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate font-semibold">{user.name}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {user.email}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>

        {/* Main Content */}
        <SidebarInset>
          <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 flex h-14 items-center gap-2 border-b px-4 backdrop-blur md:hidden">
            <SidebarTrigger />
            <span className="font-semibold">{appName}</span>
          </header>
          <main className="flex-1 overflow-auto">{children}</main>
        </SidebarInset>

        {/* Right Sidebar - Stats & Context */}
        <Sidebar
          side="right"
          collapsible="none"
          className="hidden w-64 border-l-0 lg:flex"
        >
          <RightSidebarContent
            activeView={activeView}
            stats={stats}
            onStartWorkout={() => onNavigate?.("log")}
          />
        </Sidebar>
      </SidebarProvider>
    </div>
  )
}
