import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  BASE_URL,
  createSitemapEntry,
  staticPages,
  type SitemapEntry,
} from "@/lib/sitemap/config"

describe("sitemap config", () => {
  describe("BASE_URL", () => {
    it("should be defined", () => {
      expect(BASE_URL).toBeDefined()
    })

    it("should be a valid URL string", () => {
      expect(BASE_URL).toMatch(/^https?:\/\//)
    })
  })

  describe("staticPages", () => {
    it("should be an array", () => {
      expect(Array.isArray(staticPages)).toBe(true)
    })

    it("should have home page with priority 1", () => {
      const homePage = staticPages.find((p) => p.url === "")
      expect(homePage).toBeDefined()
      expect(homePage?.priority).toBe(1)
    })

    it("should have privacy page", () => {
      const privacyPage = staticPages.find((p) => p.url === "/privacy")
      expect(privacyPage).toBeDefined()
      expect(privacyPage?.priority).toBe(0.3)
    })

    it("should have terms page", () => {
      const termsPage = staticPages.find((p) => p.url === "/terms")
      expect(termsPage).toBeDefined()
      expect(termsPage?.priority).toBe(0.3)
    })

    it("should have roadmap page", () => {
      const roadmapPage = staticPages.find((p) => p.url === "/roadmap")
      expect(roadmapPage).toBeDefined()
      expect(roadmapPage?.priority).toBe(0.5)
    })

    it("should have changelog page", () => {
      const changelogPage = staticPages.find((p) => p.url === "/changelog")
      expect(changelogPage).toBeDefined()
      expect(changelogPage?.priority).toBe(0.5)
    })

    it("should have blocks page", () => {
      const blocksPage = staticPages.find((p) => p.url === "/blocks")
      expect(blocksPage).toBeDefined()
      expect(blocksPage?.priority).toBe(0.8)
    })

    it("should have blog page", () => {
      const blogPage = staticPages.find((p) => p.url === "/blog")
      expect(blogPage).toBeDefined()
      expect(blogPage?.priority).toBe(0.8)
    })

    it("should have content-features page", () => {
      const page = staticPages.find((p) => p.url === "/content-features")
      expect(page).toBeDefined()
      expect(page?.priority).toBe(0.7)
    })

    it("should have design-purpose page", () => {
      const page = staticPages.find((p) => p.url === "/design-purpose")
      expect(page).toBeDefined()
      expect(page?.priority).toBe(0.7)
    })

    it("should have tools-information page", () => {
      const page = staticPages.find((p) => p.url === "/tools-information")
      expect(page).toBeDefined()
      expect(page?.priority).toBe(0.7)
    })

    it("should have priorities between 0 and 1", () => {
      staticPages.forEach((page) => {
        expect(page.priority).toBeGreaterThanOrEqual(0)
        expect(page.priority).toBeLessThanOrEqual(1)
      })
    })
  })

  describe("createSitemapEntry", () => {
    beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date("2024-01-15T12:00:00Z"))
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it("should create entry with correct URL", () => {
      const entry = createSitemapEntry("/docs", 0.8)
      expect(entry.url).toBe(`${BASE_URL}/docs`)
    })

    it("should use provided priority", () => {
      const entry = createSitemapEntry("/docs", 0.5)
      expect(entry.priority).toBe(0.5)
    })

    it("should default changeFrequency to weekly", () => {
      const entry = createSitemapEntry("/docs", 0.8)
      expect(entry.changeFrequency).toBe("weekly")
    })

    it("should use provided changeFrequency", () => {
      const entry = createSitemapEntry("/docs", 0.8, "daily")
      expect(entry.changeFrequency).toBe("daily")
    })

    it("should set lastModified to current date", () => {
      const entry = createSitemapEntry("/docs", 0.8)
      expect(entry.lastModified).toEqual(new Date("2024-01-15T12:00:00Z"))
    })

    it("should handle root path", () => {
      const entry = createSitemapEntry("", 1)
      expect(entry.url).toBe(BASE_URL)
    })

    it("should return correct structure", () => {
      const entry = createSitemapEntry("/test", 0.5, "monthly")
      expect(entry).toHaveProperty("url")
      expect(entry).toHaveProperty("lastModified")
      expect(entry).toHaveProperty("changeFrequency")
      expect(entry).toHaveProperty("priority")
    })
  })
})
