import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "page-roadmap-1",
  type: "registry:block",
  description:
    "Roadmap page with sidebar, status filtering, search, and milestone items",
  registryDependencies: ["badge", "input", "spacer"],
  categories: ["pages", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "pages",
    order: 5,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
