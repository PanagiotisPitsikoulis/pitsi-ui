import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "stats-4",
  type: "registry:block",
  description: "Stats cards with icons and change indicators",
  categories: ["stats", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "stats",
    order: 10,
    palette: "sage",
    typography: "elegant",
    tint: "deep",
  },
}
