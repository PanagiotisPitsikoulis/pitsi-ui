import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-17",
  type: "registry:block",
  description: "Travel agency horizontal scrolling cards features",
  registryDependencies: [],
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
