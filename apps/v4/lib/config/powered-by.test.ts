import { describe, it, expect } from "vitest"

import {
  getLogoPath,
  getPoweredBy,
  LIBRARIES,
  POWERED_BY,
} from "@/lib/config/powered-by"

describe("powered-by config", () => {
  describe("LIBRARIES", () => {
    it("should have shadcn library", () => {
      expect(LIBRARIES.shadcn).toBeDefined()
      expect(LIBRARIES.shadcn.id).toBe("shadcn")
      expect(LIBRARIES.shadcn.name).toBe("shadcn/ui")
      expect(LIBRARIES.shadcn.url).toContain("shadcn")
    })

    it("should have skiperui library", () => {
      expect(LIBRARIES.skiperui).toBeDefined()
      expect(LIBRARIES.skiperui.id).toBe("skiperui")
      expect(LIBRARIES.skiperui.name).toBe("Skiper UI")
    })

    it("should have motion library", () => {
      expect(LIBRARIES.motion).toBeDefined()
      expect(LIBRARIES.motion.id).toBe("motion")
      expect(LIBRARIES.motion.name).toBe("Motion")
    })

    it("should have valid URLs for all libraries", () => {
      Object.values(LIBRARIES).forEach((lib) => {
        expect(lib.url).toMatch(/^https?:\/\//)
      })
    })

    it("should have logo paths for all libraries", () => {
      Object.values(LIBRARIES).forEach((lib) => {
        expect(lib.logo).toBeDefined()
        expect(lib.logo.length).toBeGreaterThan(0)
      })
    })
  })

  describe("POWERED_BY", () => {
    it("should have shadcn entry", () => {
      expect(POWERED_BY.shadcn).toBeDefined()
      expect(Array.isArray(POWERED_BY.shadcn)).toBe(true)
    })

    it("should have skiperui entry", () => {
      expect(POWERED_BY.skiperui).toBeDefined()
    })

    it("should have motion entry", () => {
      expect(POWERED_BY.motion).toBeDefined()
    })

    it("should reference LIBRARIES correctly", () => {
      expect(POWERED_BY.shadcn[0]).toBe(LIBRARIES.shadcn)
      expect(POWERED_BY.skiperui[0]).toBe(LIBRARIES.skiperui)
      expect(POWERED_BY.motion[0]).toBe(LIBRARIES.motion)
    })
  })

  describe("getPoweredBy", () => {
    it("should return libraries by ids", () => {
      const result = getPoweredBy(["shadcn"])
      expect(result).toHaveLength(1)
      expect(result[0].id).toBe("shadcn")
    })

    it("should return multiple libraries", () => {
      const result = getPoweredBy(["shadcn", "motion"])
      expect(result).toHaveLength(2)
    })

    it("should filter out invalid ids", () => {
      const result = getPoweredBy(["shadcn", "invalid-id"])
      expect(result).toHaveLength(1)
      expect(result[0].id).toBe("shadcn")
    })

    it("should return empty array for empty input", () => {
      const result = getPoweredBy([])
      expect(result).toEqual([])
    })

    it("should return empty array for all invalid ids", () => {
      const result = getPoweredBy(["invalid1", "invalid2"])
      expect(result).toEqual([])
    })

    it("should preserve order of input ids", () => {
      const result = getPoweredBy(["motion", "shadcn"])
      expect(result[0].id).toBe("motion")
      expect(result[1].id).toBe("shadcn")
    })
  })

  describe("getLogoPath", () => {
    it("should return correct path for shadcn", () => {
      const result = getLogoPath(LIBRARIES.shadcn)
      expect(result).toBe("/powered-by/shadcn.webp")
    })

    it("should return correct path for skiperui", () => {
      const result = getLogoPath(LIBRARIES.skiperui)
      expect(result).toBe("/powered-by/skiper-ui.webp")
    })

    it("should return correct path for motion", () => {
      const result = getLogoPath(LIBRARIES.motion)
      expect(result).toBe("/powered-by/motion.webp")
    })

    it("should prepend /powered-by/ to logo filename", () => {
      const testLibrary = {
        id: "test",
        name: "Test",
        url: "https://test.com",
        logo: "test-logo.png",
      }
      const result = getLogoPath(testLibrary)
      expect(result).toBe("/powered-by/test-logo.png")
    })
  })
})
