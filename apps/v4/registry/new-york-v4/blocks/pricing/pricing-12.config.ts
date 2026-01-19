import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "pricing-12",
  type: "registry:block",
  description: "Group tour pricing with group size tiers and savings",
  dependencies: ["motion/react"],
  registryDependencies: ["button", "slider", "utils"],
  categories: ["pricing", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "pricing",
    order: 6,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
