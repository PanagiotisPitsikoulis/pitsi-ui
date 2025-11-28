import { NextResponse } from "next/server"
import { and, eq } from "drizzle-orm"
import { nanoid } from "nanoid"

import { auth } from "@/lib/server/auth"
import { db } from "@/lib/server/db"
import { teamMember, user } from "@/lib/server/db/schema"
import { PLANS } from "@/lib/server/stripe"

// Get team members
export async function GET(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    })

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const currentUser = session.user as any
    const planType = currentUser.planType || "free"

    // Only team and enterprise plans can have team members
    if (planType !== "team" && planType !== "enterprise") {
      return NextResponse.json({ error: "Team plan required" }, { status: 403 })
    }

    const members = await db
      .select({
        id: teamMember.id,
        memberEmail: teamMember.memberEmail,
        status: teamMember.status,
        invitedAt: teamMember.invitedAt,
        acceptedAt: teamMember.acceptedAt,
      })
      .from(teamMember)
      .where(eq(teamMember.teamOwnerId, currentUser.id))

    const maxMembers =
      planType === "enterprise"
        ? PLANS.enterprise.maxMembers
        : PLANS.team.maxMembers

    return NextResponse.json({
      members,
      maxMembers,
      currentCount: members.length,
    })
  } catch (error) {
    console.error("Error fetching team members:", error)
    return NextResponse.json(
      { error: "Failed to fetch team members" },
      { status: 500 }
    )
  }
}

// Invite a team member
export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    })

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const currentUser = session.user as any
    const planType = currentUser.planType || "free"

    // Only team and enterprise plans can have team members
    if (planType !== "team" && planType !== "enterprise") {
      return NextResponse.json({ error: "Team plan required" }, { status: 403 })
    }

    const body = await req.json()
    const { email } = body

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Check if user is trying to invite themselves
    if (email.toLowerCase() === currentUser.email.toLowerCase()) {
      return NextResponse.json(
        { error: "You cannot invite yourself" },
        { status: 400 }
      )
    }

    // Check member limit
    const existingMembers = await db
      .select()
      .from(teamMember)
      .where(eq(teamMember.teamOwnerId, currentUser.id))

    const maxMembers =
      planType === "enterprise"
        ? PLANS.enterprise.maxMembers
        : PLANS.team.maxMembers

    if (existingMembers.length >= maxMembers) {
      return NextResponse.json(
        { error: `You have reached the maximum of ${maxMembers} team members` },
        { status: 400 }
      )
    }

    // Check if member already exists
    const existingMember = await db
      .select()
      .from(teamMember)
      .where(
        and(
          eq(teamMember.teamOwnerId, currentUser.id),
          eq(teamMember.memberEmail, email.toLowerCase())
        )
      )

    if (existingMember.length > 0) {
      return NextResponse.json(
        { error: "This email is already invited" },
        { status: 400 }
      )
    }

    // Check if user exists and link them
    const existingUser = await db
      .select()
      .from(user)
      .where(eq(user.email, email.toLowerCase()))

    const memberUserId = existingUser.length > 0 ? existingUser[0].id : null

    // Create team member invitation
    const newMember = await db
      .insert(teamMember)
      .values({
        id: nanoid(),
        teamOwnerId: currentUser.id,
        memberEmail: email.toLowerCase(),
        memberUserId,
        status: memberUserId ? "active" : "pending",
        invitedAt: new Date(),
        acceptedAt: memberUserId ? new Date() : null,
      })
      .returning()

    return NextResponse.json({ member: newMember[0] })
  } catch (error) {
    console.error("Error inviting team member:", error)
    return NextResponse.json(
      { error: "Failed to invite team member" },
      { status: 500 }
    )
  }
}
