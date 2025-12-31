"use client"

import Link from "next/link"
import { Users } from "@/lib/icons"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

import { EmptyState } from "./empty-state"

export function TeamNotProCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Team management is available for Team and Enterprise plans
        </CardDescription>
      </CardHeader>
      <CardContent>
        <EmptyState
          icon={Users}
          title="Upgrade to Team"
          description="Get access to team management features and invite up to 10 team members with the Team plan, or unlimited members with Enterprise."
          action={
            <Button asChild>
              <Link href="/#pricing">Upgrade to Team</Link>
            </Button>
          }
        />
      </CardContent>
    </Card>
  )
}
