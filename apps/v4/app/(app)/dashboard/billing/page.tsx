import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/server/user"

import {
  CurrentPlanCard,
  PageHeader,
  PaymentHistoryCard,
  ProPlanCard,
} from "@/components/dashboard"

export default async function BillingPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/api/auth/signin")
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Billing" description="Manage your subscription" />
      <div className="grid gap-6 md:grid-cols-2">
        <CurrentPlanCard isPro={user.isPro} />
        <ProPlanCard isPro={user.isPro} />
      </div>
      {user.isPro && <PaymentHistoryCard />}
    </div>
  )
}
