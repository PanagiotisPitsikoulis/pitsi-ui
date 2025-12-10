import { describe, it, expect, vi, beforeEach } from "vitest"

import {
  categoryLabels,
  getBlogCategories,
  parseSlug,
  POSTS_PER_PAGE,
  type BlogCategory,
} from "@/lib/blog/source"

vi.mock("@/.source", () => ({
  blog: [],
}))

describe("blog source", () => {
  describe("categoryLabels", () => {
    it("should have label for tutorial", () => {
      expect(categoryLabels.tutorial).toBe("Tutorial")
    })

    it("should have label for announcement", () => {
      expect(categoryLabels.announcement).toBe("Announcement")
    })

    it("should have label for deep-dive", () => {
      expect(categoryLabels["deep-dive"]).toBe("Deep Dive")
    })

    it("should have label for design", () => {
      expect(categoryLabels.design).toBe("Design")
    })

    it("should have labels for all categories", () => {
      const categories: BlogCategory[] = [
        "tutorial",
        "announcement",
        "deep-dive",
        "design",
      ]
      categories.forEach((category) => {
        expect(categoryLabels[category]).toBeDefined()
        expect(typeof categoryLabels[category]).toBe("string")
      })
    })
  })

  describe("POSTS_PER_PAGE", () => {
    it("should be defined", () => {
      expect(POSTS_PER_PAGE).toBeDefined()
    })

    it("should be a positive number", () => {
      expect(POSTS_PER_PAGE).toBeGreaterThan(0)
    })

    it("should be 10", () => {
      expect(POSTS_PER_PAGE).toBe(10)
    })
  })

  describe("getBlogCategories", () => {
    it("should return array of categories", () => {
      const categories = getBlogCategories()
      expect(Array.isArray(categories)).toBe(true)
    })

    it("should include tutorial category", () => {
      const categories = getBlogCategories()
      expect(categories).toContain("tutorial")
    })

    it("should include announcement category", () => {
      const categories = getBlogCategories()
      expect(categories).toContain("announcement")
    })

    it("should include deep-dive category", () => {
      const categories = getBlogCategories()
      expect(categories).toContain("deep-dive")
    })

    it("should include design category", () => {
      const categories = getBlogCategories()
      expect(categories).toContain("design")
    })

    it("should have exactly 4 categories", () => {
      const categories = getBlogCategories()
      expect(categories).toHaveLength(4)
    })
  })

  describe("parseSlug", () => {
    it("should return index for empty slug", () => {
      const result = parseSlug([])
      expect(result.type).toBe("index")
      expect(result.page).toBe(1)
    })

    it("should return index for undefined slug", () => {
      const result = parseSlug(undefined)
      expect(result.type).toBe("index")
      expect(result.page).toBe(1)
    })

    it("should parse page slug", () => {
      const result = parseSlug(["page", "2"])
      expect(result.type).toBe("page")
      expect(result.page).toBe(2)
    })

    it("should handle invalid page number", () => {
      const result = parseSlug(["page", "invalid"])
      expect(result.type).toBe("index")
    })

    it("should handle negative page number", () => {
      const result = parseSlug(["page", "-1"])
      expect(result.type).toBe("index")
    })

    it("should parse category slug", () => {
      const result = parseSlug(["category", "tutorial"])
      expect(result.type).toBe("category")
      expect(result.category).toBe("tutorial")
      expect(result.page).toBe(1)
    })

    it("should parse category with pagination", () => {
      const result = parseSlug(["category", "tutorial", "page", "2"])
      expect(result.type).toBe("category-page")
      expect(result.category).toBe("tutorial")
      expect(result.page).toBe(2)
    })

    it("should parse post slug", () => {
      const result = parseSlug(["my-post-slug"])
      expect(result.type).toBe("post")
      expect(result.postSlug).toBe("my-post-slug")
    })

    it("should return index for invalid category", () => {
      const result = parseSlug(["category", "invalid-category"])
      expect(result.type).toBe("index")
    })

    it("should return index for unknown slug patterns", () => {
      const result = parseSlug(["something", "else", "entirely"])
      expect(result.type).toBe("index")
    })

    it("should parse announcement category", () => {
      const result = parseSlug(["category", "announcement"])
      expect(result.type).toBe("category")
      expect(result.category).toBe("announcement")
    })

    it("should parse deep-dive category", () => {
      const result = parseSlug(["category", "deep-dive"])
      expect(result.type).toBe("category")
      expect(result.category).toBe("deep-dive")
    })

    it("should parse design category", () => {
      const result = parseSlug(["category", "design"])
      expect(result.type).toBe("category")
      expect(result.category).toBe("design")
    })
  })
})
