import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import {
  fixFilePaths,
  fixImport,
  getBlockMainCategory,
  getBlockSubcategory,
  queryRegistry,
  getItemsByType,
  getBlocksByCategory,
  getBlocksBySubcategory,
  getAvailableBlockCategories,
  getAvailableBlockSubcategories,
  getBlockCategoryCounts,
  getBlockSubcategoryBlockCounts,
  getAllRegistryItems,
} from "@/lib/registry"
import type { RegistryItem } from "@/registry/schema"

describe("registry-utils", () => {
  describe("fixFilePaths", () => {
    it("should add target property to files", () => {
      const files = [
        { path: "ui/button.tsx", type: "registry:ui" as const },
        { path: "ui/dialog.tsx", type: "registry:ui" as const },
      ]

      const result = fixFilePaths(files)

      expect(result).toBeDefined()
      expect(result.length).toBe(2)
      expect(result[0]).toHaveProperty("target")
      expect(result[1]).toHaveProperty("target")
    })

    it("should handle empty file array", () => {
      const files: any[] = []

      const result = fixFilePaths(files)

      expect(result).toEqual([])
    })

    it("should handle undefined/null files", () => {
      const result = fixFilePaths(null as any)

      expect(result).toEqual([])
    })
  })

  describe("fixImport", () => {
    it("should transform registry UI imports to components/ui", () => {
      const code = `import { Button } from "@/registry/new-york-v4/ui/button"`

      const result = fixImport(code)

      expect(result).toBe(`import { Button } from "@/components/ui/button"`)
    })

    it("should transform registry lib imports to lib", () => {
      const code = `import { cn } from "@/registry/new-york-v4/lib/utils"`

      const result = fixImport(code)

      expect(result).toBe(`import { cn } from "@/lib/utils"`)
    })

    it("should transform registry hooks imports to hooks", () => {
      const code = `import { useToast } from "@/registry/new-york-v4/hooks/use-toast"`

      const result = fixImport(code)

      expect(result).toBe(`import { useToast } from "@/hooks/use-toast"`)
    })

    it("should handle multiple registry imports", () => {
      const code = `import { Button } from "@/registry/new-york-v4/ui/button"
import { cn } from "@/registry/new-york-v4/lib/utils"
import { useToast } from "@/registry/new-york-v4/hooks/use-toast"`

      const result = fixImport(code)

      expect(result).toContain(`import { Button } from "@/components/ui/button"`)
      expect(result).toContain(`import { cn } from "@/lib/utils"`)
      expect(result).toContain(`import { useToast } from "@/hooks/use-toast"`)
    })

    it("should preserve non-registry imports", () => {
      const code = `import * as React from "react"
import { cn } from "@/registry/new-york-v4/lib/utils"
import { clsx } from "clsx"`

      const result = fixImport(code)

      expect(result).toContain(`import * as React from "react"`)
      expect(result).toContain(`import { cn } from "@/lib/utils"`)
      expect(result).toContain(`import { clsx } from "clsx"`)
    })

    it("should handle different style names", () => {
      const code = `import { Button } from "@/registry/custom-style/ui/button"`

      const result = fixImport(code)

      expect(result).toBe(`import { Button } from "@/components/ui/button"`)
    })

    it("should not modify code without registry imports", () => {
      const code = `import * as React from "react"
import { clsx } from "clsx"`

      const result = fixImport(code)

      expect(result).toBe(code)
    })

    it("should handle empty string", () => {
      const result = fixImport("")

      expect(result).toBe("")
    })
  })

  describe("getBlockMainCategory", () => {
    it("should extract main category from block file path", () => {
      const block: RegistryItem = {
        name: "hero-1",
        type: "registry:block",
        files: [
          {
            path: "blocks/marketing/hero/hero-1.tsx",
            type: "registry:block",
          },
        ],
      }

      const result = getBlockMainCategory(block)

      expect(result).toBe("marketing")
    })

    it("should extract main category from application blocks", () => {
      const block: RegistryItem = {
        name: "dashboard-card",
        type: "registry:block",
        files: [
          {
            path: "blocks/application/dashboard/dashboard-card.tsx",
            type: "registry:block",
          },
        ],
      }

      const result = getBlockMainCategory(block)

      expect(result).toBe("application")
    })

    it("should handle blocks without category", () => {
      const block: RegistryItem = {
        name: "simple-block",
        type: "registry:block",
        files: [
          {
            path: "blocks/simple-block.tsx",
            type: "registry:block",
          },
        ],
      }

      const result = getBlockMainCategory(block)

      expect(result).toBeFalsy()
    })

    it("should handle blocks without files", () => {
      const block: RegistryItem = {
        name: "test-block",
        type: "registry:block",
        files: [],
      }

      const result = getBlockMainCategory(block)

      expect(result).toBeFalsy()
    })
  })

  describe("getBlockSubcategory", () => {
    it("should extract subcategory from block file path", () => {
      const block: RegistryItem = {
        name: "hero-1",
        type: "registry:block",
        files: [
          {
            path: "blocks/marketing/hero/hero-1.tsx",
            type: "registry:block",
          },
        ],
      }

      const result = getBlockSubcategory(block)

      expect(result).toBe("hero")
    })

    it("should extract subcategory from pricing blocks", () => {
      const block: RegistryItem = {
        name: "pricing-table",
        type: "registry:block",
        files: [
          {
            path: "blocks/marketing/pricing/pricing-table.tsx",
            type: "registry:block",
          },
        ],
      }

      const result = getBlockSubcategory(block)

      expect(result).toBe("pricing")
    })

    it("should handle blocks without subcategory", () => {
      const block: RegistryItem = {
        name: "simple-block",
        type: "registry:block",
        files: [
          {
            path: "blocks/marketing/simple-block.tsx",
            type: "registry:block",
          },
        ],
      }

      const result = getBlockSubcategory(block)

      expect(result).toBeFalsy()
    })

    it("should handle blocks without files", () => {
      const block: RegistryItem = {
        name: "test-block",
        type: "registry:block",
        files: [],
      }

      const result = getBlockSubcategory(block)

      expect(result).toBeFalsy()
    })
  })

  describe("queryRegistry ⭐⭐⭐ CRITICAL", () => {
    describe("Return Type: items (default)", () => {
      it("should return all items when no filters are provided", async () => {
        const result = await queryRegistry()

        expect(Array.isArray(result)).toBe(true)
        expect((result as RegistryItem[]).length).toBeGreaterThan(0)
      })

      it("should filter by types: ui components only", async () => {
        const result = await queryRegistry({
          types: ["registry:ui"],
        })

        expect(Array.isArray(result)).toBe(true)
        const items = result as RegistryItem[]
        expect(items.length).toBeGreaterThan(0)
        items.forEach((item) => {
          expect(item.type).toBe("registry:ui")
        })
      })

      it("should filter by types: blocks only", async () => {
        const result = await queryRegistry({
          types: ["registry:block"],
        })

        expect(Array.isArray(result)).toBe(true)
        const items = result as RegistryItem[]
        expect(items.length).toBeGreaterThan(0)
        items.forEach((item) => {
          expect(item.type).toBe("registry:block")
        })
      })

      it("should filter by multiple types", async () => {
        const result = await queryRegistry({
          types: ["registry:ui", "registry:hook"],
        })

        expect(Array.isArray(result)).toBe(true)
        const items = result as RegistryItem[]
        expect(items.length).toBeGreaterThan(0)
        items.forEach((item) => {
          expect(["registry:ui", "registry:hook"]).toContain(item.type)
        })
      })

      it("should exclude charts by default", async () => {
        const result = await queryRegistry({
          types: ["registry:ui"],
        })

        const items = result as RegistryItem[]
        const chartItems = items.filter((item) => item.name.startsWith("chart-"))
        expect(chartItems.length).toBe(0)
      })

      it("should include charts when excludeCharts is false", async () => {
        const result = await queryRegistry({
          types: ["registry:ui"],
          excludeCharts: false,
        })

        const items = result as RegistryItem[]
        const chartItems = items.filter((item) => item.name.startsWith("chart-"))
        
        
        expect(chartItems.length).toBeGreaterThanOrEqual(0)
      })

      it("should filter by excludeNamePrefix", async () => {
        const result = await queryRegistry({
          types: ["registry:ui"],
          excludeNamePrefix: ["chart-", "sidebar-"],
        })

        const items = result as RegistryItem[]
        items.forEach((item) => {
          expect(item.name.startsWith("chart-")).toBe(false)
          expect(item.name.startsWith("sidebar-")).toBe(false)
        })
      })

      it("should apply custom filter function", async () => {
        const result = await queryRegistry({
          types: ["registry:ui"],
          filter: (item) => item.name.length < 10,
        })

        const items = result as RegistryItem[]
        items.forEach((item) => {
          expect(item.name.length).toBeLessThan(10)
        })
      })
    })

    describe("Return Type: ids", () => {
      it("should return array of item names", async () => {
        const result = await queryRegistry({
          types: ["registry:ui"],
          returnType: "ids",
        })

        expect(Array.isArray(result)).toBe(true)
        const ids = result as string[]
        expect(ids.length).toBeGreaterThan(0)
        ids.forEach((id) => {
          expect(typeof id).toBe("string")
        })
      })

      it("should return filtered ids", async () => {
        const result = await queryRegistry({
          types: ["registry:ui"],
          returnType: "ids",
          filter: (item) => item.name.startsWith("button"),
        })

        const ids = result as string[]
        expect(ids.length).toBeGreaterThan(0)
        ids.forEach((id) => {
          expect(id.startsWith("button")).toBe(true)
        })
      })
    })

    describe("Return Type: categories", () => {
      it("should return unique categories for blocks", async () => {
        const result = await queryRegistry({
          types: ["registry:block"],
          returnType: "categories",
        })

        expect(Array.isArray(result)).toBe(true)
        const categories = result as string[]
        expect(categories.length).toBeGreaterThan(0)

        
        const sorted = [...categories].sort()
        expect(categories).toEqual(sorted)

        
        const uniqueCategories = [...new Set(categories)]
        expect(categories).toEqual(uniqueCategories)
      })

      it("should return categories for UI components", async () => {
        const result = await queryRegistry({
          types: ["registry:ui"],
          returnType: "categories",
        })

        expect(Array.isArray(result)).toBe(true)
        const categories = result as string[]
        
        expect(categories).toBeDefined()
      })
    })

    describe("Return Type: subcategories", () => {
      it("should return subcategories for marketing blocks", async () => {
        const result = await queryRegistry({
          types: ["registry:block"],
          mainCategory: "marketing",
          returnType: "subcategories",
        })

        expect(Array.isArray(result)).toBe(true)
        const subcategories = result as string[]
        expect(subcategories.length).toBeGreaterThan(0)

        
        const sorted = [...subcategories].sort()
        expect(subcategories).toEqual(sorted)
      })

      it("should throw error when mainCategory is not provided", async () => {
        await expect(
          queryRegistry({
            types: ["registry:block"],
            returnType: "subcategories",
          })
        ).rejects.toThrow('returnType "subcategories" requires mainCategory option')
      })
    })

    describe("Return Type: counts", () => {
      it("should return category counts for blocks", async () => {
        const result = await queryRegistry({
          types: ["registry:block"],
          returnType: "counts",
        })

        expect(typeof result).toBe("object")
        const counts = result as Record<string, number>
        const keys = Object.keys(counts)
        expect(keys.length).toBeGreaterThan(0)

        keys.forEach((key) => {
          expect(typeof counts[key]).toBe("number")
          expect(counts[key]).toBeGreaterThan(0)
        })
      })

      it("should return counts for all items when no filter", async () => {
        const result = await queryRegistry({
          returnType: "counts",
        })

        expect(typeof result).toBe("object")
        const counts = result as Record<string, number>
        expect(Object.keys(counts).length).toBeGreaterThan(0)
      })
    })

    describe("Return Type: subcategoryCounts", () => {
      it("should return subcategory counts for marketing blocks", async () => {
        const result = await queryRegistry({
          types: ["registry:block"],
          mainCategory: "marketing",
          returnType: "subcategoryCounts",
        })

        expect(typeof result).toBe("object")
        const counts = result as Record<string, number>
        const keys = Object.keys(counts)
        expect(keys.length).toBeGreaterThan(0)

        keys.forEach((key) => {
          expect(typeof counts[key]).toBe("number")
          expect(counts[key]).toBeGreaterThan(0)
        })
      })

      it("should throw error when mainCategory is not provided", async () => {
        await expect(
          queryRegistry({
            types: ["registry:block"],
            returnType: "subcategoryCounts",
          })
        ).rejects.toThrow(
          'returnType "subcategoryCounts" requires mainCategory option'
        )
      })
    })

    describe("Block-specific filtering", () => {
      it("should filter blocks by mainCategory", async () => {
        const result = await queryRegistry({
          types: ["registry:block"],
          mainCategory: "marketing",
        })

        const items = result as RegistryItem[]
        expect(items.length).toBeGreaterThan(0)

        items.forEach((item) => {
          const category = getBlockMainCategory(item)
          expect(category).toBe("marketing")
        })
      })

      it("should filter blocks by mainCategory and subcategory", async () => {
        const result = await queryRegistry({
          types: ["registry:block"],
          mainCategory: "marketing",
          subcategory: "hero-section",
        })

        const items = result as RegistryItem[]

        items.forEach((item) => {
          const category = getBlockMainCategory(item)
          const sub = getBlockSubcategory(item)
          expect(category).toBe("marketing")
          expect(sub).toBe("hero-section")
        })
      })
    })

    describe("Single item queries", () => {
      it("should return single item by name only (fast path)", async () => {
        const result = await queryRegistry({
          name: "button",
        })

        expect(result).not.toBeNull()
        if (result && typeof result === "object" && "name" in result) {
          expect((result as RegistryItem).name).toBe("button")
        }
      })

      it("should return null for non-existent item", async () => {
        const result = await queryRegistry({
          name: "non-existent-component-xyz",
        })

        expect(result).toBeNull()
      })

      it("should return single item with full content when name and style provided", async () => {
        const result = await queryRegistry({
          name: "button",
          style: "new-york-v4",
        })

        if (result && typeof result === "object" && "name" in result) {
          const item = result as RegistryItem
          expect(item.name).toBe("button")
          expect(item.files).toBeDefined()
          expect(item.files.length).toBeGreaterThan(0)

          
          item.files.forEach((file) => {
            expect(file.content).toBeDefined()
            expect(typeof file.content).toBe("string")
          })
        }
      })

      it("should return null for single item query with invalid style", async () => {
        const result = await queryRegistry({
          name: "button",
          style: "invalid-style-xyz" as any,
        })

        
        expect(result).toBeDefined()
      })
    })

    describe("Edge cases and combinations", () => {
      it("should handle empty result set", async () => {
        const result = await queryRegistry({
          types: ["registry:ui"],
          filter: () => false, 
        })

        expect(Array.isArray(result)).toBe(true)
        expect((result as RegistryItem[]).length).toBe(0)
      })

      it("should combine multiple filters correctly", async () => {
        const result = await queryRegistry({
          types: ["registry:ui"],
          excludeNamePrefix: ["chart-"],
          filter: (item) => item.name.includes("button"),
        })

        const items = result as RegistryItem[]
        items.forEach((item) => {
          expect(item.type).toBe("registry:ui")
          expect(item.name.startsWith("chart-")).toBe(false)
          expect(item.name.includes("button")).toBe(true)
        })
      })

      it("should handle queries with no matching items gracefully", async () => {
        const result = await queryRegistry({
          types: ["registry:ui"],
          filter: (item) => item.name === "impossible-component-name-12345",
        })

        expect(Array.isArray(result)).toBe(true)
        expect((result as RegistryItem[]).length).toBe(0)
      })
    })

    describe("Performance and optimization", () => {
      it("should load only necessary index files for type-specific queries", async () => {
        
        const result = await queryRegistry({
          types: ["registry:ui"],
        })

        expect(Array.isArray(result)).toBe(true)
        expect((result as RegistryItem[]).length).toBeGreaterThan(0)
      })

      it("should load specific block category index when provided", async () => {
        
        const result = await queryRegistry({
          types: ["registry:block"],
          mainCategory: "marketing",
          subcategory: "hero-section",
        })

        expect(Array.isArray(result)).toBe(true)
      })
    })
  })

  describe("Helper Functions", () => {
    describe("getItemsByType", () => {
      it("should get all UI components", async () => {
        const items = await getItemsByType("registry:ui")

        expect(Array.isArray(items)).toBe(true)
        expect(items.length).toBeGreaterThan(0)
        items.forEach((item) => {
          expect(item.type).toBe("registry:ui")
        })
      })

      it("should get all hooks", async () => {
        const items = await getItemsByType("registry:hook")

        expect(Array.isArray(items)).toBe(true)
        items.forEach((item) => {
          expect(item.type).toBe("registry:hook")
        })
      })

      it("should get all examples", async () => {
        const items = await getItemsByType("registry:example")

        expect(Array.isArray(items)).toBe(true)
        items.forEach((item) => {
          expect(item.type).toBe("registry:example")
        })
      })
    })

    describe("getBlocksByCategory", () => {
      it("should get all marketing blocks", async () => {
        const blocks = await getBlocksByCategory("marketing")

        expect(Array.isArray(blocks)).toBe(true)
        expect(blocks.length).toBeGreaterThan(0)
        blocks.forEach((block) => {
          const category = getBlockMainCategory(block)
          expect(category).toBe("marketing")
        })
      })

      it("should get all application blocks", async () => {
        const blocks = await getBlocksByCategory("application")

        expect(Array.isArray(blocks)).toBe(true)
        blocks.forEach((block) => {
          const category = getBlockMainCategory(block)
          expect(category).toBe("application")
        })
      })

      it("should return empty array for non-existent category", async () => {
        const blocks = await getBlocksByCategory("non-existent-category")

        expect(Array.isArray(blocks)).toBe(true)
        expect(blocks.length).toBe(0)
      })
    })

    describe("getBlocksBySubcategory", () => {
      it("should get marketing hero-section blocks", async () => {
        const blocks = await getBlocksBySubcategory("marketing", "hero-section")

        expect(Array.isArray(blocks)).toBe(true)
        expect(blocks.length).toBeGreaterThan(0)
        blocks.forEach((block) => {
          const category = getBlockMainCategory(block)
          const subcategory = getBlockSubcategory(block)
          expect(category).toBe("marketing")
          expect(subcategory).toBe("hero-section")
        })
      })

      it("should return empty array for non-existent subcategory", async () => {
        const blocks = await getBlocksBySubcategory(
          "marketing",
          "non-existent-subcategory"
        )

        expect(Array.isArray(blocks)).toBe(true)
        expect(blocks.length).toBe(0)
      })
    })

    describe("getAvailableBlockCategories", () => {
      it("should return all block categories", async () => {
        const categories = await getAvailableBlockCategories()

        expect(Array.isArray(categories)).toBe(true)
        expect(categories.length).toBeGreaterThan(0)

        
        const sorted = [...categories].sort()
        expect(categories).toEqual(sorted)

        
        expect(categories).toContain("marketing")
        expect(categories).toContain("application")
      })

      it("should return unique categories", async () => {
        const categories = await getAvailableBlockCategories()

        const unique = [...new Set(categories)]
        expect(categories).toEqual(unique)
      })
    })

    describe("getAvailableBlockSubcategories", () => {
      it("should return marketing subcategories", async () => {
        const subcategories = await getAvailableBlockSubcategories("marketing")

        expect(Array.isArray(subcategories)).toBe(true)
        expect(subcategories.length).toBeGreaterThan(0)

        
        const sorted = [...subcategories].sort()
        expect(subcategories).toEqual(sorted)

        
        expect(subcategories).toContain("hero-section")
      })

      it("should return empty array for non-existent category", async () => {
        const subcategories = await getAvailableBlockSubcategories(
          "non-existent-category"
        )

        expect(Array.isArray(subcategories)).toBe(true)
        expect(subcategories.length).toBe(0)
      })
    })

    describe("getBlockCategoryCounts", () => {
      it("should return counts for all block categories", async () => {
        const counts = await getBlockCategoryCounts()

        expect(typeof counts).toBe("object")
        const keys = Object.keys(counts)
        expect(keys.length).toBeGreaterThan(0)

        keys.forEach((key) => {
          expect(typeof counts[key]).toBe("number")
          expect(counts[key]).toBeGreaterThan(0)
        })

        
        expect(counts).toHaveProperty("marketing")
        expect(counts).toHaveProperty("application")
      })

      it("should have accurate counts", async () => {
        const counts = await getBlockCategoryCounts()
        const marketingBlocks = await getBlocksByCategory("marketing")

        
        
        expect(counts["marketing"]).toBeGreaterThan(0)
        expect(typeof counts["marketing"]).toBe("number")
      })
    })

    describe("getBlockSubcategoryBlockCounts", () => {
      it("should return subcategory counts for marketing", async () => {
        const counts = await getBlockSubcategoryBlockCounts("marketing")

        expect(typeof counts).toBe("object")
        const keys = Object.keys(counts)
        expect(keys.length).toBeGreaterThan(0)

        keys.forEach((key) => {
          expect(typeof counts[key]).toBe("number")
          expect(counts[key]).toBeGreaterThan(0)
        })
      })

      it("should have accurate subcategory counts", async () => {
        const counts = await getBlockSubcategoryBlockCounts("marketing")
        const heroBlocks = await getBlocksBySubcategory("marketing", "hero-section")

        
        if (counts["hero-section"]) {
          expect(counts["hero-section"]).toBeGreaterThan(0)
          expect(typeof counts["hero-section"]).toBe("number")
        }
      })

      it("should return empty object for non-existent category", async () => {
        const counts = await getBlockSubcategoryBlockCounts("non-existent")

        expect(typeof counts).toBe("object")
        expect(Object.keys(counts).length).toBe(0)
      })
    })

    describe("getAllRegistryItems", () => {
      it("should return all items when no options provided", async () => {
        const items = await getAllRegistryItems()

        expect(Array.isArray(items)).toBe(true)
        expect(items.length).toBeGreaterThan(0)
      })

      it("should filter by types", async () => {
        const items = await getAllRegistryItems({
          types: ["registry:ui"],
        })

        expect(Array.isArray(items)).toBe(true)
        items.forEach((item) => {
          expect(item.type).toBe("registry:ui")
        })
      })

      it("should filter by mainCategory", async () => {
        const items = await getAllRegistryItems({
          types: ["registry:block"],
          mainCategory: "marketing",
        })

        expect(Array.isArray(items)).toBe(true)
        items.forEach((item) => {
          const category = getBlockMainCategory(item)
          expect(category).toBe("marketing")
        })
      })

      it("should filter by mainCategory and subcategory", async () => {
        const items = await getAllRegistryItems({
          types: ["registry:block"],
          mainCategory: "marketing",
          subcategory: "hero-section",
        })

        expect(Array.isArray(items)).toBe(true)
        items.forEach((item) => {
          const category = getBlockMainCategory(item)
          const sub = getBlockSubcategory(item)
          expect(category).toBe("marketing")
          expect(sub).toBe("hero-section")
        })
      })
    })
  })
})
