"use client"

import * as React from "react"
import { User } from "@/lib/icons"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
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
  SidebarTrigger,
} from "@/registry/new-york-v4/ui/sidebar"

// Theme-agnostic shell - uses CSS variables from parent BlockThemeWrapper
// The shell no longer has hardcoded theme colors; they're inherited from context

const quizShellDefaults = {
  appName: "QuizMaster",
  navigation: [
    { name: "dashboard", label: "Dashboard", icon: "LayoutDashboard" },
    { name: "quizzes", label: "Quizzes", icon: "BookOpen" },
    { name: "history", label: "History", icon: "History" },
    { name: "leaderboard", label: "Leaderboard", icon: "Trophy" },
    { name: "settings", label: "Settings", icon: "Settings" },
  ],
  user: {
    name: "Alex Chen",
    email: "alex@example.com",
    avatar: "/avatars/02.webp",
  },
  logo: {
    icon: "Brain",
  },
}

interface QuizShellProps {
  activeView?: string
  onNavigate?: (view: string) => void
  children?: React.ReactNode
}

export function AppQuizShell1({
  activeView = "dashboard",
  onNavigate,
  children,
}: QuizShellProps) {
  const { appName, navigation, user, logo } = quizShellDefaults

  // Shell uses CSS variables from parent BlockThemeWrapper
  // No inline style needed - theme colors come from context
  return (
    <div className="bg-background text-foreground h-full min-h-[600px]">
      <SidebarProvider defaultOpen>
        <Sidebar variant="inset" collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div
                className="flex size-8 items-center justify-center rounded-lg"
                style={{ backgroundColor: "var(--brand)", color: "#ffffff" }}
              >
                <DynamicIcon name={logo.icon} className="size-4" />
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
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent"
                >
                  <Avatar className="size-8 rounded-lg">
                    <AvatarImage src="/avatars/02.webp" alt={user.name} />
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
        </Sidebar>

        <SidebarInset>
          <header className="flex h-14 items-center gap-2 border-b px-4 md:hidden">
            <SidebarTrigger />
            <span className="font-semibold">{appName}</span>
          </header>
          <main className="flex-1 overflow-auto">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
