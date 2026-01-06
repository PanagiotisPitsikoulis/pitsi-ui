import { describe, expect, it } from "vitest"

import {
  getStatusLabel,
  parseRoadmap,
  type RoadmapStatus,
} from "@/lib/roadmap/parser"

describe("roadmap parser", () => {
  describe("parseRoadmap", () => {
    it("should parse a simple roadmap entry", () => {
      const content = `
## Q4 2024

### Completed

- Feature one
- Feature two
`
      const entries = parseRoadmap(content)
      expect(entries).toHaveLength(1)
      expect(entries[0].quarter).toBe("Q4 2024")
      expect(entries[0].status).toBe("completed")
      expect(entries[0].items).toHaveLength(2)
    })

    it("should parse multiple quarters", () => {
      const content = `
## Q4 2024

### Completed

- Feature one

## Q1 2025

### Planned

- Feature two
`
      const entries = parseRoadmap(content)
      expect(entries).toHaveLength(2)
      expect(entries[0].quarter).toBe("Q4 2024")
      expect(entries[1].quarter).toBe("Q1 2025")
    })

    it("should parse in-progress status", () => {
      const content = `
## Q1 2025

### In Progress

- Current work
`
      const entries = parseRoadmap(content)
      expect(entries[0].status).toBe("in-progress")
    })

    it("should parse planned status", () => {
      const content = `
## Q2 2025

### Planned

- Future work
`
      const entries = parseRoadmap(content)
      expect(entries[0].status).toBe("planned")
    })

    it("should parse exploring status", () => {
      const content = `
## Future

### Exploring

- Research item
`
      const entries = parseRoadmap(content)
      expect(entries[0].status).toBe("exploring")
    })

    it("should handle entries without items", () => {
      const content = `
## Q4 2024

### Completed

## Q1 2025

### Planned

- Item
`
      const entries = parseRoadmap(content)
      expect(entries).toHaveLength(1)
      expect(entries[0].quarter).toBe("Q1 2025")
    })

    it("should return empty array for empty content", () => {
      const entries = parseRoadmap("")
      expect(entries).toEqual([])
    })

    it("should return empty array for content without quarters", () => {
      const content = `
# Roadmap

Some introductory text
`
      const entries = parseRoadmap(content)
      expect(entries).toEqual([])
    })

    it("should handle multiple items", () => {
      const content = `
## Q4 2024

### Completed

- First item
- Second item
- Third item
`
      const entries = parseRoadmap(content)
      expect(entries[0].items).toHaveLength(3)
      expect(entries[0].items[0]).toBe("First item")
      expect(entries[0].items[1]).toBe("Second item")
      expect(entries[0].items[2]).toBe("Third item")
    })

    it("should parse in-progress with hyphen variation", () => {
      const content = `
## Q1 2025

### In-Progress

- Current work
`
      const entries = parseRoadmap(content)
      expect(entries[0].status).toBe("in-progress")
    })
  })

  describe("getStatusLabel", () => {
    it("should return correct label for completed", () => {
      expect(getStatusLabel("completed")).toBe("Completed")
    })

    it("should return correct label for in-progress", () => {
      expect(getStatusLabel("in-progress")).toBe("In Progress")
    })

    it("should return correct label for planned", () => {
      expect(getStatusLabel("planned")).toBe("Planned")
    })

    it("should return correct label for exploring", () => {
      expect(getStatusLabel("exploring")).toBe("Exploring")
    })

    it("should handle all status types", () => {
      const statuses: RoadmapStatus[] = [
        "completed",
        "in-progress",
        "planned",
        "exploring",
      ]
      statuses.forEach((status) => {
        expect(typeof getStatusLabel(status)).toBe("string")
        expect(getStatusLabel(status).length).toBeGreaterThan(0)
      })
    })
  })
})
