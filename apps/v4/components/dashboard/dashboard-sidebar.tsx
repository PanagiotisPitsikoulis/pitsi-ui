"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  CreditCard,
  Key,
  LayoutDashboard,
  Palette,
  Receipt,
  Shield,
  User,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/new-york-v4/ui/sidebar"

const DASHBOARD_NAV = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
]

const SETTINGS_NAV = [
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    name: "Team",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    name: "Appearance",
    href: "/dashboard/appearance",
    icon: Palette,
  },
  {
    name: "Security",
    href: "/dashboard/security",
    icon: Shield,
  },
  {
    name: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: Receipt,
  },
  {
    name: "API Keys",
    href: "/dashboard/api",
    icon: Key,
  },
]

export function DashboardSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+1px)] z-30 mr-4 -ml-5 hidden h-[calc(100svh-var(--header-height))] overscroll-none bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="no-scrollbar overflow-x-hidden pr-2">
        <div className="from-background via-background/80 to-background/50 sticky -top-1 z-10 h-8 shrink-0 bg-gradient-to-b blur-xs" />
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-medium">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {DASHBOARD_NAV.map(({ name, href, icon: Icon }) => (
                <SidebarMenuItem key={name}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === href}
                    className="data-[active=true]:bg-accent data-[active=true]:border-accent relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                  >
                    <Link href={href}>
                      <Icon className="size-4" />
                      <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                      {name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-medium">
            Settings
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {SETTINGS_NAV.map(({ name, href, icon: Icon }) => (
                <SidebarMenuItem key={name}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === href}
                    className="data-[active=true]:bg-accent data-[active=true]:border-accent relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                  >
                    <Link href={href}>
                      <Icon className="size-4" />
                      <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                      {name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
