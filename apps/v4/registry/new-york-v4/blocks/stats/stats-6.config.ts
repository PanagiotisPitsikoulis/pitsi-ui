import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "stats-6",
  type: "registry:block",
  description: "Before/after comparison stats",
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
