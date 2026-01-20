import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "stats-8",
  type: "registry:block",
  description: "Component library stats section with large numbers",
  categories: ["stats", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "stats",
    order: 3,
    palette: "slate",
    typography: "modern",
    tint: "tinted",
  },
}
