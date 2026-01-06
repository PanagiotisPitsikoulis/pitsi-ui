import va from "@vercel/analytics"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { trackEvent, type Event } from "@/lib/events"

vi.mock("@vercel/analytics", () => ({
  default: {
    track: vi.fn(),
  },
}))

describe("events", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("trackEvent", () => {
    it("should track copy_npm_command event", () => {
      const event: Event = { name: "copy_npm_command" }
      trackEvent(event)
      expect(va.track).toHaveBeenCalledWith("copy_npm_command", undefined)
    })

    it("should track event with properties", () => {
      const event: Event = {
        name: "copy_usage_import_code",
        properties: { component: "button" },
      }
      trackEvent(event)
      expect(va.track).toHaveBeenCalledWith("copy_usage_import_code", {
        component: "button",
      })
    })

    it("should track copy_block_code event", () => {
      const event: Event = {
        name: "copy_block_code",
        properties: { block: "sidebar-01" },
      }
      trackEvent(event)
      expect(va.track).toHaveBeenCalledWith("copy_block_code", {
        block: "sidebar-01",
      })
    })

    it("should track enable_lift_mode event", () => {
      const event: Event = { name: "enable_lift_mode" }
      trackEvent(event)
      expect(va.track).toHaveBeenCalledWith("enable_lift_mode", undefined)
    })

    it("should track copy_chart_code event", () => {
      const event: Event = {
        name: "copy_chart_code",
        properties: { chart: "bar-chart" },
      }
      trackEvent(event)
      expect(va.track).toHaveBeenCalledWith("copy_chart_code", {
        chart: "bar-chart",
      })
    })

    it("should track search_query event", () => {
      const event: Event = {
        name: "search_query",
        properties: { query: "button" },
      }
      trackEvent(event)
      expect(va.track).toHaveBeenCalledWith("search_query", {
        query: "button",
      })
    })

    it("should track set_layout event", () => {
      const event: Event = {
        name: "set_layout",
        properties: { layout: "grid" },
      }
      trackEvent(event)
      expect(va.track).toHaveBeenCalledWith("set_layout", { layout: "grid" })
    })

    it("should handle properties with different types", () => {
      const event: Event = {
        name: "copy_color",
        properties: {
          color: "red",
          index: 5,
          isPrimary: true,
          extra: null,
        },
      }
      trackEvent(event)
      expect(va.track).toHaveBeenCalledWith("copy_color", {
        color: "red",
        index: 5,
        isPrimary: true,
        extra: null,
      })
    })

    it("should silently ignore invalid event name", () => {
      trackEvent({ name: "invalid_event" as any })
      expect(va.track).not.toHaveBeenCalled()
    })
  })
})
