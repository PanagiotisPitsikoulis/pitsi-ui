import { eq } from "drizzle-orm"
import Link from "next/link"
import { redirect } from "next/navigation"

import { ExternalLink, Package } from "@/lib/icons"
import { auth } from "@/lib/server/auth"
import { db } from "@/lib/server/db"
import { serviceOrder } from "@/lib/server/db/schema"
import {
  formatPrice,
  getServiceTierById,
  getServiceTypeLabel,
  getStatusLabel,
} from "@/lib/server/services"

export default async function DashboardServicesPage({
  request,
}: {
  request?: Request
}) {
  const session = await auth.api.getSession({
    headers: request?.headers ?? new Headers(),
  })

  if (!session?.user) {
    redirect("/signin?redirect=/dashboard/services")
  }

  const orders = await db
    .select()
    .from(serviceOrder)
    .where(eq(serviceOrder.userId, session.user.id))
    .orderBy(serviceOrder.createdAt)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Services</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage your website and app orders
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/websites"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
          >
            Order Website
            <ExternalLink className="h-4 w-4" />
          </Link>
          <Link
            href="/apps"
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium"
          >
            Order App
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border py-16 text-center">
          <Package className="text-muted-foreground mb-4 h-12 w-12" />
          <h2 className="text-lg font-semibold">No orders yet</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Get started by ordering a custom website or mobile app.
          </p>
          <div className="mt-6 flex gap-2">
            <Link
              href="/websites"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-medium"
            >
              Explore Websites
            </Link>
            <Link
              href="/apps"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg px-4 py-2 text-sm font-medium"
            >
              Explore Apps
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const tier = getServiceTierById(order.serviceType, order.tier)
            const status = getStatusLabel(order.status)

            return (
              <Link
                key={order.id}
                href={`/dashboard/services/${order.id}`}
                className="bg-card hover:bg-muted/50 flex items-center justify-between rounded-xl border p-6 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Package className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {tier?.name || order.tier} -{" "}
                      {getServiceTypeLabel(order.serviceType)}
                    </h3>
                    <p className="text-muted-foreground mt-0.5 text-sm">
                      {(order.projectDetails as { projectName?: string })?.projectName ||
                        "Untitled Project"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="font-semibold">{formatPrice(order.amount)}</p>
                    <p className="text-muted-foreground text-sm">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${status.color}`}
                  >
                    {status.label}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
