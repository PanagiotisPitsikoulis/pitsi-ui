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

// Cyan base theme - neutral UI with cyan brand colors
const cyanTheme = {
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
  "--ring": "#06b6d4",
  "--radius": "1rem",
  "--sidebar": "#fafafa",
  "--sidebar-foreground": "#1f1f1f",
  "--sidebar-primary": "#2d2d2d",
  "--sidebar-primary-foreground": "#fbfbfb",
  "--sidebar-accent": "#f0f0f0",
  "--sidebar-accent-foreground": "#2d2d2d",
  "--sidebar-border": "transparent",
  "--sidebar-ring": "#06b6d4",
  "--brand": "#06b6d4",
  "--brand-complementary": "#d4a506",
} as React.CSSProperties

const databaseShellDefaults = {
  appName: "DataHub",
  navigation: [
    { name: "overview", label: "Overview", icon: "LayoutDashboard" },
    { name: "tables", label: "Tables", icon: "Table" },
    { name: "query", label: "Query", icon: "Terminal" },
    { name: "connections", label: "Connections", icon: "Plug" },
    { name: "settings", label: "Settings", icon: "Settings" },
  ],
  user: {
    name: "Sarah Miller",
    email: "sarah@example.com",
    avatar: "/avatars/03.webp",
  },
  logo: {
    icon: "Database",
  },
}

interface DatabaseShellProps {
  activeView?: string
  onNavigate?: (view: string) => void
  children?: React.ReactNode
}

export function AppDatabaseShell1({
  activeView = "overview",
  onNavigate,
  children,
}: DatabaseShellProps) {
  const { appName, navigation, user, logo } = databaseShellDefaults

  return (
    <div
      style={cyanTheme}
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
                    <AvatarImage src="/avatars/03.webp" alt={user.name} />
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

export { cyanTheme }
