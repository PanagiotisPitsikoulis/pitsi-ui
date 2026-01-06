import { describe, expect, it } from "vitest"

import { getUserInitials } from "@/lib/utils/user"

describe("user utils", () => {
  describe("getUserInitials", () => {
    it("should return first and last name initials for full names", () => {
      const result = getUserInitials("John Doe")

      expect(result).toBe("JD")
    })

    it("should handle three-word names (first + last initial)", () => {
      const result = getUserInitials("John Michael Doe")

      expect(result).toBe("JD")
    })

    it("should handle four-word names (first + last initial)", () => {
      const result = getUserInitials("Mary Jane Watson Parker")

      expect(result).toBe("MP")
    })

    it("should return first two letters for single names", () => {
      const result = getUserInitials("Madonna")

      expect(result).toBe("MA")
    })

    it("should uppercase the initials", () => {
      const result = getUserInitials("john doe")

      expect(result).toBe("JD")
    })

    it("should handle mixed case names", () => {
      const result = getUserInitials("jOhN dOe")

      expect(result).toBe("JD")
    })

    it("should handle single letter names", () => {
      const result = getUserInitials("J")

      expect(result).toBe("J")
    })

    it("should handle two letter names", () => {
      const result = getUserInitials("Jo")

      expect(result).toBe("JO")
    })

    it("should handle names with special characters", () => {
      const result = getUserInitials("Jean-Pierre Martin")

      expect(result).toBe("JM")
    })

    it("should handle names with extra spaces", () => {
      const result = getUserInitials("John  Doe")

      const initials = getUserInitials("John  Doe")
      expect(initials).toBeDefined()
      expect(initials.length).toBeGreaterThan(0)
    })

    it("should handle very long names", () => {
      const result = getUserInitials(
        "Alexander Christopher Montgomery Wellington"
      )

      expect(result).toBe("AW")
    })

    it("should handle unicode characters", () => {
      const result = getUserInitials("José García")

      expect(result).toBe("JG")
    })

    it("should handle emojis gracefully", () => {
      const result = getUserInitials("John 😊 Doe")

      expect(result).toBeDefined()
      expect(result.length).toBeGreaterThan(0)
    })
  })
})
