import { Metadata } from "next"
import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/server/user"

import {
  CurrentPlanCard,
  PageHeader,
  PaymentHistoryCard,
  ProPlanCard,
} from "@/components/dashboard"

const title = "Billing"
const description = "Manage your subscription and billing information"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

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
