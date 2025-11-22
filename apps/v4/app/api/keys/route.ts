import { NextRequest, NextResponse } from "next/server"

import { createApiKey, deleteApiKey, getUserApiKeys } from "@/lib/server/api-keys"
import { getCurrentUser } from "@/lib/server/user"

export async function GET() {
  const user = await getCurrentUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const keys = await getUserApiKeys(user.id)
  return NextResponse.json({ keys })
}

export async function POST(request: NextRequest) {
  const user = await getCurrentUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await request.json()
  const { name } = body

  if (!name || typeof name !== "string") {
    return NextResponse.json({ error: "Name is required" }, { status: 400 })
  }

  const key = await createApiKey(user.id, name)
  return NextResponse.json({ key })
}

export async function DELETE(request: NextRequest) {
  const user = await getCurrentUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const keyId = searchParams.get("id")

  if (!keyId) {
    return NextResponse.json({ error: "Key ID is required" }, { status: 400 })
  }

  try {
    await deleteApiKey(user.id, keyId)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to delete key" }, { status: 500 })
  }
}
