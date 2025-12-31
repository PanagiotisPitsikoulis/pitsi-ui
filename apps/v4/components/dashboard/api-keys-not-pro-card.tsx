"use client"

import Link from "next/link"
import { Key, Sparkles } from "@/lib/icons"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

import { EmptyState } from "./empty-state"

export function ApiKeysNotProCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>API Keys</CardTitle>
        <CardDescription>API keys are available for Pro users</CardDescription>
      </CardHeader>
      <CardContent>
        <EmptyState
          icon={Key}
          title="Upgrade to Pro"
          description="Get access to API keys for private registry authentication and unlock all Pro components."
          action={
            <Button asChild>
              <Link href="/#pricing">
                <Sparkles className="mr-2 size-4" />
                Upgrade to Pro
              </Link>
            </Button>
          }
        />
      </CardContent>
    </Card>
  )
}
