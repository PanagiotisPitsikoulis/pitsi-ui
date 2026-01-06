"use client"

import { formatDate } from "@/lib/format"
import { Loader2, Trash2, Users } from "@/lib/icons"
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

import { EmptyState } from "./empty-state"
import { ListItemRow } from "./list-item-row"
import { TeamInviteDialog } from "./team-invite-dialog"
import { UserAvatar } from "./user-avatar"

type TeamMember = {
  id: string
  memberEmail: string
  status: "pending" | "active"
  invitedAt: string
  acceptedAt: string | null
}

interface TeamMembersCardProps {
  members: TeamMember[]
  maxMembers: number
  planType: PlanType
  deletingId: string | null
  onRemove: (memberId: string) => void
  isDialogOpen: boolean
  onDialogOpenChange: (open: boolean) => void
  email: string
  onEmailChange: (email: string) => void
  error: string | null
  onErrorClear: () => void
  isInviting: boolean
  onInvite: () => void
}

export function TeamMembersCard({
  members,
  maxMembers,
  planType,
  deletingId,
  onRemove,
  isDialogOpen,
  onDialogOpenChange,
  email,
  onEmailChange,
  error,
  onErrorClear,
  isInviting,
  onInvite,
}: TeamMembersCardProps) {
  const memberLimit = maxMembers === Infinity ? "Unlimited" : maxMembers

  return (
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
          <EmptyState
            icon={Users}
            title="No team members yet"
            description="Invite team members to give them access to your Pro components."
          />
        ) : (
          <div className="space-y-2">
            {members.map((member) => (
              <ListItemRow
                key={member.id}
                title={member.memberEmail}
                subtitle={`Invited ${formatDate(member.invitedAt)}`}
                icon={<UserAvatar initial={member.memberEmail[0]} />}
                badge={
                  <Badge
                    variant={
                      member.status === "active" ? "default" : "secondary"
                    }
                  >
                    {member.status === "active" ? "Active" : "Pending"}
                  </Badge>
                }
                actions={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => onRemove(member.id)}
                    disabled={deletingId === member.id}
                  >
                    {deletingId === member.id ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Trash2 className="size-4" />
                    )}
                  </Button>
                }
              />
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <TeamInviteDialog
          isOpen={isDialogOpen}
          onOpenChange={onDialogOpenChange}
          email={email}
          onEmailChange={onEmailChange}
          error={error}
          onErrorClear={onErrorClear}
          isInviting={isInviting}
          onInvite={onInvite}
          disabled={maxMembers !== Infinity && members.length >= maxMembers}
        />
      </CardFooter>
    </Card>
  )
}
