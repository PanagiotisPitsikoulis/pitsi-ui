"use client"

import * as React from "react"
import { Dumbbell, User } from "lucide-react"

import {
  appShellDefaults,
  type AppShellBlockProps,
  type AppShellClassNames,
} from "@/lib/blocks/application.types"
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

// Sage base theme - neutral UI with sage brand colors
const sageTheme = {
  // Neutral backgrounds
  "--background": "#fafafa",
  "--foreground": "#1f1f1f",
  "--card": "#ffffff",
  "--card-foreground": "#1f1f1f",
  "--popover": "#ffffff",
  "--popover-foreground": "#1f1f1f",
  // Primary stays neutral gray
  "--primary": "#2d2d2d",
  "--primary-foreground": "#fbfbfb",
  // Neutral secondary surfaces
  "--secondary": "#f5f5f5",
  "--secondary-foreground": "#2d2d2d",
  "--muted": "#f5f5f5",
  "--muted-foreground": "#777777",
  "--accent": "#f5f5f5",
  "--accent-foreground": "#2d2d2d",
  "--destructive": "#dc4545",
  "--destructive-foreground": "#fefefe",
  // No card borders in light mode
  "--border": "transparent",
  "--input": "#e5e5e5",
  "--ring": "#5cb87e",
  "--radius": "1rem",
  // Neutral sidebar
  "--sidebar": "#fafafa",
  "--sidebar-foreground": "#1f1f1f",
  "--sidebar-primary": "#2d2d2d",
  "--sidebar-primary-foreground": "#fbfbfb",
  "--sidebar-accent": "#f0f0f0",
  "--sidebar-accent-foreground": "#2d2d2d",
  "--sidebar-border": "transparent",
  "--sidebar-ring": "#5cb87e",
  // Brand colors (sage green)
  "--brand": "#5cb87e",
  "--brand-complementary": "#a85cb8",
} as React.CSSProperties

// App shell defaults
const appShell1Defaults: {
  appName: string
  navigation: { name: string; label: string; icon: string; shortcut?: string }[]
  user: { name: string; email: string; avatar?: string }
  logo: { icon?: string; image?: { src: string; alt: string } }
} = {
  appName: "Gym Tracker",
  navigation: [
    {
      name: "dashboard",
      label: "Dashboard",
      icon: "LayoutDashboard",
      shortcut: "1",
    },
    { name: "log", label: "Workout Log", icon: "Dumbbell", shortcut: "2" },
    { name: "calendar", label: "Calendar", icon: "Calendar", shortcut: "3" },
    { name: "progress", label: "Progress", icon: "TrendingUp", shortcut: "4" },
    { name: "exercises", label: "Exercises", icon: "Library", shortcut: "5" },
    { name: "settings", label: "Settings", icon: "Settings", shortcut: "6" },
  ],
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/01.webp",
  },
  logo: {
    icon: "Dumbbell",
  },
}

export function AppShell1({
  content = {},
  classNames = {},
  activeView = "dashboard",
  onNavigate,
  theme = sageTheme,
  children,
}: AppShellBlockProps) {
  // Merge content with defaults
  const {
    appName = appShell1Defaults.appName,
    navigation = appShell1Defaults.navigation,
    user = appShell1Defaults.user,
    logo = appShell1Defaults.logo,
  } = content

  // Handle keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle if not in an input field
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      // Find navigation item with matching shortcut
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
    <div
      style={theme}
      className={cn(
        "bg-background text-foreground h-full min-h-[600px]",
        classNames.root
      )}
    >
      <SidebarProvider defaultOpen>
        <Sidebar
          variant="inset"
          collapsible="icon"
          className={classNames.sidebar?.root}
        >
          <SidebarHeader className={cn(classNames.sidebar?.header)}>
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div
                className={cn(
                  "flex size-8 items-center justify-center rounded-lg",
                  classNames.sidebar?.logo
                )}
                style={{ backgroundColor: "var(--brand)", color: "#ffffff" }}
              >
                {logo?.image ? (
                  <img
                    src={logo.image.src}
                    alt={logo.image.alt}
                    className="size-4"
                  />
                ) : (
                  <DynamicIcon
                    name={logo?.icon || "Dumbbell"}
                    className="size-4"
                  />
                )}
              </div>
              <span className="truncate text-sm font-semibold group-data-[collapsible=icon]:hidden">
                {appName}
              </span>
            </div>
          </SidebarHeader>

          <SidebarContent className={classNames.sidebar?.content}>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className={classNames.sidebar?.menu}>
                  {navigation.map((item) => {
                    const isActive = activeView === item.name

                    return (
                      <SidebarMenuItem
                        key={item.name}
                        className={classNames.sidebar?.menuItem}
                      >
                        <SidebarMenuButton
                          isActive={isActive}
                          onClick={() => onNavigate?.(item.name)}
                          tooltip={item.label}
                          className={cn(
                            isActive && "font-medium",
                            isActive
                              ? classNames.sidebar?.menuButtonActive
                              : classNames.sidebar?.menuButton
                          )}
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

          <SidebarFooter className={cn(classNames.sidebar?.footer)}>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent"
                >
                  <Avatar className="size-8 rounded-lg">
                    <AvatarImage src="/avatars/01.webp" alt={user?.name} />
                    <AvatarFallback className="bg-muted rounded-lg">
                      <User className="size-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate font-semibold">{user?.name}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {user?.email}
                    </span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className={classNames.inset?.root}>
          {/* Mobile header with trigger */}
          <header
            className={cn(
              "flex h-14 items-center gap-2 border-b px-4 md:hidden",
              classNames.inset?.header
            )}
          >
            <SidebarTrigger />
            <span className="font-semibold">{appName}</span>
          </header>

          {/* Main content area */}
          <main className={cn("flex-1 overflow-auto", classNames.inset?.main)}>
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

// Export theme for use in other components
export { sageTheme }

// Re-export types for convenience
export type { AppShellClassNames, AppShellBlockProps }
