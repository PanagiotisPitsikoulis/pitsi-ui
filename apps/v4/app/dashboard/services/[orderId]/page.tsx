import { eq } from "drizzle-orm"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"

import { ArrowLeft, Calendar, Check, Package } from "@/lib/icons"
import { auth } from "@/lib/server/auth"
import { db } from "@/lib/server/db"
import { serviceOrder } from "@/lib/server/db/schema"
import {
  formatPrice,
  getServiceTierById,
  getServiceTypeLabel,
  getStatusLabel,
} from "@/lib/server/services"

export default async function ServiceOrderDetailPage({
  params,
  request,
}: {
  params: Promise<{ orderId: string }>
  request?: Request
}) {
  const { orderId } = await params
  const session = await auth.api.getSession({
    headers: request?.headers ?? new Headers(),
  })

  if (!session?.user) {
    redirect(`/signin?redirect=/dashboard/services/${orderId}`)
  }

  const [order] = await db
    .select()
    .from(serviceOrder)
    .where(eq(serviceOrder.id, orderId))

  if (!order || order.userId !== session.user.id) {
    notFound()
  }

  const tier = getServiceTierById(order.serviceType, order.tier)
  const status = getStatusLabel(order.status)
  const projectDetails = order.projectDetails as {
    projectName?: string
    description?: string
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/services"
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Order Details</h1>
          <p className="text-muted-foreground mt-0.5 text-sm">
            Order ID: {order.id}
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Order Summary */}
        <div className="bg-card rounded-xl border p-6 lg:col-span-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-lg">
                <Package className="text-primary h-7 w-7" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">
                  {tier?.name || order.tier}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {getServiceTypeLabel(order.serviceType)}
                </p>
              </div>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${status.color}`}
            >
              {status.label}
            </span>
          </div>

          <div className="mt-6 border-t pt-6">
            <h3 className="mb-4 font-semibold">Project Details</h3>
            <div className="space-y-3">
              <div>
                <p className="text-muted-foreground text-sm">Project Name</p>
                <p className="font-medium">
                  {projectDetails?.projectName || "Untitled Project"}
                </p>
              </div>
              {projectDetails?.description && (
                <div>
                  <p className="text-muted-foreground text-sm">Description</p>
                  <p className="text-sm">{projectDetails.description}</p>
                </div>
              )}
            </div>
          </div>

          {tier && (
            <div className="mt-6 border-t pt-6">
              <h3 className="mb-4 font-semibold">Package Features</h3>
              <ul className="space-y-2">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="text-primary h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Payment & Timeline */}
        <div className="space-y-6">
          <div className="bg-card rounded-xl border p-6">
            <h3 className="mb-4 font-semibold">Payment</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Amount</span>
                <span className="font-semibold">
                  {formatPrice(order.amount)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Status</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${status.color}`}
                >
                  {status.label}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border p-6">
            <h3 className="mb-4 font-semibold">Timeline</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="text-muted-foreground h-4 w-4" />
                <div>
                  <p className="text-muted-foreground text-sm">Order Date</p>
                  <p className="text-sm font-medium">
                    {new Date(order.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              {order.deliveryDate && (
                <div className="flex items-center gap-3">
                  <Calendar className="text-muted-foreground h-4 w-4" />
                  <div>
                    <p className="text-muted-foreground text-sm">
                      Estimated Delivery
                    </p>
                    <p className="text-sm font-medium">
                      {new Date(order.deliveryDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-muted/30 rounded-xl p-6 text-center">
            <p className="text-muted-foreground text-sm">
              Have questions about your order?
            </p>
            <a
              href="mailto:support@pitsiui.com"
              className="text-primary mt-1 block text-sm font-medium hover:underline"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
