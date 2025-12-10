import { and, eq } from "drizzle-orm"
import { nanoid } from "nanoid"

import { db } from "@/lib/server/db"
import { teamMember, user } from "@/lib/server/db/schema"
import { PLANS } from "@/lib/server/stripe"

export type TeamMember = {
  id: string
  memberEmail: string
  status: "pending" | "active"
  invitedAt: Date
  acceptedAt: Date | null
}

export function getMaxMembers(planType: string): number {
  if (planType === "enterprise") {
    return PLANS.enterprise.maxMembers
  }
  if (planType === "team") {
    return PLANS.team.maxMembers
  }
  return 0
}

export async function getTeamMembers(teamOwnerId: string): Promise<TeamMember[]> {
  const members = await db
    .select({
      id: teamMember.id,
      memberEmail: teamMember.memberEmail,
      status: teamMember.status,
      invitedAt: teamMember.invitedAt,
      acceptedAt: teamMember.acceptedAt,
    })
    .from(teamMember)
    .where(eq(teamMember.teamOwnerId, teamOwnerId))

  return members as TeamMember[]
}

export async function getMemberByEmail(
  teamOwnerId: string,
  email: string
): Promise<TeamMember | null> {
  const members = await db
    .select({
      id: teamMember.id,
      memberEmail: teamMember.memberEmail,
      status: teamMember.status,
      invitedAt: teamMember.invitedAt,
      acceptedAt: teamMember.acceptedAt,
    })
    .from(teamMember)
    .where(
      and(
        eq(teamMember.teamOwnerId, teamOwnerId),
        eq(teamMember.memberEmail, email.toLowerCase())
      )
    )

  return members.length > 0 ? (members[0] as TeamMember) : null
}

export async function inviteTeamMember(
  teamOwnerId: string,
  email: string
): Promise<TeamMember> {
  // Check if user exists and link them
  const existingUser = await db
    .select()
    .from(user)
    .where(eq(user.email, email.toLowerCase()))

  const memberUserId = existingUser.length > 0 ? existingUser[0].id : null

  const [newMember] = await db
    .insert(teamMember)
    .values({
      id: nanoid(),
      teamOwnerId,
      memberEmail: email.toLowerCase(),
      memberUserId,
      status: memberUserId ? "active" : "pending",
      invitedAt: new Date(),
      acceptedAt: memberUserId ? new Date() : null,
    })
    .returning()

  return newMember as TeamMember
}

export async function removeTeamMember(
  teamOwnerId: string,
  memberId: string
): Promise<boolean> {
  const result = await db
    .delete(teamMember)
    .where(
      and(
        eq(teamMember.teamOwnerId, teamOwnerId),
        eq(teamMember.id, memberId)
      )
    )

  return true
}
