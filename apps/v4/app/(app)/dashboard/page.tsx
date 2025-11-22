import Link from "next/link"
import { redirect } from "next/navigation"
import { Calendar, Key, Sparkles } from "lucide-react"

import { getUserApiKeys } from "@/lib/server/api-keys"
import { db } from "@/lib/server/db"
import { user as userTable } from "@/lib/server/db/schema"
import { getCurrentUser } from "@/lib/server/user"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { eq } from "drizzle-orm"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/signin")
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Welcome back, {user.name.split(" ")[0]}
          </h1>
          <p className="text-muted-foreground">
            Here&apos;s an overview of your account
          </p>
        </div>
        <Badge variant={user.isPro ? "default" : "secondary"}>
          {user.isPro ? "Pro" : "Free"}
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Plan</CardTitle>
            <Sparkles className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {user.isPro ? "Pro" : "Free"}
            </div>
            <p className="text-muted-foreground text-xs">
              {user.isPro
                ? "Lifetime access to all features"
                : "Upgrade to unlock Pro features"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Keys</CardTitle>
            <Key className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {user.isPro ? apiKeys.length : "—"}
            </div>
            <p className="text-muted-foreground text-xs">
              {user.isPro ? "Active API keys" : "Available with Pro"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Member Since</CardTitle>
            <Calendar className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {userData?.createdAt
                ? new Date(userData.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })
                : "—"}
            </div>
            <p className="text-muted-foreground text-xs">
              {userData?.proUpgradedAt
                ? `Pro since ${new Date(userData.proUpgradedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}`
                : "Account created"}
            </p>
          </CardContent>
        </Card>
      </div>

      {!user.isPro && (
        <Card>
          <CardHeader>
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Get lifetime access to all Pro components, blocks, and features
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">
                One-time payment of <strong>€99</strong> for lifetime access
              </p>
            </div>
            <Button asChild>
              <Link href="/pricing">
                <Sparkles className="mr-2 size-4" />
                Upgrade Now
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
