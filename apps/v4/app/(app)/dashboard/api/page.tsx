import { redirect } from "next/navigation"

import { getUserApiKeys } from "@/lib/server/api-keys"
import { getCurrentUser } from "@/lib/server/user"

import { PageHeader } from "@/components/dashboard"
import { ApiKeysClient } from "./client"

export default async function ApiPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/api/auth/signin")
  }

  const keys = await getUserApiKeys(user.id)

  return (
    <div className="space-y-6">
      <PageHeader
        title="API Keys"
        description="Manage API keys for registry authentication"
      />
      <ApiKeysClient initialKeys={keys} isPro={user.isPro} />
    </div>
  )
}
