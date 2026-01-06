import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "stats-5",
  type: "registry:block",
  description: "Timeline milestone stats",
  categories: ["stats", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "stats",
    order: 10,
    palette: "sage",
    typography: "elegant",
    tint: "deep",
  },
}
