import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "page-404-1",
  type: "registry:block",
  description:
    "404 Not Found page with two-column layout, helpful message, and navigation buttons",
  registryDependencies: ["button", "spacer"],
  categories: ["pages", "error"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "pages",
    order: 11,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
