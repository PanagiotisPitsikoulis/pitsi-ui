import Link from "next/link"
import { Sparkles } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

export function UpgradeProCard() {
  return (
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
          <Link href="/#pricing">
            <Sparkles className="mr-2 size-4" />
            Upgrade Now
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
