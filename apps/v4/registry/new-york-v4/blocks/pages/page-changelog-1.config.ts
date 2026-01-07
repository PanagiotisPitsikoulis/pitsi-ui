import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "page-changelog-1",
  type: "registry:block",
  description:
    "Changelog page with sidebar, icon decoration, and versioned release entries",
  registryDependencies: ["badge", "spacer"],
  categories: ["pages", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "pages",
    order: 3,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
