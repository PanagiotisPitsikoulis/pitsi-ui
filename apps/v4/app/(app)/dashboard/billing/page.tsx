import Link from "next/link"
import { redirect } from "next/navigation"
import { Check, Sparkles } from "lucide-react"

import { getCurrentUser } from "@/lib/server/user"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export default async function BillingPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/api/auth/signin")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">
          Manage your subscription
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Current Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>
              Your current subscription status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  {user.isPro ? "Pro Plan" : "Free Plan"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {user.isPro
                    ? "Lifetime access to all Pro features"
                    : "Basic access to components"}
                </p>
              </div>
              <Badge variant={user.isPro ? "default" : "secondary"}>
                {user.isPro ? "Pro" : "Free"}
              </Badge>
            </div>
          </CardContent>
          {!user.isPro && (
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/#pricing">
                  <Sparkles className="mr-2 size-4" />
                  Upgrade to Pro
                </Link>
              </Button>
            </CardFooter>
          )}
        </Card>

        {/* Pro Plan Details */}
        <Card>
          <CardHeader>
            <CardTitle>Pro Plan</CardTitle>
            <CardDescription>
              One-time purchase for lifetime access
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">€99</span>
              <span className="text-muted-foreground">one-time</span>
            </div>
            <Separator />
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="text-primary size-4" />
                Access to all Pro components
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary size-4" />
                Access to all Pro blocks
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary size-4" />
                Lifetime updates
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-primary size-4" />
                Priority support
              </li>
            </ul>
          </CardContent>
          {!user.isPro && (
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/#pricing">View Pricing</Link>
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>

      {user.isPro && (
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>
              View your invoices in the Invoices tab
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              You can view and download your invoices from the{" "}
              <Link href="/dashboard/invoices" className="text-primary underline">
                Invoices
              </Link>{" "}
              page.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
