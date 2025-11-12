import { Suspense } from "react"
import { cookies } from "next/headers"

import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"
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
    </main>
  )
}
