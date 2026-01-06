import { beforeEach, describe, expect, it, vi } from "vitest"

import { getMaxMembers } from "@/lib/server/team"

vi.mock("@/lib/server/db", () => ({
  db: {
    select: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockResolvedValue([]),
    insert: vi.fn().mockReturnThis(),
    values: vi.fn().mockReturnThis(),
    returning: vi.fn().mockResolvedValue([]),
    delete: vi.fn().mockReturnThis(),
  },
}))

vi.mock("@/lib/server/db/schema", () => ({
  teamMember: {
    id: "id",
    teamOwnerId: "teamOwnerId",
    memberEmail: "memberEmail",
    memberUserId: "memberUserId",
    status: "status",
    invitedAt: "invitedAt",
    acceptedAt: "acceptedAt",
  },
  user: {
    id: "id",
    email: "email",
  },
}))

vi.mock("@/lib/server/stripe", () => ({
  PLANS: {
    enterprise: { maxMembers: 100 },
    team: { maxMembers: 10 },
  },
}))

vi.mock("nanoid", () => ({
  nanoid: vi.fn().mockReturnValue("test-id-123"),
}))

describe("team", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("getMaxMembers", () => {
    it("should return enterprise max members for enterprise plan", () => {
      const result = getMaxMembers("enterprise")
      expect(result).toBe(100)
    })

    it("should return team max members for team plan", () => {
      const result = getMaxMembers("team")
      expect(result).toBe(10)
    })

    it("should return 0 for unknown plan types", () => {
      const result = getMaxMembers("free")
      expect(result).toBe(0)
    })

    it("should return 0 for empty string", () => {
      const result = getMaxMembers("")
      expect(result).toBe(0)
    })

    it("should return 0 for basic plan", () => {
      const result = getMaxMembers("basic")
      expect(result).toBe(0)
    })

    it("should be case-sensitive", () => {
      const result = getMaxMembers("Enterprise")
      expect(result).toBe(0)
    })
  })
})
