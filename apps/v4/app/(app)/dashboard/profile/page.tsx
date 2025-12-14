import { Metadata } from "next"
import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/server/user"

import { PageHeader, ProfileCard } from "@/components/dashboard"

const title = "Profile"
const description = "Manage your profile information"

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

export default async function ProfilePage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/api/auth/signin")
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Profile"
        description="Manage your profile information"
      />
      <ProfileCard
        name={user.name}
        email={user.email}
        image={user.image}
        isPro={user.isPro}
      />
    </div>
  )
}
