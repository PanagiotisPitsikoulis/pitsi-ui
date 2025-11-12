import { Suspense } from "react"
import { cookies } from "next/headers"

import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar"
import { AppSidebar } from "@/app/(examples)/dashboard-03/components/app-sidebar"
import { SiteHeader } from "@/app/(examples)/dashboard-03/components/site-header"

async function DashboardContent({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen} className="flex flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="[--header-height:calc(theme(spacing.14))]">
      <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
        <DashboardContent>{children}</DashboardContent>
      </Suspense>
    </main>
  )
}
