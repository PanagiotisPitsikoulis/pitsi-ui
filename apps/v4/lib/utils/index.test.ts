import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { absoluteUrl, cn } from "@/lib/utils"

describe("utils", () => {
  describe("cn", () => {
    it("should merge class names", () => {
      expect(cn("foo", "bar")).toBe("foo bar")
    })

    it("should handle conditional classes", () => {
      expect(cn("foo", false && "bar", "baz")).toBe("foo baz")
    })

    it("should merge tailwind classes correctly", () => {
      expect(cn("px-4", "px-2")).toBe("px-2")
    })

    it("should handle arrays of classes", () => {
      expect(cn(["foo", "bar"])).toBe("foo bar")
    })

    it("should handle objects with boolean values", () => {
      expect(cn({ foo: true, bar: false, baz: true })).toBe("foo baz")
    })

    it("should handle undefined and null", () => {
      expect(cn("foo", undefined, null, "bar")).toBe("foo bar")
    })

    it("should handle empty inputs", () => {
      expect(cn()).toBe("")
    })

    it("should deduplicate conflicting tailwind classes", () => {
      expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
    })

    it("should handle responsive variants", () => {
      expect(cn("md:px-4", "md:px-2")).toBe("md:px-2")
    })
  })

  describe("absoluteUrl", () => {
    const originalEnv = process.env.NEXT_PUBLIC_APP_URL

    beforeEach(() => {
      process.env.NEXT_PUBLIC_APP_URL = "https://example.com"
    })

    afterEach(() => {
      process.env.NEXT_PUBLIC_APP_URL = originalEnv
    })

    it("should prepend base URL to path", () => {
      expect(absoluteUrl("/docs")).toBe("https://example.com/docs")
    })

    it("should handle root path", () => {
      expect(absoluteUrl("/")).toBe("https://example.com/")
    })

    it("should handle nested paths", () => {
      expect(absoluteUrl("/docs/getting-started")).toBe(
        "https://example.com/docs/getting-started"
      )
    })

    it("should handle empty path", () => {
      expect(absoluteUrl("")).toBe("https://example.com")
    })
  })
})
