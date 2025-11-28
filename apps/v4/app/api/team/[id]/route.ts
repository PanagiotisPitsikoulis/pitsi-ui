import { NextResponse } from "next/server"
import { and, eq } from "drizzle-orm"

import { auth } from "@/lib/server/auth"
import { db } from "@/lib/server/db"
import { teamMember } from "@/lib/server/db/schema"

// Remove a team member
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({
      headers: req.headers,
    })

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const currentUser = session.user as any
    const { id } = await params

    // Verify the team member belongs to the current user
    const member = await db
      .select()
      .from(teamMember)
      .where(
        and(eq(teamMember.id, id), eq(teamMember.teamOwnerId, currentUser.id))
      )

    if (member.length === 0) {
      return NextResponse.json(
        { error: "Team member not found" },
        { status: 404 }
      )
    }

    // Delete the team member
    await db
      .delete(teamMember)
      .where(
        and(eq(teamMember.id, id), eq(teamMember.teamOwnerId, currentUser.id))
      )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error removing team member:", error)
    return NextResponse.json(
      { error: "Failed to remove team member" },
      { status: 500 }
    )
  }
}
