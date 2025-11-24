import { redirect } from "next/navigation"

import { getUserApiKeys } from "@/lib/server/api-keys"
import { getCurrentUser } from "@/lib/server/user"

import { ApiKeysClient } from "./client"

export default async function ApiPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/api/auth/signin")
  }

  const keys = await getUserApiKeys(user.id)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">API Keys</h1>
        <p className="text-muted-foreground">
          Manage API keys for registry authentication
        </p>
      </div>
      <ApiKeysClient initialKeys={keys} isPro={user.isPro} />
    </div>
  )
}
