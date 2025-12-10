import Link from "next/link"

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

import { FeatureList } from "./feature-list"

interface ProPlanCardProps {
  isPro: boolean
}

const proFeatures = [
  "Access to all Pro components",
  "Access to all Pro blocks",
  "Lifetime updates",
  "Priority support",
]

export function ProPlanCard({ isPro }: ProPlanCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pro Plan</CardTitle>
        <CardDescription>One-time purchase for lifetime access</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">€99</span>
          <span className="text-muted-foreground">one-time</span>
        </div>
        <Separator />
        <FeatureList features={proFeatures} />
      </CardContent>
      {!isPro && (
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/#pricing">View Pricing</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
