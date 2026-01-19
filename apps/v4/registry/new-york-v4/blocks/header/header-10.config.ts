import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "header-10",
  type: "registry:block",
  description:
    "Scroll-aware sticky header with transparent to solid background transition, logo, navigation, search, and user actions",
  registryDependencies: ["button", "popover"],
  categories: ["header", "landing", "application"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "header",
    order: 1,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
