import { Metadata } from "next"
import { redirect } from "next/navigation"
import { Calendar, Key, Sparkles } from "@/lib/icons"

import { getUserApiKeys } from "@/lib/server/api-keys"
import { db } from "@/lib/server/db"

const title = "Dashboard"
const description = "Manage your pitsi/ui account and settings"

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
import { user as userTable } from "@/lib/server/db/schema"
import { getCurrentUser } from "@/lib/server/user"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { eq } from "drizzle-orm"

import { PageHeader, StatCard, UpgradeProCard } from "@/components/dashboard"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/api/auth/signin")
  }

  // Get full user data
  const [userData] = await db
    .select()
    .from(userTable)
    .where(eq(userTable.id, user.id))
    .limit(1)

  const apiKeys = user.isPro ? await getUserApiKeys(user.id) : []

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Welcome back, ${user.name.split(" ")[0]}`}
        description="Here's an overview of your account"
        badge={
          <Badge variant={user.isPro ? "default" : "secondary"}>
            {user.isPro ? "Pro" : "Free"}
          </Badge>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Plan"
          icon={Sparkles}
          value={user.isPro ? "Pro" : "Free"}
          description={
            user.isPro
              ? "Lifetime access to all features"
              : "Upgrade to unlock Pro features"
          }
        />
        <StatCard
          title="API Keys"
          icon={Key}
          value={user.isPro ? String(apiKeys.length) : "—"}
          description={user.isPro ? "Active API keys" : "Available with Pro"}
        />
        <StatCard
          title="Member Since"
          icon={Calendar}
          value={
            userData?.createdAt
              ? new Date(userData.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
              : "—"
          }
          description={
            userData?.proUpgradedAt
              ? `Pro since ${new Date(userData.proUpgradedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}`
              : "Account created"
          }
        />
      </div>

      {!user.isPro && <UpgradeProCard />}
    </div>
  )
}
