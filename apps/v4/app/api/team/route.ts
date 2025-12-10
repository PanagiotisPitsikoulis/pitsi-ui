import { NextResponse } from "next/server"

import { auth } from "@/lib/server/auth"
import {
  getMaxMembers,
  getTeamMembers,
  getMemberByEmail,
  inviteTeamMember,
} from "@/lib/server/team"

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

    const members = await getTeamMembers(currentUser.id)
    const maxMembers = getMaxMembers(planType)

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
    const existingMembers = await getTeamMembers(currentUser.id)
    const maxMembers = getMaxMembers(planType)

    if (existingMembers.length >= maxMembers) {
      return NextResponse.json(
        { error: `You have reached the maximum of ${maxMembers} team members` },
        { status: 400 }
      )
    }

    // Check if member already exists
    const existingMember = await getMemberByEmail(currentUser.id, email)

    if (existingMember) {
      return NextResponse.json(
        { error: "This email is already invited" },
        { status: 400 }
      )
    }

    // Create team member invitation
    const newMember = await inviteTeamMember(currentUser.id, email)

    return NextResponse.json({ member: newMember })
  } catch (error) {
    console.error("Error inviting team member:", error)
    return NextResponse.json(
      { error: "Failed to invite team member" },
      { status: 500 }
    )
  }
}
