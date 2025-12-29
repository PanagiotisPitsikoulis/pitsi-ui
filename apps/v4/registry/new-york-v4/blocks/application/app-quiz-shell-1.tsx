"use client"

import * as React from "react"
import { User } from "lucide-react"

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

// Violet base theme - neutral UI with violet brand colors
const violetTheme = {
  "--background": "#fafafa",
  "--foreground": "#1f1f1f",
  "--card": "#ffffff",
  "--card-foreground": "#1f1f1f",
  "--popover": "#ffffff",
  "--popover-foreground": "#1f1f1f",
  "--primary": "#2d2d2d",
  "--primary-foreground": "#fbfbfb",
  "--secondary": "#f5f5f5",
  "--secondary-foreground": "#2d2d2d",
  "--muted": "#f5f5f5",
  "--muted-foreground": "#777777",
  "--accent": "#f5f5f5",
  "--accent-foreground": "#2d2d2d",
  "--destructive": "#dc4545",
  "--destructive-foreground": "#fefefe",
  "--border": "transparent",
  "--input": "#e5e5e5",
  "--ring": "#8b5cf6",
  "--radius": "1rem",
  "--sidebar": "#fafafa",
  "--sidebar-foreground": "#1f1f1f",
  "--sidebar-primary": "#2d2d2d",
  "--sidebar-primary-foreground": "#fbfbfb",
  "--sidebar-accent": "#f0f0f0",
  "--sidebar-accent-foreground": "#2d2d2d",
  "--sidebar-border": "transparent",
  "--sidebar-ring": "#8b5cf6",
  "--brand": "#8b5cf6",
  "--brand-complementary": "#f6c85c",
} as React.CSSProperties

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

  return (
    <div
      style={violetTheme}
      className="bg-background text-foreground h-full min-h-[600px]"
    >
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

export { violetTheme }
