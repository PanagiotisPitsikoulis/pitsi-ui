import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-19",
  type: "registry:block",
  description: "Travel agency tabbed interface for service categories",
  registryDependencies: ["tabs", "block-header"],
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
