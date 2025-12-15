import { Metadata } from "next"
import { redirect } from "next/navigation"

import { getUserApiKeys } from "@/lib/server/api-keys"
import { getCurrentUser } from "@/lib/server/user"

import { PageHeader } from "@/components/dashboard"
import { ApiKeysClient } from "./client"

const title = "API Keys"
const description = "Manage API keys for registry authentication"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

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
