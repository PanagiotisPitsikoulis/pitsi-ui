import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { SidebarProvider } from "@/registry/new-york-v4/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container flex flex-1 flex-col px-6">
      <SidebarProvider className="min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
        <DashboardSidebar />
        <div className="h-full w-full py-8">{children}</div>
      </SidebarProvider>
    </div>
  )
}
