import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/server/user"

import { PageHeader } from "@/components/dashboard"
import { TeamClient } from "./client"

export default async function TeamPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/api/auth/signin")
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Team"
        description="Manage your team members and invitations"
      />
      <TeamClient planType={user.planType} />
    </div>
  )
}
