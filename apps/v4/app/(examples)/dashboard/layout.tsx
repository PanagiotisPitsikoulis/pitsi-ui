import { Suspense } from "react"
import { cookies } from "next/headers"

import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"
import { AppSidebar } from "@/app/(examples)/dashboard/components/app-sidebar"
import { SiteHeader } from "@/app/(examples)/dashboard/components/site-header"

import "@/app/(examples)/dashboard/theme.css"

async function DashboardContent({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider
      defaultOpen={defaultOpen}
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-[400px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[400px]" />
              <Skeleton className="h-4 w-[350px]" />
            </div>
          </div>
        </div>
      }
    >
      <DashboardContent>{children}</DashboardContent>
    </Suspense>
  )
}
