import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "stats-9",
  type: "registry:block",
  description: "Travel statistics with icons and fade animation",
  categories: ["stats", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "stats",
    order: 10,
    palette: "azure",
    typography: "modern",
    tint: "deep",
  },
}
