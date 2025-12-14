import { Metadata } from "next"
import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/server/user"

import { PageHeader } from "@/components/dashboard"
import { TeamClient } from "./client"

const title = "Team"
const description = "Manage your team members and invitations"

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
