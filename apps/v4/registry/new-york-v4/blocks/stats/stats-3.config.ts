import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "stats-3",
  type: "registry:block",
  description: "Large counter stats with dark background",
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
