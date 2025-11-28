"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Loader2, Plus, Trash2, Users } from "lucide-react"

import type { PlanType } from "@/lib/server/db/schema"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"

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
    return (
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            Team management is available for Team and Enterprise plans
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Users className="text-muted-foreground mb-4 size-12" />
            <h3 className="mb-2 text-lg font-semibold">Upgrade to Team</h3>
            <p className="text-muted-foreground mb-4 max-w-sm text-sm">
              Get access to team management features and invite up to 10 team
              members with the Team plan, or unlimited members with Enterprise.
            </p>
            <Button asChild>
              <Link href="/#pricing">Upgrade to Team</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="size-6 animate-spin" />
        </CardContent>
      </Card>
    )
  }

  const memberLimit = maxMembers === Infinity ? "Unlimited" : maxMembers

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>
                {members.length} of {memberLimit} members
              </CardDescription>
            </div>
            <Badge variant="secondary">
              {planType === "enterprise" ? "Enterprise" : "Team"} Plan
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {members.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Users className="text-muted-foreground mb-4 size-12" />
              <h3 className="mb-2 text-lg font-semibold">No team members yet</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Invite team members to give them access to your Pro components.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-muted flex size-8 items-center justify-center rounded-full">
                      <span className="text-sm font-medium">
                        {member.memberEmail[0].toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{member.memberEmail}</p>
                      <p className="text-muted-foreground text-xs">
                        Invited{" "}
                        {new Date(member.invitedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        member.status === "active" ? "default" : "secondary"
                      }
                    >
                      {member.status === "active" ? "Active" : "Pending"}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => handleRemove(member.id)}
                      disabled={deletingId === member.id}
                    >
                      {deletingId === member.id ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : (
                        <Trash2 className="size-4" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                disabled={
                  maxMembers !== Infinity && members.length >= maxMembers
                }
              >
                <Plus className="mr-2 size-4" />
                Invite Member
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Invite Team Member</DialogTitle>
                <DialogDescription>
                  Enter the email address of the person you want to invite. They
                  will get access to your Pro components.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="colleague@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError(null)
                    }}
                  />
                  {error && <p className="text-sm text-red-500">{error}</p>}
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsDialogOpen(false)
                    setError(null)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleInvite}
                  disabled={isInviting || !email.trim()}
                >
                  {isInviting ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" />
                      Inviting...
                    </>
                  ) : (
                    "Send Invitation"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How it works</CardTitle>
          <CardDescription>
            Team member access and permissions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">What team members get</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>• Access to all Pro components via CLI</li>
              <li>• Ability to create their own API keys</li>
              <li>• Full documentation access</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Invitation process</h4>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>• If the email is already registered, they get instant access</li>
              <li>• If not, they&apos;ll get access when they sign up</li>
              <li>• You can remove members at any time</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
