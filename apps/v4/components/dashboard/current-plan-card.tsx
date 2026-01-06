import Link from "next/link"

import { Sparkles } from "@/lib/icons"
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

interface CurrentPlanCardProps {
  isPro: boolean
}

export function CurrentPlanCard({ isPro }: CurrentPlanCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Plan</CardTitle>
        <CardDescription>Your current subscription status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {isPro ? "Pro Plan" : "Free Plan"}
            </h3>
            <p className="text-muted-foreground text-sm">
              {isPro
                ? "Lifetime access to all Pro features"
                : "Basic access to components"}
            </p>
          </div>
          <Badge variant={isPro ? "default" : "secondary"}>
            {isPro ? "Pro" : "Free"}
          </Badge>
        </div>
      </CardContent>
      {!isPro && (
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
  )
}
