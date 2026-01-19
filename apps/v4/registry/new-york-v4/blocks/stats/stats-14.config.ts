import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "stats-14",
  type: "registry:block",
  description:
    "Travel statistics with two-column layout and detailed descriptions",
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
