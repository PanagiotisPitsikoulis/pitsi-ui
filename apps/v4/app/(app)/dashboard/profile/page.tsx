import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/server/user"

import { PageHeader, ProfileCard } from "@/components/dashboard"

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
