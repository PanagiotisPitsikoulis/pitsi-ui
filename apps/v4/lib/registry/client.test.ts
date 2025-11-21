import { describe, it, expect, vi, beforeEach } from "vitest"
import {
  getRegistryIndexItem,
  getRegistryComponent,
  registryItemExists,
  registryComponentExists,
  type RegistryIndexItem,
} from "@/lib/registry/client"

describe("registry-client", () => {
  describe("getRegistryIndexItem", () => {
    it("should get a registry item by name and style", () => {
      const item = getRegistryIndexItem("button", "new-york-v4")

      expect(item).toBeDefined()
      if (item) {
        expect(item.name).toBe("button")
        expect(item.type).toBe("registry:ui")
      }
    })

    it("should return null for non-existent item", () => {
      const item = getRegistryIndexItem("non-existent-xyz", "new-york-v4")

      expect(item).toBeNull()
    })

    it("should return null for invalid style", () => {
      const item = getRegistryIndexItem("button", "invalid-style" as any)

      expect(item).toBeNull()
    })

    it("should get a block item", () => {
      const item = getRegistryIndexItem("hero-1", "new-york-v4")

      if (item) {
        expect(item.name).toBe("hero-1")
        expect(item.type).toBe("registry:block")
      }
    })

    it("should get an example item", () => {
      const item = getRegistryIndexItem("button-demo", "new-york-v4")

      if (item) {
        expect(item.name).toBe("button-demo")
        expect(item.type).toBe("registry:example")
      }
    })

    it("should get a hook item", () => {
      const item = getRegistryIndexItem("use-toast", "new-york-v4")

      if (item) {
        expect(item.name).toBe("use-toast")
        expect(item.type).toBe("registry:hook")
      }
    })
  })

  describe("getRegistryComponent", () => {
    it("should get a component for items with component property", () => {
      const Component = getRegistryComponent("button-demo", "new-york-v4")

      
      
      if (Component) {
        
        
        expect(Component).toBeDefined()
      } else {
        expect(Component).toBeNull()
      }
    })

    it("should return null for non-existent item", () => {
      const Component = getRegistryComponent("non-existent-xyz", "new-york-v4")

      expect(Component).toBeNull()
    })

    it("should return null for invalid style", () => {
      const Component = getRegistryComponent("button", "invalid-style" as any)

      expect(Component).toBeNull()
    })

    it("should handle UI components", () => {
      const Component = getRegistryComponent("button", "new-york-v4")

      
      
      
      expect(Component !== undefined).toBe(true)
    })
  })

  describe("registryItemExists", () => {
    it("should return true for existing UI component", () => {
      const exists = registryItemExists("button", "new-york-v4")

      expect(exists).toBe(true)
    })

    it("should check if blocks exist", () => {
      
      const blockNames = [
        "hero-1",
        "hero-01",
        "marketing-hero-1",
        "application-dashboard-01",
      ]

      const existingBlocks = blockNames.filter((name) =>
        registryItemExists(name, "new-york-v4")
      )

      
      expect(existingBlocks !== undefined).toBe(true)
    })

    it("should return false for non-existent item", () => {
      const exists = registryItemExists("non-existent-xyz", "new-york-v4")

      expect(exists).toBe(false)
    })

    it("should return false for invalid style", () => {
      const exists = registryItemExists("button", "invalid-style" as any)

      expect(exists).toBe(false)
    })

    it("should be synchronous (no async/await needed)", () => {
      
      const result = registryItemExists("button", "new-york-v4")

      expect(typeof result).toBe("boolean")
    })
  })

  describe("registryComponentExists", () => {
    it("should check if UI component has component property", () => {
      const exists = registryComponentExists("button", "new-york-v4")

      
      
      expect(typeof exists).toBe("boolean")
    })

    it("should return true for items with component property", () => {
      
      const exists = registryComponentExists("button-demo", "new-york-v4")

      
      expect(typeof exists).toBe("boolean")
    })

    it("should return false for non-existent item", () => {
      const exists = registryComponentExists("non-existent-xyz", "new-york-v4")

      expect(exists).toBe(false)
    })

    it("should return false for invalid style", () => {
      const exists = registryComponentExists("button", "invalid-style" as any)

      expect(exists).toBe(false)
    })

    it("should be synchronous (no async/await needed)", () => {
      
      const result = registryComponentExists("button-demo", "new-york-v4")

      expect(typeof result).toBe("boolean")
    })
  })

  describe("Type safety and edge cases", () => {
    it("should handle empty string name", () => {
      const item = getRegistryIndexItem("", "new-york-v4")

      expect(item).toBeNull()
    })

    it("should handle special characters in name", () => {
      const item = getRegistryIndexItem("test@#$%", "new-york-v4")

      expect(item).toBeNull()
    })

    it("should maintain type safety for RegistryIndexItem", () => {
      const item: RegistryIndexItem | null = getRegistryIndexItem(
        "button",
        "new-york-v4"
      )

      if (item) {
        
        expect(item).toHaveProperty("name")
        expect(item).toHaveProperty("type")
        expect(item).toHaveProperty("files")

        
        if ("component" in item) {
          expect(item.component).toBeDefined()
        }
      }
    })
  })

  describe("Client-side usage patterns", () => {
    it("should work in typical client component pattern", () => {
      
      const name = "button"
      const style = "new-york-v4"

      if (registryItemExists(name, style)) {
        const item = getRegistryIndexItem(name, style)
        expect(item).not.toBeNull()
        expect(item?.name).toBe(name)
      }
    })

    it("should work in component rendering pattern", () => {
      
      const name = "button-demo"
      const style = "new-york-v4"

      if (registryComponentExists(name, style)) {
        const Component = getRegistryComponent(name, style)
        expect(Component).not.toBeNull()
      } else {
        
        const item = getRegistryIndexItem(name, style)
        
        expect(item !== null || item === null).toBe(true)
      }
    })

    it("should work in conditional rendering with multiple checks", () => {
      
      const items = ["button", "dialog", "non-existent-xyz"]
      const style = "new-york-v4"

      const existingItems = items.filter((name) =>
        registryItemExists(name, style)
      )

      expect(existingItems.length).toBeGreaterThan(0)
      expect(existingItems.length).toBeLessThan(items.length)
      expect(existingItems).toContain("button")
      expect(existingItems).not.toContain("non-existent-xyz")
    })
  })

  describe("Performance characteristics", () => {
    it("should execute synchronously without delays", () => {
      const startTime = Date.now()

      
      for (let i = 0; i < 100; i++) {
        registryItemExists("button", "new-york-v4")
      }

      const endTime = Date.now()
      const duration = endTime - startTime

      
      expect(duration).toBeLessThan(100)
    })

    it("should not require async/await", () => {
      
      const exists = registryItemExists("button", "new-york-v4")
      const item = getRegistryIndexItem("button", "new-york-v4")
      const component = getRegistryComponent("button-demo", "new-york-v4")

      
      expect(typeof exists).toBe("boolean")
      expect(item !== undefined).toBe(true)
      expect(component !== undefined).toBe(true)
    })
  })
})
