import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-dashboard-1",
  type: "registry:block",
  description:
    "Dashboard page with sidebar navigation, stats cards, and upgrade prompt",
  registryDependencies: ["badge", "button", "card"],
  categories: ["application", "dashboard"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "application",
    order: 1,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
