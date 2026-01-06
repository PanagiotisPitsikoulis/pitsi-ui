import { describe, expect, it } from "vitest"

import { formatDate, formatName } from "@/lib/format"

describe("format", () => {
  describe("formatName", () => {
    it("should convert kebab-case to Title Case", () => {
      expect(formatName("my-component")).toBe("My Component")
    })

    it("should handle single word", () => {
      expect(formatName("button")).toBe("Button")
    })

    it("should handle multiple hyphens", () => {
      expect(formatName("my-awesome-component")).toBe("My Awesome Component")
    })

    it("should handle empty string", () => {
      expect(formatName("")).toBe("")
    })

    it("should handle already capitalized words", () => {
      expect(formatName("My-Component")).toBe("My Component")
    })

    it("should handle numbers in names", () => {
      expect(formatName("v2-button")).toBe("V2 Button")
    })
  })

  describe("formatDate", () => {
    it("should format date string to human-readable format", () => {
      const result = formatDate("2024-01-15")
      expect(result).toBe("Jan 15, 2024")
    })

    it("should format date with different month", () => {
      const result = formatDate("2024-12-25")
      expect(result).toBe("Dec 25, 2024")
    })

    it("should handle ISO date strings", () => {
      const result = formatDate("2024-06-01T12:00:00Z")
      expect(result).toMatch(/Jun \d+, 2024/)
    })

    it("should handle single digit days", () => {
      const result = formatDate("2024-03-05")
      expect(result).toBe("Mar 5, 2024")
    })

    it("should return original string for invalid date", () => {
      const result = formatDate("not-a-date")
      expect(result).toBe("not-a-date")
    })

    it("should return original string for empty string", () => {
      const result = formatDate("")
      expect(result).toBe("")
    })
  })
})
