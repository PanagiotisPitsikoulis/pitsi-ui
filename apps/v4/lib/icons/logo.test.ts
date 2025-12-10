import { describe, it, expect } from "vitest"

import { LOGO_SVG_PATH, PITSI_DIAGONAL_ICON } from "@/lib/icons/logo"

describe("logo icons", () => {
  describe("LOGO_SVG_PATH", () => {
    it("should be defined", () => {
      expect(LOGO_SVG_PATH).toBeDefined()
    })

    it("should be a non-empty string", () => {
      expect(typeof LOGO_SVG_PATH).toBe("string")
      expect(LOGO_SVG_PATH.length).toBeGreaterThan(0)
    })

    it("should be a valid SVG path data", () => {
      expect(LOGO_SVG_PATH).toMatch(/^[MLVHZCSQTAmlvhzcsqta0-9.,\s-]+$/)
    })

    it("should start with M command", () => {
      expect(LOGO_SVG_PATH.trim()).toMatch(/^M/)
    })

    it("should contain valid path commands", () => {
      expect(LOGO_SVG_PATH).toContain("M")
      expect(LOGO_SVG_PATH).toContain("L")
      expect(LOGO_SVG_PATH).toContain("V")
      expect(LOGO_SVG_PATH).toContain("Z")
    })
  })

  describe("PITSI_DIAGONAL_ICON", () => {
    it("should be defined", () => {
      expect(PITSI_DIAGONAL_ICON).toBeDefined()
    })

    it("should be a non-empty string", () => {
      expect(typeof PITSI_DIAGONAL_ICON).toBe("string")
      expect(PITSI_DIAGONAL_ICON.length).toBeGreaterThan(0)
    })

    it("should contain svg element", () => {
      expect(PITSI_DIAGONAL_ICON).toContain("<svg")
      expect(PITSI_DIAGONAL_ICON).toContain("</svg>")
    })

    it("should have xmlns attribute", () => {
      expect(PITSI_DIAGONAL_ICON).toContain('xmlns="http://www.w3.org/2000/svg"')
    })

    it("should have viewBox attribute", () => {
      expect(PITSI_DIAGONAL_ICON).toContain('viewBox="0 0 256 256"')
    })

    it("should contain line elements", () => {
      expect(PITSI_DIAGONAL_ICON).toContain("<line")
    })

    it("should use currentColor for stroke", () => {
      expect(PITSI_DIAGONAL_ICON).toContain('stroke="currentColor"')
    })

    it("should have stroke-width attribute", () => {
      expect(PITSI_DIAGONAL_ICON).toContain('stroke-width="32"')
    })
  })
})
