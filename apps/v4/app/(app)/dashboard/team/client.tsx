"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import type { PlanType } from "@/lib/server/db/schema"

import {
  LoadingCard,
  TeamInfoCard,
  TeamMembersCard,
  TeamNotProCard,
} from "@/components/dashboard"

type TeamMember = {
  id: string
  memberEmail: string
  status: "pending" | "active"
  invitedAt: string
  acceptedAt: string | null
}

export function TeamClient({ planType }: { planType: PlanType }) {
  const router = useRouter()
  const [members, setMembers] = useState<TeamMember[]>([])
  const [maxMembers, setMaxMembers] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isInviting, setIsInviting] = useState(false)
  const [email, setEmail] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const hasTeamAccess = planType === "team" || planType === "enterprise"

  useEffect(() => {
    if (hasTeamAccess) {
      fetchMembers()
    } else {
      setIsLoading(false)
    }
  }, [hasTeamAccess])

  const fetchMembers = async () => {
    try {
      const response = await fetch("/api/team")
      if (response.ok) {
        const data = await response.json()
        setMembers(data.members)
        setMaxMembers(data.maxMembers)
      }
    } catch (err) {
      console.error("Failed to fetch team members:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInvite = async () => {
    if (!email.trim()) return

    setIsInviting(true)
    setError(null)

    try {
      const response = await fetch("/api/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Failed to invite member")
        return
      }

      setMembers((prev) => [...prev, data.member])
      setEmail("")
      setIsDialogOpen(false)
      router.refresh()
    } catch (err) {
      setError("Failed to invite member")
    } finally {
      setIsInviting(false)
    }
  }

  const handleRemove = async (memberId: string) => {
    setDeletingId(memberId)

    try {
      const response = await fetch(`/api/team/${memberId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setMembers((prev) => prev.filter((m) => m.id !== memberId))
        router.refresh()
      }
    } catch (err) {
      console.error("Failed to remove member:", err)
    } finally {
      setDeletingId(null)
    }
  }

  if (!hasTeamAccess) {
    return <TeamNotProCard />
  }

  if (isLoading) {
    return <LoadingCard />
  }

  return (
    <div className="space-y-6">
      <TeamMembersCard
        members={members}
        maxMembers={maxMembers}
        planType={planType}
        deletingId={deletingId}
        onRemove={handleRemove}
        isDialogOpen={isDialogOpen}
        onDialogOpenChange={setIsDialogOpen}
        email={email}
        onEmailChange={setEmail}
        error={error}
        onErrorClear={() => setError(null)}
        isInviting={isInviting}
        onInvite={handleInvite}
      />
      <TeamInfoCard />
    </div>
  )
}
