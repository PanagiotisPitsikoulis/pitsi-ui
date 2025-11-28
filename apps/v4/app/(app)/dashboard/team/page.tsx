import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/server/user"

import { TeamClient } from "./client"

export default async function TeamPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/api/auth/signin")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Team</h1>
        <p className="text-muted-foreground">
          Manage your team members and invitations
        </p>
      </div>
      <TeamClient planType={user.planType} />
    </div>
  )
}
