import { describe, expect, it } from "vitest"

import { META_THEME_COLORS, siteConfig } from "@/lib/config"

describe("site config", () => {
  describe("siteConfig", () => {
    it("should have name defined", () => {
      expect(siteConfig.name).toBe("pitsi/ui")
    })

    it("should have url defined", () => {
      expect(siteConfig.url).toBeDefined()
      expect(typeof siteConfig.url).toBe("string")
    })

    it("should have ogImage defined", () => {
      expect(siteConfig.ogImage).toBeDefined()
      expect(siteConfig.ogImage).toContain("og")
    })

    it("should have description defined", () => {
      expect(siteConfig.description).toBeDefined()
      expect(siteConfig.description.length).toBeGreaterThan(0)
    })

    it("should have twitter link", () => {
      expect(siteConfig.links.twitter).toBeDefined()
      expect(siteConfig.links.twitter).toContain("x.com")
    })

    it("should have github link", () => {
      expect(siteConfig.links.github).toBeDefined()
      expect(siteConfig.links.github).toContain("github.com")
    })

    it("should have navItems array", () => {
      expect(Array.isArray(siteConfig.navItems)).toBe(true)
      expect(siteConfig.navItems.length).toBeGreaterThan(0)
    })

    it("should have Home nav item", () => {
      const homeItem = siteConfig.navItems.find((item) => item.label === "Home")
      expect(homeItem).toBeDefined()
      expect(homeItem?.href).toBe("/")
    })

    it("should have Docs nav item", () => {
      const docsItem = siteConfig.navItems.find((item) => item.label === "Docs")
      expect(docsItem).toBeDefined()
      expect(docsItem?.href).toContain("/docs")
    })

    it("should have Components nav item", () => {
      const componentsItem = siteConfig.navItems.find(
        (item) => item.label === "Components"
      )
      expect(componentsItem).toBeDefined()
    })

    it("should have Blocks nav item", () => {
      const blocksItem = siteConfig.navItems.find(
        (item) => item.label === "Blocks"
      )
      expect(blocksItem).toBeDefined()
      expect(blocksItem?.href).toBe("/blocks")
    })

    it("should have valid hrefs for all nav items", () => {
      siteConfig.navItems.forEach((item) => {
        expect(item.href).toBeDefined()
        expect(item.href.startsWith("/")).toBe(true)
      })
    })

    it("should have labels for all nav items", () => {
      siteConfig.navItems.forEach((item) => {
        expect(item.label).toBeDefined()
        expect(item.label.length).toBeGreaterThan(0)
      })
    })
  })

  describe("META_THEME_COLORS", () => {
    it("should have light color defined", () => {
      expect(META_THEME_COLORS.light).toBeDefined()
    })

    it("should have dark color defined", () => {
      expect(META_THEME_COLORS.dark).toBeDefined()
    })

    it("should have valid hex color for light", () => {
      expect(META_THEME_COLORS.light).toMatch(/^#[0-9a-fA-F]{6}$/)
    })

    it("should have valid hex color for dark", () => {
      expect(META_THEME_COLORS.dark).toMatch(/^#[0-9a-fA-F]{6}$/)
    })

    it("should have white for light theme", () => {
      expect(META_THEME_COLORS.light.toLowerCase()).toBe("#ffffff")
    })
  })
})
