import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-14",
  type: "registry:block",
  description: "Travel agency 3-column grid features with icons",
  registryDependencies: ["block-header"],
  categories: ["features", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "features",
    order: 4,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
